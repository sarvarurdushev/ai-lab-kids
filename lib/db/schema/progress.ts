import { pgTable, uuid, text, integer, timestamp, index } from "drizzle-orm/pg-core";
import { classes, teacherAccounts } from "./tenancy";

// One row per time a class opens a lesson in the Presentation Player. Tracks
// resume position (currentSegmentIndex) so a teacher can close the laptop
// mid-lesson and pick back up next class period.
export const lessonSessions = pgTable("lesson_sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  classId: uuid("class_id")
    .notNull()
    .references(() => classes.id, { onDelete: "cascade" }),
  teacherAccountId: uuid("teacher_account_id")
    .notNull()
    .references(() => teacherAccounts.id),
  unitKey: text("unit_key").notNull(),
  lessonKey: text("lesson_key").notNull(),
  currentSegmentIndex: integer("current_segment_index").notNull().default(0),
  startedAt: timestamp("started_at", { withTimezone: true }).notNull().defaultNow(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
}, (table) => [
  index("lesson_sessions_class_idx").on(table.classId, table.startedAt),
]);
