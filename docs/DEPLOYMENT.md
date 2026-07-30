# Deploying to Render

`render.yaml` at the repo root is a [Render Blueprint](https://render.com/docs/blueprint-spec)
that provisions everything needed for a shareable, public URL:

- a managed Postgres database
- a Node web service running `next build` / `next start`
- migrations applied automatically on every deploy (`preDeployCommand: npm run db:migrate`)

## First deploy

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. In the Render dashboard: **New → Blueprint**, point it at this repo. Render
   reads `render.yaml` and shows you the database + web service it's about to
   create.
3. Apply the blueprint. First deploy takes a few minutes (`npm ci && npm run
   build`, then migrations, then the server starts).
4. Open the service's `*.onrender.com` URL — that's your shareable link.
5. Sign up at `/signup` using **sarvarurdushev@gmail.com** (or whatever
   `ADMIN_EMAIL` is set to in `render.yaml`). That account always lands as
   `org_admin` with full access, no approval step — see
   `lib/auth/designatedAdmin.ts`. No seed script needed; the first
   organization and first school are created for you from the app itself
   (dashboard shows a one-time "Create School" box for the admin the moment
   there isn't one yet).
6. Everyone else who signs up lands on a "waiting for approval" page until
   the org_admin approves them from `/admin/teachers`.

## Environment variables

`render.yaml` wires these up automatically; you only need to touch them if
you want different values:

| Variable | Set by blueprint | Notes |
|---|---|---|
| `DATABASE_URL` / `DIRECT_DATABASE_URL` | from the Render Postgres instance | same value for both — Render's managed Postgres isn't pooled through a separate proxy the way some providers are |
| `SESSION_SECRET` | `generateValue: true` (Render generates a random secret) | rotating it signs every existing session out |
| `ADMIN_EMAIL` | `sarvarurdushev@gmail.com` | the one email that always gets `org_admin`, on signup and on every login |
| `NODE_ENV` | `production` | enables secure cookies |

## Uploaded images/audio and persistent disk

Content images and chant audio uploaded from `/admin/content` are written to
`public/uploads` on local disk (see `app/api/admin/uploads/route.ts`). Without
a persistent disk, that folder is wiped on every redeploy and on some
restarts. `render.yaml` has a commented-out `disk:` block for this — Render
disks require a paid instance plan and only work with a single instance (no
autoscaling/zero-downtime deploys while a disk is attached). Uncomment it if
you need uploads to survive redeploys; otherwise treat re-uploading images
after a redeploy as a known limitation of the free/starter setup.

## Bootstrapping or fixing an admin account from the CLI

Normally you don't need this — signing up with `ADMIN_EMAIL` is enough. If
you ever need to set/reset that account's password directly (e.g. you forgot
it, or want a different admin email), run from your local machine with
Render's `DATABASE_URL` copied into `.env.local`:

```bash
ADMIN_PASSWORD="a-strong-password" npm run promote-admin
```

This creates the account if it doesn't exist yet (creating the
organization too, if this is a completely fresh database) or, if it does,
resets its password and force-signs-out its existing sessions.
