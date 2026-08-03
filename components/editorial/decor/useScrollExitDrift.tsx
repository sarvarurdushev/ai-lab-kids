"use client";

import { useRef } from "react";
import type { RefObject } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import type { MotionValue } from "motion/react";

/**
 * Tracks how far a section has scrolled through its own exit at the top of
 * the viewport — 0 while its bottom edge is still at or below the viewport's
 * bottom (nothing has started leaving yet), 1 once its bottom edge has
 * cleared the viewport's top (fully scrolled past). Pair with ScrollExitLayer
 * to give a composition's pieces their own lag/drift as the section scrolls
 * away, instead of the whole thing sliding off as one block — the "hero
 * disassembles into scattered pieces" reference effect, done by giving each
 * piece its own slower-than-1:1 exit rather than moving anything faster than
 * the scroll itself.
 *
 * Under prefers-reduced-motion, `exitProgress` stays frozen at 0 (no drift,
 * every layer keeps its normal assembled position) rather than snapping to
 * the scattered end state, matching this codebase's "render the static
 * starting composition" convention for motion-off users.
 */
export function useScrollExitDrift<T extends HTMLElement>(): {
  ref: RefObject<T | null>;
  exitProgress: MotionValue<number>;
} {
  const ref = useRef<T>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const exitProgress = useTransform(scrollYProgress, (v) => (reduce ? 0 : v));
  return { ref, exitProgress };
}

/**
 * Scales an exitProgress value into an (x, y) drift for one piece of a
 * composition — a fixed pixel amount at full exit (progress = 1), not a
 * speed multiplier, since section height/scroll distance varies by
 * viewport. `dy` is typically positive (a downward counter-offset that
 * *slows* the piece's apparent upward exit relative to the page around
 * it — never negative, which would make it exit faster than the scroll
 * itself and look like it's being flung ahead rather than left behind).
 * `dx` is the "which corner" component and can go either direction.
 */
export function ScrollExitLayer({
  progress,
  dx,
  dy,
  children,
  className = "",
}: {
  progress: MotionValue<number>;
  dx: number;
  dy: number;
  children: React.ReactNode;
  className?: string;
}) {
  const x = useTransform(progress, [0, 1], [0, dx]);
  const y = useTransform(progress, [0, 1], [0, dy]);
  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}
