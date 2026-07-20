import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m12_class: Lesson = {
  ...meta("m12_class"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Mime shivering and hugging yourself, then ask: \"What do you see when it snows?\" Take a few quick guesses before revealing today's winter theme.",
        ko: "몸을 떨며 스스로를 안는 시늉을 하고 물어보세요: \"눈이 오면 무엇이 보일까요?\" 오늘의 겨울 주제를 알려주기 전에 몇 가지 추측을 들어보세요.",
      },
      prompt: { en: "Brrr, it's cold outside! ❄️", ko: "으, 밖이 추워요! ❄️" },
    },
    {
      type: "vocab",
      title: { en: "Winter & Christmas", ko: "겨울과 크리스마스" },
      words: [
        { word: { en: "snow", ko: "눈" }, emoji: "❄️" },
        { word: { en: "snowman", ko: "눈사람" }, emoji: "⛄" },
        { word: { en: "gift", ko: "선물" }, emoji: "🎁" },
        { word: { en: "Christmas tree", ko: "크리스마스트리" }, emoji: "🎄" },
        { word: { en: "Santa", ko: "산타" }, emoji: "🎅", minTrack: "explorers" },
        { word: { en: "cookie", ko: "쿠키" }, emoji: "🍪" },
      ],
    },
    {
      type: "concept",
      title: { en: "I Want ___ for Christmas!", ko: "크리스마스에 ___를 받고 싶어요!" },
      bigIdeas: ["societal_impact"],
      lines: [
        { en: "Brrr! It's winter — time for snow, cookies, and a Christmas tree!", ko: "으! 겨울이야 — 눈, 쿠키, 그리고 크리스마스트리의 계절이지!" },
        {
          en: "I want a new game for Christmas. What do you want? \"I want ___ for Christmas.\"",
          ko: "나는 크리스마스에 새 게임을 받고 싶어. 너는 뭘 받고 싶어? \"I want ___ for Christmas.\"",
        },
        {
          en: "This year, you taught me so much! Like how a translator app helps people who speak different languages, how a wildlife camera spots an animal in the dark, and how a weather forecast guesses tomorrow's weather.",
          ko: "올해 너희는 나에게 정말 많은 걸 가르쳐줬어! 번역 앱이 서로 다른 언어를 쓰는 사람들을 어떻게 돕는지, 야생동물 카메라가 어둠 속에서 동물을 어떻게 찾아내는지, 일기예보가 내일 날씨를 어떻게 추측하는지 말이야.",
        },
        {
          en: "You even taught me that a map app finds the fastest way home by trying lots of paths!",
          ko: "지도 앱이 여러 길을 시도해서 가장 빠른 길을 찾는다는 것도 가르쳐줬어!",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "\"I want ___ for Christmas\" is a fixed chunk kids will hear everywhere this season — teach it whole rather than breaking down \"want.\" After the third line, pause for open discussion: ask a few kids to name ANY AI helper from this year, not just this month's. Translator apps (Month 2), wildlife cameras (Month 6), and weather forecasts (Month 7) are given as examples here, but recycling data (Month 4), map apps (Month 8), and face recognition (Month 5) are equally good answers. This is a light recall, not a quiz — any honest connection back to an earlier month counts.",
    },
    {
      type: "activity",
      instructions: {
        en: "As each step is placed, mime actually wrapping a pretend gift together as a class.",
        ko: "각 단계를 놓을 때마다 반 전체가 함께 실제로 선물을 포장하는 흉내를 내보세요.",
      },
      config: {
        engine: "sequence_builder",
        title: { en: "Wrap a Gift", ko: "선물을 포장해요" },
        steps: [
          { text: { en: "Put the toy in the box", ko: "장난감을 상자에 넣기" }, emoji: "🧸" },
          { text: { en: "Close the box", ko: "상자를 닫기" }, emoji: "📦" },
          { text: { en: "Add wrapping paper", ko: "포장지로 감싸기" }, emoji: "🎁" },
          { text: { en: "Add a bow", ko: "리본을 달기" }, emoji: "🎀" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Ask a few kids: \"Tell me one AI helper you learned about this year — which month did we learn it in?\" Any month, any helper counts!",
        ko: "몇 명에게 물어보세요: \"올해 배운 AI 도우미를 한 가지 말해볼까요? 몇 월에 배웠나요?\" 어떤 달, 어떤 도우미든 다 좋아요!",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned winter words, the sentence \"I want ___ for Christmas,\" and remembered AI helpers from all through the year.",
        ko: "오늘은 겨울 단어와 \"I want ___ for Christmas\" 문장을 배우고, 1년 내내 만났던 AI 도우미들을 떠올려봤어요.",
      },
      homework: {
        en: "Tell your family what you want for Christmas, and one AI helper you learned about this year.",
        ko: "가족에게 크리스마스에 받고 싶은 것과, 올해 배운 AI 도우미를 한 가지 이야기해보세요.",
      },
    },
  ],
};

export const m12_play: Lesson = {
  ...meta("m12_play"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Tell the class today is a special carnival — one last round of favorite games, mixing memories from the whole year, from stars in Month 1 all the way to snow this month.",
        ko: "오늘은 특별한 카니발이라고 말해주세요 — 1월의 별부터 이번 달의 눈까지, 1년 동안의 추억을 섞어서 좋아했던 게임들을 한 판씩 해볼 거예요.",
      },
      prompt: { en: "Welcome to the Year-End Robi Carnival! 🎉", ko: "연말 로비 카니발에 오신 것을 환영해요! 🎉" },
    },
    {
      type: "activity",
      instructions: {
        en: "Round 1: Sort review words from all through the year — is it something you'd see in the sky, or on the ground?",
        ko: "1라운드: 1년 동안 배운 단어를 복습해요 — 하늘에서 볼 수 있는 것일까요, 땅 위에서 볼 수 있는 것일까요?",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Review Sort", ko: "복습 분류" },
        labelA: { en: "In the Sky", ko: "하늘에" },
        labelB: { en: "On the Ground", ko: "땅 위에" },
        emojiA: "🌤️",
        emojiB: "🌍",
        items: [
          { word: { en: "rocket", ko: "로켓" }, emoji: "🚀", bucket: "a" },
          { word: { en: "airplane", ko: "비행기" }, emoji: "✈️", bucket: "a" },
          { word: { en: "sun", ko: "태양" }, emoji: "☀️", bucket: "a" },
          { word: { en: "cloud", ko: "구름" }, emoji: "☁️", bucket: "a", minTrack: "explorers" },
          { word: { en: "lion", ko: "사자" }, emoji: "🦁", bucket: "b" },
          { word: { en: "elephant", ko: "코끼리" }, emoji: "🐘", bucket: "b" },
          { word: { en: "train", ko: "기차" }, emoji: "🚂", bucket: "b" },
          { word: { en: "car", ko: "자동차" }, emoji: "🚗", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Round 2: Look at the pattern — emoji from all through the year — and guess what comes next!",
        ko: "2라운드: 패턴을 보세요 — 1년 동안 배운 이모지들이에요 — 다음에 올 것을 맞혀보세요!",
      },
      config: {
        engine: "pattern_predictor",
        title: { en: "A Year of Patterns", ko: "1년의 패턴" },
        teacherNote:
          "Last appearance of the pattern-prediction engine this year (also used in Months 1, 6, 7, and 10) — mixes emoji from across several months as a light, celebratory formative check rather than a hard drill. Read each sequence aloud, naming the picture in English, before revealing the choices.",
        rounds: [
          { sequence: ["⭐", "🎃", "⭐", "🎃"], answer: "⭐", options: ["⭐", "🎃", "❄️"] },
          { sequence: ["🦁", "🎁", "🦁", "🎁"], answer: "🦁", options: ["🦁", "🎁", "☀️"] },
          {
            sequence: ["☀️", "☀️", "🌙", "🌙", "☀️", "☀️"],
            answer: "🌙",
            options: ["☀️", "🌙", "🎃"],
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Whole-class check-in: which game or month from this whole year was your favorite?",
        ko: "학급 전체 점검: 1년 동안의 게임이나 달 중에서 어떤 게 가장 좋았나요?",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we celebrated the whole year with one more sorting game and one more pattern game — a fun look back at everything we've learned with Robi.",
        ko: "오늘은 분류 게임과 패턴 게임을 한 번 더 하며 한 해를 축하했어요 — 로비와 함께 배운 모든 것을 즐겁게 되돌아봤어요.",
      },
    },
  ],
};

export const m12_spotlight: Lesson = {
  ...meta("m12_spotlight"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Say \"van\" and \"ban\" slowly, back to back, a few times, without explaining yet.",
        ko: "\"van\"과 \"ban\"을 천천히, 반복해서 말해주세요. 아직 설명하지 마세요.",
      },
      prompt: { en: "van... ban... van... ban...", ko: "van... ban... van... ban..." },
    },
    {
      type: "concept",
      title: { en: "One Brand-New Sound", ko: "완전히 새로운 소리" },
      bigIdeas: ["perception"],
      lines: [
        {
          en: "This year, our ears worked hard: light and right, fan and pan, think and sink...",
          ko: "올해 우리 귀는 정말 열심히 일했어: light와 right, fan과 pan, think와 sink...",
        },
        { en: "Today's sound is brand new — we've never practiced it before: /v/!", ko: "오늘 배울 소리는 완전히 새로워 — 한 번도 연습해본 적 없는 소리야: /v/!" },
        {
          en: "Bite your bottom lip gently and buzz: vvvan. Now listen closely — van, or ban?",
          ko: "아랫입술을 살짝 물고 '음' 소리를 내봐: vvvan. 이제 잘 들어봐 — van일까, ban일까?",
        },
        {
          en: "Korean doesn't have this exact sound, so even grown-ups keep practicing it — you're doing exactly what real language learners do!",
          ko: "한국어에는 이 소리가 없어서 어른들도 계속 연습해 — 너희는 지금 진짜 언어 학습자가 하는 일을 하고 있는 거야!",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "A genuinely new contrast, not a review — unlike Month 3's l/r, Month 6's f/p, and Month 9's th/s, this is the year's only brand-new sound gap, saved for the final checkpoint. Korean has no /v/ phoneme and regularly approximates it with /b/ (ㅂ) — expect kids to hear these as identical at first, same as with /f/ in Month 6.",
    },
    {
      type: "activity",
      instructions: {
        en: "Play each word once, and have kids point to or say the picture they heard. Since /v/ is brand new, expect this to take longer than the year's earlier review checkpoints — that's normal.",
        ko: "각 단어를 한 번씩 재생하고, 학생들이 들은 단어의 그림을 가리키거나 말하게 하세요. /v/는 완전히 새로운 소리이니 앞선 복습 체크포인트보다 시간이 더 걸릴 수 있어요 — 자연스러운 일이에요.",
      },
      config: {
        engine: "minimal_pairs",
        title: { en: "Listen Closely: van or ban?", ko: "잘 들어보세요: van일까요, ban일까요?" },
        targetSound: "/v/ vs /b/",
        teacherNote:
          "This is the year's bonus fifth Korean L1 sound gap — not covered in the foundations unit. Korean has no /v/ phoneme; it's regularly approximated with /b/ (ㅂ), so expect real difficulty here even for kids who breezed through l/r, f/p, and th/s. Closes out the year's listening-discrimination thread.",
        pairs: [
          { wordA: { text: "van", emoji: "🚐", ko: "밴" }, wordB: { text: "ban", emoji: "🚫", ko: "금지" } },
          { wordA: { text: "vest", emoji: "🦺", ko: "조끼" }, wordB: { text: "best", emoji: "🥇", ko: "최고" } },
          {
            wordA: { text: "vet", emoji: "👩‍⚕️", ko: "수의사" },
            wordB: { text: "bet", emoji: "🎲", ko: "내기" },
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Say \"van\" and \"ban\" one more time — thumbs up if your ears can catch the difference. This is our last sound of the whole year!",
        ko: "\"van\"과 \"ban\"을 한 번 더 말해보세요 — 차이를 구별할 수 있으면 엄지를 올려주세요. 이번이 1년의 마지막 소리예요!",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we met one brand-new sound, /v/, and finished the year's whole listening journey — light and right, fan and pan, think and sink, and now van and ban.",
        ko: "오늘은 완전히 새로운 소리 /v/를 만나고, light와 right, fan과 pan, think와 sink, 그리고 이제 van과 ban까지 — 1년간의 듣기 여정을 모두 마쳤어요.",
      },
      homework: {
        en: "Practice saying \"van\" and \"ban\" for your family tonight — see if they can hear the difference too!",
        ko: "오늘 밤 가족 앞에서 \"van\"과 \"ban\"을 연습해보세요 — 가족들도 차이를 들을 수 있는지 확인해봐요!",
      },
    },
  ],
};
