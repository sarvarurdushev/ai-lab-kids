"use client";

// All progress lives in localStorage — there's no login and no server, so
// "progress" just means "this browser, this device." A parent who wants
// progress synced across devices should treat that as a future, explicitly
// scoped decision (see docs/AI_CURRICULUM.md), not something bolted on here.

import type { GameSlug } from "./soloCurriculum";

const STORAGE_KEY = "al_progress_v1";
const PROGRESS_EVENT = "al-progress-change";
const DAILY_REWARDED_PLAYS_PER_GAME = 3;
const STARS_PER_CORRECT = 1;

interface ProgressState {
  stars: number;
  currentStreak: number;
  longestStreak: number;
  lastPlayedDate: string | null; // YYYY-MM-DD, local time
  playsToday: Partial<Record<GameSlug, number>>;
  playsTodayDate: string | null;
}

const EMPTY_STATE: ProgressState = {
  stars: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastPlayedDate: null,
  playsToday: {},
  playsTodayDate: null,
};

function todayLocal(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function daysBetween(a: string, b: string): number {
  return Math.round((Date.parse(b) - Date.parse(a)) / (1000 * 60 * 60 * 24));
}

function readState(): ProgressState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    return { ...EMPTY_STATE, ...JSON.parse(raw) };
  } catch {
    return EMPTY_STATE;
  }
}

function writeState(state: ProgressState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(PROGRESS_EVENT));
}

/** Plays-today counters roll over as soon as we notice a new local date. */
function currentPlaysToday(state: ProgressState): Partial<Record<GameSlug, number>> {
  return state.playsTodayDate === todayLocal() ? state.playsToday : {};
}

export function getStars(): number {
  return readState().stars;
}

export function getStreak(): { current: number; longest: number } {
  const state = readState();
  return { current: state.currentStreak, longest: state.longestStreak };
}

export function getPlaysRemainingToday(gameSlug: GameSlug): number {
  const plays = currentPlaysToday(readState())[gameSlug] ?? 0;
  return Math.max(0, DAILY_REWARDED_PLAYS_PER_GAME - plays);
}

export function onProgressChange(listener: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener(PROGRESS_EVENT, listener);
  return () => window.removeEventListener(PROGRESS_EVENT, listener);
}

export interface GameResultSummary {
  rewarded: boolean;
  starsAwarded: number;
  newStarsTotal: number;
  playsRemainingToday: number;
  streak: { current: number; longest: number };
}

/** Records one finished game round: awards stars (capped per day per game) and bumps the daily streak. */
export function recordGameResult(gameSlug: GameSlug, correctCount: number): GameResultSummary {
  const state = readState();
  const today = todayLocal();

  const playsToday = { ...currentPlaysToday(state) };
  const playsSoFar = playsToday[gameSlug] ?? 0;
  const rewarded = playsSoFar < DAILY_REWARDED_PLAYS_PER_GAME;
  playsToday[gameSlug] = playsSoFar + 1;

  const starsAwarded = rewarded ? correctCount * STARS_PER_CORRECT : 0;
  const newStars = state.stars + starsAwarded;

  let currentStreak = state.currentStreak;
  let longestStreak = state.longestStreak;
  if (state.lastPlayedDate !== today) {
    const gap = state.lastPlayedDate ? daysBetween(state.lastPlayedDate, today) : null;
    currentStreak = gap === 1 ? currentStreak + 1 : 1;
    longestStreak = Math.max(longestStreak, currentStreak);
  }

  writeState({
    stars: newStars,
    currentStreak,
    longestStreak,
    lastPlayedDate: today,
    playsToday,
    playsTodayDate: today,
  });

  return {
    rewarded,
    starsAwarded,
    newStarsTotal: newStars,
    playsRemainingToday: Math.max(0, DAILY_REWARDED_PLAYS_PER_GAME - playsToday[gameSlug]!),
    streak: { current: currentStreak, longest: longestStreak },
  };
}
