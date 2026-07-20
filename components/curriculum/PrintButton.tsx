"use client";

export function PrintButton({ label = "🖨️ Print / Save as PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print shrink-0 rounded-full bg-indigo px-4 py-2 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105"
    >
      {label}
    </button>
  );
}
