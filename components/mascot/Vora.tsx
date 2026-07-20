"use client";

import { useSvgId } from "./useSvgId";

export type VoraMood = "happy" | "sad" | "neutral" | "thinking";

const EYES: Record<VoraMood, string> = {
  happy: "M 36 62 Q 42 56 48 62 M 64 62 Q 70 56 76 62",
  sad: "M 36 64 Q 42 70 48 64 M 64 64 Q 70 70 76 64",
  neutral: "M 34 62 L 50 62 M 62 62 L 78 62",
  thinking: "M 34 62 L 50 62 M 62 58 Q 70 54 78 58",
};

const MOUTH: Record<VoraMood, string> = {
  happy: "M 40 78 Q 56 92 72 78",
  sad: "M 40 84 Q 56 72 72 84",
  neutral: "M 44 80 L 68 80",
  thinking: "M 46 80 Q 56 78 66 82",
};

export function Vora({
  size = 96,
  mood = "neutral",
  className = "",
  bob = false,
}: {
  size?: number;
  mood?: VoraMood;
  className?: string;
  bob?: boolean;
}) {
  const id = useSvgId("vora");
  return (
    <div className={`${bob ? "al-bob" : ""} ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 112 130" width={size} height={size}>
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a99cf7" />
            <stop offset="100%" stopColor="var(--color-indigo)" />
          </linearGradient>
        </defs>

        <line x1={56} y1={12} x2={56} y2={26} stroke="#241f33" strokeWidth={3} strokeLinecap="round" />
        <circle cx={56} cy={10} r={5} fill="var(--color-amber)" stroke="#241f33" strokeWidth={1.5} />

        <rect x={18} y={26} width={76} height={64} rx={26} fill={`url(#${id})`} stroke="#241f33" strokeWidth={2.5} />

        <circle cx={30} cy={56} r={7} fill="var(--color-mint)" stroke="#241f33" strokeWidth={2} />
        <circle cx={82} cy={56} r={7} fill="var(--color-coral)" stroke="#241f33" strokeWidth={2} />

        <rect x={26} y={42} width={60} height={46} rx={18} fill="#fbf8ff" stroke="#241f33" strokeWidth={2} />
        <path d={EYES[mood]} stroke="#241f33" strokeWidth={4} strokeLinecap="round" fill="none" />
        <path d={MOUTH[mood]} stroke="#241f33" strokeWidth={3.5} strokeLinecap="round" fill="none" />

        <rect x={30} y={94} width={52} height={30} rx={14} fill={`url(#${id})`} stroke="#241f33" strokeWidth={2.5} />
        <circle cx={56} cy={109} r={6} fill="var(--color-amber)" stroke="#241f33" strokeWidth={1.5} />
      </svg>
    </div>
  );
}
