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

  await createSession(teacher.id, teacher.tokenVersion);

  return NextResponse.json({ id: teacher.id, name: teacher.name, role: teacher.role });
}
