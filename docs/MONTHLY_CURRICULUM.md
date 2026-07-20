# The Year Curriculum: 12 Monthly Themes

This document specifies the year-long themed curriculum that runs
alongside "Vora's Classroom" (the 8-week foundations unit — see
[`docs/SCOPE_AND_SEQUENCE.md`](./SCOPE_AND_SEQUENCE.md)). A class typically
completes the foundations unit first, then moves into the 12 months below
for the rest of the school year.

## Why 12 months, and why these themes

A real institutional buyer evaluating this platform needs more than one
pilot unit — a full-year license needs a full year of content. The month
themes are adapted from a topic-based annual curriculum guide widely used
in Korean English-education businesses (Space → Culture → Friends →
Environment → Family → Animals → Weather → Travel → Body → Halloween →
Emotions → Christmas/Winter), which is proven, seasonally sensible, and
familiar to Korean parents and teachers. What's different here: every
month pairs its English theme with one concrete
[AI4K12 big idea](https://ai4k12.org/) — kids aren't learning English and
AI separately, they're learning both through the same monthly topic, the
same design principle as the foundations unit (see
[`docs/AI_CURRICULUM.md`](./AI_CURRICULUM.md) "Research summary").

## Four weekly lessons per month

Every month is **four standalone, full lesson plans — one per week**,
matching how these classes actually run: once a week, not once a month.
Each week is its own complete class (warmup → vocab/concept → activity →
formative check → wrap-up), not a fragment of a larger unit:

1. **📖 Week 1** — the story/concept lesson. New vocabulary, the month's
   English sentence pattern, and the month's AI big idea explained through
   Vora, with one activity game to practice it.
2. **🎮 Week 2** — a full lesson built around both of the month's games,
   back to back. A short warmup and AI-idea reinforcement, then game one,
   then game two, then a formative check — playing is still teaching, not
   a break from it.
3. **🎮 Week 3** — the same two games again, in reverse order, with its
   own warmup/concept framing — a second full pass at both, not a repeat
   of Week 2 (a genuine answer to "just one game per week").
4. **🎤 Week 4** — a short, low-stakes speaking-confidence lesson. One
   sentence pattern or chant, built and said out loud by every child.
   Every third month (3, 6, 9, 12), Week 4 is a listening-discrimination
   review of one of the five Korean L1 sound gaps this platform targets
   (see [`docs/KOREAN_L1_NOTES.md`](./KOREAN_L1_NOTES.md)) instead of a
   new sentence — a quarterly checkpoint, not new content.

## Six activity engines, not two

The original pilot shipped with two engines. The year curriculum adds two
more, and every month deliberately rotates through a mix rather than
reusing the same one:

| Engine | What it does | AI big idea it demonstrates |
| --- | --- | --- |
| `train_the_robot` | Sort pictures into two categories, then check Vora's guesses | Perception, Learning |
| `sequence_builder` | Put steps of a routine in order | Representation & Reasoning |
| `sentence_builder` | Build an English sentence word-by-word in the right order | (English grammar, SVO word order) |
| `minimal_pairs` | Listen and pick which of two similar-sounding words was said | Perception (Korean L1 sound gaps) |
| `memory_match` *(new)* | Flip-card pairs game matching a word to its picture | Perception (recognition/recall) |
| `pattern_predictor` *(new)* | "What comes next?" — pick the missing item in a short pattern | Representation & Reasoning, Learning |

## Age-track differentiation

Every class is set to one of two tracks when it's created (see
[`lib/db/schema/tenancy.ts`](../lib/db/schema/tenancy.ts)):

- **Little Sparks** — ages 4-5, pre-reader
- **AI Explorers** — ages 6+, early reader

Rather than authoring two full copies of every lesson, individual pieces
of content — a bonus vocabulary word, a slightly more abstract concept
line, an extra sorting item or pattern round — are tagged
`minTrack: "explorers"` where they're authored (see
[`lib/curriculum/types.ts`](../lib/curriculum/types.ts)). A server-side
filter ([`lib/trackContent.ts`](../lib/trackContent.ts)) strips those
pieces out for Little Sparks classes before the lesson reaches the
Presentation Player, so the same lesson content genuinely differs by
track without maintaining duplicate lesson files. The demo seed
([`scripts/seed.ts`](../scripts/seed.ts)) creates one class on each track
so this is visible side-by-side out of the box.

## The 12 months

| # | Theme (EN / KO) | AI Big Idea | English Focus |
| - | --- | --- | --- |
| 1 | Space / 우주 | Representation & Reasoning | "It's a ___." |
| 2 | Culture & Countries / 문화와 나라 | Societal Impact | "I'm from ___." |
| 3 | Friends / 친구 | Natural Interaction | "Can I play?" / "Let's share." |
| 4 | Environment / 환경 | Learning | "We should / shouldn't ___." |
| 5 | Family / 가족 | Perception | "This is my ___." |
| 6 | Animals / 동물 | Perception | "It's a big / small ___." |
| 7 | Weather / 날씨 | Representation & Reasoning | "It's ___ today." |
| 8 | Travel / 여행 | Representation & Reasoning | "Let's go by ___." |
| 9 | My Body / 내 몸 | Perception | "Touch your ___." (TPR chant) |
| 10 | Halloween / 할로윈 | Learning | "Trick or treat!" / "I'm a ___." |
| 11 | Emotions / 감정 | Natural Interaction | "I feel ___." |
| 12 | Winter Holidays / 겨울 방학과 크리스마스 | Societal Impact (capstone) | "I want ___ for Christmas." |

Full lesson-level detail (all 48 lessons' titles, objectives, and Korean
L1 notes) lives in
[`lib/curriculum/monthlyScopeAndSequence.ts`](../lib/curriculum/monthlyScopeAndSequence.ts)
and is browsable per-class in the Teacher Console
(`/classes/[classId]` → "Year Curriculum — 12 Months").

## What Month 12 closes the loop on

Month 12's Week 2 lesson (`m12_week2`, "Review Sort") and Week 3 lesson
(`m12_week3`, "A Year of Patterns") are a cumulative review pulling
vocabulary and patterns from across the whole year, mirroring the
foundations unit's own Week 8 Review Carnival. Its Week 1 lesson asks
every child to name one AI helper from *any* month of the year and explain
what it does — the year's actual capstone assessment.
