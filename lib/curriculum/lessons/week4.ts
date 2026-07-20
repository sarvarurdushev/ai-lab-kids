import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w4d1_my_family: Lesson = {
  ...meta("w4d1_my_family"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Show a family photo (yours or a drawn example) and point: \"This is my mom.\"",
        ko: "가족 사진(선생님 사진이나 그림)을 보여주며 가리키세요: \"This is my mom.\"",
      },
      prompt: { en: "This is my family.", ko: "이것은 우리 가족이에요." },
    },
    {
      type: "vocab",
      title: { en: "Family", ko: "가족" },
      words: [
        { word: { en: "mom", ko: "엄마" }, emoji: "👩" },
        { word: { en: "dad", ko: "아빠" }, emoji: "👨" },
        { word: { en: "sister", ko: "언니/누나/여동생" }, emoji: "👧" },
        { word: { en: "brother", ko: "형/오빠/남동생" }, emoji: "👦" },
        { word: { en: "grandma", ko: "할머니" }, emoji: "👵" },
        { word: { en: "grandpa", ko: "할아버지" }, emoji: "👴" },
        { word: { en: "baby", ko: "아기" }, emoji: "👶" },
      ],
    },
    {
      type: "concept",
      title: { en: "My Family", ko: "우리 가족" },
      bigIdeas: [],
      lines: [
        { en: "\"My\" means it belongs to me — my mom, my dad, my family.", ko: "\"My\"는 나의 것이라는 뜻이에요 — my mom, my dad, my family." },
      ],
      teacherNote:
        "Korean family terms (형/오빠, 누나/언니) encode relative age and the speaker's gender in a way English \"brother/sister\" doesn't — expect kids to want to specify more. Validate that (\"Yes, in Korean we'd say more — in English we just say brother!\") rather than treating it as a mistake.",
    },
    {
      type: "check",
      prompt: { en: "Ask a partner: \"Do you have a sister or a brother?\"", ko: "짝에게 물어보세요: \"Do you have a sister or a brother?\"" },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned family words and how to say \"my\" family members in English.",
        ko: "오늘은 가족 단어와 영어로 \"my\"를 사용해 가족을 말하는 방법을 배웠어요.",
      },
      homework: { en: "Introduce your family in English to someone at home.", ko: "집에서 가족 중 한 명에게 영어로 우리 가족을 소개해보세요." },
    },
  ],
};

export const w4d3_think_or_sink: Lesson = {
  ...meta("w4d3_think_or_sink"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Say \"think\" and \"sink\" slowly, back to back, a few times, without explaining yet.",
        ko: "\"think\"와 \"sink\"를 천천히, 반복해서 말해주세요. 아직 설명하지 마세요.",
      },
      prompt: { en: "think... sink... think... sink...", ko: "think... sink... think... sink..." },
    },
    {
      type: "concept",
      title: { en: "A New Sound: th", ko: "새로운 소리: th" },
      bigIdeas: ["perception"],
      lines: [
        { en: "For \"th,\" put your tongue between your teeth and blow air gently.", ko: "\"th\" 소리를 낼 때는 혀를 이 사이에 살짝 넣고 바람을 불어보세요." },
        { en: "Korean doesn't have this sound either — it's another brand-new one!", ko: "한국어에도 이 소리는 없어요 — 이것도 완전히 새로운 소리예요!" },
        { en: "Let's listen very carefully and pick the word we hear.", ko: "아주 잘 듣고 들리는 단어를 골라봐요." },
      ],
      teacherNote: "Korean has no dental fricative /θ/; it's commonly substituted with /s/ (ㅅ) or /t/ (ㅌ) in loanwords and early L2 production.",
    },
    {
      type: "activity",
      instructions: {
        en: "Play each word once, and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
        ko: "각 단어를 한 번씩 재생하고, 학생들이 들은 단어의 그림을 가리키거나 말하게 하세요. 어려워하는 쌍은 반복해 주세요.",
      },
      config: {
        engine: "minimal_pairs",
        title: { en: "Listen Closely: th or s?", ko: "잘 들어보세요: th일까요, s일까요?" },
        targetSound: "/θ/ (\"th\") vs /s/",
        teacherNote: "Korean has no /θ/; expect substitution with /s/ or /t/. This is the third of the four sound gaps drilled this unit.",
        pairs: [
          { wordA: { text: "think", emoji: "🤔", ko: "생각하다" }, wordB: { text: "sink", emoji: "🚰", ko: "싱크대" } },
          { wordA: { text: "mouth", emoji: "👄", ko: "입" }, wordB: { text: "mouse", emoji: "🐭", ko: "쥐" } },
          { wordA: { text: "bath", emoji: "🛁", ko: "목욕" }, wordB: { text: "bass", emoji: "🐟", ko: "농어" } },
          { wordA: { text: "path", emoji: "🛤️", ko: "길" }, wordB: { text: "pass", emoji: "🏈", ko: "패스하다" } },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "Say \"think\" and \"sink\" one more time — thumbs up if you can hear the difference now.", ko: "\"think\"와 \"sink\"를 한 번 더 말해보세요 — 이제 차이가 들리면 엄지를 올려주세요." },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we practiced listening for the th sound — the third new sound this unit. One more to go in Week 8's review!",
        ko: "오늘은 th 소리를 듣는 연습을 했어요 — 이번 학기에서 세 번째로 배운 새로운 소리예요. 8주차 복습에서 한 번 더 만나요!",
      },
    },
  ],
};

export const w4d2_count_with_vora: Lesson = {
  ...meta("w4d2_count_with_vora"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Count five objects in the room out loud together: \"One, two, three, four, five.\"",
        ko: "교실 안 물건 다섯 개를 함께 소리 내어 세어보세요: \"One, two, three, four, five.\"",
      },
      prompt: { en: "1, 2, 3, 4, 5...", ko: "1, 2, 3, 4, 5..." },
    },
    {
      type: "vocab",
      title: { en: "Numbers 1-10", ko: "숫자 1-10" },
      words: [
        { word: { en: "one", ko: "하나" }, emoji: "1️⃣" },
        { word: { en: "two", ko: "둘" }, emoji: "2️⃣" },
        { word: { en: "three", ko: "셋" }, emoji: "3️⃣" },
        { word: { en: "four", ko: "넷" }, emoji: "4️⃣" },
        { word: { en: "five", ko: "다섯" }, emoji: "5️⃣" },
      ],
    },
    {
      type: "concept",
      title: { en: "Vora Counts, Too", ko: "보라도 세어봐요" },
      bigIdeas: ["perception"],
      lines: [
        { en: "When I look at a picture, I can count how many things are in it.", ko: "그림을 보면, 나는 그 안에 몇 개가 있는지 셀 수 있어." },
        { en: "\"How many dogs?\" \"Two dogs!\" — counting is a way of understanding a picture.", ko: "\"강아지가 몇 마리?\" \"두 마리!\" — 세는 것도 그림을 이해하는 한 가지 방법이야." },
      ],
      teacherNote:
        "Keep this light — it's just planting that \"counting what's in a picture\" is something both people and AI do, ahead of the sentence-building activity.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full sentence together.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 문장을 만들어요. 타일을 놓을 때마다 단어를 소리 내어 말하고, 완성되면 전체 문장을 함께 읽어보세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "I have two dogs.", ko: "나는 강아지 두 마리가 있어요." },
        words: [
          { text: "I", role: "subject", ko: "나는" },
          { text: "have", role: "verb", ko: "가지고 있다" },
          { text: "two", role: "other", ko: "두" },
          { text: "dogs", role: "object", ko: "강아지들" },
        ],
        translation: { en: "I have two dogs.", ko: "나는 강아지 두 마리가 있어요." },
      },
    },
    {
      type: "check",
      prompt: { en: "Ask a few kids: \"How many ___ do you have?\" using a word they know.", ko: "몇몇 학생에게 물어보세요: 아는 단어를 사용해 \"How many ___ do you have?\"" },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we counted to five and built the sentence \"I have two dogs\" in the right English word order.",
        ko: "오늘은 5까지 세고, \"I have two dogs\"를 올바른 영어 어순으로 만들었어요.",
      },
      homework: {
        en: "Count five things at home in English.",
        ko: "집에서 물건 다섯 개를 영어로 세어보세요.",
      },
    },
  ],
};
