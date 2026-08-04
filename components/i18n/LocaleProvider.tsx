"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * Dumb by design: holds no state of its own. `locale`/`dict` always come
 * straight from the server-resolved cookie via app/layout.tsx's props, so
 * there's nothing here to fall out of sync — LocaleToggle changes the
 * cookie and calls router.refresh(), which re-renders the root layout
 * (a Server Component) and flows a new `dict` down through this same
 * provider tree. No client-side locale state to reconcile against SSR.
 */
export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: ReactNode;
}) {
  const value = useMemo(() => ({ locale, dict }), [locale, dict]);
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}

export function useDictionary(): Dictionary {
  return useLocale().dict;
}
