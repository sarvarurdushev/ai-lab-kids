/**
 * Full-viewport grain texture — a composite layer, so at most one per page.
 * Uses the shared #al-grain filter from HalftoneDefs.
 */
export function PaperNoise({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply ${className}`} aria-hidden="true">
      <svg width="100%" height="100%">
        <rect width="100%" height="100%" filter="url(#al-grain)" />
      </svg>
    </div>
  );
}
