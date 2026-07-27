"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Vora } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { SpeakButton } from "@/components/ui/SpeakButton";
import { playPop, playCorrect } from "@/lib/sound";
import { speak } from "@/lib/speech";
import { SparkleIcon } from "@/components/icons";
import type { PhonemeSwapConfig } from "@/lib/curriculum";
import { phonemeSwapStartKey, phonemeSwapAnswerKey, type ContentOverride } from "@/lib/content/overrideKey";
import { OverridableGlyph } from "@/components/curriculum/OverridableGlyph";

// "Say cat. Now change /k/ to /b/." The class answers ALOUD before the
// reveal — the answer on screen is a check, not the activity, which is why
// the reveal is always a deliberate second action. Purely oral+picture: no
// letter tiles here, because this is phonemic awareness (hearing sounds),
// distinct from the print-based work everywhere else in the lesson.

export function PhonemeSwapEngine({
  config,
  lessonKey,
  segmentIndex,
  contentOverrides = {},
  onFinished,
}: {
  config: PhonemeSwapConfig;
  lessonKey: string;
  segmentIndex: number;
  contentOverrides?: Record<string, ContentOverride>;
  onFinished?: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const round = config.rounds[index];
  const isLast = index === config.rounds.length - 1;
  const startOverride = contentOverrides[phonemeSwapStartKey(lessonKey, segmentIndex, index)];
  const answerOverride = contentOverrides[phonemeSwapAnswerKey(lessonKey, segmentIndex, index)];

  if (!round) return null;

  function reveal() {
    playCorrect();
    setRevealed(true);
    speak(round.answerWord, "en-US");
    if (isLast) onFinished?.();
  }

  function next() {
    playPop();
    setIndex(isLast ? 0 : index + 1);
    setRevealed(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span className="flex items-center gap-1.5">
          <SparkleIcon size={14} className="text-indigo" /> {config.title}
        </span>
        <span className="text-xs font-semibold text-ink/40">
          {index + 1} / {config.rounds.length}
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 px-5 py-7">
        <Vora size={52} mood={revealed ? "excited" : "neutral"} bob={revealed} />

        <div className="flex flex-col items-center gap-1">
          <OverridableGlyph override={startOverride} emoji={round.startEmoji} emojiClassName="text-7xl" boxSize={104} />
          <div className="flex items-center gap-2">
            <p className="font-display text-3xl font-bold text-ink">{round.startWord}</p>
            <SpeakButton text={round.startWord} lang="en-US" className="h-8 w-8 text-sm" />
          </div>
        </div>

        <p className="rounded-2xl bg-amber/15 px-5 py-2.5 text-center font-display text-xl font-bold text-amber-dark">
          {round.instruction}
        </p>

        <AnimatePresence mode="wait">
          {revealed ? (
            <motion.div
              key="answer"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 16 }}
              className="flex flex-col items-center gap-1 rounded-2xl bg-mint/10 px-6 py-4"
            >
              <OverridableGlyph override={answerOverride} emoji={round.answerEmoji} emojiClassName="text-7xl" boxSize={104} />
              <p className="font-display text-3xl font-bold text-mint-dark">{round.answerWord}</p>
            </motion.div>
          ) : (
            <motion.p key="ask" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-ink/40">
              Everybody say the new word out loud!
            </motion.p>
          )}
        </AnimatePresence>

        {!revealed ? (
          <Button onClick={reveal} variant="secondary" className="!px-6 !py-2 !text-base">
            Check it →
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
