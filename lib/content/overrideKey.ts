export interface ContentOverride {
  textOverride: string | null;
  imageUrl: string | null;
  audioUrl: string | null;
}

/**
 * Stable identity for an emoji-carrying curriculum item that an admin can
 * attach a photo and/or replacement label to (see lib/db/schema/content.ts).
 * Kept as plain string builders (not objects) so the same key computed from
 * curriculum content on the server always matches what the admin editor
 * saved, without a parsing round-trip. Keys are always scoped to one
 * lesson + one segment — even when the underlying content is a shared bank
 * item (see lib/curriculum/aiLabBank.ts), an edit made while looking at one
 * lesson only affects that lesson, never a different lesson reusing the
 * same bank entry, which is the least surprising behavior for an admin who
 * is editing "this lesson" on screen.
 */
function contentItemKey(kind: string, lessonKey: string, segmentIndex: number, ...path: (string | number)[]): string {
  return [kind, lessonKey, segmentIndex, ...path].join(":");
}

export function vocabOverrideKey(lessonKey: string, segmentIndex: number, wordIndex: number): string {
  return contentItemKey("vocab", lessonKey, segmentIndex, wordIndex);
}

export function movementOverrideKey(lessonKey: string, segmentIndex: number, moveIndex: number): string {
  return contentItemKey("movement", lessonKey, segmentIndex, moveIndex);
}

export function trainRobotItemKey(lessonKey: string, segmentIndex: number, itemIndex: number): string {
  return contentItemKey("trainrobot_item", lessonKey, segmentIndex, itemIndex);
}

export function trainRobotBucketKey(lessonKey: string, segmentIndex: number, bucket: "a" | "b"): string {
  return contentItemKey("trainrobot_bucket", lessonKey, segmentIndex, bucket);
}

export function sequenceStepKey(lessonKey: string, segmentIndex: number, stepIndex: number): string {
  return contentItemKey("sequence_step", lessonKey, segmentIndex, stepIndex);
}

export function memoryPairKey(lessonKey: string, segmentIndex: number, pairIndex: number): string {
  return contentItemKey("memory_pair", lessonKey, segmentIndex, pairIndex);
}

export function minimalPairKey(lessonKey: string, segmentIndex: number, pairIndex: number, side: "a" | "b"): string {
  return contentItemKey("minimal_pair", lessonKey, segmentIndex, pairIndex, side);
}

export function aiOrNotItemKey(lessonKey: string, segmentIndex: number, itemIndex: number): string {
  return contentItemKey("ai_or_not", lessonKey, segmentIndex, itemIndex);
}

export function instructVoraGoalKey(lessonKey: string, segmentIndex: number): string {
  return contentItemKey("instructvora_goal", lessonKey, segmentIndex);
}

export function instructVoraVagueKey(lessonKey: string, segmentIndex: number): string {
  return contentItemKey("instructvora_vague", lessonKey, segmentIndex);
}

export function instructVoraStepKey(lessonKey: string, segmentIndex: number, stepIndex: number): string {
  return contentItemKey("instructvora_step", lessonKey, segmentIndex, stepIndex);
}

/**
 * Pattern Predictor rounds store plain emoji strings, reused as both the
 * displayed sequence and the tappable options — the string value itself is
 * the answer key (`option === round.answer`), so unlike every other engine
 * here an admin override must never change what a round shows as text (that
 * would silently change gameplay); only a photo can be swapped in, purely
 * for display. This returns each round's distinct glyphs in first-appearance
 * order so the admin editor and the live engine can independently compute
 * the same index -> key mapping without storing anything extra.
 */
export function patternPredictorGlyphs(round: { sequence: string[]; options: string[] }): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of [...round.sequence, ...round.options]) {
    if (!seen.has(value)) {
      seen.add(value);
      result.push(value);
    }
  }
  return result;
}

export function patternGlyphKey(lessonKey: string, segmentIndex: number, roundIndex: number, glyphIndex: number): string {
  return contentItemKey("pattern_glyph", lessonKey, segmentIndex, roundIndex, glyphIndex);
}

export function warmupPromptKey(lessonKey: string, segmentIndex: number): string {
  return contentItemKey("warmup_prompt", lessonKey, segmentIndex);
}

export function conceptLineKey(lessonKey: string, segmentIndex: number, lineIndex: number): string {
  return contentItemKey("concept_line", lessonKey, segmentIndex, lineIndex);
}

export function chantLineKey(lessonKey: string, segmentIndex: number, lineIndex: number, part: "call" | "response"): string {
  return contentItemKey("chant_line", lessonKey, segmentIndex, lineIndex, part);
}

export function chantSongKey(lessonKey: string, segmentIndex: number): string {
  return contentItemKey("chant_song", lessonKey, segmentIndex);
}

export function wrapupSummaryKey(lessonKey: string, segmentIndex: number): string {
  return contentItemKey("wrapup_summary", lessonKey, segmentIndex);
}

export function wrapupHomeworkKey(lessonKey: string, segmentIndex: number): string {
  return contentItemKey("wrapup_homework", lessonKey, segmentIndex);
}
