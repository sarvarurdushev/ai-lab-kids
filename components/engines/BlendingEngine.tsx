"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Vora } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { SpeakButton } from "@/components/ui/SpeakButton";
import { playPop, playCorrect } from "@/lib/sound";
import { speak } from "@/lib/speech";
import { SpeakerIcon } from "@/components/icons";
import type { BlendingConfig } from "@/lib/curriculum";
import { blendingWordKey, type ContentOverride } from "@/lib/content/overrideKey";
import { OverridableGlyph } from "@/components/curriculum/OverridableGlyph";

// Tapping a tile never speaks its sound through the browser's
// text-to-speech: TTS reads letter NAMES ("ess", "tee"), and even a
// phoneme-aware voice can't clip a stop consonant without adding a
// distorting schwa ("buh" instead of a clean /b/) — the exact habit
// phonics research flags as breaking blending. The teacher voices each
// sound live and the class echoes it; only the finished, real word is a
// real dictionary word, so it's the only thing speak() ever reads here.

type Phase = "revealing" | "blended";

function initialReveal(parts: string[]): boolean[] {
  return parts.map(() => false);
}

export function BlendingEngine({
  config,
  lessonKey,
  segmentIndex,
  contentOverrides = {},
  onFinished,
}: {
  config: BlendingConfig;
  lessonKey: string;
  segmentIndex: number;
  contentOverrides?: Record<string, ContentOverride>;
  onFinished?: () => void;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(() => initialReveal(config.words[0].parts));
  const [phase, setPhase] = useState<Phase>("revealing");

  const word = config.words[wordIndex];
  const override = contentOverrides[blendingWordKey(lessonKey, segmentIndex, wordIndex)];
  const allRevealed = revealed.every(Boolean);
  const isLastWord = wordIndex === config.words.length - 1;

  function tapPart(i: number) {
    if (phase !== "revealing" || revealed[i]) return;
    playPop();
    setRevealed((r) => r.map((v, idx) => (idx === i ? true : v)));
  }

  function blend() {
    playCorrect();
    setPhase("blended");
    speak(word.word, "en-US");
    if (isLastWord) onFinished?.();
  }

  function next() {
    const nextIndex = (wordIndex + 1) % config.words.length;
    setWordIndex(nextIndex);
    setRevealed(initialReveal(config.words[nextIndex].parts));
    setPhase("revealing");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span className="flex items-center gap-1.5">
          <SpeakerIcon size={14} className="text-indigo" /> {config.title}
        </span>
        <span className="text-xs font-semibold text-ink/40">
          {wordIndex + 1} / {config.words.length}
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 py-7">
        <Vora size={56} mood={phase === "blended" ? "excited" : "neutral"} bob={phase === "blended"} celebrate={phase === "blended" && isLastWord} />

        <AnimatePresence mode="wait">
          {phase === "revealing" ? (
            <motion.div key="parts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2.5">
              {word.parts.map((part, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => tapPart(i)}
                  whileTap={{ scale: 0.9 }}
                  className={`flex h-24 w-16 items-center justify-center rounded-2xl border-2 font-display text-4xl font-bold transition-colors ${
                    revealed[i] ? "border-mint bg-mint/10 text-ink" : "border-dashed border-ink/25 text-ink/25"
                  }`}
                >
                  {revealed[i] ? part : "?"}
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="blended"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 16 }}
              className="flex flex-col items-center gap-2"
            >
              <OverridableGlyph override={override} emoji={word.emoji} emojiClassName="text-8xl" boxSize={128} />
              <p className="font-display text-4xl font-bold tracking-wide text-indigo-dark">{word.word}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {phase === "revealing" ? (
          <Button onClick={blend} disabled={!allRevealed} variant="secondary" className="!px-6 !py-2 !text-base">
            Blend it! →
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <SpeakButton text={word.word} lang="en-US" className="h-9 w-9 text-base" />
            <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
              {isLastWord ? "Start over →" : "Next word →"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
