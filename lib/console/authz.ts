import "server-only";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { classes, lessonSessions, schools } from "@/lib/db/schema";
import type { AuthedTeacher } from "@/lib/auth/requireTeacher";

/** Loads a class and confirms the given teacher may access it: org_admins can access any class in their org, teachers only their own. */
export async function classForTeacher(teacher: AuthedTeacher, classId: string) {
  const [row] = await db
    .select({ class: classes, school: schools })
    .from(classes)
    .innerJoin(schools, eq(classes.schoolId, schools.id))
    .where(eq(classes.id, classId))
    .limit(1);
  if (!row) return null;
  if (row.school.organizationId !== teacher.organizationId) return null;
  if (teacher.role !== "org_admin" && row.class.teacherAccountId !== teacher.id) return null;
  return row.class;
}

/** Loads a lesson session and confirms the given teacher may access its class. */
export async function lessonSessionForTeacher(teacher: AuthedTeacher, sessionId: string) {
  const [session] = await db.select().from(lessonSessions).where(eq(lessonSessions.id, sessionId)).limit(1);
  if (!session) return null;
  const klass = await classForTeacher(teacher, session.classId);
  if (!klass) return null;
  return session;
}
