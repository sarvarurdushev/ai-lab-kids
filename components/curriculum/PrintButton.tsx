"use client";

export function PrintButton({ label = "🖨️ Print / Save as PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-navy/90"
    >
      {label}
    </button>
  );
}
