import { pgTable, pgEnum, uuid, text, integer, timestamp, uniqueIndex, index } from "drizzle-orm/pg-core";
import { classes, students, teacherAccounts } from "./tenancy";

export const participationMarkEnum = pgEnum("participation_mark", [
  "needs_practice",
  "got_it",
  "excelling",
]);

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

// A teacher's formative check on one student for one activity within a
// lesson session. studentId is null for a whole-class quick mark (the
// common case in a one-screen classroom — most checks are "did the room
// get it," not per-kid).
export const participationMarks = pgTable("participation_marks", {
  id: uuid("id").primaryKey().defaultRandom(),
  lessonSessionId: uuid("lesson_session_id")
    .notNull()
    .references(() => lessonSessions.id, { onDelete: "cascade" }),
  studentId: uuid("student_id").references(() => students.id, { onDelete: "cascade" }),
  activityKey: text("activity_key").notNull(),
  mark: participationMarkEnum("mark").notNull(),
  note: text("note"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => [
  index("participation_marks_session_idx").on(table.lessonSessionId),
  uniqueIndex("participation_marks_unique_idx").on(
    table.lessonSessionId,
    table.studentId,
    table.activityKey
  ),
]);
