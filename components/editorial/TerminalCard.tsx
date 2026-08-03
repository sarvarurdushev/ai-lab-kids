"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Tilt } from "./tokens";
import { TILT } from "./tokens";
import { curriculumStats } from "@/lib/curriculum";
import { MatrixRain } from "@/components/home/MatrixRain";

/**
 * Extracted from components/home/Marketing.tsx's SystemStatusCard —
 * "the box with green words," kept intact (macOS titlebar, scanlines,
 * blinking cursor, textShadow) per the explicit requirement to preserve it.
 * Numbers come straight from curriculumStats() so this can't drift into
 * marketing fiction as content changes — same principle as the Program
 * Guide's trust panel.
 */
export function TerminalCard({
  size = "hero",
  rain = false,
  tilt = 0,
  className = "",
}: {
  size?: "hero" | "inline";
  rain?: boolean;
  tilt?: Tilt;
  className?: string;
}) {
  const stats = curriculumStats();
  const allLines = [
    "$ vora --status",
    `[OK] ${stats.lessons} lessons authored`,
    `[OK] ${stats.activities} activities across ${stats.engineCount} engine types`,
    `[OK] ${stats.aiLabActivities} real AI-literacy activities`,
    "[OK] 0 live AI calls — fully scripted, always safe",
    "$ _",
  ];
  const lines = size === "inline" ? [allLines[0], allLines[1], allLines[4], allLines[5]] : allLines;
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: reduce ? 0 : 0.5 }}
      className={`al-scanlines relative overflow-hidden rounded-xl border border-terminal-dim bg-terminal-bg p-5 font-mono text-terminal shadow-terminal ${size === "inline" ? "text-[12px] leading-relaxed" : "text-[13px] leading-relaxed sm:text-sm"} ${TILT[tilt]} ${className}`}
      style={{ textShadow: "0 0 5px rgba(51,255,0,0.5)" }}
    >
      {rain && (
        <MatrixRain
          className="absolute inset-0 h-full w-full opacity-45 [mask-image:linear-gradient(to_bottom,black,black_60%,transparent_95%)]"
          bgRgba="rgba(7, 7, 13, 0.13)"
        />
      )}
      <div className="relative">
        {/* A fake window titlebar sells "this is a terminal," not just green text on black. */}
        <div className="mb-3 -mt-1 flex items-center gap-1.5 border-b border-terminal-dim pb-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/70" />
          <span className="ml-2 text-[10px] font-bold tracking-wider text-terminal/40 uppercase">vora@ai-lab-kids</span>
        </div>
        {lines.map((line, i) => (
          <motion.p
            key={line}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : i * 0.35 }}
            className={i === lines.length - 1 ? "flex items-center gap-1" : undefined}
          >
            {i === lines.length - 1 ? (
              <>
                {line}
                <span className="al-animate-blink inline-block h-3.5 w-2 translate-y-0.5 bg-terminal" />
              </>
            ) : (
              line
            )}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

/** A single-line terminal accent for the footer / auth panel — threads the hacker motif across the public surface without a full card. */
export function TerminalStrip({ className = "" }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full bg-terminal-bg px-3 py-1.5 font-mono text-[10px] text-terminal ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="al-animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-terminal opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-terminal" />
      </span>
      $ auth --ready
    </p>
  );
}
