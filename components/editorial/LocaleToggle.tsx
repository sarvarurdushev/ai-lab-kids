"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { LOCALES, LOCALE_COOKIE, LOCALE_LABEL } from "@/lib/i18n/locales";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** EN/KO pill toggle — writes the locale cookie directly (not httpOnly, so the client can set it) then asks the server for a fresh render, which is what actually swaps every string; this component doesn't hold or render translated text itself. */
export function LocaleToggle({ className = "" }: { className?: string }) {
  const router = useRouter();
  const { locale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-0.5 rounded-full border border-navy/15 p-0.5 text-xs font-bold ${className}`}
    >
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => {
            if (l === locale) return;
            document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
            router.refresh();
          }}
          aria-pressed={locale === l}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === l ? "bg-navy text-white" : "text-navy/60 hover:text-navy"
          }`}
        >
          {LOCALE_LABEL[l]}
        </button>
      ))}
    </div>
  );
}
