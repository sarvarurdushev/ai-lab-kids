import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { teacherAccounts } from "@/lib/db/schema";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";
import { teacherApprovalSchema } from "@/lib/validation/console";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ teacherId: string }> }) {
  const admin = await requireOrgAdmin();
  if (!admin) return NextResponse.json({ error: "Not authorized" }, { status: 403 });

  const { teacherId } = await params;
  const body = await request.json().catch(() => null);
  const parsed = teacherApprovalSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const [pendingTeacher] = await db
    .select()
    .from(teacherAccounts)
    .where(
      and(
        eq(teacherAccounts.id, teacherId),
        eq(teacherAccounts.organizationId, admin.organizationId),
        eq(teacherAccounts.role, "pending")
      )
    )
    .limit(1);
  if (!pendingTeacher) return NextResponse.json({ error: "Pending teacher not found" }, { status: 404 });

  if (parsed.data.action === "approve") {
    await db.update(teacherAccounts).set({ role: "teacher" }).where(eq(teacherAccounts.id, teacherId));
  } else {
    await db.delete(teacherAccounts).where(eq(teacherAccounts.id, teacherId));
  }

  return NextResponse.json({ ok: true });
}
