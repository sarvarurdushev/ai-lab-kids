"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Bespoke demo for "Guesses your drawing" — a doodle draws itself, then a
// guess bubble pops up. A different doodle gets a different guess, showing
// it actually looked at THIS drawing rather than always saying one thing.

const DOODLES = [
  {
    d: "M 18 38 A 14 14 0 1 0 46 38 A 14 14 0 1 0 18 38 M 20 27 L 15 12 L 28 23 Z M 44 27 L 49 12 L 36 23 Z",
    guess: "🐱",
    label: "Cat!",
  },
  { d: "M 32 56 L 32 34 M 16 36 L 32 8 L 48 36 Z", guess: "🌳", label: "Tree!" },
] as const;
const STAGE_MS = 1400;

export function QuickDrawDemo() {
  const [round, setRound] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRound((r) => r + 1), STAGE_MS);
    return () => clearInterval(id);
  }, []);

  const doodleIndex = Math.floor(round / 2) % DOODLES.length;
  const showGuess = round % 2 === 1;
  const doodle = DOODLES[doodleIndex];

  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-ink/5">
        <svg viewBox="0 0 64 64" width="52" height="52">
          <motion.path
            key={doodleIndex}
            d={doodle.d}
            fill="none"
            stroke="#241f33"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
        </svg>
      </div>
      <div className="flex h-12 w-24 items-center">
        <AnimatePresence mode="wait">
          {showGuess && (
            <motion.div
              key={doodleIndex}
              initial={{ opacity: 0, scale: 0.6, x: -8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-1 rounded-2xl bg-indigo/10 px-3 py-2 text-sm font-bold text-indigo-dark"
            >
              <span>{doodle.guess}</span>
              <span>{doodle.label}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
