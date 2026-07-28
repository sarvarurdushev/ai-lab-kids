"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Vora } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { playPop, playCorrect } from "@/lib/sound";
import { speak } from "@/lib/speech";
import { SpeakerIcon, CheckCircleIcon } from "@/components/icons";
import type { DictationConfig } from "@/lib/curriculum";
import { dictationWordKey, dictationSentenceKey, type ContentOverride } from "@/lib/content/overrideKey";

// Encoding — hear it, write it on paper, THEN check. The reveal is
// deliberately a separate teacher action rather than showing alongside the
// prompt: if the spelling is on screen while children write, this stops
// being spelling practice and becomes copying practice. Words come first,
// then sentences, matching the standard dictation routine (5 words + 1-2
// sentences per lesson).

type Item = { text: string; kind: "word" | "sentence" };

export function DictationEngine({
  config,
  lessonKey,
  segmentIndex,
  contentOverrides = {},
  onFinished,
}: {
  config: DictationConfig;
  lessonKey: string;
  segmentIndex: number;
  contentOverrides?: Record<string, ContentOverride>;
  onFinished?: () => void;
}) {
  const items: Item[] = [
    ...config.words.map((w, i) => ({
      text: contentOverrides[dictationWordKey(lessonKey, segmentIndex, i)]?.textOverride || w.text,
      kind: "word" as const,
    })),
    ...config.sentences.map((s, i) => ({
      text: contentOverrides[dictationSentenceKey(lessonKey, segmentIndex, i)]?.textOverride || s.text,
      kind: "sentence" as const,
    })),
  ];

  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const item = items[index];
  const isLast = index === items.length - 1;

  if (!item) return null;

  function sayIt() {
    playPop();
    speak(item.text, "en-US");
  }

  function reveal() {
    playCorrect();
    setRevealed(true);
    if (isLast) onFinished?.();
  }

  function next() {
    if (isLast) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setRevealed(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span className="flex items-center gap-1.5">
          <SpeakerIcon size={14} className="text-indigo" /> {config.title}
        </span>
        <span className="text-xs font-semibold text-ink/40">
          {index + 1} / {items.length}
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 px-5 py-7">
        <Vora size={52} mood={revealed ? "happy" : "neutral"} bob={revealed} />

        <span className="rounded-full bg-indigo/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-indigo-dark">
          {item.kind === "word" ? `Word ${index + 1}` : "Sentence"}
        </span>

        <Button onClick={sayIt} variant="secondary" className="!px-6 !py-2 !text-base">
          🔊 Say it again
        </Button>

        <p className="max-w-sm text-center text-sm font-semibold text-ink/60">
          {revealed ? "Check your paper — did you get it right?" : "Everyone write it on your paper. Don't peek!"}
        </p>

        <AnimatePresence mode="wait">
          {revealed ? (
            <motion.div
              key="answer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 16 }}
              className="flex w-full flex-col items-center gap-2 rounded-2xl bg-mint/10 px-4 py-5"
            >
              <CheckCircleIcon size={20} className="text-mint" />
              <p
                className={`text-center font-display font-bold text-mint-dark ${
                  item.kind === "word" ? "text-5xl tracking-wide" : "text-2xl leading-snug"
                }`}
              >
                {item.text}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex h-28 w-full items-center justify-center rounded-2xl border-2 border-dashed border-ink/20"
            >
              <span className="font-display text-4xl text-ink/15">? ? ?</span>
            </motion.div>
          )}
        </AnimatePresence>

        {!revealed ? (
          <Button onClick={reveal} variant="secondary" className="!px-6 !py-2 !text-base">
            Show the answer →
          </Button>
        ) : (
          <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
            {isLast ? "Start over →" : "Next one →"}
          </Button>
        )}
      </div>
    </div>
  );
}
