import "./_env";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { teacherAccounts } from "@/lib/db/schema";
import { hashPassword } from "@/lib/auth/password";
import { getOrCreateOrganization } from "@/lib/db/getOrCreateOrganization";
import { DESIGNATED_ADMIN_EMAIL } from "@/lib/auth/designatedAdmin";

const ADMIN_EMAIL = DESIGNATED_ADMIN_EMAIL;
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

  const org = await getOrCreateOrganization();

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
