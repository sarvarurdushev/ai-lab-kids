# AI Lab for Kids: an AI-literacy + English curriculum for ages 4–8

This document specifies the curriculum and product behind this app: a
**teacher-led classroom platform** that teaches foundational AI-literacy
concepts *through* English-language practice for Korean elementary
beginners, instead of as two separate subjects. It's built the same way
`littlelit.ai` and Code.org's `AI for Oceans` pitch themselves — "learn AI
by doing," not by lecture — but scoped to a real classroom: one teacher,
one screen, a room full of kids who don't yet read or speak much English,
and without any live chatbot/LLM in the loop (see
[Safety](#safety-why-theres-no-live-chatbot) below).

For the 24-lesson foundations unit, see
[`docs/SCOPE_AND_SEQUENCE.md`](./SCOPE_AND_SEQUENCE.md). For the 12-month,
36-lesson year curriculum that follows it, see
[`docs/MONTHLY_CURRICULUM.md`](./MONTHLY_CURRICULUM.md). For the Korean
learner-specific research behind what each lesson targets, see
[`docs/KOREAN_L1_NOTES.md`](./KOREAN_L1_NOTES.md).

## Who this is for, and how it's actually used

Built around one explicit choice: **teacher-led, one screen.** A teacher
runs the lesson from their own laptop connected to a projector or
smartboard, pacing the class verbally — not a room of kids each on their
own device working alone. This matches how Korean hagwons and public
classrooms actually run, and is a deliberate alternative to Korea's
national AI digital textbook (AIDT) rollout, which was scaled back in 2025
partly over digital-overuse concerns
([Korea Times](https://www.koreatimes.co.kr/southkorea/society/20241129/korea-to-introduce-ai-textbooks-in-2025-despite-concerns-over-effectiveness-digital-overuse),
[ZME Science](https://www.zmescience.com/science/south-korea-is-quietly-pulling-the-plug-on-its-ai-textbooks/)).
This product puts the screen in the teacher's hands, not each kid's.

## Research summary

**AI literacy framework.** We anchor concepts to MIT/Harvard's
[AI4K12 "Five Big Ideas in AI"](https://ai4k12.org/) — perception,
representation & reasoning, learning, natural interaction, and societal
impact. [Machine Learning and the Five Big Ideas in
AI](https://par.nsf.gov/servlets/purl/10415002) (Touretzky et al.) is the
canonical source; early-childhood adaptations confirm perception,
learning, and simple algorithms are the ideas 4–8 year-olds can actually
grasp — bias/fairness and natural interaction stay shallow until later
grades.

**Activity design.** [Code.org's AI for Oceans](https://code.org/oceans)
and MIT RAISE's [Day of AI](https://dayofai.org/) both teach "AI learns
from labeled examples, and can get it wrong" through a sort-and-guess game
rather than explanation. That mechanic is what `Train the Robot` is
modeled on. Day of AI's unplugged ordered-step ("algorithm") activities
for younger grades are what `Sequence Builder` is modeled on — and the
same tile-ordering mechanic is reused a second time for English
subject-verb-object sentence building (`Sentence Builder`), because
"arrange things in the one correct order" is the same interaction whether
the thing being ordered is a morning routine or a sentence. The year
curriculum adds two more engines built the same way: `Memory Match` (a
flip-card pairs game reinforcing vocabulary recognition) and
`Pattern Predictor` (a "what comes next?" game that's a direct, concrete
demonstration of pattern-based prediction — the same underlying idea
behind weather forecasts, route-finding, and next-word suggestion). See
[`docs/MONTHLY_CURRICULUM.md`](./MONTHLY_CURRICULUM.md) for the full
six-engine breakdown.

**Topic-based curriculum design.** The 12-month year curriculum (see
[`docs/MONTHLY_CURRICULUM.md`](./MONTHLY_CURRICULUM.md)) adapts a
topic-based annual English-curriculum structure widely used in Korean
English-education businesses — a proven, seasonally sensible theme
sequence familiar to Korean parents and teachers — but pairs every
month's topic with one concrete AI4K12 big idea, so AI literacy and
English are taught through the same monthly theme instead of as two
separate subjects.

**Korean learner needs.** See
[`docs/KOREAN_L1_NOTES.md`](./KOREAN_L1_NOTES.md) for the full breakdown,
but in short: Korean has no /f/, /v/, /θ/, /ð/, or /l/-/r/ distinction, is
syllable-timed, and is SOV with no articles. Four lessons in the pilot
unit are built specifically to drill the four highest-frequency gaps
(`minimal_pairs` listening-discrimination activities), and the SVO
word-order shift gets its own recurring activity type
(`sentence_builder`) rather than a single grammar lecture.

**English pedagogy for this age band.** [Total Physical Response /
comprehensible
input](https://www.colorincolorado.org/teaching-ells/ell-classroom-strategy-library/total-physical-response) —
letting kids demonstrate understanding through action (tapping, sorting,
ordering) before requiring spoken/written production — measurably lowers
anxiety and speeds acquisition versus requiring speech up front. That's
why every activity is point-and-tap, not type-or-speak, and why
instructions and vocabulary carry a 🔊 read-aloud button in both languages.

**Bilingual scaffolding, fading with level.** Standard L1-scaffolding
practice: a class's `koreanSupportLevel` (`full` / `light` / `minimal`,
set per class by the teacher) controls how much Korean auto-displays —
see [`lib/i18n.ts`](../lib/i18n.ts). Korean is always available via manual
toggle regardless of level; what fades is what shows automatically.

**Age-track differentiation.** A class is also set to one of two age
tracks (`little_sparks`, ages 4-5, vs. `explorers`, ages 6+) — the same
two tracks the solo pages already used, now extended into the teacher
console. Rather than authoring two full copies of every lesson,
individual pieces of content are tagged `minTrack: "explorers"` where
they're authored and stripped server-side for Little Sparks classes
before a lesson reaches the Presentation Player — see
[`lib/trackContent.ts`](../lib/trackContent.ts).

**Chatbot safety.** COPPA (and Korea's PIPA, which is stricter for
under-14s) both require verifiable guardian consent before any service
targeting children collects personal data. General-purpose chat products
also aren't calibrated for kids. This app has **no** LLM integration
anywhere — see [Safety](#safety-why-theres-no-live-chatbot).

## Architecture

**Multi-tenant, teacher-led, real backend.** Organization → School →
Class → Student, with real teacher/org-admin authentication (email +
password, session cookies) and a Postgres database — see
[`lib/db/schema/`](../lib/db/schema/). Students don't log in individually;
the teacher's account is the only credential in the room.

- **Content vs. progress split.** Curriculum *content* (lessons,
  vocabulary, activity configs) lives as versioned TypeScript in
  [`lib/curriculum/`](../lib/curriculum/) — authored and reviewed like a
  textbook, not edited at runtime. Curriculum *progress* (which lesson a
  class is on, participation marks) lives in Postgres
  ([`lib/db/schema/progress.ts`](../lib/db/schema/progress.ts)) — that's
  the transactional, per-classroom state a reporting dashboard needs.
- **Teacher Console** (`/dashboard`, `/classes/[classId]`) — roster
  management and a scope-and-sequence browser showing which lessons are
  ready to run.
- **Presentation Player** (`/classes/[classId]/lesson/[lessonKey]`) — a
  projector-safe view that steps through a lesson's segments (warmup →
  vocabulary → concept → activity → formative check → wrap-up), teacher
  controls pacing manually (no auto-advance, no timers on non-activity
  segments), and resumes where it left off if the teacher closes the
  laptop mid-lesson (`lessonSessions.currentSegmentIndex`).
- **Activity engines** (`components/engines/`) — six engines:
  `TrainTheRobotEngine` (classification), `OrderingEngine` (routine
  sequencing *and* SVO sentence building, same component),
  `MinimalPairsEngine` (listening discrimination), `MemoryMatchEngine`
  (flip-card pairs), and `PatternPredictorEngine` ("what comes next?").
  Each is fully content-driven: authoring a new lesson means writing data
  against `lib/curriculum/types.ts`, not new code.
- **Participation marks & reporting** — at each formative-check segment,
  the teacher marks the whole class or an individual student
  (👍 got it / 🤔 needs practice / ⭐ excelling). `/reporting`
  (org-admin only) rolls these up across every class in the organization —
  see [`lib/console/reporting.ts`](../lib/console/reporting.ts).

**What's demo-simple on purpose, for now:** a class has exactly one
primary teacher (no co-teaching); a lesson session lives on one device
(no live sync between a teacher's laptop and a second "student screen" —
see [Roadmap](#roadmap)); there's no self-service password reset or
org-admin UI for creating schools/teachers (`scripts/seed.ts` does that).

## The solo practice pages

Alongside the teacher console, three no-login pages still exist —
`/`, `/train-the-robot`, `/sequence-builder` — a self-paced, single-track,
English-only mode with `localStorage` progress (stars, streak, daily play
caps), built before the teacher-console pivot. See
[`lib/soloCurriculum.ts`](../lib/soloCurriculum.ts) and
[`lib/progress.ts`](../lib/progress.ts). These are useful as a quick demo
of the two original activity engines without needing a teacher account,
and could become a "homework practice" companion mode later (see
Roadmap), but are not the primary product surface.

## Safety: why there's no live chatbot

1. **COPPA / PIPA.** A live chat surface for children is a
   data-collection product requiring verifiable guardian consent,
   logging/retention policy, and content moderation — a different
   compliance surface entirely from a teacher-mediated app that stores
   only lesson progress and participation marks.
2. **Pedagogically unnecessary.** At this level, "how AI understands
   language" is better taught as a concept (the Talking to AI Safely
   unit) than as a live conversation the child has to parse and produce
   English in.
3. **It's simulable.** "AI learns from examples and can be wrong" and "AI
   follows exact instructions in order" are fully demonstrable with
   scripted, deterministic content — which is also guaranteed
   age-appropriate every time, unlike live model output.

## Roadmap

Honest gap list — what a company evaluating this for a real deployment
should know is *not* built yet. The 24-lesson foundations unit and the
36-lesson, 12-month year curriculum are now both fully authored (see
[`docs/SCOPE_AND_SEQUENCE.md`](./SCOPE_AND_SEQUENCE.md) and
[`docs/MONTHLY_CURRICULUM.md`](./MONTHLY_CURRICULUM.md)) — 60 lessons and
six activity engines total — so what's left is platform work, not content
work:

1. **No live sync between a teacher device and a separate student-facing
   screen.** Today the Presentation Player is one device driving one
   display. A two-screen mode (teacher notes on one device, clean
   projector view on another, kept in sync) would need a small realtime
   layer (SSE/WebSocket) on top of the existing `lessonSessions` state.
2. **No org-admin self-service UI** for creating schools, teachers, or
   inviting staff — `scripts/seed.ts` does this today. Needed before a
   real customer onboards themselves.
3. **No production pronunciation grading** — `minimal_pairs` is
   listening-discrimination only, by design (see
   [`docs/KOREAN_L1_NOTES.md`](./KOREAN_L1_NOTES.md)); real speech-production
   feedback would need a speech-recognition integration and its own
   safety/privacy review.
4. **No homework/independent-practice mode** connecting a student's home
   device back to their class's progress — the solo pages are unconnected
   to a class today.
5. **No second full-year curriculum for an older/higher level.** The year
   curriculum's age-track filtering (`minTrack`) covers a 4-5 vs. 6+ split
   within one curriculum; a true intermediate/advanced follow-on year
   (past what 6+ Explorers content covers) isn't authored yet.
6. **No automated test suite.** Correctness so far has been verified by
   hand (typecheck, lint, production build, and full manual browser
   walkthroughs of every flow, including catching and fixing a real crash
   bug in two of the activity engines) — worth adding before this scales
   past a pilot.
