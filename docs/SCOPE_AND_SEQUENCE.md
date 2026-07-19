# Scope & Sequence — Robi's Classroom

An 8-week, 24-lesson pilot unit (3 lessons/week) for Korean elementary
beginners (CEFR pre-A1/A1), teaching English *through* AI-literacy
concepts. See [`docs/AI_CURRICULUM.md`](./AI_CURRICULUM.md) for the
research this is built on and [`docs/KOREAN_L1_NOTES.md`](./KOREAN_L1_NOTES.md)
for the phonology/grammar targeting rationale.

This is the same data as
[`lib/curriculum/scopeAndSequence.ts`](../lib/curriculum/scopeAndSequence.ts),
rendered for lesson planning. **✅ = fully built** (playable end-to-end in
the Presentation Player right now). Everything else has real objectives,
vocabulary, and standards mapping, but not yet full segment-by-segment
content — see the [roadmap](./AI_CURRICULUM.md#roadmap) for what "finishing
the unit" means concretely.

| Week | Unit | Day | Lesson | Big Idea(s) | English Focus | Status |
|---|---|---|---|---|---|---|
| 1 | Meet Robi | 1 | Hello, Robi! | Natural Interaction | Greetings, self-introduction | ✅ |
| 1 | Meet Robi | 2 | Robi's Classroom | Perception | Classroom objects, "What is this?" | ✅ |
| 1 | Meet Robi | 3 | What Is AI? | Perception, Learning | "It is / it is not a ___" | ✅ |
| 2 | Animal Friends | 1 | Animal Safari | Perception | Animal nouns, plural -s | ✅ |
| 2 | Animal Friends | 2 | How Does Robi See? | Perception, Learning | Animal vs. vehicle categories | ✅ |
| 2 | Animal Friends | 3 | Listen Closely: light or right? | Perception | /l/ vs /r/ listening | ✅ |
| 3 | Colors & Patterns | 1 | Rainbow Colors | — | Color adjectives | Planned |
| 3 | Colors & Patterns | 2 | Robi Finds the Pattern | Reasoning, Learning | Shape nouns, same/different | Planned |
| 3 | Colors & Patterns | 3 | Listen Closely: fan or pan? | Perception | /f/ vs /p/ listening | Planned |
| 4 | My Family & Numbers | 1 | My Family | — | Family nouns, possessive "my" | Planned |
| 4 | My Family & Numbers | 2 | Count with Robi | Perception, Reasoning | Numbers 1-10, SVO sentence building | ✅ |
| 4 | My Family & Numbers | 3 | Listen Closely: think or sink? | Perception | /θ/ vs /s/ listening | Planned |
| 5 | Food & Choices | 1 | Yummy Food | — | Food nouns (incl. kimchi/bibimbap), "I like ___" | Planned |
| 5 | Food & Choices | 2 | Fruit or Vegetable? | Perception, Learning | Fruit vs. vegetable categories | Planned |
| 5 | Food & Choices | 3 | Do You Like...? | — | Yes/no question word order | Planned |
| 6 | My Day | 1 | My Morning | — | Daily routine verbs | Planned |
| 6 | My Day | 2 | Give Robi the Steps | Reasoning | first/next/then/last, algorithms | ✅ |
| 6 | My Day | 3 | First, Next, Then, Last | Reasoning | Second routine, transfer check | Planned |
| 7 | Robot Helpers | 1 | What Can Robots Do? | Societal Impact | Action verbs + "can" | Planned |
| 7 | Robot Helpers | 2 | Robots at Home and School | Societal Impact, Perception | AI helper vs. not-AI categories | Planned |
| 7 | Robot Helpers | 3 | Robi Can, Robi Can't | Societal Impact, Learning | "can" / "can't" sentence building | Planned |
| 8 | Show What You Know | 1 | Talking to AI Safely | Natural Interaction, Societal Impact | Reading 4 safety statements | Planned |
| 8 | Show What You Know | 2 | Review Carnival | Perception, Learning, Reasoning | Cumulative review, all engines | Planned |
| 8 | Show What You Know | 3 | Teach Robi Day (capstone) | Learning, Societal Impact | Free production, category description | Planned |

## Reading this as a curriculum reviewer

- **8 of 24 lessons (one full week + touches of three others) are fully
  built** — enough to run a real multi-day pilot in an actual classroom,
  and to demonstrate all four activity engines (`train_the_robot`,
  `sequence_builder`, `sentence_builder`, `minimal_pairs`) in authentic
  lesson context, not just as isolated tech demos.
- **Every lesson**, built or planned, already has: bilingual-ready
  objectives, an explicit AI4K12 big-idea mapping, a Korean-L1-specific
  teaching note, and a Korean MOE standards alignment note. Finishing the
  unit is a content-authoring task against working engines, not a new
  engineering task — see the honest breakdown in
  [`docs/AI_CURRICULUM.md`](./AI_CURRICULUM.md#roadmap).
- **Repetition is intentional, not padding.** Classification is taught 4
  times (Week 1 Day 3, Week 2 Day 2, Week 5 Day 2, Week 7 Day 2) with
  fresh vocabulary each time — each pass checks whether the *concept*
  transferred, not just the words. Same pattern for sequencing (Week 6
  Days 2 and 3) and for each minimal-pair sound (introduced once, revisited
  in Week 8's review carnival).
