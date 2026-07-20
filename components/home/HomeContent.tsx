"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Vora } from "@/components/mascot/Vora";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SpeakButton } from "@/components/ui/SpeakButton";
import { AGE_TRACKS, AI_LAB_UNITS, AI_SAFETY_CARDS, BIG_IDEA_LABELS, type AgeTrack } from "@/lib/soloCurriculum";
import { getStoredTrack, onTrackChange, setStoredTrack } from "@/lib/trackPreference";
import { getPlaysRemainingToday, getStars, getStreak, onProgressChange } from "@/lib/progress";

function subscribeTrack(callback: () => void): () => void {
  return onTrackChange(() => callback());
}
function getServerTrack(): AgeTrack {
  return "little_sparks";
}

function subscribeProgress(callback: () => void): () => void {
  return onProgressChange(callback);
}
function getServerZero(): number {
  return 0;
}

export function HomeContent() {
  const track = useSyncExternalStore(subscribeTrack, getStoredTrack, getServerTrack);
  const stars = useSyncExternalStore(subscribeProgress, getStars, getServerZero);
  const streak = useSyncExternalStore(subscribeProgress, () => getStreak().current, getServerZero);
  const trainPlays = useSyncExternalStore(subscribeProgress, () => getPlaysRemainingToday("train_the_robot"), getServerZero);
  const sequencePlays = useSyncExternalStore(
    subscribeProgress,
    () => getPlaysRemainingToday("sequence_builder"),
    getServerZero
  );
  const playsRemaining = { train_the_robot: trainPlays, sequence_builder: sequencePlays };

  const units = AI_LAB_UNITS.filter((unit) => !unit.minTrack || unit.minTrack === track);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Vora size={64} mood="happy" bob />
        <div className="relative flex-1 rounded-2xl rounded-bl-none bg-white/90 px-4 py-3 shadow-sm">
          <h1 className="font-display text-lg font-bold">AI Lab for Kids</h1>
          <p className="text-sm text-ink/60">Learn how AI thinks — in English, with Vora!</p>
        </div>
      </div>

      <Card className="flex items-center justify-between !py-3">
        <span className="flex items-center gap-1.5 text-sm font-bold text-amber-dark">⭐ {stars} stars</span>
        <span className="flex items-center gap-1.5 text-sm font-bold text-coral">🔥 {streak} day streak</span>
      </Card>

      <Card className="flex flex-col gap-3">
        <p className="text-xs font-bold tracking-wide text-ink/50 uppercase">Choose your track</p>
        <div className="grid grid-cols-2 gap-3">
          {AGE_TRACKS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setStoredTrack(t.key)}
              className={`flex flex-col items-start gap-0.5 rounded-2xl border-2 px-3 py-3 text-left transition-colors ${
                track === t.key ? "border-amber bg-amber/10" : "border-ink/10 bg-white"
              }`}
            >
              <span className="font-display font-bold text-ink">{t.label}</span>
              <span className="text-xs font-semibold text-ink/50">{t.ageRange}</span>
              <span className="text-xs text-ink/60">{t.blurb}</span>
            </button>
          ))}
        </div>
      </Card>

      <div className="flex flex-col gap-4">
        {units.map((unit) => (
          <Card key={unit.key} className="flex flex-col gap-2" id={unit.gameSlug ? undefined : "talking-to-ai-safely"}>
            <div className="flex flex-wrap gap-1.5">
              {unit.bigIdeas.map((idea) => (
                <span
                  key={idea}
                  className="rounded-full bg-indigo/10 px-2 py-0.5 text-[10px] font-bold text-indigo-dark uppercase tracking-wide"
                >
                  {BIG_IDEA_LABELS[idea]}
                </span>
              ))}
            </div>
            <h2 className="font-display text-lg font-bold text-ink">{unit.title}</h2>
            <p className="text-sm text-ink/60">{unit.tagline}</p>
            <p className="text-xs font-semibold text-ink/40">English focus: {unit.englishFocus}</p>

            {unit.gameSlug ? (
              <div className="mt-1 flex items-center justify-between gap-3">
                <p className="text-xs font-bold text-amber-dark">
                  {(playsRemaining[unit.gameSlug] ?? 0) > 0
                    ? `${playsRemaining[unit.gameSlug]} rewarded round${playsRemaining[unit.gameSlug] === 1 ? "" : "s"} left today`
                    : "Practice mode — play for fun!"}
                </p>
                <Link href={`${unit.href}?track=${track}`}>
                  <Button variant="secondary" className="!px-4 !py-2 !text-base">
                    Play
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="mt-1 flex flex-col gap-2">
                {AI_SAFETY_CARDS.map((tip) => (
                  <div key={tip.text} className="flex items-center gap-2 rounded-2xl bg-cream px-3 py-2">
                    <span className="text-2xl">{tip.emoji}</span>
                    <p className="flex-1 text-sm font-semibold text-ink">{tip.text}</p>
                    <SpeakButton text={tip.text} className="h-7 w-7 text-sm" />
                  </div>
                ))}
              </div>
            )}

            <p className="mt-1 text-xs text-ink/40 italic">Talk about it: {unit.talkAboutIt}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
