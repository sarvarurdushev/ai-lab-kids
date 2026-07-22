import "server-only";
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { classes, schools, teacherAccounts, organizations } from "@/lib/db/schema";
import type { AuthedTeacher } from "@/lib/auth/requireTeacher";

export async function classesVisibleToTeacher(teacher: AuthedTeacher) {
  const rows = await db
    .select({ class: classes, school: schools, teacherName: teacherAccounts.name })
    .from(classes)
    .innerJoin(schools, eq(classes.schoolId, schools.id))
    .innerJoin(teacherAccounts, eq(classes.teacherAccountId, teacherAccounts.id))
    .where(eq(schools.organizationId, teacher.organizationId));
  const scoped = teacher.role === "org_admin" ? rows : rows.filter((r) => r.class.teacherAccountId === teacher.id);
  return scoped.map((r) => ({ ...r.class, schoolName: r.school.name, teacherName: r.teacherName }));
}

export async function schoolsForOrg(organizationId: string) {
  return db.select().from(schools).where(eq(schools.organizationId, organizationId)).orderBy(asc(schools.name));
}

export async function getOrganization(organizationId: string) {
  const [org] = await db.select().from(organizations).where(eq(organizations.id, organizationId)).limit(1);
  return org;
}

export async function pendingTeachersForOrg(organizationId: string) {
  return db
    .select({ id: teacherAccounts.id, name: teacherAccounts.name, email: teacherAccounts.email, createdAt: teacherAccounts.createdAt })
    .from(teacherAccounts)
    .where(and(eq(teacherAccounts.organizationId, organizationId), eq(teacherAccounts.role, "pending")))
    .orderBy(asc(teacherAccounts.createdAt));
}
