import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m4_week1: Lesson = {
  ...meta("m4_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Hold up a picture of a plastic bottle and a picture of an apple core. Ask \"Recycle, or trash?\" for each and take quick guesses before you explain anything.",
        ko: "플라스틱 병 그림과 사과 심 그림을 들어 보이며 각각 \"Recycle, or trash?\"라고 물어보세요. 설명하기 전에 학생들의 추측을 먼저 들어보세요.",
      },
      prompt: { en: "Recycle or trash? ♻️", ko: "재활용일까요, 쓰레기일까요? ♻️" },
    },
    {
      type: "vocab",
      title: { en: "Earth Words", ko: "지구 단어" },
      words: [
        { word: { en: "tree", ko: "나무" }, emoji: "🌳" },
        { word: { en: "recycle", ko: "재활용하다" }, emoji: "♻️" },
        { word: { en: "trash", ko: "쓰레기" }, emoji: "🗑️" },
        { word: { en: "earth", ko: "지구" }, emoji: "🌎" },
        { word: { en: "water", ko: "물" }, emoji: "💧" },
        { word: { en: "air", ko: "공기" }, emoji: "💨", minTrack: "explorers" },
        { word: { en: "plant", ko: "식물" }, emoji: "🌱" },
      ],
    },
    {
      type: "concept",
      title: { en: "Vora Cares for Earth", ko: "보라는 지구를 아껴요" },
      bigIdeas: ["learning", "societal_impact"],
      lines: [
        { en: "There are things we should do for the earth, like \"We should turn off the water.\"", ko: "지구를 위해 우리가 해야 할 일들이 있어, 예를 들면 \"We should turn off the water.\" 같은 거야." },
        { en: "And things we shouldn't do, like \"We shouldn't throw trash on the ground.\"", ko: "그리고 하지 말아야 할 일들도 있어, 예를 들면 \"We shouldn't throw trash on the ground.\" 같은 거야." },
        {
          en: "\"Should\" stays exactly the same word every time — it doesn't change for \"I\" or \"we\" like some Korean verb endings do.",
          ko: "\"Should\"는 언제나 똑같은 모양이야 — 한국어 동사 어미처럼 \"I\"나 \"we\"에 따라 바뀌지 않아.",
          minTrack: "explorers",
        },
        {
          en: "Scientists use AI to study huge amounts of weather data, so they can understand how our earth is changing.",
          ko: "과학자들은 AI를 이용해 아주 많은 날씨 데이터를 연구해서, 우리 지구가 어떻게 변하고 있는지 이해해.",
        },
      ],
      teacherNote:
        "Modal \"should\" has no verb-final Korean counterpart to lean on — the same challenge as \"can\" back in the foundations unit. Model it as a fixed chunk (\"We should ___\") before analyzing it. The AI thread here is Big Idea 3 (Learning): scientists don't guess about climate randomly, they learn patterns from enormous datasets, the same \"learn from lots of examples\" idea Vora has modeled with pictures all year.",
    },
    {
      type: "activity",
      instructions: {
        en: "As a class, decide together where each item goes before anyone taps — talk through the tricky ones, like the plastic bag, out loud.",
        ko: "탭하기 전에 반 전체가 함께 각 항목이 어디로 가야 할지 정해보세요 — 비닐봉지처럼 헷갈리는 항목은 함께 이야기하며 정해보세요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Recycle or Trash?", ko: "재활용일까요, 쓰레기일까요?" },
        labelA: { en: "Recycle", ko: "재활용" },
        labelB: { en: "Trash", ko: "쓰레기" },
        emojiA: "♻️",
        emojiB: "🗑️",
        items: [
          { word: { en: "bottle", ko: "병" }, emoji: "🧴", bucket: "a" },
          { word: { en: "can", ko: "캔" }, emoji: "🥫", bucket: "a" },
          { word: { en: "paper", ko: "종이" }, emoji: "📄", bucket: "a" },
          { word: { en: "banana peel", ko: "바나나 껍질" }, emoji: "🍌", bucket: "b" },
          { word: { en: "tissue", ko: "휴지" }, emoji: "🧻", bucket: "b" },
          { word: { en: "broken toy", ko: "고장 난 장난감" }, emoji: "🧸", bucket: "b" },
          { word: { en: "plastic bag", ko: "비닐봉지" }, emoji: "🛍️", bucket: "b", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Ask one table: name one thing we should recycle at home and one thing that's trash.",
        ko: "한 모둠에게 물어보세요: 집에서 재활용해야 할 것 한 가지와 쓰레기인 것 한 가지를 말해보세요.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned earth words and practiced \"We should / shouldn't ___,\" and sorted recycling from trash — just like scientists sort through huge amounts of data to understand our climate.",
        ko: "오늘은 지구 단어를 배우고 \"We should / shouldn't ___\"를 연습했어요. 그리고 재활용품과 쓰레기를 분류했어요 — 과학자들이 방대한 데이터를 분류해 기후를 이해하는 것처럼요.",
      },
      homework: {
        en: "Find one thing at home that should be recycled, and tell a family member in English.",
        ko: "집에서 재활용해야 할 물건을 하나 찾아 가족에게 영어로 말해보세요.",
      },
    },
  ],
};

export const m4_week2: Lesson = {
  ...meta("m4_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Hold up a picture of a messy, used bottle. Ask \"What do we do first?\" and take a few guesses before revealing today's recycling steps game.",
        ko: "지저분하게 쓰인 병 그림을 들어 보이며 \"제일 먼저 무엇을 할까요?\"라고 물어보세요. 오늘의 재활용 순서 게임을 알려주기 전에 몇 가지 추측을 들어보세요.",
      },
      prompt: { en: "What do we do first? ♻️", ko: "제일 먼저 무엇을 할까요? ♻️" },
    },
    {
      type: "concept",
      title: { en: "Vora Follows the Steps", ko: "보라는 순서를 따라가요" },
      bigIdeas: ["learning", "societal_impact"],
      lines: [
        { en: "Remember: scientists use AI to study huge amounts of data to help our earth.", ko: "기억하지? 과학자들은 AI를 이용해 방대한 데이터를 연구해서 지구를 도와." },
        { en: "Today, let's follow the exact steps of recycling, one after another.", ko: "오늘은 재활용의 정확한 순서를 하나씩 따라가 볼 거야." },
      ],
      teacherNote:
        "Short recap only — Week 1 fully introduced the AI-learns-from-data thread through climate science; here it's briefly reconnected to today's ordered-steps game before playing.",
    },
    {
      type: "activity",
      instructions: {
        en: "Kids take turns tapping the next step of recycling a bottle. Read each step aloud together as it's placed.",
        ko: "학생들이 돌아가며 병을 재활용하는 다음 단계를 탭해요. 배치할 때마다 함께 소리 내어 읽어주세요.",
      },
      config: {
        engine: "sequence_builder",
        title: { en: "Recycling Steps", ko: "재활용 순서" },
        steps: [
          { text: { en: "Rinse it", ko: "헹구기" }, emoji: "🚿" },
          { text: { en: "Sort it", ko: "분류하기" }, emoji: "♻️" },
          { text: { en: "Put it in the bin", ko: "통에 넣기" }, emoji: "🗑️" },
          { text: { en: "The truck takes it away", ko: "트럭이 가져가기" }, emoji: "🚛", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Ask a student to say the recycling steps in order: rinse it, sort it, put it in the bin.",
        ko: "한 학생에게 재활용 순서를 차례대로 말해보게 하세요: 헹구기, 분류하기, 통에 넣기.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we put the steps of recycling in order — rinse it, sort it, and put it in the bin.",
        ko: "오늘은 재활용 순서를 배열해봤어요 — 헹구고, 분류하고, 통에 넣어요.",
      },
    },
  ],
};

export const m4_week3: Lesson = {
  ...meta("m4_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Show three emoji in a row — 🌱🌿🌱 — and ask \"What comes next?\" before revealing today's pattern game.",
        ko: "이모지 세 개를 순서대로 보여주세요 — 🌱🌿🌱 — 그리고 오늘의 패턴 게임을 알려주기 전에 \"다음엔 무엇이 올까요?\"라고 물어보세요.",
      },
      prompt: { en: "What comes next? 🌱🌿🌱...", ko: "다음엔 무엇이 올까요? 🌱🌿🌱..." },
    },
    {
      type: "concept",
      title: { en: "Vora Finds the Pattern", ko: "보라는 패턴을 찾아요" },
      bigIdeas: ["learning", "societal_impact"],
      lines: [
        { en: "Scientists look for patterns in weather data to understand our changing earth.", ko: "과학자들은 날씨 데이터에서 패턴을 찾아 우리 지구가 어떻게 변하는지 이해해." },
        { en: "Let's practice finding a pattern too, and guess what comes next.", ko: "우리도 패턴을 찾는 연습을 하며 다음에 올 것을 추측해봐요." },
      ],
      teacherNote:
        "Short recap only — Week 1 introduced the AI-learns-from-data thread through climate science; here it's briefly reconnected to pattern-finding before the prediction game.",
    },
    {
      type: "activity",
      instructions: {
        en: "Show the sequence one item at a time and ask kids to guess what comes next before revealing the answer. Encourage them to explain the pattern in their own words.",
        ko: "순서를 한 번에 하나씩 보여주고, 정답을 알려주기 전에 학생들이 다음에 올 것을 추측하게 하세요. 자기 말로 패턴을 설명하도록 격려해주세요.",
      },
      config: {
        engine: "pattern_predictor",
        title: { en: "What Comes Next?", ko: "다음은 무엇일까요?" },
        teacherNote:
          "Concretely demonstrates the \"learning\" big idea: AI (and people) predict what comes next by finding a pattern in examples — the same idea behind how scientists use patterns in climate data.",
        rounds: [
          { sequence: ["🌱", "🌿", "🌱", "🌿"], answer: "🌱", options: ["🌱", "🌿", "🌳"] },
          { sequence: ["♻️", "🗑️", "♻️", "🗑️"], answer: "♻️", options: ["♻️", "🗑️", "🌎"] },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Show one more pattern and ask a student to say what comes next, and explain why.",
        ko: "패턴을 하나 더 보여주고, 한 학생에게 다음에 올 것과 그 이유를 말해보게 하세요.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we looked at patterns like 🌱🌿🌱🌿 and guessed what comes next.",
        ko: "오늘은 🌱🌿🌱🌿 같은 패턴을 보고 다음에 올 것을 추측해봤어요.",
      },
    },
  ],
};

export const m4_week4: Lesson = {
  ...meta("m4_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"What is one thing we should do for the earth?\" Take a few quick answers before revealing today's sentence.",
        ko: "\"지구를 위해 우리가 해야 할 일 한 가지는 무엇일까요?\"라고 물어보고, 오늘의 문장을 알려주기 전에 몇 가지 답을 들어보세요.",
      },
      prompt: { en: "We should ___.", ko: "We should ___." },
    },
    {
      type: "concept",
      title: { en: "All of Us Together", ko: "우리 모두 함께" },
      bigIdeas: [],
      lines: [
        { en: "All month we talked about things we should do for the earth.", ko: "이번 달 내내 지구를 위해 해야 할 일들을 이야기했어." },
        { en: "Today, let's say it together, out loud: We should recycle.", ko: "오늘은 다 함께 소리 내어 말해보자: We should recycle." },
        {
          en: "Notice this sentence uses \"We,\" not \"I\" — it's about all of us together, not just one person.",
          ko: "이 문장은 \"I\"가 아니라 \"We\"를 써 — 한 사람이 아니라 우리 모두에 대한 이야기라서 그래.",
        },
      ],
      teacherNote:
        "First group-subject (\"we\") sentence in the curriculum — every earlier sentence pattern (\"I see a...\", \"I'm from...\", \"This is my...\") was first-person singular. Call out the shift explicitly: \"we\" means the whole class saying it together, which is a small but genuine grammatical step worth naming.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, left to right. Then have the whole class say it together like a chant, a few times.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 문장을 만들어요. 그런 다음 학급 전체가 챈트처럼 여러 번 함께 말해보세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "We should recycle.", ko: "우리는 재활용해야 해요." },
        words: [
          { text: "We", role: "subject", ko: "우리는" },
          { text: "should", role: "other", ko: "~해야 한다" },
          { text: "recycle", role: "verb", ko: "재활용하다" },
        ],
        translation: { en: "We should recycle.", ko: "우리는 재활용해야 해요." },
      },
    },
    {
      type: "check",
      prompt: {
        en: "Everyone says \"We should recycle!\" together — thumbs up if you said the whole sentence.",
        ko: "다 함께 \"We should recycle!\"라고 말해봐요 — 전체 문장을 말했다면 엄지를 올려주세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we built our first \"we\" sentence together — \"We should recycle\" — closing out a month of caring for the earth.",
        ko: "오늘은 우리의 첫 \"we\" 문장, \"We should recycle\"을 함께 만들었어요 — 지구를 돌보는 한 달을 마무리하는 문장이에요.",
      },
      homework: {
        en: "Say \"We should recycle\" with your family tonight, and pick one thing to recycle together.",
        ko: "오늘 저녁 가족과 함께 \"We should recycle\"이라고 말해보고, 함께 재활용할 물건을 하나 골라보세요.",
      },
    },
  ],
};
