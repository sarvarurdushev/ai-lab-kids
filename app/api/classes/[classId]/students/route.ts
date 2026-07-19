import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/lib/db/client";
import { students } from "@/lib/db/schema";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { classForTeacher } from "@/lib/console/authz";
import { addStudentSchema } from "@/lib/validation/console";

export async function POST(request: NextRequest, { params }: { params: Promise<{ classId: string }> }) {
  const teacher = await requireTeacher();
  if (!teacher) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const { classId } = await params;
  const klass = await classForTeacher(teacher, classId);
  if (!klass) return NextResponse.json({ error: "Class not found" }, { status: 404 });

  const body = await request.json().catch(() => null);
  const parsed = addStudentSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const [created] = await db
    .insert(students)
    .values({
      classId,
      koreanName: parsed.data.koreanName,
      englishName: parsed.data.englishName,
      avatarEmoji: parsed.data.avatarEmoji,
    })
    .returning();
  return NextResponse.json(created);
}
