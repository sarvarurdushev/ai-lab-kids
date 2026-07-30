import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { teacherAccounts } from "@/lib/db/schema";
import { createSession } from "@/lib/auth/session";
import { verifyPassword } from "@/lib/auth/password";
import { isEmailRateLimited, isIpRateLimited, recordLoginAttempt } from "@/lib/auth/rateLimit";
import { loginSchema } from "@/lib/validation/auth";
import { getClientIp } from "@/lib/api/http";
import { DESIGNATED_ADMIN_EMAIL } from "@/lib/auth/designatedAdmin";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const { email, password } = parsed.data;
  const ip = getClientIp(request);

  if ((await isIpRateLimited(ip)) || (await isEmailRateLimited(email))) {
    return NextResponse.json(
      { error: "Too many attempts. Try again later." },
      { status: 429 }
    );
  }

  const [teacher] = await db.select().from(teacherAccounts).where(eq(teacherAccounts.email, email)).limit(1);
  const ok = teacher ? await verifyPassword(password, teacher.passwordHash) : false;
  await recordLoginAttempt(email, ip, ok);

  if (!teacher || !ok) {
    return NextResponse.json({ error: "Incorrect email or password" }, { status: 401 });
  }

  // The designated admin always has full access, no matter what role their
  // account happens to hold — this heals any account created before this
  // email was designated, or one an org_admin accidentally demoted.
  let { role } = teacher;
  if (teacher.email === DESIGNATED_ADMIN_EMAIL && role !== "org_admin") {
    role = "org_admin";
    await db.update(teacherAccounts).set({ role }).where(eq(teacherAccounts.id, teacher.id));
  }

  await createSession(teacher.id, teacher.tokenVersion);

  return NextResponse.json({ id: teacher.id, name: teacher.name, role });
}
