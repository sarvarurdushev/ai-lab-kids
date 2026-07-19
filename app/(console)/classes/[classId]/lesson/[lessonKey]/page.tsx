import { notFound, redirect } from "next/navigation";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { classForTeacher } from "@/lib/console/authz";
import { rosterForClass } from "@/lib/console/queries";
import { startOrResumeLessonSession } from "@/lib/console/lessonSessions";
import { getLesson } from "@/lib/curriculum";
import { PresentationPlayer } from "@/components/presenter/PresentationPlayer";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ classId: string; lessonKey: string }>;
}) {
  const teacher = await requireTeacher();
  if (!teacher) redirect("/login");

  const { classId, lessonKey } = await params;
  const klass = await classForTeacher(teacher, classId);
  if (!klass) notFound();

  const lesson = getLesson(lessonKey);
  if (!lesson) notFound();

  const [session, roster] = await Promise.all([
    startOrResumeLessonSession(classId, teacher.id, lesson.unitKey, lesson.key),
    rosterForClass(classId),
  ]);

  return (
    <PresentationPlayer
      lesson={lesson}
      level={klass.koreanSupportLevel}
      sessionId={session.id}
      classId={classId}
      initialSegmentIndex={session.currentSegmentIndex}
      roster={roster}
    />
  );
}
