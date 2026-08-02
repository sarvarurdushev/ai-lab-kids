import type { Accent } from "../tokens";
import { ACCENT_FILL, ACCENT_COLOR } from "../tokens";
import { BLOB_PATHS } from "./HalftoneBlob";

/**
 * The floating cloud — the single most-reused decoration on the site (hero,
 * stats band, guide cover, legal pages, contact). Two stacked copies of the
 * same path (flat tint behind, halftone in front, offset 4px) for the same
 * "collage, not vector-clean" texture as HalftoneBlob.
 */
export function CloudShape({
  accent = "sky",
  size = 140,
  opacity = 1,
  className = "",
}: {
  accent?: Accent;
  size?: number;
  opacity?: number;
  className?: string;
}) {
  const d = BLOB_PATHS.cloud;
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true" className={className} style={{ opacity }}>
      <path d={d} className={ACCENT_FILL[accent]} opacity={0.18} />
      <g transform="translate(4, 4)">
        <path d={d} fill="url(#al-halftone-dot)" className={ACCENT_COLOR[accent]} />
      </g>
    </svg>
  );
}
