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
      type: "check",
      prompt: "Each kid says one thing a robot can do, using an action verb from today.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned action verbs and how \"can\" describes what something is able to do.",
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
      type: "check",
      prompt: "Ask one student to explain, in their own words, why a calculator isn't AI.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we sorted real helpers into AI and not-AI — the trickiest sort yet, and a big step in understanding what AI actually is.",
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
      type: "check",
      prompt: "\"Vora can ___. Vora can't ___.\" — each kid completes both blanks out loud.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we built can/can't sentences about Vora — putting a grammar structure around the idea that AI has real limits.",
      homework: "Tell a family member one thing Vora can do and one thing Vora can't do.",
    },
  ],
};
