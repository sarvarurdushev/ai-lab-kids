import "server-only";
import { and, eq, gte, sql, type SQL } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { loginAttempts } from "@/lib/db/schema";

const EMAIL_WINDOW_MINUTES = 15;
const MAX_FAILURES_PER_EMAIL = 5;
const IP_WINDOW_MINUTES = 60;
const MAX_FAILURES_PER_IP = 20;

async function countFailedAttempts(where: SQL, minutes: number) {
  const since = new Date(Date.now() - minutes * 60_000);
  const rows = await db
    .select({ count: sql<number>`count(*)` })
    .from(loginAttempts)
    .where(and(where, eq(loginAttempts.success, false), gte(loginAttempts.attemptedAt, since)));
  return Number(rows[0]?.count ?? 0);
}

export async function recordLoginAttempt(email: string, ip: string | null, success: boolean) {
  await db.insert(loginAttempts).values({ email, ip, success });
}

export async function isIpRateLimited(ip: string | null): Promise<boolean> {
  if (!ip) return false;
  const count = await countFailedAttempts(eq(loginAttempts.ip, ip), IP_WINDOW_MINUTES);
  return count >= MAX_FAILURES_PER_IP;
}

export async function isEmailRateLimited(email: string): Promise<boolean> {
  const count = await countFailedAttempts(eq(loginAttempts.email, email), EMAIL_WINDOW_MINUTES);
  return count >= MAX_FAILURES_PER_EMAIL;
}
