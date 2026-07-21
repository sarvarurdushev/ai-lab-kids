"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Bespoke demo for "A jigsaw puzzle" — the piece only ever moves when a
// hand pushes it there. No hand, no movement: it never decides anything
// on its own.

const STAGE_MS = 900;

export function JigsawPuzzleDemo() {
  // 0: piece sits outside the slot, no hand. 1: a hand pushes it in. 2: settled in the slot.
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStage((s) => (s + 1) % 3), STAGE_MS);
    return () => clearInterval(id);
  }, []);

  const inSlot = stage >= 1;

  return (
    <div className="flex items-center justify-center py-2">
      <div className="relative flex h-20 w-28 items-center justify-center rounded-2xl bg-ink/5">
        <div className="h-10 w-10 rounded-md border-2 border-dashed border-ink/25" />
        <motion.span
          className="absolute text-3xl"
          animate={{ x: inSlot ? 0 : -42, scale: stage === 2 ? [1, 1.22, 1] : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          🧩
        </motion.span>
        <AnimatePresence>
          {stage === 1 && (
            <motion.span
              key="hand"
              initial={{ opacity: 0, x: -54, y: -6 }}
              animate={{ opacity: 1, x: -22, y: -6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-7 text-2xl"
            >
              ✋
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
