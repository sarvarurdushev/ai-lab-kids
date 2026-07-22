import "./_env";
import { asc, eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { organizations, teacherAccounts } from "@/lib/db/schema";
import { hashPassword } from "@/lib/auth/password";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "sarvarurdushev@gmail.com";
const ADMIN_NAME = process.env.ADMIN_NAME ?? "Sarvar Urdushev";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

async function main() {
  if (!ADMIN_PASSWORD) {
    throw new Error(
      "Set ADMIN_PASSWORD before running this script, e.g.:\n  ADMIN_PASSWORD=\"your-password\" npm run promote-admin"
    );
  }
  if (ADMIN_PASSWORD.length < 8) {
    throw new Error("ADMIN_PASSWORD must be at least 8 characters.");
  }

  const passwordHash = await hashPassword(ADMIN_PASSWORD);
  const [existing] = await db.select().from(teacherAccounts).where(eq(teacherAccounts.email, ADMIN_EMAIL)).limit(1);

  if (existing) {
    await db
      .update(teacherAccounts)
      .set({ role: "org_admin", passwordHash, tokenVersion: existing.tokenVersion + 1 })
      .where(eq(teacherAccounts.id, existing.id));
    console.log(`${ADMIN_EMAIL} already existed — set to org_admin with the new password (old sessions signed out).`);
    return;
  }

  const [org] = await db.select().from(organizations).orderBy(asc(organizations.createdAt)).limit(1);
  if (!org) {
    throw new Error("No organization exists yet — run `npm run seed` first.");
  }

  await db.insert(teacherAccounts).values({
    organizationId: org.id,
    email: ADMIN_EMAIL,
    passwordHash,
    name: ADMIN_NAME,
    role: "org_admin",
  });

  console.log(`Created org_admin account for ${ADMIN_EMAIL} in "${org.name}" with the password you set.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
