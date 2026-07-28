"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Vora } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { playPop, playCorrect, playTick, playGameOver } from "@/lib/sound";
import { GamepadIcon, SparkleIcon } from "@/components/icons";
import type { FluencyRaceConfig } from "@/lib/curriculum";
import { fluencyRaceWordKey, type ContentOverride } from "@/lib/content/overrideKey";

// Timed automaticity round: the class reads words aloud together and the
// teacher taps through as they go, racing a countdown. The record is the
// class's own previous best, never another class's — the competition is
// deliberately against themselves so a slower group still gets the
// motivation without the comparison. Optional overflow block; not part of
// the core 50-minute lesson.

export function FluencyRaceEngine({
  config,
  lessonKey,
  segmentIndex,
  contentOverrides = {},
  onFinished,
}: {
  config: FluencyRaceConfig;
  lessonKey: string;
  segmentIndex: number;
  contentOverrides?: Record<string, ContentOverride>;
  onFinished?: () => void;
}) {
  const [phase, setPhase] = useState<"ready" | "running" | "done">("ready");
  const [secondsLeft, setSecondsLeft] = useState(config.seconds);
  const [index, setIndex] = useState(0);
  const [best, setBest] = useState(0);

  // The interval reads these through refs so it never needs to be torn down
  // and rebuilt mid-race just because the word count changed.
  const indexRef = useRef(0);
  const onFinishedRef = useRef(onFinished);
  const lastTickRef = useRef(-1);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);
  useEffect(() => {
    onFinishedRef.current = onFinished;
  }, [onFinished]);

  // Counts down against a wall-clock deadline rather than accumulating
  // interval ticks, so a browser that throttles background timers can't
  // silently hand the class extra seconds. All state changes happen inside
  // the interval callback, never synchronously in the effect body.
  useEffect(() => {
    if (phase !== "running") return;
    const deadline = Date.now() + config.seconds * 1000;
    lastTickRef.current = -1;
    const id = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setSecondsLeft(remaining);
      if (remaining > 0 && remaining <= 3 && lastTickRef.current !== remaining) {
        lastTickRef.current = remaining;
        playTick();
      }
      if (remaining === 0) {
        clearInterval(id);
        playGameOver();
        setPhase("done");
        setBest((b) => Math.max(b, indexRef.current));
        onFinishedRef.current?.();
      }
    }, 250);
    return () => clearInterval(id);
  }, [phase, config.seconds]);

  function start() {
    playPop();
    setIndex(0);
    setSecondsLeft(config.seconds);
    setPhase("running");
  }

  function gotIt() {
    if (phase !== "running") return;
    playCorrect();
    const next = index + 1;
    setIndex(next);
    if (next >= config.words.length) {
      setPhase("done");
      setBest((b) => Math.max(b, next));
      onFinished?.();
    }
  }

  const rawWord = config.words[index];
  const wordOverride = rawWord ? contentOverrides[fluencyRaceWordKey(lessonKey, segmentIndex, index)] : undefined;
  const word = rawWord ? { ...rawWord, text: wordOverride?.textOverride || rawWord.text } : undefined;
  const beatRecord = phase === "done" && index > 0 && index >= best;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span className="flex items-center gap-1.5">
          <GamepadIcon size={14} className="text-indigo" /> {config.title}
        </span>
        {phase === "running" && (
          <span
            className={`font-display text-lg font-bold tabular-nums ${secondsLeft <= 4 ? "text-coral" : "text-ink/50"}`}
          >
            {secondsLeft}s
          </span>
        )}
      </div>

      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 px-5 py-8">
        <AnimatePresence mode="wait">
          {phase === "ready" && (
            <motion.div key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-3">
              <Vora size={56} mood="excited" bob />
              <p className="text-center font-display text-xl font-bold text-ink">
                How many words can we read in {config.seconds} seconds?
              </p>
              {best > 0 && <p className="text-sm font-bold text-amber-dark">Our record: {best} words</p>}
              <Button onClick={start} variant="secondary" className="!px-7 !py-2.5 !text-lg">
                Start the race! →
              </Button>
            </motion.div>
          )}

          {phase === "running" && word && (
            <motion.div key={`run-${index}`} initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center gap-5">
              <p className="font-display text-7xl font-bold text-indigo-dark">{word.text}</p>
              <Button onClick={gotIt} variant="secondary" className="!px-8 !py-3 !text-lg">
                Got it! →
              </Button>
              <p className="font-display text-sm font-bold text-ink/40 tabular-nums">{index} read so far</p>
            </motion.div>
          )}

          {phase === "done" && (
            <motion.div
              key="done"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 16 }}
              className="flex flex-col items-center gap-3"
            >
              <Vora size={64} mood="excited" bob celebrate />
              <p className="font-display text-4xl font-bold text-mint-dark tabular-nums">{index} words!</p>
              {beatRecord && (
                <p className="flex items-center gap-1.5 text-base font-bold text-amber-dark">
                  <SparkleIcon size={16} /> New class record!
                </p>
              )}
              <Button onClick={start} variant="secondary" className="!px-6 !py-2 !text-base">
                Race again →
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
