"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Vora, type VoraMood } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { BilingualText } from "@/components/curriculum/BilingualText";
import { playCorrect, playWrong, playPop } from "@/lib/sound";
import { CheckCircleIcon, XCircleIcon, SproutIcon } from "@/components/icons";
import type { TrainTheRobotConfig } from "@/lib/curriculum";
import type { KoreanSupportLevel } from "@/lib/i18n";

// Classroom version of the classification engine: no timer, no individual
// score, no auto-advance — the teacher paces the room and taps "Next" when
// the class is ready. See components/games/TrainTheRobot.tsx for the
// solo/self-paced version this was generalized from.
//
// This is the one engine that actually SIMULATES the AI learning process
// (not just labels it): a "teach" phase where kids provide labeled examples
// (Vora's training data), then a "guess" phase where Vora predicts using
// what it learned and kids audit the guesses. The live accuracy tracker and
// closing summary below exist so that connection — more/better examples
// change how well Vora guesses — is something kids *see happen*, not just
// something a caption claims.

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
  voraGuess?: "a" | "b";
}

const ROBI_CORRECT_CHANCE = 0.75;

function buildRounds(config: TrainTheRobotConfig): Round[] {
  const teachCount = Math.max(2, Math.ceil(config.items.length * 0.6));
  const order = shuffle(Array.from({ length: config.items.length }, (_, i) => i));
  return order.map((itemIndex, i) => {
    if (i < teachCount) return { itemIndex, mode: "teach" as const };
    const truth = config.items[itemIndex].bucket;
    const correct = Math.random() < ROBI_CORRECT_CHANCE;
    const voraGuess = correct ? truth : truth === "a" ? "b" : "a";
    return { itemIndex, mode: "guess" as const, voraGuess };
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
  const teachTotal = rounds.filter((r) => r.mode === "teach").length;
  const guessTotal = rounds.length - teachTotal;

  const [roundIndex, setRoundIndex] = useState(0);
  const [answered, setAnswered] = useState<{ good: boolean } | null>(null);
  const [guessOutcomes, setGuessOutcomes] = useState<boolean[]>([]);

  const teachDoneCount = rounds.slice(0, roundIndex).filter((r) => r.mode === "teach").length;
  const guessCorrectCount = guessOutcomes.filter(Boolean).length;

  if (roundIndex >= rounds.length) {
    const allCorrect = guessCorrectCount === guessTotal;
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
          All sorted! 🎉
        </motion.p>
        <div className="flex flex-col items-center gap-1 rounded-2xl bg-mint/10 px-4 py-3">
          <p className="flex items-center gap-1.5 text-sm font-bold text-ink">
            <SproutIcon size={16} className="text-mint" /> Vora got{" "}
            <strong>
              {guessCorrectCount}/{guessTotal}
            </strong>{" "}
            new ones right
          </p>
          <p className="max-w-xs text-xs text-ink/70">
            You taught Vora with {teachTotal} examples. Then it guessed {guessTotal} new ones by itself!
          </p>
          <p className="max-w-xs text-xs text-ink/70">
            {allCorrect
              ? "That's how real AI learns — good examples in, good guesses out."
              : "AI makes mistakes on tricky ones too — more examples help it learn better."}
          </p>
        </div>
      </motion.div>
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
    const voraWasRight = round.voraGuess === item.bucket;
    const kidCorrect = (verdict === "right") === voraWasRight;
    playPop();
    if (kidCorrect) playCorrect();
    else playWrong();
    setAnswered({ good: kidCorrect });
    setGuessOutcomes((prev) => [...prev, voraWasRight]);
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

  const voraMood: VoraMood = answered ? (answered.good ? "happy" : "sad") : "neutral";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span>{round.mode === "teach" ? "Teach Vora" : "Check Vora's guess"}</span>
        <span>
          {roundIndex + 1}/{rounds.length}
        </span>
      </div>

      {round.mode === "teach" ? (
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wide text-mint">
            <span className="flex items-center gap-1">
              <SproutIcon size={12} /> Training Vora
            </span>
            <span>
              {teachDoneCount}/{teachTotal} examples
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-mint/15">
            <div
              className="h-full rounded-full bg-mint transition-all"
              style={{ width: `${(teachDoneCount / teachTotal) * 100}%` }}
            />
          </div>
        </div>
      ) : (
        guessOutcomes.length > 0 && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wide text-indigo">
              <span>Vora&apos;s accuracy so far</span>
              <span>
                {guessCorrectCount}/{guessOutcomes.length}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-indigo/15">
              <div
                className="h-full rounded-full bg-indigo transition-all"
                style={{ width: `${(guessCorrectCount / guessOutcomes.length) * 100}%` }}
              />
            </div>
          </div>
        )
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={roundIndex}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col items-center gap-2 rounded-3xl bg-white/80 py-6 shadow-sm"
        >
          <Vora size={60} mood={voraMood} />
          <motion.div animate={answered ? { scale: [1, 1.25, 1] } : {}} transition={{ duration: 0.4 }} className="text-7xl">
            {item.emoji}
          </motion.div>
          <BilingualText text={item.word} level={level} keyContent size="lg" />

          {round.mode === "guess" && round.voraGuess && (
            <div className="mt-1 rounded-2xl bg-indigo/10 px-4 py-2 text-center text-sm font-semibold text-indigo-dark">
              Vora thinks: {round.voraGuess === "a" ? config.emojiA : config.emojiB}{" "}
              {bucketLabel(round.voraGuess).en}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {round.mode === "teach" ? (
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileTap={{ scale: 0.93 }}
            type="button"
            disabled={!!answered}
            onClick={() => answerTeach("a")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-amber/15 py-4 font-display text-lg font-bold text-ink shadow-sm disabled:opacity-50"
          >
            <span className="text-3xl">{config.emojiA}</span>
            {config.labelA.en}
            <span className="text-xs font-normal text-ink/50">{config.labelA.ko}</span>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.93 }}
            type="button"
            disabled={!!answered}
            onClick={() => answerTeach("b")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-coral/15 py-4 font-display text-lg font-bold text-ink shadow-sm disabled:opacity-50"
          >
            <span className="text-3xl">{config.emojiB}</span>
            {config.labelB.en}
            <span className="text-xs font-normal text-ink/50">{config.labelB.ko}</span>
          </motion.button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileTap={{ scale: 0.93 }}
            type="button"
            disabled={!!answered}
            onClick={() => answerGuess("right")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-mint/15 py-4 font-display text-lg font-bold text-ink shadow-sm disabled:opacity-50"
          >
            <CheckCircleIcon size={28} className="text-mint" />
            Right
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.93 }}
            type="button"
            disabled={!!answered}
            onClick={() => answerGuess("wrong")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-coral/15 py-4 font-display text-lg font-bold text-ink shadow-sm disabled:opacity-50"
          >
            <XCircleIcon size={28} className="text-coral" />
            Wrong
          </motion.button>
        </div>
      )}

      {answered && (
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-lg font-bold ${
              answered.good ? "bg-mint/20 text-mint" : "bg-coral/20 text-coral"
            }`}
          >
            {answered.good ? <CheckCircleIcon size={20} /> : <XCircleIcon size={20} />}
            {answered.good ? "Great!" : `It's ${bucketLabel(item.bucket).en}`}
          </motion.div>
          <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
            {roundIndex + 1 >= rounds.length ? "Finish" : "Next →"}
          </Button>
        </div>
      )}
    </div>
  );
}
