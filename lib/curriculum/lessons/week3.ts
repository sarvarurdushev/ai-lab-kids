import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w3d1_rainbow_colors: Lesson = {
  ...meta("w3d1_rainbow_colors"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up something red and ask \"What color is this?\" before teaching the word.",
      prompt: "What color is this? 🔴",
      promptSimple: "Look! What color is it? 🔴",
    },
    {
      type: "vocab",
      title: "Colors",
      words: [
        { word: "red", emoji: "🔴" },
        { word: "blue", emoji: "🔵" },
        { word: "yellow", emoji: "🟡" },
        { word: "green", emoji: "🟢" },
        { word: "purple", emoji: "🟣" },
        { word: "orange", emoji: "🟠" },
      ],
    },
    {
      type: "story",
      title: "Vora Names the Rainbow",
      teacherNote:
        "Point to a real rainbow picture (or draw one) as you read each panel, matching Vora's color-naming to the actual band of the rainbow.",
      panels: [
        {
          text: "After the rain stopped, a big rainbow stretched across the sky, and Vora looked up in wonder.",
          textSimple: "A rainbow appeared. Vora looked up.",
          emoji: "🌈",
        },
        {
          text: "\"Red, I know that one!\" said Vora. \"But wait — is that next band blue, or is it purple?\"",
          textSimple: "\"Red!\" said Vora. \"But is that blue or purple?\"",
          emoji: "🤔",
        },
        {
          text: "Vora looked very closely, comparing the tricky color right next to the colors it already knew for sure.",
          textSimple: "Vora looked closely and compared the colors.",
          emoji: "🔍",
        },
        {
          text: "\"It's a little more pink than blue,\" said Vora. \"That one is purple!\"",
          textSimple: "\"That one is purple!\" said Vora.",
          emoji: "🟣",
        },
        {
          text: "One by one, Vora named every single color in the rainbow — red, blue, yellow, green, purple, and orange!",
          textSimple: "Vora named every color in the rainbow!",
          emoji: "🌈",
        },
        {
          text: "Vora wasn't magic — it just looked really closely and compared each color side by side, the same way you can too.",
          textSimple: "No magic! Vora just looked closely and compared colors.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora figure out the tricky color was purple and not blue?",
          discussionNote: "It looked closely and compared the color right next to colors it already knew — careful comparing, not a magic guess.",
        },
        {
          question: "What's a color that's sometimes tricky for YOU to tell apart from another color?",
          discussionNote: "Open discussion — e.g. blue vs purple, red vs orange — the point is that noticing close differences is a skill everyone (and Vora) can practice.",
        },
      ],
    },
    {
      type: "movement",
      title: "Rainbow Color Actions!",
      instructions:
        "Call out each color word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Red — stomp your feet like a fire truck", emoji: "🔴" },
        { text: "Blue — wave your arms like ocean waves", emoji: "🔵" },
        { text: "Yellow — reach up high like the sun", emoji: "🟡" },
        { text: "Green — wiggle like grass in the wind", emoji: "🟢" },
        { text: "Purple — twirl around like a grape", emoji: "🟣" },
        { text: "Orange — bounce like a round orange", emoji: "🟠" },
      ],
    },
    {
      type: "class_vote",
      title: "Favorite Color Vote!",
      instructions:
        "Read the question aloud. Have kids vote with a show of hands for their favorite color, one option at a time. Count the hands out loud together for each color.",
      question: "Which color is YOUR favorite?",
      questionSimple: "What color do you like best?",
      options: [
        { text: "Red", emoji: "🔴" },
        { text: "Blue", emoji: "🔵" },
        { text: "Yellow", emoji: "🟡" },
        { text: "Green", emoji: "🟢" },
        { text: "Purple", emoji: "🟣" },
        { text: "Orange", emoji: "🟠" },
      ],
    },
    {
      type: "chant",
      title: "Rainbow Colors Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching color. The whole class echoes the response line back to you.",
      lines: [
        { call: "Colors, colors, what do you see?", response: "It is red, red as can be!" },
        { call: "Colors, colors, look up high,", response: "It is blue, blue like the sky!" },
        {
          call: "Colors, colors, shining bright,",
          response: "It is yellow, yellow light!",
          minTrack: "explorers",
        },
        { call: "Colors, colors, what's your guess?", response: "It is green, green is the best!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Point to something in the room and say \"It is ___.\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned six colors in English — and good news, color words go in the same place in a sentence as they do in Korean — we acted out the colors and chanted \"It is ___\" together.",
      summarySimple: "Today we learned colors and chanted about them together!",
      homework: "Find three colorful things at home and say their color in English.",
    },
  ],
};

export const w3d2_vora_finds_pattern: Lesson = {
  ...meta("w3d2_vora_finds_pattern"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Draw or say a pattern out loud: \"Red, blue, red, blue...\" and ask \"What comes next?\" Let kids call out \"Red!\" before moving on.",
      prompt: "Red, blue, red, blue... what comes next?",
    },
    {
      type: "vocab",
      title: "Shapes",
      words: [
        { word: "circle", emoji: "⭕" },
        { word: "square", emoji: "🟦" },
        { word: "triangle", emoji: "🔺" },
        { word: "star", emoji: "⭐" },
      ],
    },
    {
      type: "concept",
      title: "Vora Finds the Pattern",
      bigIdeas: ["reasoning", "learning"],
      lines: [
        {
          text: "A pattern is something that repeats — like red, blue, red, blue.",
          textSimple: "A pattern repeats. Red, blue, red, blue!",
        },
        {
          text: "Finding patterns is one of the most important things AI does!",
          textSimple: "AI loves finding patterns!",
        },
        {
          text: "Let's practice telling what's the same and what's different.",
          textSimple: "Let's practice: same or different?",
        },
      ],
      teacherNote:
        "This is the conceptual seed for \"machine learning finds patterns in data\" — keep the demonstration physical (blocks, claps, or the warm-up chant), the app activity below only drills the same/different vocabulary that supports it.",
    },
    {
      type: "story",
      title: "Vora and the Missing Bead",
      teacherNote:
        "Draw the shape pattern on the board as you read (circle, square, circle, square, ___) and pause before panel 4 to let kids guess what shape comes next.",
      panels: [
        {
          text: "Vora was helping make a shape bracelet: circle, square, circle, square, circle...",
          textSimple: "Vora made a bracelet: circle, square, circle, square.",
          emoji: "⭕",
        },
        {
          text: "But then one bead fell off! There was a gap right in the middle of the pattern.",
          textSimple: "One bead fell off! There was a gap.",
          emoji: "🕳️",
        },
        {
          text: "\"Let's look at the pattern,\" said Vora. \"Circle, square, circle, square... what comes next?\"",
          textSimple: "\"What comes next?\" asked Vora.",
          emoji: "🤔",
        },
        {
          text: "\"A square!\" said Vora. \"The pattern keeps repeating — circle, then square, again and again.\"",
          textSimple: "\"A square!\" said Vora. The pattern repeats!",
          emoji: "🟦",
        },
        {
          text: "Vora popped the square bead back into the gap, and the bracelet's pattern was perfect again.",
          textSimple: "The square bead fit perfectly!",
          emoji: "✨",
        },
        {
          text: "Vora wasn't magic — it just looked at what repeated over and over, and used that pattern to figure out the missing piece, the same trick you'll use in today's game.",
          textSimple: "No magic! Vora just found the pattern.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora know the missing bead had to be a square?",
          discussionNote: "It looked at the repeating pattern — circle, square, circle, square — and used that pattern to figure out what came next, not a random guess.",
        },
        {
          question: "Can you think of a pattern you've seen somewhere else, like on clothes or in music?",
          discussionNote: "Open discussion — the point is that patterns are everywhere, and noticing them is a skill both people and AI use.",
        },
      ],
    },
    {
      type: "movement",
      title: "Shape Actions!",
      instructions:
        "Call out each shape word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Circle — draw a big circle in the air", emoji: "⭕" },
        { text: "Square — make a square shape with your arms", emoji: "🟦" },
        { text: "Triangle — make a triangle over your head with your arms", emoji: "🔺" },
        { text: "Star — stretch out your arms and legs like a star", emoji: "⭐" },
      ],
    },
    {
      type: "activity",
      instructions: "Each item shows two shapes or colors together. Sort: are they the same, or different?",
      config: {
        engine: "train_the_robot",
        title: "Same or Different?",
        labelA: "Same",
        labelB: "Different",
        emojiA: "🟰",
        emojiB: "🙅",
        items: [
          { word: "red, red", emoji: "🔴🔴", bucket: "a" },
          { word: "blue, blue", emoji: "🔵🔵", bucket: "a" },
          { word: "star, star", emoji: "⭐⭐", bucket: "a" },
          { word: "square, square", emoji: "🟦🟦", bucket: "a" },
          { word: "red, blue", emoji: "🔴🔵", bucket: "b" },
          { word: "circle, square", emoji: "⭕🟦", bucket: "b" },
          { word: "star, triangle", emoji: "⭐🔺", bucket: "b" },
        ],
      },
    },
    {
      type: "stand_sit",
      title: "Same or Different: True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer and read the explanation before moving on.",
      statements: [
        { text: "A circle and a circle are the same shape.", isTrue: true, explanation: "Yes! Two circles match — that's the same shape.", emoji: "⭕" },
        { text: "A star and a triangle are the same shape.", isTrue: false, explanation: "No — a star has points all around, a triangle has just three sides. They're different!", emoji: "⭐" },
        { text: "Red and red are the same color.", isTrue: true, explanation: "Yes! Matching colors are the same.", emoji: "🔴" },
        {
          text: "A pattern has to repeat more than once to really be a pattern.",
          isTrue: true,
          explanation: "Yes — one time isn't a pattern yet; it needs to repeat so you can predict what comes next.",
          emoji: "🔁",
          minTrack: "explorers",
        },
        { text: "A square and a circle are the same shape.", isTrue: false, explanation: "No — a square has corners, a circle is round. They're different!", emoji: "🟦" },
      ],
    },
    {
      type: "chant",
      title: "Same or Different Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching shapes. The whole class echoes the response line back to you.",
      lines: [
        { call: "Red, red — same or different?", response: "Same, same, that's for certain!" },
        { call: "Circle, square — same or different?", response: "Different, different, plain to see!" },
        {
          call: "Star, star — same or different?",
          response: "Same, same, that's the key!",
          minTrack: "explorers",
        },
        { call: "Triangle, circle — same or different?", response: "Different, different, one two three!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Show two fingers of the same color and two of different colors — name each: \"same\" or \"different.\"",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we learned shape words, practiced telling same from different — the skill behind every pattern Vora finds — acted out the shapes, and chanted \"same\" and \"different\" together.",
      summarySimple: "Today we practiced telling same from different!",
    },
  ],
};

export const w3d3_fan_or_pan: Lesson = {
  ...meta("w3d3_fan_or_pan"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"fan\" and \"pan\" slowly, back to back, a few times, without explaining yet.",
      prompt: "fan... pan... fan... pan...",
    },
    {
      type: "concept",
      title: "A New Sound: f",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "Korean doesn't have the English \"f\" sound — it's brand new for your mouth!",
          textSimple: "The 'f' sound is brand new for you!",
        },
        {
          text: "Bite your bottom lip gently and blow air for \"f.\"",
          textSimple: "Bite your lip. Blow air. That's f!",
        },
        { text: "Let's listen very carefully and pick the word we hear." },
      ],
      teacherNote:
        "Unlike the l/r lesson, this contrast is genuinely absent from Korean (not just non-phonemic), so a quick mouth-shape demo here earns its keep before the listening activity.",
    },
    {
      type: "story",
      title: "Vora Watches a Mouth Shape",
      teacherNote:
        "Model biting your bottom lip for 'f' vs. pressing lips together for 'p' as you read panels 2-4, so kids see the mouth-shape difference Vora is describing.",
      panels: [
        {
          text: "Vora heard two words that sound almost the same: \"fan\" and \"pan.\"",
          textSimple: "Vora heard \"fan\" and \"pan.\"",
          emoji: "🪭",
        },
        {
          text: "\"Hmm, how can I tell them apart?\" wondered Vora. \"They both start with a puff of air.\"",
          textSimple: "\"How can I tell them apart?\" wondered Vora.",
          emoji: "🤔",
        },
        {
          text: "Vora watched closely and noticed something: for \"fan,\" the top teeth gently touch the bottom lip. For \"pan,\" the lips press together first, then pop open.",
          textSimple: "Vora noticed: 'fan' uses teeth on the lip. 'Pan' uses closed lips.",
          emoji: "👄",
        },
        {
          text: "\"Now I can tell!\" said Vora. \"Fan — teeth touch the lip. Pan — lips press together!\"",
          textSimple: "\"Now I can tell!\" said Vora.",
          emoji: "✅",
        },
        {
          text: "Vora wasn't magic — it just watched closely for a small difference in how each sound is made, exactly what YOU are about to practice.",
          textSimple: "No magic! Vora just watched closely.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What tiny difference did Vora notice between how 'fan' and 'pan' are made?",
          discussionNote: "For 'fan,' the top teeth touch the bottom lip; for 'pan,' the lips press together first — a small mouth-shape difference, not a guess.",
        },
        {
          question: "Try making the 'f' sound and the 'p' sound yourself — what does your mouth do differently?",
          discussionNote: "Open, hands-on discussion — have kids feel their own lips and teeth as they say each sound, reinforcing the story's observation.",
        },
      ],
    },
    {
      type: "movement",
      title: "Fan or Pan Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Fan — wave your hand in front of your face like a fan", emoji: "🪭" },
        { text: "Pan — pretend to flip food in a pan", emoji: "🍳" },
        { text: "Fine — give a big thumbs up", emoji: "👍" },
        { text: "Fork — pretend to eat with a fork", emoji: "🍴" },
        { text: "Pork — rub your tummy like it's yummy", emoji: "🥓" },
        { text: "Pull — pretend to pull open a heavy door", emoji: "🚪" },
      ],
    },
    {
      type: "activity",
      instructions: "Play each word once, and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: f or p?",
        targetSound: "/f/ vs /p/",
        teacherNote: "Korean has no /f/ phoneme; it's regularly approximated with /p/ or /h/ in loanwords.",
        pairs: [
          { wordA: { text: "fan", emoji: "🪭" }, wordB: { text: "pan", emoji: "🍳" } },
          { wordA: { text: "fine", emoji: "👍" }, wordB: { text: "pine", emoji: "🌲" } },
          { wordA: { text: "fork", emoji: "🍴" }, wordB: { text: "pork", emoji: "🥓" } },
          { wordA: { text: "full", emoji: "🈵" }, wordB: { text: "pull", emoji: "🚪" } },
        ],
      },
    },
    {
      type: "team_relay",
      title: "F or P Word Relay",
      instructions:
        "Split the class into teams. Read each prompt aloud and have the next team try it together before moving to the next team. Model the mouth shape for f or p as a class after each answer.",
      prompts: [
        { text: "Say a word that starts with the F sound, like 'fan'!", emoji: "🪭" },
        { text: "Say a word that starts with the P sound, like 'pan'!", emoji: "🍳" },
        { text: "Give a big thumbs up and say 'fine'!", emoji: "👍" },
        { text: "Pretend to eat with a fork and say 'fork'!", emoji: "🍴" },
        { text: "Rub your tummy and say 'pork'!", emoji: "🥓", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Fan or Pan Chant",
      instructions:
        "Say each call line slowly and clearly. The whole class echoes the response line back, listening for the f or p sound.",
      lines: [
        { call: "Fan, fan, listen well,", response: "Fan, fan, I can tell!" },
        { call: "Pan, pan, listen well,", response: "Pan, pan, I can tell!" },
        {
          call: "Fork or pork, which do you hear?",
          response: "Fork or pork, listen clear!",
          minTrack: "explorers",
        },
        { call: "Full or pull, tell me true,", response: "F or P, I hear you!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Say \"fan\" and \"pan\" one more time — thumbs up if you can hear the difference now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced listening for the f sound — brand new for Korean speakers, so lots of practice is completely normal — we acted out some of the words and chanted the f and p sounds together.",
      summarySimple: "Today we listened closely for the f sound!",
    },
  ],
};
