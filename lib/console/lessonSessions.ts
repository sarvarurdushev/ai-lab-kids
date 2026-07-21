import "server-only";
import { and, desc, eq, isNull } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { lessonSessions } from "@/lib/db/schema";

/** Resumes the most recent open (not-yet-completed) session for this class+lesson, or starts a new one. */
export async function startOrResumeLessonSession(classId: string, teacherAccountId: string, unitKey: string, lessonKey: string) {
  const [existing] = await db
    .select()
    .from(lessonSessions)
    .where(
      and(
        eq(lessonSessions.classId, classId),
        eq(lessonSessions.unitKey, unitKey),
        eq(lessonSessions.lessonKey, lessonKey),
        isNull(lessonSessions.completedAt)
      )
    )
    .orderBy(desc(lessonSessions.startedAt))
    .limit(1);
  if (existing) return existing;

  const [created] = await db
    .insert(lessonSessions)
    .values({ classId, teacherAccountId, unitKey, lessonKey })
    .returning();
  return created;
}

export async function setSegmentIndex(sessionId: string, index: number) {
  await db.update(lessonSessions).set({ currentSegmentIndex: index }).where(eq(lessonSessions.id, sessionId));
}

export async function completeLessonSession(sessionId: string) {
  await db.update(lessonSessions).set({ completedAt: new Date() }).where(eq(lessonSessions.id, sessionId));
}
