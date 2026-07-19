import "./_env";
import { db } from "@/lib/db/client";
import { organizations, schools, teacherAccounts, classes, students } from "@/lib/db/schema";
import { hashPassword } from "@/lib/auth/password";

const DEMO_PASSWORD = "demo-pass-1234";

const STUDENTS = [
  { koreanName: "지민", englishName: "Jimmy", avatarEmoji: "🐱" },
  { koreanName: "서연", englishName: "Sarah", avatarEmoji: "🐰" },
  { koreanName: "도윤", englishName: "David", avatarEmoji: "🐶" },
  { koreanName: "하은", englishName: "Hannah", avatarEmoji: "🦊" },
  { koreanName: "시우", englishName: "Simon", avatarEmoji: "🐻" },
  { koreanName: "지호", englishName: "Jio", avatarEmoji: "🧒" },
  { koreanName: "수아", englishName: "Sue", avatarEmoji: "👧" },
  { koreanName: "은우", englishName: "Eugene", avatarEmoji: "👦" },
  { koreanName: "예준", englishName: "Jun", avatarEmoji: "🐱" },
  { koreanName: "아린", englishName: "Ally", avatarEmoji: "🐰" },
  { koreanName: "준서", englishName: "Jason", avatarEmoji: "🐶" },
  { koreanName: "다은", englishName: "Diana", avatarEmoji: "🦊" },
];

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
      name: "Robi 3-A",
      gradeLabel: "Grade 3",
      koreanSupportLevel: "full",
    })
    .returning();

  const insertedStudents = await db
    .insert(students)
    .values(STUDENTS.map((s, i) => ({ classId: demoClass.id, ...s, sortOrder: i })))
    .returning();

  console.log("Organization:", org.name);
  console.log("School:", school.name);
  console.log("Class:", demoClass.name, `(${insertedStudents.length} students)`);
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
