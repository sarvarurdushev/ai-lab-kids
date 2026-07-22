import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { asc, eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { teacherAccounts, organizations } from "@/lib/db/schema";
import { createSession } from "@/lib/auth/session";
import { hashPassword } from "@/lib/auth/password";
import { isIpRateLimited, recordLoginAttempt } from "@/lib/auth/rateLimit";
import { signupSchema } from "@/lib/validation/auth";
import { getClientIp } from "@/lib/api/http";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = signupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const { name, email, password } = parsed.data;
  const ip = getClientIp(request);

  if (await isIpRateLimited(ip)) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  const [existing] = await db.select({ id: teacherAccounts.id }).from(teacherAccounts).where(eq(teacherAccounts.email, email)).limit(1);
  if (existing) {
    await recordLoginAttempt(email, ip, false);
    return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
  }

  // Every organization on this deployment shares the same curriculum — there
  // is no org-picker in the product, so a new signup joins the first (and in
  // practice only) organization on record.
  const [org] = await db.select().from(organizations).orderBy(asc(organizations.createdAt)).limit(1);
  if (!org) {
    return NextResponse.json({ error: "No organization is set up yet. Contact an administrator." }, { status: 500 });
  }

  const passwordHash = await hashPassword(password);
  const [account] = await db
    .insert(teacherAccounts)
    .values({ organizationId: org.id, email, passwordHash, name, role: "pending" })
    .returning();

  await recordLoginAttempt(email, ip, true);
  await createSession(account.id, account.tokenVersion);

  return NextResponse.json({ id: account.id, name: account.name, role: account.role });
}
