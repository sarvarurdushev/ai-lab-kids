import type { MonthlyUnit } from "./types";

/**
 * The year-long themed curriculum: 12 months, each pairing one real-world
 * topic (adapted from a reference topic-based ELT curriculum for young
 * Korean learners) with one AI4K12 big idea, so AI literacy and English
 * are taught through the same monthly theme instead of as separate tracks.
 * Runs alongside — not instead of — the 8-week "Robi's Classroom"
 * foundations unit (see lib/curriculum/units.ts), which a class typically
 * completes first. See docs/MONTHLY_CURRICULUM.md for the full rationale
 * and docs/SCOPE_AND_SEQUENCE.md for the lesson-level map.
 */
export const MONTHS: MonthlyUnit[] = [
  {
    key: "m1_space",
    monthIndex: 1,
    title: { en: "Space", ko: "우주" },
    posterTheme: "Space",
    bigIdeaFocus: "reasoning",
    englishFocus: { en: "\"It's a ___.\" + space nouns", ko: "\"It's a ___.\" 문장과 우주 관련 명사" },
    summary: {
      en: "Stars, planets, and rockets — and how AI finds patterns in pictures of the night sky.",
      ko: "별, 행성, 로켓 — 그리고 AI가 밤하늘 사진에서 패턴을 찾는 방법.",
    },
  },
  {
    key: "m2_culture",
    monthIndex: 2,
    title: { en: "Culture & Countries", ko: "문화와 나라" },
    posterTheme: "Culture",
    bigIdeaFocus: "societal_impact",
    englishFocus: { en: "\"I'm from ___.\" + world/food/dance nouns", ko: "\"I'm from ___.\" 문장과 세계·음식·춤 명사" },
    summary: {
      en: "Countries, food, and dance from around the world — and how AI helps people who speak different languages understand each other.",
      ko: "세계 여러 나라의 음식과 춤 — 그리고 AI가 서로 다른 언어를 쓰는 사람들이 이해하도록 돕는 방법.",
    },
  },
  {
    key: "m3_friends",
    monthIndex: 3,
    title: { en: "Friends", ko: "친구" },
    posterTheme: "Friends",
    bigIdeaFocus: "natural_interaction",
    englishFocus: { en: "\"Can I play?\" / \"Let's share.\"", ko: "\"Can I play?\" / \"Let's share.\" 표현" },
    summary: {
      en: "Making and keeping friends — and how a voice assistant listens and takes turns talking, just like a good friend does.",
      ko: "친구를 사귀고 우정을 지키는 법 — 그리고 음성 비서가 좋은 친구처럼 듣고 차례를 지켜 말하는 방법.",
    },
  },
  {
    key: "m4_environment",
    monthIndex: 4,
    title: { en: "Environment", ko: "환경" },
    posterTheme: "Environment",
    bigIdeaFocus: "learning",
    englishFocus: { en: "\"We should / shouldn't ___.\"", ko: "\"We should / shouldn't ___.\" 표현" },
    summary: {
      en: "Recycling and caring for the earth — and how AI learns from huge amounts of data to help scientists understand our climate.",
      ko: "재활용과 지구 돌보기 — 그리고 AI가 방대한 데이터를 학습해 과학자들이 기후를 이해하도록 돕는 방법.",
    },
  },
  {
    key: "m5_family",
    monthIndex: 5,
    title: { en: "Family", ko: "가족" },
    posterTheme: "Family",
    bigIdeaFocus: "perception",
    englishFocus: { en: "\"This is my ___.\"", ko: "\"This is my ___.\" 문장" },
    summary: {
      en: "Introducing family members — and how face-recognition apps try (and sometimes fail) to tell people apart, unlike how you recognize your own family instantly.",
      ko: "가족 소개하기 — 그리고 얼굴 인식 앱이 사람을 구별하려고 시도하는(가끔 실패하는) 방법, 그리고 우리는 가족을 한눈에 알아본다는 것.",
    },
  },
  {
    key: "m6_animals",
    monthIndex: 6,
    title: { en: "Animals", ko: "동물" },
    posterTheme: "Animals",
    bigIdeaFocus: "perception",
    englishFocus: { en: "\"It's a big / small ___.\"", ko: "\"It's a big / small ___.\" 문장" },
    summary: {
      en: "Wild animals around the world — and how wildlife cameras use AI to recognize which animal just walked by.",
      ko: "세계의 야생 동물 — 그리고 야생동물 카메라가 AI를 이용해 지나간 동물이 무엇인지 알아내는 방법.",
    },
  },
  {
    key: "m7_weather",
    monthIndex: 7,
    title: { en: "Weather", ko: "날씨" },
    posterTheme: "Weather",
    bigIdeaFocus: "reasoning",
    englishFocus: { en: "\"It's ___ today.\"", ko: "\"It's ___ today.\" 문장" },
    summary: {
      en: "Sun, rain, snow, and wind — and how weather forecasts are really just careful, pattern-based guesses about tomorrow.",
      ko: "해, 비, 눈, 바람 — 그리고 일기예보가 사실은 패턴을 바탕으로 한 신중한 예측이라는 것.",
    },
  },
  {
    key: "m8_travel",
    monthIndex: 8,
    title: { en: "Travel", ko: "여행" },
    posterTheme: "Travel",
    bigIdeaFocus: "reasoning",
    englishFocus: { en: "\"Let's go by ___.\"", ko: "\"Let's go by ___.\" 문장" },
    summary: {
      en: "Planes, trains, and packing a suitcase — and how a map app reasons its way to the fastest route, one step at a time.",
      ko: "비행기, 기차, 그리고 짐 싸기 — 그리고 지도 앱이 한 단계씩 추론하여 가장 빠른 길을 찾는 방법.",
    },
  },
  {
    key: "m9_body",
    monthIndex: 9,
    title: { en: "My Body", ko: "내 몸" },
    posterTheme: "Body",
    bigIdeaFocus: "perception",
    englishFocus: { en: "\"Touch your ___.\" (TPR chant)", ko: "\"Touch your ___.\" 신체 반응 챈트" },
    summary: {
      en: "Body parts through movement and song — and how motion-sensor games and fitness trackers sense when your body moves.",
      ko: "움직임과 노래로 배우는 신체 부위 — 그리고 동작 인식 게임과 활동량 측정기가 몸의 움직임을 감지하는 방법.",
    },
  },
  {
    key: "m10_halloween",
    monthIndex: 10,
    title: { en: "Halloween", ko: "할로윈" },
    posterTheme: "Halloween",
    bigIdeaFocus: "learning",
    englishFocus: { en: "\"Trick or treat!\" / \"I'm a ___.\"", ko: "\"Trick or treat!\" / \"I'm a ___.\" 표현" },
    summary: {
      en: "Costumes and spooky fun — and one more round of sorting practice, spooky vs. not-spooky, the same \"learn from examples\" idea Robi's used all year.",
      ko: "코스튬과 오싹한 재미 — 그리고 무서운 것과 무섭지 않은 것을 분류하는 연습, 로비가 1년 내내 사용해 온 '예시로 배우기'와 같은 개념.",
    },
  },
  {
    key: "m11_emotions",
    monthIndex: 11,
    title: { en: "Emotions", ko: "감정" },
    posterTheme: "Emotions",
    bigIdeaFocus: "natural_interaction",
    englishFocus: { en: "\"I feel ___.\"", ko: "\"I feel ___.\" 문장" },
    summary: {
      en: "Naming feelings — and an honest look at whether AI can really understand emotions, or just recognize a face shape.",
      ko: "감정 이름 배우기 — 그리고 AI가 정말 감정을 '이해'하는지, 아니면 얼굴 모양만 '인식'하는지 솔직하게 살펴보기.",
    },
  },
  {
    key: "m12_winter",
    monthIndex: 12,
    title: { en: "Winter Holidays", ko: "겨울 방학과 크리스마스" },
    posterTheme: "Christmas",
    bigIdeaFocus: "societal_impact",
    englishFocus: { en: "\"I want ___ for Christmas.\" (capstone review)", ko: "\"I want ___ for Christmas.\" 문장 (연말 종합 복습)" },
    summary: {
      en: "Snow, gifts, and holiday cheer — and a capstone that reviews every game and AI idea from the whole year.",
      ko: "눈, 선물, 그리고 연말 분위기 — 그리고 한 해 동안 배운 모든 게임과 AI 개념을 복습하는 마무리 활동.",
    },
  },
];

export function getMonth(key: string): MonthlyUnit | undefined {
  return MONTHS.find((m) => m.key === key);
}

export function getMonthByIndex(monthIndex: number): MonthlyUnit | undefined {
  return MONTHS.find((m) => m.monthIndex === monthIndex);
}
