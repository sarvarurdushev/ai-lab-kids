# Korean L1 interference notes

Why this curriculum targets the specific sounds and structures it does,
for Korean elementary beginners (CEFR pre-A1/A1). This is the research
backing the "Korean L1 note" field on every lesson in
[`lib/curriculum/scopeAndSequence.ts`](../lib/curriculum/scopeAndSequence.ts).

## Phonology (five sounds this curriculum drills)

Korean's consonant inventory doesn't map 1:1 onto English's, so a handful
of gaps account for most of the pronunciation-related friction Korean
learners hit early on. The foundations unit drills the first four; the
year curriculum's quarterly Spotlight checkpoints (see
[`docs/MONTHLY_CURRICULUM.md`](./MONTHLY_CURRICULUM.md)) review all four
across the year and add a fifth in Month 12. Sources: [Korean Learners'
Production of English
Consonants](https://files.eric.ed.gov/fulltext/EJ1414403.pdf), [A Catalogue
of Errors Made by Korean Learners of
English](https://onlinepedagogy.wordpress.com/2009/08/11/a-catalogue-of-errors-made-by-korean-learners-of-english/).

| Gap | Why | Where it's drilled |
|---|---|---|
| /l/ vs /r/ | Korean has one liquid phoneme (ㄹ), realized as either [l] or [r] allophonically depending on position — the contrast simply isn't phonemic in the L1. | Week 2, Day 3 (`w2d3_light_or_right`); reviewed Month 3 Spotlight (`m3_spotlight`) |
| /f/ vs /p/ | No /f/ in Korean; it's regularly approximated with /p/ (ㅍ) or /h/ (ㅎ) via loanword conventions. | Week 3, Day 3 (`w3d3_fan_or_pan`); reviewed Month 6 Spotlight (`m6_spotlight`) |
| /θ/ ("th") vs /s/ | No dental fricative in Korean; commonly substituted with /s/ (ㅅ) or /t/ (ㅌ). | Week 4, Day 3 (`w4d3_think_or_sink`); reviewed Month 9 Spotlight (`m9_spotlight`) |
| /v/ vs /b/ | No /v/ in Korean; it's regularly approximated with /b/ (ㅂ). A fifth, bonus contrast not covered in the foundations unit. | Month 12 Spotlight (`m12_spotlight`), the year's final checkpoint |
| Consonant-cluster epenthesis | Korean syllable structure doesn't allow many consonant clusters, so learners often insert a vowel (e.g., "desk" → "des-ku"). | Noted, not drilled directly — see `w1d2` teacher note |

**Design choice: listening before speaking.** Every minimal-pairs lesson
is receptive (listen and pick) only — never "say this sound correctly."
Asking for production before discrimination is solid just teaches
guessing; real production practice is a later-phase addition (see
[`docs/AI_CURRICULUM.md`](./AI_CURRICULUM.md) roadmap).

## Grammar / syntax

- **Word order (SOV → SVO).** Korean is a topic-prominent, SOV language
  ("나는 개를 두 마리 가지고 있어요" = *I dog-OBJ two have*); English SVO is
  the single biggest structural shift these kids face. The curriculum
  doesn't lecture on this — it makes word order *visible* by having kids
  physically place word tiles in order (`sentence_builder` activities,
  e.g. `w4d2_count_with_vora`), reusing the same tile-ordering mechanic as
  the algorithm/sequencing lessons on purpose: order-sensitivity is one
  concept taught twice, once for routines and once for sentences.
- **No articles.** Korean has no a/an/the equivalent. Modeled repeatedly
  in fixed chunks ("It is a book") rather than explained as a rule at this
  age.
- **No grammatical plural marking by default.** Korean doesn't obligatorily
  mark plurals; English -s needs explicit, repeated modeling (Week 2 Day 1,
  chant-and-clap technique in the teacher script).
- **Yes/no questions via "do."** Korean marks questions with
  intonation/sentence-final particles (~니?/~까?) without reordering words;
  English question-formation fronts "do," which has no direct L1
  equivalent (Week 5 Day 3).

## What this is *not*

This is guidance for *sequencing and framing* content, not a claim that
Korean-speaking children can't do X. Every note above exists to help a
teacher anticipate where extra repetition or scaffolding earns its keep —
never to lower expectations.

Source: [The Influence of Learner's First Language (L1) in English
Learning](https://bpasjournals.com/library-science/index.php/journal/article/download/651/2422/5325),
[Korean Phonology and English learning: Implications for teaching in
Korea](https://www.academia.edu/11423084/Korean_Phonology_and_English_learning_Implications_for_teaching_in_Korea).
