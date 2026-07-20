"use client";

import { useMemo, useState } from "react";
import { Vora, type VoraMood } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { BilingualText } from "@/components/curriculum/BilingualText";
import { playCorrect, playWrong, playPop } from "@/lib/sound";
import { RobotHeadIcon, GlobeIcon } from "@/components/icons";
import type { AIOrNotConfig } from "@/lib/curriculum";
import type { KoreanSupportLevel } from "@/lib/i18n";

// Real-world AI-recognition game — the standards-backed answer to "kids
// should learn AI, not just play English games with an AI label." Modeled
// on ISTE's K-2 recommendation ("identify AI in voice assistants") and
// AI4K12 Big Idea 5 (Societal Impact). Content lives in
// lib/curriculum/aiLabBank.ts as a reusable bank of real-life scenarios —
// deliberately NOT month-vocabulary, because the point is recognizing AI
// out in the world, not drilling a word list. Every answer is followed
// immediately by a plain-language explanation, since recognition, not
// score, is the actual learning goal here.

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
  level,
  onFinished,
}: {
  config: AIOrNotConfig;
  level: KoreanSupportLevel;
  onFinished?: () => void;
}) {
  const items = useMemo(() => shuffle(config.items), [config]);
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState<{ chose: boolean; correct: boolean } | null>(null);
  const [outcomes, setOutcomes] = useState<boolean[]>([]);
  const correctCount = outcomes.filter(Boolean).length;

  if (index >= items.length) {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <Vora size={100} mood="happy" bob />
        <p className="font-display text-lg font-bold text-indigo-dark">You spotted AI in the real world!</p>
        <div className="flex flex-col items-center gap-1 rounded-2xl bg-indigo/10 px-4 py-3">
          <p className="flex items-center gap-1.5 text-sm font-bold text-ink">
            <GlobeIcon size={16} className="text-indigo" /> Why this matters
          </p>
          <p className="max-w-xs text-xs text-ink/70">
            You got <strong>{correctCount}/{outcomes.length}</strong> right. AI is already part of everyday life —
            in speakers, apps, and cameras — and knowing which things are AI (and which are just simple machines)
            is a real skill, not a guess.
          </p>
        </div>
      </div>
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
        <span>{config.title.en}</span>
        <span>
          {index + 1}/{items.length}
        </span>
      </div>

      <div className="flex flex-col items-center gap-2 rounded-3xl bg-white/80 py-5 shadow-sm">
        <Vora size={52} mood={voraMood} />
        <div className="text-5xl">{item.emoji}</div>
        <BilingualText text={item.scenario} level={level} keyContent size="base" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          disabled={!!answered}
          onClick={() => choose(true)}
          className="flex flex-col items-center gap-1 rounded-2xl bg-indigo/15 py-4 font-display font-bold text-ink shadow-sm transition-transform active:scale-95 disabled:opacity-50"
        >
          <RobotHeadIcon size={26} className="text-indigo" />
          It&apos;s AI
        </button>
        <button
          type="button"
          disabled={!!answered}
          onClick={() => choose(false)}
          className="flex flex-col items-center gap-1 rounded-2xl bg-amber/15 py-4 font-display font-bold text-ink shadow-sm transition-transform active:scale-95 disabled:opacity-50"
        >
          <span className="text-2xl">🙅</span>
          Not AI
        </button>
      </div>

      {answered && (
        <div className="flex flex-col items-center gap-2">
          <p className={`text-center text-sm font-bold ${answered.correct ? "text-mint" : "text-coral"}`}>
            {answered.correct ? "That's right!" : item.isAI ? "It actually IS AI!" : "It's actually NOT AI!"}
          </p>
          <BilingualText text={item.explanation} level={level} size="sm" />
          <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
            {index + 1 >= items.length ? "Finish" : "Next →"}
          </Button>
        </div>
      )}
    </div>
  );
}
