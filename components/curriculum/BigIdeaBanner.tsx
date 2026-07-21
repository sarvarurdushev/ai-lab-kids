import { BIG_IDEA_PRESENTATION, type BigIdea } from "@/lib/curriculum";
import { BigIdeaIcon } from "./BigIdeaIcon";
import { RobotHeadIcon } from "@/components/icons";

/**
 * Persistent "this is AI" banner shown on every segment of a lesson — not
 * just the concept segment. Action Play and Spotlight lessons deliberately
 * have no concept segment (see docs/MONTHLY_CURRICULUM.md), so without this
 * a teacher running a game-only lesson would never see the AI framing at
 * all. Always visible, so the AI angle can't be missed by skimming past it.
 */
export function BigIdeaBanner({ bigIdea }: { bigIdea: BigIdea }) {
  const p = BIG_IDEA_PRESENTATION[bigIdea];
  return (
    <div className={`flex items-center gap-2.5 rounded-2xl border-2 px-3 py-2 ${p.bannerClass}`}>
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 ${p.badgeClass}`}>
        <BigIdeaIcon bigIdea={bigIdea} size={20} />
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-ink/50">
          <RobotHeadIcon size={11} /> AI Idea: {p.label}
        </span>
        <span className="text-xs font-semibold text-ink/80">{p.kidLine}</span>
      </div>
    </div>
  );
}
