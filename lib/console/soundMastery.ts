import "server-only";
import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { soundChecks } from "@/lib/db/schema";
import { PHONICS_LESSONS } from "@/lib/phonics";

/**
 * Turns raw Sound Drill hint presses into a reteach list.
 *
 * Deliberately reports "needed a hint N of M times" rather than a mastery
 * percentage or a score. The app delivers lessons to a whole class on one
 * shared screen with no per-child input, so any number claiming to measure
 * an individual child's mastery would be invented. What a hint press
 * genuinely proves is that the room, collectively, could not retrieve that
 * sound — which is exactly what a reteach decision needs and nothing more.
 */
export interface SoundMasteryRow {
  grapheme: string;
  /** Which phonics week first teaches this grapheme, for "go back to week N". */
  taughtInWeek: number | null;
  taughtInLessonKey: string | null;
  timesShown: number;
  timesNeededHint: number;
  /** timesNeededHint / timesShown, 0-1. Only meaningful once timesShown >= 2. */
  hintRate: number;
}

/** Maps each grapheme to the earliest phonics lesson that teaches it. */
function graphemeOrigins(): Map<string, { week: number; lessonKey: string }> {
  const origins = new Map<string, { week: number; lessonKey: string }>();
  PHONICS_LESSONS.forEach((lesson, i) => {
    const week = i + 1;
    for (const segment of lesson.segments) {
      if (segment.type === "phonics_sound" && !origins.has(segment.letters)) {
        origins.set(segment.letters, { week, lessonKey: lesson.key });
      }
    }
  });
  return origins;
}

/**
 * Postgres "undefined_table". The sound_checks table arrived in a later
 * migration than the code that reads it, so a checkout that has pulled the
 * code but not yet run `npm run db:migrate` would otherwise crash the whole
 * page with a stack trace in a teacher's face. Detected and reported as a
 * state the UI can explain instead.
 */
const UNDEFINED_TABLE = "42P01";

function isMissingTable(err: unknown): boolean {
  // drizzle wraps the driver error, so check the cause chain as well as the top level.
  const codes = [err, (err as { cause?: unknown })?.cause].map(
    (e) => (e as { code?: string } | undefined)?.code
  );
  return codes.includes(UNDEFINED_TABLE);
}

export type SoundMasteryResult =
  | { status: "ok"; rows: SoundMasteryRow[] }
  | { status: "needs_migration" };

export async function soundMasteryForClass(classId: string): Promise<SoundMasteryResult> {
  let rows: { grapheme: string; timesShown: number; timesNeededHint: number }[];
  try {
    rows = await db
      .select({
        grapheme: soundChecks.grapheme,
        timesShown: sql<number>`count(*)::int`,
        timesNeededHint: sql<number>`count(*) filter (where ${soundChecks.neededHint})::int`,
      })
      .from(soundChecks)
      .where(eq(soundChecks.classId, classId))
      .groupBy(soundChecks.grapheme);
  } catch (err) {
    if (isMissingTable(err)) return { status: "needs_migration" };
    throw err;
  }

  const origins = graphemeOrigins();

  const mapped = rows
    .map((r) => {
      const origin = origins.get(r.grapheme);
      return {
        grapheme: r.grapheme,
        taughtInWeek: origin?.week ?? null,
        taughtInLessonKey: origin?.lessonKey ?? null,
        timesShown: r.timesShown,
        timesNeededHint: r.timesNeededHint,
        hintRate: r.timesShown > 0 ? r.timesNeededHint / r.timesShown : 0,
      };
    })
    // Shakiest first — that's the whole point of the list.
    .sort((a, b) => b.hintRate - a.hintRate || b.timesNeededHint - a.timesNeededHint);

  return { status: "ok", rows: mapped };
}

/**
 * Records one Sound Drill card view. Returns false (rather than throwing) if
 * the table hasn't been migrated yet — a lesson in progress must never break
 * because progress logging isn't set up.
 */
export async function recordSoundCheck(input: {
  classId: string;
  lessonKey: string;
  grapheme: string;
  neededHint: boolean;
}): Promise<boolean> {
  try {
    await db.insert(soundChecks).values(input);
    return true;
  } catch (err) {
    if (isMissingTable(err)) return false;
    throw err;
  }
}

/** Most recent raw checks, for a teacher who wants to see the actual history rather than the rollup. */
export async function recentSoundChecks(classId: string, limit = 20) {
  return db
    .select()
    .from(soundChecks)
    .where(and(eq(soundChecks.classId, classId)))
    .orderBy(desc(soundChecks.createdAt))
    .limit(limit);
}
