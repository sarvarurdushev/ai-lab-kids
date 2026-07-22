import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m11_week1: Lesson = {
  ...meta("m11_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Make a big happy face, then a sad face, then a surprised face — ask the class each time: \"How do I feel?\" Let them answer in Korean or English before teaching today's sentence pattern.",
      prompt: "How do I feel?",
    },
    {
      type: "vocab",
      title: "Feelings",
      words: [
        { word: "happy", emoji: "😊" },
        { word: "sad", emoji: "😢" },
        { word: "angry", emoji: "😠" },
        { word: "scared", emoji: "😨" },
        { word: "surprised", emoji: "😲", minTrack: "explorers" },
        { word: "tired", emoji: "😴" },
      ],
    },
    {
      type: "concept",
      title: "Vora Sees a Smile",
      bigIdeas: ["natural_interaction", "perception"],
      lines: [
        { text: "Look at my face! Can you guess how I feel?" },
        {
          text: "I see a big smile, so I might guess: happy! But seeing a smile isn't the same as really knowing how you feel inside.",
          textSimple: "I see a smile. I guess: happy! But guessing isn't the same as really knowing.",
        },
        {
          text: "Only you really know how you feel. Let's practice saying it together: I feel ___.",
          textSimple: "Only YOU know how you feel. Let's say: I feel ___.",
        },
        { text: "Even the smartest AI can only guess from a picture — it can't feel a warm hug or a hard day, the way you can.", minTrack: "explorers" },
      ],
      teacherNote:
        "This month's honest AI boundary: recognizing a facial expression (a shape a camera can detect) isn't the same as understanding a feeling. Also flag the grammar shift explicitly: \"I feel ___\" uses a real verb (feel), unlike the \"It's ___\" copula pattern used all year (Months 1, 6, and 7) — a quick side-by-side (\"It's sunny\" vs. \"I feel happy\") helps prevent kids from saying \"I'm feel happy\" or overusing \"it's\" for their own feelings.",
    },
    {
      type: "movement",
      title: "Feelings Actions!",
      instructions:
        "Call out each feeling word and make the matching face and body pose together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Happy — big smile and jump", emoji: "😊" },
        { text: "Sad — pouty face and droopy shoulders", emoji: "😢" },
        { text: "Angry — stomp your feet and cross your arms", emoji: "😠" },
        { text: "Scared — jump back and cover your eyes", emoji: "😨" },
        { text: "Surprised — gasp and throw your arms wide", emoji: "😲", minTrack: "explorers" },
        { text: "Tired — big yawn and slow stretch", emoji: "😴" },
      ],
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each feeling goes before anyone taps — happy feelings on one side, not-happy feelings on the other.",
      config: {
        engine: "train_the_robot",
        title: "Happy Feeling or Not Happy Feeling?",
        labelA: "Happy",
        labelB: "Not Happy",
        emojiA: "😊",
        emojiB: "😢",
        items: [
          { word: "happy", emoji: "😊", bucket: "a" },
          { word: "excited", emoji: "🤩", bucket: "a" },
          { word: "laughing", emoji: "😆", bucket: "a" },
          { word: "sad", emoji: "😢", bucket: "b" },
          { word: "angry", emoji: "😠", bucket: "b" },
          { word: "scared", emoji: "😨", bucket: "b" },
          { word: "tired", emoji: "😴", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[4],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      type: "chant",
      title: "I Feel Chant",
      instructions:
        "Say each call line and make the matching feeling face. The whole class echoes the response line back to you.",
      lines: [
        { call: "Feelings, feelings, what do you see?", response: "I feel happy, happy me!" },
        { call: "Feelings, feelings, tell me true —", response: "I feel sad, a little blue." },
        {
          call: "Feelings, feelings, hear me shout —",
          response: "I feel angry, watch me pout!",
          minTrack: "explorers",
        },
        {
          call: "Feelings, feelings, how about you?",
          response: "I feel tired — good night to you!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Make a feeling face without talking — can a partner guess and say \"You feel ___\"?",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we named six feelings and learned \"I feel ___,\" acted them out — how an AI can spot a smile, but can't truly know how someone feels inside — practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about feelings together.",
      summarySimple: "Today we named our feelings, made feeling faces, and chanted about feelings with Vora!",
      homework: "Ask a family member \"How do you feel?\" tonight and really listen to their answer.",
    },
  ],
};

export const m11_week2: Lesson = {
  ...meta("m11_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Act out a huge happy smile and freeze like a photo — ask the class: \"How do I feel?\" Tell them today we're going to build that sentence together, one word at a time.",
      prompt: "Freeze! How do I feel? 📸",
    },
    {
      type: "concept",
      title: "Just a Guess",
      bigIdeas: ["natural_interaction"],
      lines: [
        {
          text: "Remember — I can see a smile in a picture, but only you really know how you feel inside.",
          textSimple: "I can see a smile. But only YOU know how you feel.",
        },
        { text: "Let's practice saying it together: I feel ___." },
      ],
      teacherNote:
        "Quick reinforcement of Week 1's AI-limits idea — no new teaching here, just a short bridge into today's sentence-building game.",
    },
    {
      type: "movement",
      title: "Freeze-Frame Feelings!",
      instructions:
        "Call out each feeling word and freeze in that pose like a photo — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Happy — big smile, hands up", emoji: "😊" },
        { text: "Sad — droopy shoulders, pouty lip", emoji: "😢" },
        { text: "Angry — stomp and cross your arms", emoji: "😠" },
        { text: "Scared — jump and cover your eyes", emoji: "😨" },
        { text: "Surprised — gasp, hands on cheeks", emoji: "😲", minTrack: "explorers" },
        { text: "Tired — big yawn, slow stretch", emoji: "😴" },
      ],
    },
    {
      type: "activity",
      instructions: "First, act out \"happy\" with your face and body — no words! Then build the sentence tile by tile and say it together. Afterward, play a second game to reinforce it.",
      config: {
        engine: "sentence_builder",
        title: "I feel happy.",
        words: [
          { text: "I", role: "subject" },
          { text: "feel", role: "verb" },
          { text: "happy", role: "other" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time. When you find a feeling word, act it out with your face and body before saying it in English!",
      config: {
        engine: "memory_match",
        title: "Feelings Match",
        pairs: [
          { word: "happy", emoji: "😊" },
          { word: "sad", emoji: "😢" },
          { word: "angry", emoji: "😠" },
          { word: "scared", emoji: "😨" },
          { word: "surprised", emoji: "😲", minTrack: "explorers" },
          { word: "tired", emoji: "😴" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      type: "chant",
      title: "Feel It Chant",
      instructions:
        "Say each call line and freeze in the matching feeling pose. The whole class echoes the response line back to you.",
      lines: [
        { call: "Freeze, freeze, show me your face —", response: "I feel happy, all over the place!" },
        { call: "Freeze, freeze, what do you see?", response: "I feel scared, oh help me!" },
        {
          call: "Freeze, freeze, don't make a sound —",
          response: "I feel surprised, look all around!",
          minTrack: "explorers",
        },
        {
          call: "Freeze, freeze, day is through —",
          response: "I feel tired, how about you?",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"How do you feel?\" — can they answer with \"I feel ___\"?",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — building the sentence \"I feel happy\" one tile at a time, acting out feelings like freeze-frame photos, matching feeling words to faces, helping Vora follow clear step-by-step instructions, and chanting about feelings together.",
      summarySimple: "Today we built the sentence \"I feel happy\" and played feeling games with Vora!",
      homework: "Act out a feeling for your family tonight and see if they can guess it in English.",
    },
  ],
};

export const m11_week3: Lesson = {
  ...meta("m11_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask the class to make three different feeling faces in a row — happy, sad, surprised — as fast as they can. Then tell them today we'll match feeling words to pictures.",
      prompt: "Happy, sad, surprised — go! 🎭",
    },
    {
      type: "concept",
      title: "Matching Feelings",
      bigIdeas: ["learning"],
      lines: [
        {
          text: "Remember, I can spot a smile in a photo — but I get better at it by seeing lots and lots of examples, just like you're about to do!",
          textSimple: "I get better by seeing lots of examples — just like you!",
        },
        { text: "Let's match some feeling words to faces!" },
      ],
      teacherNote:
        "Brief callback to Week 1's AI-limits idea, reframed through Big Idea 3 (Learning): repeated exposure is how both Vora and kids build recognition.",
    },
    {
      type: "movement",
      title: "Act It, Match It!",
      instructions:
        "Call out each feeling word and act it out with your face and body together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Happy — jump with a big grin", emoji: "😊" },
        { text: "Sad — sniffle and rub your eyes", emoji: "😢" },
        { text: "Angry — stomp both feet loudly", emoji: "😠" },
        { text: "Scared — gasp and hide behind your hands", emoji: "😨" },
        { text: "Surprised — jump back with wide eyes", emoji: "😲", minTrack: "explorers" },
        { text: "Tired — droop your head and yawn", emoji: "😴" },
      ],
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time. When you find a feeling word, act it out with your face and body before saying it in English! Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "Feelings Match",
        pairs: [
          { word: "happy", emoji: "😊" },
          { word: "sad", emoji: "😢" },
          { word: "angry", emoji: "😠" },
          { word: "scared", emoji: "😨" },
          { word: "surprised", emoji: "😲", minTrack: "explorers" },
          { word: "tired", emoji: "😴" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "First, act out \"happy\" with your face and body — no words! Then build the sentence tile by tile and say it together.",
      config: {
        engine: "sentence_builder",
        title: "I feel happy.",
        words: [
          { text: "I", role: "subject" },
          { text: "feel", role: "verb" },
          { text: "happy", role: "other" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      type: "chant",
      title: "How Do You Feel Chant",
      instructions:
        "Say each call line and act out the feeling. The whole class echoes the response line back to you.",
      lines: [
        { call: "How do you feel? Tell me it's true —", response: "I feel happy, look at you!" },
        { call: "How do you feel? Boo hoo hoo —", response: "I feel sad, boo hoo hoo!" },
        {
          call: "How do you feel? Stomp your feet —",
          response: "I feel angry, hear the beat!",
          minTrack: "explorers",
        },
        {
          call: "How do you feel? Day is through —",
          response: "I feel tired, good night to you!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Which feeling did you match?\" — can they say the English word?",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — matching feeling words to faces, acting out each feeling with our face and body, building the sentence \"I feel happy\" one tile at a time, spotting real AI in everyday life, and chanting about how we feel together.",
      summarySimple: "Today we matched feeling words to faces and acted out our feelings with Vora!",
      homework: "Play a quick feelings guessing game with your family tonight.",
    },
  ],
};

export const m11_week4: Lesson = {
  ...meta("m11_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask a few kids: \"How do you feel right now — really?\" Quick, honest answers in any language before today's sentence.",
      prompt: "How do you feel today?",
    },
    {
      type: "concept",
      title: "I Feel Happy!",
      bigIdeas: [],
      lines: [
        {
          text: "I feel happy today, because I get to see you!",
          textSimple: "I feel happy today!",
        },
        {
          text: "How do YOU feel right now? Happy? Tired? Something else — any true answer is a great answer.",
          textSimple: "How do YOU feel? Any answer is a great answer!",
        },
        { text: "Your feelings are yours. Not even the smartest AI can tell you how you really feel inside — only you know that.", minTrack: "explorers" },
        { text: "Ready? Let's build the sentence together, one word at a time." },
      ],
      teacherNote:
        "Unlike Month 5's \"This is my sister,\" this sentence frame asks for a genuine, in-the-moment answer — encourage kids to swap in their real feeling, not just \"happy.\" Ties back to this month's AI honesty theme: this is one sentence Vora truly can't answer for them.",
    },
    {
      type: "movement",
      title: "Show Your Real Feeling!",
      instructions:
        "Call out each feeling word and act it out for real together, then invite a few kids to add their own true feeling at the end.",
      moves: [
        { text: "Happy — jump up and cheer", emoji: "😊" },
        { text: "Sad — hug yourself and sniffle", emoji: "😢" },
        { text: "Angry — cross your arms and frown", emoji: "😠" },
        { text: "Scared — freeze and gasp", emoji: "😨" },
        { text: "Surprised — throw your hands up", emoji: "😲", minTrack: "explorers" },
        { text: "Tired — rub your eyes and yawn", emoji: "😴" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then invite several kids to swap in their own true feeling and say it out loud.",
      config: {
        engine: "sentence_builder",
        title: "I feel happy.",
        words: [
          { text: "I", role: "subject" },
          { text: "feel", role: "verb" },
          { text: "happy", role: "other" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      type: "chant",
      title: "My True Feeling Chant",
      instructions:
        "Say each call line and have the class answer together, then invite a few kids to swap in their own real feeling. The whole class echoes the response line back to you.",
      lines: [
        { call: "How do you feel? Tell me it's true —", response: "I feel happy, that's the news for you!" },
        { call: "How do you feel? Don't be shy —", response: "I feel sad, and that's just fine." },
        {
          call: "How do you feel? Shout it out —",
          response: "I feel scared, without a doubt!",
          minTrack: "explorers",
        },
        {
          call: "How do you feel? Day is done —",
          response: "I feel tired, we had such fun!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Every kid says \"I feel ___\" out loud, naming their real feeling right now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today every child said how they truly feel in English — one of the most personal sentences in the whole year — acted out feelings together, helped Vora follow clear step-by-step instructions, spotted real AI in everyday life, and chanted their true feelings together.",
      summarySimple: "Today everyone said how they really feel in English with Vora!",
      homework: "Say \"I feel ___\" about your real feeling to someone at home tonight.",
    },
  ],
};
