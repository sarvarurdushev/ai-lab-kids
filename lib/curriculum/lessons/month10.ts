import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

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
      teacherScript: "Knock on the door (or your desk) three times and call out \"Trick or treat!\" in a fun spooky voice. Have kids echo it back before you start.",
      prompt: "Trick or treat! 🎃",
    },
    {
      type: "vocab",
      title: "Halloween Words",
      words: [
        { word: "pumpkin", emoji: "🎃" },
        { word: "ghost", emoji: "👻" },
        { word: "witch", emoji: "🧙", minTrack: "explorers" },
        { word: "bat", emoji: "🦇" },
        { word: "candy", emoji: "🍬" },
        { word: "costume", emoji: "🎭" },
      ],
    },
    {
      type: "concept",
      title: "Spooky or Not Spooky?",
      bigIdeas: ["learning"],
      lines: [
        {
          text: "Halloween is full of spooky things — ghosts, witches, bats!",
          textSimple: "Halloween has ghosts, witches, and bats!",
        },
        {
          text: "Remember how I learned to sort smart helpers from regular things, way back at the start? Today we're sorting again — spooky, or not spooky.",
          textSimple: "Today we sort things: spooky, or not spooky!",
        },
        {
          text: "I look at lots of examples to learn what counts as spooky. That's how I learn — from examples, every time.",
          textSimple: "I learn by looking at lots of examples!",
        },
      ],
      teacherNote:
        "This is a lighter, seasonal repeat of the classification loop from the very first foundations lesson (w1d3, 'Smart Helper or Regular Thing?') — call that back explicitly if the class remembers it. The AI big idea is the same all year: sort examples into two buckets, and that's a form of learning.",
    },
    {
      type: "movement",
      title: "Halloween Actions!",
      instructions:
        "Call out each Halloween word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Pumpkin — make a big round shape with your arms", emoji: "🎃" },
        { text: "Ghost — float your arms and go 'boo!'", emoji: "👻" },
        { text: "Witch — stir an invisible pot and cackle", emoji: "🧙", minTrack: "explorers" },
        { text: "Bat — flap your arms like wings and flutter around", emoji: "🦇" },
        { text: "Candy — mime unwrapping candy and popping it in your mouth", emoji: "🍬" },
        { text: "Costume — twirl around like you're showing off a costume", emoji: "🎭" },
      ],
    },
    {
      type: "activity",
      instructions: "As a class, decide together whether each picture is spooky or not spooky before anyone taps — narrate why out loud (\"a bat flies at night, that feels spooky!\") so kids hear the reasoning, not just the answer.",
      config: {
        engine: "train_the_robot",
        title: "Spooky or Not Spooky?",
        labelA: "Spooky",
        labelB: "Not Spooky",
        emojiA: "👻",
        emojiB: "☀️",
        items: [
          { word: "ghost", emoji: "👻", bucket: "a" },
          { word: "witch", emoji: "🧙", bucket: "a", minTrack: "explorers" },
          { word: "bat", emoji: "🦇", bucket: "a" },
          { word: "spider", emoji: "🕷️", bucket: "a" },
          { word: "sun", emoji: "☀️", bucket: "b" },
          { word: "flower", emoji: "🌸", bucket: "b" },
          { word: "puppy", emoji: "🐶", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[3],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[3],
    },
    {
      type: "chant",
      title: "I'm a ___ Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching Halloween picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Halloween, Halloween, who do I see?", response: "I'm a ghost, I'm a ghost, boo to thee!" },
        { call: "Halloween, Halloween, what's that spark?", response: "I'm a pumpkin, I'm a pumpkin, glowing in the dark!" },
        {
          call: "Halloween, Halloween, flying by night?",
          response: "I'm a bat, I'm a bat, out of sight!",
          minTrack: "explorers",
        },
        {
          call: "Halloween, Halloween, what will you be?",
          response: "I'm a witch, I'm a witch — come trick-or-treat with me!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask one table: \"What's your costume? Say 'I'm a ___.'\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned six Halloween words, acted them out, said \"Trick or treat!\" and \"I'm a ___,\" sorted spooky things from not-spooky things — the same learn-from-examples idea Vora's used all year — practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted \"I'm a ___\" together.",
      summarySimple: "Today we learned Halloween words, played dress-up, and said \"I'm a ___\" with Vora!",
      homework: "Tell a family member what costume you'd wear, using \"I'm a ___.\"",
    },
  ],
};

export const m10_week2: Lesson = {
  ...meta("m10_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Whisper \"boo!\" behind your hands, then reveal a big smile — a tiny, friendly scare to get everyone giggling before the games start.",
      prompt: "Boo! 👻 Just kidding — let's play!",
      promptSimple: "Boo! Let's play! 👻",
    },
    {
      type: "concept",
      title: "Finding Matches, Like Vora Does",
      bigIdeas: ["learning"],
      lines: [
        {
          text: "Remember — I learn by looking at lots of examples and finding what matches.",
          textSimple: "I learn by finding what matches!",
        },
        { text: "Let's practice finding matches together with our Halloween words!" },
      ],
      teacherNote:
        "Keep this short — the learning-from-examples idea was fully taught in Week 1. This is just a quick bridge line reframing the matching game as the same 'find what matches' skill before diving into the activity.",
    },
    {
      type: "movement",
      title: "Spooky Moves!",
      instructions:
        "Call out each Halloween word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Pumpkin — make a big round shape with your arms", emoji: "🎃" },
        { text: "Ghost — float your arms and go 'boo!'", emoji: "👻" },
        { text: "Witch — stir an invisible pot and cackle", emoji: "🧙", minTrack: "explorers" },
        { text: "Bat — flap your arms like wings and flutter around", emoji: "🦇" },
        { text: "Candy — mime unwrapping candy and popping it in your mouth", emoji: "🍬" },
        { text: "Costume — twirl around like you're showing off a costume", emoji: "🎭" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards at a time, saying the Halloween word out loud if they find a match. Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "Halloween Match-Up",
        pairs: [
          { word: "pumpkin", emoji: "🎃" },
          { word: "ghost", emoji: "👻" },
          { word: "witch", emoji: "🧙", minTrack: "explorers" },
          { word: "bat", emoji: "🦇" },
          { word: "candy", emoji: "🍬" },
          { word: "costume", emoji: "🎭" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Read the sequence out loud together (\"pumpkin, ghost, pumpkin, ghost...\") before asking what comes next — the pattern should feel obvious once it's spoken aloud.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next?",
        teacherNote:
          "Same 'find the pattern' skill as Vora's classification games — predicting what comes next from examples is part of the reasoning big idea, paired this month with learning.",
        rounds: [
          { sequence: ["🎃", "👻", "🎃", "👻"], answer: "🎃", options: ["🎃", "👻", "🦇"] },
          { sequence: ["👻", "🦇", "👻", "🦇"], answer: "👻", options: ["🎃", "👻", "🦇"] },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[3],
    },
    {
      type: "chant",
      title: "Halloween Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching Halloween picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Halloween, Halloween, what do you see?", response: "I'm a pumpkin, I'm a pumpkin, look at me!" },
        { call: "Halloween, Halloween, flying at night?", response: "I'm a bat, I'm a bat, out of sight!" },
        {
          call: "Halloween, Halloween, who says boo?",
          response: "I'm a ghost, I'm a ghost, boo to you!",
          minTrack: "explorers",
        },
        {
          call: "Halloween, Halloween, sweet to eat?",
          response: "It's candy, it's candy, oh so sweet!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Show one Halloween word card and see if everyone can say it out loud.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — matching Halloween words to pictures, acted out our Halloween words, guessing what comes next in a spooky pattern, helped Vora follow clear step-by-step instructions, and chanted \"I'm a ___\" together.",
      summarySimple: "Today we played Halloween games and acted out fun Halloween words with Vora!",
      homework: "Draw two Halloween pictures at home and ask a family member to match them to the English words.",
    },
  ],
};

export const m10_week3: Lesson = {
  ...meta("m10_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Draw a simple pumpkin, ghost, pumpkin shape on the board and ask kids to guess what comes next before you reveal it.",
      prompt: "🎃 👻 🎃 ... what comes next?",
    },
    {
      type: "concept",
      title: "Vora Predicts Patterns",
      bigIdeas: ["reasoning"],
      lines: [
        {
          text: "Remember — I look at examples to find a pattern, and then I can guess what comes next.",
          textSimple: "I look for a pattern. Then I guess what's next!",
        },
        { text: "Let's find some spooky patterns together!" },
      ],
      teacherNote:
        "Keep this short — the reasoning/pattern idea was already introduced this year (e.g. Month 8's pattern work). This is a quick bridge line before the game, not a full new teach.",
    },
    {
      type: "movement",
      title: "Spooky Actions!",
      instructions:
        "Call out each Halloween word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Pumpkin — make a big round shape with your arms", emoji: "🎃" },
        { text: "Ghost — float your arms and go 'boo!'", emoji: "👻" },
        { text: "Witch — stir an invisible pot and cackle", emoji: "🧙", minTrack: "explorers" },
        { text: "Bat — flap your arms like wings and flutter around", emoji: "🦇" },
        { text: "Candy — mime unwrapping candy and popping it in your mouth", emoji: "🍬" },
        { text: "Costume — twirl around like you're showing off a costume", emoji: "🎭" },
      ],
    },
    {
      type: "activity",
      instructions: "Read the sequence out loud together (\"pumpkin, ghost, pumpkin, ghost...\") before asking what comes next — the pattern should feel obvious once it's spoken aloud. Then play a second game to reinforce it.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next?",
        teacherNote:
          "Same 'find the pattern' skill as Vora's classification games — predicting what comes next from examples is part of the reasoning big idea, paired this month with learning.",
        rounds: [
          { sequence: ["🎃", "👻", "🎃", "👻"], answer: "🎃", options: ["🎃", "👻", "🦇"] },
          { sequence: ["👻", "🦇", "👻", "🦇"], answer: "👻", options: ["🎃", "👻", "🦇"] },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards at a time, saying the Halloween word out loud if they find a match.",
      config: {
        engine: "memory_match",
        title: "Halloween Match-Up",
        pairs: [
          { word: "pumpkin", emoji: "🎃" },
          { word: "ghost", emoji: "👻" },
          { word: "witch", emoji: "🧙", minTrack: "explorers" },
          { word: "bat", emoji: "🦇" },
          { word: "candy", emoji: "🍬" },
          { word: "costume", emoji: "🎭" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[4],
    },
    {
      type: "chant",
      title: "Spooky Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching Halloween picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Halloween, Halloween, who's the star?", response: "I'm a witch, I'm a witch, flying far!" },
        { call: "Halloween, Halloween, round and bright?", response: "I'm a pumpkin, I'm a pumpkin, glowing light!" },
        {
          call: "Halloween, Halloween, what's that treat?",
          response: "It's candy, it's candy, oh so sweet!",
          minTrack: "explorers",
        },
        {
          call: "Halloween, Halloween, who says boo?",
          response: "I'm a ghost, I'm a ghost, boo to you!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask what picture should come next in today's pattern, without showing the options.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — guessing what comes next in spooky patterns, matching Halloween words to pictures, acted out our Halloween words, practicing spotting real AI in everyday life, and chanted \"I'm a ___\" together.",
      summarySimple: "Today we found patterns, matched Halloween words, and played games with Vora!",
      homework: "Draw your own spooky pattern (like 🎃👻🎃👻) and ask a family member what comes next.",
    },
  ],
};

export const m10_week4: Lesson = {
  ...meta("m10_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Drape a hand towel or scarf over your head like a silly ghost and say \"I'm a ghost!\" in a wobbly voice. Ham it up — this whole lesson is meant to be goofy.",
      prompt: "I'm a ghost! Boo! 👻",
    },
    {
      type: "concept",
      title: "Any Costume Counts!",
      bigIdeas: ["learning"],
      lines: [
        {
          text: "Today there's no wrong answer — pick any costume you like, real or totally made up!",
          textSimple: "Pick any costume! Any answer is okay!",
        },
        { text: "Just put it in the sentence: \"I'm a ___.\"" },
        { text: "I'm a ghost. Silly, right? Now it's your turn!" },
        { text: "Explorers, try a two-word costume, like \"a scary witch\" or \"a silly pumpkin\"!", minTrack: "explorers" },
      ],
      teacherNote:
        "The silliest, lowest-stakes spotlight of the year — lean into it. Any costume answer is correct as long as the sentence frame is right, so let kids be as wild as they want.",
    },
    {
      type: "movement",
      title: "Costume Actions!",
      instructions:
        "Call out each Halloween word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Pumpkin — make a big round shape with your arms", emoji: "🎃" },
        { text: "Ghost — float your arms and go 'boo!'", emoji: "👻" },
        { text: "Witch — stir an invisible pot and cackle", emoji: "🧙", minTrack: "explorers" },
        { text: "Bat — flap your arms like wings and flutter around", emoji: "🦇" },
        { text: "Candy — mime unwrapping candy and popping it in your mouth", emoji: "🍬" },
        { text: "Costume — twirl around like you're showing off a costume", emoji: "🎭" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, then have each kid strike a costume pose and say it out loud, swapping in their own costume word if they like.",
      config: {
        engine: "sentence_builder",
        title: "I'm a ghost.",
        words: [
          { text: "I'm", role: "subject" },
          { text: "a ghost", role: "object" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      ...AI_OR_NOT_SETS[4],
    },
    {
      type: "chant",
      title: "I'm a ___ Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching Halloween picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Halloween, Halloween, who do I see?", response: "I'm a ghost, I'm a ghost, boo to thee!" },
        { call: "Halloween, Halloween, cast a spell?", response: "I'm a witch, I'm a witch, ring my bell!" },
        {
          call: "Halloween, Halloween, glowing bright?",
          response: "I'm a pumpkin, I'm a pumpkin, on Halloween night!",
          minTrack: "explorers",
        },
        {
          call: "Halloween, Halloween, now it's you —",
          response: "I'm a ___! Say your costume too!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Go around and have each kid say \"I'm a ___\" with any costume word — real or silly, all correct.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we built \"I'm a ghost,\" acted out our costume words, and practiced saying \"I'm a ___\" with any costume we could imagine — full circle from \"It's a book\" back in Week 1 — helped Vora follow clear step-by-step instructions, spotted real AI in everyday life, and chanted \"I'm a ___\" together.",
      summarySimple: "Today we said \"I'm a ___\" and dressed up as anything we wanted!",
    },
  ],
};
