// Hand-authored jagged strips, no repeating rhythm — 14ish irregular
// segments each, 1200x24 viewBox.
const TORN_TOP_D =
  "M0,24 L0,10 L28,14 L54,4 L79,12 L103,2 L131,11 L158,5 L186,13 L214,3 L245,10 L271,1 L299,9 L328,4 L356,12 L385,2 L410,11 L438,5 L467,13 L493,3 L520,10 L548,1 L576,9 L602,4 L629,12 L657,2 L683,11 L710,5 L737,13 L763,3 L790,10 L816,1 L843,9 L869,4 L896,12 L922,2 L949,11 L975,5 L1002,13 L1028,3 L1055,10 L1081,1 L1108,9 L1134,4 L1161,12 L1187,2 L1200,7 L1200,24 Z";
const TORN_BOTTOM_D =
  "M0,0 L0,14 L28,10 L54,20 L79,12 L103,22 L131,13 L158,19 L186,11 L214,21 L245,14 L271,23 L299,15 L328,20 L356,12 L385,22 L410,13 L438,19 L467,11 L493,21 L520,14 L548,23 L576,15 L602,20 L629,12 L657,22 L683,13 L710,19 L737,11 L763,21 L790,14 L816,23 L843,15 L869,20 L896,12 L922,22 L949,13 L975,19 L1002,11 L1028,21 L1055,14 L1081,23 L1108,15 L1134,20 L1161,12 L1187,22 L1200,17 L1200,0 Z";

/**
 * A torn *section boundary* — not a clip-path (which would clip child
 * content and shadows inconsistently across browsers), but an SVG strip
 * filled in the destination section's colour, painted on top of the
 * boundary at -top-px/-bottom-px. For a torn paper *fragment* (a small
 * scrap, not a boundary), use clip-path: url(#al-torn-clip) instead — see
 * HalftoneDefs.
 */
export function TornEdge({
  position = "top",
  fill = "fill-white",
  height = 24,
  className = "",
}: {
  position?: "top" | "bottom";
  /** A literal Tailwind fill-* class matching the section this edge paints into. */
  fill?: string;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ height }}
      className={`pointer-events-none absolute inset-x-0 w-full ${position === "top" ? "-top-px" : "-bottom-px"} ${className}`}
    >
      <path d={position === "top" ? TORN_TOP_D : TORN_BOTTOM_D} className={fill} />
    </svg>
  );
}
