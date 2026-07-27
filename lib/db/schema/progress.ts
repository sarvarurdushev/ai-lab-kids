import { pgTable, uuid, text, integer, timestamp, index, boolean } from "drizzle-orm/pg-core";
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

/**
 * One row per grapheme shown during a Sound Drill round, recording whether
 * the class needed the keyword-picture hint to recall it.
 *
 * This is deliberately the ONLY mastery signal the app collects, because
 * it's the only honest one available: lessons are delivered to a whole
 * class on one shared screen with no per-child input, so there is no way
 * to measure an individual child's accuracy without inventing it. A
 * teacher reaching for the hint button is real evidence that the room, as
 * a group, couldn't retrieve that sound — which is exactly the signal a
 * reteach decision needs. See lib/console/soundMastery.ts.
 */
export const soundChecks = pgTable("sound_checks", {
  id: uuid("id").primaryKey().defaultRandom(),
  classId: uuid("class_id")
    .notNull()
    .references(() => classes.id, { onDelete: "cascade" }),
  lessonKey: text("lesson_key").notNull(),
  grapheme: text("grapheme").notNull(),
  neededHint: boolean("needed_hint").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => [
  index("sound_checks_class_grapheme_idx").on(table.classId, table.grapheme),
]);
