import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m8_week1: Lesson = {
  ...meta("m8_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Hold up (or draw) a suitcase and ask \"Where should we go?\" Let kids call out places before introducing today's travel words.",
        ko: "여행 가방을 들어 보이거나(또는 그려서) \"Where should we go?\"라고 물어보세요. 오늘의 여행 단어를 소개하기 전에 학생들이 먼저 가고 싶은 곳을 외쳐보게 하세요.",
      },
      prompt: { en: "Where should we go? 🧳", ko: "우리 어디로 갈까요? 🧳" },
    },
    {
      type: "vocab",
      title: { en: "Travel Words", ko: "여행 단어" },
      words: [
        { word: { en: "airplane", ko: "비행기" }, emoji: "✈️" },
        { word: { en: "train", ko: "기차" }, emoji: "🚂" },
        { word: { en: "ship", ko: "배" }, emoji: "🚢" },
        { word: { en: "suitcase", ko: "여행 가방" }, emoji: "🧳" },
        { word: { en: "map", ko: "지도" }, emoji: "🗺️", minTrack: "explorers" },
        { word: { en: "ticket", ko: "표" }, emoji: "🎫" },
      ],
    },
    {
      type: "concept",
      title: { en: "Vora Finds the Fastest Way", ko: "보라가 가장 빠른 길을 찾아요" },
      bigIdeas: ["reasoning"],
      lines: [
        { en: "I want to go to the park — but which way is fastest?", ko: "나는 공원에 가고 싶어 — 근데 어느 길이 제일 빠를까?" },
        { en: "A map app tries out lots of paths, one by one, and reasons about which is best.", ko: "지도 앱은 여러 길을 하나씩 시도해 보고, 어느 길이 가장 좋은지 추론해." },
        { en: "Then it picks the best one — just like figuring out the fastest way to school!", ko: "그리고 나서 가장 좋은 길을 골라 — 학교 가는 가장 빠른 길을 찾는 것과 똑같아!" },
        { en: "Let's go! Let's go by airplane, by train, or by ship!", ko: "출발해요! 비행기로, 기차로, 아니면 배로 가요!" },
      ],
      teacherNote:
        "\"Let's ___\" is a fixed suggestion chunk with no word-by-word Korean equivalent to build from — teach it whole, the same approach as \"Can I ___?\" in Month 3. Keep \"reasoning\" concrete here: a map app doesn't magically know the fastest way, it tries out many paths and compares them, the same step-by-step idea behind the sequence_builder activity below.",
    },
    {
      type: "activity",
      instructions: {
        en: "Kids take turns tapping the next step of getting ready to travel. Read each step aloud together as it's placed, then finish with \"Let's go!\"",
        ko: "학생들이 돌아가며 여행 준비의 다음 단계를 탭해요. 배치할 때마다 함께 소리 내어 읽고, 마지막에는 \"Let's go!\"로 마무리하세요.",
      },
      config: {
        engine: "sequence_builder",
        title: { en: "Let's Go!", ko: "출발해요!" },
        steps: [
          { text: { en: "Pack your suitcase", ko: "여행 가방 싸기" }, emoji: "🧳" },
          { text: { en: "Go to the airport", ko: "공항 가기" }, emoji: "🛫" },
          { text: { en: "Show your ticket", ko: "표 보여주기" }, emoji: "🎫", minTrack: "explorers" },
          { text: { en: "Get on the plane", ko: "비행기 타기" }, emoji: "✈️" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "\"Let's go by ___.\" — ask a student to finish the sentence with their favorite way to travel.",
        ko: "\"Let's go by ___.\" — 한 학생에게 가장 좋아하는 이동 수단으로 문장을 완성해보게 하세요.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned six travel words and saw how a map app reasons its way to the fastest route, one step at a time.",
        ko: "오늘은 여행 단어 여섯 개를 배우고, 지도 앱이 한 단계씩 추론하여 가장 빠른 길을 찾는 방법을 배웠어요.",
      },
      homework: {
        en: "Plan a pretend trip with a family member tonight — take turns saying \"Let's go by ___.\"",
        ko: "오늘 저녁 가족과 함께 가상 여행을 계획해보세요 — 번갈아가며 \"Let's go by ___.\"라고 말해보세요.",
      },
    },
  ],
};

export const m8_week2: Lesson = {
  ...meta("m8_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Hold up two items — one to pack (like a toothbrush) and one to leave behind (like a sofa cushion) — and ask \"Pack it, or leave it?\" before today's sorting game.",
        ko: "물건 두 가지를 들어 보이세요 — 챙길 것(예: 칫솔) 하나와 두고 갈 것(예: 소파 쿠션) 하나 — 그리고 오늘의 분류 게임을 시작하기 전에 \"Pack it, or leave it?\"이라고 물어보세요.",
      },
      prompt: { en: "Pack it, or leave it? 🧳", ko: "챙길까요, 두고 갈까요? 🧳" },
    },
    {
      type: "concept",
      title: { en: "Vora Decides What Goes In", ko: "보라가 무엇을 넣을지 정해요" },
      bigIdeas: ["perception"],
      lines: [
        { en: "A toothbrush, a sofa — I look at each thing and decide: does it belong in the suitcase?", ko: "칫솔, 소파 — 나는 각 물건을 보고 정해: 이게 여행 가방에 들어갈까?" },
        { en: "That's sorting, and it's just what you're about to do with today's things!", ko: "이게 분류야, 오늘 너희가 물건으로 할 일이 바로 이거야!" },
      ],
      teacherNote:
        "Keep this brief — Vora's reasoning was already introduced in Week 1's map-app talk. This is just a quick bridge into today's packing game below.",
    },
    {
      type: "activity",
      instructions: {
        en: "As a class, decide together whether each item goes in the suitcase or stays home before anyone taps.",
        ko: "탭하기 전에 반 전체가 함께 각 물건이 여행 가방에 들어갈지 집에 남을지 정해보세요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Pack It or Leave It?", ko: "챙길까요, 두고 갈까요?" },
        labelA: { en: "Pack It", ko: "챙기기" },
        labelB: { en: "Leave It", ko: "두고 가기" },
        emojiA: "🧳",
        emojiB: "🚫",
        items: [
          { word: { en: "t-shirt", ko: "티셔츠" }, emoji: "👕", bucket: "a" },
          { word: { en: "toothbrush", ko: "칫솔" }, emoji: "🪥", bucket: "a" },
          { word: { en: "passport", ko: "여권" }, emoji: "🛂", bucket: "a", minTrack: "explorers" },
          { word: { en: "socks", ko: "양말" }, emoji: "🧦", bucket: "a" },
          { word: { en: "sofa", ko: "소파" }, emoji: "🛋️", bucket: "b" },
          { word: { en: "TV", ko: "텔레비전" }, emoji: "📺", bucket: "b" },
          { word: { en: "bed", ko: "침대" }, emoji: "🛏️", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Ask a partner: name one thing you'd pack for a trip.",
        ko: "짝에게 물어보세요: 여행에 챙길 물건 한 가지를 말해보세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we sorted things into pack it and leave it.",
        ko: "오늘은 물건을 챙길 것과 두고 갈 것으로 분류했어요.",
      },
      homework: {
        en: "Pack a pretend suitcase with a family member tonight, naming each item in English.",
        ko: "오늘 저녁 가족과 함께 가상으로 여행 가방을 싸며, 각 물건의 이름을 영어로 말해보세요.",
      },
    },
  ],
};

export const m8_week3: Lesson = {
  ...meta("m8_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Flip an imaginary card in the air and ask \"Airplane or train?\" — let kids guess before today's matching game.",
        ko: "허공에 상상의 카드를 뒤집는 시늉을 하며 \"Airplane or train?\"이라고 물어보세요 — 오늘의 짝 맞추기 게임을 시작하기 전에 학생들이 맞혀보게 하세요.",
      },
      prompt: { en: "Airplane or train? ✈️🚂", ko: "비행기일까요, 기차일까요? ✈️🚂" },
    },
    {
      type: "concept",
      title: { en: "Vora Remembers", ko: "보라가 기억해요" },
      bigIdeas: ["learning"],
      lines: [
        { en: "The more times I see \"airplane,\" the faster I remember it — that's learning!", ko: "\"airplane\"을 더 많이 볼수록, 나는 더 빨리 기억해 — 이게 바로 학습이야!" },
        { en: "Let's practice remembering together with today's matching game!", ko: "오늘 짝 맞추기 게임으로 함께 기억하는 연습을 해보자!" },
      ],
      teacherNote:
        "Brief bridge only — the learning-through-repetition idea doesn't need re-teaching, just let today's game do the reinforcing.",
    },
    {
      type: "activity",
      instructions: {
        en: "Kids take turns flipping two cards at a time, saying the transportation word out loud if they find a match.",
        ko: "학생들이 돌아가며 카드를 두 장씩 뒤집고, 짝을 찾으면 탈것 단어를 소리 내어 말해보세요.",
      },
      config: {
        engine: "memory_match",
        title: { en: "Transportation Match", ko: "탈것 짝 맞추기" },
        pairs: [
          { word: { en: "airplane", ko: "비행기" }, emoji: "✈️" },
          { word: { en: "train", ko: "기차" }, emoji: "🚂" },
          { word: { en: "ship", ko: "배" }, emoji: "🚢" },
          { word: { en: "suitcase", ko: "여행 가방" }, emoji: "🧳" },
          { word: { en: "map", ko: "지도" }, emoji: "🗺️", minTrack: "explorers" },
          { word: { en: "ticket", ko: "표" }, emoji: "🎫" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Ask a partner: name one way to travel on land and one way to travel by air or sea.",
        ko: "짝에게 물어보세요: 육지로 가는 방법 하나와 하늘 또는 바다로 가는 방법 하나를 말해보세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we matched transportation words to pictures.",
        ko: "오늘은 탈것 단어를 그림과 짝지었어요.",
      },
      homework: {
        en: "Name three ways to travel in English before bed tonight.",
        ko: "오늘 밤 자기 전에 이동 수단 세 가지를 영어로 말해보세요.",
      },
    },
  ],
};

export const m8_week4: Lesson = {
  ...meta("m8_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask the class \"If we could go anywhere today, where would you go?\" and let a few kids answer in Korean before today's English sentence.",
        ko: "학생들에게 \"If we could go anywhere today, where would you go?\"라고 물어보세요. 오늘의 영어 문장을 시작하기 전에 몇 명이 한국어로 답해보게 하세요.",
      },
      prompt: { en: "Where should we go today? 🗺️", ko: "오늘 어디로 갈까요? 🗺️" },
    },
    {
      type: "concept",
      title: { en: "Where Should We Go?", ko: "우리 어디로 갈까요?" },
      bigIdeas: [],
      lines: [
        { en: "If we could go anywhere today, where would you pick?", ko: "오늘 어디든 갈 수 있다면, 어디를 고를래?" },
        { en: "However we get there, there's one sentence for it: \"Let's go by ___.\"", ko: "어떻게 가든, 그걸 말하는 문장이 있어: \"Let's go by ___.\"" },
        {
          en: "\"Let's\" is a short way of saying \"let us\" — but we say it as one piece, like a single word.",
          ko: "'Let's'는 'let us'를 짧게 줄인 말이지만, 우리는 그냥 한 단어처럼 통째로 말해.",
          minTrack: "explorers",
        },
        { en: "Let's build it together — and pick your favorite way to go!", ko: "함께 문장을 만들어보자 — 네가 가장 좋아하는 방법을 골라봐!" },
      ],
      teacherNote:
        "\"Let's\" is a fixed suggestion chunk, just like \"Can I ___?\" back in Month 3 — teach it as one piece, not word-by-word. After building the airplane sentence, invite a few kids to rebuild it with train, ship, or another word of their choosing — a real choice makes the sentence feel truer, not just a drill.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time. Once it's built, ask a few kids to swap in their own favorite way to travel instead of \"airplane.\"",
        ko: "한 번에 한 타일씩 문장을 만들어보세요. 완성되면 몇 명의 학생에게 \"airplane\" 대신 자신이 가장 좋아하는 이동 수단으로 바꿔보게 하세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "Let's go by airplane.", ko: "비행기를 타고 가요!" },
        words: [
          { text: "Let's", role: "other", ko: "(제안할 때 쓰는 말)" },
          { text: "go", role: "verb", ko: "가다" },
          { text: "by airplane", role: "other", ko: "비행기로" },
        ],
        translation: { en: "Let's go by airplane.", ko: "비행기를 타고 가요!" },
      },
    },
    {
      type: "check",
      prompt: {
        en: "Ask a few kids \"Let's go by ___?\" and let them answer with their own favorite way to travel.",
        ko: "몇 명의 학생에게 \"Let's go by ___?\"라고 물어보고, 가장 좋아하는 이동 수단으로 답해보게 하세요.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we built \"Let's go by airplane\" and practiced suggesting our own favorite way to travel.",
        ko: "오늘은 \"Let's go by airplane\" 문장을 만들고, 가장 좋아하는 이동 방법을 직접 제안해봤어요.",
      },
      homework: {
        en: "Ask a family member \"Let's go by ___?\" tonight and let them pick their favorite way to travel too.",
        ko: "오늘 저녁 가족에게 \"Let's go by ___?\"라고 물어보고, 가족도 가장 좋아하는 이동 방법을 골라보게 하세요.",
      },
    },
  ],
};
