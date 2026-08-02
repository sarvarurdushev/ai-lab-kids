import type { ReactNode } from "react";
import { HalftoneDefs } from "./decor/HalftoneDefs";
import { PaperNoise } from "./decor/PaperNoise";

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
    <div className={`relative flex min-h-screen flex-1 flex-col overflow-x-hidden bg-white text-navy selection:bg-amber selection:text-navy ${className}`}>
      <HalftoneDefs />
      {noise && <PaperNoise />}
      {children}
    </div>
  );
}
