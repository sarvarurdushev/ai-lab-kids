"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Vora } from "@/components/mascot/Vora";
import { Button } from "@/components/ui/Button";
import { playPop } from "@/lib/sound";
import { speak } from "@/lib/speech";
import { OpenBookIcon, SpeakerIcon } from "@/components/icons";
import type { DecodableTextConfig } from "@/lib/curriculum";
import { decodableLineKey, type ContentOverride } from "@/lib/content/overrideKey";

// Connected text the CHILDREN read, as opposed to StorySegment which the
// teacher reads to them. Every word is tappable: a kid who stalls gets it
// enlarged and spoken without the teacher stopping the whole class. Words
// are split on whitespace and punctuation is stripped only for the spoken
// form, so "rain." still reads aloud as "rain".

function TappableLine({ text }: { text: string }) {
  const [active, setActive] = useState<number | null>(null);
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <p className="flex flex-wrap justify-center gap-x-2 gap-y-1">
      {words.map((w, i) => {
        const spoken = w.replace(/[^A-Za-z'-]/g, "");
        return (
          <motion.button
            key={i}
            type="button"
            animate={{ scale: active === i ? 1.18 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            onClick={() => {
              if (!spoken) return;
              playPop();
              speak(spoken, "en-US");
              setActive(i);
              setTimeout(() => setActive((cur) => (cur === i ? null : cur)), 900);
            }}
            className={`rounded-lg px-1 font-display text-3xl font-bold transition-colors sm:text-4xl ${
              active === i ? "bg-amber/25 text-amber-dark" : "text-ink hover:bg-indigo/10"
            }`}
          >
            {w}
          </motion.button>
        );
      })}
    </p>
  );
}

export function DecodableTextEngine({
  config,
  lessonKey,
  segmentIndex,
  contentOverrides = {},
  onFinished,
}: {
  config: DecodableTextConfig;
  lessonKey: string;
  segmentIndex: number;
  contentOverrides?: Record<string, ContentOverride>;
  onFinished?: () => void;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);

  const line = config.lines[lineIndex];
  const override = contentOverrides[decodableLineKey(lessonKey, segmentIndex, lineIndex)];
  const isLastLine = lineIndex === config.lines.length - 1;
  const text = override?.textOverride || line.text;

  function next() {
    if (isLastLine) {
      setShowQuestions(true);
      onFinished?.();
    } else {
      playPop();
      setLineIndex(lineIndex + 1);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm font-bold text-ink/50">
        <span className="flex items-center gap-1.5">
          <OpenBookIcon size={14} className="text-indigo" /> {config.title}
        </span>
        {!showQuestions && (
          <span className="text-xs font-semibold text-ink/40">
            {lineIndex + 1} / {config.lines.length}
          </span>
        )}
      </div>

      {showQuestions ? (
        <div className="flex flex-col gap-3 rounded-3xl bg-white/80 px-5 py-6">
          <div className="flex items-center gap-2">
            <Vora size={44} mood="happy" bob />
            <p className="font-display text-lg font-bold text-indigo-dark">You read the whole thing!</p>
          </div>
          {config.comprehensionQuestions.map((q, i) => (
            <div key={i} className="rounded-2xl bg-cream p-3">
              <p className="font-display font-bold text-ink">{q.question}</p>
              <p className="mt-1 text-xs text-ink/50">
                <span className="font-bold">Teacher: </span>
                {q.discussionNote}
              </p>
            </div>
          ))}
          <Button
            onClick={() => {
              setShowQuestions(false);
              setLineIndex(0);
            }}
            variant="ghost"
            className="!px-4 !py-2 !text-sm"
          >
            Read it again
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 px-5 py-7">
          {override?.imageUrl ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <Image src={override.imageUrl} alt="" fill sizes="640px" className="object-cover" />
            </div>
          ) : (
            <span className="text-8xl">{line.emoji}</span>
          )}

          <TappableLine text={text} />

          <p className="flex items-center gap-1.5 text-xs font-semibold text-ink/40">
            <SpeakerIcon size={12} /> Tap any word to hear it
          </p>

          <div className="flex items-center gap-2">
            <Button onClick={() => speak(text, "en-US")} variant="ghost" className="!px-4 !py-2 !text-sm">
              Read the line
            </Button>
            <Button onClick={next} variant="secondary" className="!px-6 !py-2 !text-base">
              {isLastLine ? "We did it! →" : "Next line →"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
