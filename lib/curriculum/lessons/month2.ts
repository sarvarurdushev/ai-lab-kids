import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m2_class: Lesson = {
  ...meta("m2_class"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Show a world map or globe (or just sweep your arms wide and say \"the whole world!\") and ask: \"What country are we in right now?\" Let kids answer \"Korea!\" together.",
        ko: "세계 지도나 지구본을 보여주거나(또는 팔을 크게 벌리며 \"온 세상!\"이라고 말하며) 물어보세요: \"우리는 지금 어느 나라에 있나요?\" 학생들이 함께 \"한국!\"이라고 답하게 하세요.",
      },
      prompt: { en: "Hello, world! 🌍", ko: "안녕, 세계! 🌍" },
    },
    {
      type: "vocab",
      title: { en: "World Words", ko: "세계 단어" },
      words: [
        { word: { en: "world", ko: "세계" }, emoji: "🌍" },
        { word: { en: "flag", ko: "국기" }, emoji: "🚩" },
        { word: { en: "food", ko: "음식" }, emoji: "🍲" },
        { word: { en: "dance", ko: "춤" }, emoji: "💃" },
        { word: { en: "music", ko: "음악" }, emoji: "🎵" },
        { word: { en: "clothes", ko: "옷" }, emoji: "👘", minTrack: "explorers" },
      ],
    },
    {
      type: "concept",
      title: { en: "I'm from Korea!", ko: "저는 한국에서 왔어요!" },
      bigIdeas: ["societal_impact"],
      lines: [
        { en: "I'm from Korea!", ko: "저는 한국에서 왔어요!" },
        { en: "There are so many other countries too — like Japan, and the USA.", ko: "다른 나라도 정말 많아 — 일본이나 미국처럼." },
        {
          en: "People in other countries speak different languages — but a translator app uses AI to help everyone understand each other.",
          ko: "다른 나라 사람들은 다른 언어를 써 — 하지만 번역 앱이 AI로 모두가 서로 이해하도록 도와줘.",
        },
      ],
      teacherNote:
        "Start with \"I'm from Korea\" — every child can say this truthfully and proudly — before naming other countries. This is societal_impact's first appearance: keep the translator-app example concrete (e.g., \"like when a friend visits from another country and doesn't know Korean yet\").",
    },
    {
      type: "activity",
      instructions: {
        en: "As a class, decide together where each picture goes before anyone taps — talk through why kimchi and bibimbap are Korean food.",
        ko: "탭하기 전에 반 전체가 함께 각 그림이 어디로 가야 할지 정해보세요 — 김치와 비빔밥이 왜 한국 음식인지 이야기해 보세요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "From Korea or From Another Country?", ko: "한국에서 왔을까요, 다른 나라에서 왔을까요?" },
        labelA: { en: "From Korea", ko: "한국에서" },
        labelB: { en: "From Another Country", ko: "다른 나라에서" },
        emojiA: "🇰🇷",
        emojiB: "🌎",
        items: [
          { word: { en: "kimchi", ko: "김치" }, emoji: "🥬", bucket: "a" },
          { word: { en: "bibimbap", ko: "비빔밥" }, emoji: "🍚", bucket: "a" },
          { word: { en: "hanbok", ko: "한복" }, emoji: "👘", bucket: "a", minTrack: "explorers" },
          { word: { en: "pizza", ko: "피자" }, emoji: "🍕", bucket: "b" },
          { word: { en: "taco", ko: "타코" }, emoji: "🌮", bucket: "b" },
          { word: { en: "sushi", ko: "초밥" }, emoji: "🍣", bucket: "b" },
          { word: { en: "baguette", ko: "바게트" }, emoji: "🥖", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "\"I'm from ___.\" — ask one student to say this about themselves.", ko: "\"I'm from ___.\" — 한 학생에게 자신에 대해 말해보게 하세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned six world words and practiced saying \"I'm from Korea\" — and we learned that translator apps use AI to help people who speak different languages understand each other.",
        ko: "오늘은 세계 단어 여섯 개를 배우고 \"I'm from Korea\"라고 말하는 연습을 했어요 — 그리고 번역 앱이 AI로 서로 다른 언어를 쓰는 사람들이 이해하도록 돕는다는 것을 배웠어요.",
      },
      homework: {
        en: "Tell a family member \"I'm from Korea\" in English tonight.",
        ko: "오늘 저녁, 가족에게 영어로 \"I'm from Korea\"라고 말해보세요.",
      },
    },
  ],
};

export const m2_play: Lesson = {
  ...meta("m2_play"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Mime zipping up a suitcase and ask: \"What do we do first when we go on a trip?\" Take a few quick guesses before the game.",
        ko: "여행 가방 지퍼를 잠그는 흉내를 내며 물어보세요: \"여행 갈 때 가장 먼저 무엇을 할까요?\" 게임 전에 몇 가지 추측을 들어보세요.",
      },
      prompt: { en: "Let's go on a trip! ✈️", ko: "여행을 떠나요! ✈️" },
    },
    {
      type: "activity",
      instructions: {
        en: "Kids take turns tapping the next step. Read each step aloud with its sequencing word (\"First, pack your bag...\") as it's placed.",
        ko: "학생들이 돌아가며 다음 단계를 탭해요. 배치할 때마다 순서 표현과 함께 소리 내어 읽어주세요(\"First, pack your bag...\").",
      },
      config: {
        engine: "sequence_builder",
        title: { en: "A Pretend Trip", ko: "가상 여행" },
        steps: [
          { text: { en: "Pack your bag", ko: "가방 싸기" }, emoji: "🧳" },
          { text: { en: "Go to the airport", ko: "공항 가기" }, emoji: "🛫" },
          { text: { en: "Fly on a plane", ko: "비행기 타기" }, emoji: "✈️" },
          { text: { en: "Say hello!", ko: "인사하기" }, emoji: "👋" },
          { text: { en: "Try new food", ko: "새로운 음식 먹어보기" }, emoji: "🍜", minTrack: "explorers" },
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
        title: { en: "World Word Match", ko: "세계 단어 짝 맞추기" },
        pairs: [
          { word: { en: "world", ko: "세계" }, emoji: "🌍" },
          { word: { en: "flag", ko: "국기" }, emoji: "🚩" },
          { word: { en: "food", ko: "음식" }, emoji: "🍲" },
          { word: { en: "dance", ko: "춤" }, emoji: "💃" },
          { word: { en: "music", ko: "음악" }, emoji: "🎵" },
          { word: { en: "clothes", ko: "옷" }, emoji: "👘", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "\"First we pack your bag, next we...\" — have a student finish the whole sequence out loud.",
        ko: "\"First we pack your bag, next we...\" — 한 학생이 전체 순서를 소리 내어 이어서 말해보게 하세요.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we played two games about the world — ordering the steps of a pretend trip, and matching world word-picture pairs.",
        ko: "오늘은 세계에 대한 게임 두 가지를 했어요 — 가상 여행의 순서를 배열하고, 세계 단어-그림 짝을 맞췄어요.",
      },
    },
  ],
};

export const m2_spotlight: Lesson = {
  ...meta("m2_spotlight"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Point to yourself and say \"I'm from Korea!\" with a big proud smile. Ask kids to point to themselves too.",
        ko: "자신을 가리키며 자랑스러운 미소로 \"I'm from Korea!\"라고 말해보세요. 학생들도 자신을 가리키게 하세요.",
      },
      prompt: { en: "Where are you from? 🇰🇷", ko: "어디에서 왔나요? 🇰🇷" },
    },
    {
      type: "concept",
      title: { en: "I'm from Korea!", ko: "저는 한국에서 왔어요!" },
      bigIdeas: [],
      lines: [
        { en: "I'm from Korea. That's my country!", ko: "나는 한국에서 왔어. 그게 내 나라야!" },
        { en: "\"I'm\" is a short way to say \"I am\" — two words squished into one.", ko: "\"I'm\"은 \"I am\"을 짧게 줄인 말이야 — 두 단어를 하나로 붙인 거지." },
        {
          en: "Korean doesn't squish words together like that, so let's practice saying \"I'm\" as one quick sound.",
          ko: "한국어에는 이렇게 단어를 붙이는 방법이 없으니까, \"I'm\"을 한 번에 빠르게 말하는 연습을 해보자.",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Call out the contraction briefly (\"I'm\" = \"I am\") since Korean has no equivalent — model it as one chunk, not two words squeezed together, then move straight into building the sentence.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, left to right. Then have every kid stand up, one at a time, and say \"I'm from Korea!\" out loud.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 문장을 만들어요. 그런 다음 모든 학생이 한 명씩 일어나 \"I'm from Korea!\"라고 소리 내어 말해보게 하세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "I'm from Korea.", ko: "저는 한국에서 왔어요." },
        words: [
          { text: "I'm", role: "subject", ko: "저는" },
          { text: "from", role: "other", ko: "~에서 왔다" },
          { text: "Korea", role: "object", ko: "한국" },
        ],
        translation: { en: "I'm from Korea.", ko: "저는 한국에서 왔어요." },
      },
    },
    {
      type: "check",
      prompt: { en: "\"I'm from ___.\" — each kid says this with confidence, standing tall.", ko: "\"I'm from ___.\" — 각자 당당하게 서서 말해보세요." },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today every kid stood up and proudly said \"I'm from Korea!\" — a sentence that's true for all of us.",
        ko: "오늘은 모두가 일어나 자랑스럽게 \"I'm from Korea!\"라고 말했어요 — 우리 모두에게 진짜인 문장이에요.",
      },
      homework: {
        en: "Say \"I'm from Korea\" to a family member tonight, standing tall and proud.",
        ko: "오늘 저녁, 당당하게 서서 가족에게 \"I'm from Korea\"라고 말해보세요.",
      },
    },
  ],
};
