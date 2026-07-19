export type KoreanSupportLevel = "full" | "light" | "minimal";

/**
 * Whether Korean text auto-shows for a given piece of content, given a
 * class's koreanSupportLevel. "full" shows everything; "light" shows only
 * content explicitly marked as new vocab/instructions (isKeyContent);
 * "minimal" never auto-shows Korean — it's available via manual toggle only.
 * This is the "fades with level" mechanic from docs/AI_CURRICULUM.md.
 */
export function autoShowsKorean(level: KoreanSupportLevel, isKeyContent: boolean): boolean {
  if (level === "full") return true;
  if (level === "light") return isKeyContent;
  return false;
}
