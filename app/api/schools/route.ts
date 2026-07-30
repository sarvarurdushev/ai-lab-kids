import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/lib/db/client";
import { schools } from "@/lib/db/schema";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";
import { createSchoolSchema } from "@/lib/validation/console";

export async function POST(request: NextRequest) {
  const admin = await requireOrgAdmin();
  if (!admin) return NextResponse.json({ error: "Not authorized" }, { status: 403 });

  const body = await request.json().catch(() => null);
  const parsed = createSchoolSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const [created] = await db
    .insert(schools)
    .values({ organizationId: admin.organizationId, name: parsed.data.name })
    .returning();
  return NextResponse.json(created);
}
