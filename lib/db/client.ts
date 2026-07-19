import "server-only";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

declare global {
  var __alQueryClient: postgres.Sql | undefined;
}

function createQueryClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }
  // pgbouncer transaction-mode pooling does not support prepared statements.
  return postgres(connectionString, { prepare: false });
}

const queryClient = global.__alQueryClient ?? createQueryClient();
if (process.env.NODE_ENV !== "production") {
  global.__alQueryClient = queryClient;
}

export const db = drizzle(queryClient, { schema });
export type Db = typeof db;
