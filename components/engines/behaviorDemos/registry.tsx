import type { ComponentType } from "react";
import { ThermostatDemo } from "./ThermostatDemo";
import { JigsawPuzzleDemo } from "./JigsawPuzzleDemo";
import { MapRouteDemo } from "./MapRouteDemo";
import { QuickDrawDemo } from "./QuickDrawDemo";

// Bespoke, literal animations for a handful of flagship "Is It AI?" items,
// keyed by the item's exact scenario string. Every other item falls back
// to the generic adapts-vs-fixed pattern animation (GenericBehaviorDemo) —
// this is a prototype set to validate the approach before expanding it.
export const BESPOKE_BEHAVIOR_DEMOS: Record<string, ComponentType> = {
  "A thermostat": ThermostatDemo,
  "A jigsaw puzzle": JigsawPuzzleDemo,
  "Finds the fastest way": MapRouteDemo,
  "Guesses your drawing": QuickDrawDemo,
};
