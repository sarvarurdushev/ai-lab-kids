"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Vora, type VoraMood } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { EnglishText } from "@/components/curriculum/EnglishText";
import { BehaviorDemo } from "./BehaviorDemo";
import { playCorrect, playWrong, playPop } from "@/lib/sound";
import { RobotHeadIcon, GlobeIcon, CheckCircleIcon, XCircleIcon, SparkleIcon } from "@/components/icons";
import type { AIOrNotConfig } from "@/lib/curriculum";

// Real-world AI-recognition game — the standards-backed answer to "kids
// should learn AI, not just play English games with an AI label." Modeled
// on ISTE's K-2 recommendation ("identify AI in voice assistants") and
// AI4K12 Big Idea 5 (Societal Impact). Content lives in
// lib/curriculum/aiLabBank.ts as a reusable bank of real-life scenarios —
// deliberately NOT month-vocabulary, because the point is recognizing AI
// out in the world, not drilling a word list. The verdict (AI / not AI)
// is shown big and first — the explanation sentence is secondary support
// text, not the primary thing a pre-reader or early English learner has
// to parse to know whether they got it right.

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function AIOrNotEngine({
  config,
  onFinished,
}: {
  config: AIOrNotConfig;
  onFinished?: () => void;
}) {
  const items = useMemo(() => shuffle(config.items), [config]);
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState<{ chose: boolean; correct: boolean } | null>(null);
  const [outcomes, setOutcomes] = useState<boolean[]>([]);
  const correctCount = outcomes.filter(Boolean).length;

  if (index >= items.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 text-center"
      >
        <Vora size={100} mood="happy" bob celebrate />
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.15 }}
          className="font-display text-xl font-bold text-indigo-dark"
        >
          <SparkleIcon size={20} className="mr-1 inline text-amber" /> You spotted AI!
        </motion.p>
        <div className="flex flex-col items-center gap-1 rounded-2xl bg-indigo/10 px-4 py-3">
          <p className="flex items-center gap-1.5 text-sm font-bold text-ink">
            <GlobeIcon size={16} className="text-indigo" /> {correctCount}/{outcomes.length} right
          </p>
          <p className="max-w-xs text-xs text-ink/70">
            AI is already all around us — in speakers, apps, and cameras. Spotting it is a real skill!
          </p>
        </div>
      </motion.div>
    );
  }

  const item = items[index];

  function choose(choice: boolean) {
    if (answered) return;
    const correct = choice === item.isAI;
    playPop();
    if (correct) playCorrect();
    else playWrong();
    setAnswered({ chose: choice, correct });
    setOutcomes((prev) => [...prev, correct]);
  }

  function next() {
    if (index + 1 >= items.length) {
      setIndex(items.length);
      onFinished?.();
    } else {
      setIndex((i) => i + 1);
      setAnswered(null);
    }
  }

  const voraMood: VoraMood = answered ? (answered.correct ? "happy" : "sad") : "thinking";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span>{config.title}</span>
        <span className="flex items-center gap-1">
          {items.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${i < index ? "bg-indigo" : i === index ? "bg-indigo/60" : "bg-ink/15"}`}
            />
          ))}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col items-center gap-2 rounded-3xl bg-white/80 py-6 shadow-sm"
        >
          <Vora size={52} mood={voraMood} />
          <BehaviorDemo isAI={item.isAI} icon={item.emoji} scenario={item.scenario} />
          <EnglishText text={item.scenario} size="lg" />
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-2 gap-3">
        <motion.button
          whileTap={{ scale: 0.93 }}
          type="button"
          disabled={!!answered}
          onClick={() => choose(true)}
          className="flex flex-col items-center gap-1 rounded-2xl bg-indigo/15 py-5 font-display text-lg font-bold text-ink shadow-sm disabled:opacity-50"
        >
          <RobotHeadIcon size={32} className="text-indigo" />
          AI 🤖
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.93 }}
          type="button"
          disabled={!!answered}
          onClick={() => choose(false)}
          className="flex flex-col items-center gap-1 rounded-2xl bg-amber/15 py-5 font-display text-lg font-bold text-ink shadow-sm disabled:opacity-50"
        >
          <span className="text-3xl">🙅</span>
          Not AI
        </motion.button>
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
                answered.correct ? "bg-mint/20 text-mint" : "bg-coral/20 text-coral"
              }`}
            >
              {answered.correct ? <CheckCircleIcon size={22} /> : <XCircleIcon size={22} />}
              {answered.correct ? "Yes!" : item.isAI ? "It IS AI!" : "Not AI!"}
            </motion.div>
            <EnglishText text={item.explanation} size="sm" />
            <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
              {index + 1 >= items.length ? "Finish" : "Next →"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
