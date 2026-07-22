import "./_env";
import { asc, eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { organizations, teacherAccounts } from "@/lib/db/schema";
import { hashPassword } from "@/lib/auth/password";

const ADMIN_EMAIL = "sarvarurdushev@gmail.com";
const ADMIN_NAME = "Sarvar Urdushev";
const TEMP_PASSWORD = "VoraAdmin-2026!";

async function main() {
  const [existing] = await db.select().from(teacherAccounts).where(eq(teacherAccounts.email, ADMIN_EMAIL)).limit(1);

  if (existing) {
    await db.update(teacherAccounts).set({ role: "org_admin" }).where(eq(teacherAccounts.id, existing.id));
    console.log(`${ADMIN_EMAIL} already existed — upgraded to org_admin. Password unchanged.`);
    return;
  }

  const [org] = await db.select().from(organizations).orderBy(asc(organizations.createdAt)).limit(1);
  if (!org) {
    throw new Error("No organization exists yet — run `npm run seed` first.");
  }

  const passwordHash = await hashPassword(TEMP_PASSWORD);
  await db.insert(teacherAccounts).values({
    organizationId: org.id,
    email: ADMIN_EMAIL,
    passwordHash,
    name: ADMIN_NAME,
    role: "org_admin",
  });

  console.log(`Created org_admin account for ${ADMIN_EMAIL} in "${org.name}".`);
  console.log(`Temporary password: ${TEMP_PASSWORD}`);
  console.log("Sign in and you'll have full admin access — there's no in-app password change yet, so keep this safe.");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
