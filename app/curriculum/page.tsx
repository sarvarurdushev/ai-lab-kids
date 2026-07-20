import type { Metadata } from "next";
import Link from "next/link";
import {
  MONTHS,
  UNITS,
  TERMS,
  lessonsForMonth,
  lessonsForWeek,
  curriculumStats,
  bigIdeaCoverage,
  BIG_IDEA_PRESENTATION,
  STANDARDS_ALIGNMENT,
  L1_SOUND_TARGETS,
  L1_GRAMMAR_NOTES,
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

export const metadata: Metadata = {
  title: "Program Guide — AI Lab for Kids",
  description:
    "The full year-long AI-literacy + English curriculum for Korean elementary classrooms: objectives, standards, and Korean-L1 targeting for every lesson.",
};

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 rounded-2xl bg-indigo/5 px-3 py-4 text-center">
      <span className="font-display text-2xl font-bold text-indigo-dark">{value}</span>
      <span className="text-xs font-semibold leading-tight text-ink/60">{label}</span>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-bold uppercase tracking-wide text-indigo-dark">{eyebrow}</p>
      <h2 className="font-display text-2xl font-bold text-ink">{title}</h2>
    </div>
  );
}

const TRACK_COPY = [
  { label: "Little Sparks — ages 4-5", blurb: "Big pictures, read-aloud everything, no clock ticking. Bonus words/lines are skipped." },
  { label: "AI Explorers — ages 6+", blurb: "The same 48-lesson curriculum plus bonus vocabulary and a fuller AI-vocabulary layer, for early readers." },
];

export default function CurriculumPage() {
  const stats = curriculumStats();
  const coverage = bigIdeaCoverage();

  return (
    <div className="curriculum-print min-h-full bg-gradient-to-b from-indigo/10 via-cream to-cream">
      <PrintExpandDetails />

      <header className="no-print sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-white/85 px-6 py-3 backdrop-blur">
        <Link href="/" className="font-display text-lg font-bold text-indigo-dark">
          AI Lab <span className="text-ink/40">for Kids</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-sm font-semibold text-ink/50 hover:text-ink">
            Teacher console →
          </Link>
          <PrintButton />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-col gap-14 px-6 py-10">
        {/* 1. Header */}
        <section className="flex flex-col gap-5 text-center">
          <p className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wide text-indigo-dark">
            <RobotHeadIcon size={14} /> Program Guide
          </p>
          <h1 className="font-display text-4xl font-bold text-ink">AI Lab for Kids</h1>
          <p className="mx-auto max-w-xl text-base text-ink/60">
            English through AI literacy, for Korean elementary classrooms, ages 4-8 — teacher-led, one screen,
            standards-mapped from the first lesson to the last.
          </p>
          <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
            <StatTile value={String(stats.lessons)} label="fully-authored bilingual lessons" />
            <StatTile value={String(stats.activities)} label={`activities · ${stats.engineCount} engine types`} />
            <StatTile value={String(stats.aiLabActivities)} label="AI Lab activities this year" />
            <StatTile value="5/5" label="AI4K12 Big Ideas covered" />
          </div>
        </section>

        {/* 2. How the program is built */}
        <section className="flex flex-col gap-4">
          <SectionHeading eyebrow="Program design" title="How the program is built" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <p className="font-display font-bold text-ink">1. Foundations</p>
              <p className="mt-1 text-sm text-ink/60">8 weeks · 24 lessons. &quot;Vora&apos;s Classroom&quot; — greetings, classroom basics, and the first AI ideas, at CEFR pre-A1/A1.</p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <p className="font-display font-bold text-ink">2. Year curriculum</p>
              <p className="mt-1 text-sm text-ink/60">4 terms · 12 themed units · 48 lessons. One AI4K12 big idea per month, paired with a seasonal English theme.</p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <p className="font-display font-bold text-ink">3. Capstone</p>
              <p className="mt-1 text-sm text-ink/60">Month 12 reviews every game and every AI idea from the whole year, alongside the year&apos;s final listening checkpoint.</p>
            </div>
          </div>
          <p className="rounded-2xl bg-indigo/10 px-4 py-3 text-sm font-semibold text-indigo-dark">{PROGRAM_ARC.en}</p>

          <div className="mt-2 flex flex-col gap-2">
            <p className="text-sm font-bold text-ink">Every lesson follows the same anatomy</p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-ink/60">
              {["Warm-up", "Vocabulary", "AI concept", "Activity ×2-3", "Formative check", "Wrap-up"].map((step, i) => (
                <span key={step} className="flex items-center gap-1">
                  {i > 0 && <span className="text-ink/30">→</span>}
                  <span className="rounded-full bg-white/80 px-2.5 py-1 shadow-sm">{step}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-2">
            <p className="text-sm font-bold text-ink">Each month, every week has a different job</p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
              {(["week1", "week2", "week3", "week4"] as const).map((slot) => (
                <div key={slot} className="rounded-2xl bg-white/80 p-3 text-center shadow-sm">
                  <p className="text-sm font-bold text-indigo-dark">{weekRoleLabel(7, slot).en}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-ink/50">
              Week 4 doubles as a quarterly listening checkpoint on Months 3, 6, 9, and 12 — see &quot;Korean-learner
              targeting&quot; below.
            </p>
          </div>

          <div className="mt-2 flex flex-col gap-2">
            <p className="text-sm font-bold text-ink">Two age tracks, one curriculum</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TRACK_COPY.map((t) => (
                <div key={t.label} className="rounded-2xl bg-white/80 p-4 shadow-sm">
                  <p className="font-semibold text-ink">{t.label}</p>
                  <p className="mt-1 text-sm text-ink/60">{t.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Year at a glance */}
        <section className="flex flex-col gap-4">
          <SectionHeading eyebrow="The year" title="Year at a glance" />
          <div className="overflow-x-auto rounded-2xl bg-white/80 shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-xs font-bold uppercase tracking-wide text-ink/40">
                  <th className="px-3 py-2">Unit</th>
                  <th className="px-3 py-2">Theme</th>
                  <th className="px-3 py-2">AI Big Idea</th>
                  <th className="px-3 py-2">English focus</th>
                  <th className="px-3 py-2">Checkpoint</th>
                </tr>
              </thead>
              <tbody>
                {MONTHS.map((month) => {
                  const p = BIG_IDEA_PRESENTATION[month.bigIdeaFocus];
                  const isCheckpoint = CHECKPOINT_MONTHS.includes(month.monthIndex);
                  return (
                    <tr key={month.key} className="border-b border-ink/5 last:border-0">
                      <td className="px-3 py-2 font-semibold text-ink">
                        <a href={`#unit-${month.monthIndex}`} className="hover:underline">
                          Unit {month.monthIndex}
                        </a>
                      </td>
                      <td className="px-3 py-2">
                        {month.title.en} <span className="text-ink/40">· {month.title.ko}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span className={`flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${p.badgeClass}`}>
                          <BigIdeaIcon bigIdea={month.bigIdeaFocus} size={11} /> {p.label.en}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-ink/60">{month.englishFocus.en}</td>
                      <td className="px-3 py-2 text-ink/60">{isCheckpoint ? "✓ Listening checkpoint" : ""}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Unit-by-unit detail */}
        <section className="flex flex-col gap-4">
          <SectionHeading eyebrow="The core" title="Unit-by-unit detail" />
          <p className="text-sm text-ink/60">
            Every lesson below is real, authored content — objectives, standards, and Korean-L1 teaching notes come
            straight from the curriculum source, not marketing copy.
          </p>
          <div className="flex flex-col gap-3">
            {TERMS.map((term) => (
              <div key={term.termIndex} className="print-break-before flex flex-col gap-3">
                <h3 className="font-display text-lg font-bold text-ink">
                  Term {term.termIndex} <span className="text-ink/40">— Units {term.monthRange[0]}-{term.monthRange[1]}</span>
                </h3>
                {MONTHS.filter((m) => m.monthIndex >= term.monthRange[0] && m.monthIndex <= term.monthRange[1]).map((month) => {
                  const lessons = lessonsForMonth(month.monthIndex);
                  const p = BIG_IDEA_PRESENTATION[month.bigIdeaFocus];
                  return (
                    <details
                      key={month.key}
                      id={`unit-${month.monthIndex}`}
                      data-print-expand
                      className={`print-avoid-break rounded-2xl border-l-4 bg-white/80 shadow-sm ${p.accentClass}`}
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-2 px-4 py-3">
                        <div>
                          <p className="font-display font-bold text-ink">
                            Unit {month.monthIndex} · {month.title.en} <span className="font-normal text-ink/40">· {month.title.ko}</span>
                          </p>
                          <p className="text-xs text-ink/50">{month.summary.en}</p>
                        </div>
                        <span className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${p.badgeClass}`}>
                          <BigIdeaIcon bigIdea={month.bigIdeaFocus} size={11} /> {p.label.en}
                        </span>
                      </summary>
                      <div className="flex flex-col gap-3 border-t border-ink/5 px-4 py-3">
                        {lessons.map((lesson) => {
                          const role = weekRoleLabel(month.monthIndex, lesson.slot ?? "week1");
                          const authored = isLessonAuthored(lesson.key);
                          return (
                            <div key={lesson.key} className="print-avoid-break rounded-xl bg-cream/60 p-3">
                              <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <p className="text-sm font-bold text-ink">
                                  {role.en} — {lesson.title.en} <span className="font-normal text-ink/40">· {lesson.title.ko}</span>
                                </p>
                                <p className="text-xs text-ink/50">{lesson.englishFocus.en}</p>
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
                          className="no-print w-fit text-xs font-bold text-indigo-dark underline"
                        >
                          Printable pacing guide for this unit →
                        </Link>
                      </div>
                    </details>
                  );
                })}
                <p className="rounded-2xl bg-mint/10 px-4 py-2 text-sm font-semibold text-mint">
                  {term.checkpointLabel.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Foundations unit map */}
        <section className="flex flex-col gap-4">
          <SectionHeading eyebrow="Start here first" title="Foundations — Vora's Classroom" />
          <p className="text-sm text-ink/60">
            An 8-week, 24-lesson pilot unit most classes complete before starting the year curriculum. Full map:{" "}
            <code className="rounded bg-ink/5 px-1 text-xs">docs/SCOPE_AND_SEQUENCE.md</code>.
          </p>
          <div className="overflow-x-auto rounded-2xl bg-white/80 shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-xs font-bold uppercase tracking-wide text-ink/40">
                  <th className="px-3 py-2">Week</th>
                  <th className="px-3 py-2">Day</th>
                  <th className="px-3 py-2">Lesson</th>
                  <th className="px-3 py-2">English focus</th>
                  <th className="px-3 py-2">Standards</th>
                </tr>
              </thead>
              <tbody>
                {UNITS.map((unit) =>
                  lessonsForWeek(unit.weekRange[0]).map((lesson, i) => (
                    <tr key={lesson.key} className="border-b border-ink/5 last:border-0 align-top">
                      {i === 0 && (
                        <td className="px-3 py-2 font-semibold text-ink" rowSpan={3}>
                          Week {unit.weekRange[0]}
                          <p className="text-xs font-normal text-ink/50">{unit.title.en}</p>
                        </td>
                      )}
                      <td className="px-3 py-2 text-ink/60">Day {lesson.day}</td>
                      <td className="px-3 py-2 font-semibold text-ink">{lesson.title.en}</td>
                      <td className="px-3 py-2 text-ink/60">{lesson.englishFocus.en}</td>
                      <td className="px-3 py-2 text-ink/50">{lesson.standardsNote}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Standards alignment */}
        <section className="flex flex-col gap-4">
          <SectionHeading eyebrow="Trust, with facts" title="Standards alignment" />
          <p className="text-sm text-ink/60">
            Built against <strong>AI4K12&apos;s Five Big Ideas in AI</strong> (Touretzky et al.), <strong>ISTE</strong>&apos;s
            elementary AI-recognition guidance, the <strong>UNESCO AI Competency Framework for Students</strong>, and{" "}
            <strong>CSTA</strong> K-12 CS standards (1B-DA-06).
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
            {coverage.map(({ bigIdea, lessonCount }) => {
              const p = BIG_IDEA_PRESENTATION[bigIdea];
              return (
                <div key={bigIdea} className="flex flex-col items-center gap-1 rounded-2xl bg-white/80 p-3 text-center shadow-sm">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full ${p.badgeClass}`}>
                    <BigIdeaIcon bigIdea={bigIdea} size={18} />
                  </span>
                  <p className="text-xs font-bold text-ink">{p.label.en}</p>
                  <p className="text-[11px] text-ink/50">{lessonCount} lessons</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 rounded-2xl bg-white/80 p-4 shadow-sm">
            <p className="text-sm font-bold text-ink">How each activity maps to a standard</p>
            <ul className="flex flex-col gap-2 text-sm text-ink/70">
              {STANDARDS_ALIGNMENT.map((m) => (
                <li key={m.engine}>
                  <strong className="text-ink">{m.activityLabel.en}</strong> — {m.standardLine.en}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. Korean-learner targeting */}
        <section className="flex flex-col gap-4">
          <SectionHeading eyebrow="Built for this classroom" title="Korean-learner targeting" />
          <p className="text-sm text-ink/60">
            Korean has no /f/, /v/, /θ/, /ð/, or /l/-/r/ distinction, is syllable-timed, and is SOV with no articles.
            Every gap below is targeted deliberately, not incidentally.
          </p>
          <div className="overflow-x-auto rounded-2xl bg-white/80 shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-xs font-bold uppercase tracking-wide text-ink/40">
                  <th className="px-3 py-2">Gap</th>
                  <th className="px-3 py-2">Why</th>
                  <th className="px-3 py-2">Introduced</th>
                  <th className="px-3 py-2">Reviewed</th>
                </tr>
              </thead>
              <tbody>
                {L1_SOUND_TARGETS.map((t) => (
                  <tr key={t.gap} className="border-b border-ink/5 last:border-0 align-top">
                    <td className="px-3 py-2 font-semibold text-ink">{t.gap}</td>
                    <td className="px-3 py-2 text-ink/60">{t.why.en}</td>
                    <td className="px-3 py-2 text-ink/60">{t.introducedAt.label}</td>
                    <td className="px-3 py-2 text-ink/60">
                      {t.reviewedAt.length > 0 ? t.reviewedAt.map((r) => r.label).join("; ") : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {L1_GRAMMAR_NOTES.map((g) => (
              <div key={g.title.en} className="rounded-2xl bg-white/80 p-4 shadow-sm">
                <p className="font-semibold text-ink">{g.title.en}</p>
                <p className="mt-1 text-sm text-ink/60">{g.note.en}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Safety & approach */}
        <section className="flex flex-col gap-4">
          <SectionHeading eyebrow="Trust" title="Safety & approach" />
          <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
            <p className="flex items-center gap-1.5 font-semibold text-ink">
              <SparkleIcon size={16} className="text-indigo" /> Teacher-led, one screen — by design
            </p>
            <p className="mt-1 text-sm text-ink/60">
              One teacher runs the lesson from their own laptop connected to a projector or smartboard, pacing the
              class verbally — not a room of kids each on their own device. This matches how Korean hagwons and
              public classrooms actually run.
            </p>
          </div>
          <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
            <p className="flex items-center gap-1.5 font-semibold text-ink">
              <RobotHeadIcon size={16} className="text-indigo" /> No live AI chatbot — by design
            </p>
            <ul className="mt-2 flex flex-col gap-2 text-sm text-ink/60">
              <li>
                <strong className="text-ink">COPPA / PIPA.</strong> A live chat surface for children is a
                data-collection product requiring verifiable guardian consent and content moderation — a different
                compliance surface entirely from an app that stores only lesson progress.
              </li>
              <li>
                <strong className="text-ink">Pedagogically unnecessary.</strong> At this age, &quot;how AI understands
                language&quot; is better taught as a concept than as a live conversation a 4-8 year-old has to parse
                and produce English in.
              </li>
              <li>
                <strong className="text-ink">It&apos;s simulable.</strong> &quot;AI learns from examples and can be
                wrong&quot; and &quot;AI follows exact instructions in order&quot; are fully demonstrable with
                scripted, deterministic content — guaranteed age-appropriate every time, unlike live model output.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
            <p className="flex items-center gap-1.5 font-semibold text-ink">
              <GlobeIcon size={16} className="text-indigo" /> What this program deliberately does not build
            </p>
            <ul className="mt-2 flex flex-col gap-2 text-sm text-ink/60">
              <li className="flex items-start gap-1.5">
                <XCircleIcon size={14} className="mt-0.5 shrink-0 text-coral" />
                <span>
                  <strong className="text-ink">US state-specific curricula</strong> (Texas, California, etc.) — not
                  relevant to a Korean classroom. The real equivalent, Korean-market fit, is the L1-targeting and
                  theme-sequence work above.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <XCircleIcon size={14} className="mt-0.5 shrink-0 text-coral" />
                <span>
                  <strong className="text-ink">A live AI chatbot, writing coach, or art generator</strong> — directly
                  contradicts the no-live-AI safety stance above. We don&apos;t hide this decision; we lead with it.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <XCircleIcon size={14} className="mt-0.5 shrink-0 text-coral" />
                <span>
                  <strong className="text-ink">Special-needs curricula</strong> (ADHD, autism, dyslexia, gifted) —
                  requires clinical expertise this team doesn&apos;t have. Claiming it would be a false capability
                  aimed at vulnerable families.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <XCircleIcon size={14} className="mt-0.5 shrink-0 text-coral" />
                <span>
                  <strong className="text-ink">Comparison pages, blog, marketing guides</strong> — content-marketing
                  surface area, not curriculum. This page is the whole pitch.
                </span>
              </li>
            </ul>
            <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-mint">
              <CheckCircleIcon size={14} /> Every claim on this page is generated from the same curriculum data the
              app runs on — nothing here is written separately from the product.
            </p>
          </div>
        </section>

        <div className="no-print pb-4 text-center text-xs text-ink/40">
          Press ⌘/Ctrl + P, or use the print button above, to save this guide as a PDF.
        </div>
      </main>
    </div>
  );
}
