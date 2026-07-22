import {
  pgTable,
  pgEnum,
  uuid,
  text,
  integer,
  timestamp,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";

// "pending" = signed up but not yet approved by an org admin — can log in
// but sees a holding page instead of the console (see app/(console)/layout.tsx).
export const teacherRoleEnum = pgEnum("teacher_role", ["pending", "org_admin", "teacher"]);

export const koreanSupportLevelEnum = pgEnum("korean_support_level", [
  "full", // every instruction/feedback line shows Korean text + can play Korean audio
  "light", // only new vocab/instructions get a Korean gloss; feedback is English-only
  "minimal", // English immersion; Korean available only via manual toggle
]);

// "Little Sparks" (4-5, pre-reader) vs "AI Explorers" (6+, early reader) —
// same two tracks as lib/soloCurriculum.ts. Controls which minTrack-tagged
// vocab/lines/activity items a class sees — see lib/trackContent.ts.
export const ageTrackEnum = pgEnum("age_track", ["little_sparks", "explorers"]);

// The licensee — the "education company" deploying this curriculum across
// its schools/branches. Everything else is scoped underneath one.
export const organizations = pgTable("organizations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => [uniqueIndex("organizations_slug_idx").on(table.slug)]);

export const schools = pgTable("schools", {
  id: uuid("id").primaryKey().defaultRandom(),
  organizationId: uuid("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => [index("schools_org_idx").on(table.organizationId)]);

// Teachers and org-admins log in with the same account type, distinguished
// by role. org_admin sees cross-class reporting for the whole organization;
// teacher sees only their own classes. Students never log in individually —
// this is a teacher-led, one-screen classroom model (see docs/AI_CURRICULUM.md).
export const teacherAccounts = pgTable("teacher_accounts", {
  id: uuid("id").primaryKey().defaultRandom(),
  organizationId: uuid("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  email: text("email").notNull(),
  passwordHash: text("password_hash").notNull(),
  name: text("name").notNull(),
  role: teacherRoleEnum("role").notNull().default("teacher"),
  tokenVersion: integer("token_version").notNull().default(1),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => [
  uniqueIndex("teacher_accounts_email_idx").on(table.email),
  index("teacher_accounts_org_idx").on(table.organizationId),
]);

export const classes = pgTable("classes", {
  id: uuid("id").primaryKey().defaultRandom(),
  schoolId: uuid("school_id")
    .notNull()
    .references(() => schools.id, { onDelete: "cascade" }),
  teacherAccountId: uuid("teacher_account_id")
    .notNull()
    .references(() => teacherAccounts.id),
  name: text("name").notNull(),
  gradeLabel: text("grade_label").notNull(),
  koreanSupportLevel: koreanSupportLevelEnum("korean_support_level").notNull().default("full"),
  ageTrack: ageTrackEnum("age_track").notNull().default("explorers"),
  // Points at a lesson in the static curriculum content (lib/curriculum/*),
  // not a DB row — see docs/AI_CURRICULUM.md "Content vs. progress" split.
  currentUnitKey: text("current_unit_key"),
  currentLessonKey: text("current_lesson_key"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => [
  index("classes_school_idx").on(table.schoolId),
  index("classes_teacher_idx").on(table.teacherAccountId),
]);

