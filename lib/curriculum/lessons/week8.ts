import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w8d1_talking_to_ai_safely: Lesson = {
  ...meta("w8d1_talking_to_ai_safely"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"Is Vora a real person?\" Let kids answer, then say \"Right — and that means talking to Vora has some special rules.\"",
        ko: "\"보라는 진짜 사람일까요?\"라고 물어보세요. 학생들이 답하면 \"맞아요 — 그래서 보라와 이야기할 때는 특별한 규칙이 있어요\"라고 말해주세요.",
      },
      prompt: { en: "Talking to AI is a little different.", ko: "AI와 대화하는 건 조금 달라요." },
    },
    {
      type: "concept",
      title: { en: "Talking to AI Safely", ko: "AI와 안전하게 대화해요" },
      bigIdeas: ["natural_interaction", "societal_impact"],
      lines: [
        { en: "AI only knows what it's been shown or told — it doesn't know you unless you tell it.", ko: "AI는 보여주거나 알려준 것만 알아요 — 너희가 말하지 않으면 너희를 몰라요." },
        { en: "Never share your real name, address, or photos with an AI without a grown-up.", ko: "어른의 허락 없이는 진짜 이름, 주소, 사진을 AI에게 알려주지 마세요." },
        { en: "If an AI says something confusing or scary, tell a grown-up right away.", ko: "AI가 헷갈리거나 무서운 말을 하면 바로 어른에게 말하세요." },
        { en: "AI can make mistakes — just like I did with the calculator sort! It's okay to double-check.", ko: "AI도 실수할 수 있어요 — 계산기 분류할 때 내가 그랬던 것처럼! 다시 한번 확인해도 괜찮아요." },
      ],
      teacherNote:
        "Read each rule aloud once, then ask the class to repeat it back in their own words (English or Korean, either is fine here) — this is a discussion lesson, not a decoding-practice lesson. Deliberately kept to four short lines.",
    },
    {
      type: "check",
      prompt: { en: "\"Tell me one rule for talking to an AI.\" — go around the room.", ko: "\"AI와 대화할 때 지켜야 할 규칙을 한 가지 말해보세요.\" — 교실을 돌며 말해보세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned four rules for talking to AI safely — the last new idea before our review week.",
        ko: "오늘은 AI와 안전하게 대화하기 위한 규칙 네 가지를 배웠어요 — 복습 주간 전 마지막 새로운 개념이에요.",
      },
      homework: { en: "Tell a family member one AI safety rule you learned today.", ko: "가족에게 오늘 배운 AI 안전 수칙을 한 가지 말해보세요." },
    },
  ],
};

export const w8d2_review_carnival: Lesson = {
  ...meta("w8d2_review_carnival"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Tell the class today is a carnival — one quick round of every game they've learned this unit, mixing old favorites.",
        ko: "오늘은 카니발이라고 말해주세요 — 이번 학기에 배운 모든 게임을 한 판씩, 좋아했던 것들을 섞어서 해볼 거예요.",
      },
      prompt: { en: "Welcome to the Review Carnival! 🎉", ko: "복습 카니발에 오신 것을 환영해요! 🎉" },
    },
    {
      type: "activity",
      instructions: {
        en: "Round 1: Classification review — mix of animals and vehicles from Week 2.",
        ko: "1라운드: 분류 복습 — 2주차의 동물과 탈것을 섞어서.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Review: Animal or Vehicle?", ko: "복습: 동물일까요, 탈것일까요?" },
        labelA: { en: "Animal", ko: "동물" },
        labelB: { en: "Vehicle", ko: "탈것" },
        emojiA: "🐾",
        emojiB: "🚗",
        items: [
          { word: { en: "dog", ko: "강아지" }, emoji: "🐶", bucket: "a" },
          { word: { en: "bird", ko: "새" }, emoji: "🐦", bucket: "a" },
          { word: { en: "rabbit", ko: "토끼" }, emoji: "🐰", bucket: "a" },
          { word: { en: "bus", ko: "버스" }, emoji: "🚌", bucket: "b" },
          { word: { en: "train", ko: "기차" }, emoji: "🚂", bucket: "b" },
          { word: { en: "bike", ko: "자전거" }, emoji: "🚲", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Round 2: Sequencing review — the morning routine from Week 6.",
        ko: "2라운드: 순서 복습 — 6주차의 아침 루틴.",
      },
      config: {
        engine: "sequence_builder",
        title: { en: "Review: My Morning", ko: "복습: 나의 아침" },
        steps: [
          { text: { en: "Wake up", ko: "일어나기" }, emoji: "🌞" },
          { text: { en: "Get dressed", ko: "옷 입기" }, emoji: "👕" },
          { text: { en: "Eat breakfast", ko: "아침 먹기" }, emoji: "🥣" },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Round 3: Listening review — a mix of all four sound pairs from this unit.",
        ko: "3라운드: 듣기 복습 — 이번 학기에 배운 네 가지 발음 쌍을 섞어서.",
      },
      config: {
        engine: "minimal_pairs",
        title: { en: "Review: Mixed Listening", ko: "복습: 종합 듣기" },
        targetSound: "l/r, f/p, th/s — cumulative review",
        teacherNote: "One pair from each of the unit's four listening lessons — this is the closest thing to a pronunciation-discrimination assessment in the pilot unit.",
        pairs: [
          { wordA: { text: "light", emoji: "💡", ko: "빛" }, wordB: { text: "right", emoji: "👉", ko: "오른쪽" } },
          { wordA: { text: "fan", emoji: "🪭", ko: "부채" }, wordB: { text: "pan", emoji: "🍳", ko: "프라이팬" } },
          { wordA: { text: "think", emoji: "🤔", ko: "생각하다" }, wordB: { text: "sink", emoji: "🚰", ko: "싱크대" } },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Round 4: Sentence review — build \"I have two dogs\" one more time from scratch.",
        ko: "4라운드: 문장 복습 — \"I have two dogs\"를 처음부터 다시 만들어봐요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "Review: I have two dogs.", ko: "복습: 나는 강아지 두 마리가 있어요." },
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
      prompt: { en: "Whole-class check-in: which carnival round was easiest? Which was the trickiest?", ko: "학급 전체 점검: 카니발 라운드 중 가장 쉬웠던 것은? 가장 어려웠던 것은?" },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we played one round of every game from this unit — a fun cumulative check of everything we've learned.",
        ko: "오늘은 이번 학기에 배운 모든 게임을 한 판씩 해봤어요 — 지금까지 배운 모든 것을 즐겁게 종합 점검했어요.",
      },
    },
  ],
};

export const w8d3_teach_vora_day: Lesson = {
  ...meta("w8d3_teach_vora_day"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Tell the class: today, they get to be the teacher. They'll invent a category and teach it to Vora, just like Vora has been learning from them all unit.",
        ko: "학급에게 말해주세요: 오늘은 여러분이 선생님이 될 차례예요. 분류를 하나 만들어서 보라에게 가르쳐줄 거예요, 이번 학기 내내 보라가 여러분에게 배웠던 것처럼요.",
      },
      prompt: { en: "Today, YOU teach Vora!", ko: "오늘은 여러분이 보라를 가르쳐요!" },
    },
    {
      type: "concept",
      title: { en: "Everything We Taught Vora", ko: "우리가 보라에게 가르친 모든 것" },
      bigIdeas: ["learning", "societal_impact"],
      lines: [
        { en: "This unit, you taught me animals, food, colors, and how AI helpers work.", ko: "이번 학기 동안 너희는 나에게 동물, 음식, 색깔, 그리고 AI 도우미가 어떻게 작동하는지 가르쳐줬어." },
        { en: "You showed me that even AI needs lots of examples, and that it's okay to be wrong sometimes.", ko: "너희는 AI도 많은 예시가 필요하다는 것과, 가끔 틀려도 괜찮다는 것을 보여줬어." },
        { en: "Now it's your turn: invent your own category and teach it to me!", ko: "이제 너희 차례야: 너희만의 분류를 만들어서 나에게 가르쳐줘!" },
      ],
      teacherNote:
        "This is the unit's capstone. Split the class into small groups; each group picks a category (\"toys vs. not toys,\" \"sports vs. not sports\" — anything with real classroom objects works), describes it to the class in English (\"A ___ is a toy\"), then leads the room through a live version of the Train the Robot loop using real objects. The app activity below is one worked example to run together first, as a model.",
    },
    {
      type: "activity",
      instructions: {
        en: "Run this one together as the model round before groups invent their own categories.",
        ko: "모둠이 자신만의 분류를 만들기 전에, 먼저 이 예시 라운드를 함께 진행해보세요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Example: Toy or Not a Toy?", ko: "예시: 장난감일까요, 아닐까요?" },
        labelA: { en: "Toy", ko: "장난감" },
        labelB: { en: "Not a Toy", ko: "장난감이 아니에요" },
        emojiA: "🧸",
        emojiB: "📚",
        items: [
          { word: { en: "ball", ko: "공" }, emoji: "⚽", bucket: "a" },
          { word: { en: "teddy bear", ko: "곰인형" }, emoji: "🧸", bucket: "a" },
          { word: { en: "kite", ko: "연" }, emoji: "🪁", bucket: "a" },
          { word: { en: "book", ko: "책" }, emoji: "📖", bucket: "b" },
          { word: { en: "pencil", ko: "연필" }, emoji: "✏️", bucket: "b" },
          { word: { en: "chair", ko: "의자" }, emoji: "🪑", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "Each group presents their invented category to the class in English before the live round.", ko: "각 모둠이 실시간 라운드 전에 자신들이 만든 분류를 영어로 학급에 발표해요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "You did it — eight weeks of English and AI, and today you taught Vora something brand new. Great job, AI Explorers!",
        ko: "해냈어요 — 8주 동안 영어와 AI를 배웠고, 오늘은 보라에게 완전히 새로운 것을 가르쳤어요. 정말 잘했어요, AI 탐험가들!",
      },
    },
  ],
};
