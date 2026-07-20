import { EyeIcon, PatternGridIcon, SproutIcon, ChatIcon, GlobeIcon } from "@/components/icons";
import type { BigIdea } from "@/lib/curriculum";

const ICONS: Record<BigIdea, (props: { size?: number; className?: string }) => React.JSX.Element> = {
  perception: EyeIcon,
  reasoning: PatternGridIcon,
  learning: SproutIcon,
  natural_interaction: ChatIcon,
  societal_impact: GlobeIcon,
};

/** Line-art icon for a big idea — see components/icons/index.tsx for why this replaces emoji. */
export function BigIdeaIcon({ bigIdea, size, className }: { bigIdea: BigIdea; size?: number; className?: string }) {
  const Icon = ICONS[bigIdea];
  return <Icon size={size} className={className} />;
}
