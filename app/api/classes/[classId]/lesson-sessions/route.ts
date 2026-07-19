import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { classForTeacher } from "@/lib/console/authz";
import { startOrResumeLessonSession } from "@/lib/console/lessonSessions";
import { startLessonSessionSchema } from "@/lib/validation/console";

export async function POST(request: NextRequest, { params }: { params: Promise<{ classId: string }> }) {
  const teacher = await requireTeacher();
  if (!teacher) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const { classId } = await params;
  const klass = await classForTeacher(teacher, classId);
  if (!klass) return NextResponse.json({ error: "Class not found" }, { status: 404 });

  const body = await request.json().catch(() => null);
  const parsed = startLessonSessionSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const session = await startOrResumeLessonSession(classId, teacher.id, parsed.data.unitKey, parsed.data.lessonKey);
  return NextResponse.json(session);
}
