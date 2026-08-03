// Shared SVG <defs> for the editorial surface's collage decorations — one
// instance mounted by EditorialShell, referenced by url(#id) everywhere
// else. IDs are fixed (not generated via useSvgId, unlike mascot/Vora.tsx)
// because this is a page-level singleton, not a component repeated many
// times per page — useSvgId solves the opposite problem.
export function HalftoneDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <pattern id="al-halftone-dot" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.6" fill="currentColor" />
        </pattern>
        <pattern id="al-halftone-dense" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="2.4" fill="currentColor" />
        </pattern>
        <pattern id="al-halftone-fine" width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.8" fill="currentColor" />
        </pattern>
        <clipPath id="al-blob-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.82,0.31c0.07,0.12,0.04,0.29-0.06,0.39s-0.28,0.15-0.41,0.09S0.14,0.56,0.18,0.42S0.36,0.15,0.5,0.13S0.75,0.19,0.82,0.31Z" />
        </clipPath>
        <clipPath id="al-arch-clip" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.4 C0,0.18,0.22,0,0.5,0 S1,0.18,1,0.4 L1,1 Z" />
        </clipPath>
        <clipPath id="al-torn-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.02,0.04 L0.18,0.01 L0.34,0.05 L0.5,0 L0.64,0.04 L0.8,0.01 L0.97,0.05 L1,0.2 L0.96,0.36 L1,0.5 L0.97,0.66 L1,0.82 L0.95,0.98 L0.8,0.96 L0.64,1 L0.48,0.95 L0.32,1 L0.16,0.96 L0.01,0.99 L0.04,0.82 L0,0.66 L0.05,0.5 L0.01,0.34 L0.05,0.18 Z" />
        </clipPath>
        <filter id="al-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" />
        </filter>
      </defs>
    </svg>
  );
}
