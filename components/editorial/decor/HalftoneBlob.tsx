import type { Accent } from "../tokens";
import { ACCENT_FILL, ACCENT_COLOR } from "../tokens";

// Hand-authored smooth cubic paths, 0-200 viewBox — the "organic abstract
// shape" the brief asks for, built without any image asset.
const BLOB_PATHS = {
  pebble: "M164 62c14 24 8 58-12 78s-56 30-82 18S28 112 36 84 72 30 100 26s50 12 64 36Z",
  cloud: "M52 118c-18 0-30-12-30-27s13-26 29-26c4-19 21-33 41-33 18 0 34 11 40 27 3-1 7-2 11-2 17 0 31 14 31 31s-14 30-31 30H52Z",
  splat: "M100 18c22 6 26 26 42 32s34 2 40 20-14 30-14 46 16 28 6 42-32 6-48 14-24 26-42 22-22-24-36-34-34-8-38-26 12-28 12-44-14-30-4-44 24-4 40-14 20-20 42-14Z",
} as const;

export type BlobShape = keyof typeof BLOB_PATHS;

/**
 * A flat tint fill plus the same path filled with the halftone-dot pattern,
 * offset a few pixels — reads like a mis-registered print, which is exactly
 * the "editorial collage" texture the brief is after. Always decorative.
 */
export function HalftoneBlob({
  shape = "pebble",
  accent = "amber",
  size = 160,
  opacity = 0.9,
  className = "",
}: {
  shape?: BlobShape;
  accent?: Accent;
  size?: number;
  opacity?: number;
  className?: string;
}) {
  const d = BLOB_PATHS[shape];
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      <path d={d} className={ACCENT_FILL[accent]} opacity={0.22} />
      <g transform="translate(4, 3)">
        <path d={d} fill="url(#al-halftone-dot)" className={ACCENT_COLOR[accent]} />
      </g>
    </svg>
  );
}

export { BLOB_PATHS };
