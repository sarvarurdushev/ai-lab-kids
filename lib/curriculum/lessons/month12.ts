import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m12_week1: Lesson = {
  ...meta("m12_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Mime shivering and hugging yourself, then ask: \"What do you see when it snows?\" Take a few quick guesses before revealing today's winter theme.",
      prompt: "Brrr, it's cold outside! ❄️",
    },
    {
      type: "vocab",
      title: "Winter & Christmas",
      words: [
        { word: "snow", emoji: "❄️" },
        { word: "snowman", emoji: "⛄" },
        { word: "gift", emoji: "🎁" },
        { word: "Christmas tree", emoji: "🎄" },
        { word: "Santa", emoji: "🎅", minTrack: "explorers" },
        { word: "cookie", emoji: "🍪" },
      ],
    },
    {
      type: "concept",
      title: "I Want ___ for Christmas!",
      bigIdeas: ["societal_impact"],
      lines: [
        {
          text: "Brrr! It's winter — time for snow, cookies, and a Christmas tree!",
          textSimple: "It's winter! Time for snow and cookies!",
        },
        { text: "I want a new game for Christmas. What do you want? \"I want ___ for Christmas.\"" },
        {
          text: "This year, you taught me so much! Like how a translator app helps people who speak different languages, how a wildlife camera spots an animal in the dark, and how a weather forecast guesses tomorrow's weather.",
          textSimple: "This year, you taught me so much about AI helpers!",
        },
        { text: "You even taught me that a map app finds the fastest way home by trying lots of paths!", minTrack: "explorers" },
      ],
      teacherNote:
        "\"I want ___ for Christmas\" is a fixed chunk kids will hear everywhere this season — teach it whole rather than breaking down \"want.\" After the third line, pause for open discussion: ask a few kids to name ANY AI helper from this year, not just this month's. Translator apps (Month 2), wildlife cameras (Month 6), and weather forecasts (Month 7) are given as examples here, but recycling data (Month 4), map apps (Month 8), and face recognition (Month 5) are equally good answers. This is a light recall, not a quiz — any honest connection back to an earlier month counts.",
    },
    {
      type: "movement",
      title: "Winter Wonderland Actions!",
      instructions:
        "Call out each winter word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Snow — wiggle your fingers down like falling snow", emoji: "❄️" },
        { text: "Snowman — stand round and stiff like a snowman", emoji: "⛄" },
        { text: "Gift — mime shaking a wrapped present by your ear", emoji: "🎁" },
        { text: "Christmas tree — stretch your arms out like branches", emoji: "🎄" },
        { text: "Santa — pat your belly and laugh \"ho ho ho\"", emoji: "🎅", minTrack: "explorers" },
        { text: "Cookie — mime taking a big bite", emoji: "🍪" },
      ],
    },
    {
      type: "activity",
      instructions: "As each step is placed, mime actually wrapping a pretend gift together as a class.",
      config: {
        engine: "sequence_builder",
        title: "Wrap a Gift",
        steps: [
          { text: "Put the toy in the box", emoji: "🧸" },
          { text: "Close the box", emoji: "📦" },
          { text: "Add wrapping paper", emoji: "🎁" },
          { text: "Add a bow", emoji: "🎀" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      type: "chant",
      title: "I Want ___ Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Christmas, Christmas, what do you see?", response: "I want a gift, right under the tree!" },
        { call: "Christmas, Christmas, what's your wish?", response: "I want a snowman, just like this!" },
        {
          call: "Christmas, Christmas, what's the treat?",
          response: "I want a cookie, yummy and sweet!",
          minTrack: "explorers",
        },
        {
          call: "Christmas, Christmas, tell me true —",
          response: "What do you want? It's up to you!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask a few kids: \"Tell me one AI helper you learned about this year — which month did we learn it in?\" Any month, any helper counts!",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned winter words, acted them out, the sentence \"I want ___ for Christmas,\" remembered AI helpers from all through the year, practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about Christmas wishes together.",
      summarySimple: "Today we learned winter words and sang about Christmas wishes with Vora!",
      homework: "Tell your family what you want for Christmas, and one AI helper you learned about this year.",
    },
  ],
};

export const m12_week2: Lesson = {
  ...meta("m12_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Tell the class this is Round 1 of the Year-End Vora Carnival — a sorting game mixing words all the way back from Month 1. Ask: \"Do you remember any of our old words?\"",
      prompt: "Welcome back to the Vora Carnival — Round 1! 🎉",
      promptSimple: "Round 1! Let's play! 🎉",
    },
    {
      type: "concept",
      title: "One Year of Sorting",
      bigIdeas: ["perception", "learning"],
      lines: [
        {
          text: "All year, I've been sorting pictures into groups — space things, animals, feelings, and more!",
          textSimple: "All year, I sorted pictures into groups!",
        },
        { text: "Let's see how many old words you still remember!" },
      ],
      teacherNote:
        "Quick, celebratory bridge into the cumulative review sort below — no new teaching, just a reminder that this is the same classification idea used all year (Months 1, 5, 6, 7, and 8's sorting games).",
    },
    {
      type: "movement",
      title: "Year-End Carnival Actions!",
      instructions:
        "Call out each word from the carnival sort and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Rocket — crouch low, then blast up on your toes", emoji: "🚀" },
        { text: "Airplane — stretch your arms out wide and zoom around", emoji: "✈️" },
        { text: "Sun — stretch your arms up high and shine", emoji: "☀️" },
        { text: "Lion — stomp and give a big roar", emoji: "🦁" },
        { text: "Elephant — swing your arm like a trunk", emoji: "🐘", minTrack: "explorers" },
        { text: "Train — chug your arms like train wheels", emoji: "🚂", minTrack: "explorers" },
        { text: "Car — pretend to steer a wheel fast", emoji: "🚗" },
      ],
    },
    {
      type: "activity",
      instructions: "Round 1: Sort review words from all through the year — is it something you'd see in the sky, or on the ground? Then play a second game to reinforce it.",
      config: {
        engine: "train_the_robot",
        title: "Review Sort",
        labelA: "In the Sky",
        labelB: "On the Ground",
        emojiA: "🌤️",
        emojiB: "🌍",
        items: [
          { word: "rocket", emoji: "🚀", bucket: "a" },
          { word: "airplane", emoji: "✈️", bucket: "a" },
          { word: "sun", emoji: "☀️", bucket: "a" },
          { word: "cloud", emoji: "☁️", bucket: "a", minTrack: "explorers" },
          { word: "lion", emoji: "🦁", bucket: "b" },
          { word: "elephant", emoji: "🐘", bucket: "b" },
          { word: "train", emoji: "🚂", bucket: "b" },
          { word: "car", emoji: "🚗", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Round 2: Look at the pattern — emoji from all through the year — and guess what comes next!",
      config: {
        engine: "pattern_predictor",
        title: "A Year of Patterns",
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
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      type: "chant",
      title: "Sky or Ground Chant",
      instructions:
        "Say each call line and have kids point up or down for sky or ground. The whole class echoes the response line back to you.",
      lines: [
        { call: "Rocket, rocket, where do you go?", response: "Up in the sky, blast off — go!" },
        { call: "Lion, lion, where do you roam?", response: "On the ground, that's my home!" },
        {
          call: "Airplane, airplane, where do you fly?",
          response: "Up, up, up in the sky!",
          minTrack: "explorers",
        },
        {
          call: "Car, car, where do you drive?",
          response: "On the ground, come along for the ride!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask a few kids: \"Which word was easy to remember, and which was tricky?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played two carnival rounds — a big review sort of words from all through the year, acted many of them out, a first round of year-long patterns, helped Vora follow clear step-by-step instructions, and chanted about sky and ground together.",
      summarySimple: "Today we played a fun Vora Carnival game, remembering old words together!",
      homework: "Tell your family one word you remembered from earlier this year.",
    },
  ],
};

export const m12_week3: Lesson = {
  ...meta("m12_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Tell the class this is Round 2 of the Year-End Vora Carnival — patterns mixing pictures from all through the year. Chant a quick pattern like \"star, pumpkin, star, pumpkin\" and ask what comes next.",
      prompt: "Round 2: A Year of Patterns! 🎉",
    },
    {
      type: "concept",
      title: "Patterns All Year Long",
      bigIdeas: ["reasoning"],
      lines: [
        {
          text: "All year, I've been finding patterns — stars and moons, lions and gifts, even sunny and cloudy days!",
          textSimple: "All year, I found patterns everywhere!",
        },
        { text: "Let's mix them all together and see what comes next!" },
      ],
      teacherNote:
        "Celebratory callback to the pattern-prediction thread used in Months 1, 4, 6, and 10 — no new teaching, just framing before the cumulative game.",
    },
    {
      type: "movement",
      title: "Pattern Party Actions!",
      instructions:
        "Call out each picture word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Star — reach up and twinkle your fingers", emoji: "⭐" },
        { text: "Pumpkin — make a big round shape with your arms", emoji: "🎃" },
        { text: "Lion — stomp and give a big roar", emoji: "🦁" },
        { text: "Gift — mime shaking a wrapped present by your ear", emoji: "🎁" },
        { text: "Sun — stretch your arms up high and shine", emoji: "☀️" },
        { text: "Moon — curl up small and sleepy", emoji: "🌙", minTrack: "explorers" },
      ],
    },
    {
      type: "activity",
      instructions: "Round 2: Look at the pattern — emoji from all through the year — and guess what comes next! Then play a second game to reinforce it.",
      config: {
        engine: "pattern_predictor",
        title: "A Year of Patterns",
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
      type: "activity",
      instructions: "Round 1: Sort review words from all through the year — is it something you'd see in the sky, or on the ground?",
      config: {
        engine: "train_the_robot",
        title: "Review Sort",
        labelA: "In the Sky",
        labelB: "On the Ground",
        emojiA: "🌤️",
        emojiB: "🌍",
        items: [
          { word: "rocket", emoji: "🚀", bucket: "a" },
          { word: "airplane", emoji: "✈️", bucket: "a" },
          { word: "sun", emoji: "☀️", bucket: "a" },
          { word: "cloud", emoji: "☁️", bucket: "a", minTrack: "explorers" },
          { word: "lion", emoji: "🦁", bucket: "b" },
          { word: "elephant", emoji: "🐘", bucket: "b" },
          { word: "train", emoji: "🚂", bucket: "b" },
          { word: "car", emoji: "🚗", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[0],
    },
    {
      type: "chant",
      title: "What Comes Next Chant",
      instructions:
        "Say each call line as a pattern, then have the class shout the missing word as the response.",
      lines: [
        { call: "Star, pumpkin, star, pumpkin — what comes next?", response: "Star! That's the pattern, it's no big test!" },
        { call: "Lion, gift, lion, gift — what comes next?", response: "Lion! We found the pattern best!" },
        {
          call: "Sun, sun, moon, moon, sun, sun — what comes next?",
          response: "Moon! We can see the pattern best!",
          minTrack: "explorers",
        },
        {
          call: "Patterns, patterns, all year through —",
          response: "We found them all, me and you!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Whole-class thumbs up if you can guess what comes next in the pattern: star, pumpkin, star, pumpkin, ___?",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we played two carnival rounds — a whole year of patterns, acted out some of the pictures, one big review sort of words from every month, practiced spotting real AI in everyday life, and chanted about what comes next together.",
      summarySimple: "Today we played a pattern game and found what comes next with Vora!",
      homework: "Make up your own pattern at home and ask your family what comes next.",
    },
  ],
};

export const m12_week4: Lesson = {
  ...meta("m12_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"van\" and \"ban\" slowly, back to back, a few times, without explaining yet.",
      prompt: "van... ban... van... ban...",
    },
    {
      type: "concept",
      title: "One Brand-New Sound",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "This year, our ears worked hard: light and right, fan and pan, think and sink...",
          textSimple: "This year, we practiced listening hard!",
        },
        {
          text: "Today's sound is brand new — we've never practiced it before: /v/!",
          textSimple: "Today's sound is brand new: /v/!",
        },
        {
          text: "Bite your bottom lip gently and buzz: vvvan. Now listen closely — van, or ban?",
          textSimple: "Buzz your lip: vvvan! Van, or ban?",
        },
        { text: "Korean doesn't have this exact sound, so even grown-ups keep practicing it — you're doing exactly what real language learners do!", minTrack: "explorers" },
      ],
      teacherNote:
        "A genuinely new contrast, not a review — unlike Month 3's l/r, Month 6's f/p, and Month 9's th/s, this is the year's only brand-new sound gap, saved for the final checkpoint. Korean has no /v/ phoneme and regularly approximates it with /b/ — expect kids to hear these as identical at first, same as with /f/ in Month 6.",
    },
    {
      type: "movement",
      title: "Van or Ban Actions!",
      instructions:
        "Call out each word and do the matching action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Van — pretend to drive a big van", emoji: "🚐" },
        { text: "Ban — cross your arms and shake your head no", emoji: "🚫" },
        { text: "Vest — pat your chest like zipping up a vest", emoji: "🦺" },
        { text: "Best — throw your arms up like a champion", emoji: "🥇" },
        { text: "Vet — pretend to gently pet an animal", emoji: "👩‍⚕️", minTrack: "explorers" },
        { text: "Bet — shrug and roll invisible dice", emoji: "🎲", minTrack: "explorers" },
      ],
    },
    {
      type: "activity",
      instructions: "Play each word once, and have kids point to or say the picture they heard. Since /v/ is brand new, expect this to take longer than the year's earlier review checkpoints — that's normal.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: van or ban?",
        targetSound: "/v/ vs /b/",
        teacherNote:
          "This is the year's bonus fifth Korean L1 sound gap — not covered in the foundations unit. Korean has no /v/ phoneme; it's regularly approximated with /b/, so expect real difficulty here even for kids who breezed through l/r, f/p, and th/s. Closes out the year's listening-discrimination thread.",
        pairs: [
          { wordA: { text: "van", emoji: "🚐" }, wordB: { text: "ban", emoji: "🚫" } },
          { wordA: { text: "vest", emoji: "🦺" }, wordB: { text: "best", emoji: "🥇" } },
          {
            wordA: { text: "vet", emoji: "👩‍⚕️" },
            wordB: { text: "bet", emoji: "🎲" },
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[0],
    },
    {
      ...AI_OR_NOT_SETS[0],
    },
    {
      type: "chant",
      title: "Van and Ban Chant",
      instructions:
        "Say each call line slowly, then have the class echo the response line back, making sure to buzz the /v/ sound.",
      lines: [
        { call: "Listen, listen, van or ban?", response: "Van, van, drive if you can!" },
        { call: "Listen, listen, vest or best?", response: "Vest, vest, zip up your chest!" },
        {
          call: "Listen, listen, vet or bet?",
          response: "Vet, vet, don't you forget!",
          minTrack: "explorers",
        },
        {
          call: "Listen, listen, we're at the end —",
          response: "We learned so much, our AI friend!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Say \"van\" and \"ban\" one more time — thumbs up if your ears can catch the difference. This is our last sound of the whole year!",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we met one brand-new sound, /v/, acted out van, vest, and vet, finished the year's whole listening journey — light and right, fan and pan, think and sink, and now van and ban — helped Vora follow clear step-by-step instructions, spotted real AI in everyday life one last time, and chanted van and ban together to close out the year.",
      summarySimple: "Today we learned a brand-new sound, /v/, and chanted van and ban with Vora!",
      homework: "Practice saying \"van\" and \"ban\" for your family tonight — see if they can hear the difference too!",
    },
  ],
};
