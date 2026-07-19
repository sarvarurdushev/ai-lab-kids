import Link from "next/link";
import { SoundToggle } from "@/components/ui/SoundToggle";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-gradient-to-b from-indigo/10 via-cream to-cream">
      <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-mint/15 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-64 w-64 rounded-full bg-coral/15 blur-3xl" />
      <header className="relative z-10 flex items-center justify-between px-4 pt-4">
        <Link href="/" className="font-display text-lg font-bold text-indigo-dark">
          AI Lab <span className="text-ink/40">for Kids</span>
        </Link>
        <SoundToggle />
      </header>
      <main className="relative z-10 mx-auto w-full max-w-md flex-1 px-4 pt-4 pb-10">{children}</main>
    </div>
  );
}
