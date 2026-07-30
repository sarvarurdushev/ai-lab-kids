import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { classes, schools } from "@/lib/db/schema";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { startClassSchema } from "@/lib/validation/console";

const AGE_TRACK_LABEL: Record<string, string> = { little_sparks: "4-5 year olds", explorers: "6+ year olds" };

// Teachers don't configure a class up front — they just pick an age track and
// go. Each teacher gets at most one class per track, reused across sessions
// so lesson progress carries over; the first pick for a track creates it.
export async function POST(request: NextRequest) {
  const teacher = await requireTeacher();
  if (!teacher) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const body = await request.json().catch(() => null);
  const parsed = startClassSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const { ageTrack } = parsed.data;

  const [existing] = await db
    .select()
    .from(classes)
    .where(and(eq(classes.teacherAccountId, teacher.id), eq(classes.ageTrack, ageTrack)))
    .limit(1);
  if (existing) return NextResponse.json(existing);

  const [school] = await db.select().from(schools).where(eq(schools.organizationId, teacher.organizationId)).limit(1);
  if (!school) {
    return NextResponse.json({ error: "Ask your organization admin to set up a school first." }, { status: 409 });
  }

  const [created] = await db
    .insert(classes)
    .values({
      schoolId: school.id,
      teacherAccountId: teacher.id,
      name: AGE_TRACK_LABEL[ageTrack],
      gradeLabel: AGE_TRACK_LABEL[ageTrack],
      ageTrack,
    })
    .returning();
  return NextResponse.json(created);
}
