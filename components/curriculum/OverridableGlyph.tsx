"use client";

import Image from "next/image";
import type { ContentOverride } from "@/lib/content/overrideKey";

/**
 * A single emoji glyph anywhere in an activity engine, swapped for an
 * admin-uploaded photo when one exists for its content key (see
 * lib/content/overrideKey.ts and app/(console)/admin/content/). Every
 * engine renders its "things" the same visual way — a glyph in a box — so
 * one component covers all of them instead of duplicating the image/emoji
 * branch seven times.
 */
export function OverridableGlyph({
  override,
  emoji,
  emojiClassName = "text-3xl",
  boxSize = 40,
  rounded = "rounded-lg",
}: {
  override: ContentOverride | undefined;
  emoji: string;
  emojiClassName?: string;
  boxSize?: number;
  rounded?: string;
}) {
  if (override?.imageUrl) {
    return (
      <span
        className={`relative inline-block shrink-0 overflow-hidden ${rounded}`}
        style={{ width: boxSize, height: boxSize }}
      >
        <Image src={override.imageUrl} alt="" fill sizes={`${boxSize}px`} className="object-cover" />
      </span>
    );
  }
  return <span className={emojiClassName}>{emoji}</span>;
}
