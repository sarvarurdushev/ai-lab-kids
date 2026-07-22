import { notFound, redirect } from "next/navigation";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { classForTeacher } from "@/lib/console/authz";
import { startOrResumeLessonSession } from "@/lib/console/lessonSessions";
import { getLesson } from "@/lib/curriculum";
import { filterLessonForTrack } from "@/lib/trackContent";
import { allContentOverrides } from "@/lib/content/overrides";
import { PresentationPlayer } from "@/components/presenter/PresentationPlayer";
import { LessonPlanFacts } from "@/components/curriculum/LessonPlanFacts";

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

  const rawLesson = getLesson(lessonKey);
  if (!rawLesson) notFound();
  const lesson = filterLessonForTrack(rawLesson, klass.ageTrack);

  const session = await startOrResumeLessonSession(classId, teacher.id, lesson.unitKey, lesson.key);
  const contentOverrides = await allContentOverrides();

  return (
    <div className="flex flex-col gap-4">
      <details className="rounded-2xl bg-white/70 px-4 py-3 shadow-sm">
        <summary className="cursor-pointer text-xs font-bold uppercase tracking-wide text-ink/50">
          Lesson plan — for the teacher, not projected
        </summary>
        <div className="mt-2">
          <LessonPlanFacts lesson={lesson} />
        </div>
      </details>

      <PresentationPlayer
        lesson={lesson}
        sessionId={session.id}
        classId={classId}
        initialSegmentIndex={session.currentSegmentIndex}
        contentOverrides={contentOverrides}
      />
    </div>
  );
}
