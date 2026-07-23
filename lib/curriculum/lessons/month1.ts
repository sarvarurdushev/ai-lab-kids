import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m1_week1: Lesson = {
  ...meta("m1_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Dim the lights if you can, and ask the class: \"What do you see at night, up in the sky?\" Let a few kids call out guesses before you reveal that today's theme is space.",
      prompt: "What's up in the sky? ✨",
      promptSimple: "Look up! Star or moon? ✨",
    },
    {
      type: "vocab",
      title: "Space Words",
      words: [
        { word: "star", emoji: "⭐" },
        { word: "moon", emoji: "🌙" },
        { word: "planet", emoji: "🪐", minTrack: "explorers" },
        { word: "rocket", emoji: "🚀" },
        { word: "sun", emoji: "☀️" },
        { word: "astronaut", emoji: "👨‍🚀" },
      ],
    },
    {
      type: "movement",
      title: "Space Actions!",
      instructions:
        "Call out each space word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Star — twinkle your fingers up high", emoji: "⭐" },
        { text: "Moon — curl into a sleepy crescent shape", emoji: "🌙" },
        { text: "Planet — spin around in a circle", emoji: "🪐", minTrack: "explorers" },
        { text: "Rocket — crouch down then blast up on tiptoes", emoji: "🚀" },
        { text: "Sun — stretch your arms out wide and bright", emoji: "☀️" },
        { text: "Astronaut — walk in slow, bouncy moon steps", emoji: "👨‍🚀" },
      ],
    },
    {
      type: "concept",
      title: "Vora Looks at the Stars",
      bigIdeas: ["reasoning", "learning"],
      lines: [
        {
          text: "Look up — the night sky is full of stars!",
          textSimple: "Look up! So many stars!",
        },
        {
          text: "I look at lots and lots of star pictures, one after another.",
          textSimple: "I look at many star pictures.",
        },
        {
          text: "I find a pattern — like star, moon, star, moon — the same way I sort other pictures.",
          textSimple: "I see a pattern: star, moon, star, moon!",
        },
        { text: "Let's find a pattern together!" },
      ],
      teacherNote:
        "This sets up the pattern_predictor activity below — keep \"pattern\" concrete: it just means \"what repeats.\" Big Idea: Representation & Reasoning (finding and extending a pattern), with a light Learning thread since Vora still needs lots of examples first, echoing Week 1 Day 3/Week 2 Day 2.",
    },
    {
      type: "story",
      title: "Vora and the Blinking Star",
      teacherNote:
        "Read each panel aloud, pausing after panel 3 to let kids guess bright or dim before revealing panel 4 — like the concept segment, the point is prediction from a pattern.",
      panels: [
        {
          text: "One night, Vora looked up and saw one twinkly star: bright, dim, bright, dim.",
          textSimple: "Bright, dim, bright, dim. Vora watched the star.",
          emoji: "⭐",
        },
        {
          text: "Vora watched it blink again and again, counting every bright and every dim.",
          textSimple: "Vora counted: bright, dim, bright...",
          emoji: "🔭",
        },
        {
          text: "\"What comes next,\" Vora wondered, \"bright, or dim?\"",
          textSimple: "\"Bright or dim next?\" wondered Vora.",
          emoji: "🤔",
        },
        {
          text: "\"Bright!\" said Vora — and the star blinked bright, just like Vora guessed!",
          textSimple: "\"Bright!\" said Vora. And it was!",
          emoji: "✨",
        },
        {
          text: "Vora wasn't magic — it just watched the pattern very closely, the same way we found patterns in the sky today.",
          textSimple: "No magic! Vora just found the pattern.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora guess the star would blink bright next?",
          discussionNote: "It watched the blinking pattern closely and noticed it repeated — bright, dim, bright, dim — not magic, just careful watching.",
        },
        {
          question: "Can you think of something else that blinks in a pattern, like a traffic light?",
          discussionNote: "Open discussion — the point is that finding a repeating pattern to predict what's next happens all around us, not just with stars.",
        },
      ],
    },
    {
      type: "activity",
      instructions: "Say each emoji in the sequence out loud together before guessing what comes next. Let the whole class predict before anyone taps an answer.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next in the Sky?",
        teacherNote:
          "Space is this year's first appearance of the pattern-prediction engine (also used in Months 6, 7, 10, and 12). Read the pattern aloud (\"star, moon, star, moon...\") before revealing the answer choices.",
        rounds: [
          { sequence: ["⭐", "🌙", "⭐", "🌙"], answer: "⭐", options: ["⭐", "🌙", "🚀"] },
          { sequence: ["🚀", "☀️", "🚀", "☀️"], answer: "🚀", options: ["🚀", "☀️", "🌙"] },
          { sequence: ["👨‍🚀", "🌙", "👨‍🚀", "🌙"], answer: "👨‍🚀", options: ["👨‍🚀", "🌙", "⭐"] },
          {
            sequence: ["⭐", "⭐", "🌙", "⭐", "⭐"],
            answer: "🌙",
            options: ["⭐", "🌙", "🚀"],
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[0],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[0],
    },
    {
      type: "team_relay",
      title: "Name a Space Thing!",
      instructions:
        "Split the class into two teams. Read each prompt aloud, then point to one team to shout out an answer before switching to the other team for the next prompt. Any reasonable answer counts!",
      prompts: [
        { text: "Name something you can see in the night sky!", emoji: "🌌" },
        { text: "Name something that blasts off into space!", emoji: "🚀" },
        { text: "Name something round and glowing up above!", emoji: "🌙" },
        { text: "Name something an astronaut wears or uses!", emoji: "👨‍🚀", minTrack: "explorers" },
        { text: "Name something that is very, very far away!", emoji: "🔭" },
      ],
    },
    {
      type: "chant",
      title: "Space Chant!",
      instructions:
        "Say each call line and hold up (or point to) the matching space picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Look up high, what do you see?", response: "It's a star, shining for me!" },
        { call: "Look up high, what's in the night?", response: "It's the moon, glowing bright!" },
        {
          call: "Look up high, what's going up?",
          response: "It's a rocket, blast-off, whoosh!",
          minTrack: "explorers",
        },
        { call: "Look up high, what's shining gold?", response: "It's the sun, warm to hold!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "\"It's a ___.\" — point to a space picture and have a student name it.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned six space words, acted them out, saw how Vora finds a pattern in star pictures, spotted real AI in everyday life, helped Vora follow clear instructions, and chanted about space together.",
      summarySimple: "Today we learned space words, moved our bodies, and sang a space chant with Vora!",
      homework: "Look up at the sky tonight (or a picture of it) and say \"It's a star!\" or \"It's the moon!\" in English.",
    },
  ],
};

export const m1_week2: Lesson = {
  ...meta("m1_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up two hands like a scale and ask: \"Is a rocket a space thing, or an earth thing?\" Let kids answer fast — this is just a warm-up guess before today's game.",
      prompt: "Space thing, or earth thing? 🚀🌍",
    },
    {
      type: "concept",
      title: "Vora Looks Again",
      bigIdeas: ["perception"],
      lines: [
        { text: "I look at a picture, just like you do." },
        {
          text: "Then I guess — is it a space thing, or an earth thing?",
          textSimple: "Is it a space thing or an earth thing?",
        },
      ],
      teacherNote:
        "Quick reminder before the sort — noticing a picture and guessing its category is Perception, the same skill behind Week 1's pattern-finding. Keep this to a few seconds; the real teaching happens in the game.",
    },
    {
      type: "story",
      title: "Vora Sorts a Surprise",
      teacherNote:
        "Read each panel aloud. Pause after panel 3 to let kids guess before Vora answers in panel 4 — the point is that looking closely, not guessing randomly, is how Vora sorts.",
      panels: [
        {
          text: "Vora looked at a picture: something round, gray, and covered in bumpy circles.",
          textSimple: "Round, gray, bumpy. What is it?",
          emoji: "🪨",
        },
        {
          text: "\"Is it a rock from the playground, or something from space?\" Vora looked very closely.",
          textSimple: "A playground rock? Or space? Vora looked closely.",
          emoji: "🔍",
        },
        {
          text: "Vora noticed craters, and no grass or dirt anywhere nearby — just black sky all around it.",
          textSimple: "Craters! Black sky! Not a playground.",
          emoji: "🌑",
        },
        {
          text: "\"It's the moon!\" said Vora. \"A space thing, not an earth thing.\"",
          textSimple: "\"It's the moon!\" said Vora.",
          emoji: "🌙",
        },
        {
          text: "Vora didn't guess randomly — it looked closely at the clues first, the same way we sorted space things from earth things today.",
          textSimple: "No random guess! Vora looked at clues first.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What clues helped Vora decide the picture was the moon, not a rock?",
          discussionNote: "The craters and the black sky — Vora looked closely at details before deciding, which is the perception skill from today's sorting game.",
        },
        {
          question: "What's one clue that would tell you something is an earth thing instead?",
          discussionNote: "Open discussion — look for things like grass, sky color, weather, or animals that only show up on earth.",
        },
      ],
    },
    {
      type: "movement",
      title: "Space or Earth Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Star — twinkle your fingers up high", emoji: "⭐" },
        { text: "Rocket — crouch down then blast up on tiptoes", emoji: "🚀" },
        { text: "Moon — curl into a sleepy crescent shape", emoji: "🌙" },
        { text: "Astronaut — walk in slow, bouncy moon steps", emoji: "👨‍🚀", minTrack: "explorers" },
        { text: "Tree — stand tall and stretch your branches out", emoji: "🌳" },
        { text: "Dog — pant and wag like a puppy", emoji: "🐶" },
        { text: "Book — open your hands like a book", emoji: "📖" },
      ],
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each picture goes before anyone taps — this is a shared sort, not an individual quiz. Then play a second game to reinforce it.",
      config: {
        engine: "train_the_robot",
        title: "Space Thing or Earth Thing?",
        labelA: "Space Thing",
        labelB: "Earth Thing",
        emojiA: "🚀",
        emojiB: "🌍",
        items: [
          { word: "star", emoji: "⭐", bucket: "a" },
          { word: "rocket", emoji: "🚀", bucket: "a" },
          { word: "moon", emoji: "🌙", bucket: "a" },
          { word: "astronaut", emoji: "👨‍🚀", bucket: "a" },
          { word: "tree", emoji: "🌳", bucket: "b" },
          { word: "dog", emoji: "🐶", bucket: "b" },
          { word: "book", emoji: "📖", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards. Say the English word out loud together whenever a word card flips.",
      config: {
        engine: "memory_match",
        title: "Space Word Match",
        pairs: [
          { word: "star", emoji: "⭐" },
          { word: "moon", emoji: "🌙" },
          { word: "planet", emoji: "🪐", minTrack: "explorers" },
          { word: "rocket", emoji: "🚀" },
          { word: "sun", emoji: "☀️" },
          { word: "astronaut", emoji: "👨‍🚀" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[0],
    },
    {
      type: "stand_sit",
      title: "Space or Earth — True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "A rocket is a space thing.", isTrue: true, explanation: "Yes! Rockets fly up into space.", emoji: "🚀" },
        { text: "A dog is a space thing.", isTrue: false, explanation: "No — dogs live here on earth!", emoji: "🐶" },
        { text: "You can see stars from earth at night.", isTrue: true, explanation: "Yes! We look up from earth to see them.", emoji: "⭐" },
        {
          text: "Every round object in the sky is a planet.",
          isTrue: false,
          explanation: "No — the moon and sun are round too, but they're not planets.",
          emoji: "🌕",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "chant",
      title: "Space or Earth Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "Star, star, what are you?", response: "A space thing, through and through!" },
        { call: "Rocket, rocket, tell me true —", response: "A space thing, blasting through!" },
        {
          call: "Tree, tree, what are you?",
          response: "An earth thing, right on cue!",
          minTrack: "explorers",
        },
        { call: "Dog, dog, tell me true —", response: "An earth thing, barking too!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Point to one picture from today's sort and ask a student: \"Space thing, or earth thing?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — sorting space things from earth things, matching space word pairs, and helping Vora follow clear step-by-step instructions, acted out space and earth words, and chanted about space vs. earth together.",
      summarySimple: "Today we sorted space and earth things, moved our bodies, and sang a chant with Vora!",
    },
  ],
};

export const m1_week3: Lesson = {
  ...meta("m1_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up two fingers and say: \"Today we flip cards and find matches — like a memory game!\" Mime flipping a card before starting.",
      prompt: "Ready to find a match? 🃏",
    },
    {
      type: "concept",
      title: "Vora Remembers",
      bigIdeas: ["learning"],
      lines: [
        {
          text: "The more I see a word and picture together, the better I remember them.",
          textSimple: "Practice helps me remember!",
        },
        { text: "Let's practice remembering space words together!" },
      ],
      teacherNote:
        "Brief reminder before the game — repeated exposure is how both Vora and kids get better at recognizing something, the Learning big idea from Week 1. Keep it to a couple of lines; the matching game is the real practice.",
    },
    {
      type: "story",
      title: "Vora Practices and Practices",
      teacherNote:
        "Read each panel aloud, emphasizing how many times Vora looks before it remembers — the repetition is the point, not a quick trick.",
      panels: [
        {
          text: "The first time Vora saw a rocket picture, it wasn't sure what to call it.",
          textSimple: "First time: Vora wasn't sure.",
          emoji: "🚀",
        },
        {
          text: "Vora looked at rocket pictures again... and again... and again.",
          textSimple: "Again, and again, and again!",
          emoji: "🔁",
        },
        {
          text: "By the tenth time, Vora didn't even have to think — \"Rocket!\" it said right away.",
          textSimple: "Tenth time: \"Rocket!\" right away!",
          emoji: "💡",
        },
        {
          text: "The more Vora practiced, the faster and surer it got — just like the memory game we play in class.",
          textSimple: "More practice, faster and surer!",
          emoji: "🎯",
        },
        {
          text: "Vora didn't wake up knowing space words — it learned them one practice at a time, the same way we do.",
          textSimple: "No magic — just lots of practice!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why did Vora get faster at naming the rocket picture over time?",
          discussionNote: "It practiced looking at the same picture many times — repeated practice is how both Vora and people get better at remembering something.",
        },
        {
          question: "What's something YOU got better at just by practicing it a lot?",
          discussionNote: "Open discussion — connect to riding a bike, tying shoes, or reading — the point is practice, not talent, builds skill.",
        },
      ],
    },
    {
      type: "movement",
      title: "Space Word Actions!",
      instructions:
        "Call out each space word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Star — twinkle your fingers up high", emoji: "⭐" },
        { text: "Moon — curl into a sleepy crescent shape", emoji: "🌙" },
        { text: "Planet — spin around in a circle", emoji: "🪐" },
        { text: "Rocket — crouch down then blast up on tiptoes", emoji: "🚀" },
        { text: "Sun — stretch your arms out wide and bright", emoji: "☀️" },
        { text: "Astronaut — walk in slow, bouncy moon steps", emoji: "👨‍🚀" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards. Say the English word out loud together whenever a word card flips. Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "Space Word Match",
        pairs: [
          { word: "star", emoji: "⭐" },
          { word: "moon", emoji: "🌙" },
          { word: "planet", emoji: "🪐", minTrack: "explorers" },
          { word: "rocket", emoji: "🚀" },
          { word: "sun", emoji: "☀️" },
          { word: "astronaut", emoji: "👨‍🚀" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each picture goes before anyone taps — this is a shared sort, not an individual quiz.",
      config: {
        engine: "train_the_robot",
        title: "Space Thing or Earth Thing?",
        labelA: "Space Thing",
        labelB: "Earth Thing",
        emojiA: "🚀",
        emojiB: "🌍",
        items: [
          { word: "star", emoji: "⭐", bucket: "a" },
          { word: "rocket", emoji: "🚀", bucket: "a" },
          { word: "moon", emoji: "🌙", bucket: "a" },
          { word: "astronaut", emoji: "👨‍🚀", bucket: "a" },
          { word: "tree", emoji: "🌳", bucket: "b" },
          { word: "dog", emoji: "🐶", bucket: "b" },
          { word: "book", emoji: "📖", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[1],
    },
    {
      type: "class_vote",
      title: "Which Space Word Was Trickiest?",
      instructions:
        "Read the question aloud. Let kids vote by raising their hands for the word they found hardest to remember today, or discuss as a class.",
      question: "Which space word was the hardest for you to remember today?",
      questionSimple: "Which space word was tricky today?",
      options: [
        { text: "Planet", emoji: "🪐" },
        { text: "Astronaut", emoji: "👨‍🚀" },
        { text: "Rocket", emoji: "🚀" },
        { text: "Star", emoji: "⭐" },
      ],
    },
    {
      type: "chant",
      title: "Memory Match Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "Flip, flip, what did you find?", response: "I found a star, shining and kind!" },
        { call: "Flip, flip, what's in your hand?", response: "I found the moon, over the land!" },
        {
          call: "Flip, flip, what did you see?",
          response: "I found a rocket, fast and free!",
          minTrack: "explorers",
        },
        { call: "Flip, flip, one more match —", response: "I found the sun, that's a catch!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask a pair: \"Which one did you match?\" and have them answer with the English word.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — a matching game with space words, sorting space things from earth things, and spotting real AI in everyday life, acted out space words, and chanted about our matches together.",
      summarySimple: "Today we played a matching game, moved our bodies, and sang a chant with Vora!",
    },
  ],
};

export const m1_week4: Lesson = {
  ...meta("m1_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Cup your hands around your eyes like binoculars and look around the room. Ask: \"What do you see?\" and take a few quick answers in any language before switching to English.",
      prompt: "What do you see? 👀",
    },
    {
      type: "concept",
      title: "I See...",
      bigIdeas: [],
      lines: [
        { text: "Look up at the sky in this picture." },
        { text: "I see a rocket!" },
        { text: "\"I see ___\" tells everyone exactly what I'm looking at, right now.", minTrack: "explorers" },
      ],
      teacherNote:
        "Builds directly to the sentence_builder activity below — say the full sentence \"I see a rocket\" naturally once before asking kids to build it tile by tile.",
    },
    {
      type: "story",
      title: "Vora Says What It Sees",
      teacherNote:
        "Read each panel aloud, then invite the class to say \"I see a ___\" about something in the room, just like Vora does at the end of the story.",
      panels: [
        {
          text: "Vora pointed its camera-eye up at the sky and said, \"I see a rocket!\"",
          textSimple: "\"I see a rocket!\" said Vora.",
          emoji: "🚀",
        },
        {
          text: "Then Vora turned and said, \"I see a star!\" and a moment later, \"I see the moon!\"",
          textSimple: "\"I see a star! I see the moon!\"",
          emoji: "🌙",
        },
        {
          text: "A friend asked, \"How do you know what you're looking at?\"",
          textSimple: "\"How do you know?\" asked a friend.",
          emoji: "❓",
        },
        {
          text: "\"I look very closely at the shape and the color,\" said Vora, \"then I say what I see, out loud.\"",
          textSimple: "\"I look closely, then I say it!\"",
          emoji: "🔍",
        },
        {
          text: "That's exactly what we do too — look closely at something, then say \"I see a ___\" so everyone knows what we're looking at.",
          textSimple: "We do that too — look, then say \"I see a ___\"!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora know what to call each thing it saw?",
          discussionNote: "It looked closely at shapes and colors first, then named what it saw out loud — the same noticing-then-naming idea behind the \"I see a ___\" sentence.",
        },
        {
          question: "Look around the room right now — what do YOU see?",
          discussionNote: "Open discussion — invite several kids to say \"I see a ___\" about a real object nearby.",
        },
      ],
    },
    {
      type: "movement",
      title: "Space Spotting Actions!",
      instructions:
        "Call out each space word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Star — twinkle your fingers up high", emoji: "⭐" },
        { text: "Moon — curl into a sleepy crescent shape", emoji: "🌙" },
        { text: "Rocket — crouch down then blast up on tiptoes", emoji: "🚀" },
        { text: "Sun — stretch your arms out wide and bright", emoji: "☀️" },
        { text: "Astronaut — walk in slow, bouncy moon steps", emoji: "👨‍🚀" },
        { text: "Planet — spin around in a circle", emoji: "🪐" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then invite a few kids to point at a different space picture and say their own \"I see a ___\" sentence out loud.",
      config: {
        engine: "sentence_builder",
        title: "I see a rocket.",
        words: [
          { text: "I", role: "subject" },
          { text: "see", role: "verb" },
          { text: "a rocket", role: "object" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[1],
    },
    {
      ...AI_OR_NOT_SETS[1],
    },
    {
      type: "team_relay",
      title: "I See a Space Thing!",
      instructions:
        "Split the class into two teams. Read each prompt aloud, then point to one team to say the full sentence together before switching to the other team for the next prompt.",
      prompts: [
        { text: "Point to the sky and say: I see a rocket!", emoji: "🚀" },
        { text: "Point to the sky and say: I see a star!", emoji: "⭐" },
        { text: "Point to the sky and say: I see the moon!", emoji: "🌙" },
        { text: "Point to the sky and say: I see an astronaut!", emoji: "👨‍🚀", minTrack: "explorers" },
        { text: "Point to the sky and say: I see the sun!", emoji: "☀️" },
      ],
    },
    {
      type: "chant",
      title: "I See It! Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching space picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Look way up, what do you spy?", response: "I see a rocket zoom in the sky!" },
        { call: "Look way up, what's shining bright?", response: "I see a star out at night!" },
        {
          call: "Look way up, round and pale —",
          response: "I see the moon, like a sail!",
          minTrack: "explorers",
        },
        { call: "Look way up, warm and gold —", response: "I see the sun, so bold!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "\"I see a ___.\" — each kid points to a space picture and finishes the sentence out loud.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today every kid built and said \"I see a ___\" about a space picture, acted out space words, helped Vora follow clear instructions, spotted real AI in everyday life, and chanted \"I see a ___\" together.",
      summarySimple: "Today we said \"I see a ___\", moved our bodies, and sang \"I see a ___\" with Vora!",
      homework: "Point to something at home and say \"I see a ___\" in English.",
    },
  ],
};
