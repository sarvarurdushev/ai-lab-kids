"use client";

import { useState } from "react";
import { SpeakButton } from "@/components/ui/SpeakButton";
import { autoShowsKorean, type KoreanSupportLevel } from "@/lib/i18n";
import type { Bilingual } from "@/lib/curriculum";

export function BilingualText({
  text,
  level,
  keyContent = false,
  size = "base",
  speakable = true,
  className = "",
}: {
  text: Bilingual;
  level: KoreanSupportLevel;
  /** Vocab words and instructions are "key content" — the fade-with-level rule keeps these visible longer than feedback/flavor text. */
  keyContent?: boolean;
  size?: "sm" | "base" | "lg";
  speakable?: boolean;
  className?: string;
}) {
  const [revealed, setRevealed] = useState(false);
  const showKorean = autoShowsKorean(level, keyContent) || revealed;
  const sizeClass = size === "lg" ? "text-xl" : size === "sm" ? "text-sm" : "text-base";

  return (
    <div className={`flex flex-col gap-0.5 ${className}`}>
      <div className="flex items-center gap-1.5">
        <span className={`${sizeClass} font-semibold text-ink`}>{text.en}</span>
        {speakable && <SpeakButton text={text.en} lang="en-US" className="h-6 w-6 text-xs" />}
      </div>
      {showKorean ? (
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-ink/60">{text.ko}</span>
          {speakable && <SpeakButton text={text.ko} lang="ko-KR" className="h-6 w-6 text-xs" />}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="w-fit text-xs font-semibold text-indigo underline-offset-2 hover:underline"
        >
          한국어 보기 (Show Korean)
        </button>
      )}
    </div>
  );
}
