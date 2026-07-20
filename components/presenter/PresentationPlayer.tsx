"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Robi } from "@/components/mascot/Robi";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BilingualText } from "@/components/curriculum/BilingualText";
import { MarkPanel } from "./MarkPanel";
import { BIG_IDEA_LABELS, type Lesson } from "@/lib/curriculum";
import type { KoreanSupportLevel } from "@/lib/i18n";

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
        <span className="text-sm font-bold text-ink/50">
          {finished ? "Done" : `${index + 1}/${lesson.segments.length}`}
        </span>
      </div>

      <Card className="flex items-center gap-3 !py-3">
        <Robi size={44} mood="happy" />
        <div>
          <p className="font-display font-bold text-ink">{lesson.title.en}</p>
          <p className="text-xs text-ink/50">{lesson.title.ko}</p>
        </div>
      </Card>

      {finished ? (
        <Card className="flex flex-col items-center gap-3 text-center">
          <Robi size={100} mood="happy" bob />
          <p className="font-display text-lg font-bold text-indigo-dark">Lesson complete!</p>
          <Link href={`/classes/${classId}`}>
            <Button variant="secondary">Back to class</Button>
          </Link>
        </Card>
      ) : (
        <Card className="flex flex-col gap-4">
          {segment.type === "warmup" && (
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold tracking-wide text-indigo uppercase">Warm-up</p>
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
              <p className="text-xs font-bold tracking-wide text-indigo uppercase">Vocabulary</p>
              <BilingualText text={segment.title} level={level} keyContent size="lg" />
              <div className="grid grid-cols-2 gap-2">
                {segment.words.map((w) => (
                  <div key={w.word.en} className="flex flex-col items-center gap-1 rounded-2xl bg-cream p-3 text-center">
                    <span className="text-3xl">{w.emoji}</span>
                    <BilingualText text={w.word} level={level} keyContent size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {segment.type === "concept" && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
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
                    <Robi size={28} />
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
              <p className="text-xs font-bold tracking-wide text-indigo uppercase">Activity</p>
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
              <p className="text-xs font-bold tracking-wide text-indigo uppercase">Formative check</p>
              <BilingualText text={segment.prompt} level={level} keyContent size="lg" />
              <MarkPanel sessionId={sessionId} activityKey={activityKey} roster={roster} />
            </div>
          )}

          {segment.type === "wrapup" && (
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold tracking-wide text-indigo uppercase">Wrap-up</p>
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
