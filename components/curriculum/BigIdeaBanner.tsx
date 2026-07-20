import { BIG_IDEA_PRESENTATION, type BigIdea } from "@/lib/curriculum";
import type { KoreanSupportLevel } from "@/lib/i18n";

/**
 * Persistent "this is AI" banner shown on every segment of a lesson — not
 * just the concept segment. Action Play and Spotlight lessons deliberately
 * have no concept segment (see docs/MONTHLY_CURRICULUM.md), so without this
 * a teacher running a game-only lesson would never see the AI framing at
 * all. Always visible, so the AI angle can't be missed by skimming past it.
 */
export function BigIdeaBanner({ bigIdea, level }: { bigIdea: BigIdea; level: KoreanSupportLevel }) {
  const p = BIG_IDEA_PRESENTATION[bigIdea];
  return (
    <div className={`flex items-center gap-2.5 rounded-2xl border-2 px-3 py-2 ${p.bannerClass}`}>
      <span className="text-2xl leading-none">{p.emoji}</span>
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-bold uppercase tracking-wide text-ink/50">🤖 AI Idea: {p.label.en}</span>
        <span className="text-xs font-semibold text-ink/80">{p.kidLine.en}</span>
        {level !== "minimal" && <span className="text-[11px] text-ink/50">{p.kidLine.ko}</span>}
      </div>
    </div>
  );
}
