"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Bespoke demo for "Finds the fastest way" — draws the direct route, hits
// a roadblock, then draws a brand new route around it on its own. Pure
// width animation (no raw SVG geometry attributes) so it's safe across
// browsers.

const STAGE_MS = 950;

export function MapRouteDemo() {
  // 0: draw the direct route. 1: it's blocked! 2: draw a new route around it. 3: arrived, pause.
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStage((s) => (s + 1) % 4), STAGE_MS);
    return () => clearInterval(id);
  }, []);

  const directWidth = stage === 0 ? "100%" : stage === 1 ? "60%" : "0%";
  const altWidth = stage >= 2 ? "100%" : "0%";

  return (
    <div className="flex items-center justify-center py-2">
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-ink/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🏠</span>
          <div className="relative h-2 w-20 overflow-hidden rounded-full bg-ink/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-indigo"
              animate={{ width: directWidth }}
              transition={{ duration: 0.45 }}
            />
          </div>
          <span className="text-lg">🏁</span>
          <span className="w-4">
            <AnimatePresence>
              {stage === 1 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm"
                >
                  🚧
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-[22px]" />
          <div className="relative h-2 w-20 overflow-hidden rounded-full bg-ink/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-mint"
              animate={{ width: altWidth }}
              transition={{ duration: 0.45 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
