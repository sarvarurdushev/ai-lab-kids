import "server-only";

/**
 * The one email that must always land as org_admin on this deployment, no
 * matter how the account was created or what role it currently holds.
 * Configurable via ADMIN_EMAIL so a fork/redeploy isn't stuck defaulting to
 * this address — see scripts/promoteAdmin.ts, which already used this same
 * env var + default before this file existed.
 */
export const DESIGNATED_ADMIN_EMAIL = (process.env.ADMIN_EMAIL ?? "sarvarurdushev@gmail.com").trim().toLowerCase();
