"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Vora, type VoraMood } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { playCorrect, playWrong, playPop } from "@/lib/sound";
import { PatternGridIcon, CheckCircleIcon, XCircleIcon } from "@/components/icons";
import type { PatternPredictorConfig } from "@/lib/curriculum";
import { patternPredictorGlyphs, patternGlyphKey, type ContentOverride } from "@/lib/content/overrideKey";
import { OverridableGlyph } from "@/components/curriculum/OverridableGlyph";

// "What comes next?" pattern game — concretely demonstrates AI4K12 Big Idea
// 2 (Representation & Reasoning): finding the rule in a short sequence and
// predicting the next item, the same way pattern-based prediction (weather
// forecasts, route-finding, next-word suggestions) works. See
// docs/AI_CURRICULUM.md.

interface Round {
  roundIndex: number;
  options: string[];
}

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildRounds(config: PatternPredictorConfig): Round[] {
  return config.rounds.map((r, roundIndex) => ({ roundIndex, options: shuffle(r.options) }));
}

export function PatternPredictorEngine({
  config,
  lessonKey,
  segmentIndex,
  contentOverrides = {},
  onFinished,
}: {
  config: PatternPredictorConfig;
  lessonKey: string;
  segmentIndex: number;
  contentOverrides?: Record<string, ContentOverride>;
  onFinished?: () => void;
}) {
  const rounds = useMemo(() => buildRounds(config), [config]);
  const [roundIndex, setRoundIndex] = useState(0);
  const [answered, setAnswered] = useState<{ good: boolean } | null>(null);
  const [outcomes, setOutcomes] = useState<boolean[]>([]);
  const correctCount = outcomes.filter(Boolean).length;

  if (roundIndex >= rounds.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 text-center"
      >
        <Vora size={100} mood="excited" bob celebrate />
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.15 }}
          className="font-display text-xl font-bold text-indigo-dark"
        >
          You found every pattern! 🎉
        </motion.p>
        <div className="flex flex-col items-center gap-1 rounded-2xl bg-indigo/10 px-4 py-3">
          <p className="flex items-center gap-1.5 text-sm font-bold text-ink">
            <PatternGridIcon size={16} className="text-indigo" /> {correctCount}/{outcomes.length} right
          </p>
          <p className="max-w-xs text-xs text-ink/70">That&apos;s how Vora predicts too — no magic, just spotting what repeats.</p>
        </div>
      </motion.div>
    );
  }

  const round = rounds[roundIndex];
  const data = config.rounds[round.roundIndex];
  const glyphs = patternPredictorGlyphs(data);
  function glyphOverride(value: string) {
    const glyphIndex = glyphs.indexOf(value);
    if (glyphIndex === -1) return undefined;
    return contentOverrides[patternGlyphKey(lessonKey, segmentIndex, round.roundIndex, glyphIndex)];
  }

  function choose(option: string) {
    if (answered) return;
    const correct = option === data.answer;
    playPop();
    if (correct) playCorrect();
    else playWrong();
    setAnswered({ good: correct });
    setOutcomes((prev) => [...prev, correct]);
  }

  function next() {
    if (roundIndex + 1 >= rounds.length) {
      setRoundIndex(rounds.length);
      onFinished?.();
    } else {
      setRoundIndex((i) => i + 1);
      setAnswered(null);
    }
  }

  const voraMood: VoraMood = answered ? (answered.good ? "happy" : "sad") : "thinking";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span>{config.title}</span>
        <span>
          {roundIndex + 1}/{rounds.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={roundIndex}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col items-center gap-3 rounded-3xl bg-white/80 py-6 shadow-sm"
        >
          <Vora size={52} mood={voraMood} />
          <div className="flex items-center gap-2 text-5xl">
            {data.sequence.map((item, i) => (
              <OverridableGlyph key={i} override={glyphOverride(item)} emoji={item} emojiClassName="text-6xl" boxSize={72} />
            ))}
            <span className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border-2 border-dashed border-indigo/40 text-4xl font-bold text-indigo">
              ?
            </span>
          </div>
          <p className="text-base font-bold text-ink/70">What comes next?</p>
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-3 gap-3">
        {round.options.map((option) => (
          <motion.button
            key={option}
            whileTap={{ scale: 0.9 }}
            type="button"
            disabled={!!answered}
            onClick={() => choose(option)}
            className="flex items-center justify-center rounded-2xl bg-indigo/10 py-5 text-4xl shadow-sm disabled:opacity-50"
          >
            <OverridableGlyph override={glyphOverride(option)} emoji={option} emojiClassName="text-6xl" boxSize={80} />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-lg font-bold ${
                answered.good ? "bg-mint/20 text-mint" : "bg-coral/20 text-coral"
              }`}
            >
              {answered.good ? <CheckCircleIcon size={22} /> : <XCircleIcon size={22} />}
              {answered.good ? "Yes!" : `It was ${data.answer}`}
            </motion.div>
            <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
              {roundIndex + 1 >= rounds.length ? "Finish" : "Next →"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
