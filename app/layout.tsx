import type { Metadata } from "next";
import { Nunito, Baloo_2, Bricolage_Grotesque, Caveat } from "next/font/google";
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
  description: "Learn how AI thinks while learning English — ages 4-8, no login needed.",
  other: { "color-scheme": "light" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${baloo.variable} ${bricolage.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}
