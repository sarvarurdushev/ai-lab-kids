"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Vora, type VoraMood } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { BilingualText } from "@/components/curriculum/BilingualText";
import { playCorrect, playWrong, playPop } from "@/lib/sound";
import { UndoIcon, RobotHeadIcon } from "@/components/icons";
import type { InstructVoraConfig } from "@/lib/curriculum";
import type { KoreanSupportLevel } from "@/lib/i18n";

// "Give Vora clear instructions" — first lets kids WATCH a vague
// instruction go wrong, then has them build a precise, ordered instruction
// that succeeds. This is the concrete, age-safe version of a concept every
// AI-literacy framework treats as foundational (UNESCO's "AI techniques
// and applications"/"AI system design" dimensions, and ordinary
// algorithmic-thinking standards): a computer or AI does exactly what it's
// told, so the words you choose and the order you give them in matter.
// Deliberately no live text input or chatbot — see docs/AI_CURRICULUM.md
// "Safety" for why this app has no server-side AI integration at all.

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

type Phase = "vague" | "build" | "success";
const SHAKE_PAUSE_MS = 550;

export function InstructVoraEngine({
  config,
  level,
  onFinished,
}: {
  config: InstructVoraConfig;
  level: KoreanSupportLevel;
  onFinished?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("vague");
  const [pool] = useState(() => shuffle(config.steps.map((step, i) => ({ ...step, order: i, id: `s-${i}` }))));
  const [placedIds, setPlacedIds] = useState<string[]>([]);
  const [shake, setShake] = useState(false);

  function startBuilding() {
    playPop();
    setPhase("build");
  }

  function tap(id: string) {
    if (shake || placedIds.includes(id)) return;
    playPop();
    const next = [...placedIds, id];
    setPlacedIds(next);

    if (next.length === config.steps.length) {
      const orders = next.map((placedId) => pool.find((t) => t.id === placedId)!.order);
      const correct = orders.every((o, i) => o === i);
      if (correct) {
        playCorrect();
        setPhase("success");
        onFinished?.();
      } else {
        playWrong();
        setShake(true);
        setTimeout(() => {
          setPlacedIds([]);
          setShake(false);
        }, SHAKE_PAUSE_MS);
      }
    }
  }

  function backspace() {
    if (shake) return;
    setPlacedIds((ids) => ids.slice(0, -1));
  }

  const voraMood: VoraMood = phase === "vague" ? "sad" : phase === "success" ? "happy" : "neutral";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span className="flex items-center gap-1.5">
          <RobotHeadIcon size={14} className="text-indigo" /> {config.title.en}
        </span>
      </div>

      <div className="flex flex-col items-center gap-2 rounded-3xl bg-white/80 py-5 shadow-sm">
        <Vora size={64} mood={voraMood} bob={phase === "success"} />
        <div className="text-3xl">{phase === "vague" ? config.vagueResultEmoji : config.goalEmoji}</div>
        <BilingualText text={config.goalLabel} level={level} keyContent size="base" />
      </div>

      {phase === "vague" && (
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-2xl bg-coral/10 px-4 py-3 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-coral">The instruction was:</p>
            <BilingualText text={config.vagueInstruction} level={level} keyContent size="base" />
          </div>
          <div className="max-w-xs text-center text-sm text-ink/70">
            <BilingualText text={config.vagueResultText} level={level} size="sm" />
          </div>
          <Button onClick={startBuilding} variant="secondary" className="!px-6 !py-2 !text-base">
            Give clear steps instead →
          </Button>
        </div>
      )}

      {phase === "build" && (
        <>
          <motion.div
            animate={shake ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
            transition={{ duration: 0.35 }}
            className="grid gap-2"
            style={{ gridTemplateColumns: `repeat(${Math.min(config.steps.length, 4)}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: config.steps.length }).map((_, i) => {
              const id = placedIds[i];
              const tile = id ? pool.find((t) => t.id === id) : undefined;
              return (
                <div
                  key={i}
                  className={`flex h-16 flex-col items-center justify-center rounded-xl border-2 px-1 text-center ${
                    tile ? "border-mint bg-mint/10" : "border-dashed border-ink/20 text-ink/20"
                  }`}
                >
                  {tile ? (
                    <>
                      <span className="text-xl">{tile.emoji}</span>
                      <span className="text-xs font-bold leading-tight">{tile.text.en}</span>
                    </>
                  ) : (
                    i + 1
                  )}
                </div>
              );
            })}
          </motion.div>

          <div className="grid grid-cols-1 gap-2">
            {pool
              .filter((t) => !placedIds.includes(t.id))
              .map((tile) => (
                <button
                  key={tile.id}
                  type="button"
                  disabled={shake}
                  onClick={() => tap(tile.id)}
                  className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-left shadow-sm transition-transform active:scale-95 disabled:opacity-50"
                >
                  <span className="text-2xl">{tile.emoji}</span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-ink">{tile.text.en}</span>
                    {level !== "minimal" && <span className="block text-xs text-ink/50">{tile.text.ko}</span>}
                  </span>
                </button>
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

      {phase === "success" && (
        <div className="flex flex-col items-center gap-2 rounded-2xl bg-mint/10 px-4 py-3 text-center">
          <p className="text-sm font-bold text-mint">Vora got it right!</p>
          <BilingualText text={config.successText} level={level} size="sm" />
        </div>
      )}
    </div>
  );
}
