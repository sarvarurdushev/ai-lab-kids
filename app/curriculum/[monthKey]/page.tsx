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
import { EditorialShell } from "@/components/editorial/EditorialShell";

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
    <EditorialShell className="curriculum-print">
      <header className="no-print sticky top-0 z-10 flex items-center justify-between border-b border-rule bg-white/85 px-6 py-3 backdrop-blur">
        <Link href="/curriculum" className="text-sm font-semibold text-navy/60 hover:text-navy">
          ← Full program guide
        </Link>
        <PrintButton label="🖨️ Print this unit" />
      </header>

      <main className="mx-auto flex w-full max-w-[760px] flex-col gap-8 px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-3 border-b border-rule pb-8">
          <p className="flex items-center gap-1.5 text-xs font-bold tracking-[0.18em] text-navy/55 uppercase">
            <RobotHeadIcon size={14} /> Teacher Pacing Guide
          </p>
          <h1 className="font-editorial al-optical-mid text-[clamp(2rem,5vw,3rem)] leading-[1.05] font-extrabold text-navy">
            Unit {month.monthIndex} · {month.title}
          </h1>
          <span className={`flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold uppercase ${p.badgeClass}`}>
            <BigIdeaIcon bigIdea={month.bigIdeaFocus} size={12} /> {p.label}
          </span>
          <p className="text-sm text-slate">{month.summary}</p>
          <p className="text-sm font-semibold text-navy/80">English focus: {month.englishFocus}</p>
        </div>

        <div className="flex flex-col divide-y divide-rule">
          {lessons.map((lessonMeta) => {
            const role = weekRoleLabel(month.monthIndex, lessonMeta.slot ?? "week1");
            const authored = isLessonAuthored(lessonMeta.key);
            const fullLesson = authored ? getLesson(lessonMeta.key) : undefined;
            const vocabWords = fullLesson
              ? fullLesson.segments.filter((s) => s.type === "vocab").flatMap((s) => s.words)
              : [];
            return (
              <div key={lessonMeta.key} className="print-avoid-break py-5 first:pt-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-editorial font-bold text-navy">
                    {role} — {lessonMeta.title}
                  </p>
                  <p className="text-xs text-slate">{lessonMeta.englishFocus}</p>
                </div>
                {authored && <ActivityChips lessonKey={lessonMeta.key} className="mt-2" />}
                {vocabWords.length > 0 && (
                  <div className="mt-3">
                    <p className="text-[10px] font-bold tracking-[0.1em] text-navy/40 uppercase">Vocabulary</p>
                    <div className="mt-1.5 flex flex-wrap gap-2">
                      {vocabWords.map((w, i) => (
                        <span key={i} className="flex items-center gap-1 rounded-full bg-amber-tint px-2 py-1 text-xs font-semibold text-navy/80">
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

        <div className="no-print pb-4 text-center text-xs text-navy/40">
          Press ⌘/Ctrl + P, or use the print button above, to save this unit as a PDF handout.
        </div>
      </main>
    </EditorialShell>
  );
}
