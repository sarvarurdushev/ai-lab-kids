import { pgTable, uuid, text, boolean, timestamp, index } from "drizzle-orm/pg-core";

export const loginAttempts = pgTable("login_attempts", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull(),
  ip: text("ip"),
  success: boolean("success").notNull(),
  attemptedAt: timestamp("attempted_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => [
  index("login_attempts_email_idx").on(table.email, table.attemptedAt),
  index("login_attempts_ip_idx").on(table.ip, table.attemptedAt),
]);
