# Scope & Sequence — Vora's Classroom (Foundations Unit)

An 8-week, 24-lesson pilot/foundations unit (3 lessons/week) for Korean
elementary beginners (CEFR pre-A1/A1), teaching English *through*
AI-literacy concepts. A class typically completes this unit first, then
moves into the year-long 12-month themed curriculum — see
[`docs/MONTHLY_CURRICULUM.md`](./MONTHLY_CURRICULUM.md). See
[`docs/AI_CURRICULUM.md`](./AI_CURRICULUM.md) for the research this is
built on and [`docs/KOREAN_L1_NOTES.md`](./KOREAN_L1_NOTES.md) for the
phonology/grammar targeting rationale.

This is the same data as
[`lib/curriculum/scopeAndSequence.ts`](../lib/curriculum/scopeAndSequence.ts)
(metadata) plus [`lib/curriculum/lessons/`](../lib/curriculum/lessons/)
(full segment content), rendered for lesson planning. **All 24 lessons are
fully built** — bilingual, segment-by-segment, playable end-to-end in the
Presentation Player.

| Week | Unit | Day | Lesson | Big Idea(s) | English Focus |
|---|---|---|---|---|---|
| 1 | Meet Vora | 1 | Hello, Vora! | Natural Interaction | Greetings, self-introduction |
| 1 | Meet Vora | 2 | Vora's Classroom | Perception | Classroom objects, "What is this?" |
| 1 | Meet Vora | 3 | What Is AI? | Perception, Learning | "It is / it is not a ___" |
| 2 | Animal Friends | 1 | Animal Safari | Perception | Animal nouns, plural -s |
| 2 | Animal Friends | 2 | How Does Vora See? | Perception, Learning | Animal vs. vehicle categories |
| 2 | Animal Friends | 3 | Listen Closely: light or right? | Perception | /l/ vs /r/ listening |
| 3 | Colors & Patterns | 1 | Rainbow Colors | — | Color adjectives |
| 3 | Colors & Patterns | 2 | Vora Finds the Pattern | Reasoning, Learning | Shape nouns, same/different |
| 3 | Colors & Patterns | 3 | Listen Closely: fan or pan? | Perception | /f/ vs /p/ listening |
| 4 | My Family & Numbers | 1 | My Family | — | Family nouns, possessive "my" |
| 4 | My Family & Numbers | 2 | Count with Vora | Perception, Reasoning | Numbers 1-10, SVO sentence building |
| 4 | My Family & Numbers | 3 | Listen Closely: think or sink? | Perception | /θ/ vs /s/ listening |
| 5 | Food & Choices | 1 | Yummy Food | — | Food nouns (incl. kimchi/bibimbap), "I like ___" |
| 5 | Food & Choices | 2 | Fruit or Vegetable? | Perception, Learning | Fruit vs. vegetable categories |
| 5 | Food & Choices | 3 | Do You Like...? | — | Yes/no question word order |
| 6 | My Day | 1 | My Morning | — | Daily routine verbs |
| 6 | My Day | 2 | Give Vora the Steps | Reasoning | first/next/then/last, algorithms |
| 6 | My Day | 3 | First, Next, Then, Last | Reasoning | Second routine (bedtime), transfer check |
| 7 | Robot Helpers | 1 | What Can Robots Do? | Societal Impact | Action verbs + "can" |
| 7 | Robot Helpers | 2 | Robots at Home and School | Societal Impact, Perception | AI helper vs. not-AI categories |
| 7 | Robot Helpers | 3 | Vora Can, Vora Can't | Societal Impact, Learning | "can" / "can't" sentence building |
| 8 | Show What You Know | 1 | Talking to AI Safely | Natural Interaction, Societal Impact | Reading 4 safety statements |
| 8 | Show What You Know | 2 | Review Carnival | Perception, Learning, Reasoning | Cumulative review, all 4 engines |
| 8 | Show What You Know | 3 | Teach Vora Day (capstone) | Learning, Societal Impact | Free production, category description |

## Reading this as a curriculum reviewer

- **Every lesson has:** a warmup with a verbatim teacher script (English +
  Korean), explicit vocabulary or a concept segment (Vora's lines, shown
  and read aloud in both languages, plus a teacher-facing pedagogical
  note), a formative check with a suggested method (whole-class thumbs or
  cold-call), and a wrap-up (sometimes with homework). 13 of the 24 also
  include a hands-on activity built on one of the four content-driven
  engines.
- **Repetition is intentional, not padding.** Classification is taught 4
  times (Week 1 Day 3, Week 2 Day 2, Week 5 Day 2, Week 7 Day 2) with
  fresh, increasingly ambiguous vocabulary each time — the AI-helper-vs-not
  sort in Week 7 Day 2 is deliberately the hardest classification task in
  the unit. Sequencing is taught twice (Week 6 Days 2 and 3) as an explicit
  transfer check. Each of the four minimal-pair sounds is introduced once
  and then revisited together in Week 8's review carnival, which runs one
  round of all four engine types back to back as the unit's closest thing
  to a formative assessment.
- **The capstone (Week 8 Day 3)** is intentionally not fully app-driven —
  it pairs one worked example in the Presentation Player with
  teacher-facilitated small-group work using real classroom objects, so
  the unit ends on kid-led production and confidence, not a final test.
- **Localization is substantive, not cosmetic.** Every line of every
  lesson — teacher scripts, vocabulary, Vora's dialogue, instructions,
  homework — has a real Korean translation, not a placeholder. Food
  vocabulary in Week 5 deliberately includes kimchi and bibimbap: words
  kids already have full confidence in from Korean, used as a bridge into
  new English sentence structure rather than starting from zero.

See [`docs/AI_CURRICULUM.md`](./AI_CURRICULUM.md#roadmap) for what's
still ahead for this product beyond lesson content (two-device sync, an
org self-service admin UI, and so on).
