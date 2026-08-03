"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import type { MotionValue } from "motion/react";
import type { Tilt } from "./tokens";
import { TILT } from "./tokens";
import { FloatLayer } from "./decor/FloatLayer";
import { ParallaxLayer } from "./decor/usePointerParallax";
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

// z=0 (background, e.g. the sun) barely drifts toward the cursor; z=5
// (foreground, e.g. the terminal card) leads it the most — depth mirrors
// the collage's own stacking order, so parallax reads as physical layering
// rather than a generic effect applied uniformly to everything.
const PARALLAX_BASE = 4;
const PARALLAX_PER_Z = 3.6;

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
  pointerX,
  pointerY,
  className = "",
}: {
  layers: CollageLayer[];
  /** Normalized (-1..1) cursor position from usePointerParallax — when both are provided, each layer drifts toward the cursor scaled by its own z (deeper layers travel less). Omit for a static (or scroll/float-only) collage. */
  pointerX?: MotionValue<number>;
  pointerY?: MotionValue<number>;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {layers.map((layer, i) => {
        const node = layer.float ? <FloatLayer index={layer.floatIndex ?? i}>{layer.node}</FloatLayer> : layer.node;
        const depth = PARALLAX_BASE + (layer.z ?? i) * PARALLAX_PER_Z;
        return (
          <motion.div
            key={layer.key}
            variants={scaleIn}
            initial="hidden"
            animate="show"
            transition={{ ...scaleIn.show.transition, delay: layer.delay ?? i * 0.09 }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 ${TILT[layer.tilt ?? 0]}`}
            style={{ top: layer.top, left: layer.left, zIndex: layer.z ?? i }}
          >
            {pointerX && pointerY ? (
              <ParallaxLayer x={pointerX} y={pointerY} depth={depth}>
                {node}
              </ParallaxLayer>
            ) : (
              node
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
