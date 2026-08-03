"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";

/**
 * Container-scale cursor parallax — distinct from Magnetic's small-element
 * pull. Returns a `ref` to attach to the tracking container plus two
 * spring-smoothed MotionValues normalized to roughly [-1, 1] (cursor at the
 * container's edge), which callers scale by their own per-layer depth.
 *
 * The container's rect is measured once on mount and re-measured only on
 * resize/scroll (a ResizeObserver plus a passive scroll listener), never
 * inside the pointermove handler itself — see the pointer/scroll guardrails
 * in motion.ts. Under prefers-reduced-motion, no listener is attached at
 * all and both values stay frozen at 0, matching this codebase's existing
 * convention (render the static end-state, don't just skip an animation).
 */
export function usePointerParallax<T extends HTMLElement>({
  stiffness = 150,
  damping = 20,
  mass = 0.5,
}: { stiffness?: number; damping?: number; mass?: number } = {}) {
  const ref = useRef<T>(null);
  const reduce = useReducedMotion();
  const rectRef = useRef<DOMRect | null>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness, damping, mass });
  const my = useSpring(rawY, { stiffness, damping, mass });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    function measure() {
      rectRef.current = el!.getBoundingClientRect();
    }
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("scroll", measure, { passive: true });

    function handleMove(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      const rect = rectRef.current;
      if (!rect || rect.width === 0 || rect.height === 0) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (e.clientX - cx) / (rect.width / 2);
      const ny = (e.clientY - cy) / (rect.height / 2);
      rawX.set(Math.max(-1, Math.min(1, nx)));
      rawY.set(Math.max(-1, Math.min(1, ny)));
    }

    function handleLeave() {
      rawX.set(0);
      rawY.set(0);
    }

    el.addEventListener("pointermove", handleMove, { passive: true });
    el.addEventListener("pointerleave", handleLeave);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", measure);
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [reduce, rawX, rawY]);

  return { ref, mx, my, active: !reduce };
}

/**
 * Scales a usePointerParallax pair by a fixed depth and applies it as a
 * transform on its own wrapper — never on the same element as an entrance
 * or float animation, same two-motion-element discipline FloatLayer.tsx
 * documents for parallax vs. float. `depth` is the max px travel at the
 * container's edge; smaller for "farther" layers, larger for "nearer" ones.
 */
export function ParallaxLayer({
  x,
  y,
  depth,
  children,
  className = "",
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  depth: number;
  children: ReactNode;
  className?: string;
}) {
  const tx = useTransform(x, (v) => v * depth);
  const ty = useTransform(y, (v) => v * depth);
  return (
    <motion.div style={{ x: tx, y: ty }} className={className}>
      {children}
    </motion.div>
  );
}
