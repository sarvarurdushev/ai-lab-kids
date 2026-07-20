import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m6_week1: Lesson = {
  ...meta("m6_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"Is a lion big or small? Is a monkey big or small?\" Let kids answer with gut instinct before you teach the sentence pattern.",
        ko: "\"사자는 클까요, 작을까요? 원숭이는 클까요, 작을까요?\"라고 물어보세요. 문장 패턴을 가르치기 전에 학생들이 직감대로 답하게 해 주세요.",
      },
      prompt: { en: "Big animal, or small animal? 🦁", ko: "큰 동물일까요, 작은 동물일까요? 🦁" },
    },
    {
      type: "vocab",
      title: { en: "Wild Animals", ko: "야생 동물" },
      words: [
        { word: { en: "lion", ko: "사자" }, emoji: "🦁" },
        { word: { en: "elephant", ko: "코끼리" }, emoji: "🐘" },
        { word: { en: "monkey", ko: "원숭이" }, emoji: "🐵" },
        { word: { en: "zebra", ko: "얼룩말" }, emoji: "🦓" },
        { word: { en: "penguin", ko: "펭귄" }, emoji: "🐧" },
        { word: { en: "giraffe", ko: "기린" }, emoji: "🦒", minTrack: "explorers" },
        { word: { en: "tiger", ko: "호랑이" }, emoji: "🐯" },
      ],
    },
    {
      type: "concept",
      title: { en: "Big Animal, Small Animal", ko: "큰 동물, 작은 동물" },
      bigIdeas: ["perception"],
      lines: [
        { en: "Look — it's a big elephant! And over there, it's a small monkey!", ko: "봐 — 커다란 코끼리야! 그리고 저기, 작은 원숭이야!" },
        {
          en: "\"Big\" and \"small\" go right before the animal name, just like in Korean!",
          ko: "\"big\"과 \"small\"은 동물 이름 바로 앞에 와요 — 한국어랑 똑같아요!",
        },
        {
          en: "Deep in a forest, a hidden camera watches all day and night. When an animal walks by, AI helps it guess: lion, or mouse?",
          ko: "숲 속 깊은 곳에서는 숨겨진 카메라가 밤낮으로 지켜봐. 동물이 지나가면, AI가 사자인지 쥐인지 추측하도록 도와줘.",
        },
        {
          en: "Scientists use those camera photos to learn which animals live in a forest — without ever walking in themselves!",
          ko: "과학자들은 그 카메라 사진으로 숲에 어떤 동물이 사는지 알아내 — 직접 숲에 들어가지 않고도!",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Adjective-before-noun order (\"a big lion\") matches Korean word order exactly — call this out as an easy win, not everything in English is a hard shift. The wildlife-camera example makes \"perception\" concrete: recognizing an animal from a blurry night photo is a genuinely hard version of the same sorting game Vora's been playing all year.",
    },
    {
      type: "activity",
      instructions: {
        en: "Sort each animal: is it big, or small?",
        ko: "각 동물을 분류해보세요: 클까요, 작을까요?",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Big Animal or Small Animal?", ko: "큰 동물일까요, 작은 동물일까요?" },
        labelA: { en: "Big", ko: "큰 동물" },
        labelB: { en: "Small", ko: "작은 동물" },
        emojiA: "🐘",
        emojiB: "🐵",
        items: [
          { word: { en: "elephant", ko: "코끼리" }, emoji: "🐘", bucket: "a" },
          { word: { en: "lion", ko: "사자" }, emoji: "🦁", bucket: "a" },
          { word: { en: "giraffe", ko: "기린" }, emoji: "🦒", bucket: "a", minTrack: "explorers" },
          { word: { en: "tiger", ko: "호랑이" }, emoji: "🐯", bucket: "a" },
          { word: { en: "monkey", ko: "원숭이" }, emoji: "🐵", bucket: "b" },
          { word: { en: "mouse", ko: "쥐" }, emoji: "🐭", bucket: "b" },
          { word: { en: "rabbit", ko: "토끼" }, emoji: "🐰", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      type: "check",
      prompt: {
        en: "Say \"It's a big ___\" or \"It's a small ___\" about an animal picture or toy.",
        ko: "동물 그림이나 장난감을 보고 \"It's a big ___\" 또는 \"It's a small ___\"라고 말해보세요.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned wild animal words and \"It's a big / small ___\" — and how wildlife cameras use AI to recognize which animal walked by — and practiced spotting real AI in everyday life.",
        ko: "오늘은 야생 동물 단어와 \"It's a big / small ___\" 문장을 배웠어요 — 그리고 야생동물 카메라가 AI로 지나간 동물을 알아내는 방법도 배웠어요. 그리고 일상 속 진짜 AI를 알아보는 연습도 했어요.",
      },
      homework: {
        en: "Find a picture of an animal at home and say \"It's a big ___\" or \"It's a small ___.\"",
        ko: "집에서 동물 그림을 찾아 \"It's a big ___\" 또는 \"It's a small ___\"라고 말해보세요.",
      },
    },
  ],
};

export const m6_week2: Lesson = {
  ...meta("m6_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Chant \"Lion, elephant, lion, elephant...\" together and ask \"What comes next?\" before today's pattern game.",
        ko: "\"Lion, elephant, lion, elephant...\"를 함께 챈트하고, 오늘의 패턴 게임 전에 \"What comes next?\"라고 물어보세요.",
      },
      prompt: { en: "Lion, elephant, lion, elephant... what comes next? 🦁🐘", ko: "Lion, elephant, lion, elephant... 다음은 무엇일까요? 🦁🐘" },
    },
    {
      type: "concept",
      title: { en: "Patterns Help Me See", ko: "패턴이 나를 도와줘" },
      bigIdeas: ["perception"],
      lines: [
        { en: "Remember the wildlife camera? It looks for patterns to guess which animal walked by.", ko: "야생동물 카메라 기억나? 패턴을 찾아서 어떤 동물이 지나갔는지 추측해." },
        { en: "Today, you get to find the pattern too!", ko: "오늘은 너희도 패턴을 찾아볼 차례야!" },
      ],
      teacherNote:
        "Quick callback to Week 1's wildlife-camera example — no new teaching, just a bridge into today's pattern-prediction game.",
    },
    {
      type: "activity",
      instructions: {
        en: "Look at the animal pattern and pick the picture that comes next. Then play a second game to reinforce it.",
        ko: "동물 패턴을 보고 다음에 올 그림을 골라보세요. 그런 다음 두 번째 게임으로 복습해 보세요.",
      },
      config: {
        engine: "pattern_predictor",
        title: { en: "What Comes Next?", ko: "다음은 무엇일까요?" },
        teacherNote:
          "First appearance of the pattern-prediction game this year — it reuses the \"same/different\" vocabulary from the foundations unit's Week 3 colors-and-shapes lesson. Read each sequence aloud with the animal names, not just the emoji, so kids connect the visual pattern to the English words.",
        rounds: [
          { sequence: ["🦁", "🐘", "🦁", "🐘"], answer: "🦁", options: ["🦁", "🐘", "🐧"] },
          { sequence: ["🐧", "🦒", "🐧", "🦒"], answer: "🐧", options: ["🐧", "🦒", "🐯"] },
          {
            sequence: ["🐯", "🐯", "🦓", "🦓", "🐯", "🐯"],
            answer: "🦓",
            options: ["🐯", "🦓", "🐧"],
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Flip two cards at a time to find a matching animal word and picture. If they match, they stay face up!",
        ko: "카드 두 장을 뒤집어 동물 단어와 그림의 짝이 맞는지 찾아보세요. 짝이 맞으면 그대로 뒤집힌 채로 남아요!",
      },
      config: {
        engine: "memory_match",
        title: { en: "Animal Words", ko: "동물 단어" },
        pairs: [
          { word: { en: "lion", ko: "사자" }, emoji: "🦁" },
          { word: { en: "elephant", ko: "코끼리" }, emoji: "🐘" },
          { word: { en: "monkey", ko: "원숭이" }, emoji: "🐵" },
          { word: { en: "zebra", ko: "얼룩말" }, emoji: "🦓" },
          { word: { en: "penguin", ko: "펭귄" }, emoji: "🐧" },
          { word: { en: "giraffe", ko: "기린" }, emoji: "🦒", minTrack: "explorers" },
          { word: { en: "tiger", ko: "호랑이" }, emoji: "🐯" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      type: "check",
      prompt: {
        en: "Ask a partner: \"What comes next?\" about the pattern lion, elephant, lion, elephant.",
        ko: "짝에게 물어보세요: \"lion, elephant, lion, elephant\" 패턴에서 \"What comes next?\"",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we played three activities — guessing what comes next in an animal pattern, matching animal words to pictures, and helping Vora follow clear step-by-step instructions.",
        ko: "오늘은 세 가지 활동을 했어요 — 동물 패턴에서 다음에 올 것을 추측하고, 동물 단어를 그림과 짝지었어요. 그리고 보라가 분명한 단계별 지시를 따르도록 도왔어요.",
      },
    },
  ],
};

export const m6_week3: Lesson = {
  ...meta("m6_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Flash an animal emoji quickly and have kids call out the English word before today's matching game starts.",
        ko: "동물 이모지를 빠르게 보여주고, 오늘의 짝 맞추기 게임을 시작하기 전에 학생들이 영어 단어를 외치게 하세요.",
      },
      prompt: { en: "Name that animal, fast! 🐯", ko: "동물 이름을 빨리 말해보세요! 🐯" },
    },
    {
      type: "concept",
      title: { en: "Remembering Like Vora", ko: "보라처럼 기억하기" },
      bigIdeas: ["learning"],
      lines: [
        { en: "The more pictures I see, the better I get at remembering them — that's learning!", ko: "그림을 더 많이 볼수록 나는 더 잘 기억하게 돼 — 그게 바로 학습(learning)이야!" },
        { en: "Let's practice remembering animal words together.", ko: "함께 동물 단어를 기억하는 연습을 해보자!" },
      ],
      teacherNote:
        "Short bridge connecting today's memory game to the idea that repetition builds recognition — no new AI content, just framing.",
    },
    {
      type: "activity",
      instructions: {
        en: "Flip two cards at a time to find a matching animal word and picture. If they match, they stay face up! Then play a second game to reinforce it.",
        ko: "카드 두 장을 뒤집어 동물 단어와 그림의 짝이 맞는지 찾아보세요. 짝이 맞으면 그대로 뒤집힌 채로 남아요! 그런 다음 두 번째 게임으로 복습해 보세요.",
      },
      config: {
        engine: "memory_match",
        title: { en: "Animal Words", ko: "동물 단어" },
        pairs: [
          { word: { en: "lion", ko: "사자" }, emoji: "🦁" },
          { word: { en: "elephant", ko: "코끼리" }, emoji: "🐘" },
          { word: { en: "monkey", ko: "원숭이" }, emoji: "🐵" },
          { word: { en: "zebra", ko: "얼룩말" }, emoji: "🦓" },
          { word: { en: "penguin", ko: "펭귄" }, emoji: "🐧" },
          { word: { en: "giraffe", ko: "기린" }, emoji: "🦒", minTrack: "explorers" },
          { word: { en: "tiger", ko: "호랑이" }, emoji: "🐯" },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Look at the animal pattern and pick the picture that comes next.",
        ko: "동물 패턴을 보고 다음에 올 그림을 골라보세요.",
      },
      config: {
        engine: "pattern_predictor",
        title: { en: "What Comes Next?", ko: "다음은 무엇일까요?" },
        teacherNote:
          "First appearance of the pattern-prediction game this year — it reuses the \"same/different\" vocabulary from the foundations unit's Week 3 colors-and-shapes lesson. Read each sequence aloud with the animal names, not just the emoji, so kids connect the visual pattern to the English words.",
        rounds: [
          { sequence: ["🦁", "🐘", "🦁", "🐘"], answer: "🦁", options: ["🦁", "🐘", "🐧"] },
          { sequence: ["🐧", "🦒", "🐧", "🦒"], answer: "🐧", options: ["🐧", "🦒", "🐯"] },
          {
            sequence: ["🐯", "🐯", "🦓", "🦓", "🐯", "🐯"],
            answer: "🦓",
            options: ["🐯", "🦓", "🐧"],
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[0],
    },
    {
      type: "check",
      prompt: {
        en: "Ask a partner: \"What's this animal?\" and point to one of the matched cards.",
        ko: "짝에게 물어보세요: \"이 동물은 뭐예요?\" 그리고 짝 맞춘 카드 중 하나를 가리켜 보세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we played three activities — matching animal words to pictures, guessing what comes next in an animal pattern, and spotting real AI in everyday life.",
        ko: "오늘은 세 가지 활동을 했어요 — 동물 단어를 그림과 짝짓고, 동물 패턴에서 다음에 올 것을 추측했어요. 그리고 일상 속 진짜 AI를 알아보는 연습도 했어요.",
      },
    },
  ],
};

export const m6_week4: Lesson = {
  ...meta("m6_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Say \"fan\" and \"pan\" slowly, back to back, a few times, without explaining yet.",
        ko: "\"fan\"과 \"pan\"을 천천히, 반복해서 말해주세요. 아직 설명하지 마세요.",
      },
      prompt: { en: "fan... pan... fan... pan...", ko: "fan... pan... fan... pan..." },
    },
    {
      type: "concept",
      title: { en: "Remember This Sound?", ko: "이 소리 기억나나요?" },
      bigIdeas: ["perception"],
      lines: [
        { en: "Remember the \"f\" sound? Bite your bottom lip gently and blow air.", ko: "\"f\" 소리 기억나나요? 아랫입술을 살짝 물고 바람을 불어보세요." },
        {
          en: "We practiced this sound back in Week 3 of Vora's Classroom — let's see how much you remember!",
          ko: "보라의 교실 3주차에서 이 소리를 연습했었죠 — 얼마나 기억하는지 확인해봐요!",
        },
        { en: "Let's listen very carefully and pick the word we hear: fan, or pan?", ko: "아주 잘 듣고 들리는 단어를 골라봐요: fan일까요, pan일까요?" },
        {
          en: "Even grown-ups keep practicing sounds that aren't in their first language — you're doing exactly what language learners do!",
          ko: "어른들도 자신의 모국어에 없는 소리를 계속 연습해요 — 너희는 지금 언어를 배우는 사람이 하는 일을 정확히 하고 있는 거예요!",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Second quarter-checkpoint review — Korean has no /f/ phoneme, so this contrast is genuinely new rather than just underused, and benefits from repeated exposure across the year. If your class completed the foundations unit, this is a direct callback to Week 3 Day 3; if not, simply treat it as a first introduction.",
    },
    {
      type: "activity",
      instructions: {
        en: "Play each word once, and have kids point to or say the picture they heard. Since this is review, see how quickly the class remembers before repeating any pair they find hard.",
        ko: "각 단어를 한 번씩 재생하고, 학생들이 들은 단어의 그림을 가리키거나 말하게 하세요. 복습이니 반이 얼마나 빨리 기억해내는지 지켜보고, 어려워하는 쌍만 반복해 주세요.",
      },
      config: {
        engine: "minimal_pairs",
        title: { en: "Listen Closely: f or p?", ko: "잘 들어보세요: f일까요, p일까요?" },
        targetSound: "/f/ vs /p/",
        teacherNote:
          "This is a quarter-checkpoint review of the foundations unit's Week 3 /f/ vs /p/ contrast — Korean has no /f/ phoneme, so it's commonly approximated with /p/ (ㅍ) or /h/ (ㅎ) in loanwords. Expect it to still need practice even after Week 3; that's normal for a sound with no Korean equivalent.",
        pairs: [
          { wordA: { text: "fan", emoji: "🪭", ko: "부채" }, wordB: { text: "pan", emoji: "🍳", ko: "프라이팬" } },
          { wordA: { text: "fine", emoji: "👍", ko: "좋은" }, wordB: { text: "pine", emoji: "🌲", ko: "소나무" } },
          { wordA: { text: "fork", emoji: "🍴", ko: "포크" }, wordB: { text: "pork", emoji: "🥓", ko: "돼지고기" } },
          {
            wordA: { text: "full", emoji: "🈵", ko: "가득 찬" },
            wordB: { text: "pull", emoji: "🚪", ko: "당기다" },
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[0],
    },
    {
      type: "check",
      prompt: {
        en: "Say \"fan\" and \"pan\" one more time — thumbs up if you can hear the difference now.",
        ko: "\"fan\"과 \"pan\"을 한 번 더 말해보세요 — 이제 차이가 들리면 엄지를 올려주세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we reviewed the f sound from Week 3 — a great checkpoint before we meet two more tricky sounds later this year — and helped Vora follow clear step-by-step instructions.",
        ko: "오늘은 3주차에서 배운 f 소리를 복습했어요 — 올해 남은 두 가지 어려운 소리를 만나기 전 좋은 점검이었어요. 그리고 보라가 분명한 단계별 지시를 따르도록 도왔어요.",
      },
    },
  ],
};
