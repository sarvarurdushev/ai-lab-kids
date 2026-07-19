import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { classForTeacher } from "@/lib/console/authz";
import { rosterForClass } from "@/lib/console/queries";
import { UNITS, isLessonAuthored, lessonsForWeek } from "@/lib/curriculum";
import { Card } from "@/components/ui/Card";
import { AddStudentForm } from "@/components/console/AddStudentForm";

export default async function ClassDetailPage({ params }: { params: Promise<{ classId: string }> }) {
  const teacher = await requireTeacher();
  if (!teacher) redirect("/login");

  const { classId } = await params;
  const klass = await classForTeacher(teacher, classId);
  if (!klass) notFound();

  const roster = await rosterForClass(classId);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link href="/dashboard" className="text-sm font-semibold text-ink/50">
          ← All classes
        </Link>
        <h1 className="font-display text-2xl font-bold text-indigo-dark">{klass.name}</h1>
        <p className="text-sm text-ink/60">{klass.gradeLabel}</p>
      </div>

      <Card className="flex flex-col gap-3">
        <p className="text-xs font-bold tracking-wide text-ink/50 uppercase">Roster ({roster.length})</p>
        <div className="flex flex-wrap gap-2">
          {roster.map((s) => (
            <span key={s.id} className="flex items-center gap-1 rounded-full bg-cream px-3 py-1.5 text-sm font-semibold">
              <span>{s.avatarEmoji}</span>
              {s.englishName || s.koreanName}
              {s.englishName && <span className="text-xs text-ink/40">({s.koreanName})</span>}
            </span>
          ))}
          {roster.length === 0 && <p className="text-sm text-ink/50">No students yet — add your first one below.</p>}
        </div>
        <AddStudentForm classId={classId} />
      </Card>

      <div className="flex flex-col gap-4">
        <p className="text-xs font-bold tracking-wide text-ink/50 uppercase">Scope &amp; Sequence — Robi&apos;s Classroom</p>
        {UNITS.map((unit) => {
          const lessons = lessonsForWeek(unit.weekRange[0]);
          return (
            <Card key={unit.key} className="flex flex-col gap-2">
              <p className="font-display font-bold text-ink">
                Week {unit.weekRange[0]} · {unit.title.en}
              </p>
              <p className="text-xs text-ink/50">{unit.title.ko}</p>
              <div className="mt-1 flex flex-col gap-1.5">
                {lessons.map((lesson) => {
                  const authored = isLessonAuthored(lesson.key);
                  return (
                    <div
                      key={lesson.key}
                      className="flex items-center justify-between gap-2 rounded-xl bg-cream px-3 py-2"
                    >
                      <div>
                        <p className="text-sm font-semibold text-ink">
                          Day {lesson.day}: {lesson.title.en}
                        </p>
                        <p className="text-xs text-ink/50">{lesson.englishFocus.en}</p>
                      </div>
                      {authored ? (
                        <Link
                          href={`/classes/${classId}/lesson/${lesson.key}`}
                          className="shrink-0 rounded-full bg-indigo px-3 py-1.5 text-xs font-bold text-white"
                        >
                          Start →
                        </Link>
                      ) : (
                        <span className="shrink-0 rounded-full bg-ink/10 px-3 py-1.5 text-xs font-bold text-ink/40">
                          Planned
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
