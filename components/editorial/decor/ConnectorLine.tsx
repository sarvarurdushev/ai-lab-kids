"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Accent } from "../tokens";
import { ACCENT_STROKE } from "../tokens";
import { PillTag } from "../PillTag";
import { drawPath, VIEWPORT_ITEM, scaleIn } from "../motion";

export interface ConnectorPoint {
  x: number;
  y: number;
}

/**
 * Ported from components/home/Marketing.tsx's smoothPath (kept verbatim) —
 * a smooth quadratic-through-midpoints curve from an ordered point list.
 */
export function smoothPath(points: ConnectorPoint[]): string {
  if (points.length === 0) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const midX = (points[i].x + points[i + 1].x) / 2;
    const midY = (points[i].y + points[i + 1].y) / 2;
    d += ` Q ${points[i].x} ${points[i].y} ${midX} ${midY}`;
  }
  const last = points[points.length - 1];
  d += ` T ${last.x} ${last.y}`;
  return d;
}

/**
 * Deterministic per-point jitter (not Math.random — SSR and client must
 * agree) so a curve reads hand-drawn rather than CAD-smooth. Rounded to 2
 * decimals: Math.sin isn't guaranteed bit-identical across JS engines
 * (Node SSR vs. browser), and unrounded output caused hydration mismatches.
 */
export function wobble(points: ConnectorPoint[], seed = 1): ConnectorPoint[] {
  return points.map((p, i) => {
    const n = Math.sin((i + 1) * seed * 12.9898) * 43758.5453;
    const jitter = (n - Math.floor(n)) * 4 - 2; // deterministic pseudo-random in [-2, 2]
    return { x: p.x, y: Math.round((p.y + jitter) * 100) / 100 };
  });
}

export interface ConnectorLabel {
  /** Position in the same viewBox units as `points` — not a path-length fraction, so placement stays exact under preserveAspectRatio="none". */
  x: number;
  y: number;
  text: string;
  accent: Accent;
}

/**
 * The thin hand-drawn curve with an arrowhead and floating pill labels —
 * evolved from Marketing.tsx's ConnectorLine + HeroConstellation SVGs.
 * hidden below lg, same discipline as GalleryJourneyPath: absolute-coordinate
 * overlays don't survive narrow widths.
 */
export function ConnectorLine({
  points,
  viewBox,
  accent = "navy",
  labels = [],
  delay = 0,
  seed = 1,
  className = "hidden lg:block",
  viewport = VIEWPORT_ITEM,
}: {
  points: ConnectorPoint[];
  viewBox: { w: number; h: number };
  accent?: Accent;
  labels?: ConnectorLabel[];
  delay?: number;
  seed?: number;
  className?: string;
  /** Defaults to VIEWPORT_ITEM's 50%-visible threshold — override for a target much wider than the viewport (e.g. a horizontally-scrolling track), where 50% of the element's own bounds can never be on-screen at once. */
  viewport?: { once?: boolean; amount?: number | "some" | "all" };
}) {
  const reduce = useReducedMotion();
  const d = smoothPath(wobble(points, seed));
  const markerId = `al-connector-arrow-${accent}`;

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 ${viewBox.w} ${viewBox.h}`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <marker id={markerId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10" fill="none" className={ACCENT_STROKE[accent]} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>
        {reduce ? (
          <path d={d} fill="none" className={ACCENT_STROKE[accent]} strokeWidth={1.5} strokeLinecap="round" markerEnd={`url(#${markerId})`} />
        ) : (
          <motion.path
            d={d}
            fill="none"
            className={ACCENT_STROKE[accent]}
            strokeWidth={1.5}
            strokeLinecap="round"
            markerEnd={`url(#${markerId})`}
            variants={drawPath}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ ...drawPath.show.transition, delay }}
          />
        )}
      </svg>
      {labels.map((label, i) => (
        <motion.div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(label.x / viewBox.w) * 100}%`, top: `${(label.y / viewBox.h) * 100}%` }}
          variants={reduce ? undefined : scaleIn}
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={VIEWPORT_ITEM}
          transition={{ ...scaleIn.show.transition, delay: delay + 0.5 + i * 0.15 }}
        >
          <PillTag accent={label.accent}>{label.text}</PillTag>
        </motion.div>
      ))}
    </div>
  );
}
