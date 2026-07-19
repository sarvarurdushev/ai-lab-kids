"use client";

import { useId } from "react";

/** A per-instance, DOM-safe id for SVG defs (gradients, clip paths) so multiple copies of the same icon on one page don't clash. */
export function useSvgId(prefix: string): string {
  const id = useId();
  return `${prefix}-${id.replace(/:/g, "")}`;
}
