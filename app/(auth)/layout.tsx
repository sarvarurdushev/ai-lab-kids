import Image from "next/image";
import { HERO_IMAGES } from "@/lib/curriculum";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-6 bg-gradient-to-b from-indigo/10 via-cream to-cream px-4 py-10">
      <div className="w-full max-w-sm overflow-hidden rounded-3xl shadow-lg shadow-ink/5">
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
