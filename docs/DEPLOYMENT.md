# Deploying to Render (free, no credit card)

`render.yaml` at the repo root is a [Render Blueprint](https://render.com/docs/blueprint-spec)
that provisions a free Node web service for a shareable, public URL — no
payment method required anywhere in this setup.

It deliberately does **not** provision a Render-managed Postgres database.
Render's "Free" Postgres plan is a 30-day trial (with a 14-day grace period)
after which the database — and all its data — is deleted unless you upgrade
to a paid plan. Instead, this uses [Supabase](https://supabase.com), whose
free Postgres tier is permanent (not a trial) and doesn't require a card to
sign up.

## First deploy

1. **Create a free Supabase project.** Sign up at
   [supabase.com](https://supabase.com), create a project, then go to
   **Project Settings → Database → Connection string** and copy the
   **Session pooler** string (port `5432`, host looks like
   `aws-0-<region>.pooler.supabase.com`) — use that same value for **both**
   env vars below. (Don't use the "Direct connection" string — it needs
   IPv6, which Render's outbound network may not support. Don't use the
   "Transaction pooler" (port `6543`) either — it doesn't support the
   advisory locks `drizzle-kit migrate` needs.)
2. Push this repo to GitHub (already done if you're reading this from the
   repo).
3. In the Render dashboard: **New → Blueprint**, point it at this repo.
   Render reads `render.yaml`. Because `DATABASE_URL` and
   `DIRECT_DATABASE_URL` are marked `sync: false` in the blueprint, Render
   will prompt you to paste in a value for each — paste your Supabase
   session-pooler string into both.
4. Apply the blueprint. The web service is created on the **Free** instance
   type — confirm this in the Render UI before deploying if you're ever
   unsure; Free requires no payment info. First deploy takes a few minutes:
   `npm ci && npm run build`, then `npm run db:migrate` (applies migrations
   against your Supabase database), then the server starts.
5. Open the service's `*.onrender.com` URL — that's your shareable link.
6. Sign up at `/signup` using **sarvarurdushev@gmail.com** (or whatever
   `ADMIN_EMAIL` is set to in `render.yaml`). That account always lands as
   `org_admin` with full access, no approval step — see
   `lib/auth/designatedAdmin.ts`. No seed script needed; the first
   organization and first school are created for you from the app itself
   (dashboard shows a one-time "Create School" box for the admin the moment
   there isn't one yet).
7. Everyone else who signs up lands on a "waiting for approval" page until
   the org_admin approves them from `/admin/teachers`.

## What "free" actually means here

- **Render free web service**: spins down after 15 minutes with no traffic,
  so the first request after a quiet stretch (e.g. the start of class) can
  take 30-60 seconds to wake up. 750 free instance-hours/month, shared
  across everything in your workspace — plenty for a single always-idle-ish
  app. No persistent disk, no shell access, single instance only.
- **Supabase free Postgres**: permanent, not time-limited — 500 MB database
  storage, 5 GB egress/month, up to 50k monthly active users. **Important
  difference from a typical serverless database:** a free Supabase project
  auto-pauses after **7 days with no activity**, and unlike a cold-start
  wake, it does **not** resume itself on the next request — someone has to
  go into the Supabase dashboard and click "Restore" before the app works
  again. If this app might sit untouched for a week or more (a school
  holiday, summer break), that's a real gap: teachers would hit a broken
  login page until an admin notices and restores the project. Put a
  recurring reminder on the calendar if that's a risk for you, or consider
  Neon instead (its free Postgres auto-suspends on idle compute but wakes
  itself automatically on the next query, no manual step, no pause).

If either limit becomes a real problem (a school using this daily, lots of
classes), upgrading either piece to a paid plan later is a config change,
not a rebuild.

## Environment variables

| Variable | Set by | Notes |
|---|---|---|
| `DATABASE_URL` / `DIRECT_DATABASE_URL` | you paste your Supabase session-pooler connection string in during blueprint setup (`sync: false`) | same value for both |
| `SESSION_SECRET` | `generateValue: true` (Render generates a random secret) | rotating it signs every existing session out |
| `ADMIN_EMAIL` | `sarvarurdushev@gmail.com` | the one email that always gets `org_admin`, on signup and on every login |
| `NODE_ENV` | `production` | enables secure cookies |

## Uploaded images/audio and persistent disk

Content images and chant audio uploaded from `/admin/content` are written to
`public/uploads` on local disk (see `app/api/admin/uploads/route.ts`). Free
web services can't attach a persistent disk at all, so this folder is wiped
on every redeploy and possibly on restarts. `render.yaml` has a
commented-out `disk:` block for this — it requires upgrading off the Free
instance type (disks also only work with a single instance, no
autoscaling/zero-downtime deploys). Until then, treat re-uploading images
after a redeploy as a known limitation of running this for free.

## Bootstrapping or fixing an admin account from the CLI

Normally you don't need this — signing up with `ADMIN_EMAIL` is enough. If
you ever need to set/reset that account's password directly (e.g. you forgot
it, or want a different admin email), run from your local machine with your
Supabase session-pooler connection string copied into `.env.local`:

```bash
ADMIN_PASSWORD="a-strong-password" npm run promote-admin
```

This creates the account if it doesn't exist yet (creating the
organization too, if this is a completely fresh database) or, if it does,
resets its password and force-signs-out its existing sessions.
