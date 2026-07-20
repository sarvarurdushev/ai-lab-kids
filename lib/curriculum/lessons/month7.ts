import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m7_class: Lesson = {
  ...meta("m7_class"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Look out the classroom window (or show a photo of the sky) and ask \"What's the weather today?\" Let a few kids answer in Korean before introducing the English words.",
        ko: "교실 창밖을 보거나(또는 하늘 사진을 보여주며) \"What's the weather today?\"라고 물어보세요. 영어 단어를 소개하기 전에 학생들이 먼저 한국어로 답해보게 하세요.",
      },
      prompt: { en: "What's the weather today? 🌤️", ko: "오늘 날씨는 어때요? 🌤️" },
    },
    {
      type: "vocab",
      title: { en: "Weather Words", ko: "날씨 단어" },
      words: [
        { word: { en: "sunny", ko: "맑은" }, emoji: "☀️" },
        { word: { en: "rainy", ko: "비 오는" }, emoji: "🌧️" },
        { word: { en: "cloudy", ko: "흐린" }, emoji: "☁️" },
        { word: { en: "snowy", ko: "눈 오는" }, emoji: "❄️" },
        { word: { en: "windy", ko: "바람 부는" }, emoji: "💨", minTrack: "explorers" },
        { word: { en: "hot", ko: "더운" }, emoji: "🥵" },
        { word: { en: "cold", ko: "추운" }, emoji: "🥶" },
      ],
    },
    {
      type: "concept",
      title: { en: "Robi Guesses Tomorrow's Weather", ko: "로비가 내일 날씨를 예측해요" },
      bigIdeas: ["reasoning"],
      lines: [
        { en: "Yesterday was sunny, and today is sunny too — I wonder about tomorrow!", ko: "어제도 맑았고 오늘도 맑아요 — 내일은 어떨까 궁금해!" },
        { en: "A weather forecast isn't magic — it's a careful guess, made by looking at lots of past weather.", ko: "일기예보는 마법이 아니야 — 지난 날씨를 많이 살펴보고 만든 신중한 추측이야." },
        { en: "I look for a pattern, just like I do with pictures, and then I guess what comes next.", ko: "나는 그림을 볼 때처럼 패턴을 찾고, 그다음에 무엇이 올지 추측해." },
        { en: "Let's find the weather pattern together!", ko: "우리 함께 날씨 패턴을 찾아보자!" },
      ],
      teacherNote:
        "Sets up the pattern_predictor activity below — keep \"forecast\" concrete: it just means a careful guess based on a pattern, not magic. This is also the third time this year kids build an \"It's ___\" sentence (Month 1's space objects, Month 6's animals), so expect faster, more confident production and spend the time you save on the new weather vocabulary instead.",
    },
    {
      type: "activity",
      instructions: {
        en: "Read each weather icon aloud together (\"sunny, cloudy, sunny, cloudy...\") before guessing what comes next. Let the whole class predict out loud before anyone taps an answer.",
        ko: "다음을 추측하기 전에 날씨 이모지를 함께 소리 내어 읽어보세요(\"sunny, cloudy, sunny, cloudy...\"). 답을 누르기 전에 반 전체가 먼저 소리 내어 예측해 보게 하세요.",
      },
      config: {
        engine: "pattern_predictor",
        title: { en: "What Comes Next in the Weather?", ko: "날씨에서 다음은 무엇일까요?" },
        teacherNote:
          "This is the clearest real-world match yet for the pattern-prediction engine: real weather forecasters do exactly this at a much bigger scale — look for a pattern in a lot of past weather to guess what's coming next. Say the weather word out loud for each icon as it's read, not just the emoji.",
        rounds: [
          { sequence: ["☀️", "☁️", "☀️", "☁️"], answer: "☀️", options: ["☀️", "☁️", "🌧️"] },
          { sequence: ["🌧️", "💨", "🌧️", "💨"], answer: "🌧️", options: ["🌧️", "💨", "❄️"] },
          { sequence: ["🥵", "🥶", "🥵", "🥶"], answer: "🥵", options: ["🥵", "🥶", "☀️"] },
          {
            sequence: ["❄️", "❄️", "☀️", "❄️", "❄️"],
            answer: "☀️",
            options: ["❄️", "☀️", "🌧️"],
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "\"It's ___ today.\" — point to a weather picture (or look outside) and have a student complete the sentence.",
        ko: "\"It's ___ today.\" — 날씨 그림을 가리키거나(또는 밖을 보고) 한 학생이 문장을 완성해보게 하세요.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned seven weather words and saw how Robi finds a pattern in past weather, the same way a real forecast is made.",
        ko: "오늘은 날씨 단어 일곱 개를 배우고, 진짜 일기예보처럼 로비가 지난 날씨에서 패턴을 찾는 모습을 봤어요.",
      },
      homework: {
        en: "Ask a family member \"What's the weather?\" in Korean tonight, then answer them in English: \"It's ___ today.\"",
        ko: "오늘 저녁 가족에게 한국어로 \"오늘 날씨 어때요?\"라고 물어본 다음, 영어로 \"It's ___ today.\"라고 답해보세요.",
      },
    },
  ],
};

export const m7_play: Lesson = {
  ...meta("m7_play"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Mime shivering and hugging yourself for cold, then mime fanning yourself and wiping sweat for hot. Ask \"Hot or cold?\" and have kids mime along before starting the games.",
        ko: "추울 때는 몸을 떨며 자신을 안는 흉내를, 더울 때는 부채질하며 땀을 닦는 흉내를 내보세요. \"Hot or cold?\"라고 물어보고, 게임을 시작하기 전에 학생들도 함께 흉내 내게 하세요.",
      },
      prompt: { en: "Hot or cold? 🥵🥶", ko: "더울까요, 추울까요? 🥵🥶" },
    },
    {
      type: "activity",
      instructions: {
        en: "As a class, decide together whether each clothing item is for hot or cold weather before tapping — then have kids mime actually putting it on (shiver and hug yourself for coats and scarves, fan yourself for shorts and sandals). This doubles nicely as a movement break.",
        ko: "탭하기 전에 반 전체가 함께 각 옷이 더운 날씨용인지 추운 날씨용인지 정해보세요 — 그런 다음 학생들이 실제로 그 옷을 입는 흉내를 내보게 하세요(코트나 목도리는 몸을 떨며 안는 흉내, 반바지나 샌들은 부채질하는 흉내). 이렇게 하면 자연스러운 움직임 시간도 될 수 있어요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Hot Weather Clothes or Cold Weather Clothes?", ko: "더운 날씨 옷일까요, 추운 날씨 옷일까요?" },
        labelA: { en: "Hot Weather", ko: "더운 날씨" },
        labelB: { en: "Cold Weather", ko: "추운 날씨" },
        emojiA: "🥵",
        emojiB: "🥶",
        items: [
          { word: { en: "shorts", ko: "반바지" }, emoji: "🩳", bucket: "a" },
          { word: { en: "t-shirt", ko: "티셔츠" }, emoji: "👕", bucket: "a" },
          { word: { en: "sandals", ko: "샌들" }, emoji: "👡", bucket: "a" },
          { word: { en: "sunglasses", ko: "선글라스" }, emoji: "🕶️", bucket: "a", minTrack: "explorers" },
          { word: { en: "coat", ko: "코트" }, emoji: "🧥", bucket: "b" },
          { word: { en: "scarf", ko: "목도리" }, emoji: "🧣", bucket: "b" },
          { word: { en: "boots", ko: "부츠" }, emoji: "👢", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, then have the whole class act out being in sunny weather (shielding their eyes, big smile) as they say it together.",
        ko: "한 번에 한 타일씩 문장을 만들고, 다 함께 말하면서 맑은 날씨에 있는 모습을 몸으로 표현해보세요(눈을 가리고 활짝 웃기).",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "It's sunny today.", ko: "오늘은 맑아요." },
        words: [
          { text: "It's", role: "subject", ko: "날씨가" },
          { text: "sunny", role: "object", ko: "맑아요" },
          { text: "today", role: "other", ko: "오늘" },
        ],
        translation: { en: "It's sunny today.", ko: "오늘은 맑아요." },
      },
    },
    {
      type: "check",
      prompt: {
        en: "Ask a partner: \"Is a coat hot weather or cold weather?\"",
        ko: "짝에게 물어보세요: \"코트는 더운 날씨일까요, 추운 날씨일까요?\"",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we sorted clothes into hot weather and cold weather, and built the sentence \"It's sunny today.\"",
        ko: "오늘은 옷을 더운 날씨와 추운 날씨로 분류하고, \"It's sunny today.\" 문장을 만들었어요.",
      },
      homework: {
        en: "Pick out your own clothes for tomorrow's weather and say if they're \"hot weather\" or \"cold weather\" clothes, in English.",
        ko: "내일 날씨에 맞는 옷을 직접 골라보고, 그 옷이 \"hot weather\" 옷인지 \"cold weather\" 옷인지 영어로 말해보세요.",
      },
    },
  ],
};

export const m7_spotlight: Lesson = {
  ...meta("m7_spotlight"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Open the blinds or point to a window and ask \"What's it like outside right now?\" Let a few kids answer in Korean before starting today's English sentence.",
        ko: "블라인드를 열거나 창문을 가리키며 \"What's it like outside right now?\"라고 물어보세요. 오늘의 영어 문장을 시작하기 전에 학생들이 먼저 한국어로 답해보게 하세요.",
      },
      prompt: { en: "What's it like outside? 🪟", ko: "밖은 어떤가요? 🪟" },
    },
    {
      type: "concept",
      title: { en: "Check the Sky!", ko: "하늘을 확인해봐요!" },
      bigIdeas: [],
      lines: [
        { en: "Look outside the window with me — what do you see?", ko: "나랑 같이 창밖을 봐 — 뭐가 보여?" },
        { en: "However the sky looks, there's a sentence for it: \"It's ___ today.\"", ko: "하늘이 어떻게 보이든, 그걸 말하는 문장이 있어: \"It's ___ today.\"" },
        {
          en: "In Korean, weather doesn't need a subject — but English always keeps a little word: \"It.\"",
          ko: "한국어는 날씨를 말할 때 주어가 필요 없지만, 영어는 항상 작은 단어 'It'을 넣어.",
          minTrack: "explorers",
        },
        { en: "Let's build it together, then check if it's really true outside!", ko: "함께 문장을 만들고 나서, 밖이 정말 그런지 확인해보자!" },
      ],
      teacherNote:
        "This is the most immediately real-world-checkable sentence pattern in the curriculum — after building it, look out the window together and see if the class's sentence is actually true today. Also a good moment to flag that English's \"It's\" has no direct Korean equivalent: Korean weather sentences (\"오늘 맑아요\") don't need a placeholder subject at all, so kids may want to skip straight to the weather word. Point out that English always keeps \"It's,\" even though nothing specific is \"it.\"",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time. Once it's complete, look out the window together — is it actually rainy today? If not, rebuild the sentence with the real weather word instead!",
        ko: "한 번에 한 타일씩 문장을 만들어보세요. 완성되면 함께 창밖을 보세요 — 오늘 정말 비가 오나요? 아니라면 실제 날씨 단어로 문장을 다시 만들어보세요!",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "It's rainy today.", ko: "오늘은 비가 와요." },
        words: [
          { text: "It's", role: "subject", ko: "날씨가" },
          { text: "rainy", role: "object", ko: "비가 와요" },
          { text: "today", role: "other", ko: "오늘" },
        ],
        translation: { en: "It's rainy today.", ko: "오늘은 비가 와요." },
      },
    },
    {
      type: "check",
      prompt: {
        en: "Go around and have every child say \"It's ___ today\" using today's real weather.",
        ko: "한 명씩 돌아가며 오늘의 진짜 날씨로 \"It's ___ today\"라고 말해보게 하세요.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we built \"It's ___ today\" and checked it against the real sky outside our window.",
        ko: "오늘은 \"It's ___ today\" 문장을 만들고, 창밖의 진짜 하늘과 비교해봤어요.",
      },
      homework: {
        en: "Check the weather every day this week and greet a family member with \"It's ___ today!\" in English.",
        ko: "이번 주 매일 날씨를 확인하고, 가족에게 영어로 \"It's ___ today!\"라고 인사해보세요.",
      },
    },
  ],
};
