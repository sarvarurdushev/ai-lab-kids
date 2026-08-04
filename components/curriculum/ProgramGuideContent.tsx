"use client";

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
import {
  RobotHeadIcon,
  CheckCircleIcon,
  XCircleIcon,
  GlobeIcon,
  SparkleIcon,
} from "@/components/icons";
import { EditorialShell } from "@/components/editorial/EditorialShell";
import { EditorialNav } from "@/components/editorial/EditorialNav";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { Rule } from "@/components/editorial/Rule";
import { PillTag } from "@/components/editorial/PillTag";
import { StatFigures } from "@/components/editorial/StatFigures";
import { useDictionary } from "@/components/i18n/LocaleProvider";
import { interpolate } from "@/lib/i18n/format";

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">
        {eyebrow}
      </p>
      <h2 className="font-editorial al-optical-mid mt-3 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] font-bold text-navy">
        {title}
      </h2>
    </div>
  );
}

// Track blurbs describe the curriculum itself (like MONTHS/UNITS data), not
// page furniture, so — consistent with the "chrome-only" translation scope
// for this page — they stay in English.
const TRACK_COPY = [
  {
    label: "4-5 year olds",
    blurb:
      "Big pictures, read-aloud everything, no clock ticking. Bonus words/lines are skipped.",
  },
  {
    label: "6+ year olds",
    blurb:
      "The same 48-lesson curriculum plus bonus vocabulary and a fuller AI-vocabulary layer, for early readers.",
  },
];

const WEEK_ANATOMY_STEPS = [
  "Warm-up",
  "Vocabulary",
  "AI concept",
  "Activity ×2-3",
  "Formative check",
  "Wrap-up",
];

/**
 * Split from app/curriculum/page.tsx (a Server Component, so it can export
 * `metadata`) purely so this piece can call useDictionary(). Translation
 * scope here is deliberately "chrome-only" (headings, labels, table
 * headers, static explanatory prose this page itself authors) — the
 * curriculum data pulled in above (month/unit/lesson titles, English
 * focus, standards notes, TRACK_COPY, STANDARDS_ALIGNMENT) stays English,
 * matching the "leave curriculum content English" product decision.
 */
export function ProgramGuideContent() {
  const dict = useDictionary();
  const t = dict.curriculumPage;
  const stats = curriculumStats();
  const coverage = bigIdeaCoverage();

  return (
    <EditorialShell className="curriculum-print">
      <PrintExpandDetails />

      <EditorialNav
        printHidden
        rightSlot={
          <>
            <Link
              href="/dashboard"
              className="text-sm font-semibold text-navy/70 hover:text-navy"
            >
              {t.teacherConsole}
            </Link>
            <PrintButton label={t.printLabel} />
          </>
        }
      />

      <main className="mx-auto flex w-full max-w-[900px] flex-col gap-16 px-6 py-16 sm:px-8 sm:py-24">
        {/* 1. Header */}
        <section className="flex flex-col items-center gap-6 text-center">
          <p className="flex items-center gap-1.5 text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">
            <RobotHeadIcon size={14} /> {t.eyebrow}
          </p>
          <h1 className="font-editorial al-optical-display text-[clamp(2.5rem,7vw,4.5rem)] leading-[1] font-extrabold text-navy">
            AI Lab for Kids
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate">
            {t.subtitle}
          </p>
          <StatFigures
            className="mt-6 w-full max-w-2xl"
            stats={[
              { value: stats.lessons, label: t.stats.lessons, accent: "navy" },
              {
                value: stats.activities,
                label: interpolate(t.stats.activitiesEngines, {
                  n: stats.engineCount,
                }),
                accent: "amber",
              },
              {
                value: stats.aiLabActivities,
                label: t.stats.aiLabActivities,
                accent: "sky",
              },
              { value: "5/5", label: t.stats.bigIdeasCovered, accent: "coral" },
            ]}
          />
        </section>

        <Rule />

        {/* 2. How the program is built */}
        <section className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={t.programDesign.eyebrow}
            title={t.programDesign.title}
          />
          <div className="grid grid-cols-1 gap-6 border-t border-rule pt-6 sm:grid-cols-3">
            <div>
              <p className="font-editorial font-bold text-navy">
                {t.programDesign.foundations.label}
              </p>
              <p className="mt-1 text-sm text-slate">
                {t.programDesign.foundations.body}
              </p>
            </div>
            <div>
              <p className="font-editorial font-bold text-navy">
                {t.programDesign.yearCurriculum.label}
              </p>
              <p className="mt-1 text-sm text-slate">
                {t.programDesign.yearCurriculum.body}
              </p>
            </div>
            <div>
              <p className="font-editorial font-bold text-navy">
                {t.programDesign.capstone.label}
              </p>
              <p className="mt-1 text-sm text-slate">
                {t.programDesign.capstone.body}
              </p>
            </div>
          </div>
          <p className="border-l-2 border-amber bg-amber-tint px-5 py-4 text-sm font-semibold text-navy">
            {PROGRAM_ARC}
          </p>

          <div className="mt-2 flex flex-col gap-3">
            <p className="text-sm font-bold text-navy">
              {t.programDesign.anatomyLabel}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {WEEK_ANATOMY_STEPS.map((step, i) => (
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
            <p className="text-sm font-bold text-navy">
              {t.programDesign.weekJobLabel}
            </p>
            <div className="grid grid-cols-1 gap-3 border-t border-rule pt-4 sm:grid-cols-4">
              {(["week1", "week2", "week3", "week4"] as const).map((slot) => (
                <div key={slot} className="text-center">
                  <p className="text-sm font-bold text-sky-ink">
                    {weekRoleLabel(7, slot)}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate">{t.programDesign.weekJobNote}</p>
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <p className="text-sm font-bold text-navy">
              {t.programDesign.tracksLabel}
            </p>
            <div className="grid grid-cols-1 gap-6 border-t border-rule pt-4 sm:grid-cols-2">
              {TRACK_COPY.map((tr) => (
                <div key={tr.label}>
                  <p className="font-semibold text-navy">{tr.label}</p>
                  <p className="mt-1 text-sm text-slate">{tr.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* 3. Year at a glance */}
        <section className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={t.yearAtGlance.eyebrow}
            title={t.yearAtGlance.title}
          />
          <div className="overflow-x-auto border-t border-rule">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-rule text-xs font-bold tracking-[0.1em] text-navy/70 uppercase">
                  <th className="px-3 py-3">{t.yearAtGlance.unit}</th>
                  <th className="px-3 py-3">{t.yearAtGlance.theme}</th>
                  <th className="px-3 py-3">{t.yearAtGlance.bigIdea}</th>
                  <th className="px-3 py-3">{t.yearAtGlance.englishFocus}</th>
                  <th className="px-3 py-3">{t.yearAtGlance.checkpoint}</th>
                </tr>
              </thead>
              <tbody>
                {MONTHS.map((month) => {
                  const p = BIG_IDEA_PRESENTATION[month.bigIdeaFocus];
                  const isCheckpoint = CHECKPOINT_MONTHS.includes(
                    month.monthIndex,
                  );
                  return (
                    <tr
                      key={month.key}
                      className="border-b border-rule/60 last:border-0"
                    >
                      <td className="px-3 py-2.5 font-semibold text-navy">
                        <a
                          href={`#unit-${month.monthIndex}`}
                          className="hover:underline"
                        >
                          {t.yearAtGlance.unit} {month.monthIndex}
                        </a>
                      </td>
                      <td className="px-3 py-2.5">{month.title}</td>
                      <td className="px-3 py-2.5">
                        <span
                          className={`flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${p.badgeClass}`}
                        >
                          <BigIdeaIcon bigIdea={month.bigIdeaFocus} size={11} />{" "}
                          {p.label}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-slate">
                        {month.englishFocus}
                      </td>
                      <td className="px-3 py-2.5 text-slate">
                        {isCheckpoint ? t.yearAtGlance.checkpointMark : ""}
                      </td>
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
          <SectionHeading
            eyebrow={t.unitDetail.eyebrow}
            title={t.unitDetail.title}
          />
          <p className="text-sm text-slate">{t.unitDetail.intro}</p>
          <div className="flex flex-col gap-10">
            {TERMS.map((term) => (
              <div
                key={term.termIndex}
                className="print-break-before flex flex-col gap-4"
              >
                <h3 className="font-editorial text-lg font-bold text-navy">
                  {t.unitDetail.termLabel} {term.termIndex}{" "}
                  <span className="text-navy/70">
                    — {t.unitDetail.unitsLabel} {term.monthRange[0]}-
                    {term.monthRange[1]}
                  </span>
                </h3>
                <div className="flex flex-col divide-y divide-rule border-t border-b border-rule">
                  {MONTHS.filter(
                    (m) =>
                      m.monthIndex >= term.monthRange[0] &&
                      m.monthIndex <= term.monthRange[1],
                  ).map((month) => {
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
                              <Image
                                src={MONTH_IMAGE[month.key]}
                                alt=""
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-editorial font-bold text-navy">
                                {t.yearAtGlance.unit} {month.monthIndex} ·{" "}
                                {month.title}
                              </p>
                              <p className="text-xs text-slate">
                                {month.summary}
                              </p>
                            </div>
                          </div>
                          <span
                            className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${p.badgeClass}`}
                          >
                            <BigIdeaIcon
                              bigIdea={month.bigIdeaFocus}
                              size={11}
                            />{" "}
                            {p.label}
                          </span>
                        </summary>
                        <div className="flex flex-col gap-3 border-t border-rule px-4 py-4">
                          {lessons.map((lesson) => {
                            const role = weekRoleLabel(
                              month.monthIndex,
                              lesson.slot ?? "week1",
                            );
                            const authored = isLessonAuthored(lesson.key);
                            return (
                              <div
                                key={lesson.key}
                                className="print-avoid-break bg-amber-tint/40 p-3"
                              >
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                  <p className="text-sm font-bold text-navy">
                                    {role} — {lesson.title}
                                  </p>
                                  <p className="text-xs text-slate">
                                    {lesson.englishFocus}
                                  </p>
                                </div>
                                {authored && (
                                  <ActivityChips
                                    lessonKey={lesson.key}
                                    className="mt-2"
                                  />
                                )}
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
                            {t.unitDetail.pacingLink}
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
          <SectionHeading
            eyebrow={t.foundationsMap.eyebrow}
            title={t.foundationsMap.title}
          />
          <p className="text-sm text-slate">
            {t.foundationsMap.introBefore}
            <code className="rounded bg-navy/[0.06] px-1 text-xs">
              docs/SCOPE_AND_SEQUENCE.md
            </code>
            .
          </p>
          <div className="overflow-x-auto border-t border-rule">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-rule text-xs font-bold tracking-[0.1em] text-navy/70 uppercase">
                  <th className="px-3 py-3">{t.foundationsMap.week}</th>
                  <th className="px-3 py-3">{t.foundationsMap.day}</th>
                  <th className="px-3 py-3">{t.foundationsMap.lesson}</th>
                  <th className="px-3 py-3">{t.foundationsMap.englishFocus}</th>
                  <th className="px-3 py-3">{t.foundationsMap.standards}</th>
                </tr>
              </thead>
              <tbody>
                {UNITS.map((unit) =>
                  lessonsForWeek(unit.weekRange[0]).map((lesson, i) => (
                    <tr
                      key={lesson.key}
                      className="border-b border-rule/60 align-top last:border-0"
                    >
                      {i === 0 && (
                        <td
                          className="px-3 py-2.5 font-semibold text-navy"
                          rowSpan={3}
                        >
                          {t.foundationsMap.week} {unit.weekRange[0]}
                          <p className="text-xs font-normal text-slate">
                            {unit.title}
                          </p>
                        </td>
                      )}
                      <td className="px-3 py-2.5 text-slate">
                        {t.foundationsMap.day} {lesson.day}
                      </td>
                      <td className="px-3 py-2.5 font-semibold text-navy">
                        {lesson.title}
                      </td>
                      <td className="px-3 py-2.5 text-slate">
                        {lesson.englishFocus}
                      </td>
                      <td className="px-3 py-2.5 text-slate">
                        {lesson.standardsNote}
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </section>

        <Rule />

        {/* 6. Standards alignment */}
        <section className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={t.standardsAlignment.eyebrow}
            title={t.standardsAlignment.title}
          />
          <p className="text-sm text-slate">
            Built against{" "}
            <strong className="text-navy">
              AI4K12&apos;s Five Big Ideas in AI
            </strong>{" "}
            (Touretzky et al.), <strong className="text-navy">ISTE</strong>
            &apos;s elementary AI-recognition guidance, the{" "}
            <strong className="text-navy">
              UNESCO AI Competency Framework for Students
            </strong>
            , and <strong className="text-navy">CSTA</strong> K-12 CS standards
            (1B-DA-06).
          </p>
          <div className="grid grid-cols-1 gap-3 border-t border-rule pt-6 sm:grid-cols-5">
            {coverage.map(({ bigIdea, lessonCount }) => {
              const p = BIG_IDEA_PRESENTATION[bigIdea];
              return (
                <div
                  key={bigIdea}
                  className="flex flex-col items-center gap-1.5 text-center"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${p.badgeClass}`}
                  >
                    <BigIdeaIcon bigIdea={bigIdea} size={18} />
                  </span>
                  <p className="text-xs font-bold text-navy">{p.label}</p>
                  <p className="text-[11px] text-slate">
                    {interpolate(t.standardsAlignment.lessonsCount, {
                      n: lessonCount,
                    })}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 border-t border-rule pt-6">
            <p className="text-sm font-bold text-navy">
              {t.standardsAlignment.mappingLabel}
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-slate">
              {STANDARDS_ALIGNMENT.map((m) => (
                <li key={m.engine}>
                  <strong className="text-navy">{m.activityLabel}</strong> —{" "}
                  {m.standardLine}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Rule />

        {/* 7. Safety & approach */}
        <section className="flex flex-col gap-6">
          <SectionHeading eyebrow={t.safety.eyebrow} title={t.safety.title} />
          <div className="flex flex-col gap-8 border-t border-rule pt-6">
            <div>
              <p className="flex items-center gap-1.5 font-semibold text-navy">
                <SparkleIcon size={16} className="text-sky-ink" />{" "}
                {t.safety.teacherLed.heading}
              </p>
              <p className="mt-1.5 text-sm text-slate">
                {t.safety.teacherLed.body}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1.5 font-semibold text-navy">
                <RobotHeadIcon size={16} className="text-sky-ink" />{" "}
                {t.safety.noChatbot.heading}
              </p>
              <ul className="mt-2 flex flex-col gap-2 text-sm text-slate">
                <li>
                  <strong className="text-navy">COPPA / PIPA.</strong>{" "}
                  {t.safety.noChatbot.coppa}
                </li>
                <li>{t.safety.noChatbot.pedagogical}</li>
                <li>{t.safety.noChatbot.simulable}</li>
              </ul>
            </div>
            <div>
              <p className="flex items-center gap-1.5 font-semibold text-navy">
                <GlobeIcon size={16} className="text-sky-ink" />{" "}
                {t.safety.notBuilding.heading}
              </p>
              <ul className="mt-2 flex flex-col gap-2 text-sm text-slate">
                <li className="flex items-start gap-1.5">
                  <XCircleIcon
                    size={14}
                    className="mt-0.5 shrink-0 text-coral-ink"
                  />
                  <span>{t.safety.notBuilding.usCurricula}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <XCircleIcon
                    size={14}
                    className="mt-0.5 shrink-0 text-coral-ink"
                  />
                  <span>{t.safety.notBuilding.chatbot}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <XCircleIcon
                    size={14}
                    className="mt-0.5 shrink-0 text-coral-ink"
                  />
                  <span>{t.safety.notBuilding.specialNeeds}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <XCircleIcon
                    size={14}
                    className="mt-0.5 shrink-0 text-coral-ink"
                  />
                  <span>{t.safety.notBuilding.marketing}</span>
                </li>
              </ul>
              <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-navy">
                <CheckCircleIcon size={14} className="text-mint" />{" "}
                {t.safety.everyClaim}
              </p>
            </div>
          </div>
        </section>

        <div className="no-print pb-2 text-center text-xs text-navy/70">
          {t.printFooter}
        </div>
      </main>

      <EditorialFooter printHidden />
    </EditorialShell>
  );
}
