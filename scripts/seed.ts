import "./_env";
import { db } from "@/lib/db/client";
import { organizations, schools, teacherAccounts, classes } from "@/lib/db/schema";
import { hashPassword } from "@/lib/auth/password";

const DEMO_PASSWORD = "demo-pass-1234";

async function main() {
  console.log("Seeding AI Lab for Kids (Teacher Console)...\n");

  const [org] = await db
    .insert(organizations)
    .values({ name: "Bright Future English Academy", slug: "bright-future" })
    .returning();

  const [school] = await db
    .insert(schools)
    .values({ organizationId: org.id, name: "Bright Future — Gangnam Branch" })
    .returning();

  const passwordHash = await hashPassword(DEMO_PASSWORD);

  const [admin] = await db
    .insert(teacherAccounts)
    .values({
      organizationId: org.id,
      email: "director@brightfuture.example",
      passwordHash,
      name: "Ms. Yoon (Director)",
      role: "org_admin",
    })
    .returning();

  const [teacher] = await db
    .insert(teacherAccounts)
    .values({
      organizationId: org.id,
      email: "teacher@brightfuture.example",
      passwordHash,
      name: "Ms. Park",
      role: "teacher",
    })
    .returning();

  const [demoClass] = await db
    .insert(classes)
    .values({
      schoolId: school.id,
      teacherAccountId: teacher.id,
      name: "Vora 3-A",
      gradeLabel: "Grade 3",
      koreanSupportLevel: "full",
      ageTrack: "explorers",
    })
    .returning();

  // Second demo class on the "Little Sparks" (4-5) track, same teacher, so
  // the age-track content filtering (see lib/trackContent.ts) is visible
  // side-by-side with the "AI Explorers" (6+) class above.
  const [sparksClass] = await db
    .insert(classes)
    .values({
      schoolId: school.id,
      teacherAccountId: teacher.id,
      name: "Little Sparks K",
      gradeLabel: "Kindergarten",
      koreanSupportLevel: "full",
      ageTrack: "little_sparks",
    })
    .returning();

  console.log("Organization:", org.name);
  console.log("School:", school.name);
  console.log("Class:", demoClass.name, "(AI Explorers 6+)");
  console.log("Class:", sparksClass.name, "(Little Sparks 4-5)");
  console.log("\nDemo logins (password for both):", DEMO_PASSWORD);
  console.log("  Org admin:", admin.email);
  console.log("  Teacher:  ", teacher.email);
  console.log("\nSeed complete.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => process.exit(0));
