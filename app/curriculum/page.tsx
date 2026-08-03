import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MONTHS,
  UNITS,
  TERMS,
  lessonsForMonth,
  lessonsForWeek,
  curriculumStats,
  bigIdeaCoverage,
  BIG_IDEA_PRESENTATION,
  MONTH_IMAGE,
  STANDARDS_ALIGNMENT,
  CHECKPOINT_MONTHS,
  PROGRAM_ARC,
  weekRoleLabel,
  isLessonAuthored,
} from "@/lib/curriculum";
import { BigIdeaIcon } from "@/components/curriculum/BigIdeaIcon";
import { ActivityChips } from "@/components/curriculum/ActivityChips";
import { LessonPlanFacts } from "@/components/curriculum/LessonPlanFacts";
import { PrintExpandDetails } from "@/components/curriculum/PrintExpandDetails";
import { PrintButton } from "@/components/curriculum/PrintButton";
import { RobotHeadIcon, CheckCircleIcon, XCircleIcon, GlobeIcon, SparkleIcon } from "@/components/icons";
import { EditorialShell } from "@/components/editorial/EditorialShell";
import { EditorialNav } from "@/components/editorial/EditorialNav";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { Rule } from "@/components/editorial/Rule";
import { PillTag } from "@/components/editorial/PillTag";
import { StatFigures } from "@/components/editorial/StatFigures";

export const metadata: Metadata = {
  title: "Program Guide — AI Lab for Kids",
  description:
    "The full year-long AI-literacy + English curriculum for Korean elementary classrooms: objectives, standards, and activities for every lesson.",
};

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">{eyebrow}</p>
      <h2 className="font-editorial al-optical-mid mt-3 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] font-bold text-navy">
        {title}
      </h2>
    </div>
  );
}

const TRACK_COPY = [
  { label: "4-5 year olds", blurb: "Big pictures, read-aloud everything, no clock ticking. Bonus words/lines are skipped." },
  { label: "6+ year olds", blurb: "The same 48-lesson curriculum plus bonus vocabulary and a fuller AI-vocabulary layer, for early readers." },
];

export default function CurriculumPage() {
  const stats = curriculumStats();
  const coverage = bigIdeaCoverage();

  return (
    <EditorialShell className="curriculum-print">
      <PrintExpandDetails />

      <EditorialNav
        printHidden
        rightSlot={
          <>
            <Link href="/dashboard" className="text-sm font-semibold text-navy/70 hover:text-navy">
              Teacher console →
            </Link>
            <PrintButton />
          </>
        }
      />

      <main className="mx-auto flex w-full max-w-[900px] flex-col gap-16 px-6 py-16 sm:px-8 sm:py-24">
        {/* 1. Header */}
        <section className="flex flex-col items-center gap-6 text-center">
          <p className="flex items-center gap-1.5 text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">
            <RobotHeadIcon size={14} /> Program Guide
          </p>
          <h1 className="font-editorial al-optical-display text-[clamp(2.5rem,7vw,4.5rem)] leading-[1] font-extrabold text-navy">
            AI Lab for Kids
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate">
            English through AI literacy, for Korean elementary classrooms, ages 4-8 — teacher-led, one screen,
            standards-mapped from the first lesson to the last.
          </p>
          <StatFigures
            className="mt-6 w-full max-w-2xl"
            stats={[
              { value: stats.lessons, label: "fully-authored lessons", accent: "navy" },
              { value: stats.activities, label: `activities · ${stats.engineCount} engine types`, accent: "amber" },
              { value: stats.aiLabActivities, label: "AI Lab activities this year", accent: "sky" },
              { value: "5/5", label: "AI4K12 Big Ideas covered", accent: "coral" },
            ]}
          />
        </section>

        <Rule />

        {/* 2. How the program is built */}
        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Program design" title="How the program is built" />
          <div className="grid grid-cols-1 gap-6 border-t border-rule pt-6 sm:grid-cols-3">
            <div>
              <p className="font-editorial font-bold text-navy">1. Foundations</p>
              <p className="mt-1 text-sm text-slate">
                8 weeks · 24 lessons. &quot;Vora&apos;s Classroom&quot; — greetings, classroom basics, and the first AI
                ideas, at CEFR pre-A1/A1.
              </p>
            </div>
            <div>
              <p className="font-editorial font-bold text-navy">2. Year curriculum</p>
              <p className="mt-1 text-sm text-slate">
                4 terms · 12 themed units · 48 lessons. One AI4K12 big idea per month, paired with a seasonal English
                theme.
              </p>
            </div>
            <div>
              <p className="font-editorial font-bold text-navy">3. Capstone</p>
              <p className="mt-1 text-sm text-slate">
                Month 12 reviews every game and every AI idea from the whole year, alongside the year&apos;s final
                listening checkpoint.
              </p>
            </div>
          </div>
          <p className="border-l-2 border-amber bg-amber-tint px-5 py-4 text-sm font-semibold text-navy">{PROGRAM_ARC}</p>

          <div className="mt-2 flex flex-col gap-3">
            <p className="text-sm font-bold text-navy">Every lesson follows the same anatomy</p>
            <div className="flex flex-wrap items-center gap-2">
              {["Warm-up", "Vocabulary", "AI concept", "Activity ×2-3", "Formative check", "Wrap-up"].map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  {i > 0 && <span className="text-navy/25">→</span>}
                  <PillTag accent="navy" tilt={0}>
                    {step}
                  </PillTag>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <p className="text-sm font-bold text-navy">Each month, every week has a different job</p>
            <div className="grid grid-cols-1 gap-3 border-t border-rule pt-4 sm:grid-cols-4">
              {(["week1", "week2", "week3", "week4"] as const).map((slot) => (
                <div key={slot} className="text-center">
                  <p className="text-sm font-bold text-sky-ink">{weekRoleLabel(7, slot)}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate">
              Week 4 doubles as a quarterly listening checkpoint on Months 3, 6, 9, and 12, reviewing a pronunciation
              contrast this age group commonly finds tricky.
            </p>
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <p className="text-sm font-bold text-navy">Two age tracks, one curriculum</p>
            <div className="grid grid-cols-1 gap-6 border-t border-rule pt-4 sm:grid-cols-2">
              {TRACK_COPY.map((t) => (
                <div key={t.label}>
                  <p className="font-semibold text-navy">{t.label}</p>
                  <p className="mt-1 text-sm text-slate">{t.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* 3. Year at a glance */}
        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="The year" title="Year at a glance" />
          <div className="overflow-x-auto border-t border-rule">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-rule text-xs font-bold tracking-[0.1em] text-navy/70 uppercase">
                  <th className="px-3 py-3">Unit</th>
                  <th className="px-3 py-3">Theme</th>
                  <th className="px-3 py-3">AI Big Idea</th>
                  <th className="px-3 py-3">English focus</th>
                  <th className="px-3 py-3">Checkpoint</th>
                </tr>
              </thead>
              <tbody>
                {MONTHS.map((month) => {
                  const p = BIG_IDEA_PRESENTATION[month.bigIdeaFocus];
                  const isCheckpoint = CHECKPOINT_MONTHS.includes(month.monthIndex);
                  return (
                    <tr key={month.key} className="border-b border-rule/60 last:border-0">
                      <td className="px-3 py-2.5 font-semibold text-navy">
                        <a href={`#unit-${month.monthIndex}`} className="hover:underline">
                          Unit {month.monthIndex}
                        </a>
                      </td>
                      <td className="px-3 py-2.5">{month.title}</td>
                      <td className="px-3 py-2.5">
                        <span className={`flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${p.badgeClass}`}>
                          <BigIdeaIcon bigIdea={month.bigIdeaFocus} size={11} /> {p.label}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-slate">{month.englishFocus}</td>
                      <td className="px-3 py-2.5 text-slate">{isCheckpoint ? "✓ Listening checkpoint" : ""}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <Rule />

        {/* 4. Unit-by-unit detail */}
        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="The core" title="Unit-by-unit detail" />
          <p className="text-sm text-slate">
            Every lesson below is real, authored content — objectives and standards come straight from the
            curriculum source, not marketing copy.
          </p>
          <div className="flex flex-col gap-10">
            {TERMS.map((term) => (
              <div key={term.termIndex} className="print-break-before flex flex-col gap-4">
                <h3 className="font-editorial text-lg font-bold text-navy">
                  Term {term.termIndex} <span className="text-navy/70">— Units {term.monthRange[0]}-{term.monthRange[1]}</span>
                </h3>
                <div className="flex flex-col divide-y divide-rule border-t border-b border-rule">
                  {MONTHS.filter((m) => m.monthIndex >= term.monthRange[0] && m.monthIndex <= term.monthRange[1]).map((month) => {
                    const lessons = lessonsForMonth(month.monthIndex);
                    const p = BIG_IDEA_PRESENTATION[month.bigIdeaFocus];
                    return (
                      <details
                        key={month.key}
                        id={`unit-${month.monthIndex}`}
                        data-print-expand
                        className={`print-avoid-break border-l-4 ${p.accentClass}`}
                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                              <Image src={MONTH_IMAGE[month.key]} alt="" fill sizes="48px" className="object-cover" />
                            </div>
                            <div>
                              <p className="font-editorial font-bold text-navy">
                                Unit {month.monthIndex} · {month.title}
                              </p>
                              <p className="text-xs text-slate">{month.summary}</p>
                            </div>
                          </div>
                          <span className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${p.badgeClass}`}>
                            <BigIdeaIcon bigIdea={month.bigIdeaFocus} size={11} /> {p.label}
                          </span>
                        </summary>
                        <div className="flex flex-col gap-3 border-t border-rule px-4 py-4">
                          {lessons.map((lesson) => {
                            const role = weekRoleLabel(month.monthIndex, lesson.slot ?? "week1");
                            const authored = isLessonAuthored(lesson.key);
                            return (
                              <div key={lesson.key} className="print-avoid-break bg-amber-tint/40 p-3">
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                  <p className="text-sm font-bold text-navy">
                                    {role} — {lesson.title}
                                  </p>
                                  <p className="text-xs text-slate">{lesson.englishFocus}</p>
                                </div>
                                {authored && <ActivityChips lessonKey={lesson.key} className="mt-2" />}
                                <div className="mt-2">
                                  <LessonPlanFacts lesson={lesson} />
                                </div>
                              </div>
                            );
                          })}
                          <Link
                            href={`/curriculum/${month.key}`}
                            className="no-print w-fit text-xs font-bold text-sky-ink underline decoration-sky-ink/30 underline-offset-2 hover:decoration-sky-ink"
                          >
                            Printable pacing guide for this unit →
                          </Link>
                        </div>
                      </details>
                    );
                  })}
                </div>
                <p className="border-l-2 border-mint bg-mint/10 px-4 py-2.5 text-sm font-semibold text-navy">
                  {term.checkpointLabel}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Rule />

        {/* 5. Foundations unit map */}
        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Start here first" title="Foundations — Vora's Classroom" />
          <p className="text-sm text-slate">
            An 8-week, 24-lesson pilot unit most classes complete before starting the year curriculum. Full map:{" "}
            <code className="rounded bg-navy/[0.06] px-1 text-xs">docs/SCOPE_AND_SEQUENCE.md</code>.
          </p>
          <div className="overflow-x-auto border-t border-rule">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-rule text-xs font-bold tracking-[0.1em] text-navy/70 uppercase">
                  <th className="px-3 py-3">Week</th>
                  <th className="px-3 py-3">Day</th>
                  <th className="px-3 py-3">Lesson</th>
                  <th className="px-3 py-3">English focus</th>
                  <th className="px-3 py-3">Standards</th>
                </tr>
              </thead>
              <tbody>
                {UNITS.map((unit) =>
                  lessonsForWeek(unit.weekRange[0]).map((lesson, i) => (
                    <tr key={lesson.key} className="border-b border-rule/60 align-top last:border-0">
                      {i === 0 && (
                        <td className="px-3 py-2.5 font-semibold text-navy" rowSpan={3}>
                          Week {unit.weekRange[0]}
                          <p className="text-xs font-normal text-slate">{unit.title}</p>
                        </td>
                      )}
                      <td className="px-3 py-2.5 text-slate">Day {lesson.day}</td>
                      <td className="px-3 py-2.5 font-semibold text-navy">{lesson.title}</td>
                      <td className="px-3 py-2.5 text-slate">{lesson.englishFocus}</td>
                      <td className="px-3 py-2.5 text-slate">{lesson.standardsNote}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <Rule />

        {/* 6. Standards alignment */}
        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Trust, with facts" title="Standards alignment" />
          <p className="text-sm text-slate">
            Built against <strong className="text-navy">AI4K12&apos;s Five Big Ideas in AI</strong> (Touretzky et al.),{" "}
            <strong className="text-navy">ISTE</strong>&apos;s elementary AI-recognition guidance, the{" "}
            <strong className="text-navy">UNESCO AI Competency Framework for Students</strong>, and{" "}
            <strong className="text-navy">CSTA</strong> K-12 CS standards (1B-DA-06).
          </p>
          <div className="grid grid-cols-1 gap-3 border-t border-rule pt-6 sm:grid-cols-5">
            {coverage.map(({ bigIdea, lessonCount }) => {
              const p = BIG_IDEA_PRESENTATION[bigIdea];
              return (
                <div key={bigIdea} className="flex flex-col items-center gap-1.5 text-center">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full ${p.badgeClass}`}>
                    <BigIdeaIcon bigIdea={bigIdea} size={18} />
                  </span>
                  <p className="text-xs font-bold text-navy">{p.label}</p>
                  <p className="text-[11px] text-slate">{lessonCount} lessons</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 border-t border-rule pt-6">
            <p className="text-sm font-bold text-navy">How each activity maps to a standard</p>
            <ul className="flex flex-col gap-2.5 text-sm text-slate">
              {STANDARDS_ALIGNMENT.map((m) => (
                <li key={m.engine}>
                  <strong className="text-navy">{m.activityLabel}</strong> — {m.standardLine}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Rule />

        {/* 7. Safety & approach */}
        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow="Trust" title="Safety & approach" />
          <div className="flex flex-col gap-8 border-t border-rule pt-6">
            <div>
              <p className="flex items-center gap-1.5 font-semibold text-navy">
                <SparkleIcon size={16} className="text-sky-ink" /> Teacher-led, one screen — by design
              </p>
              <p className="mt-1.5 text-sm text-slate">
                One teacher runs the lesson from their own laptop connected to a projector or smartboard, pacing the
                class verbally — not a room of kids each on their own device. This matches how Korean hagwons and
                public classrooms actually run.
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1.5 font-semibold text-navy">
                <RobotHeadIcon size={16} className="text-sky-ink" /> No live AI chatbot — by design
              </p>
              <ul className="mt-2 flex flex-col gap-2 text-sm text-slate">
                <li>
                  <strong className="text-navy">COPPA / PIPA.</strong> A live chat surface for children is a
                  data-collection product requiring verifiable guardian consent and content moderation — a different
                  compliance surface entirely from an app that stores only lesson progress.
                </li>
                <li>
                  <strong className="text-navy">Pedagogically unnecessary.</strong> At this age, &quot;how AI understands
                  language&quot; is better taught as a concept than as a live conversation a 4-8 year-old has to parse
                  and produce English in.
                </li>
                <li>
                  <strong className="text-navy">It&apos;s simulable.</strong> &quot;AI learns from examples and can be
                  wrong&quot; and &quot;AI follows exact instructions in order&quot; are fully demonstrable with
                  scripted, deterministic content — guaranteed age-appropriate every time, unlike live model output.
                </li>
              </ul>
            </div>
            <div>
              <p className="flex items-center gap-1.5 font-semibold text-navy">
                <GlobeIcon size={16} className="text-sky-ink" /> What this program deliberately does not build
              </p>
              <ul className="mt-2 flex flex-col gap-2 text-sm text-slate">
                <li className="flex items-start gap-1.5">
                  <XCircleIcon size={14} className="mt-0.5 shrink-0 text-coral-ink" />
                  <span>
                    <strong className="text-navy">US state-specific curricula</strong> (Texas, California, etc.) — not
                    relevant to a Korean classroom. The real equivalent, Korean-market fit, is the L1-targeting and
                    theme-sequence work above.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <XCircleIcon size={14} className="mt-0.5 shrink-0 text-coral-ink" />
                  <span>
                    <strong className="text-navy">A live AI chatbot, writing coach, or art generator</strong> —
                    directly contradicts the no-live-AI safety stance above. We don&apos;t hide this decision; we lead
                    with it.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <XCircleIcon size={14} className="mt-0.5 shrink-0 text-coral-ink" />
                  <span>
                    <strong className="text-navy">Special-needs curricula</strong> (ADHD, autism, dyslexia, gifted) —
                    requires clinical expertise this team doesn&apos;t have. Claiming it would be a false capability
                    aimed at vulnerable families.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <XCircleIcon size={14} className="mt-0.5 shrink-0 text-coral-ink" />
                  <span>
                    <strong className="text-navy">Comparison pages, blog, marketing guides</strong> — content-marketing
                    surface area, not curriculum. This page is the whole pitch.
                  </span>
                </li>
              </ul>
              <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-navy">
                <CheckCircleIcon size={14} className="text-mint" /> Every claim on this page is generated from the same
                curriculum data the app runs on — nothing here is written separately from the product.
              </p>
            </div>
          </div>
        </section>

        <div className="no-print pb-2 text-center text-xs text-navy/70">
          Press ⌘/Ctrl + P, or use the print button above, to save this guide as a PDF.
        </div>
      </main>

      <EditorialFooter printHidden />
    </EditorialShell>
  );
}
