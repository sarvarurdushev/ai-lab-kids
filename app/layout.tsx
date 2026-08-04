import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Nunito, Baloo_2, Bricolage_Grotesque, Caveat } from "next/font/google";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
});

// Public marketing pages only (components/editorial/**) — the console keeps
// --font-sans/--font-display (Nunito/Baloo 2) untouched. axes:["opsz"] matters:
// Bricolage's variable font defaults to its small-text optical master, which
// reads soft/loose at hero sizes without it — see .al-optical-display below.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Lab for Kids",
  description:
    "Learn how AI thinks while learning English — ages 4-8, no login needed.",
  other: { "color-scheme": "light" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Reading the locale from a cookie (rather than localStorage) means the
  // server always knows the client's locale before the first byte goes out
  // — <html lang> and every translated string are correct on first paint,
  // with no post-hydration flash and no SSR/CSR mismatch to guard against.
  const store = await cookies();
  const cookieLocale = store.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${nunito.variable} ${baloo.variable} ${bricolage.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <LocaleProvider locale={locale} dict={dict}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
