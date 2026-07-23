"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { Vora } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { SpeakButton } from "@/components/ui/SpeakButton";
import { playCorrect, playWrong, playPop } from "@/lib/sound";
import { connectorFor } from "@/lib/ordering";
import { speak } from "@/lib/speech";
import { SpeakerIcon, UndoIcon } from "@/components/icons";
import type { SequenceBuilderConfig, SentenceBuilderConfig } from "@/lib/curriculum";
import { sequenceStepKey, type ContentOverride } from "@/lib/content/overrideKey";
import { OverridableGlyph } from "@/components/curriculum/OverridableGlyph";

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
  emoji?: string;
  label: string;
  override?: ContentOverride;
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

function tilesFromConfig(
  config: SequenceBuilderConfig | SentenceBuilderConfig,
  lessonKey: string,
  segmentIndex: number,
  contentOverrides: Record<string, ContentOverride>
): {
  title: string;
  tiles: Tile[];
  readAloud: string;
} {
  if (config.engine === "sequence_builder") {
    const total = config.steps.length;
    return {
      title: config.title,
      tiles: config.steps.map((step, i) => {
        const override = contentOverrides[sequenceStepKey(lessonKey, segmentIndex, i)];
        return {
          id: `s-${i}`,
          order: i,
          primary: override?.textOverride || step.text,
          emoji: step.emoji,
          label: connectorFor(i, total),
          override,
        };
      }),
      readAloud: config.steps.map((step, i) => `${connectorFor(i, total)}, ${step.text}.`).join(" "),
    };
  }
  return {
    title: config.title,
    tiles: config.words.map((w, i) => ({
      id: `w-${i}`,
      order: i,
      primary: w.text,
      label: ROLE_LABELS[w.role] ?? "",
    })),
    readAloud: config.words.map((w) => w.text).join(" ") + ".",
  };
}

export function OrderingEngine({
  config,
  lessonKey,
  segmentIndex,
  contentOverrides = {},
  onFinished,
}: {
  config: SequenceBuilderConfig | SentenceBuilderConfig;
  lessonKey: string;
  segmentIndex: number;
  contentOverrides?: Record<string, ContentOverride>;
  onFinished?: () => void;
}) {
  const { title, tiles, readAloud } = useMemo(
    () => tilesFromConfig(config, lessonKey, segmentIndex, contentOverrides),
    [config, lessonKey, segmentIndex, contentOverrides]
  );
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
        <Vora size={52} mood={solved ? "happy" : "neutral"} />
        <p className="font-display text-base font-bold text-ink">{title}</p>
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
                className={`flex h-36 w-full flex-col items-center justify-center gap-1 rounded-xl border-2 px-1 text-center ${
                  tile ? "border-amber bg-amber/10" : "border-dashed border-ink/20 text-ink/20"
                }`}
              >
                {tile ? (
                  <>
                    {tile.emoji && (
                      <OverridableGlyph override={tile.override} emoji={tile.emoji} emojiClassName="text-6xl" boxSize={72} />
                    )}
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
        className="mx-auto flex items-center gap-1.5 text-xs font-semibold text-indigo underline-offset-2 hover:underline"
      >
        <SpeakerIcon size={14} /> Read it aloud
      </button>

      {!solved && (
        <>
          <div className="grid grid-cols-2 gap-2">
            {pool
              .filter((t) => !placedIds.includes(t.id))
              .map((tile) => (
                <div key={tile.id} className="flex flex-col items-center gap-1 rounded-2xl bg-white p-3 shadow-sm">
                  <button
                    type="button"
                    onClick={() => tap(tile)}
                    disabled={shake}
                    className="flex flex-col items-center gap-1 transition-transform active:scale-95 disabled:opacity-50"
                  >
                    {tile.emoji && (
                      <OverridableGlyph override={tile.override} emoji={tile.emoji} emojiClassName="text-7xl" boxSize={96} />
                    )}
                    <span className="text-center text-sm font-semibold text-ink">{tile.primary}</span>
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
              className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-ink/60 shadow-sm disabled:opacity-40"
            >
              <UndoIcon size={14} /> Undo
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
