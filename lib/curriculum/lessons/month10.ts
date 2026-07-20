import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m10_week1: Lesson = {
  ...meta("m10_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Knock on the door (or your desk) three times and call out \"Trick or treat!\" in a fun spooky voice. Have kids echo it back before you start.",
        ko: "문(또는 책상)을 세 번 두드리고 장난스러운 오싹한 목소리로 \"Trick or treat!\"이라고 외쳐보세요. 시작하기 전에 학생들도 따라 외치게 하세요.",
      },
      prompt: { en: "Trick or treat! 🎃", ko: "트릭 오어 트릿! 🎃" },
    },
    {
      type: "vocab",
      title: { en: "Halloween Words", ko: "할로윈 단어" },
      words: [
        { word: { en: "pumpkin", ko: "호박" }, emoji: "🎃" },
        { word: { en: "ghost", ko: "유령" }, emoji: "👻" },
        { word: { en: "witch", ko: "마녀" }, emoji: "🧙", minTrack: "explorers" },
        { word: { en: "bat", ko: "박쥐" }, emoji: "🦇" },
        { word: { en: "candy", ko: "사탕" }, emoji: "🍬" },
        { word: { en: "costume", ko: "코스튬" }, emoji: "🎭" },
      ],
    },
    {
      type: "concept",
      title: { en: "Spooky or Not Spooky?", ko: "무서운 걸까요, 아닐까요?" },
      bigIdeas: ["learning"],
      lines: [
        { en: "Halloween is full of spooky things — ghosts, witches, bats!", ko: "할로윈에는 유령, 마녀, 박쥐처럼 무서운 것들이 가득해!" },
        {
          en: "Remember how I learned to sort smart helpers from regular things, way back at the start? Today we're sorting again — spooky, or not spooky.",
          ko: "처음에 내가 똑똑한 도우미와 보통 물건을 분류하는 법을 배웠던 거 기억나? 오늘도 분류를 해볼 거야 — 무서운 것, 아니면 무섭지 않은 것.",
        },
        { en: "I look at lots of examples to learn what counts as spooky. That's how I learn — from examples, every time.", ko: "나는 많은 예시를 보면서 무엇이 무서운 건지 배워. 그게 내가 배우는 방법이야 — 항상 예시로부터 배우지." },
      ],
      teacherNote:
        "This is a lighter, seasonal repeat of the classification loop from the very first foundations lesson (w1d3, 'Smart Helper or Regular Thing?') — call that back explicitly if the class remembers it. The AI big idea is the same all year: sort examples into two buckets, and that's a form of learning.",
    },
    {
      type: "activity",
      instructions: {
        en: "As a class, decide together whether each picture is spooky or not spooky before anyone taps — narrate why out loud (\"a bat flies at night, that feels spooky!\") so kids hear the reasoning, not just the answer.",
        ko: "탭하기 전에 반 전체가 함께 각 그림이 무서운지 아닌지 정해보세요 — 왜 그런지 소리 내어 설명해 주세요(\"박쥐는 밤에 날아다니니까 무섭게 느껴져!\") — 학생들이 답만이 아니라 이유도 듣게요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Spooky or Not Spooky?", ko: "무서운 걸까요, 아닐까요?" },
        labelA: { en: "Spooky", ko: "무서운 것" },
        labelB: { en: "Not Spooky", ko: "무섭지 않은 것" },
        emojiA: "👻",
        emojiB: "☀️",
        items: [
          { word: { en: "ghost", ko: "유령" }, emoji: "👻", bucket: "a" },
          { word: { en: "witch", ko: "마녀" }, emoji: "🧙", bucket: "a", minTrack: "explorers" },
          { word: { en: "bat", ko: "박쥐" }, emoji: "🦇", bucket: "a" },
          { word: { en: "spider", ko: "거미" }, emoji: "🕷️", bucket: "a" },
          { word: { en: "sun", ko: "해" }, emoji: "☀️", bucket: "b" },
          { word: { en: "flower", ko: "꽃" }, emoji: "🌸", bucket: "b" },
          { word: { en: "puppy", ko: "강아지" }, emoji: "🐶", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Ask one table: \"What's your costume? Say 'I'm a ___.'\"",
        ko: "한 모둠에게 물어보세요: \"코스튬이 뭐예요? 'I'm a ___.'라고 말해보세요.\"",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned six Halloween words, said \"Trick or treat!\" and \"I'm a ___,\" and sorted spooky things from not-spooky things — the same learn-from-examples idea Vora's used all year.",
        ko: "오늘은 할로윈 단어 여섯 가지를 배우고, \"Trick or treat!\"와 \"I'm a ___\"를 말했으며, 무서운 것과 무섭지 않은 것을 분류했어요 — 보라가 1년 내내 사용해 온 '예시로 배우기'와 같은 방식이에요.",
      },
      homework: {
        en: "Tell a family member what costume you'd wear, using \"I'm a ___.\"",
        ko: "가족에게 \"I'm a ___.\"를 사용해 어떤 코스튬을 입고 싶은지 말해보세요.",
      },
    },
  ],
};

export const m10_week2: Lesson = {
  ...meta("m10_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Whisper \"boo!\" behind your hands, then reveal a big smile — a tiny, friendly scare to get everyone giggling before the games start.",
        ko: "손으로 얼굴을 가리고 \"boo!\"라고 속삭인 다음, 활짝 웃는 얼굴을 보여주세요 — 게임을 시작하기 전에 다 함께 웃을 수 있는 작고 다정한 깜짝 놀래키기예요.",
      },
      prompt: { en: "Boo! 👻 Just kidding — let's play!", ko: "부우! 👻 장난이에요 — 이제 게임해요!" },
    },
    {
      type: "concept",
      title: { en: "Finding Matches, Like Vora Does", ko: "보라처럼 짝을 찾아요" },
      bigIdeas: ["learning"],
      lines: [
        { en: "Remember — I learn by looking at lots of examples and finding what matches.", ko: "기억나? 나는 많은 예시를 보고 서로 맞는 걸 찾으면서 배워." },
        { en: "Let's practice finding matches together with our Halloween words!", ko: "오늘은 할로윈 단어로 짝 찾기를 함께 연습해보자!" },
      ],
      teacherNote:
        "Keep this short — the learning-from-examples idea was fully taught in Week 1. This is just a quick bridge line reframing the matching game as the same 'find what matches' skill before diving into the activity.",
    },
    {
      type: "activity",
      instructions: {
        en: "Kids take turns flipping two cards at a time, saying the Halloween word out loud if they find a match.",
        ko: "학생들이 돌아가며 카드를 두 장씩 뒤집고, 짝을 찾으면 할로윈 단어를 소리 내어 말해보세요.",
      },
      config: {
        engine: "memory_match",
        title: { en: "Halloween Match-Up", ko: "할로윈 짝 맞추기" },
        pairs: [
          { word: { en: "pumpkin", ko: "호박" }, emoji: "🎃" },
          { word: { en: "ghost", ko: "유령" }, emoji: "👻" },
          { word: { en: "witch", ko: "마녀" }, emoji: "🧙", minTrack: "explorers" },
          { word: { en: "bat", ko: "박쥐" }, emoji: "🦇" },
          { word: { en: "candy", ko: "사탕" }, emoji: "🍬" },
          { word: { en: "costume", ko: "코스튬" }, emoji: "🎭" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Show one Halloween word card and see if everyone can say it out loud.",
        ko: "할로윈 단어 카드를 하나 보여주고 모두 소리 내어 말할 수 있는지 확인해보세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we matched Halloween words to pictures, finding pairs just like Vora finds matches in examples.",
        ko: "오늘은 할로윈 단어를 그림과 짝지었어요 — 보라가 예시에서 짝을 찾는 것과 같은 방식이에요.",
      },
      homework: {
        en: "Draw two Halloween pictures at home and ask a family member to match them to the English words.",
        ko: "집에서 할로윈 그림을 두 개 그려보고, 가족에게 영어 단어와 짝지어보게 해보세요.",
      },
    },
  ],
};

export const m10_week3: Lesson = {
  ...meta("m10_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Draw a simple pumpkin, ghost, pumpkin shape on the board and ask kids to guess what comes next before you reveal it.",
        ko: "칠판에 호박, 유령, 호박 모양을 간단히 그리고, 다음에 무엇이 올지 학생들에게 먼저 추측해보게 한 뒤 보여주세요.",
      },
      prompt: { en: "🎃 👻 🎃 ... what comes next?", ko: "🎃 👻 🎃 ... 다음엔 뭐가 올까요?" },
    },
    {
      type: "concept",
      title: { en: "Vora Predicts Patterns", ko: "보라는 패턴을 예측해요" },
      bigIdeas: ["reasoning"],
      lines: [
        { en: "Remember — I look at examples to find a pattern, and then I can guess what comes next.", ko: "기억나? 나는 예시를 보고 패턴을 찾아서 다음에 뭐가 올지 짐작할 수 있어." },
        { en: "Let's find some spooky patterns together!", ko: "오늘은 무서운 패턴을 함께 찾아보자!" },
      ],
      teacherNote:
        "Keep this short — the reasoning/pattern idea was already introduced this year (e.g. Month 8's pattern work). This is a quick bridge line before the game, not a full new teach.",
    },
    {
      type: "activity",
      instructions: {
        en: "Read the sequence out loud together (\"pumpkin, ghost, pumpkin, ghost...\") before asking what comes next — the pattern should feel obvious once it's spoken aloud.",
        ko: "다음에 올 것을 묻기 전에 순서를 다 함께 소리 내어 읽어보세요(\"pumpkin, ghost, pumpkin, ghost...\") — 소리 내어 말하면 패턴이 자연스럽게 느껴질 거예요.",
      },
      config: {
        engine: "pattern_predictor",
        title: { en: "What Comes Next?", ko: "다음엔 뭐가 올까요?" },
        teacherNote:
          "Same 'find the pattern' skill as Vora's classification games — predicting what comes next from examples is part of the reasoning big idea, paired this month with learning.",
        rounds: [
          { sequence: ["🎃", "👻", "🎃", "👻"], answer: "🎃", options: ["🎃", "👻", "🦇"] },
          { sequence: ["👻", "🦇", "👻", "🦇"], answer: "👻", options: ["🎃", "👻", "🦇"] },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Ask what picture should come next in today's pattern, without showing the options.",
        ko: "옵션을 보여주지 않고, 오늘 패턴에서 다음에 올 그림이 무엇인지 물어보세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we guessed what comes next in spooky patterns, just like Vora predicting from examples.",
        ko: "오늘은 무서운 패턴에서 다음에 올 것을 추측했어요 — 보라가 예시로 예측하는 것과 같은 방식이에요.",
      },
      homework: {
        en: "Draw your own spooky pattern (like 🎃👻🎃👻) and ask a family member what comes next.",
        ko: "나만의 무서운 패턴을 그려보고(예: 🎃👻🎃👻) 가족에게 다음에 뭐가 올지 물어보세요.",
      },
    },
  ],
};

export const m10_week4: Lesson = {
  ...meta("m10_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Drape a hand towel or scarf over your head like a silly ghost and say \"I'm a ghost!\" in a wobbly voice. Ham it up — this whole lesson is meant to be goofy.",
        ko: "손수건이나 스카프를 머리에 씌우고 유령 흉내를 내며 떨리는 목소리로 \"I'm a ghost!\"라고 말해보세요. 과장해서 재미있게 해주세요 — 이 수업은 원래 유쾌하고 웃긴 시간이에요.",
      },
      prompt: { en: "I'm a ghost! Boo! 👻", ko: "저는 유령이에요! 부우! 👻" },
    },
    {
      type: "concept",
      title: { en: "Any Costume Counts!", ko: "어떤 코스튬이든 괜찮아요!" },
      bigIdeas: ["learning"],
      lines: [
        { en: "Today there's no wrong answer — pick any costume you like, real or totally made up!", ko: "오늘은 틀린 답이 없어! 진짜든 완전히 상상이든, 좋아하는 코스튬을 아무거나 골라봐!" },
        { en: "Just put it in the sentence: \"I'm a ___.\"", ko: "그냥 이 문장에 넣기만 하면 돼: \"I'm a ___.\"" },
        { en: "I'm a ghost. Silly, right? Now it's your turn!", ko: "저는 유령이에요. 웃기지? 이제 너희 차례야!" },
        {
          en: "Explorers, try a two-word costume, like \"a scary witch\" or \"a silly pumpkin\"!",
          ko: "Explorers 친구들, \"a scary witch\"나 \"a silly pumpkin\"처럼 두 단어짜리 코스튬에 도전해봐!",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "The silliest, lowest-stakes spotlight of the year — lean into it. Any costume answer is correct as long as the sentence frame is right, so let kids be as wild as they want.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, then have each kid strike a costume pose and say it out loud, swapping in their own costume word if they like.",
        ko: "한 번에 한 타일씩 문장을 만들고, 각자 코스튬 포즈를 취하며 소리 내어 말해보세요 — 원한다면 자기만의 코스튬 단어로 바꿔서 말해도 좋아요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "I'm a ghost.", ko: "저는 유령이에요." },
        words: [
          { text: "I'm", role: "subject", ko: "저는" },
          { text: "a ghost", role: "object", ko: "유령" },
        ],
        translation: { en: "I'm a ghost.", ko: "저는 유령이에요." },
      },
    },
    {
      type: "check",
      prompt: {
        en: "Go around and have each kid say \"I'm a ___\" with any costume word — real or silly, all correct.",
        ko: "한 명씩 돌아가며 \"I'm a ___\"를 아무 코스튬 단어로 말해보게 하세요 — 진짜든 웃기든 다 정답이에요.",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we built \"I'm a ghost\" and practiced saying \"I'm a ___\" with any costume we could imagine — full circle from \"It's a book\" back in Week 1!",
        ko: "오늘은 \"I'm a ghost\"라는 문장을 만들고 상상할 수 있는 어떤 코스튬으로도 \"I'm a ___\"를 말해봤어요 — 1주차의 \"It's a book\"에서 시작해 한 바퀴 돌아온 셈이에요!",
      },
    },
  ],
};
