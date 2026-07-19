"use client";

import { useMemo, useState } from "react";
import { Robi, type RobiMood } from "@/components/mascot/Robi";
import { Button } from "@/components/ui/Button";
import { BilingualText } from "@/components/curriculum/BilingualText";
import { playCorrect, playWrong, playPop } from "@/lib/sound";
import type { TrainTheRobotConfig } from "@/lib/curriculum";
import type { KoreanSupportLevel } from "@/lib/i18n";

// Classroom version of the classification engine: no timer, no individual
// score, no auto-advance — the teacher paces the room and taps "Next" when
// the class is ready. See components/games/TrainTheRobot.tsx for the
// solo/self-paced version this was generalized from.

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

type Mode = "teach" | "guess";
interface Round {
  itemIndex: number;
  mode: Mode;
  robiGuess?: "a" | "b";
}

const ROBI_CORRECT_CHANCE = 0.75;

function buildRounds(config: TrainTheRobotConfig): Round[] {
  const teachCount = Math.max(2, Math.ceil(config.items.length * 0.6));
  const order = shuffle(Array.from({ length: config.items.length }, (_, i) => i));
  return order.map((itemIndex, i) => {
    if (i < teachCount) return { itemIndex, mode: "teach" as const };
    const truth = config.items[itemIndex].bucket;
    const correct = Math.random() < ROBI_CORRECT_CHANCE;
    const robiGuess = correct ? truth : truth === "a" ? "b" : "a";
    return { itemIndex, mode: "guess" as const, robiGuess };
  });
}

export function TrainTheRobotEngine({
  config,
  level,
  onFinished,
}: {
  config: TrainTheRobotConfig;
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
        <p className="font-display text-lg font-bold text-indigo-dark">All items sorted!</p>
      </div>
    );
  }

  const round = rounds[roundIndex];
  const item = config.items[round.itemIndex];

  function bucketLabel(bucket: "a" | "b") {
    return bucket === "a" ? config.labelA : config.labelB;
  }

  function answerTeach(bucket: "a" | "b") {
    if (answered) return;
    const correct = bucket === item.bucket;
    playPop();
    if (correct) playCorrect();
    else playWrong();
    setAnswered({ good: correct });
  }

  function answerGuess(verdict: "right" | "wrong") {
    if (answered) return;
    const robiWasRight = round.robiGuess === item.bucket;
    const kidCorrect = (verdict === "right") === robiWasRight;
    playPop();
    if (kidCorrect) playCorrect();
    else playWrong();
    setAnswered({ good: kidCorrect });
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

  const robiMood: RobiMood = answered ? (answered.good ? "happy" : "sad") : "neutral";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span>{round.mode === "teach" ? "Teach Robi" : "Check Robi's guess"}</span>
        <span>
          {roundIndex + 1}/{rounds.length}
        </span>
      </div>

      <div className="flex flex-col items-center gap-2 rounded-3xl bg-white/80 py-5 shadow-sm">
        <Robi size={60} mood={robiMood} />
        <div className="text-6xl">{item.emoji}</div>
        <BilingualText text={item.word} level={level} keyContent size="lg" />

        {round.mode === "guess" && round.robiGuess && (
          <div className="mt-1 rounded-2xl bg-indigo/10 px-4 py-2 text-center text-sm font-semibold text-indigo-dark">
            Robi thinks: {round.robiGuess === "a" ? config.emojiA : config.emojiB}{" "}
            {bucketLabel(round.robiGuess).en}
          </div>
        )}
      </div>

      {round.mode === "teach" ? (
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            disabled={!!answered}
            onClick={() => answerTeach("a")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-amber/15 py-4 font-display font-bold text-ink shadow-sm transition-transform active:scale-95 disabled:opacity-50"
          >
            <span className="text-3xl">{config.emojiA}</span>
            {config.labelA.en}
            <span className="text-xs font-normal text-ink/50">{config.labelA.ko}</span>
          </button>
          <button
            type="button"
            disabled={!!answered}
            onClick={() => answerTeach("b")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-coral/15 py-4 font-display font-bold text-ink shadow-sm transition-transform active:scale-95 disabled:opacity-50"
          >
            <span className="text-3xl">{config.emojiB}</span>
            {config.labelB.en}
            <span className="text-xs font-normal text-ink/50">{config.labelB.ko}</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            disabled={!!answered}
            onClick={() => answerGuess("right")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-mint/15 py-4 font-display font-bold text-ink shadow-sm transition-transform active:scale-95 disabled:opacity-50"
          >
            <span className="text-3xl">✅</span>
            Robi is right
          </button>
          <button
            type="button"
            disabled={!!answered}
            onClick={() => answerGuess("wrong")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-coral/15 py-4 font-display font-bold text-ink shadow-sm transition-transform active:scale-95 disabled:opacity-50"
          >
            <span className="text-3xl">❌</span>
            Robi is wrong
          </button>
        </div>
      )}

      {answered && (
        <div className="flex flex-col items-center gap-2">
          <p className={`text-center text-sm font-bold ${answered.good ? "text-mint" : "text-coral"}`}>
            {answered.good ? "Great!" : `It's ${bucketLabel(item.bucket).en} (${bucketLabel(item.bucket).ko}).`}
          </p>
          <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
            {roundIndex + 1 >= rounds.length ? "Finish" : "Next →"}
          </Button>
        </div>
      )}
    </div>
  );
}
