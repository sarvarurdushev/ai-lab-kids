import type { ReactNode } from "react";
import { HalftoneDefs } from "./decor/HalftoneDefs";
import { PaperNoise } from "./decor/PaperNoise";

// overflow-x-clip (not -hidden) paired with an explicit overflow-y-visible:
// `hidden`/`auto`/`scroll` on one axis forces the other axis's `visible` to
// compute as `auto`, which makes this root div a scroll container and breaks
// `position: sticky` for every descendant page (e.g. the Gallery ribbon).
// `clip` doesn't trigger that coercion, so this still stops horizontal bleed
// without becoming a scroll container.
/** The page wrapper for every redesigned public page — mounts the shared SVG defs once, sets the base editorial surface. */
export function EditorialShell({
  children,
  noise = false,
  className = "",
}: {
  children: ReactNode;
  noise?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative flex min-h-screen flex-1 flex-col overflow-x-clip overflow-y-visible bg-white text-navy selection:bg-amber selection:text-navy ${className}`}>
      <HalftoneDefs />
      {noise && <PaperNoise />}
      {children}
    </div>
  );
}
