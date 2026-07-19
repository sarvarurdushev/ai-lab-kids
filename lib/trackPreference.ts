"use client";

// Local-only persistence for the chosen AI Lab age track (useSyncExternalStore
// + custom event, so a change re-renders every subscriber, not just the
// component that made it — same pattern as lib/sound.ts).

import { isAgeTrack, type AgeTrack } from "./soloCurriculum";

const TRACK_KEY = "al_track";
const TRACK_EVENT = "al-track-change";

export function getStoredTrack(): AgeTrack {
  if (typeof window === "undefined") return "little_sparks";
  const stored = window.localStorage.getItem(TRACK_KEY) ?? undefined;
  return isAgeTrack(stored) ? stored : "little_sparks";
}

export function setStoredTrack(track: AgeTrack): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(TRACK_KEY, track);
  window.dispatchEvent(new CustomEvent(TRACK_EVENT, { detail: track }));
}

export function onTrackChange(listener: (track: AgeTrack) => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  const handler = (e: Event) => listener((e as CustomEvent<AgeTrack>).detail);
  window.addEventListener(TRACK_EVENT, handler);
  return () => window.removeEventListener(TRACK_EVENT, handler);
}
