export interface ContentOverride {
  textOverride: string | null;
  imageUrl: string | null;
}

/**
 * Stable identity for an emoji-carrying curriculum item that an admin can
 * attach a photo and/or replacement label to (see lib/db/schema/content.ts).
 * Kept as plain string builders (not objects) so the same key computed from
 * curriculum content on the server always matches what the admin editor
 * saved, without a parsing round-trip.
 */
export function vocabOverrideKey(lessonKey: string, segmentIndex: number, wordIndex: number): string {
  return `vocab:${lessonKey}:${segmentIndex}:${wordIndex}`;
}

export function movementOverrideKey(lessonKey: string, segmentIndex: number, moveIndex: number): string {
  return `movement:${lessonKey}:${segmentIndex}:${moveIndex}`;
}
