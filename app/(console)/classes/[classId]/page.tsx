import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { classForTeacher } from "@/lib/console/authz";
import { rosterForClass } from "@/lib/console/queries";
import {
  UNITS,
  MONTHS,
  isLessonAuthored,
  lessonsForWeek,
  lessonsForMonth,
  resolveBigIdea,
  BIG_IDEA_PRESENTATION,
  type LessonMeta,
} from "@/lib/curriculum";
import { Card } from "@/components/ui/Card";
import { Robi } from "@/components/mascot/Robi";
import { AddStudentForm } from "@/components/console/AddStudentForm";

const TRACK_LABEL: Record<string, string> = { little_sparks: "Little Sparks — ages 4-5", explorers: "AI Explorers — ages 6+" };
const SLOT_LABEL: Record<string, string> = { class: "📖 Class", action_play: "🎮 Action Play", spotlight: "🎤 Spotlight" };

function LessonRow({ lesson, classId, dayLabel }: { lesson: LessonMeta; classId: string; dayLabel: string }) {
  const authored = isLessonAuthored(lesson.key);
  const bigIdea = resolveBigIdea(lesson);
  const p = bigIdea ? BIG_IDEA_PRESENTATION[bigIdea] : null;
  return (
    <div className="flex items-center justify-between gap-2 rounded-xl bg-cream px-3 py-2">
      <div className="flex items-start gap-2">
        {p && (
          <span
            title={`AI idea: ${p.label.en}`}
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm ${p.badgeClass}`}
          >
            {p.emoji}
          </span>
        )}
        <div>
          <p className="text-sm font-semibold text-ink">
            {dayLabel}: {lesson.title.en}
          </p>
          <p className="text-xs text-ink/50">{lesson.englishFocus.en}</p>
        </div>
      </div>
      {authored ? (
        <Link
          href={`/classes/${classId}/lesson/${lesson.key}`}
          className="shrink-0 rounded-full bg-indigo px-3 py-1.5 text-xs font-bold text-white transition-transform hover:scale-105"
        >
          Start →
        </Link>
      ) : (
        <span className="shrink-0 rounded-full bg-ink/10 px-3 py-1.5 text-xs font-bold text-ink/40">Planned</span>
      )}
    </div>
  );
}

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
      </div>

      <Card className="flex items-center gap-4 bg-gradient-to-r from-indigo/10 via-transparent to-transparent">
        <Robi size={56} mood="happy" />
        <div>
          <h1 className="font-display text-2xl font-bold text-indigo-dark">{klass.name}</h1>
          <p className="text-sm text-ink/60">
            {klass.gradeLabel} ·{" "}
            <span className="font-semibold text-ink">{TRACK_LABEL[klass.ageTrack]}</span>
          </p>
        </div>
      </Card>

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
        <div>
          <p className="text-xs font-bold tracking-wide text-ink/50 uppercase">Year Curriculum — 12 Months</p>
          <p className="text-xs text-ink/50">
            Every month: a Class lesson, an Action Play lesson (two games), and an English Spotlight.
          </p>
        </div>
        {MONTHS.map((month) => {
          const lessons = lessonsForMonth(month.monthIndex);
          const p = BIG_IDEA_PRESENTATION[month.bigIdeaFocus];
          return (
            <Card key={month.key} className={`flex flex-col gap-2 border-l-4 ${p.accentClass}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-display font-bold text-ink">
                    Month {month.monthIndex} · {month.title.en}
                  </p>
                  <p className="text-xs text-ink/50">{month.title.ko}</p>
                </div>
                <span
                  className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${p.badgeClass}`}
                >
                  {p.emoji} {p.label.en}
                </span>
              </div>
              <p className={`rounded-xl px-2.5 py-1.5 text-xs font-semibold text-ink/70 ${p.bannerClass} border`}>
                {p.emoji} {month.summary.en}
              </p>
              <div className="mt-1 flex flex-col gap-1.5">
                {lessons.map((lesson) => (
                  <LessonRow key={lesson.key} lesson={lesson} classId={classId} dayLabel={SLOT_LABEL[lesson.slot ?? "class"]} />
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <details className="flex flex-col gap-4 rounded-3xl bg-white/50 p-4">
        <summary className="cursor-pointer text-xs font-bold tracking-wide text-ink/50 uppercase">
          Foundations — Robi&apos;s Classroom (8 weeks, start here first)
        </summary>
        <div className="mt-3 flex flex-col gap-4">
          {UNITS.map((unit) => {
            const lessons = lessonsForWeek(unit.weekRange[0]);
            return (
              <Card key={unit.key} className="flex flex-col gap-2">
                <p className="font-display font-bold text-ink">
                  Week {unit.weekRange[0]} · {unit.title.en}
                </p>
                <p className="text-xs text-ink/50">{unit.title.ko}</p>
                <div className="mt-1 flex flex-col gap-1.5">
                  {lessons.map((lesson) => (
                    <LessonRow key={lesson.key} lesson={lesson} classId={classId} dayLabel={`Day ${lesson.day}`} />
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </details>
    </div>
  );
}
