"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/Button";
import { EnglishText } from "@/components/curriculum/EnglishText";
import { OverridableGlyph } from "@/components/curriculum/OverridableGlyph";
import { playPop, playTick, playGameOver } from "@/lib/sound";
import { speak } from "@/lib/speech";
import {
  partnerTalkCardKey,
  partnerTalkFrameKey,
  partnerTalkFrameSimpleKey,
  vocabReviewWordKey,
  drawAndLabelWordKey,
  drawAndLabelInstructionsKey,
  drawAndLabelInstructionsSimpleKey,
  rolePlayExchangeKey,
  rolePlayExchangeSimpleKey,
  listenAndDoCommandKey,
  type ContentOverride,
} from "@/lib/content/overrideKey";
import type {
  PartnerTalkSegment,
  VocabReviewSegment,
  DrawAndLabelSegment,
  RolePlaySegment,
  ListenAndDoSegment,
  AgeTrack,
} from "@/lib/curriculum";

/*
 * The five productive-language slides — see the block comment above
 * PartnerTalkSegment in lib/curriculum/types.ts for why they exist.
 *
 * They live here rather than inline in PresentationPlayer because three of
 * them hold state (a turn timer, a reveal, a card cursor) and that file is
 * already 900 lines of stateless JSX. The parent still renders the segment
 * label header, so these components render only the body and stay visually
 * identical to every other slide.
 *
 * All five are projector-first and whole-class: no child has a device. What
 * they show is what the room looks at while the talking, acting or drawing
 * happens between the people in it.
 */

type SlideProps<T> = {
  segment: T;
  lessonKey: string;
  segmentIndex: number;
  contentOverrides: Record<string, ContentOverride>;
  /**
   * Only needed by slides with a paired Explorers/Little-Sparks wording
   * override (frame, instructions, a role-play line) — trackContent.ts has
   * already resolved segment.frame etc. to the right text server-side, but
   * the CMS stores each track's wording under its OWN key (see
   * partnerTalkFrameKey vs partnerTalkFrameSimpleKey), so the slide still
   * needs to know which track it's rendering to look up the matching
   * override — same reason PresentationPlayer tracks isLittleSparks for
   * concept/story/warmup.
   */
  track?: AgeTrack;
};

function TeacherNote({ note }: { note: string }) {
  return (
    <p className="rounded-xl bg-cream p-2 text-xs text-ink/50">
      <span className="font-bold">Teacher note: </span>
      {note}
    </p>
  );
}

/* ------------------------------------------------------------------ */

/**
 * Every child speaks at once, in pairs, on a fixed frame. The projector's job
 * is to hold the frame steady and run the clock so the teacher's hands are
 * free to circulate — which is the entire reason this works better than a
 * cold call.
 */
export function PartnerTalkSlide({ segment, lessonKey, segmentIndex, contentOverrides, track }: SlideProps<PartnerTalkSegment>) {
  const [cardIndex, setCardIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(segment.secondsPerTurn);
  const lastTickRef = useRef(-1);

  const card = segment.cards[cardIndex];
  const isLast = cardIndex === segment.cards.length - 1;

  // Wall-clock deadline rather than a decrementing counter, so a backgrounded
  // tab or a slow frame can't make the turn silently longer than the teacher
  // planned for. Same pattern as FluencyRaceEngine.
  useEffect(() => {
    if (!running) return;
    const deadline = Date.now() + segment.secondsPerTurn * 1000;
    lastTickRef.current = -1;
    const id = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setSecondsLeft(remaining);
      if (remaining > 0 && remaining <= 3 && lastTickRef.current !== remaining) {
        lastTickRef.current = remaining;
        playTick();
      }
      if (remaining === 0) {
        clearInterval(id);
        playGameOver();
        setRunning(false);
      }
    }, 250);
    return () => clearInterval(id);
  }, [running, segment.secondsPerTurn]);

  if (!card) return null;
  const cardOverride = contentOverrides[partnerTalkCardKey(lessonKey, segmentIndex, cardIndex)];
  const frameKey = track === "little_sparks" ? partnerTalkFrameSimpleKey(lessonKey, segmentIndex) : partnerTalkFrameKey(lessonKey, segmentIndex);
  const frameOverride = contentOverrides[frameKey];

  return (
    <div className="flex flex-col gap-3">
      <p className="rounded-2xl bg-coral/5 p-3 text-sm text-ink/70">
        <span className="font-bold">Everyone talks at once. </span>
        Turn to your partner. One asks, one answers — then swap.
      </p>

      <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
        <p className="text-[11px] font-bold uppercase tracking-wide text-ink/40">Say it like this</p>
        <EnglishText text={frameOverride?.textOverride || segment.frame} size="lg" />
      </div>

      <div className="flex flex-col items-center gap-3 rounded-3xl bg-coral/5 px-5 py-6">
        <span className="text-xs font-semibold text-ink/40">
          Card {cardIndex + 1} / {segment.cards.length}
        </span>
        <AnimatePresence mode="wait">
          <motion.div
            key={cardIndex}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 340, damping: 20 }}
            className="flex flex-col items-center gap-2"
          >
            <OverridableGlyph override={cardOverride} emoji={card.emoji} emojiClassName="text-8xl" boxSize={140} rounded="rounded-2xl" />
            <EnglishText text={cardOverride?.textOverride || card.prompt} size="lg" />
          </motion.div>
        </AnimatePresence>

        {card.sampleAnswer && (
          <button
            type="button"
            onClick={() => speak(card.sampleAnswer!, "en-US")}
            className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink/60 shadow-sm transition-opacity hover:opacity-70"
          >
            Hear an example answer
          </button>
        )}

        <p className={`font-display text-5xl font-bold ${secondsLeft <= 3 && running ? "text-coral" : "text-ink/30"}`}>
          {secondsLeft}s
        </p>

        <div className="flex gap-2">
          <Button
            onClick={() => {
              playPop();
              setSecondsLeft(segment.secondsPerTurn);
              setRunning(true);
            }}
            variant="secondary"
            className="!px-5 !py-2 !text-base"
          >
            {running ? "Restart turn" : "Start turn"}
          </Button>
          <Button
            onClick={() => {
              playPop();
              setRunning(false);
              setSecondsLeft(segment.secondsPerTurn);
              setCardIndex(isLast ? 0 : cardIndex + 1);
            }}
            variant="secondary"
            className="!px-5 !py-2 !text-base"
          >
            {isLast ? "Start over →" : "Next card →"}
          </Button>
        </div>
      </div>

      <TeacherNote note={segment.teacherNote} />
    </div>
  );
}

/* ------------------------------------------------------------------ */

/**
 * Spaced retrieval of earlier months' words. The picture stays hidden until
 * tapped so the class recalls the word from print first and only uses the
 * image as a rescue — the same retrieval-before-hint shape as the phonics
 * Sound Drill, for the same reason.
 */
export function VocabReviewSlide({ segment, lessonKey, segmentIndex, contentOverrides }: SlideProps<VocabReviewSegment>) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <div className="flex flex-col gap-3">
      <p className="rounded-2xl bg-sky/5 p-3 text-sm text-ink/70">
        <span className="font-bold">Teacher: </span>
        Read each word together first. Only tap it if the class can&apos;t remember — then say it once more.
      </p>
      <EnglishText text={segment.title} size="lg" />

      <div className="grid grid-cols-2 gap-2">
        {segment.words.map((w, i) => {
          const override = contentOverrides[vocabReviewWordKey(lessonKey, segmentIndex, i)];
          const isRevealed = revealed[i];
          return (
            <button
              key={i}
              type="button"
              onClick={() => {
                playPop();
                speak(override?.textOverride || w.word, "en-US");
                setRevealed((r) => ({ ...r, [i]: true }));
              }}
              className="flex flex-col items-center gap-1 rounded-2xl bg-cream p-3 text-center shadow-sm transition-transform hover:scale-[1.03] active:scale-95"
            >
              <span className="self-start rounded-full bg-sky/10 px-2 py-0.5 text-[10px] font-bold uppercase text-sky">
                Month {w.fromMonth}
              </span>
              {isRevealed ? (
                <OverridableGlyph override={override} emoji={w.emoji} emojiClassName="text-6xl" boxSize={96} rounded="rounded-xl" />
              ) : (
                <span className="flex h-24 w-24 items-center justify-center rounded-xl bg-white/70 text-3xl text-ink/20">
                  ?
                </span>
              )}
              <EnglishText text={override?.textOverride || w.word} size="sm" />
            </button>
          );
        })}
      </div>

      <TeacherNote note={segment.teacherNote} />
    </div>
  );
}

/* ------------------------------------------------------------------ */

/**
 * Paper-and-pencil production. The word bank stays projected the whole time so
 * spelling gets copied rather than guessed; the worked example is behind a
 * button so it can be shown AFTER they draw, not turned into a template.
 */
export function DrawAndLabelSlide({ segment, lessonKey, segmentIndex, contentOverrides, track }: SlideProps<DrawAndLabelSegment>) {
  const [showExample, setShowExample] = useState(false);
  const instructionsKey =
    track === "little_sparks"
      ? drawAndLabelInstructionsSimpleKey(lessonKey, segmentIndex)
      : drawAndLabelInstructionsKey(lessonKey, segmentIndex);
  const instructionsOverride = contentOverrides[instructionsKey];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between rounded-2xl bg-mint/5 p-3">
        <p className="text-sm text-ink/70">
          <span className="font-bold">Teacher: </span>
          {instructionsOverride?.textOverride || segment.instructions}
        </p>
        <span className="ml-3 shrink-0 rounded-full bg-white px-3 py-1 text-xs font-bold text-mint shadow-sm">
          {segment.minutes} min
        </span>
      </div>

      <p className="rounded-xl bg-amber/10 p-2 text-center text-xs font-bold text-ink/60">
        Papers and pencils out ✏️
      </p>

      <EnglishText text={segment.title} size="lg" />

      <div>
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-ink/40">Word bank — copy the spelling</p>
        <div className="grid grid-cols-3 gap-2">
          {segment.wordBank.map((w, i) => {
            const override = contentOverrides[drawAndLabelWordKey(lessonKey, segmentIndex, i)];
            return (
              <div key={i} className="flex flex-col items-center gap-1 rounded-2xl bg-white p-2.5 text-center shadow-sm">
                <OverridableGlyph override={override} emoji={w.emoji} emojiClassName="text-5xl" boxSize={80} rounded="rounded-xl" />
                <EnglishText text={override?.textOverride || w.word} size="sm" />
              </div>
            );
          })}
        </div>
      </div>

      {showExample ? (
        <p className="rounded-xl bg-mint/10 p-3 text-sm text-ink/70">
          <span className="font-bold">A finished page looks like: </span>
          {segment.exampleNote}
        </p>
      ) : (
        <Button onClick={() => { playPop(); setShowExample(true); }} variant="secondary" className="!px-5 !py-2 !text-sm">
          Show a finished example (after they draw)
        </Button>
      )}

      <TeacherNote note={segment.teacherNote} />
    </div>
  );
}

/* ------------------------------------------------------------------ */

/**
 * A short two-part dialogue the class performs, which gives the sentence frame
 * a social shape a drill can't. Reads as a script: each line tagged with who
 * says it, in the two roles' colours.
 */
export function RolePlaySlide({ segment, lessonKey, segmentIndex, contentOverrides, track }: SlideProps<RolePlaySegment>) {
  return (
    <div className="flex flex-col gap-3">
      <p className="rounded-2xl bg-indigo/5 p-3 text-sm text-ink/70">
        <span className="font-bold">Setting: </span>
        {segment.setting}
      </p>
      <EnglishText text={segment.title} size="lg" />

      <div className="flex gap-2">
        {segment.roles.map((role, i) => (
          <span
            key={i}
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${
              i === 0 ? "bg-indigo/10 text-indigo-dark" : "bg-coral/10 text-coral"
            }`}
          >
            {role}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {segment.exchanges.map((ex, i) => {
          const exchangeKey =
            track === "little_sparks"
              ? rolePlayExchangeSimpleKey(lessonKey, segmentIndex, i)
              : rolePlayExchangeKey(lessonKey, segmentIndex, i);
          const override = contentOverrides[exchangeKey];
          return (
            <div
              key={i}
              className={`flex items-start gap-2 rounded-2xl p-3 shadow-sm ${
                ex.role === 0 ? "bg-indigo/5" : "ml-6 bg-coral/5"
              }`}
            >
              <OverridableGlyph override={override} emoji={ex.emoji} emojiClassName="text-4xl" boxSize={56} rounded="rounded-xl" />
              <div className="flex flex-col gap-0.5">
                <span
                  className={`text-[10px] font-bold uppercase ${ex.role === 0 ? "text-indigo-dark" : "text-coral"}`}
                >
                  {segment.roles[ex.role]}
                </span>
                <EnglishText text={override?.textOverride || ex.line} size="sm" />
              </div>
            </div>
          );
        })}
      </div>

      <TeacherNote note={segment.teacherNote} />
    </div>
  );
}

/* ------------------------------------------------------------------ */

/**
 * Total Physical Response: the teacher says it, the class does it. Commands are
 * revealed one at a time so kids can't read ahead — the point is to listen, and
 * a visible list turns it into a reading exercise instead.
 */
export function ListenAndDoSlide({ segment, lessonKey, segmentIndex, contentOverrides }: SlideProps<ListenAndDoSegment>) {
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const command = segment.commands[index];
  const isLast = index === segment.commands.length - 1;
  if (!command) return null;
  const override = contentOverrides[listenAndDoCommandKey(lessonKey, segmentIndex, index)];

  return (
    <div className="flex flex-col gap-3">
      <p className="rounded-2xl bg-amber/10 p-3 text-sm text-ink/70">
        <span className="font-bold">Teacher: </span>
        {segment.instructions}
      </p>
      <EnglishText text={segment.title} size="lg" />

      <div className="flex flex-col items-center gap-3 rounded-3xl bg-white/80 px-5 py-7">
        <span className="text-xs font-semibold text-ink/40">
          {index + 1} / {segment.commands.length} · {command.steps} step{command.steps > 1 ? "s" : ""}
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 340, damping: 20 }}
          >
            <OverridableGlyph override={override} emoji={command.emoji} emojiClassName="text-8xl" boxSize={140} rounded="rounded-2xl" />
          </motion.div>
        </AnimatePresence>

        {/* Hidden by default: this block is a LISTENING check, so showing the
            words turns it into a reading one. Kept available for a class that
            genuinely needs the scaffold. */}
        {showText ? (
          <EnglishText text={override?.textOverride || command.text} size="lg" />
        ) : (
          <button
            type="button"
            onClick={() => setShowText(true)}
            className="rounded-full bg-cream px-4 py-1.5 text-xs font-bold text-ink/50 transition-colors hover:text-ink"
          >
            Show the words
          </button>
        )}

        <Button
          onClick={() => {
            playPop();
            setShowText(false);
            setIndex(isLast ? 0 : index + 1);
          }}
          variant="secondary"
          className="!px-6 !py-2 !text-base"
        >
          {isLast ? "Round again →" : "Next command →"}
        </Button>
      </div>

      <TeacherNote note={segment.teacherNote} />
    </div>
  );
}
