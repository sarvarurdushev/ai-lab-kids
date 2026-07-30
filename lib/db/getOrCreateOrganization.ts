import "server-only";
import { asc, eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { organizations } from "@/lib/db/schema";

const DEFAULT_ORG_SLUG = "default";

/**
 * There's no org-picker in this product (see the signup route's own note) —
 * every deployment has effectively one organization, created lazily on first
 * signup rather than requiring an operator to run the demo seed script
 * first just to get a real organization row to exist. Without this, a fresh
 * production database with no seed data 500s on every single signup attempt.
 */
export async function getOrCreateOrganization() {
  const [existing] = await db.select().from(organizations).orderBy(asc(organizations.createdAt)).limit(1);
  if (existing) return existing;

  try {
    const [created] = await db
      .insert(organizations)
      .values({ name: process.env.ORG_NAME ?? "AI Lab for Kids", slug: DEFAULT_ORG_SLUG })
      .returning();
    return created;
  } catch {
    // Two concurrent first-ever signups can both race past the SELECT above
    // and collide on the slug's unique index — the loser just re-reads what
    // the winner created rather than surfacing a spurious signup failure.
    const [org] = await db.select().from(organizations).where(eq(organizations.slug, DEFAULT_ORG_SLUG)).limit(1);
    if (!org) throw new Error("Failed to create or find the default organization.");
    return org;
  }
}
