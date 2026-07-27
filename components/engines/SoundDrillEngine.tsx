"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/Button";
import { playPop } from "@/lib/sound";
import { SpeakerIcon } from "@/components/icons";
import type { SoundDrillConfig } from "@/lib/curriculum";
import { soundDrillCardKey, type ContentOverride } from "@/lib/content/overrideKey";
import { OverridableGlyph } from "@/components/curriculum/OverridableGlyph";

// UFLI's steps 2-3, the cumulative review the first phonics build skipped:
// every sound taught so far, one huge card at a time, class says it
// chorally, teacher advances. Teacher-paced rather than auto-advancing on a
// timer, because the whole point is waiting for the slowest voice in the
// room rather than racing it. Nothing is scored — this is warm-up recall.
// The keyword picture stays hidden until tapped, so kids retrieve the sound
// from the letter first and only use the picture as a prompt if stuck.

export function SoundDrillEngine({
  config,
  lessonKey,
  segmentIndex,
  classId,
  contentOverrides = {},
  onFinished,
}: {
  config: SoundDrillConfig;
  lessonKey: string;
  segmentIndex: number;
  /** Omitted outside a real class session (e.g. the admin preview), which disables mastery recording. */
  classId?: string;
  contentOverrides?: Record<string, ContentOverride>;
  onFinished?: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [hintShown, setHintShown] = useState(false);

  const card = config.cards[index];
  const isLast = index === config.cards.length - 1;
  const override = contentOverrides[soundDrillCardKey(lessonKey, segmentIndex, index)];

  if (!card) return null;

  // Whether the class needed the hint is the one honest mastery signal this
  // whole-class format can produce — see lib/db/schema/progress.ts. Recorded
  // on advance (not on hint press) so each card contributes exactly one row.
  // Deliberately fire-and-forget: a failed write must never interrupt a lesson.
  function recordCheck(grapheme: string, neededHint: boolean) {
    if (!classId) return;
    void fetch(`/api/classes/${classId}/sound-checks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonKey, grapheme, neededHint }),
    }).catch(() => {});
  }

  function next() {
    playPop();
    recordCheck(card.letters, hintShown);
    if (isLast) {
      setIndex(0);
      onFinished?.();
    } else {
      setIndex(index + 1);
    }
    setHintShown(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span className="flex items-center gap-1.5">
          <SpeakerIcon size={14} className="text-indigo" /> {config.title}
        </span>
        <span className="text-xs font-semibold text-ink/40">
          {index + 1} / {config.cards.length}
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 px-5 py-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 340, damping: 18 }}
            className="font-display text-8xl font-bold text-indigo-dark"
          >
            {card.letters}
          </motion.p>
        </AnimatePresence>

        <p className="text-sm font-semibold text-ink/50">Everybody — what sound?</p>

        {hintShown ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-1"
          >
            <OverridableGlyph override={override} emoji={card.emoji} emojiClassName="text-6xl" boxSize={88} />
            <p className="font-display text-lg font-bold text-ink">{override?.textOverride || card.keyword}</p>
          </motion.div>
        ) : (
          <button
            type="button"
            onClick={() => setHintShown(true)}
            className="rounded-full bg-cream px-4 py-1.5 text-xs font-bold text-ink/50 transition-colors hover:text-ink"
          >
            Need a hint?
          </button>
        )}

        <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
          {isLast ? "Round again →" : "Next sound →"}
        </Button>
      </div>
    </div>
  );
}
