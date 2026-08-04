import type { Locale } from "./locales";
import type { Dictionary } from "./dictionaries/en";
import { en } from "./dictionaries/en";
import { ko } from "./dictionaries/ko";

const DICTIONARIES: Record<Locale, Dictionary> = { en, ko };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };
