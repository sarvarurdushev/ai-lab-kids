# AI Lab for Kids

A teacher-led classroom platform teaching English *through* AI-literacy
concepts, built for Korean elementary beginners. One teacher, one screen
(a laptop on a projector), English-only content, an 8-week foundations unit
followed by a full **12-month year-long themed curriculum**, eight distinct
activity-game engines — including a real-world AI-recognition game and a
give-precise-instructions game standards-mapped to ISTE, AI4K12, and
UNESCO's AI Competency Framework for Students — two age tracks (4-5 and
6+), and real classroom infrastructure — organizations, schools, and
classes. There is no student roster or individual student tracking; the
whole product is designed to be run projected for the whole room, not per
child.

See [`docs/AI_CURRICULUM.md`](docs/AI_CURRICULUM.md) for the full research
and architecture writeup, [`docs/SCOPE_AND_SEQUENCE.md`](docs/SCOPE_AND_SEQUENCE.md)
for the 24-lesson foundations unit, [`docs/MONTHLY_CURRICULUM.md`](docs/MONTHLY_CURRICULUM.md)
for the 12-month year curriculum, and
[`docs/KOREAN_L1_NOTES.md`](docs/KOREAN_L1_NOTES.md) for the Korean
learner-specific pedagogy behind it.

## Stack

Next.js (App Router) + TypeScript + Tailwind + Postgres via Drizzle ORM,
`jose` for session cookies, `@node-rs/argon2` for password hashing, `zod`
for validation.

## Setup

```bash
cp .env.example .env.local   # fill in DATABASE_URL, SESSION_SECRET
npm install
npm run db:migrate           # applies lib/db/migrations/ to your database
npm run seed                 # demo org, school, teacher, org-admin, two
                              # classes (one per age track) —
                              # prints demo login credentials
npm run dev
```

Open `http://localhost:3000/login` and sign in with one of the accounts
`npm run seed` printed (same demo password for both):

- **Teacher** — sees their own classes, runs lessons.
- **Org admin** — sees every class in the organization, plus
  `/reporting` for cross-class lesson-completion rollups.

## The teacher flow

1. Sign in → `/dashboard` lists your classes (or every class in the org,
   if you're an admin).
2. Open a class → the age-track badge (Little Sparks 4-5 / AI Explorers 6+),
   the 12-month **Year Curriculum**, and the 8-week **Foundations** unit —
   **Start →** on every lesson that's fully built.
3. Starting a lesson opens the **Presentation Player** — a projector-safe
   view that steps through warmup → vocabulary → concept → activity →
   formative check → wrap-up. You control pacing; nothing auto-advances.
   Closing the tab and coming back resumes where you left off. There's no
   roster and no per-student tracking — the formative check is just a
   prompt for the teacher to ask the whole room, nothing is recorded per
   child.

## Solo practice pages

`/`, `/train-the-robot`, and `/sequence-builder` are a separate, no-login,
English-only mode with progress in `localStorage` — a quick way to try the
two original activity engines without a teacher account. See
[`docs/AI_CURRICULUM.md`](docs/AI_CURRICULUM.md#the-solo-practice-pages)
for why this exists alongside the teacher console.

## Other scripts

```bash
npm run build         # production build
npm run lint           # eslint
npm run db:generate    # generate a new migration after editing lib/db/schema/
npm run db:studio      # Drizzle Studio, browse the schema/data
```
