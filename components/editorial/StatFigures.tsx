"use client";

import { motion } from "motion/react";
import type { Accent } from "./tokens";
import { ACCENT_TEXT, ACCENT_COLOR } from "./tokens";
import { fadeUp, stagger, VIEWPORT_SECTION } from "./motion";

export interface Stat {
  value: string | number;
  label: string;
  accent: Accent;
}

/**
 * The oversized-numeral stat row (shared by the homepage and the Program
 * Guide cover) — the reference's halftone pie-chart moment, without a real
 * chart: each numeral in an AA-safe accent-ink sits over a full-saturation
 * halftone disc. No count-up animation; the numbers already carry the
 * weight on their own.
 */
export function StatFigures({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_SECTION}
      className={`grid grid-cols-2 divide-y divide-rule sm:grid-cols-4 sm:divide-y-0 sm:divide-x ${className}`}
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={fadeUp} className="relative flex flex-col items-start gap-1 px-0 py-6 sm:px-8 sm:py-0">
          <span
            aria-hidden="true"
            className={`al-halftone absolute top-0 left-0 h-16 w-16 rounded-full opacity-20 sm:left-8 ${ACCENT_COLOR[stat.accent]}`}
          />
          <p className={`font-editorial al-optical-mid relative text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-extrabold ${ACCENT_TEXT[stat.accent]}`}>
            {stat.value}
          </p>
          <p className="relative text-sm font-semibold text-slate">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
