"use client";

import { useMemo, useState } from "react";
import { Robi, type RobiMood } from "@/components/mascot/Robi";
import { Button } from "@/components/ui/Button";
import { playCorrect, playWrong, playPop } from "@/lib/sound";
import type { PatternPredictorConfig } from "@/lib/curriculum";
import type { KoreanSupportLevel } from "@/lib/i18n";

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
  level,
  onFinished,
}: {
  config: PatternPredictorConfig;
  level: KoreanSupportLevel;
  onFinished?: () => void;
}) {
  const rounds = useMemo(() => buildRounds(config), [config]);
  const [roundIndex, setRoundIndex] = useState(0);
  const [answered, setAnswered] = useState<{ good: boolean } | null>(null);

  if (roundIndex >= rounds.length) {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <Robi size={100} mood="happy" bob />
        <p className="font-display text-lg font-bold text-indigo-dark">You found every pattern!</p>
      </div>
    );
  }

  const round = rounds[roundIndex];
  const data = config.rounds[round.roundIndex];

  function choose(option: string) {
    if (answered) return;
    const correct = option === data.answer;
    playPop();
    if (correct) playCorrect();
    else playWrong();
    setAnswered({ good: correct });
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

  const robiMood: RobiMood = answered ? (answered.good ? "happy" : "sad") : "thinking";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span>{config.title.en}</span>
        <span>
          {roundIndex + 1}/{rounds.length}
        </span>
      </div>

      <div className="flex flex-col items-center gap-3 rounded-3xl bg-white/80 py-5 shadow-sm">
        <Robi size={52} mood={robiMood} />
        <div className="flex items-center gap-2 text-4xl">
          {data.sequence.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-dashed border-indigo/40 text-2xl font-bold text-indigo">
            ?
          </span>
        </div>
        <p className="text-sm font-semibold text-ink/60">What comes next?</p>
        {level !== "minimal" && <p className="text-xs text-ink/40">다음에 무엇이 올까요?</p>}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {round.options.map((option) => (
          <button
            key={option}
            type="button"
            disabled={!!answered}
            onClick={() => choose(option)}
            className="flex items-center justify-center rounded-2xl bg-indigo/10 py-5 text-4xl shadow-sm transition-transform active:scale-95 disabled:opacity-50"
          >
            {option}
          </button>
        ))}
      </div>

      {answered && (
        <div className="flex flex-col items-center gap-2">
          <p className={`text-center text-sm font-bold ${answered.good ? "text-mint" : "text-coral"}`}>
            {answered.good ? "That's the pattern!" : `The answer was ${data.answer}.`}
          </p>
          <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
            {roundIndex + 1 >= rounds.length ? "Finish" : "Next →"}
          </Button>
        </div>
      )}
    </div>
  );
}
