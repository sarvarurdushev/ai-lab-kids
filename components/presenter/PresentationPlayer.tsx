"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Vora } from "@/components/mascot/Vora";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BilingualText } from "@/components/curriculum/BilingualText";
import { BigIdeaBanner } from "@/components/curriculum/BigIdeaBanner";
import { MarkPanel } from "./MarkPanel";
import { BIG_IDEA_LABELS, resolveBigIdea, type Lesson } from "@/lib/curriculum";
import type { KoreanSupportLevel } from "@/lib/i18n";
import { SunIcon, BookIcon, RobotHeadIcon, GamepadIcon, CheckCircleIcon, GiftIcon, SparkleIcon } from "@/components/icons";

const SEGMENT_LABEL: Record<
  string,
  { icon: (props: { size?: number; className?: string }) => React.JSX.Element; text: string; className: string }
> = {
  warmup: { icon: SunIcon, text: "Warm-up", className: "text-amber-dark" },
  vocab: { icon: BookIcon, text: "Vocabulary", className: "text-sky" },
  concept: { icon: RobotHeadIcon, text: "Vora Explains", className: "text-indigo-dark" },
  activity: { icon: GamepadIcon, text: "Activity", className: "text-coral" },
  check: { icon: CheckCircleIcon, text: "Formative Check", className: "text-mint" },
  wrapup: { icon: GiftIcon, text: "Wrap-up", className: "text-amber-dark" },
};

// These three pick their tile/round order with Math.random() on first
// render, so server-rendered HTML and the client's initial render would
// legitimately differ (a real hydration mismatch, not a false positive) —
// ssr: false skips the server render entirely instead of racing it.
const TrainTheRobotEngine = dynamic(
  () => import("@/components/engines/TrainTheRobotEngine").then((m) => m.TrainTheRobotEngine),
  { ssr: false }
);
const OrderingEngine = dynamic(() => import("@/components/engines/OrderingEngine").then((m) => m.OrderingEngine), {
  ssr: false,
});
const MinimalPairsEngine = dynamic(
  () => import("@/components/engines/MinimalPairsEngine").then((m) => m.MinimalPairsEngine),
  { ssr: false }
);
const MemoryMatchEngine = dynamic(
  () => import("@/components/engines/MemoryMatchEngine").then((m) => m.MemoryMatchEngine),
  { ssr: false }
);
const PatternPredictorEngine = dynamic(
  () => import("@/components/engines/PatternPredictorEngine").then((m) => m.PatternPredictorEngine),
  { ssr: false }
);

interface RosterStudent {
  id: string;
  koreanName: string;
  englishName: string | null;
  avatarEmoji: string;
}

export function PresentationPlayer({
  lesson,
  level,
  sessionId,
  classId,
  initialSegmentIndex,
  roster,
}: {
  lesson: Lesson;
  level: KoreanSupportLevel;
  sessionId: string;
  classId: string;
  initialSegmentIndex: number;
  roster: RosterStudent[];
}) {
  const [index, setIndex] = useState(Math.min(initialSegmentIndex, lesson.segments.length - 1));
  const segment = lesson.segments[index];
  const activityKey = `${lesson.key}:${index}`;
  const bigIdea = resolveBigIdea(lesson);

  async function persistIndex(next: number) {
    setIndex(next);
    await fetch(`/api/lesson-sessions/${sessionId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentSegmentIndex: next }),
    }).catch(() => undefined);
  }

  function goNext() {
    const next = index + 1;
    if (next >= lesson.segments.length) {
      fetch(`/api/lesson-sessions/${sessionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: true }),
      }).catch(() => undefined);
      return;
    }
    void persistIndex(next);
  }

  function goPrev() {
    if (index === 0) return;
    void persistIndex(index - 1);
  }

  const finished = index >= lesson.segments.length;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Link href={`/classes/${classId}`} className="text-sm font-semibold text-ink/50">
          ← Exit lesson
        </Link>
        <span className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-sm font-bold text-ink/60 shadow-sm">
          {finished ? (
            <>
              <SparkleIcon size={14} /> Done
            </>
          ) : (
            `${index + 1} / ${lesson.segments.length}`
          )}
        </span>
      </div>

      {!finished && (
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/60">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo to-coral transition-all"
            style={{ width: `${((index + 1) / lesson.segments.length) * 100}%` }}
          />
        </div>
      )}

      <Card className="flex items-center gap-3 !py-3 bg-gradient-to-r from-indigo/10 to-transparent">
        <Vora size={44} mood="happy" />
        <div>
          <p className="font-display text-lg font-bold text-ink">{lesson.title.en}</p>
          <p className="text-xs text-ink/50">{lesson.title.ko}</p>
        </div>
      </Card>

      {!finished && bigIdea && <BigIdeaBanner bigIdea={bigIdea} level={level} />}

      {finished ? (
        <Card className="flex flex-col items-center gap-3 text-center">
          <Vora size={100} mood="happy" bob />
          <p className="font-display text-lg font-bold text-indigo-dark">Lesson complete!</p>
          <Link href={`/classes/${classId}`}>
            <Button variant="secondary">Back to class</Button>
          </Link>
        </Card>
      ) : (
        <Card className="flex flex-col gap-4">
          {segment.type === "warmup" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.warmup.className}`}>
                <SEGMENT_LABEL.warmup.icon size={12} /> {SEGMENT_LABEL.warmup.text}
              </p>
              <p className="rounded-2xl bg-indigo/5 p-3 text-sm text-ink/70">
                <span className="font-bold">Teacher script: </span>
                {segment.teacherScript.en}
                <br />
                <span className="text-xs text-ink/50">{segment.teacherScript.ko}</span>
              </p>
              <BilingualText text={segment.prompt} level={level} keyContent size="lg" />
            </div>
          )}

          {segment.type === "vocab" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.vocab.className}`}>
                <SEGMENT_LABEL.vocab.icon size={12} /> {SEGMENT_LABEL.vocab.text}
              </p>
              <BilingualText text={segment.title} level={level} keyContent size="lg" />
              <div className="grid grid-cols-2 gap-2">
                {segment.words.map((w) => (
                  <div
                    key={w.word.en}
                    className="flex flex-col items-center gap-1 rounded-2xl bg-cream p-3 text-center shadow-sm"
                  >
                    <span className="text-3xl">{w.emoji}</span>
                    <BilingualText text={w.word} level={level} keyContent size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {segment.type === "concept" && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.concept.className}`}>
                  <SEGMENT_LABEL.concept.icon size={12} /> {SEGMENT_LABEL.concept.text}
                </p>
                {segment.bigIdeas.map((idea) => (
                  <span
                    key={idea}
                    className="rounded-full bg-indigo/10 px-2 py-0.5 text-[10px] font-bold text-indigo-dark uppercase tracking-wide"
                  >
                    {BIG_IDEA_LABELS[idea]}
                  </span>
                ))}
              </div>
              <BilingualText text={segment.title} level={level} keyContent size="lg" />
              <div className="flex flex-col gap-2">
                {segment.lines.map((line, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-2xl rounded-bl-none bg-white px-3 py-2 shadow-sm">
                    <Vora size={28} />
                    <BilingualText text={line} level={level} size="sm" />
                  </div>
                ))}
              </div>
              <p className="rounded-xl bg-amber/10 p-2 text-xs text-ink/60">
                <span className="font-bold">Teacher note: </span>
                {segment.teacherNote}
              </p>
            </div>
          )}

          {segment.type === "activity" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.activity.className}`}>
                <SEGMENT_LABEL.activity.icon size={12} /> {SEGMENT_LABEL.activity.text}
              </p>
              <BilingualText text={segment.instructions} level={level} keyContent size="sm" />
              {segment.config.engine === "train_the_robot" && (
                <TrainTheRobotEngine config={segment.config} level={level} />
              )}
              {(segment.config.engine === "sequence_builder" || segment.config.engine === "sentence_builder") && (
                <OrderingEngine config={segment.config} level={level} />
              )}
              {segment.config.engine === "minimal_pairs" && <MinimalPairsEngine config={segment.config} level={level} />}
              {segment.config.engine === "memory_match" && <MemoryMatchEngine config={segment.config} level={level} />}
              {segment.config.engine === "pattern_predictor" && (
                <PatternPredictorEngine config={segment.config} level={level} />
              )}
            </div>
          )}

          {segment.type === "check" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.check.className}`}>
                <SEGMENT_LABEL.check.icon size={12} /> {SEGMENT_LABEL.check.text}
              </p>
              <BilingualText text={segment.prompt} level={level} keyContent size="lg" />
              <MarkPanel sessionId={sessionId} activityKey={activityKey} roster={roster} />
            </div>
          )}

          {segment.type === "wrapup" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.wrapup.className}`}>
                <SEGMENT_LABEL.wrapup.icon size={12} /> {SEGMENT_LABEL.wrapup.text}
              </p>
              <BilingualText text={segment.summary} level={level} keyContent size="base" />
              {segment.homework && (
                <div className="rounded-2xl bg-mint/10 p-3">
                  <p className="text-xs font-bold text-mint">Homework</p>
                  <BilingualText text={segment.homework} level={level} keyContent size="sm" speakable={false} />
                </div>
              )}
            </div>
          )}
        </Card>
      )}

      {!finished && (
        <div className="flex justify-between gap-3">
          <Button variant="ghost" onClick={goPrev} disabled={index === 0}>
            ← Back
          </Button>
          <Button variant="secondary" onClick={goNext}>
            {index + 1 >= lesson.segments.length ? "Finish lesson" : "Next →"}
          </Button>
        </div>
      )}
    </div>
  );
}
