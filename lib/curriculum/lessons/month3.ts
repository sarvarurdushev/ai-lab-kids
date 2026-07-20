import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m3_class: Lesson = {
  ...meta("m3_class"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Pretend two kids are already playing with blocks. Walk up and ask, hopefully, \"Can I play?\" Have the class echo the question with you before you explain anything.",
        ko: "두 학생이 이미 블록 놀이를 하고 있다고 상상해보세요. 다가가서 기대하는 표정으로 \"Can I play?\"라고 물어보세요. 설명하기 전에 학급 전체가 함께 그 질문을 따라 말하게 해주세요.",
      },
      prompt: { en: "Can I play? 🧩", ko: "같이 놀아도 돼? 🧩" },
    },
    {
      type: "vocab",
      title: { en: "Friendship Words", ko: "우정 단어" },
      words: [
        { word: { en: "friend", ko: "친구" }, emoji: "🧑‍🤝‍🧑" },
        { word: { en: "share", ko: "나누다" }, emoji: "🤝" },
        { word: { en: "play", ko: "놀다" }, emoji: "🧩" },
        { word: { en: "kind", ko: "친절한" }, emoji: "❤️", minTrack: "explorers" },
        { word: { en: "sorry", ko: "미안해" }, emoji: "😔" },
        { word: { en: "happy", ko: "행복한" }, emoji: "😊" },
      ],
    },
    {
      type: "concept",
      title: { en: "Robi Takes Turns", ko: "로비는 차례를 지켜요" },
      bigIdeas: ["natural_interaction"],
      lines: [
        { en: "When I want to join a game, I ask, \"Can I play?\"", ko: "나도 같이 놀고 싶을 때는 이렇게 물어봐: \"Can I play?\"" },
        { en: "And when I have something good to share, I say, \"Let's share.\"", ko: "그리고 나눠줄 좋은 게 있을 때는 \"Let's share.\"라고 말해." },
        {
          en: "\"Can I ___?\" starts with a little helper word, just like \"Do you ___?\" did.",
          ko: "\"Can I ___?\"도 \"Do you ___?\"처럼 작은 조동사로 문장을 시작해.",
          minTrack: "explorers",
        },
        {
          en: "A good voice assistant listens quietly until you stop talking, then it answers — that's how good friends take turns too.",
          ko: "좋은 음성 비서는 네가 말을 멈출 때까지 조용히 듣고 나서 대답해 — 좋은 친구가 차례를 지키는 것과 똑같아.",
        },
      ],
      teacherNote:
        "\"Can I ___?\" is the second auxiliary-fronted question in the curriculum after \"Do you ___?\" in the foundations unit — name the shared pattern explicitly so it transfers. The AI thread: natural conversation depends on turn-taking, which is exactly what a voice assistant is designed to imitate (wait for silence, then respond).",
    },
    {
      type: "activity",
      instructions: {
        en: "Kids take turns tapping the next step of making a new friend. Read each step aloud together as it's placed, then act it out with a partner.",
        ko: "학생들이 돌아가며 새 친구를 사귀는 다음 단계를 탭해요. 배치할 때마다 함께 소리 내어 읽고, 짝과 함께 그 동작을 해보세요.",
      },
      config: {
        engine: "sequence_builder",
        title: { en: "Making a Friend", ko: "친구 사귀기" },
        steps: [
          { text: { en: "Say hello", ko: "인사하기" }, emoji: "👋" },
          { text: { en: "Ask their name", ko: "이름 물어보기" }, emoji: "🙋" },
          { text: { en: "Ask to play", ko: "같이 놀자고 물어보기" }, emoji: "🧩" },
          { text: { en: "Say thank you", ko: "고맙다고 말하기" }, emoji: "🙏" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Turn to a partner. One kid asks \"Can I play?\" and the other answers \"Yes! Let's share.\"",
        ko: "짝과 함께 해보세요. 한 명이 \"Can I play?\"라고 물으면 다른 한 명이 \"Yes! Let's share.\"라고 답해요.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned to ask \"Can I play?\" and offer \"Let's share\" — and we saw that a good voice assistant listens and takes turns, just like a good friend.",
        ko: "오늘은 \"Can I play?\"라고 묻고 \"Let's share\"라고 제안하는 법을 배웠어요 — 그리고 좋은 음성 비서도 좋은 친구처럼 듣고 차례를 지킨다는 것을 알았어요.",
      },
      homework: {
        en: "Ask someone at home \"Can I play?\" before you join their game tonight.",
        ko: "오늘 저녁 집에서 놀이에 끼기 전에 \"Can I play?\"라고 물어보세요.",
      },
    },
  ],
};

export const m3_play: Lesson = {
  ...meta("m3_play"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Do a quick echo drill: say \"Can I play?\" and \"Let's share!\" a few times, faster each round, and have the class call them back.",
        ko: "\"Can I play?\"와 \"Let's share!\"를 몇 번 반복해서 말하며 라운드마다 조금씩 빠르게 해보세요. 학급이 따라 말하게 해주세요.",
      },
      prompt: { en: "Can I play? Let's share! 🤝", ko: "Can I play? Let's share! 🤝" },
    },
    {
      type: "activity",
      instructions: {
        en: "Build the question one tile at a time, left to right. Then have a few kids ask the whole question out loud to a partner across the room.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 질문을 만들어요. 그런 다음 몇 명의 학생이 교실 반대편 짝에게 소리 내어 전체 질문을 해보게 하세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "Can I play?", ko: "같이 놀아도 될까요?" },
        words: [
          { text: "Can", role: "other", ko: "~해도 될까요" },
          { text: "I", role: "subject", ko: "제가" },
          { text: "play", role: "verb", ko: "놀다" },
        ],
        translation: { en: "Can I play?", ko: "같이 놀아도 될까요?" },
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Kids flip two cards at a time, trying to find the matching feeling word and face. Say the feeling word aloud together every time there's a match.",
        ko: "학생들이 카드 두 장을 뒤집어 짝이 맞는 감정 단어와 표정을 찾아요. 짝이 맞을 때마다 함께 감정 단어를 소리 내어 말해주세요.",
      },
      config: {
        engine: "memory_match",
        title: { en: "Feelings Match", ko: "감정 짝 맞추기" },
        pairs: [
          { word: { en: "happy", ko: "행복한" }, emoji: "😊" },
          { word: { en: "sad", ko: "슬픈" }, emoji: "😢" },
          { word: { en: "kind", ko: "다정한" }, emoji: "❤️" },
          { word: { en: "excited", ko: "신난" }, emoji: "🤩", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Ask one kid to say \"Can I play?\" out loud, and another to name one feeling word from the matching game.",
        ko: "한 학생에게 \"Can I play?\"를 소리 내어 말하게 하고, 다른 학생에게 짝 맞추기 게임 속 감정 단어를 한 가지 말하게 하세요.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we built the question \"Can I play?\" tile by tile, and matched feeling words like happy, sad, kind, and excited to faces.",
        ko: "오늘은 \"Can I play?\" 질문을 한 단어씩 만들어보고, happy, sad, kind, excited 같은 감정 단어를 표정과 짝지었어요.",
      },
    },
  ],
};

export const m3_spotlight: Lesson = {
  ...meta("m3_spotlight"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Say \"light\" and \"right\" slowly, back to back, a few times. Don't explain yet — just let the class notice the sounds are close but different, the same way they did back in Week 2.",
        ko: "\"light\"와 \"right\"를 천천히, 반복해서 말해주세요. 아직 설명하지 말고, 2주차 때처럼 학생들이 소리가 비슷하지만 다르다는 것을 스스로 느끼게 해주세요.",
      },
      prompt: { en: "light... right... light... right...", ko: "light... right... light... right..." },
    },
    {
      type: "concept",
      title: { en: "Listening Like a Good Friend", ko: "좋은 친구처럼 잘 듣기" },
      bigIdeas: ["perception"],
      lines: [
        { en: "Remember \"l\" and \"r\"? They're still two different sounds in English.", ko: "\"l\"과 \"r\" 기억하나요? 영어에서는 여전히 서로 다른 두 소리예요." },
        { en: "Good friends listen very carefully to each other — let's listen carefully too.", ko: "좋은 친구는 서로의 말을 아주 잘 들어요 — 우리도 잘 들어봐요." },
        {
          en: "This time, try to catch the difference before I say each word twice.",
          ko: "이번에는 제가 각 단어를 두 번 말하기 전에 차이를 알아채 봐요.",
        },
      ],
      teacherNote:
        "Quarter-checkpoint review of the foundations unit's Week 2 Day 3 /l/-/r/ contrast — the single highest-frequency Korean-learner sound gap, since Korean's single liquid phoneme /ㄹ/ covers both English sounds. Expect the same level of difficulty as Week 2; that's normal spaced repetition, not regression. Framing it as \"listening like a good friend\" keeps it tied to this month's theme.",
    },
    {
      type: "activity",
      instructions: {
        en: "Play each word once (tap the speaker icon), and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
        ko: "각 단어를 한 번씩 재생하고(스피커 아이콘 탭), 학생들이 들은 단어의 그림을 가리키거나 말하게 하세요. 어려워하는 쌍은 반복해 주세요.",
      },
      config: {
        engine: "minimal_pairs",
        title: { en: "Listen Closely: light or right?", ko: "잘 들어보세요: light일까요, right일까요?" },
        targetSound: "/l/ vs /r/",
        teacherNote:
          "Quarter-checkpoint review of the Week 2 Day 3 /l/-/r/ minimal pairs lesson — same pair set, intentionally, since spaced repetition is what makes this contrast stick for Korean L1 speakers.",
        pairs: [
          { wordA: { text: "light", emoji: "💡", ko: "빛" }, wordB: { text: "right", emoji: "👉", ko: "오른쪽" } },
          { wordA: { text: "lead", emoji: "🚶", ko: "이끌다" }, wordB: { text: "read", emoji: "📖", ko: "읽다" } },
          { wordA: { text: "load", emoji: "📦", ko: "짐" }, wordB: { text: "road", emoji: "🛣️", ko: "도로" } },
          { wordA: { text: "lock", emoji: "🔒", ko: "자물쇠" }, wordB: { text: "rock", emoji: "🪨", ko: "바위" } },
          { wordA: { text: "low", emoji: "⬇️", ko: "낮은" }, wordB: { text: "row", emoji: "🚣", ko: "노를 젓다" } },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Say \"light\" and \"right\" one more time — thumbs up if your ears caught the difference today.",
        ko: "\"light\"와 \"right\"를 한 번 더 말해보세요 — 오늘 차이를 알아챘다면 엄지를 올려주세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we listened closely for the difference between l and r again — a tricky pair for Korean speakers, and a little easier every time we practice, just like listening to a good friend gets easier the more you do it.",
        ko: "오늘은 l과 r 소리의 차이를 다시 한번 귀 기울여 들어봤어요 — 한국어 화자에게 어려운 발음이지만, 연습할수록 조금씩 쉬워져요. 좋은 친구의 말을 듣는 것도 자꾸 하다 보면 더 쉬워지는 것처럼요.",
      },
    },
  ],
};
