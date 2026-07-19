import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { lessonSessionForTeacher } from "@/lib/console/authz";
import { completeLessonSession, setSegmentIndex } from "@/lib/console/lessonSessions";
import { updateLessonSessionSchema } from "@/lib/validation/console";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ sessionId: string }> }) {
  const teacher = await requireTeacher();
  if (!teacher) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const { sessionId } = await params;
  const session = await lessonSessionForTeacher(teacher, sessionId);
  if (!session) return NextResponse.json({ error: "Session not found" }, { status: 404 });

  const body = await request.json().catch(() => null);
  const parsed = updateLessonSessionSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  if (parsed.data.currentSegmentIndex !== undefined) {
    await setSegmentIndex(sessionId, parsed.data.currentSegmentIndex);
  }
  if (parsed.data.completed) {
    await completeLessonSession(sessionId);
  }
  return NextResponse.json({ ok: true });
}
