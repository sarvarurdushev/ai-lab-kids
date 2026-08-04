export const LOCALES = ["en", "ko"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Not httpOnly — the client toggle writes this directly, then calls router.refresh() so the server re-renders with the new dictionary. */
export const LOCALE_COOKIE = "al_locale";

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "EN",
  ko: "KO",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}
