"use client";

import Link from "next/link";
import { CollageFigure } from "@/components/editorial/CollageFigure";
import { SunDisc } from "@/components/editorial/decor/SunDisc";
import { CloudShape } from "@/components/editorial/decor/CloudShape";
import { TerminalCard } from "@/components/editorial/TerminalCard";
import { HalftoneDefs } from "@/components/editorial/decor/HalftoneDefs";
import { Vora } from "@/components/mascot/Vora";
import { useDictionary } from "@/components/i18n/LocaleProvider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = useDictionary();
  return (
    <div className="flex min-h-full flex-1 flex-col overflow-x-hidden bg-white text-navy lg:flex-row">
      <HalftoneDefs />

      {/* Brand panel — collapses to a short band above the form on mobile, a full left column at lg+. */}
      <div className="relative flex flex-col justify-center overflow-hidden bg-amber-tint px-6 py-10 sm:px-10 lg:w-5/12 lg:px-14 lg:py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-navy/70 hover:text-navy"
        >
          {dict.auth.backToHome}
        </Link>
        <h2 className="font-editorial al-optical-mid mt-6 max-w-sm text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] font-extrabold text-navy">
          {dict.auth.brandHeading}
        </h2>

        <CollageFigure
          className="relative mt-8 h-40 w-full sm:h-56 lg:h-64"
          layers={[
            {
              key: "sun",
              node: (
                <SunDisc variant="half-top" accent="amber" size={180} ring />
              ),
              top: "78%",
              left: "22%",
              z: 0,
            },
            {
              key: "cloud",
              node: <CloudShape accent="sky" size={70} />,
              top: "10%",
              left: "78%",
              z: 2,
              float: true,
            },
            {
              key: "vora",
              node: <Vora size={130} mood="happy" bob />,
              top: "55%",
              left: "22%",
              z: 3,
            },
          ]}
        />

        <TerminalCard size="inline" className="mt-8 max-w-sm" />
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
        {children}
      </div>
    </div>
  );
}
