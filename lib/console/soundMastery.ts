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

export async function soundMasteryForClass(classId: string): Promise<SoundMasteryRow[]> {
  const rows = await db
    .select({
      grapheme: soundChecks.grapheme,
      timesShown: sql<number>`count(*)::int`,
      timesNeededHint: sql<number>`count(*) filter (where ${soundChecks.neededHint})::int`,
    })
    .from(soundChecks)
    .where(eq(soundChecks.classId, classId))
    .groupBy(soundChecks.grapheme);

  const origins = graphemeOrigins();

  return rows
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
}

/** Records one Sound Drill card view. Called from the client when a card is advanced. */
export async function recordSoundCheck(input: {
  classId: string;
  lessonKey: string;
  grapheme: string;
  neededHint: boolean;
}): Promise<void> {
  await db.insert(soundChecks).values(input);
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
