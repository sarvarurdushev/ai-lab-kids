"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { SparkleIcon, RocketIcon } from "@/components/icons";
import type { AgeTrack } from "@/lib/curriculum/types";

const TRACKS: { ageTrack: AgeTrack; label: string; blurb: string; accent: string; Icon: typeof SparkleIcon }[] = [
  {
    ageTrack: "little_sparks",
    label: "4-5 year olds",
    blurb: "Big pictures, everything read aloud, no clock ticking.",
    accent: "border-coral",
    Icon: SparkleIcon,
  },
  {
    ageTrack: "explorers",
    label: "6+ year olds",
    blurb: "Early readers — the fuller curriculum with bonus vocabulary.",
    accent: "border-indigo",
    Icon: RocketIcon,
  },
];

interface ExistingClass {
  ageTrack: AgeTrack;
  id: string;
}

export function StartClassButtons({ existing }: { existing: ExistingClass[] }) {
  const router = useRouter();
  const [loadingTrack, setLoadingTrack] = useState<AgeTrack | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function start(ageTrack: AgeTrack) {
    const already = existing.find((c) => c.ageTrack === ageTrack);
    if (already) {
      router.push(`/classes/${already.id}`);
      return;
    }
    setLoadingTrack(ageTrack);
    setError(null);
    try {
      const res = await fetch("/api/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ageTrack }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Could not start a class.");
        return;
      }
      const created = await res.json();
      router.push(`/classes/${created.id}`);
    } finally {
      setLoadingTrack(null);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {TRACKS.map(({ ageTrack, label, blurb, accent, Icon }) => {
          const already = existing.find((c) => c.ageTrack === ageTrack);
          return (
            <button
              key={ageTrack}
              type="button"
              onClick={() => start(ageTrack)}
              disabled={loadingTrack !== null}
              className="text-left"
            >
              <Card className={`flex h-full flex-col gap-2 border-l-4 transition-transform hover:scale-[1.01] ${accent}`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo/10 text-indigo">
                  <Icon size={20} />
                </span>
                <p className="font-display text-xl font-bold text-ink">{label}</p>
                <p className="text-sm text-ink/60">{blurb}</p>
                <p className="mt-1 text-sm font-semibold text-indigo">
                  {loadingTrack === ageTrack ? "Starting..." : already ? "Continue →" : "Start →"}
                </p>
              </Card>
            </button>
          );
        })}
      </div>
      {error && <p className="text-sm font-semibold text-coral">{error}</p>}
    </div>
  );
}
