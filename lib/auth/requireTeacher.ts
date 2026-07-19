import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { teacherAccounts } from "@/lib/db/schema";
import { getSession } from "./session";

export type AuthedTeacher = typeof teacherAccounts.$inferSelect;

/**
 * Verifies the session cookie and loads the teacher/org-admin account row in
 * one step. tokenVersion equality is what makes teacherAccounts.tokenVersion
 * a working force-revocation hook: bumping it invalidates every outstanding
 * cookie the next time this function runs.
 */
export async function requireTeacher(): Promise<AuthedTeacher | null> {
  const session = await getSession();
  if (!session) return null;
  const [teacher] = await db
    .select()
    .from(teacherAccounts)
    .where(and(eq(teacherAccounts.id, session.tid), eq(teacherAccounts.tokenVersion, session.tv)))
    .limit(1);
  return teacher ?? null;
}

/** Same as requireTeacher(), but also asserts the org_admin role. */
export async function requireOrgAdmin(): Promise<AuthedTeacher | null> {
  const teacher = await requireTeacher();
  if (!teacher || teacher.role !== "org_admin") return null;
  return teacher;
}
