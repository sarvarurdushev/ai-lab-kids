"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { EditorialNav } from "./EditorialNav";
import { EditorialFooter } from "./EditorialFooter";
import { EditorialShell } from "./EditorialShell";
import { CloudShape } from "./decor/CloudShape";
import { fadeUpSmall, VIEWPORT_ITEM } from "./motion";

export interface TocEntry {
  id: string;
  label: string;
}

/**
 * Shared shell for /privacy and /terms — deliberately the quietest surface
 * on the redesigned site (one faint cloud, nothing else): each legal page
 * satisfies "every section visually unique" by being the plainest one, not
 * by being decorated like the rest.
 */
export function LegalPage({
  title,
  updated,
  toc,
  children,
}: {
  title: string;
  updated: string;
  toc?: TocEntry[];
  children: ReactNode;
}) {
  return (
    <EditorialShell>
      <EditorialNav />
      <div className="relative mx-auto w-full max-w-[1240px] flex-1 px-6 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <CloudShape accent="sky" size={120} opacity={0.35} className="pointer-events-none absolute top-6 right-6 hidden sm:block" />
        <header className="relative max-w-[68ch]">
          <h1 className="font-editorial al-optical-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1] font-extrabold tracking-[-0.025em] text-navy">
            {title}
          </h1>
          <p className="mt-4 text-sm font-semibold text-slate">Last updated {updated} — plain-language summary below.</p>
        </header>

        <div className="relative mt-16 flex gap-16">
          {toc && toc.length > 0 && (
            <nav className="sticky top-28 hidden h-fit w-48 shrink-0 flex-col gap-1 xl:flex">
              {toc.map((entry) => (
                <a
                  key={entry.id}
                  href={`#${entry.id}`}
                  className="border-b border-rule py-2 text-sm font-semibold text-slate transition-colors hover:text-navy"
                >
                  {entry.label}
                </a>
              ))}
            </nav>
          )}
          <div className="max-w-[68ch] flex-1">{children}</div>
        </div>
      </div>
      <EditorialFooter />
    </EditorialShell>
  );
}

export function LegalSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <motion.section
      id={id}
      variants={fadeUpSmall}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ITEM}
      className="mt-16 scroll-mt-28 border-t border-rule pt-8 first:mt-0 first:border-t-0 first:pt-0"
    >
      <h4 className="font-editorial text-lg font-bold text-navy sm:text-xl">{title}</h4>
      <div className="mt-4 flex flex-col gap-4 text-[16px] leading-[1.75] text-slate sm:text-[17px]">{children}</div>
    </motion.section>
  );
}
