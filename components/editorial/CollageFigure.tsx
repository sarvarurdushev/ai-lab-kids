"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import type { Tilt } from "./tokens";
import { TILT } from "./tokens";
import { FloatLayer } from "./decor/FloatLayer";
import { scaleIn } from "./motion";

export interface CollageLayer {
  key: string;
  node: ReactNode;
  /** Position as a percentage of the composition box, anchored at the layer's center. */
  top: string;
  left: string;
  z?: number;
  tilt?: Tilt;
  float?: boolean;
  floatIndex?: number;
  delay?: number;
}

/**
 * Composes a hero/panel collage from an ordered layer list so different
 * pages can build different compositions (sun + polygon + mascot + cloud +
 * terminal, or a lighter sun + mascot + cloud for the auth panel) without
 * new components per page. Each layer enters with `scaleIn`; a `float`
 * layer additionally gets FloatLayer's infinite bob on top, per the
 * "separate entrance transforms from idle loops" rule in motion.ts.
 */
export function CollageFigure({
  layers,
  className = "",
}: {
  layers: CollageLayer[];
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {layers.map((layer, i) => (
        <motion.div
          key={layer.key}
          variants={scaleIn}
          initial="hidden"
          animate="show"
          transition={{ ...scaleIn.show.transition, delay: layer.delay ?? i * 0.09 }}
          className={`absolute -translate-x-1/2 -translate-y-1/2 ${TILT[layer.tilt ?? 0]}`}
          style={{ top: layer.top, left: layer.left, zIndex: layer.z ?? i }}
        >
          {layer.float ? <FloatLayer index={layer.floatIndex ?? i}>{layer.node}</FloatLayer> : layer.node}
        </motion.div>
      ))}
    </div>
  );
}
