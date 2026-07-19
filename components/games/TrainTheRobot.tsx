"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Robi, type RobiMood } from "@/components/mascot/Robi";
import { Button } from "@/components/ui/Button";
import { SpeakButton } from "@/components/ui/SpeakButton";
import { playCorrect, playWrong, playGameOver, playPop } from "@/lib/sound";
import { recordGameResult, type GameResultSummary } from "@/lib/progress";
import {
  shuffle,
  sortCategoryPairsForTrack,
  type AgeTrack,
  type SortCategoryPair,
  type SortItem,
} from "@/lib/curriculum";

const ROUNDS_BY_TRACK: Record<AgeTrack, { total: number; teach: number }> = {
  little_sparks: { total: 8, teach: 5 },
  explorers: { total: 10, teach: 6 },
};
const RESULT_PAUSE_MS = 1400;
const ROBI_CORRECT_CHANCE = 0.75;

type Phase = "ready" | "playing" | "gameover";
type Mode = "teach" | "guess";

interface Round {
  item: SortItem;
  mode: Mode;
  robiGuess?: "a" | "b";
}

function pickPair(track: AgeTrack): SortCategoryPair {
  const pairs = sortCategoryPairsForTrack(track);
  return shuffle(pairs)[0];
}

function buildRounds(pair: SortCategoryPair, total: number, teachCount: number): Round[] {
  const pool = shuffle(pair.items);
  const rounds: Round[] = [];
  for (let i = 0; i < total; i++) {
    const item = pool[i % pool.length];
    if (i < teachCount) {
      rounds.push({ item, mode: "teach" });
    } else {
      const correct = Math.random() < ROBI_CORRECT_CHANCE;
      const robiGuess = correct ? item.bucket : item.bucket === "a" ? "b" : "a";
      rounds.push({ item, mode: "guess", robiGuess });
    }
  }
  return rounds;
}

function withArticle(label: string) {
  return `a${/^[aeiou]/i.test(label) ? "n" : ""} ${label}`;
}

export function TrainTheRobot({ track }: { track: AgeTrack }) {
  const { total: TOTAL_ROUNDS, teach: TEACH_ROUNDS } = ROUNDS_BY_TRACK[track];

  const [phase, setPhase] = useState<Phase>("ready");
  const [pair, setPair] = useState<SortCategoryPair | null>(null);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [roundIndex, setRoundIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<{ good: boolean; text: string } | null>(null);
  const [result, setResult] = useState<GameResultSummary | null>(null);

  const lockRef = useRef(false);

  function startGame() {
    const nextPair = pickPair(track);
    setPair(nextPair);
    setRounds(buildRounds(nextPair, TOTAL_ROUNDS, TEACH_ROUNDS));
    setRoundIndex(0);
    setCorrectCount(0);
    setStreak(0);
    setFeedback(null);
    setResult(null);
    lockRef.current = false;
    setPhase("playing");
  }

  function bucketLabel(pairData: SortCategoryPair, bucket: "a" | "b") {
    return bucket === "a" ? pairData.labelA : pairData.labelB;
  }

  function advance(nextCorrectCount: number) {
    const next = roundIndex + 1;
    setTimeout(() => {
      if (next >= TOTAL_ROUNDS) {
        endGame(nextCorrectCount);
      } else {
        setRoundIndex(next);
        setFeedback(null);
        lockRef.current = false;
      }
    }, RESULT_PAUSE_MS);
  }

  function answerTeach(bucket: "a" | "b") {
    if (phase !== "playing" || !pair || lockRef.current) return;
    lockRef.current = true;
    const round = rounds[roundIndex];
    const correct = bucket === round.item.bucket;
    const nextCorrectCount = correctCount + (correct ? 1 : 0);
    setCorrectCount(nextCorrectCount);
    setStreak(correct ? streak + 1 : 0);
    playPop();
    if (correct) playCorrect();
    else playWrong();
    setFeedback({
      good: correct,
      text: correct
        ? `Yes! A ${round.item.word} is ${withArticle(bucketLabel(pair, round.item.bucket))}.`
        : `Not quite — a ${round.item.word} is ${withArticle(bucketLabel(pair, round.item.bucket))}, not ${withArticle(bucketLabel(pair, bucket))}.`,
    });
    advance(nextCorrectCount);
  }

  function answerGuess(verdict: "right" | "wrong") {
    if (phase !== "playing" || !pair || lockRef.current) return;
    lockRef.current = true;
    const round = rounds[roundIndex];
    const robiWasRight = round.robiGuess === round.item.bucket;
    const kidCorrect = (verdict === "right") === robiWasRight;
    const nextCorrectCount = correctCount + (kidCorrect ? 1 : 0);
    setCorrectCount(nextCorrectCount);
    setStreak(kidCorrect ? streak + 1 : 0);
    playPop();
    if (kidCorrect) playCorrect();
    else playWrong();
    setFeedback({
      good: kidCorrect,
      text: robiWasRight
        ? `Robi was right! A ${round.item.word} is ${withArticle(bucketLabel(pair, round.item.bucket))}.`
        : `Good catch! A ${round.item.word} is ${withArticle(bucketLabel(pair, round.item.bucket))}, not ${withArticle(bucketLabel(pair, round.robiGuess!))}. Robi needs more practice.`,
    });
    advance(nextCorrectCount);
  }

  function endGame(finalCorrect: number) {
    playGameOver();
    setResult(recordGameResult("train_the_robot", finalCorrect));
    setPhase("gameover");
  }

  const robiMood: RobiMood = feedback ? (feedback.good ? "happy" : "sad") : "neutral";

  if (phase === "ready") {
    return (
      <div className="flex flex-col items-center gap-5 text-center">
        <Robi size={130} mood="happy" bob />
        <div>
          <h1 className="font-display text-2xl font-bold text-indigo-dark">Train the Robot</h1>
          <p className="mt-1 text-sm text-ink/60">
            Sort pictures into two groups to teach Robi, then check Robi&apos;s own guesses!
          </p>
        </div>
        <Button onClick={startGame}>Start Game</Button>
        <Link href="/" className="text-sm font-semibold text-indigo underline-offset-2 hover:underline">
          Back to AI Lab
        </Link>
      </div>
    );
  }

  if (phase === "gameover") {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <Robi size={120} mood={correctCount >= TOTAL_ROUNDS * 0.6 ? "happy" : "neutral"} />
        <h1 className="font-display text-2xl font-bold text-indigo-dark">All done!</h1>
        <p className="text-ink/70">
          You got <span className="font-bold text-ink">{correctCount}</span> of{" "}
          <span className="font-bold text-ink">{TOTAL_ROUNDS}</span> right!
        </p>
        {result && (
          <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-5 py-3 shadow-sm">
            <span className="font-bold text-amber-dark">⭐ +{result.starsAwarded} stars</span>
          </div>
        )}
        {result && !result.rewarded && (
          <p className="text-xs text-ink/50">Practice round — come back tomorrow for more rewarded rounds!</p>
        )}
        <div className="flex gap-3">
          <Button onClick={startGame}>Play Again</Button>
          <Link href="/">
            <Button variant="ghost">Back to AI Lab</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!pair || rounds.length === 0) return null;
  const round = rounds[roundIndex];
  const locked = feedback !== null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-ink/50">
          ← Exit
        </Link>
        <div className="flex items-center gap-2">
          {streak >= 3 && (
            <span className="rounded-full bg-coral/15 px-2 py-0.5 text-xs font-bold text-coral">🔥 x{streak}</span>
          )}
          <span className="text-sm font-bold text-ink/60">
            {roundIndex + 1}/{TOTAL_ROUNDS}
          </span>
        </div>
      </div>

      <p className="text-center text-xs font-bold tracking-wide text-indigo uppercase">
        {round.mode === "teach" ? "Teach Robi" : "Check Robi's guess"}
      </p>

      <div className="flex flex-col items-center gap-2 rounded-3xl bg-white/80 py-5 shadow-sm">
        <Robi size={64} mood={robiMood} />
        <div className="flex items-center gap-2">
          <div className="text-6xl">{round.item.emoji}</div>
          <SpeakButton text={round.item.word} />
        </div>
        <p className="text-lg font-bold capitalize text-ink">{round.item.word}</p>

        {round.mode === "guess" && round.robiGuess && (
          <div className="mt-1 rounded-2xl bg-indigo/10 px-4 py-2 text-center text-sm font-semibold text-indigo-dark">
            Robi thinks: {round.robiGuess === "a" ? pair.emojiA : pair.emojiB} {bucketLabel(pair, round.robiGuess)}
          </div>
        )}
      </div>

      {round.mode === "teach" ? (
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            disabled={locked}
            onClick={() => answerTeach("a")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-amber/15 py-4 font-display font-bold text-ink shadow-sm transition-transform active:scale-95 disabled:opacity-50"
          >
            <span className="text-3xl">{pair.emojiA}</span>
            {pair.labelA}
          </button>
          <button
            type="button"
            disabled={locked}
            onClick={() => answerTeach("b")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-coral/15 py-4 font-display font-bold text-ink shadow-sm transition-transform active:scale-95 disabled:opacity-50"
          >
            <span className="text-3xl">{pair.emojiB}</span>
            {pair.labelB}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            disabled={locked}
            onClick={() => answerGuess("right")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-mint/15 py-4 font-display font-bold text-ink shadow-sm transition-transform active:scale-95 disabled:opacity-50"
          >
            <span className="text-3xl">✅</span>
            Robi is right
          </button>
          <button
            type="button"
            disabled={locked}
            onClick={() => answerGuess("wrong")}
            className="flex flex-col items-center gap-1 rounded-2xl bg-coral/15 py-4 font-display font-bold text-ink shadow-sm transition-transform active:scale-95 disabled:opacity-50"
          >
            <span className="text-3xl">❌</span>
            Robi is wrong
          </button>
        </div>
      )}

      <AnimatePresence>
        {feedback && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-center text-sm font-bold ${feedback.good ? "text-mint" : "text-coral"}`}
          >
            {feedback.text}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
