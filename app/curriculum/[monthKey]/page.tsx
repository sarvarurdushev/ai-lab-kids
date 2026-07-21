import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MONTHS,
  getMonth,
  lessonsForMonth,
  getLesson,
  BIG_IDEA_PRESENTATION,
  weekRoleLabel,
  isLessonAuthored,
} from "@/lib/curriculum";
import { BigIdeaIcon } from "@/components/curriculum/BigIdeaIcon";
import { ActivityChips } from "@/components/curriculum/ActivityChips";
import { LessonPlanFacts } from "@/components/curriculum/LessonPlanFacts";
import { PrintButton } from "@/components/curriculum/PrintButton";
import { RobotHeadIcon } from "@/components/icons";

export function generateStaticParams() {
  return MONTHS.map((m) => ({ monthKey: m.key }));
}

export async function generateMetadata({ params }: { params: Promise<{ monthKey: string }> }): Promise<Metadata> {
  const { monthKey } = await params;
  const month = getMonth(monthKey);
  return {
    title: month ? `Unit ${month.monthIndex} · ${month.title} — Pacing Guide — AI Lab for Kids` : "Pacing Guide — AI Lab for Kids",
  };
}

export default async function UnitPacingGuidePage({ params }: { params: Promise<{ monthKey: string }> }) {
  const { monthKey } = await params;
  const month = getMonth(monthKey);
  if (!month) notFound();

  const lessons = lessonsForMonth(month.monthIndex);
  const p = BIG_IDEA_PRESENTATION[month.bigIdeaFocus];

  return (
    <div className="curriculum-print min-h-full bg-gradient-to-b from-indigo/10 via-cream to-cream">
      <header className="no-print sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-white/85 px-6 py-3 backdrop-blur">
        <Link href="/curriculum" className="text-sm font-semibold text-ink/50 hover:text-ink">
          ← Full program guide
        </Link>
        <PrintButton label="🖨️ Print this unit" />
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-indigo-dark">
            <RobotHeadIcon size={14} /> Teacher Pacing Guide
          </p>
          <h1 className="font-display text-3xl font-bold text-ink">
            Unit {month.monthIndex} · {month.title}
          </h1>
          <span className={`flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold uppercase ${p.badgeClass}`}>
            <BigIdeaIcon bigIdea={month.bigIdeaFocus} size={12} /> {p.label}
          </span>
          <p className="text-sm text-ink/60">{month.summary}</p>
          <p className="text-sm font-semibold text-ink/70">English focus: {month.englishFocus}</p>
        </div>

        <div className="flex flex-col gap-4">
          {lessons.map((lessonMeta) => {
            const role = weekRoleLabel(month.monthIndex, lessonMeta.slot ?? "week1");
            const authored = isLessonAuthored(lessonMeta.key);
            const fullLesson = authored ? getLesson(lessonMeta.key) : undefined;
            const vocabWords = fullLesson
              ? fullLesson.segments.filter((s) => s.type === "vocab").flatMap((s) => s.words)
              : [];
            return (
              <div key={lessonMeta.key} className="print-avoid-break rounded-2xl bg-white/85 p-4 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display font-bold text-ink">
                    {role} — {lessonMeta.title}
                  </p>
                  <p className="text-xs text-ink/50">{lessonMeta.englishFocus}</p>
                </div>
                {authored && <ActivityChips lessonKey={lessonMeta.key} className="mt-2" />}
                {vocabWords.length > 0 && (
                  <div className="mt-3">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">Vocabulary</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {vocabWords.map((w, i) => (
                        <span key={i} className="flex items-center gap-1 rounded-full bg-cream px-2 py-1 text-xs font-semibold text-ink/70">
                          <span>{w.emoji}</span> {w.word}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-3">
                  <LessonPlanFacts lesson={lessonMeta} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="no-print pb-4 text-center text-xs text-ink/40">
          Press ⌘/Ctrl + P, or use the print button above, to save this unit as a PDF handout.
        </div>
      </main>
    </div>
  );
}
