"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "motion/react";
import { EditorialLinkButton } from "./EditorialButton";

const LINKS = [
  { href: "/curriculum", label: "Program Guide" },
  { href: "/contact", label: "Contact" },
];

/**
 * Sticky nav for the redesigned public surface. Scroll state is a plain
 * boolean flipped via useMotionValueEvent, and the bar itself transitions
 * with a CSS class (not Framer) — cheaper, and doesn't fight focus-visible
 * outlines the way animating a Framer `style` prop on a focusable ancestor
 * can.
 */
export function EditorialNav({
  rightSlot,
  printHidden = false,
}: {
  /** Overrides the default "Teacher log in" / "Get started" pair — e.g. the Program Guide swaps this for its PrintButton. */
  rightSlot?: ReactNode;
  printHidden?: boolean;
}) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-rule bg-white/85 backdrop-blur" : "border-b border-transparent bg-transparent"} ${printHidden ? "no-print" : ""}`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12 xl:px-16">
        <Link href="/" className="font-editorial flex items-center gap-2 text-lg font-bold text-navy">
          <span className="relative flex h-2 w-2">
            <span className="al-animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-terminal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-terminal" />
          </span>
          AI Lab <span className="text-navy/45">for Kids</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[15px] font-semibold text-navy/70 transition-colors hover:bg-navy/[0.05] hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-2">
            {rightSlot ?? (
              <>
                <EditorialLinkButton href="/login" variant="outline" size="sm">
                  Teacher log in
                </EditorialLinkButton>
                <EditorialLinkButton href="/signup" variant="solid" size="sm">
                  Get started
                </EditorialLinkButton>
              </>
            )}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white md:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white md:hidden">
          <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4">
            <Link href="/" className="font-editorial text-lg font-bold text-navy" onClick={() => setOpen(false)}>
              AI Lab <span className="text-navy/45">for Kids</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/[0.06] text-navy"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 2 L16 16 M16 2 L2 16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-editorial border-b border-rule py-4 text-4xl font-bold text-navy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="font-editorial border-b border-rule py-4 text-4xl font-bold text-navy"
            >
              Teacher log in
            </Link>
            <EditorialLinkButton href="/signup" size="lg" className="mt-6 w-full" onClick={() => setOpen(false)}>
              Get started
            </EditorialLinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
