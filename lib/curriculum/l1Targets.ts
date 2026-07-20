import type { Bilingual } from "./types";

/**
 * The five Korean-L1 pronunciation gaps this curriculum deliberately
 * targets, ported into code from docs/KOREAN_L1_NOTES.md so it can render
 * on app/curriculum/page.tsx instead of living only in a markdown file no
 * buyer ever opens. `reviewedAt` keys are corrected here to the current
 * `_week4` lesson keys — the source doc still references pre-restructuring
 * `_spotlight` keys, which no longer exist (see lib/curriculum/lessons/).
 */
export interface L1SoundTarget {
  gap: string;
  why: Bilingual;
  introducedAt: { key: string; label: string };
  /** Quarterly year-curriculum checkpoint lessons that review this gap. Empty for the Month 12-only bonus contrast. */
  reviewedAt: { key: string; label: string }[];
}

export const L1_SOUND_TARGETS: L1SoundTarget[] = [
  {
    gap: "/l/ vs /r/",
    why: {
      en: "Korean has one liquid phoneme (ㄹ), realized as either [l] or [r] allophonically depending on position — the contrast simply isn't phonemic in the L1.",
      ko: "한국어에는 하나의 유음 음소(ㄹ)만 있으며, 위치에 따라 [l] 또는 [r]로 소리 나요 — 이 두 소리의 구별이 모국어에는 없어요.",
    },
    introducedAt: { key: "w2d3_light_or_right", label: "Foundations Week 2, Day 3 — light or right?" },
    reviewedAt: [{ key: "m3_week4", label: "Month 3 · Friends, Week 4" }],
  },
  {
    gap: "/f/ vs /p/",
    why: {
      en: "No /f/ in Korean; it's regularly approximated with /p/ (ㅍ) or /h/ (ㅎ) via loanword conventions.",
      ko: "한국어에는 /f/ 소리가 없어서, 보통 /p/(ㅍ) 또는 /h/(ㅎ)로 대체돼요.",
    },
    introducedAt: { key: "w3d3_fan_or_pan", label: "Foundations Week 3, Day 3 — fan or pan?" },
    reviewedAt: [{ key: "m6_week4", label: "Month 6 · Animals, Week 4" }],
  },
  {
    gap: "/θ/ (\"th\") vs /s/",
    why: {
      en: "No dental fricative in Korean; commonly substituted with /s/ (ㅅ) or /t/ (ㅌ).",
      ko: "한국어에는 치찰음 /θ/가 없어서, 보통 /s/(ㅅ) 또는 /t/(ㅌ)로 대체돼요.",
    },
    introducedAt: { key: "w4d3_think_or_sink", label: "Foundations Week 4, Day 3 — think or sink?" },
    reviewedAt: [{ key: "m9_week4", label: "Month 9 · My Body, Week 4" }],
  },
  {
    gap: "/v/ vs /b/",
    why: {
      en: "No /v/ in Korean; it's regularly approximated with /b/ (ㅂ). A fifth, bonus contrast not covered in the foundations unit.",
      ko: "한국어에는 /v/ 소리가 없어서, 보통 /b/(ㅂ)로 대체돼요. 기초 과정에는 없는 다섯 번째 보너스 대조예요.",
    },
    introducedAt: { key: "m12_week4", label: "Month 12 · Winter Holidays, Week 4 (year-end checkpoint)" },
    reviewedAt: [],
  },
  {
    gap: "Consonant-cluster epenthesis",
    why: {
      en: "Korean syllable structure doesn't allow many consonant clusters, so learners often insert a vowel (e.g., \"desk\" → \"des-ku\"). Noted, not drilled directly.",
      ko: "한국어 음절 구조는 여러 자음이 연속되는 것을 허용하지 않아, 학습자가 모음을 끼워 넣는 경우가 많아요(예: desk → des-ku). 직접 훈련하지는 않고 참고만 해요.",
    },
    introducedAt: { key: "w1d2_voras_classroom", label: "Foundations Week 1, Day 2 (teacher note only)" },
    reviewedAt: [],
  },
];

export const L1_GRAMMAR_NOTES: { title: Bilingual; note: Bilingual }[] = [
  {
    title: { en: "Word order (SOV → SVO)", ko: "어순 (SOV → SVO)" },
    note: {
      en: "Korean is topic-prominent SOV (\"I dog-OBJ two have\"); English SVO is the single biggest structural shift these kids face. Taught by having kids physically place word tiles in order (sentence_builder activities) rather than by lecture.",
      ko: "한국어는 주제 중심의 SOV 어순('나는 개를 두 마리 가지고 있어요')이라, 영어의 SVO 어순은 아이들이 겪는 가장 큰 구조적 변화예요. 설명 대신 단어 타일을 순서대로 배치하는 활동(문장 만들기)으로 가르쳐요.",
    },
  },
  {
    title: { en: "No articles", ko: "관사 없음" },
    note: {
      en: "Korean has no a/an/the equivalent. Modeled repeatedly in fixed chunks (\"It is a book\") rather than explained as a rule at this age.",
      ko: "한국어에는 a/an/the에 해당하는 표현이 없어요. 이 나이대에는 규칙으로 설명하기보다 'It is a book'처럼 고정된 표현으로 반복해서 익혀요.",
    },
  },
  {
    title: { en: "No grammatical plural marking by default", ko: "기본적으로 복수 표시 없음" },
    note: {
      en: "Korean doesn't obligatorily mark plurals; English -s needs explicit, repeated modeling.",
      ko: "한국어는 복수형을 의무적으로 표시하지 않아서, 영어의 -s는 명시적이고 반복적인 모델링이 필요해요.",
    },
  },
  {
    title: { en: "Yes/no questions via \"do\"", ko: "\"do\"를 사용한 의문문" },
    note: {
      en: "Korean marks questions with intonation/sentence-final particles (~니?/~까?) without reordering words; English question-formation fronts \"do,\" which has no direct L1 equivalent.",
      ko: "한국어는 어순을 바꾸지 않고 억양이나 문장 끝 조사(~니?/~까?)로 의문문을 만들지만, 영어는 문장 앞에 'do'를 붙여요 — 모국어에 직접 대응되는 표현이 없어요.",
    },
  },
];
