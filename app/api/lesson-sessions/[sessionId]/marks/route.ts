import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { lessonSessionForTeacher } from "@/lib/console/authz";
import { recordParticipationMark } from "@/lib/console/lessonSessions";
import { recordMarkSchema } from "@/lib/validation/console";

export async function POST(request: NextRequest, { params }: { params: Promise<{ sessionId: string }> }) {
  const teacher = await requireTeacher();
  if (!teacher) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const { sessionId } = await params;
  const session = await lessonSessionForTeacher(teacher, sessionId);
  if (!session) return NextResponse.json({ error: "Session not found" }, { status: 404 });

  const body = await request.json().catch(() => null);
  const parsed = recordMarkSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  await recordParticipationMark(
    sessionId,
    parsed.data.activityKey,
    parsed.data.mark,
    parsed.data.studentId ?? null,
    parsed.data.note
  );
  return NextResponse.json({ ok: true });
}
