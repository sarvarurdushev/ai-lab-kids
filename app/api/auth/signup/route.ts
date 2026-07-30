import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { teacherAccounts } from "@/lib/db/schema";
import { createSession } from "@/lib/auth/session";
import { hashPassword } from "@/lib/auth/password";
import { isIpRateLimited, recordLoginAttempt } from "@/lib/auth/rateLimit";
import { signupSchema } from "@/lib/validation/auth";
import { getClientIp } from "@/lib/api/http";
import { getOrCreateOrganization } from "@/lib/db/getOrCreateOrganization";
import { DESIGNATED_ADMIN_EMAIL } from "@/lib/auth/designatedAdmin";

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
  // practice only) organization on record, created on the fly if this is the
  // very first account anyone has ever signed up on this deployment.
  const org = await getOrCreateOrganization();

  // Everyone can sign up, but only an approved teacher/org-admin can reach
  // the console — see app/(console)/layout.tsx's pending-role redirect. The
  // one exception: the designated admin email always lands with full access
  // immediately, so there's no chicken-and-egg problem of needing an
  // already-approved admin to approve the first admin.
  const role = email === DESIGNATED_ADMIN_EMAIL ? "org_admin" : "pending";

  const passwordHash = await hashPassword(password);
  const [account] = await db
    .insert(teacherAccounts)
    .values({ organizationId: org.id, email, passwordHash, name, role })
    .returning();

  await recordLoginAttempt(email, ip, true);
  await createSession(account.id, account.tokenVersion);

  return NextResponse.json({ id: account.id, name: account.name, role: account.role });
}
