import { pgTable, uuid, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";
import { teacherAccounts } from "./tenancy";

/**
 * Admin-editable overlay on top of the versioned curriculum code in
 * lib/curriculum/. Curriculum content stays code (authored/reviewed like a
 * textbook — see docs/AI_CURRICULUM.md), but specific emoji-carrying items
 * (vocab words, movement moves) can have their label text and/or a real
 * uploaded photo attached at runtime by an org admin, without a code change
 * or redeploy. contentKey is a stable path into the curriculum tree, e.g.
 * "vocab:m1_week1:1:2" (segment kind : lesson key : segment index : item
 * index) — see lib/content/overrideKey.ts for the builder/parser.
 * Global, not per-organization: every org runs the same shared curriculum.
 */
export const contentOverrides = pgTable(
  "content_overrides",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    contentKey: text("content_key").notNull(),
    textOverride: text("text_override"),
    imageUrl: text("image_url"),
    updatedBy: uuid("updated_by").references(() => teacherAccounts.id, { onDelete: "set null" }),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("content_overrides_key_idx").on(table.contentKey)]
);
