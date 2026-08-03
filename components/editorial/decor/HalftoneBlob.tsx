import type { Accent, HalftoneTexture } from "../tokens";
import { ACCENT_FILL, ACCENT_COLOR, TEXTURE } from "../tokens";

// Hand-authored smooth cubic paths, 0-200 viewBox — the "organic abstract
// shape" the brief asks for, built without any image asset.
const BLOB_PATHS = {
  pebble: "M164 62c14 24 8 58-12 78s-56 30-82 18S28 112 36 84 72 30 100 26s50 12 64 36Z",
  cloud: "M52 118c-18 0-30-12-30-27s13-26 29-26c4-19 21-33 41-33 18 0 34 11 40 27 3-1 7-2 11-2 17 0 31 14 31 31s-14 30-31 30H52Z",
  splat: "M100 18c22 6 26 26 42 32s34 2 40 20-14 30-14 46 16 28 6 42-32 6-48 14-24 26-42 22-22-24-36-34-34-8-38-26 12-28 12-44-14-30-4-44 24-4 40-14 20-20 42-14Z",
} as const;

export type BlobShape = keyof typeof BLOB_PATHS;

// The flat plate and the halftone-dot plate at the ratio that makes each
// role read correctly. "accent" (small, foreground, e.g. beside a numeral)
// wants the dot plate to dominate so the shape reads immediately. "field"
// (large, cropped background texture) wants the flat tint to dominate and
// the dots to sit underneath as grain — the inverse ratio is what makes a
// big field read as printed paper rather than a solid coloured disc.
const ROLE_OPACITY: Record<"accent" | "field", { flat: number; dot: number }> = {
  accent: { flat: 0.22, dot: 1 },
  field: { flat: 0.55, dot: 0.32 },
};

/**
 * A flat tint fill plus the same path filled with a halftone-dot pattern,
 * offset a few pixels — reads like a mis-registered print, which is exactly
 * the "editorial collage" texture the brief is after. Always decorative.
 *
 * The offset is specified in on-screen px (`misregister`), not viewBox
 * units, and converted internally — a fixed viewBox-unit offset looks right
 * at one `size` and wrong at every other, since the perceptual "readable as
 * intentional mis-registration" band is roughly 6-10 screen px regardless
 * of how big the shape is: much smaller and it reads as an anti-aliasing
 * artifact, much larger and it reads as a mistake rather than a printing
 * quirk. (This is exactly the bug the previous fixed `translate(4, 3)`
 * had — it landed at 2.8px on a 140px accent, squarely in "looks broken.")
 */
export function HalftoneBlob({
  shape = "pebble",
  accent = "amber",
  size = 160,
  role = "accent",
  texture = "dot",
  misregister = 8,
  opacity = 1,
  className = "",
}: {
  shape?: BlobShape;
  accent?: Accent;
  size?: number;
  /** "accent": small foreground sticker (today's balance). "field": large background texture — inverts the plate ratio so it reads as paper grain, not a disc. */
  role?: "accent" | "field";
  texture?: HalftoneTexture;
  /** On-screen px offset between the flat and dotted plates. Default 8 sits in the "reads as printed, not broken" band; scale only if this shape is unusually small or huge. */
  misregister?: number;
  /** Overall intensity multiplier, applied to both plates equally so their ratio (and therefore the "printed" read) is preserved. */
  opacity?: number;
  className?: string;
}) {
  const d = BLOB_PATHS[shape];
  const { flat, dot } = ROLE_OPACITY[role];
  const offset = (misregister / size) * 200;

  return (
    <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true" className={className}>
      <path d={d} className={ACCENT_FILL[accent]} opacity={flat * opacity} />
      <g transform={`translate(${offset}, ${offset * 0.75})`}>
        <path d={d} fill={TEXTURE[texture]} className={ACCENT_COLOR[accent]} opacity={dot * opacity} />
      </g>
    </svg>
  );
}

export { BLOB_PATHS };
