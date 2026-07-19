"use client";

import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-amber text-ink hover:bg-amber-dark active:scale-95 shadow-md shadow-amber/30",
  secondary: "bg-indigo text-white hover:bg-indigo-dark active:scale-95 shadow-md shadow-indigo/30",
  ghost: "bg-white/70 text-ink hover:bg-white active:scale-95 border border-ink/10",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`font-display rounded-2xl px-6 py-3 text-lg font-semibold transition-all disabled:opacity-50 disabled:pointer-events-none ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
