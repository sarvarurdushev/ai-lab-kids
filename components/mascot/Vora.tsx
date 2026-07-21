"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSvgId } from "./useSvgId";

export type VoraMood = "happy" | "sad" | "neutral" | "thinking";

const EYES: Record<VoraMood, string> = {
  happy: "M 36 62 Q 42 56 48 62 M 64 62 Q 70 56 76 62",
  sad: "M 36 64 Q 42 70 48 64 M 64 64 Q 70 70 76 64",
  neutral: "M 34 62 L 50 62 M 62 62 L 78 62",
  thinking: "M 34 62 L 50 62 M 62 58 Q 70 54 78 58",
};

const MOUTH: Record<VoraMood, string> = {
  happy: "M 40 78 Q 56 92 72 78",
  sad: "M 40 84 Q 56 72 72 84",
  neutral: "M 44 80 L 68 80",
  thinking: "M 46 80 Q 56 78 66 82",
};

/** Antenna tilt per mood (degrees, rotated around its base) — perky for happy, drooped for sad, tilted for thinking — so Vora's body language reads the mood even before you look at the face. */
const ANTENNA_ROTATION: Record<VoraMood, number> = {
  happy: 18,
  sad: 100,
  neutral: 0,
  thinking: -32,
};

const CHEEK_OPACITY: Record<VoraMood, number> = {
  happy: 1,
  sad: 0.3,
  neutral: 0.75,
  thinking: 0.5,
};

const SPARKLES = [
  { left: "-6%", top: "8%", delay: 0 },
  { left: "94%", top: "-2%", delay: 0.15 },
  { left: "4%", top: "-14%", delay: 0.3 },
  { left: "86%", top: "80%", delay: 0.45 },
  { left: "-8%", top: "68%", delay: 0.6 },
  { left: "48%", top: "-18%", delay: 0.75 },
];

/** Sparkle burst overlay for genuine "you finished!" moments — see the `celebrate` prop below. Kept separate from the everyday `happy` mood so it stays special. */
function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {SPARKLES.map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-lg select-none"
          style={{ left: s.left, top: s.top }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 0.5], y: [-2, -18] }}
          transition={{ duration: 1.3, repeat: Infinity, repeatDelay: 1.1, delay: s.delay, ease: "easeOut" }}
        >
          ✨
        </motion.span>
      ))}
    </div>
  );
}

export function Vora({
  size = 96,
  mood = "neutral",
  className = "",
  bob = false,
  celebrate = false,
  onTap,
}: {
  size?: number;
  mood?: VoraMood;
  className?: string;
  bob?: boolean;
  /** Sparkle burst for a real completion moment (lesson/round finished) — not for routine "happy" faces. */
  celebrate?: boolean;
  /** Optional tap handler — Vora already wiggles on tap via whileTap, this just lets a parent hook in (e.g. a sound effect). */
  onTap?: () => void;
}) {
  const id = useSvgId("vora");
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    let alive = true;
    let timer: ReturnType<typeof setTimeout>;
    (function scheduleBlink() {
      timer = setTimeout(() => {
        if (!alive) return;
        setBlink(true);
        setTimeout(() => alive && setBlink(false), 130);
        scheduleBlink();
      }, 2400 + Math.random() * 2600);
    })();
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={bob ? { y: [0, -6, 0] } : { y: 0 }}
      transition={bob ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
      whileTap={{ scale: 0.9, rotate: -6 }}
      onTap={onTap}
    >
      {celebrate && <Sparkles />}
      <svg viewBox="0 0 112 130" width={size} height={size}>
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a99cf7" />
            <stop offset="100%" stopColor="var(--color-indigo)" />
          </linearGradient>
        </defs>

        {/*
          Antenna pivots at (56,26) where it meets the head. Framer Motion
          can't reliably animate raw SVG geometry attributes (x2/y2/cx/cy —
          they can end up unset on first paint), so the tilt is done purely
          with `rotate` on a group defined in local coordinates around a
          static SVG `translate`, which only ever touches `transform`.
        */}
        <g transform="translate(56,26)">
          <motion.g
            style={{ originX: 0, originY: 0 }}
            animate={{ rotate: ANTENNA_ROTATION[mood] }}
            transition={{ type: "spring", stiffness: 220, damping: 14 }}
          >
            <line x1={0} y1={0} x2={0} y2={-14} stroke="#241f33" strokeWidth={3} strokeLinecap="round" />
            <motion.circle
              cx={0}
              cy={-16}
              r={5}
              fill="var(--color-amber)"
              stroke="#241f33"
              strokeWidth={1.5}
              animate={{ scale: mood === "happy" ? [1, 1.3, 1] : 1 }}
              transition={{ duration: 1.4, repeat: mood === "happy" ? Infinity : 0, repeatDelay: 0.8 }}
            />
          </motion.g>
        </g>

        <rect x={18} y={26} width={76} height={64} rx={26} fill={`url(#${id})`} stroke="#241f33" strokeWidth={2.5} />

        <motion.circle
          cx={30}
          cy={56}
          r={7}
          fill="var(--color-mint)"
          stroke="#241f33"
          strokeWidth={2}
          animate={{ opacity: CHEEK_OPACITY[mood] }}
        />
        <motion.circle
          cx={82}
          cy={56}
          r={7}
          fill="var(--color-coral)"
          stroke="#241f33"
          strokeWidth={2}
          animate={{ opacity: CHEEK_OPACITY[mood] }}
        />

        <rect x={26} y={42} width={60} height={46} rx={18} fill="#fbf8ff" stroke="#241f33" strokeWidth={2} />

        <motion.g animate={{ scaleY: blink ? 0.08 : 1 }} style={{ originY: "62px" }} transition={{ duration: 0.09 }}>
          <AnimatePresence>
            <motion.path
              key={mood}
              d={EYES[mood]}
              stroke="#241f33"
              strokeWidth={4}
              strokeLinecap="round"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            />
          </AnimatePresence>
        </motion.g>

        <AnimatePresence>
          <motion.path
            key={mood}
            d={MOUTH[mood]}
            stroke="#241f33"
            strokeWidth={3.5}
            strokeLinecap="round"
            fill="none"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          />
        </AnimatePresence>

        <rect x={30} y={94} width={52} height={30} rx={14} fill={`url(#${id})`} stroke="#241f33" strokeWidth={2.5} />
        <circle cx={56} cy={109} r={6} fill="var(--color-amber)" stroke="#241f33" strokeWidth={1.5} />
      </svg>
    </motion.div>
  );
}
