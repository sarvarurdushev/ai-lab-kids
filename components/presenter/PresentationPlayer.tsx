"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Vora } from "@/components/mascot/Vora";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EnglishText } from "@/components/curriculum/EnglishText";
import { BigIdeaBanner } from "@/components/curriculum/BigIdeaBanner";
import {
  BIG_IDEA_LABELS,
  resolveBigIdea,
  ENGINE_PRESENTATION,
  isAiLabEngine,
  SEGMENT_IMAGE,
  HERO_IMAGES,
  type Lesson,
  type LessonSegment,
  type StorySegment,
  type AgeTrack,
} from "@/lib/curriculum";
import {
  vocabOverrideKey,
  movementOverrideKey,
  warmupPromptKey,
  warmupPromptSimpleKey,
  conceptLineKey,
  conceptLineSimpleKey,
  chantLineKey,
  chantSongKey,
  wrapupSummaryKey,
  wrapupSummarySimpleKey,
  wrapupHomeworkKey,
  teamRelayPromptKey,
  standSitStatementKey,
  classVoteQuestionKey,
  classVoteQuestionSimpleKey,
  classVoteOptionKey,
  storyPanelKey,
  storyPanelSimpleKey,
  storyAudioKey,
  type ContentOverride,
} from "@/lib/content/overrideKey";
import {
  SunIcon,
  BookIcon,
  RobotHeadIcon,
  GamepadIcon,
  CheckCircleIcon,
  GiftIcon,
  SparkleIcon,
  RunIcon,
  MusicNoteIcon,
  TeamIcon,
  HandRaiseIcon,
  ChatIcon,
  OpenBookIcon,
} from "@/components/icons";

const SEGMENT_LABEL: Record<
  string,
  { icon: (props: { size?: number; className?: string }) => React.JSX.Element; text: string; className: string }
> = {
  warmup: { icon: SunIcon, text: "Warm-up", className: "text-amber-dark" },
  vocab: { icon: BookIcon, text: "Vocabulary", className: "text-sky" },
  concept: { icon: RobotHeadIcon, text: "Vora Explains", className: "text-indigo-dark" },
  activity: { icon: GamepadIcon, text: "Activity", className: "text-coral" },
  movement: { icon: RunIcon, text: "Movement Break", className: "text-mint" },
  chant: { icon: MusicNoteIcon, text: "Chant Time", className: "text-coral" },
  check: { icon: CheckCircleIcon, text: "Formative Check", className: "text-mint" },
  wrapup: { icon: GiftIcon, text: "Wrap-up", className: "text-amber-dark" },
  team_relay: { icon: TeamIcon, text: "Team Relay", className: "text-coral" },
  stand_sit: { icon: HandRaiseIcon, text: "Stand Up, Sit Down", className: "text-mint" },
  class_vote: { icon: ChatIcon, text: "Class Vote", className: "text-sky" },
  story: { icon: OpenBookIcon, text: "Story Time", className: "text-indigo-dark" },
};

/** Icon + title + "is this a real AI-literacy activity" for the segment strip and agenda chips. */
function stripInfo(segment: LessonSegment): {
  icon: (props: { size?: number; className?: string }) => React.JSX.Element;
  title: string;
  isAiLab: boolean;
} {
  if (segment.type === "activity") {
    const ep = ENGINE_PRESENTATION[segment.config.engine];
    return { icon: ep.icon, title: ep.label, isAiLab: isAiLabEngine(segment.config.engine) };
  }
  const label = SEGMENT_LABEL[segment.type];
  return { icon: label.icon, title: label.text, isAiLab: false };
}

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
const AIOrNotEngine = dynamic(() => import("@/components/engines/AIOrNotEngine").then((m) => m.AIOrNotEngine), {
  ssr: false,
});
const InstructVoraEngine = dynamic(
  () => import("@/components/engines/InstructVoraEngine").then((m) => m.InstructVoraEngine),
  { ssr: false }
);

/**
 * One Story Time panel at a time, big picture first — a real photo (or a
 * huge fallback emoji) fills most of the slide, with the sentence as a
 * caption underneath, and its own prev/next dots so a story reads like a
 * picture book instead of a wall of chat bubbles. Keyed by segment index
 * from the caller so switching lessons/segments remounts it at panel 1.
 */
function StorySlide({
  segment,
  lessonKey,
  segIndex,
  contentOverrides,
  isLittleSparks,
}: {
  segment: StorySegment;
  lessonKey: string;
  segIndex: number;
  contentOverrides: Record<string, ContentOverride>;
  isLittleSparks: boolean;
}) {
  const [panelIndex, setPanelIndex] = useState(0);
  const panel = segment.panels[panelIndex];
  const key = isLittleSparks
    ? storyPanelSimpleKey(lessonKey, segIndex, panelIndex)
    : storyPanelKey(lessonKey, segIndex, panelIndex);
  const override = contentOverrides[key];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-indigo/10 via-cream to-amber/10">
        {override?.imageUrl ? (
          <Image src={override.imageUrl} alt="" fill sizes="700px" className="object-cover" />
        ) : (
          <span className="text-[110px] leading-none">{panel.emoji}</span>
        )}
      </div>
      <div className="flex items-center justify-center gap-1.5">
        {segment.panels.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setPanelIndex(i)}
            aria-label={`Go to panel ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === panelIndex ? "w-6 bg-indigo-dark" : "w-2 bg-indigo/20"}`}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 px-2 text-center">
        <Vora size={24} />
        <EnglishText text={override?.textOverride || panel.text} size="base" />
      </div>
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          className="!px-3 !py-1.5 !text-xs"
          onClick={() => setPanelIndex((p) => Math.max(0, p - 1))}
          disabled={panelIndex === 0}
        >
          ← Prev
        </Button>
        <span className="text-xs font-bold text-ink/40">
          {panelIndex + 1} / {segment.panels.length}
        </span>
        <Button
          variant="ghost"
          className="!px-3 !py-1.5 !text-xs"
          onClick={() => setPanelIndex((p) => Math.min(segment.panels.length - 1, p + 1))}
          disabled={panelIndex >= segment.panels.length - 1}
        >
          Next →
        </Button>
      </div>
    </div>
  );
}

export function PresentationPlayer({
  lesson,
  sessionId,
  classId,
  initialSegmentIndex,
  contentOverrides = {},
  track,
}: {
  lesson: Lesson;
  sessionId: string;
  classId: string;
  initialSegmentIndex: number;
  contentOverrides?: Record<string, ContentOverride>;
  track: AgeTrack;
}) {
  const [index, setIndex] = useState(Math.min(initialSegmentIndex, lesson.segments.length - 1));
  const segment = lesson.segments[index];
  const bigIdea = resolveBigIdea(lesson);
  const isLittleSparks = track === "little_sparks";

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
      setIndex(next);
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
        <div className="flex items-center gap-1 overflow-x-auto rounded-full bg-white/70 px-2 py-2 shadow-sm">
          {lesson.segments.map((seg, i) => {
            const info = stripInfo(seg);
            return (
              <button
                key={i}
                type="button"
                title={info.title}
                onClick={() => void persistIndex(i)}
                className={[
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all",
                  info.isAiLab ? "bg-indigo text-white" : i === index ? "bg-coral/15 text-coral" : "bg-cream text-ink/40",
                  i === index ? "scale-110 ring-2 ring-indigo" : i < index ? "opacity-50" : "",
                ].join(" ")}
              >
                <info.icon size={14} />
              </button>
            );
          })}
        </div>
      )}

      <Card className="flex items-center gap-4 !py-4 bg-gradient-to-r from-indigo/10 to-transparent">
        <Vora size={60} mood="happy" />
        <div>
          <p className="font-display text-xl font-bold text-ink">{lesson.title}</p>
        </div>
      </Card>

      {!finished && bigIdea && <BigIdeaBanner bigIdea={bigIdea} />}

      {!finished && index === 0 && (
        <Card className="!py-3">
          <p className="text-xs font-bold uppercase tracking-wide text-ink/50">
            Today&apos;s class — {lesson.segments.length} steps
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {lesson.segments.map((seg, i) => {
              const info = stripInfo(seg);
              return (
                <span
                  key={i}
                  className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    info.isAiLab ? "bg-indigo text-white" : "bg-cream text-ink/60"
                  }`}
                >
                  <info.icon size={10} /> {info.title}
                </span>
              );
            })}
          </div>
          {lesson.segments.some((seg) => seg.type === "activity" && isAiLabEngine(seg.config.engine)) && (
            <p className="mt-2 flex items-center gap-1 text-[11px] text-ink/50">
              <RobotHeadIcon size={11} /> This lesson includes real AI-literacy practice, not just vocabulary.
            </p>
          )}
        </Card>
      )}

      {finished ? (
        <Card className="flex flex-col items-center gap-3 overflow-hidden text-center !p-0">
          <div className="relative h-48 w-full">
            <Image src={HERO_IMAGES.celebrate} alt="" fill sizes="480px" className="object-cover" />
          </div>
          <div className="flex flex-col items-center gap-3 px-5 pb-5">
            <Vora size={80} mood="excited" bob celebrate />
            <p className="font-display text-lg font-bold text-indigo-dark">Lesson complete!</p>
            <Link href={`/classes/${classId}`}>
              <Button variant="secondary">Back to class</Button>
            </Link>
          </div>
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
                {segment.teacherScript}
              </p>
              {(() => {
                const key = isLittleSparks ? warmupPromptSimpleKey(lesson.key, index) : warmupPromptKey(lesson.key, index);
                const override = contentOverrides[key];
                return (
                  <>
                    {override?.imageUrl && (
                      <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl">
                        <Image src={override.imageUrl} alt="" fill sizes="160px" className="object-cover" />
                      </div>
                    )}
                    <EnglishText text={override?.textOverride || segment.prompt} size="lg" />
                  </>
                );
              })()}
            </div>
          )}

          {segment.type === "vocab" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.vocab.className}`}>
                <SEGMENT_LABEL.vocab.icon size={12} /> {SEGMENT_LABEL.vocab.text}
              </p>
              <EnglishText text={segment.title} size="lg" />
              <div className="grid grid-cols-2 gap-2">
                {segment.words.map((w, wIdx) => {
                  const override = contentOverrides[vocabOverrideKey(lesson.key, index, wIdx)];
                  return (
                    <div
                      key={w.word}
                      className="flex flex-col items-center gap-1 rounded-2xl bg-cream p-3 text-center shadow-sm"
                    >
                      {override?.imageUrl ? (
                        <div className="relative h-28 w-28 overflow-hidden rounded-xl">
                          <Image src={override.imageUrl} alt="" fill sizes="112px" className="object-cover" />
                        </div>
                      ) : (
                        <span className="text-6xl">{w.emoji}</span>
                      )}
                      <EnglishText text={override?.textOverride || w.word} size="sm" />
                    </div>
                  );
                })}
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
              <EnglishText text={segment.title} size="lg" />
              <div className="flex flex-col gap-2">
                {segment.lines.map((line, i) => {
                  const key = isLittleSparks ? conceptLineSimpleKey(lesson.key, index, i) : conceptLineKey(lesson.key, index, i);
                  const override = contentOverrides[key];
                  return (
                    <div key={i} className="flex items-start gap-2 rounded-2xl rounded-bl-none bg-white px-3 py-2 shadow-sm">
                      <Vora size={28} />
                      {override?.imageUrl && (
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                          <Image src={override.imageUrl} alt="" fill sizes="64px" className="object-cover" />
                        </div>
                      )}
                      <EnglishText text={override?.textOverride || line.text} size="sm" />
                    </div>
                  );
                })}
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
              <EnglishText text={segment.instructions} size="sm" />
              {segment.config.engine === "train_the_robot" && (
                <TrainTheRobotEngine
                  config={segment.config}
                  lessonKey={lesson.key}
                  segmentIndex={index}
                  contentOverrides={contentOverrides}
                />
              )}
              {(segment.config.engine === "sequence_builder" || segment.config.engine === "sentence_builder") && (
                <OrderingEngine config={segment.config} lessonKey={lesson.key} segmentIndex={index} contentOverrides={contentOverrides} />
              )}
              {segment.config.engine === "minimal_pairs" && (
                <MinimalPairsEngine
                  config={segment.config}
                  lessonKey={lesson.key}
                  segmentIndex={index}
                  contentOverrides={contentOverrides}
                />
              )}
              {segment.config.engine === "memory_match" && (
                <MemoryMatchEngine
                  config={segment.config}
                  lessonKey={lesson.key}
                  segmentIndex={index}
                  contentOverrides={contentOverrides}
                />
              )}
              {segment.config.engine === "pattern_predictor" && (
                <PatternPredictorEngine
                  config={segment.config}
                  lessonKey={lesson.key}
                  segmentIndex={index}
                  contentOverrides={contentOverrides}
                />
              )}
              {segment.config.engine === "ai_or_not" && (
                <AIOrNotEngine config={segment.config} lessonKey={lesson.key} segmentIndex={index} contentOverrides={contentOverrides} />
              )}
              {segment.config.engine === "instruct_vora" && (
                <InstructVoraEngine
                  config={segment.config}
                  lessonKey={lesson.key}
                  segmentIndex={index}
                  contentOverrides={contentOverrides}
                />
              )}
            </div>
          )}

          {segment.type === "movement" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.movement.className}`}>
                <SEGMENT_LABEL.movement.icon size={12} /> {SEGMENT_LABEL.movement.text}
              </p>
              <div className="relative h-36 w-full overflow-hidden rounded-2xl">
                <Image src={SEGMENT_IMAGE.movement} alt="" fill sizes="480px" className="object-cover" />
              </div>
              <p className="rounded-2xl bg-mint/5 p-3 text-sm text-ink/70">
                <span className="font-bold">Teacher: </span>
                {segment.instructions}
              </p>
              <EnglishText text={segment.title} size="lg" />
              <div className="grid grid-cols-2 gap-2">
                {segment.moves.map((m, i) => {
                  const override = contentOverrides[movementOverrideKey(lesson.key, index, i)];
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 rounded-2xl bg-cream p-3 text-center shadow-sm"
                    >
                      {override?.imageUrl ? (
                        <div className="relative h-28 w-28 overflow-hidden rounded-xl">
                          <Image src={override.imageUrl} alt="" fill sizes="112px" className="object-cover" />
                        </div>
                      ) : (
                        <span className="text-6xl">{m.emoji}</span>
                      )}
                      <EnglishText text={override?.textOverride || m.text} size="sm" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {segment.type === "chant" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.chant.className}`}>
                <SEGMENT_LABEL.chant.icon size={12} /> {SEGMENT_LABEL.chant.text}
              </p>
              <div className="relative h-36 w-full overflow-hidden rounded-2xl">
                <Image src={SEGMENT_IMAGE.chant} alt="" fill sizes="480px" className="object-cover" />
              </div>
              <p className="rounded-2xl bg-coral/5 p-3 text-sm text-ink/70">
                <span className="font-bold">Teacher: </span>
                {segment.instructions}
              </p>
              <EnglishText text={segment.title} size="lg" />
              {(() => {
                const songOverride = contentOverrides[chantSongKey(lesson.key, index)];
                return (
                  songOverride?.audioUrl && (
                    <audio controls src={songOverride.audioUrl} className="h-9 w-full" />
                  )
                );
              })()}
              <div className="flex flex-col gap-2">
                {segment.lines.map((line, i) => {
                  const callOverride = contentOverrides[chantLineKey(lesson.key, index, i, "call")];
                  const responseOverride = contentOverrides[chantLineKey(lesson.key, index, i, "response")];
                  return (
                    <div key={i} className="flex flex-col gap-1 rounded-2xl bg-white p-3 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="shrink-0 rounded-full bg-indigo/10 px-2 py-0.5 text-[10px] font-bold text-indigo-dark uppercase">
                          Say
                        </span>
                        <EnglishText text={callOverride?.textOverride || line.call} size="sm" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="shrink-0 rounded-full bg-coral/10 px-2 py-0.5 text-[10px] font-bold text-coral uppercase">
                          Echo
                        </span>
                        <EnglishText text={responseOverride?.textOverride || line.response} size="sm" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {segment.type === "check" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.check.className}`}>
                <SEGMENT_LABEL.check.icon size={12} /> {SEGMENT_LABEL.check.text}
              </p>
              <EnglishText text={segment.prompt} size="lg" />
            </div>
          )}

          {segment.type === "wrapup" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.wrapup.className}`}>
                <SEGMENT_LABEL.wrapup.icon size={12} /> {SEGMENT_LABEL.wrapup.text}
              </p>
              <EnglishText
                text={
                  contentOverrides[isLittleSparks ? wrapupSummarySimpleKey(lesson.key, index) : wrapupSummaryKey(lesson.key, index)]
                    ?.textOverride || segment.summary
                }
                size="base"
              />
              {segment.homework && (
                <div className="rounded-2xl bg-mint/10 p-3">
                  <p className="text-xs font-bold text-mint">Homework</p>
                  <EnglishText
                    text={contentOverrides[wrapupHomeworkKey(lesson.key, index)]?.textOverride || segment.homework}
                    size="sm"
                    speakable={false}
                  />
                </div>
              )}
            </div>
          )}

          {segment.type === "team_relay" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.team_relay.className}`}>
                <SEGMENT_LABEL.team_relay.icon size={12} /> {SEGMENT_LABEL.team_relay.text}
              </p>
              <p className="rounded-2xl bg-coral/5 p-3 text-sm text-ink/70">
                <span className="font-bold">Teacher: </span>
                {segment.instructions}
              </p>
              <EnglishText text={segment.title} size="lg" />
              <div className="flex flex-col gap-2">
                {segment.prompts.map((p, i) => {
                  const override = contentOverrides[teamRelayPromptKey(lesson.key, index, i)];
                  return (
                    <div key={i} className="flex items-center gap-3 rounded-2xl bg-cream p-3 shadow-sm">
                      {override?.imageUrl ? (
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                          <Image src={override.imageUrl} alt="" fill sizes="80px" className="object-cover" />
                        </div>
                      ) : (
                        <span className="text-5xl">{p.emoji}</span>
                      )}
                      <EnglishText text={override?.textOverride || p.text} size="sm" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {segment.type === "stand_sit" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.stand_sit.className}`}>
                <SEGMENT_LABEL.stand_sit.icon size={12} /> {SEGMENT_LABEL.stand_sit.text}
              </p>
              <p className="rounded-2xl bg-mint/5 p-3 text-sm text-ink/70">
                <span className="font-bold">Teacher: </span>
                {segment.instructions}
              </p>
              <EnglishText text={segment.title} size="lg" />
              <div className="flex flex-col gap-2">
                {segment.statements.map((s, i) => {
                  const override = contentOverrides[standSitStatementKey(lesson.key, index, i)];
                  return (
                    <details key={i} className="rounded-2xl bg-cream p-3 shadow-sm">
                      <summary className="flex cursor-pointer items-center gap-3">
                        {override?.imageUrl ? (
                          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                            <Image src={override.imageUrl} alt="" fill sizes="80px" className="object-cover" />
                          </div>
                        ) : (
                          <span className="text-5xl">{s.emoji}</span>
                        )}
                        <EnglishText text={override?.textOverride || s.text} size="sm" />
                      </summary>
                      <p className="mt-2 text-xs text-ink/60">
                        <span className="font-bold">{s.isTrue ? "True! " : "False! "}</span>
                        {s.explanation}
                      </p>
                    </details>
                  );
                })}
              </div>
            </div>
          )}

          {segment.type === "class_vote" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.class_vote.className}`}>
                <SEGMENT_LABEL.class_vote.icon size={12} /> {SEGMENT_LABEL.class_vote.text}
              </p>
              <p className="rounded-2xl bg-sky/5 p-3 text-sm text-ink/70">
                <span className="font-bold">Teacher: </span>
                {segment.instructions}
              </p>
              <EnglishText text={segment.title} size="lg" />
              {(() => {
                const key = isLittleSparks ? classVoteQuestionSimpleKey(lesson.key, index) : classVoteQuestionKey(lesson.key, index);
                const override = contentOverrides[key];
                return <EnglishText text={override?.textOverride || segment.question} size="base" />;
              })()}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {segment.options.map((o, i) => {
                  const override = contentOverrides[classVoteOptionKey(lesson.key, index, i)];
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 rounded-2xl bg-cream p-3 text-center shadow-sm"
                    >
                      {override?.imageUrl ? (
                        <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                          <Image src={override.imageUrl} alt="" fill sizes="80px" className="object-cover" />
                        </div>
                      ) : (
                        <span className="text-5xl">{o.emoji}</span>
                      )}
                      <EnglishText text={override?.textOverride || o.text} size="sm" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {segment.type === "story" && (
            <div className="flex flex-col gap-3">
              <p className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase ${SEGMENT_LABEL.story.className}`}>
                <SEGMENT_LABEL.story.icon size={12} /> {SEGMENT_LABEL.story.text}
              </p>
              <EnglishText text={segment.title} size="lg" />
              {(() => {
                const audioOverride = contentOverrides[storyAudioKey(lesson.key, index)];
                return audioOverride?.audioUrl && <audio controls src={audioOverride.audioUrl} className="h-9 w-full" />;
              })()}
              <StorySlide
                key={index}
                segment={segment}
                lessonKey={lesson.key}
                segIndex={index}
                contentOverrides={contentOverrides}
                isLittleSparks={isLittleSparks}
              />
              <p className="rounded-xl bg-amber/10 p-2 text-xs text-ink/60">
                <span className="font-bold">Teacher note: </span>
                {segment.teacherNote}
              </p>
              {segment.comprehensionQuestions.length > 0 && (
                <div className="flex flex-col gap-1.5 rounded-2xl bg-indigo/5 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-indigo-dark">Talk about it</p>
                  {segment.comprehensionQuestions.map((q, i) => (
                    <details key={i} className="text-sm text-ink/70">
                      <summary className="cursor-pointer font-semibold">{q.question}</summary>
                      <p className="mt-1 pl-2 text-xs text-ink/50">{q.discussionNote}</p>
                    </details>
                  ))}
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
