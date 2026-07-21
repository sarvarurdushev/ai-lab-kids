import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m9_week1: Lesson = {
  ...meta("m9_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Point to your own eyes, nose, and mouth one at a time, saying each word slowly. Ask kids to touch the same part on themselves.",
      prompt: "Point to your eyes! 👀",
    },
    {
      type: "vocab",
      title: "My Body",
      words: [
        { word: "eyes", emoji: "👀" },
        { word: "nose", emoji: "👃" },
        { word: "mouth", emoji: "👄" },
        { word: "ears", emoji: "👂" },
        { word: "hands", emoji: "🙌" },
        { word: "feet", emoji: "🦶" },
        { word: "shoulders", emoji: "🙆", minTrack: "explorers" },
      ],
    },
    {
      type: "concept",
      title: "Vora Doesn't Have Eyes Like You!",
      bigIdeas: ["perception"],
      lines: [
        { text: "I don't have real eyes, or real hands, or real feet like you do!" },
        { text: "But some games can still tell when your body moves — they use something called a sensor, not eyes." },
        { text: "A fitness tracker on your wrist can feel you jump, even with the lights off!" },
      ],
      teacherNote:
        "This month broadens 'perception' beyond seeing — sensors that detect motion or touch are a form of perception too, even without eyes or a camera. Motion-sensor games (dance games, some fitness trackers) are the concrete example to point to if kids ask how.",
    },
    {
      type: "movement",
      title: "Body Part Actions!",
      instructions:
        "Call out each body part and touch it together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Eyes — point to your eyes and blink big", emoji: "👀" },
        { text: "Nose — touch your nose and wiggle it", emoji: "👃" },
        { text: "Mouth — touch your mouth and open it wide", emoji: "👄" },
        { text: "Ears — touch your ears and wiggle them", emoji: "👂" },
        { text: "Hands — clap your hands high", emoji: "🙌" },
        { text: "Feet — stomp your feet", emoji: "🦶" },
        { text: "Shoulders — shrug your shoulders up and down", emoji: "🙆" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards at a time, saying the body part out loud if they find a match.",
      config: {
        engine: "memory_match",
        title: "Body Parts",
        pairs: [
          { word: "eyes", emoji: "👀" },
          { word: "nose", emoji: "👃" },
          { word: "mouth", emoji: "👄" },
          { word: "ears", emoji: "👂" },
          { word: "hands", emoji: "🙌" },
          { word: "feet", emoji: "🦶" },
          { word: "shoulders", emoji: "🙆", minTrack: "explorers" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[2],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[2],
    },
    {
      type: "chant",
      title: "Body Parts Chant",
      instructions:
        "Say each call line and touch (or point to) the matching body part. The whole class echoes the response line back to you.",
      lines: [
        { call: "Body, body, what do you see?", response: "Touch your eyes, touch your eyes, look at me!" },
        { call: "Body, body, smell the air,", response: "Touch your nose, touch your nose, right there!" },
        { call: "Body, body, listen well,", response: "Touch your ears, touch your ears, ring the bell!" },
        { call: "Body, body, stomp the floor,", response: "Touch your feet, touch your feet, give me more!" },
      ],
    },
    {
      type: "check",
      prompt: "Everyone point to your ears, then your feet — no talking, just pointing!",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we named six body parts in English, acted them out, learned that sensors, not just eyes, can notice how our bodies move, practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about our body parts together.",
      homework: "Touch and name three body parts in English before bedtime tonight.",
    },
  ],
};

export const m9_week2: Lesson = {
  ...meta("m9_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Play a quick round of \"Vora Says\" instead of \"Simon Says\" — give one or two commands yourself (\"Vora says clap your hands!\") before today's game.",
      prompt: "Vora says... clap your hands! 👏",
    },
    {
      type: "concept",
      title: "Sensors Follow You Even When You Move",
      bigIdeas: ["perception"],
      lines: [
        { text: "Remember — a sensor can notice your body moving, step by step, even without eyes." },
        { text: "Let's move through a whole routine, and see how many steps a sensor could follow!" },
      ],
      teacherNote:
        "Keep this short — perception was fully taught in Week 1. This is just a quick bridge line before the physical routine, reframing today's movement game as something a sensor could track step by step.",
    },
    {
      type: "movement",
      title: "Vora Says: Move!",
      instructions:
        "Call out each step and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Stand up — jump to your feet", emoji: "🧍" },
        { text: "Touch your nose — tap your nose with one finger", emoji: "👃" },
        { text: "Clap your hands — clap three times big", emoji: "👏" },
        { text: "Sit down — plop back into your seat", emoji: "🪑" },
      ],
    },
    {
      type: "activity",
      instructions: "As each step is placed, have the whole class stand up and actually perform it together before moving to the next — this routine is meant to be moved, not just read aloud. Then play a second game to reinforce it.",
      config: {
        engine: "sequence_builder",
        title: "Vora Says: Move Your Body!",
        steps: [
          { text: "Stand up", emoji: "🧍" },
          { text: "Touch your nose", emoji: "👃" },
          { text: "Clap your hands", emoji: "👏", minTrack: "explorers" },
          { text: "Sit down", emoji: "🪑" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, then have the whole class physically touch their nose as they say it out loud together.",
      config: {
        engine: "sentence_builder",
        title: "Touch your nose.",
        words: [
          { text: "Touch", role: "verb" },
          { text: "your nose", role: "object" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[2],
    },
    {
      type: "chant",
      title: "Touch Your Nose Chant",
      instructions:
        "Say each call line and do the matching action. The whole class echoes the response line back to you.",
      lines: [
        { call: "Vora says, what do we do?", response: "Stand up, stand up — me and you!" },
        { call: "Vora says, where's your nose?", response: "Touch your nose, touch your nose, here it goes!" },
        { call: "Vora says, clap out loud,", response: "Clap your hands, clap your hands, make us proud!" },
        { call: "Vora says, rest a while,", response: "Sit back down, sit back down, with a smile!" },
      ],
    },
    {
      type: "check",
      prompt: "Call out a step from today's routine (\"Touch your nose!\") and see if everyone can do it without looking at the screen.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we moved our whole bodies through a four-step \"Vora Says\" routine, in order, from start to finish, acted it out again with a movement break, helped Vora follow clear step-by-step instructions, and chanted the \"Vora Says\" routine together.",
      homework: "Teach a family member the \"Vora Says\" game tonight using English body words.",
    },
  ],
};

export const m9_week3: Lesson = {
  ...meta("m9_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Touch your own nose and say \"nose\" slowly, then wait for the class to touch theirs too. Do it two or three times, a little faster each time.",
      prompt: "Touch your nose! 👃",
    },
    {
      type: "concept",
      title: "Words Can Be a Command, Too",
      bigIdeas: ["perception"],
      lines: [
        { text: "Your body already knows how to touch your nose — now let's put that into words!" },
        { text: "When I hear a command like \"touch your nose,\" my sensors and cameras help me figure out where a nose even is." },
      ],
      teacherNote:
        "Keep this brief — perception was fully taught in Week 1. This is just a quick bridge line connecting today's sentence-building game to the same 'sensors help notice the body' idea, before diving into the activity.",
    },
    {
      type: "movement",
      title: "Move Your Body!",
      instructions:
        "Call out each step and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Stand up — jump to your feet", emoji: "🧍" },
        { text: "Touch your nose — tap your nose with one finger", emoji: "👃" },
        { text: "Clap your hands — clap three times big", emoji: "👏" },
        { text: "Sit down — plop back into your seat", emoji: "🪑" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, then have the whole class physically touch their nose as they say it out loud together. Then play a second game to reinforce it.",
      config: {
        engine: "sentence_builder",
        title: "Touch your nose.",
        words: [
          { text: "Touch", role: "verb" },
          { text: "your nose", role: "object" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "As each step is placed, have the whole class stand up and actually perform it together before moving to the next — this routine is meant to be moved, not just read aloud.",
      config: {
        engine: "sequence_builder",
        title: "Vora Says: Move Your Body!",
        steps: [
          { text: "Stand up", emoji: "🧍" },
          { text: "Touch your nose", emoji: "👃" },
          { text: "Clap your hands", emoji: "👏", minTrack: "explorers" },
          { text: "Sit down", emoji: "🪑" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[3],
    },
    {
      type: "chant",
      title: "Vora Says Chant",
      instructions:
        "Say each call line and do the matching action. The whole class echoes the response line back to you.",
      lines: [
        { call: "Vora says, what do we do?", response: "Stand up, stand up — me and you!" },
        { call: "Vora says, where's your nose?", response: "Touch your nose, touch your nose, here it goes!" },
        { call: "Vora says, clap out loud,", response: "Clap your hands, clap your hands, make us proud!" },
        { call: "Vora says, rest a while,", response: "Sit back down, sit back down, with a smile!" },
      ],
    },
    {
      type: "check",
      prompt: "Say \"Touch your nose!\" one more time and see if everyone can do it without looking at the screen.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — building the sentence \"Touch your nose\" tile by tile, acted it out with a movement break, moving through the four-step \"Vora Says\" routine, spotting real AI in everyday life, and chanted the \"Vora Says\" routine together.",
      homework: "Tell a family member \"Touch your nose!\" in English and see if they follow your command.",
    },
  ],
};

export const m9_week4: Lesson = {
  ...meta("m9_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"think\" and \"sink\" slowly, back to back, a few times — see if anyone remembers this pair from Week 4!",
      prompt: "think... sink... Do you remember?",
    },
    {
      type: "concept",
      title: "Ears Are Sensors Too",
      bigIdeas: ["perception"],
      lines: [
        { text: "This month we learned that eyes, hands, and sensors all help us notice the world." },
        { text: "Your ears are sensors too — let's use them for a super-careful listening game." },
        { text: "Listen very closely: think... or sink?" },
      ],
      teacherNote:
        "This is the third quarter-checkpoint listening review (after Week 4's original th/s lesson) — ties this month's 'sensors, not just eyes' theme directly to the ears as a sensor too.",
    },
    {
      type: "movement",
      title: "Listening Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Think — tap your temple like you're thinking hard", emoji: "🤔" },
        { text: "Sink — mime turning on a faucet and washing your hands", emoji: "🚰" },
        { text: "Mouth — point to your mouth and open it wide", emoji: "👄" },
        { text: "Mouse — wiggle your fingers like tiny mouse feet", emoji: "🐭" },
        { text: "Bath — mime scrubbing your arms like you're in the tub", emoji: "🛁" },
        { text: "Bass — flap your hands like fish fins swimming", emoji: "🐟" },
      ],
    },
    {
      type: "activity",
      instructions: "Play each word once, and have kids point to or say the picture they heard. Repeat any pair the class finds hard — expect this review to go faster than Week 4's first pass.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: think or sink?",
        targetSound: "/θ/ (\"th\") vs /s/",
        teacherNote:
          "Korean has no /θ/; expect substitution with /s/ or /t/. This is the third quarter-checkpoint review of the four core Korean L1 sound gaps, first taught in Week 4 of the foundations unit.",
        pairs: [
          { wordA: { text: "think", emoji: "🤔" }, wordB: { text: "sink", emoji: "🚰" } },
          { wordA: { text: "mouth", emoji: "👄" }, wordB: { text: "mouse", emoji: "🐭" } },
          { wordA: { text: "bath", emoji: "🛁" }, wordB: { text: "bass", emoji: "🐟" } },
          {
            wordA: { text: "path", emoji: "🛤️" },
            wordB: { text: "pass", emoji: "🏈" },
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[3],
    },
    {
      ...AI_OR_NOT_SETS[3],
    },
    {
      type: "chant",
      title: "Think or Sink Chant",
      instructions:
        "Say each call line, then have the class say the matching word back to you as the response.",
      lines: [
        { call: "Listen, listen, what do you hear?", response: "Think, think — the answer is clear!" },
        { call: "Listen, listen, water below?", response: "Sink, sink — watch it flow!" },
        { call: "Listen, listen, open your mouth,", response: "Mouth, mouth — now say it out!" },
        { call: "Listen, listen, tiny and quick?", response: "Mouse, mouse — that did the trick!" },
      ],
    },
    {
      type: "check",
      prompt: "Say \"think\" and \"sink\" one more time — thumbs up if it's easier to hear the difference than it was in Week 4.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we reviewed the th/s sound from Week 4 — one more sound-gap check-in before the year's last one in Month 12 — acted out think, sink, mouth, and mouse, helped Vora follow clear step-by-step instructions, spotted real AI in everyday life, and chanted the think/sink sounds together.",
    },
  ],
};
