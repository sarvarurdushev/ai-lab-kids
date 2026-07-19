"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { Robi } from "@/components/mascot/Robi";
import { Button } from "@/components/ui/Button";
import { SpeakButton } from "@/components/ui/SpeakButton";
import { playCorrect, playWrong, playPop } from "@/lib/sound";
import { connectorFor } from "@/lib/ordering";
import { speak } from "@/lib/speech";
import type { SequenceBuilderConfig, SentenceBuilderConfig } from "@/lib/curriculum";
import type { KoreanSupportLevel } from "@/lib/i18n";

// Classroom version of the ordering mechanic — reused for two different
// grammar/AI concepts rather than built twice: routine sequencing
// (first/next/then/last, the algorithms big idea) and English SVO sentence
// word order (subject/verb/object), because "arrange tiles into the one
// correct order" is the same interaction either way. See
// components/games/SequenceBuilder.tsx for the solo/self-paced version.

interface Tile {
  id: string;
  order: number;
  primary: string;
  secondary: string;
  emoji?: string;
  label: string;
}

const SHAKE_PAUSE_MS = 550;

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const ROLE_LABELS: Record<string, string> = {
  subject: "Subject",
  verb: "Verb",
  object: "Object",
  other: "",
};

function tilesFromConfig(config: SequenceBuilderConfig | SentenceBuilderConfig): {
  title: { en: string; ko: string };
  tiles: Tile[];
  readAloud: string;
} {
  if (config.engine === "sequence_builder") {
    const total = config.steps.length;
    return {
      title: config.title,
      tiles: config.steps.map((step, i) => ({
        id: `s-${i}`,
        order: i,
        primary: step.text.en,
        secondary: step.text.ko,
        emoji: step.emoji,
        label: connectorFor(i, total),
      })),
      readAloud: config.steps.map((step, i) => `${connectorFor(i, total)}, ${step.text.en}.`).join(" "),
    };
  }
  return {
    title: config.title,
    tiles: config.words.map((w, i) => ({
      id: `w-${i}`,
      order: i,
      primary: w.text,
      secondary: w.ko,
      label: ROLE_LABELS[w.role] ?? "",
    })),
    readAloud: config.words.map((w) => w.text).join(" ") + ".",
  };
}

export function OrderingEngine({
  config,
  level,
  onFinished,
}: {
  config: SequenceBuilderConfig | SentenceBuilderConfig;
  level: KoreanSupportLevel;
  onFinished?: () => void;
}) {
  const { title, tiles, readAloud } = useMemo(() => tilesFromConfig(config), [config]);
  const [pool, setPool] = useState(() => shuffle(tiles));
  const [placedIds, setPlacedIds] = useState<string[]>([]);
  const [shake, setShake] = useState(false);
  const [solved, setSolved] = useState(false);
  const checking = useRef(false);

  const tileById = new Map(tiles.map((t) => [t.id, t]));

  function tap(tile: Tile) {
    if (checking.current || solved || placedIds.includes(tile.id)) return;
    playPop();
    const next = [...placedIds, tile.id];
    setPlacedIds(next);

    if (next.length === tiles.length) {
      const order = next.map((id) => tileById.get(id)!.order);
      const correct = order.every((o, i) => o === i);
      if (correct) {
        playCorrect();
        setSolved(true);
        onFinished?.();
      } else {
        checking.current = true;
        playWrong();
        setShake(true);
        setTimeout(() => {
          setPlacedIds([]);
          setShake(false);
          checking.current = false;
        }, SHAKE_PAUSE_MS);
      }
    }
  }

  function backspace() {
    if (checking.current || solved) return;
    setPlacedIds((ids) => ids.slice(0, -1));
  }

  function reset() {
    setPool(shuffle(tiles));
    setPlacedIds([]);
    setShake(false);
    setSolved(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-center gap-1 rounded-3xl bg-white/80 py-3 shadow-sm">
        <Robi size={52} mood={solved ? "happy" : "neutral"} />
        <p className="font-display text-base font-bold text-ink">{title.en}</p>
        <p className="text-xs text-ink/50">{title.ko}</p>
      </div>

      <motion.div
        animate={shake ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
        transition={{ duration: 0.35 }}
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${Math.min(tiles.length, 4)}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: tiles.length }).map((_, i) => {
          const id = placedIds[i];
          const tile = id ? tileById.get(id) : undefined;
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className={`flex h-16 w-full flex-col items-center justify-center rounded-xl border-2 px-1 text-center ${
                  tile ? "border-amber bg-amber/10" : "border-dashed border-ink/20 text-ink/20"
                }`}
              >
                {tile ? (
                  <>
                    {tile.emoji && <span className="text-xl">{tile.emoji}</span>}
                    <span className="text-xs font-bold leading-tight">{tile.primary}</span>
                  </>
                ) : (
                  "?"
                )}
              </div>
              {tiles[i].label && (
                <span className="text-[10px] font-bold tracking-wide text-ink/50 uppercase">{tiles[i].label}</span>
              )}
            </div>
          );
        })}
      </motion.div>

      <button
        type="button"
        onClick={() => speak(readAloud, "en-US")}
        className="mx-auto flex items-center gap-1 text-xs font-semibold text-indigo underline-offset-2 hover:underline"
      >
        🔊 Read it aloud
      </button>

      {!solved && (
        <>
          <div className="grid grid-cols-2 gap-2">
            {pool
              .filter((t) => !placedIds.includes(t.id))
              .map((tile) => (
                <div key={tile.id} className="flex items-center gap-1 rounded-2xl bg-white pl-3 pr-1.5 py-1.5 shadow-sm">
                  <button
                    type="button"
                    onClick={() => tap(tile)}
                    disabled={shake}
                    className="flex flex-1 items-center gap-2 py-1.5 text-left transition-transform active:scale-95 disabled:opacity-50"
                  >
                    {tile.emoji && <span className="text-2xl">{tile.emoji}</span>}
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-ink">{tile.primary}</span>
                      {level !== "minimal" && <span className="block text-xs text-ink/50">{tile.secondary}</span>}
                    </span>
                  </button>
                  <SpeakButton text={tile.primary} lang="en-US" className="h-7 w-7 text-sm" />
                </div>
              ))}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={backspace}
              disabled={placedIds.length === 0}
              className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-ink/60 shadow-sm disabled:opacity-40"
            >
              ⌫ Undo
            </button>
          </div>
        </>
      )}

      {solved && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-sm font-bold text-mint">That&apos;s the right order!</p>
          <Button onClick={reset} variant="ghost" className="!px-4 !py-2 !text-sm">
            Try again
          </Button>
        </div>
      )}
    </div>
  );
}
