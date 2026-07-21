"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Bespoke demo for "A thermostat" — the needle is drawn once and never
// animates, no matter which mood arrives, because a thermostat can't
// change its own mind. Only the room's mood changes; the setting doesn't.

const MOODS = ["🥵", "🥶"] as const;
const STAGE_MS = 1300;

export function ThermostatDemo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % 2), STAGE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink/5">
        <AnimatePresence mode="wait">
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="text-3xl"
          >
            {MOODS[i]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        key={i}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.35 }}
        className="flex h-20 w-20 items-center justify-center"
      >
        <svg viewBox="0 0 100 100" width="80" height="80">
          <circle cx="50" cy="50" r="42" fill="#fff" stroke="#241f33" strokeWidth="3" />
          {Array.from({ length: 8 }).map((_, idx) => {
            const angle = (idx / 8) * 2 * Math.PI;
            const x1 = 50 + Math.cos(angle) * 33;
            const y1 = 50 + Math.sin(angle) * 33;
            const x2 = 50 + Math.cos(angle) * 39;
            const y2 = 50 + Math.sin(angle) * 39;
            return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c9c5db" strokeWidth="2" />;
          })}
          {/* Needle: fixed straight up, always, no matter what mood arrives. */}
          <line x1="50" y1="50" x2="50" y2="20" stroke="#d94f4f" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="50" r="5" fill="#241f33" />
        </svg>
      </motion.div>
    </div>
  );
}
