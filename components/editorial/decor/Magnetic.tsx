"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

/**
 * Cursor-following pull for a small interactive element (a button/link) —
 * distinct from usePointerParallax's container-scale hero effect. The
 * bounding rect is cached on pointerenter and never re-read inside the move
 * handler (see the pointer/scroll guardrails in motion.ts); offsets are
 * plain MotionValues driven imperatively via a native listener so a hover
 * doesn't drive a React re-render per pointermove. The transform lives on
 * this wrapper span, never on the child link/button itself, so it can't
 * fight that element's own focus-visible outline (see EditorialNav.tsx's
 * note on the same hazard).
 */
export function Magnetic({
  children,
  strength = 10,
  radius = 90,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 200, damping: 15, mass: 0.4 });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    function handleEnter(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      rectRef.current = (el as HTMLSpanElement).getBoundingClientRect();
    }

    function handleMove(e: PointerEvent) {
      const rect = rectRef.current;
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const pull = Math.max(0, 1 - dist / radius);
      rawX.set(dx * pull * (strength / radius));
      rawY.set(dy * pull * (strength / radius));
    }

    function handleLeave() {
      rectRef.current = null;
      rawX.set(0);
      rawY.set(0);
    }

    el.addEventListener("pointerenter", handleEnter);
    el.addEventListener("pointermove", handleMove, { passive: true });
    el.addEventListener("pointerleave", handleLeave);
    return () => {
      el.removeEventListener("pointerenter", handleEnter);
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [reduce, radius, strength, rawX, rawY]);

  if (reduce) {
    return <span className={`inline-block ${className}`}>{children}</span>;
  }

  return (
    <motion.span ref={ref} style={{ x, y, display: "inline-block" }} className={className}>
      {children}
    </motion.span>
  );
}
