import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { classForTeacher } from "@/lib/console/authz";
import { recordSoundCheck } from "@/lib/console/soundMastery";
import { soundCheckSchema } from "@/lib/validation/console";

// Records one Sound Drill card view (and whether the class needed the hint).
// Fire-and-forget from the client: a failed write must never interrupt a
// lesson in progress, so the engine ignores the response entirely.
export async function POST(request: NextRequest, { params }: { params: Promise<{ classId: string }> }) {
  const teacher = await requireTeacher();
  if (!teacher) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const { classId } = await params;
  const klass = await classForTeacher(teacher, classId);
  if (!klass) return NextResponse.json({ error: "Class not found" }, { status: 404 });

  const body = await request.json().catch(() => null);
  const parsed = soundCheckSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  await recordSoundCheck({ classId, ...parsed.data });
  return NextResponse.json({ ok: true });
}
