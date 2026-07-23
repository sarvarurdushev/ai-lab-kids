"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

// A generic, content-agnostic "proof of behavior" loop used by every
// "Is It AI?" item, so a pre-reader can decide AI vs. not from what they
// SEE happen, not from a caption they'd have to read. Two different
// generic situations (a star, then a heart) arrive one after another.
// If the item is AI, its reaction changes to match whichever situation
// just arrived. If it isn't, the reaction is the exact same every time,
// no matter what happened. Reused across ~60 scenario items instead of
// hand-animating each one individually.

const SITUATIONS = ["⭐", "❤️"] as const;
const STAGE_MS = 1000;

export function GenericBehaviorDemo({ isAI, icon, iconImageUrl }: { isAI: boolean; icon: string; iconImageUrl?: string | null }) {
  // 0: situation A arrives, 1: reaction to A, 2: situation B arrives, 3: reaction to B
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStage((s) => (s + 1) % 4), STAGE_MS);
    return () => clearInterval(id);
  }, []);

  const situationIndex = stage < 2 ? 0 : 1;
  const situation = SITUATIONS[situationIndex];
  const reacted = stage === 1 || stage === 3;

  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink/5">
        <AnimatePresence mode="wait">
          <motion.span
            key={situationIndex}
            initial={{ opacity: 0, x: -14, scale: 0.6 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="text-3xl"
          >
            {situation}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        animate={reacted ? { scale: [1, 1.18, 1] } : { scale: 1 }}
        transition={{ duration: 0.35 }}
        className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-indigo/10 text-6xl"
      >
        {iconImageUrl ? <Image src={iconImageUrl} alt="" fill sizes="112px" className="object-cover" /> : icon}
      </motion.div>

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink/5">
        <AnimatePresence mode="wait">
          {reacted && (
            <motion.span
              key={isAI ? situationIndex : "fixed"}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.25 }}
              className="text-3xl"
            >
              {isAI ? situation : "✅"}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
