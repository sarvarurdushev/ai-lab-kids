import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w7d1_what_can_robots_do: Lesson = {
  ...meta("w7d1_what_can_robots_do"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Can a robot swim? Can a robot cook?\" Take quick guesses before teaching the verbs.",
      prompt: "What can a robot do?",
    },
    {
      type: "vocab",
      title: "Action Verbs",
      words: [
        { word: "clean", emoji: "🧹" },
        { word: "cook", emoji: "🍳" },
        { word: "drive", emoji: "🚗" },
        { word: "fly", emoji: "✈️" },
        { word: "swim", emoji: "🏊" },
        { word: "talk", emoji: "💬" },
      ],
    },
    {
      type: "movement",
      title: "Robot Action Moves!",
      instructions:
        "Call out each action verb and do the move together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Clean — sweep your arms like a broom", emoji: "🧹" },
        { text: "Cook — stir an invisible pot", emoji: "🍳" },
        { text: "Drive — hold a steering wheel and turn", emoji: "🚗" },
        { text: "Fly — spread your arms and zoom around", emoji: "✈️" },
        { text: "Swim — paddle your arms like swimming", emoji: "🏊" },
        { text: "Talk — cup your hands around your mouth", emoji: "💬" },
      ],
    },
    {
      type: "concept",
      title: "Robots Can...",
      bigIdeas: ["societal_impact"],
      lines: [
        { text: "Real robots can clean floors, and real robots can fly!" },
        { text: "\"Can\" tells us what something is able to do." },
      ],
      teacherNote: "First real-world grounding of \"robot\" beyond Vora the character — robot vacuums and delivery drones are good concrete examples if kids ask for more.",
    },
    {
      type: "chant",
      title: "Robot Can Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "Robot, robot, what can you do?", response: "I can clean, clean, just for you!" },
        { call: "Robot, robot, tell me true —", response: "I can cook, cook, a meal for you!" },
        { call: "Robot, robot, up in the sky —", response: "I can fly, fly, way up high!" },
        { call: "Robot, robot, one more thing —", response: "I can swim, swim, hear me sing!" },
      ],
    },
    {
      type: "check",
      prompt: "Each kid says one thing a robot can do, using an action verb from today.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned action verbs and how \"can\" describes what something is able to do, acted out each action, and chanted about what robots can do together.",
    },
  ],
};

export const w7d2_robots_at_home_and_school: Lesson = {
  ...meta("w7d2_robots_at_home_and_school"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Is a calculator an AI helper?\" Let the class debate briefly — there's no shame in disagreeing today.",
      prompt: "AI helper, or not AI?",
    },
    {
      type: "concept",
      title: "Robots at Home and School",
      bigIdeas: ["societal_impact", "perception"],
      lines: [
        { text: "Some helpers around you are AI — they learn and answer." },
        { text: "Some helpers are smart tools, but not AI — they just do one job the same way every time." },
        { text: "This one is tricky — let's sort them together and talk about why." },
      ],
      teacherNote:
        "The hardest sort in the unit on purpose — a calculator is fast and \"smart-seeming\" but doesn't learn or adapt, which is exactly the distinction worth sitting with. Expect more \"needs practice\" marks here than any other lesson; that's the activity working as intended, not a sign kids are behind.",
    },
    {
      type: "movement",
      title: "Helper or Not Actions!",
      instructions:
        "Call out each helper and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Voice assistant — cup your ear and say \"Hello!\"", emoji: "🔊" },
        { text: "Robot vacuum — scoot low and spin in a circle", emoji: "🤖" },
        { text: "Smart speaker — tap the air like pressing a button", emoji: "📢" },
        { text: "Calculator — tap invisible number buttons", emoji: "🧮" },
        { text: "Alarm clock — mime waking up and stretching", emoji: "⏰" },
        { text: "Flashlight — click your hands open like a beam", emoji: "🔦" },
        { text: "Lamp — reach up high and \"switch on\" with a click", emoji: "💡" },
      ],
    },
    {
      type: "activity",
      instructions: "Go slower than usual here and discuss each one — this sort is meant to be debated, not rushed.",
      config: {
        engine: "train_the_robot",
        title: "AI Helper or Not AI?",
        labelA: "AI Helper",
        labelB: "Not AI",
        emojiA: "🤖",
        emojiB: "🔧",
        items: [
          { word: "voice assistant", emoji: "🔊", bucket: "a" },
          { word: "robot vacuum", emoji: "🤖", bucket: "a" },
          { word: "smart speaker", emoji: "📢", bucket: "a" },
          { word: "calculator", emoji: "🧮", bucket: "b" },
          { word: "alarm clock", emoji: "⏰", bucket: "b" },
          { word: "flashlight", emoji: "🔦", bucket: "b" },
          { word: "lamp", emoji: "💡", bucket: "b" },
        ],
      },
    },
    {
      type: "chant",
      title: "AI or Not Chant!",
      instructions:
        "Say each call line and hold up (or point to) the matching helper picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Robot vacuum, what do you say?", response: "I'm AI — I learn every day!" },
        { call: "Alarm clock, what do you say?", response: "Not AI — I ring the same way!" },
        { call: "Smart speaker, tell me true —", response: "I'm AI — I listen to you!" },
        { call: "Flashlight, what do you say?", response: "Not AI — just click and away!" },
      ],
    },
    {
      type: "check",
      prompt: "Ask one student to explain, in their own words, why a calculator isn't AI.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we sorted real helpers into AI and not-AI — the trickiest sort yet, and a big step in understanding what AI actually is, acted out each helper, and chanted about AI or not together.",
    },
  ],
};

export const w7d3_vora_makes_a_mistake: Lesson = {
  ...meta("w7d3_vora_makes_a_mistake"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Can Vora see a picture? Can Vora feel hungry?\" Let kids guess before the activity.",
      prompt: "Can Vora do it?",
    },
    {
      type: "concept",
      title: "Vora Can, Vora Can't",
      bigIdeas: ["societal_impact", "learning"],
      lines: [
        { text: "I can talk, learn, and sort pictures — you've seen me do it all unit!" },
        { text: "But I can't feel hungry, and I can't really see the real world like you do." },
        { text: "Knowing what AI can't do is just as important as knowing what it can." },
      ],
      teacherNote: "Direct callback to Week 1 Day 3 and Week 2 Day 2's \"AI can be wrong\" thread — this lesson is where that idea gets a name (limitations) and a grammar structure to express it.",
    },
    {
      type: "movement",
      title: "Can Vora Do It? Actions!",
      instructions:
        "Call out each action and do the move together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Fly — flap your arms like wings", emoji: "✈️" },
        { text: "Talk — cup your hands and chat", emoji: "💬" },
        { text: "Learn — tap your head like you're thinking", emoji: "🧠" },
        { text: "See a picture — make binoculars with your hands", emoji: "👀" },
        { text: "Sort — mime moving toys into two piles", emoji: "🗂️" },
        { text: "Feel hungry — rub your tummy", emoji: "🍽️" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then invite a few kids to say their own \"Vora can / can't ___\" sentence out loud.",
      config: {
        engine: "sentence_builder",
        title: "Vora can fly.",
        words: [
          { text: "Vora", role: "subject" },
          { text: "can", role: "other" },
          { text: "fly", role: "verb" },
        ],
      },
    },
    {
      type: "chant",
      title: "Vora Can/Can't Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you, giving a thumbs-up for \"can\" and a thumbs-down for \"can't.\"",
      lines: [
        { call: "Vora, Vora, can you fly?", response: "Yes I can, up in the sky!" },
        { call: "Vora, Vora, can you talk?", response: "Yes I can, listen while I talk!" },
        { call: "Vora, Vora, can you feel?", response: "No I can't, hunger's not real!" },
        { call: "Vora, Vora, tell me true —", response: "I can learn, just like you!" },
      ],
    },
    {
      type: "check",
      prompt: "\"Vora can ___. Vora can't ___.\" — each kid completes both blanks out loud.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we built can/can't sentences about Vora — putting a grammar structure around the idea that AI has real limits, acted out Vora's actions, and chanted \"can\" and \"can't\" together.",
      homework: "Tell a family member one thing Vora can do and one thing Vora can't do.",
    },
  ],
};
