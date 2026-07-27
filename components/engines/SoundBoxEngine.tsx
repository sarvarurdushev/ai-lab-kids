"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Vora } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { SpeakButton } from "@/components/ui/SpeakButton";
import { playPop, playCorrect } from "@/lib/sound";
import { PatternGridIcon } from "@/components/icons";
import type { SoundBoxConfig } from "@/lib/curriculum";
import { soundBoxWordKey, type ContentOverride } from "@/lib/content/overrideKey";
import { OverridableGlyph } from "@/components/curriculum/OverridableGlyph";

// Elkonin boxes: one box per SOUND, never per letter — which is the whole
// teaching point, since "ship" is three sounds in four letters. Kids tap a
// token into each box as they segment the word aloud, and only after every
// box is filled do the letters appear inside them. Filling tokens first and
// letters second is deliberate: it keeps the counting step about hearing,
// not about spelling.

export function SoundBoxEngine({
  config,
  lessonKey,
  segmentIndex,
  contentOverrides = {},
  onFinished,
}: {
  config: SoundBoxConfig;
  lessonKey: string;
  segmentIndex: number;
  contentOverrides?: Record<string, ContentOverride>;
  onFinished?: () => void;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [filled, setFilled] = useState(0);
  const [lettersShown, setLettersShown] = useState(false);

  const word = config.words[wordIndex];
  const isLast = wordIndex === config.words.length - 1;
  const override = contentOverrides[soundBoxWordKey(lessonKey, segmentIndex, wordIndex)];

  if (!word) return null;

  const total = word.parts.length;
  const allFilled = filled >= total;

  function tapBox(i: number) {
    if (i !== filled || lettersShown) return;
    playPop();
    setFilled(filled + 1);
  }

  function showLetters() {
    playCorrect();
    setLettersShown(true);
    if (isLast) onFinished?.();
  }

  function next() {
    setWordIndex(isLast ? 0 : wordIndex + 1);
    setFilled(0);
    setLettersShown(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span className="flex items-center gap-1.5">
          <PatternGridIcon size={14} className="text-indigo" /> {config.title}
        </span>
        <span className="text-xs font-semibold text-ink/40">
          {wordIndex + 1} / {config.words.length}
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 px-5 py-7">
        <Vora size={48} mood={lettersShown ? "happy" : "neutral"} bob={lettersShown} />

        <OverridableGlyph override={override} emoji={word.emoji} emojiClassName="text-7xl" boxSize={104} />
        <div className="flex items-center gap-2">
          <p className="font-display text-3xl font-bold text-ink">{word.word}</p>
          <SpeakButton text={word.word} lang="en-US" className="h-8 w-8 text-sm" />
        </div>

        <p className="text-sm font-semibold text-ink/50">
          {lettersShown
            ? `${total} sounds — here are the letters!`
            : allFilled
              ? `${total} sounds! Now let's see the letters.`
              : "Say the word slowly. Tap a box for each sound."}
        </p>

        <div className="flex gap-2">
          {word.parts.map((part, i) => (
            <button
              key={i}
              type="button"
              onClick={() => tapBox(i)}
              disabled={i !== filled || lettersShown}
              className={`flex h-24 w-20 items-center justify-center rounded-xl border-2 transition-colors ${
                i < filled ? "border-mint bg-mint/10" : "border-dashed border-ink/25 bg-white"
              } ${i === filled && !lettersShown ? "border-amber" : ""}`}
            >
              <AnimatePresence mode="wait">
                {lettersShown ? (
                  <motion.span
                    key="letter"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 16, delay: i * 0.08 }}
                    className="font-display text-4xl font-bold text-mint-dark"
                  >
                    {part}
                  </motion.span>
                ) : i < filled ? (
                  <motion.span
                    key="token"
                    initial={{ scale: 0, y: -12 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 420, damping: 15 }}
                    className="h-10 w-10 rounded-full bg-mint"
                  />
                ) : null}
              </AnimatePresence>
            </button>
          ))}
        </div>

        {!allFilled ? null : !lettersShown ? (
          <Button onClick={showLetters} variant="secondary" className="!px-6 !py-2 !text-base">
            Show the letters →
          </Button>
        ) : (
          <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
            {isLast ? "Start over →" : "Next word →"}
          </Button>
        )}
      </div>
    </div>
  );
}
