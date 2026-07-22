import "server-only";
import { db } from "@/lib/db/client";
import { contentOverrides } from "@/lib/db/schema";
import type { ContentOverride } from "./overrideKey";

export type { ContentOverride };

/** All content overrides, keyed by contentKey — small table, cheap to load whole. */
export async function allContentOverrides(): Promise<Record<string, ContentOverride>> {
  const rows = await db
    .select({ contentKey: contentOverrides.contentKey, textOverride: contentOverrides.textOverride, imageUrl: contentOverrides.imageUrl })
    .from(contentOverrides);
  const map: Record<string, ContentOverride> = {};
  for (const row of rows) {
    map[row.contentKey] = { textOverride: row.textOverride, imageUrl: row.imageUrl };
  }
  return map;
}
