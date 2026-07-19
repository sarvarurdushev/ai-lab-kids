import "server-only";
import { eq, sql } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { classes, lessonSessions, participationMarks, schools, students, teacherAccounts } from "@/lib/db/schema";

export interface ClassReportRow {
  classId: string;
  className: string;
  schoolName: string;
  teacherName: string;
  studentCount: number;
  lessonsCompleted: number;
  lessonsInProgress: number;
  marksGotIt: number;
  marksNeedsPractice: number;
  marksExcelling: number;
}

/** Cross-class rollup for the organization-admin reporting dashboard. One row per class, aggregated from lesson sessions + participation marks. */
export async function orgReportingSummary(organizationId: string): Promise<ClassReportRow[]> {
  const classRows = await db
    .select({
      id: classes.id,
      name: classes.name,
      schoolName: schools.name,
      teacherName: teacherAccounts.name,
    })
    .from(classes)
    .innerJoin(schools, eq(classes.schoolId, schools.id))
    .innerJoin(teacherAccounts, eq(classes.teacherAccountId, teacherAccounts.id))
    .where(eq(schools.organizationId, organizationId));

  if (classRows.length === 0) return [];

  const [studentCounts, sessionCounts, markCounts] = await Promise.all([
    db
      .select({ classId: students.classId, count: sql<number>`count(*)` })
      .from(students)
      .groupBy(students.classId),
    db
      .select({
        classId: lessonSessions.classId,
        completed: sql<number>`count(*) filter (where ${lessonSessions.completedAt} is not null)`,
        inProgress: sql<number>`count(*) filter (where ${lessonSessions.completedAt} is null)`,
      })
      .from(lessonSessions)
      .groupBy(lessonSessions.classId),
    db
      .select({
        classId: lessonSessions.classId,
        mark: participationMarks.mark,
        count: sql<number>`count(*)`,
      })
      .from(participationMarks)
      .innerJoin(lessonSessions, eq(participationMarks.lessonSessionId, lessonSessions.id))
      .groupBy(lessonSessions.classId, participationMarks.mark),
  ]);

  const studentCountByClass = new Map(studentCounts.map((r) => [r.classId, Number(r.count)]));
  const sessionCountByClass = new Map(sessionCounts.map((r) => [r.classId, r]));
  const marksByClass = new Map<string, Record<string, number>>();
  for (const row of markCounts) {
    const existing = marksByClass.get(row.classId) ?? {};
    existing[row.mark] = Number(row.count);
    marksByClass.set(row.classId, existing);
  }

  return classRows.map((c) => {
    const sessions = sessionCountByClass.get(c.id);
    const marks = marksByClass.get(c.id) ?? {};
    return {
      classId: c.id,
      className: c.name,
      schoolName: c.schoolName,
      teacherName: c.teacherName,
      studentCount: studentCountByClass.get(c.id) ?? 0,
      lessonsCompleted: Number(sessions?.completed ?? 0),
      lessonsInProgress: Number(sessions?.inProgress ?? 0),
      marksGotIt: marks.got_it ?? 0,
      marksNeedsPractice: marks.needs_practice ?? 0,
      marksExcelling: marks.excelling ?? 0,
    };
  });
}
