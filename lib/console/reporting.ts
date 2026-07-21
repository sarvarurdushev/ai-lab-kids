import "server-only";
import { eq, sql } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { classes, lessonSessions, schools, teacherAccounts } from "@/lib/db/schema";

export interface ClassReportRow {
  classId: string;
  className: string;
  schoolName: string;
  teacherName: string;
  lessonsCompleted: number;
  lessonsInProgress: number;
}

/** Cross-class rollup for the organization-admin reporting dashboard. One row per class, aggregated from lesson sessions. */
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

  const sessionCounts = await db
    .select({
      classId: lessonSessions.classId,
      completed: sql<number>`count(*) filter (where ${lessonSessions.completedAt} is not null)`,
      inProgress: sql<number>`count(*) filter (where ${lessonSessions.completedAt} is null)`,
    })
    .from(lessonSessions)
    .groupBy(lessonSessions.classId);

  const sessionCountByClass = new Map(sessionCounts.map((r) => [r.classId, r]));

  return classRows.map((c) => {
    const sessions = sessionCountByClass.get(c.id);
    return {
      classId: c.id,
      className: c.name,
      schoolName: c.schoolName,
      teacherName: c.teacherName,
      lessonsCompleted: Number(sessions?.completed ?? 0),
      lessonsInProgress: Number(sessions?.inProgress ?? 0),
    };
  });
}
