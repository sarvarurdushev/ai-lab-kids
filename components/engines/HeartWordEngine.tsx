"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Vora } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { SpeakButton } from "@/components/ui/SpeakButton";
import { playPop, playCorrect } from "@/lib/sound";
import { speak } from "@/lib/speech";
import { BookIcon } from "@/components/icons";
import type { HeartWordConfig } from "@/lib/curriculum";
import { heartWordKey, type ContentOverride } from "@/lib/content/overrideKey";

// The evidence-based heart-word routine, not whole-word memorization: the
// letters that behave normally stay plain and get sounded out, and ONLY the
// irregular letter(s) are marked with a heart to be remembered by sight.
// A 2022 kindergarten study found children taught this way read irregular
// words more accurately than children taught to memorize them whole. The
// regular letters are revealed first, the heart part second, so the class
// always does the decodable work before being given the exception.

export function HeartWordEngine({
  config,
  lessonKey,
  segmentIndex,
  contentOverrides = {},
  onFinished,
}: {
  config: HeartWordConfig;
  lessonKey: string;
  segmentIndex: number;
  contentOverrides?: Record<string, ContentOverride>;
  onFinished?: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [heartShown, setHeartShown] = useState(false);

  const word = config.words[index];
  const isLast = index === config.words.length - 1;
  const override = contentOverrides[heartWordKey(lessonKey, segmentIndex, index)];

  if (!word) return null;

  const letters = word.word.split("");
  const heartSet = new Set(word.heartIndexes);

  function showHeart() {
    playCorrect();
    setHeartShown(true);
    speak(word.word, "en-US");
    if (isLast) onFinished?.();
  }

  function next() {
    playPop();
    setIndex(isLast ? 0 : index + 1);
    setHeartShown(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span className="flex items-center gap-1.5">
          <BookIcon size={14} className="text-indigo" /> {config.title}
        </span>
        <span className="text-xs font-semibold text-ink/40">
          {index + 1} / {config.words.length}
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 px-5 py-7">
        <Vora size={48} mood={heartShown ? "happy" : "neutral"} bob={heartShown} />

        <div className="flex items-end gap-1.5">
          {letters.map((letter, i) => {
            const isHeart = heartSet.has(i);
            return (
              <div key={i} className="flex flex-col items-center gap-1">
                <AnimatePresence>
                  {heartShown && isHeart && (
                    <motion.span
                      initial={{ scale: 0, y: 8 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 420, damping: 14 }}
                      className="text-xl leading-none"
                    >
                      ❤️
                    </motion.span>
                  )}
                </AnimatePresence>
                <span
                  className={`flex h-20 w-14 items-center justify-center rounded-xl border-2 font-display text-4xl font-bold ${
                    heartShown && isHeart
                      ? "border-coral bg-coral/10 text-coral-dark"
                      : "border-ink/15 bg-white text-ink"
                  }`}
                >
                  {letter}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <p className="font-display text-2xl font-bold text-indigo-dark">{override?.textOverride || word.word}</p>
          <SpeakButton text={word.word} lang="en-US" className="h-8 w-8 text-sm" />
        </div>

        <p className="max-w-sm text-center text-sm font-semibold text-ink/50">
          {heartShown
            ? "The heart letters don't follow the rules — we learn those by heart!"
            : "Sound out the letters you know. Which one looks tricky?"}
        </p>

        {heartShown && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-cream px-4 py-2.5 text-center font-display text-lg text-ink"
          >
            {word.sentence}
          </motion.p>
        )}

        {!heartShown ? (
          <Button onClick={showHeart} variant="secondary" className="!px-6 !py-2 !text-base">
            Show the heart part →
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
