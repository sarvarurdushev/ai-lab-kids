import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m1_week1: Lesson = {
  ...meta("m1_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Dim the lights if you can, and ask the class: \"What do you see at night, up in the sky?\" Let a few kids call out guesses before you reveal that today's theme is space.",
        ko: "가능하다면 조명을 살짝 어둡게 하고 학생들에게 물어보세요: \"밤에 하늘을 보면 무엇이 보일까요?\" 오늘의 주제가 우주라는 것을 알려주기 전에 몇 명의 추측을 먼저 들어보세요.",
      },
      prompt: { en: "What's up in the sky? ✨", ko: "하늘 위에 무엇이 있을까요? ✨" },
    },
    {
      type: "vocab",
      title: { en: "Space Words", ko: "우주 단어" },
      words: [
        { word: { en: "star", ko: "별" }, emoji: "⭐" },
        { word: { en: "moon", ko: "달" }, emoji: "🌙" },
        { word: { en: "planet", ko: "행성" }, emoji: "🪐", minTrack: "explorers" },
        { word: { en: "rocket", ko: "로켓" }, emoji: "🚀" },
        { word: { en: "sun", ko: "태양" }, emoji: "☀️" },
        { word: { en: "astronaut", ko: "우주비행사" }, emoji: "👨‍🚀" },
      ],
    },
    {
      type: "concept",
      title: { en: "Vora Looks at the Stars", ko: "보라가 별을 봐요" },
      bigIdeas: ["reasoning", "learning"],
      lines: [
        { en: "Look up — the night sky is full of stars!", ko: "위를 봐 — 밤하늘에 별이 가득해!" },
        { en: "I look at lots and lots of star pictures, one after another.", ko: "나는 별 사진을 아주 많이, 하나씩 살펴봐." },
        {
          en: "I find a pattern — like star, moon, star, moon — the same way I sort other pictures.",
          ko: "별, 달, 별, 달처럼 패턴을 찾아 — 다른 그림을 분류할 때랑 똑같은 방법이야.",
        },
        { en: "Let's find a pattern together!", ko: "우리 함께 패턴을 찾아보자!" },
      ],
      teacherNote:
        "This sets up the pattern_predictor activity below — keep \"pattern\" concrete: it just means \"what repeats.\" Big Idea: Representation & Reasoning (finding and extending a pattern), with a light Learning thread since Vora still needs lots of examples first, echoing Week 1 Day 3/Week 2 Day 2.",
    },
    {
      type: "activity",
      instructions: {
        en: "Say each emoji in the sequence out loud together before guessing what comes next. Let the whole class predict before anyone taps an answer.",
        ko: "다음을 추측하기 전에 순서에 있는 이모지를 함께 소리 내어 말해보세요. 답을 누르기 전에 반 전체가 먼저 예측해 보게 하세요.",
      },
      config: {
        engine: "pattern_predictor",
        title: { en: "What Comes Next in the Sky?", ko: "하늘에서 다음은 무엇일까요?" },
        teacherNote:
          "Space is this year's first appearance of the pattern-prediction engine (also used in Months 6, 7, 10, and 12). Read the pattern aloud (\"star, moon, star, moon...\") before revealing the answer choices.",
        rounds: [
          { sequence: ["⭐", "🌙", "⭐", "🌙"], answer: "⭐", options: ["⭐", "🌙", "🚀"] },
          { sequence: ["🚀", "☀️", "🚀", "☀️"], answer: "🚀", options: ["🚀", "☀️", "🌙"] },
          { sequence: ["👨‍🚀", "🌙", "👨‍🚀", "🌙"], answer: "👨‍🚀", options: ["👨‍🚀", "🌙", "⭐"] },
          {
            sequence: ["⭐", "⭐", "🌙", "⭐", "⭐"],
            answer: "🌙",
            options: ["⭐", "🌙", "🚀"],
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "\"It's a ___.\" — point to a space picture and have a student name it.", ko: "\"It's a ___.\" — 우주 그림을 가리키며 한 학생이 이름을 말해보게 하세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned six space words and saw how Vora finds a pattern in star pictures, the same way it sorts other pictures.",
        ko: "오늘은 우주 단어 여섯 개를 배우고, 보라가 다른 그림을 분류할 때와 같은 방법으로 별 사진에서 패턴을 찾는 모습을 봤어요.",
      },
      homework: {
        en: "Look up at the sky tonight (or a picture of it) and say \"It's a star!\" or \"It's the moon!\" in English.",
        ko: "오늘 밤 하늘을(또는 하늘 사진을) 보고 영어로 \"It's a star!\" 또는 \"It's the moon!\"이라고 말해보세요.",
      },
    },
  ],
};

export const m1_week2: Lesson = {
  ...meta("m1_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Hold up two hands like a scale and ask: \"Is a rocket a space thing, or an earth thing?\" Let kids answer fast — this is just a warm-up guess before today's game.",
        ko: "양손을 저울처럼 들어 보이며 물어보세요: \"로켓은 우주 물건일까요, 지구 물건일까요?\" 빠르게 답하게 해보세요 — 오늘 게임 전 준비 단계예요.",
      },
      prompt: { en: "Space thing, or earth thing? 🚀🌍", ko: "우주 물건일까요, 지구 물건일까요? 🚀🌍" },
    },
    {
      type: "concept",
      title: { en: "Vora Looks Again", ko: "보라가 다시 봐요" },
      bigIdeas: ["perception"],
      lines: [
        { en: "I look at a picture, just like you do.", ko: "나도 너희처럼 그림을 봐." },
        { en: "Then I guess — is it a space thing, or an earth thing?", ko: "그다음 추측해 — 우주 물건일까, 지구 물건일까?" },
      ],
      teacherNote:
        "Quick reminder before the sort — noticing a picture and guessing its category is Perception, the same skill behind Week 1's pattern-finding. Keep this to a few seconds; the real teaching happens in the game.",
    },
    {
      type: "activity",
      instructions: {
        en: "As a class, decide together where each picture goes before anyone taps — this is a shared sort, not an individual quiz. Then play a second game to reinforce it.",
        ko: "탭하기 전에 반 전체가 함께 각 그림이 어디로 가야 할지 정해보세요 — 개인 퀴즈가 아니라 함께하는 분류 활동이에요. 그런 다음 두 번째 게임으로 복습해 보세요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Space Thing or Earth Thing?", ko: "우주 물건일까요, 지구 물건일까요?" },
        labelA: { en: "Space Thing", ko: "우주 물건" },
        labelB: { en: "Earth Thing", ko: "지구 물건" },
        emojiA: "🚀",
        emojiB: "🌍",
        items: [
          { word: { en: "star", ko: "별" }, emoji: "⭐", bucket: "a" },
          { word: { en: "rocket", ko: "로켓" }, emoji: "🚀", bucket: "a" },
          { word: { en: "moon", ko: "달" }, emoji: "🌙", bucket: "a" },
          { word: { en: "astronaut", ko: "우주비행사" }, emoji: "👨‍🚀", bucket: "a" },
          { word: { en: "tree", ko: "나무" }, emoji: "🌳", bucket: "b" },
          { word: { en: "dog", ko: "강아지" }, emoji: "🐶", bucket: "b" },
          { word: { en: "book", ko: "책" }, emoji: "📖", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Kids take turns flipping two cards. Say the English word out loud together whenever a word card flips.",
        ko: "학생들이 돌아가며 카드 두 장을 뒤집어요. 단어 카드가 뒤집힐 때마다 함께 영어 단어를 소리 내어 말해보세요.",
      },
      config: {
        engine: "memory_match",
        title: { en: "Space Word Match", ko: "우주 단어 짝 맞추기" },
        pairs: [
          { word: { en: "star", ko: "별" }, emoji: "⭐" },
          { word: { en: "moon", ko: "달" }, emoji: "🌙" },
          { word: { en: "planet", ko: "행성" }, emoji: "🪐", minTrack: "explorers" },
          { word: { en: "rocket", ko: "로켓" }, emoji: "🚀" },
          { word: { en: "sun", ko: "태양" }, emoji: "☀️" },
          { word: { en: "astronaut", ko: "우주비행사" }, emoji: "👨‍🚀" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Point to one picture from today's sort and ask a student: \"Space thing, or earth thing?\"",
        ko: "오늘 분류한 그림 중 하나를 가리키며 한 학생에게 물어보세요: \"우주 물건일까요, 지구 물건일까요?\"",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we played two games — sorting space things from earth things, and matching space word pairs — with Vora guessing right along with us.",
        ko: "오늘은 두 가지 게임을 했어요 — 우주 물건과 지구 물건을 분류하는 게임과 우주 단어 짝 맞추기 게임이에요 — 보라도 우리와 함께 추측하는 모습을 봤어요.",
      },
    },
  ],
};

export const m1_week3: Lesson = {
  ...meta("m1_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Hold up two fingers and say: \"Today we flip cards and find matches — like a memory game!\" Mime flipping a card before starting.",
        ko: "손가락 두 개를 들어 보이며 말하세요: \"오늘은 카드를 뒤집어서 짝을 찾을 거예요 — 기억력 게임처럼요!\" 시작하기 전에 카드를 뒤집는 흉내를 내보세요.",
      },
      prompt: { en: "Ready to find a match? 🃏", ko: "짝을 찾을 준비 됐나요? 🃏" },
    },
    {
      type: "concept",
      title: { en: "Vora Remembers", ko: "보라가 기억해요" },
      bigIdeas: ["learning"],
      lines: [
        { en: "The more I see a word and picture together, the better I remember them.", ko: "단어와 그림을 함께 볼수록, 나는 더 잘 기억해." },
        { en: "Let's practice remembering space words together!", ko: "우리 함께 우주 단어를 기억하는 연습을 해보자!" },
      ],
      teacherNote:
        "Brief reminder before the game — repeated exposure is how both Vora and kids get better at recognizing something, the Learning big idea from Week 1. Keep it to a couple of lines; the matching game is the real practice.",
    },
    {
      type: "activity",
      instructions: {
        en: "Kids take turns flipping two cards. Say the English word out loud together whenever a word card flips. Then play a second game to reinforce it.",
        ko: "학생들이 돌아가며 카드 두 장을 뒤집어요. 단어 카드가 뒤집힐 때마다 함께 영어 단어를 소리 내어 말해보세요. 그런 다음 두 번째 게임으로 복습해 보세요.",
      },
      config: {
        engine: "memory_match",
        title: { en: "Space Word Match", ko: "우주 단어 짝 맞추기" },
        pairs: [
          { word: { en: "star", ko: "별" }, emoji: "⭐" },
          { word: { en: "moon", ko: "달" }, emoji: "🌙" },
          { word: { en: "planet", ko: "행성" }, emoji: "🪐", minTrack: "explorers" },
          { word: { en: "rocket", ko: "로켓" }, emoji: "🚀" },
          { word: { en: "sun", ko: "태양" }, emoji: "☀️" },
          { word: { en: "astronaut", ko: "우주비행사" }, emoji: "👨‍🚀" },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "As a class, decide together where each picture goes before anyone taps — this is a shared sort, not an individual quiz.",
        ko: "탭하기 전에 반 전체가 함께 각 그림이 어디로 가야 할지 정해보세요 — 개인 퀴즈가 아니라 함께하는 분류 활동이에요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Space Thing or Earth Thing?", ko: "우주 물건일까요, 지구 물건일까요?" },
        labelA: { en: "Space Thing", ko: "우주 물건" },
        labelB: { en: "Earth Thing", ko: "지구 물건" },
        emojiA: "🚀",
        emojiB: "🌍",
        items: [
          { word: { en: "star", ko: "별" }, emoji: "⭐", bucket: "a" },
          { word: { en: "rocket", ko: "로켓" }, emoji: "🚀", bucket: "a" },
          { word: { en: "moon", ko: "달" }, emoji: "🌙", bucket: "a" },
          { word: { en: "astronaut", ko: "우주비행사" }, emoji: "👨‍🚀", bucket: "a" },
          { word: { en: "tree", ko: "나무" }, emoji: "🌳", bucket: "b" },
          { word: { en: "dog", ko: "강아지" }, emoji: "🐶", bucket: "b" },
          { word: { en: "book", ko: "책" }, emoji: "📖", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "Ask a pair: \"Which one did you match?\" and have them answer with the English word.", ko: "짝에게 물어보세요: \"어떤 것을 짝지었나요?\" 영어 단어로 답하게 하세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we played two games — a matching game with space words, and sorting space things from earth things — and practiced remembering each word-picture pair.",
        ko: "오늘은 두 가지 게임을 했어요 — 우주 단어 짝 맞추기 게임과 우주 물건·지구 물건을 분류하는 게임이에요 — 단어-그림 짝을 기억하는 연습을 했어요.",
      },
    },
  ],
};

export const m1_week4: Lesson = {
  ...meta("m1_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Cup your hands around your eyes like binoculars and look around the room. Ask: \"What do you see?\" and take a few quick answers in any language before switching to English.",
        ko: "손으로 눈 주위를 망원경처럼 만들고 교실을 둘러보세요. \"무엇이 보이나요?\"라고 물어보고 영어로 바꾸기 전에 어떤 언어로든 빠르게 답을 들어보세요.",
      },
      prompt: { en: "What do you see? 👀", ko: "무엇이 보이나요? 👀" },
    },
    {
      type: "concept",
      title: { en: "I See...", ko: "보여요..." },
      bigIdeas: [],
      lines: [
        { en: "Look up at the sky in this picture.", ko: "이 그림 속 하늘을 봐." },
        { en: "I see a rocket!", ko: "로켓이 보여!" },
        {
          en: "\"I see ___\" tells everyone exactly what I'm looking at, right now.",
          ko: "\"I see ___\"는 내가 지금 무엇을 보고 있는지 정확히 말해줘.",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Builds directly to the sentence_builder activity below — say the full sentence \"I see a rocket\" naturally once before asking kids to build it tile by tile.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, left to right. Then invite a few kids to point at a different space picture and say their own \"I see a ___\" sentence out loud.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 문장을 만들어요. 그런 다음 몇 명의 학생에게 다른 우주 그림을 가리키며 자신만의 \"I see a ___\" 문장을 소리 내어 말해보게 하세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "I see a rocket.", ko: "로켓이 보여요." },
        words: [
          { text: "I", role: "subject", ko: "나는" },
          { text: "see", role: "verb", ko: "보다" },
          { text: "a rocket", role: "object", ko: "로켓을" },
        ],
        translation: { en: "I see a rocket.", ko: "로켓이 보여요." },
      },
    },
    {
      type: "check",
      prompt: { en: "\"I see a ___.\" — each kid points to a space picture and finishes the sentence out loud.", ko: "\"I see a ___.\" — 각자 우주 그림을 가리키며 문장을 완성해 소리 내어 말해보세요." },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today every kid built and said \"I see a ___\" about a space picture — our first full sentence about space!",
        ko: "오늘은 모두가 우주 그림에 대해 \"I see a ___\" 문장을 만들고 말했어요 — 우주에 대한 첫 완전한 문장이었어요!",
      },
      homework: {
        en: "Point to something at home and say \"I see a ___\" in English.",
        ko: "집에서 물건을 가리키며 영어로 \"I see a ___\"라고 말해보세요.",
      },
    },
  ],
};
