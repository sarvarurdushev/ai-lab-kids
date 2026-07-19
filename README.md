# AI Lab for Kids

A small, no-login web app that teaches kids ages 4–8 how AI thinks —
through English vocabulary practice, not a lecture. Two age-banded tracks
(**Little Sparks**, 4–5, and **AI Explorers**, 6+), two games, one mascot
(Robi), zero accounts, zero servers to run.

See [`docs/AI_CURRICULUM.md`](docs/AI_CURRICULUM.md) for the research
behind the curriculum design (AI4K12's Five Big Ideas, Code.org/Day of AI
activity patterns, TPR/comprehensible-input pedagogy for young English
learners) and why this app deliberately has no chatbot/LLM feature.

## Stack

Next.js (App Router) + TypeScript + Tailwind. No database, no auth, no
API routes — progress (stars, streak, daily play caps) lives in the
browser's `localStorage` (`lib/progress.ts`).

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` — no login, no seed data, nothing to
configure.

## The two games

- **Train the Robot** (`/train-the-robot`) — sort pictures into two
  categories to teach Robi, then judge Robi's own guesses. Teaches
  category vocabulary (animal/vehicle, fruit/vegetable, ...) and the idea
  that AI learns from labeled examples and can be wrong.
- **Sequence Builder** (`/sequence-builder`) — put the steps of a routine
  in the right order. Teaches sequencing words (first/next/then/last) and
  the idea that an algorithm is an exact, ordered list of steps.

Both scale difficulty by track and read every line aloud on request
(🔊 buttons), for kids who can't decode text yet.

## Other scripts

```bash
npm run build   # production build
npm run lint     # eslint
```
