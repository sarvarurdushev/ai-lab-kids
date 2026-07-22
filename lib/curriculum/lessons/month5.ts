import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m5_week1: Lesson = {
  ...meta("m5_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Show a family photo (yours, or a simple drawing on the board) and point to one person: \"This is my mom.\" Ask kids to guess who else might be in the photo before you teach the other words.",
      prompt: "Who is this? 👨‍👩‍👧‍👦",
    },
    {
      type: "vocab",
      title: "Family",
      words: [
        { word: "mom", emoji: "👩" },
        { word: "dad", emoji: "👨" },
        { word: "sister", emoji: "👧" },
        { word: "brother", emoji: "👦" },
        { word: "grandma", emoji: "👵" },
        { word: "grandpa", emoji: "👴" },
        { word: "baby", emoji: "👶", minTrack: "explorers" },
      ],
    },
    {
      type: "concept",
      title: "This Is My Family",
      bigIdeas: ["perception"],
      lines: [
        { text: "This is my mom. This is my dad. This is my family!" },
        {
          text: "I can look at pictures of faces, too — that's called perception.",
          textSimple: "I can look at faces too. That's called perception!",
        },
        {
          text: "But sometimes I mix up two people who look alike, like sisters or twins.",
          textSimple: "Sometimes I mix up people who look alike.",
        },
        { text: "You never mix up your own family, though — not even for a second!", minTrack: "explorers" },
      ],
      teacherNote:
        "Korean family terms encode relative age and the speaker's gender in a way English \"brother/sister\" doesn't — some kids will want to specify more than English allows. Validate that impulse (\"Yes, in Korean we'd say more — in English we just say brother or sister!\") instead of correcting it away. Keep the face-recognition point reassuring, not scary: apps can be wrong, kids never are about their own family.",
    },
    {
      type: "movement",
      title: "Family Actions!",
      instructions:
        "Call out each family word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Mom — blow a big kiss", emoji: "👩" },
        { text: "Dad — give a thumbs-up", emoji: "👨" },
        { text: "Sister — link arms and sway side to side", emoji: "👧" },
        { text: "Brother — give a high-five", emoji: "👦" },
        { text: "Grandma — rock gently like in a rocking chair", emoji: "👵" },
        { text: "Grandpa — pat your belly and laugh", emoji: "👴" },
      ],
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time to find a matching family word and picture. If they match, they stay face up!",
      config: {
        engine: "memory_match",
        title: "Family Words",
        pairs: [
          { word: "mom", emoji: "👩" },
          { word: "dad", emoji: "👨" },
          { word: "sister", emoji: "👧" },
          { word: "brother", emoji: "👦" },
          { word: "grandma", emoji: "👵" },
          { word: "grandpa", emoji: "👴" },
          { word: "baby", emoji: "👶", minTrack: "explorers" },
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
      title: "Family Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching family picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Family, family, who do you see?", response: "This is my mom, waving at me!" },
        { call: "Family, family, who's big and strong?", response: "This is my dad, singing our song!" },
        {
          call: "Family, family, who runs and plays?",
          response: "This is my brother, all through the day!",
          minTrack: "explorers",
        },
        {
          call: "Family, family, who do you love?",
          response: "This is my sister, I give her a hug!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Show your own family photo (or draw one) and tell a partner: \"This is my ___.\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned family words and the sentence \"This is my ___\" — and how even the smartest AI can mix up faces that you'd never confuse — acted out family actions together, practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about our families together.",
      summarySimple: "Today we learned family words, moved our bodies, and sang a family chant with Vora!",
      homework: "Introduce one family member to someone at home using \"This is my ___.\"",
    },
  ],
};

export const m5_week2: Lesson = {
  ...meta("m5_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask a few kids: \"Do you have a brother?\" Then say: \"Today, let's build a sentence about our families, one word at a time!\"",
      prompt: "Let's build a family sentence! 🧩",
    },
    {
      type: "concept",
      title: "Vora Remembers Faces",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "Remember, I can look at pictures of faces too — but I still mix some up!",
          textSimple: "I can look at faces too. But I still make mistakes!",
        },
        { text: "You never mix up your own family, though. Let's practice introducing them in English!" },
      ],
      teacherNote:
        "Quick callback to Week 1's face-recognition point — no new teaching here, just a bridge into today's sentence-building game.",
    },
    {
      type: "movement",
      title: "Family & School Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Mom — blow a big kiss", emoji: "👩" },
        { text: "Dad — give a thumbs-up", emoji: "👨" },
        { text: "Sister — link arms and sway side to side", emoji: "👧" },
        { text: "Brother — give a high-five", emoji: "👦" },
        { text: "Teacher — point at an imaginary board", emoji: "🧑‍🏫" },
        { text: "Desk — sit down and pat your desk", emoji: "🗄️" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full sentence together. Then play a second game to reinforce it.",
      config: {
        engine: "sentence_builder",
        title: "This is my brother.",
        words: [
          { text: "This is", role: "subject" },
          { text: "my", role: "other" },
          { text: "brother", role: "object" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Sort each word: does it belong to family, or to school?",
      config: {
        engine: "train_the_robot",
        title: "Family Word or School Word?",
        labelA: "Family",
        labelB: "School",
        emojiA: "👪",
        emojiB: "🏫",
        items: [
          { word: "mom", emoji: "👩", bucket: "a" },
          { word: "dad", emoji: "👨", bucket: "a" },
          { word: "sister", emoji: "👧", bucket: "a" },
          { word: "brother", emoji: "👦", bucket: "a" },
          { word: "teacher", emoji: "🧑‍🏫", bucket: "b" },
          { word: "classmate", emoji: "🧑‍🤝‍🧑", bucket: "b", minTrack: "explorers" },
          { word: "desk", emoji: "🗄️", bucket: "b" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      type: "chant",
      title: "This Is My Family Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching family picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Who is this, playing near?", response: "This is my brother, my brother is here!" },
        { call: "Who is this, on the go?", response: "This is my mom, I love her so!" },
        {
          call: "Who is this, big and strong?",
          response: "This is my dad, singing along!",
          minTrack: "explorers",
        },
        {
          call: "Who is this, right by your side?",
          response: "This is my sister, right by my side!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Point to a family member in a photo or drawing and say: \"This is my ___.\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we built the sentence \"This is my brother\" tile by tile, then practiced it with a second game — sorting family and school words — acted out family and school actions together, helped Vora follow clear step-by-step instructions, and chanted about our families together.",
      summarySimple: "Today we built a family sentence, moved our bodies, and sang a chant with Vora!",
    },
  ],
};

export const m5_week3: Lesson = {
  ...meta("m5_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Call out a word — \"mom\" or \"desk\" — and have kids shout \"Family!\" or \"School!\" as fast as they can before today's sorting game.",
      prompt: "Family or school? Shout it out! 👪🏫",
    },
    {
      type: "concept",
      title: "Sorting Like Vora",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "Sorting things into groups is exactly what I do with pictures — that's perception!",
          textSimple: "I sort pictures into groups too. That's perception!",
        },
        { text: "Let's see if you can sort these words even faster than me." },
      ],
      teacherNote:
        "Brief callback to Week 1's perception idea before the sorting game — no new content, just framing today's game as the same skill.",
    },
    {
      type: "movement",
      title: "Family or School Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Mom — blow a big kiss", emoji: "👩" },
        { text: "Dad — give a thumbs-up", emoji: "👨" },
        { text: "Sister — link arms and sway side to side", emoji: "👧" },
        { text: "Brother — give a high-five", emoji: "👦" },
        { text: "Teacher — point at an imaginary board", emoji: "🧑‍🏫" },
        { text: "Desk — sit down and pat your desk", emoji: "🗄️" },
      ],
    },
    {
      type: "activity",
      instructions: "Sort each word: does it belong to family, or to school? Then play a second game to reinforce it.",
      config: {
        engine: "train_the_robot",
        title: "Family Word or School Word?",
        labelA: "Family",
        labelB: "School",
        emojiA: "👪",
        emojiB: "🏫",
        items: [
          { word: "mom", emoji: "👩", bucket: "a" },
          { word: "dad", emoji: "👨", bucket: "a" },
          { word: "sister", emoji: "👧", bucket: "a" },
          { word: "brother", emoji: "👦", bucket: "a" },
          { word: "teacher", emoji: "🧑‍🏫", bucket: "b" },
          { word: "classmate", emoji: "🧑‍🤝‍🧑", bucket: "b", minTrack: "explorers" },
          { word: "desk", emoji: "🗄️", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full sentence together.",
      config: {
        engine: "sentence_builder",
        title: "This is my brother.",
        words: [
          { text: "This is", role: "subject" },
          { text: "my", role: "other" },
          { text: "brother", role: "object" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      type: "chant",
      title: "This Is My Family Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching family picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Who is this, running fast?", response: "This is my brother, having a blast!" },
        { call: "Who is this, cooking today?", response: "This is my mom, hip-hip-hooray!" },
        {
          call: "Who is this, tall as a tree?",
          response: "This is my dad, smiling at me!",
          minTrack: "explorers",
        },
        {
          call: "Who is this, sharing a toy?",
          response: "This is my sister, oh what joy!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Is 'teacher' a family word or a school word?\"",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we acted out family and school actions, played three activities — sorting family words from school words, building the sentence \"This is my brother\" tile by tile, and spotting real AI in everyday life — and chanted about our families together.",
      summarySimple: "Today we sorted family and school words, moved our bodies, and sang a chant with Vora!",
    },
  ],
};

export const m5_week4: Lesson = {
  ...meta("m5_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask a few kids: \"Do you have a sister? Do you have a brother?\" Quick yes/no answers to warm up before today's sentence.",
      prompt: "Do you have a sister or a brother?",
    },
    {
      type: "concept",
      title: "This Is My Sister!",
      bigIdeas: [],
      lines: [
        { text: "This... is my sister!" },
        {
          text: "You can say it about anyone in your family — a brother, a grandma, even a pet!",
          textSimple: "You can say it about mom, dad, or a pet too!",
        },
        { text: "Ready? Let's build the sentence together, one word at a time." },
      ],
      teacherNote:
        "Kids may want to name a cousin, grandparent, or even a pet — welcome any real family member, the sentence frame is what matters, not the exact word \"sister.\" Encourage a real, true answer rather than the first option on the screen.",
    },
    {
      type: "movement",
      title: "Family Actions!",
      instructions:
        "Call out each family word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Mom — blow a big kiss", emoji: "👩" },
        { text: "Dad — give a thumbs-up", emoji: "👨" },
        { text: "Sister — link arms and sway side to side", emoji: "👧" },
        { text: "Brother — give a high-five", emoji: "👦" },
        { text: "Grandma — rock gently like in a rocking chair", emoji: "👵" },
        { text: "Grandpa — pat your belly and laugh", emoji: "👴" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then invite several kids to swap in their own family member and say it out loud.",
      config: {
        engine: "sentence_builder",
        title: "This is my sister.",
        words: [
          { text: "This is", role: "subject" },
          { text: "my", role: "other" },
          { text: "sister", role: "object" },
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
      title: "This Is My Family Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching family picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Who is this, standing near?", response: "This is my sister, she is here!" },
        { call: "Who is this, running fast?", response: "This is my brother, having a blast!" },
        {
          call: "Who is this, baking a treat?",
          response: "This is my grandma, isn't she sweet!",
          minTrack: "explorers",
        },
        {
          call: "Who is this? Point and say!",
          response: "This is my family — hip, hip, hooray!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Every kid says \"This is my ___\" out loud, naming one real family member.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today every child proudly introduced one real family member in English — the whole point of the sentence — acted out family actions together, helped Vora follow clear instructions, spotted real AI in everyday life, and chanted about family together.",
      summarySimple: "Today everyone said \"This is my family!\" and we moved and sang together!",
      homework: "Say \"This is my ___\" about a family member to someone at home tonight.",
    },
  ],
};
