"use client";

import { GenericBehaviorDemo } from "./GenericBehaviorDemo";
import { BESPOKE_BEHAVIOR_DEMOS } from "./behaviorDemos/registry";

// Dispatches to a hand-built, literal animation for a handful of flagship
// scenarios (a thermostat dial that never moves, a route that redraws
// itself around a roadblock, ...), falling back to the generic
// adapts-vs-fixed pattern animation for every other "Is It AI?" item.
export function BehaviorDemo({
  isAI,
  icon,
  iconImageUrl,
  scenario,
}: {
  isAI: boolean;
  icon: string;
  iconImageUrl?: string | null;
  scenario: string;
}) {
  const Bespoke = BESPOKE_BEHAVIOR_DEMOS[scenario];
  if (Bespoke) return <Bespoke />;
  return <GenericBehaviorDemo isAI={isAI} icon={icon} iconImageUrl={iconImageUrl} />;
}
