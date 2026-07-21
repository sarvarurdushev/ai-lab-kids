import { SpeakButton } from "@/components/ui/SpeakButton";

/** Renders one piece of learner-facing English text, with an optional read-aloud button for pre-readers. Replaces the old bilingual fade-by-level component now that the product is English-only. */
export function EnglishText({
  text,
  size = "base",
  speakable = true,
  className = "",
}: {
  text: string;
  size?: "sm" | "base" | "lg";
  speakable?: boolean;
  className?: string;
}) {
  const sizeClass = size === "lg" ? "text-xl" : size === "sm" ? "text-sm" : "text-base";
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className={`${sizeClass} font-semibold text-ink`}>{text}</span>
      {speakable && <SpeakButton text={text} lang="en-US" className="h-6 w-6 text-xs" />}
    </div>
  );
}
