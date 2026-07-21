"use client";

import { useMemo, useState } from "react";
import { Vora } from "@/components/mascot/Vora";
import { playCorrect, playWrong, playPop } from "@/lib/sound";
import { speak } from "@/lib/speech";
import type { MemoryMatchConfig } from "@/lib/curriculum";
import type { KoreanSupportLevel } from "@/lib/i18n";

// Flip-card pairs game reinforcing a month's vocabulary through repeated
// recognition rather than production — see docs/AI_CURRICULUM.md. Each
// vocabulary pair becomes two cards (an emoji card and a word card); kids
// flip two at a time looking for the matching pair.

interface Card {
  id: string;
  pairIndex: number;
  kind: "emoji" | "word";
}

const MISMATCH_PAUSE_MS = 700;

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildCards(config: MemoryMatchConfig): Card[] {
  const cards: Card[] = [];
  config.pairs.forEach((_, pairIndex) => {
    cards.push({ id: `${pairIndex}-emoji`, pairIndex, kind: "emoji" });
    cards.push({ id: `${pairIndex}-word`, pairIndex, kind: "word" });
  });
  return shuffle(cards);
}

export function MemoryMatchEngine({
  config,
  level,
  onFinished,
}: {
  config: MemoryMatchConfig;
  level: KoreanSupportLevel;
  onFinished?: () => void;
}) {
  const cards = useMemo(() => buildCards(config), [config]);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [flipped, setFlipped] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<string[]>([]);
  const locked = flipped.length === 2;

  const allMatched = matched.size === config.pairs.length;

  function flip(card: Card) {
    if (locked || flipped.includes(card.id) || matched.has(card.pairIndex)) return;
    playPop();
    if (card.kind === "word") speak(config.pairs[card.pairIndex].word.en, "en-US");

    const next = [...flipped, card.id];
    setFlipped(next);
    if (next.length !== 2) return;

    const [firstId, secondId] = next;
    const first = cards.find((c) => c.id === firstId)!;
    const second = cards.find((c) => c.id === secondId)!;

    if (first.pairIndex === second.pairIndex && first.kind !== second.kind) {
      playCorrect();
      setTimeout(() => {
        setMatched((prev) => new Set(prev).add(first.pairIndex));
        setFlipped([]);
        if (matched.size + 1 === config.pairs.length) onFinished?.();
      }, 350);
    } else {
      playWrong();
      setWrongPair(next);
      setTimeout(() => {
        setFlipped([]);
        setWrongPair([]);
      }, MISMATCH_PAUSE_MS);
    }
  }

  if (allMatched) {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <Vora size={100} mood="happy" bob celebrate />
        <p className="font-display text-lg font-bold text-indigo-dark">You matched them all!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-center gap-1 rounded-3xl bg-white/80 py-3 shadow-sm">
        <Vora size={48} mood="neutral" />
        <p className="font-display text-base font-bold text-ink">{config.title.en}</p>
        <p className="text-xs text-ink/50">{config.title.ko}</p>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {cards.map((card) => {
          const isMatched = matched.has(card.pairIndex);
          const isFlipped = isMatched || flipped.includes(card.id);
          const isWrong = wrongPair.includes(card.id);
          const pair = config.pairs[card.pairIndex];
          return (
            <button
              key={card.id}
              type="button"
              disabled={isMatched || locked}
              onClick={() => flip(card)}
              className={`flex h-16 flex-col items-center justify-center rounded-xl border-2 px-1 text-center transition-transform active:scale-95 disabled:pointer-events-none ${
                isMatched
                  ? "border-mint bg-mint/15"
                  : isWrong
                    ? "border-coral bg-coral/15"
                    : isFlipped
                      ? "border-amber bg-amber/10"
                      : "border-indigo/30 bg-indigo/90"
              }`}
            >
              {isFlipped ? (
                card.kind === "emoji" ? (
                  <span className="text-2xl">{pair.emoji}</span>
                ) : (
                  <span className="flex flex-col items-center">
                    <span className="text-xs font-bold leading-tight text-ink">{pair.word.en}</span>
                    {level === "full" && <span className="text-[9px] leading-tight text-ink/50">{pair.word.ko}</span>}
                  </span>
                )
              ) : (
                <span className="text-lg text-white/70">?</span>
              )}
            </button>
          );
        })}
      </div>

      <p className="text-center text-xs text-ink/40">
        {matched.size}/{config.pairs.length} matched
      </p>
    </div>
  );
}
