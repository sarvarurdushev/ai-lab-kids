"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * The single choke point for every infinite float / scroll-parallax on the
 * editorial surface. Routing all of it through one component makes
 * reduced-motion correctness a one-file guarantee instead of a per-callsite
 * discipline — see components/editorial/motion.ts.
 *
 * Two nested motion elements on purpose: this component only ever drives
 * `y` (float) and scroll-linked `y` (parallax); entrance transforms
 * (opacity/scale) belong to a separate outer element, same discipline as
 * mascot/Vora.tsx's antenna ("purely via scale/rotate so it never fights
 * the idle bob loop's y").
 */
export function FloatLayer({
  children,
  index = 0,
  parallax = false,
  className = "",
}: {
  children: ReactNode;
  /** Staggers each layer's float period/phase so a group doesn't move in lockstep. */
  index?: number;
  parallax?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], parallax && !reduce ? [-40, 40] : [0, 0]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  // Parallax (a scroll-linked MotionValue on `y`) and the infinite float
  // loop (an `animate` keyframe on `y`) can't both drive the same style prop
  // on one motion element, so parallax gets its own outer wrapper and the
  // float loop stays on an inner one.
  const floater = (
    <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 5 + index * 0.6, repeat: Infinity, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );

  if (!parallax) {
    return (
      <div ref={ref} className={className}>
        {floater}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ y: parallaxY }}>
      {floater}
    </motion.div>
  );
}
