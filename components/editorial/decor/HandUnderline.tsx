"use client";

import { motion, useReducedMotion } from "motion/react";
import { drawPath } from "../motion";

/** The amber marker-stroke under one hero word — wrap the target word in a `relative` span and drop this inside it. */
export function HandUnderline({ delay = 0.55, className = "" }: { delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none absolute -bottom-1 left-0 h-[0.35em] w-full ${className}`}
    >
      {reduce ? (
        <path d="M2,9 C 40,13 80,4 118,8 S 175,11 198,6" className="stroke-amber" strokeWidth={7} strokeLinecap="round" fill="none" />
      ) : (
        <motion.path
          d="M2,9 C 40,13 80,4 118,8 S 175,11 198,6"
          className="stroke-amber"
          strokeWidth={7}
          strokeLinecap="round"
          fill="none"
          variants={drawPath}
          initial="hidden"
          animate="show"
          transition={{ ...drawPath.show.transition, delay }}
        />
      )}
    </svg>
  );
}
