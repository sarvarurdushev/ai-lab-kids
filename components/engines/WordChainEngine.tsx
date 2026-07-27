"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Vora } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { SpeakButton } from "@/components/ui/SpeakButton";
import { playPop, playCorrect } from "@/lib/sound";
import { speak } from "@/lib/speech";
import { PatternGridIcon } from "@/components/icons";
import type { WordChainConfig } from "@/lib/curriculum";
import { wordChainLinkKey, type ContentOverride } from "@/lib/content/overrideKey";
import { OverridableGlyph } from "@/components/curriculum/OverridableGlyph";

// cat -> cot -> cop -> chop. Exactly one tile changes per link, and the
// changed tile is highlighted as it flips, because the entire pedagogical
// point is that kids notice WHICH position changed instead of guessing the
// word from its first letter. Like BlendingEngine, individual tiles are
// never spoken by TTS (it reads letter names, not phonemes) — only whole
// real words are.

export function WordChainEngine({
  config,
  lessonKey,
  segmentIndex,
  contentOverrides = {},
  onFinished,
}: {
  config: WordChainConfig;
  lessonKey: string;
  segmentIndex: number;
  contentOverrides?: Record<string, ContentOverride>;
  onFinished?: () => void;
}) {
  // step 0 = the starting word; step N = after applying links[N-1].
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const totalSteps = config.links.length;
  const isStart = step === 0;
  const link = isStart ? undefined : config.links[step - 1];

  // Rebuild the tile array by replaying every link up to the current step.
  const parts = [...config.start.parts];
  for (let i = 0; i < step; i++) {
    const l = config.links[i];
    parts[l.changeIndex] = l.newPart;
  }
  const word = isStart ? config.start.word : link!.word;
  const emoji = isStart ? config.start.emoji : link!.emoji;
  const changedIndex = isStart ? -1 : link!.changeIndex;
  const override = isStart ? undefined : contentOverrides[wordChainLinkKey(lessonKey, segmentIndex, step - 1)];

  function next() {
    if (step >= totalSteps) return;
    playPop();
    setStep(step + 1);
    setRevealed(false);
  }

  function reveal() {
    playCorrect();
    setRevealed(true);
    speak(word, "en-US");
    if (step === totalSteps) onFinished?.();
  }

  function restart() {
    setStep(0);
    setRevealed(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span className="flex items-center gap-1.5">
          <PatternGridIcon size={14} className="text-indigo" /> {config.title}
        </span>
        <span className="text-xs font-semibold text-ink/40">
          {step + 1} / {totalSteps + 1}
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 py-7">
        <Vora size={52} mood={revealed ? "happy" : "neutral"} bob={revealed} />

        {!isStart && (
          <p className="rounded-full bg-amber/15 px-4 py-1 text-sm font-bold text-amber-dark">
            One sound changes — which one?
          </p>
        )}

        <div className="flex gap-2.5">
          {parts.map((part, i) => (
            <motion.div
              key={`${step}-${i}`}
              initial={i === changedIndex ? { rotateY: 90, scale: 0.8 } : false}
              animate={{ rotateY: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className={`flex h-24 w-16 items-center justify-center rounded-2xl border-2 font-display text-4xl font-bold ${
                i === changedIndex ? "border-amber bg-amber/15 text-amber-dark" : "border-ink/15 bg-white text-ink"
              }`}
            >
              {part}
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {revealed ? (
            <motion.div
              key="revealed"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 16 }}
              className="flex flex-col items-center gap-2"
            >
              <OverridableGlyph override={override} emoji={emoji} emojiClassName="text-7xl" boxSize={112} />
              <p className="font-display text-3xl font-bold tracking-wide text-indigo-dark">{word}</p>
            </motion.div>
          ) : (
            <motion.p key="hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-ink/40">
              Read it together, then check!
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2">
          {revealed && <SpeakButton text={word} lang="en-US" className="h-9 w-9 text-base" />}
          {!revealed ? (
            <Button onClick={reveal} variant="secondary" className="!px-6 !py-2 !text-base">
              Check it →
            </Button>
          ) : step < totalSteps ? (
            <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
              Change one sound →
            </Button>
          ) : (
            <Button onClick={restart} variant="ghost" className="!px-5 !py-2 !text-sm">
              Start the chain again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
