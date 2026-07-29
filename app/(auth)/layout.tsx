import Link from "next/link";
import Image from "next/image";
import { HERO_IMAGES } from "@/lib/curriculum";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-6 bg-gradient-to-b from-indigo/10 via-cream to-cream px-4 py-10">
      <Link href="/" className="w-full max-w-sm text-sm font-semibold text-ink/50 hover:text-ink">
        ← Back to home
      </Link>
      <div className="w-full max-w-sm overflow-hidden rounded-3xl shadow-lg shadow-ink/5">
        {/* A one-line nod to the homepage's terminal identity, kept tiny and
            above the fold photo rather than reskinning this form page dark —
            these are functional inputs, so legibility wins over theme. */}
        <div className="flex items-center gap-1.5 bg-ink px-3 py-1.5 font-mono text-[10px] text-mint">
          <span className="relative flex h-1.5 w-1.5">
            <span className="al-animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
          </span>
          system ready
        </div>
        <Image
          src={HERO_IMAGES.classroom}
          alt="A teacher presenting a lesson with Vora on a classroom screen"
          width={1536}
          height={1024}
          priority
          className="h-40 w-full object-cover"
        />
      </div>
      {children}
    </div>
  );
}
