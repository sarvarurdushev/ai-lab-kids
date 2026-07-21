"use client";

import { useMemo, useState } from "react";
import { Vora, type VoraMood } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { playCorrect, playWrong } from "@/lib/sound";
import { speak } from "@/lib/speech";
import { SpeakerIcon } from "@/components/icons";
import type { MinimalPairsConfig } from "@/lib/curriculum";

// Listening-discrimination engine targeting specific Korean L1 phoneme gaps
// (see docs/KOREAN_L1_NOTES.md) — deliberately receptive only (listen and
// pick), not production/pronunciation grading, which would need real speech
// recognition. See docs/AI_CURRICULUM.md "Safety" for why that's out of
// scope for now.

interface Round {
  pairIndex: number;
  answer: "a" | "b";
}

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildRounds(config: MinimalPairsConfig): Round[] {
  return shuffle(
    config.pairs.map((_, pairIndex) => ({
      pairIndex,
      answer: (Math.random() < 0.5 ? "a" : "b") as "a" | "b",
    }))
  );
}

export function MinimalPairsEngine({
  config,
  onFinished,
}: {
  config: MinimalPairsConfig;
  onFinished?: () => void;
}) {
  const rounds = useMemo(() => buildRounds(config), [config]);
  const [roundIndex, setRoundIndex] = useState(0);
  const [played, setPlayed] = useState(false);
  const [answered, setAnswered] = useState<{ good: boolean } | null>(null);

  if (roundIndex >= rounds.length) {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <Vora size={100} mood="happy" bob celebrate />
        <p className="font-display text-lg font-bold text-indigo-dark">Great listening!</p>
      </div>
    );
  }

  const round = rounds[roundIndex];
  const pair = config.pairs[round.pairIndex];
  const targetWord = round.answer === "a" ? pair.wordA : pair.wordB;

  function playTarget() {
    speak(targetWord.text, "en-US");
    setPlayed(true);
  }

  function answer(choice: "a" | "b") {
    if (answered) return;
    const correct = choice === round.answer;
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
      setPlayed(false);
      setAnswered(null);
    }
  }

  const voraMood: VoraMood = answered ? (answered.good ? "happy" : "sad") : "neutral";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span>{config.targetSound}</span>
        <span>
          {roundIndex + 1}/{rounds.length}
        </span>
      </div>

      <div className="flex flex-col items-center gap-3 rounded-3xl bg-white/80 py-6 shadow-sm">
        <Vora size={64} mood={voraMood} />
        <Button onClick={playTarget} variant="secondary" className="!flex !items-center !gap-2 !px-6 !py-3">
          <SpeakerIcon size={18} /> Play the word
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {(["a", "b"] as const).map((side) => {
          const word = side === "a" ? pair.wordA : pair.wordB;
          return (
            <button
              key={side}
              type="button"
              disabled={!played || !!answered}
              onClick={() => answer(side)}
              className="flex flex-col items-center gap-1 rounded-2xl bg-indigo/10 py-5 font-display font-bold text-ink shadow-sm transition-transform active:scale-95 disabled:opacity-40"
            >
              <span className="text-4xl">{word.emoji}</span>
              <span>{word.text}</span>
            </button>
          );
        })}
      </div>

      {!played && <p className="text-center text-xs text-ink/40">Tap &quot;Play the word&quot; to hear it first.</p>}

      {answered && (
        <div className="flex flex-col items-center gap-2">
          <p className={`text-center text-sm font-bold ${answered.good ? "text-mint" : "text-coral"}`}>
            {answered.good ? "Yes! That's it." : `It was "${targetWord.text}."`}
          </p>
          <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
            {roundIndex + 1 >= rounds.length ? "Finish" : "Next →"}
          </Button>
        </div>
      )}
    </div>
  );
}
