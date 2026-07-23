import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m7_week1: Lesson = {
  ...meta("m7_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Look out the classroom window (or show a photo of the sky) and ask \"What's the weather today?\" Let a few kids answer in Korean before introducing the English words.",
      prompt: "What's the weather today? 🌤️",
      promptSimple: "Look outside! Sunny or rainy? 🌤️",
    },
    {
      type: "vocab",
      title: "Weather Words",
      words: [
        { word: "sunny", emoji: "☀️" },
        { word: "rainy", emoji: "🌧️" },
        { word: "cloudy", emoji: "☁️" },
        { word: "snowy", emoji: "❄️" },
        { word: "windy", emoji: "💨", minTrack: "explorers" },
        { word: "hot", emoji: "🥵" },
        { word: "cold", emoji: "🥶" },
      ],
    },
    {
      type: "movement",
      title: "Weather Actions!",
      instructions:
        "Call out each weather word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Sunny — stretch your arms up high", emoji: "☀️" },
        { text: "Rainy — wiggle your fingers down like rain", emoji: "🌧️" },
        { text: "Cloudy — float your arms slowly side to side", emoji: "☁️" },
        { text: "Windy — sway your whole body like a tree", emoji: "💨", minTrack: "explorers" },
        { text: "Snowy — shiver and hug yourself", emoji: "❄️" },
        { text: "Hot — fan your face fast", emoji: "🥵" },
        { text: "Cold — hug yourself and shiver", emoji: "🥶" },
      ],
    },
    {
      type: "concept",
      title: "Vora Guesses Tomorrow's Weather",
      bigIdeas: ["reasoning"],
      lines: [
        {
          text: "Yesterday was sunny, and today is sunny too — I wonder about tomorrow!",
          textSimple: "Sunny yesterday. Sunny today. Tomorrow too?",
        },
        {
          text: "A weather forecast isn't magic — it's a careful guess, made by looking at lots of past weather.",
          textSimple: "A forecast is a guess. Not magic!",
        },
        {
          text: "I look for a pattern, just like I do with pictures, and then I guess what comes next.",
          textSimple: "I find a pattern. Then I guess!",
        },
        { text: "Let's find the weather pattern together!" },
      ],
      teacherNote:
        "Sets up the pattern_predictor activity below — keep \"forecast\" concrete: it just means a careful guess based on a pattern, not magic. This is also the third time this year kids build an \"It's ___\" sentence (Month 1's space objects, Month 6's animals), so expect faster, more confident production and spend the time you save on the new weather vocabulary instead.",
    },
    {
      type: "story",
      title: "Vora's Rainy Day Guess",
      teacherNote:
        "Read each panel aloud, pointing to Vora's expression and the weather picture. Pause after panel 3 to ask \"What do YOU think happens next?\" before revealing panel 4 — the whole point of the story is to let kids predict before Vora does.",
      panels: [
        {
          text: "Monday: sunny. Tuesday: sunny. Wednesday: sunny. Vora watched the sky every single day.",
          textSimple: "Sunny, sunny, sunny. Vora watched the sky.",
          emoji: "☀️",
        },
        {
          text: "On Thursday, dark clouds rolled in. \"Hmm,\" said Vora, \"clouds like this usually mean rain is coming.\"",
          textSimple: "Thursday: clouds! Vora said, \"Rain is coming!\"",
          emoji: "☁️",
        },
        {
          text: "Vora looked back at all the cloudy days it remembered — every single one turned rainy by afternoon.",
          textSimple: "Vora remembered: cloudy days turn rainy.",
          emoji: "🧠",
        },
        {
          text: "\"I predict rain today,\" said Vora — and by lunchtime, it was pouring!",
          textSimple: "\"Rain today!\" said Vora. And it rained!",
          emoji: "🌧️",
        },
        {
          text: "Vora wasn't magic — it just remembered lots of days and found the pattern, the same way a real weather forecast works.",
          textSimple: "No magic! Vora just found a pattern.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora know it might rain, before any rain fell?",
          discussionNote: "It looked for a pattern in what usually happens after dark clouds — not magic, just remembering lots of examples.",
        },
        {
          question: "Has a grown-up ever guessed the weather by looking at the sky? How is that like what Vora did?",
          discussionNote: "Open discussion — the point is that pattern-based guessing isn't unique to computers; people do it too.",
        },
      ],
    },
    {
      type: "activity",
      instructions: "Read each weather icon aloud together (\"sunny, cloudy, sunny, cloudy...\") before guessing what comes next. Let the whole class predict out loud before anyone taps an answer.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next in the Weather?",
        teacherNote:
          "This is the clearest real-world match yet for the pattern-prediction engine: real weather forecasters do exactly this at a much bigger scale — look for a pattern in a lot of past weather to guess what's coming next. Say the weather word out loud for each icon as it's read, not just the emoji.",
        rounds: [
          { sequence: ["☀️", "☁️", "☀️", "☁️"], answer: "☀️", options: ["☀️", "☁️", "🌧️"] },
          { sequence: ["🌧️", "💨", "🌧️", "💨"], answer: "🌧️", options: ["🌧️", "💨", "❄️"] },
          { sequence: ["🥵", "🥶", "🥵", "🥶"], answer: "🥵", options: ["🥵", "🥶", "☀️"] },
          {
            sequence: ["❄️", "❄️", "☀️", "❄️", "❄️"],
            answer: "☀️",
            options: ["❄️", "☀️", "🌧️"],
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
      type: "stand_sit",
      title: "Weather True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "It can be sunny and rainy on the same day.", isTrue: true, explanation: "Yes! Weather can change during the day.", emoji: "🌦️" },
        { text: "Snow only falls when it's hot outside.", isTrue: false, explanation: "No — snow needs cold weather, not hot!", emoji: "❄️" },
        {
          text: "A weather forecast is always 100% certain.",
          isTrue: false,
          explanation: "No — forecasts are careful guesses, so they can sometimes be wrong.",
          emoji: "🤔",
          minTrack: "explorers",
        },
        { text: "Looking at clouds can help you guess if it will rain.", isTrue: true, explanation: "Yes! Dark, heavy clouds often mean rain is coming.", emoji: "☁️" },
      ],
    },
    {
      type: "chant",
      title: "Weather Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching weather picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Weather, weather, what do you see?", response: "It's sunny, it's sunny, look at me!" },
        { call: "Weather, weather, what's the news?", response: "It's rainy, it's rainy, grab your shoes!" },
        {
          call: "Weather, weather, tell me true —",
          response: "It's cloudy, it's cloudy, gray and blue!",
          minTrack: "explorers",
        },
        { call: "Weather, weather, what's today?", response: "Look outside and shout — hooray!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "\"It's ___ today.\" — point to a weather picture (or look outside) and have a student complete the sentence.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned seven weather words, acted them out, saw how Vora finds a pattern in past weather (the same way a real forecast is made), practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about the weather together.",
      summarySimple: "Today we learned weather words, moved our bodies, and sang a weather chant with Vora!",
      homework: "Ask a family member \"What's the weather?\" in Korean tonight, then answer them in English: \"It's ___ today.\"",
    },
  ],
};

export const m7_week2: Lesson = {
  ...meta("m7_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Mime shivering and hugging yourself for cold, then fan yourself and wipe your brow for hot. Ask \"Hot or cold?\" and have kids mime along before today's sorting game.",
      prompt: "Hot or cold? 🥵🥶",
    },
    {
      type: "concept",
      title: "Vora Looks Closely",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "A coat, a t-shirt — I look closely at each one before deciding where it goes.",
          textSimple: "I look closely at each one.",
        },
        {
          text: "That's called sorting, and it's exactly what you're about to do with today's clothes!",
          textSimple: "That's sorting! Let's sort clothes too.",
        },
      ],
      teacherNote:
        "Keep this brief — Vora and the idea of sorting-by-looking were already introduced back in Week 1's forecast talk. This is just a quick bridge into today's sorting game below.",
    },
    {
      type: "story",
      title: "Vora Sorts the Closet",
      teacherNote:
        "Read each panel aloud, pointing to each piece of clothing as Vora considers it. Pause after panel 3 to ask the class what THEY think — hot weather or cold weather — before revealing Vora's answer in panel 4.",
      panels: [
        { text: "Vora opened a closet stuffed completely full — shorts, coats, sandals, and boots, all mixed together!", textSimple: "A closet full of mixed-up clothes!", emoji: "🚪" },
        { text: "Vora picked up a big, fluffy coat. \"Thick and warm — this one's for cold weather,\" Vora said, setting it in the cold pile.", textSimple: "\"Thick coat — cold weather!\" said Vora.", emoji: "🧥" },
        { text: "Then Vora found a soft, thick scarf. Hmm — is a scarf for staying cool, or staying warm?", textSimple: "A scarf... cool, or warm?", emoji: "🧣" },
        { text: "Vora looked closely: it was warm wool, made for wrapping snugly around a neck to keep heat in. \"Cold weather, for sure!\" said Vora.", textSimple: "\"It traps heat — cold weather!\" said Vora.", emoji: "❄️" },
        { text: "Vora wasn't guessing by size alone — it looked closely at what each piece of clothing was really made to do, then decided.", textSimple: "Vora looked closely, then decided. Not a guess!", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "What clue helped Vora decide the scarf was for cold weather, not hot weather?", discussionNote: "It looked closely at what the scarf was made for — trapping warmth around the neck — rather than just guessing by size." },
        { question: "Can you think of a piece of clothing that's tricky to sort into just 'hot' or 'cold'?", discussionNote: "Open discussion — e.g. a light long-sleeve shirt — reinforces that careful sorting sometimes takes real thought." },
      ],
    },
    {
      type: "movement",
      title: "Hot & Cold Clothes Actions!",
      instructions:
        "Call out each clothing word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Shorts — pat your legs like putting on shorts", emoji: "🩳" },
        { text: "T-shirt — pull an imaginary t-shirt over your head", emoji: "👕" },
        { text: "Sandals — wiggle your toes", emoji: "👡" },
        { text: "Coat — hug yourself and zip up an imaginary coat", emoji: "🧥" },
        { text: "Scarf — wrap your hands around your neck like a scarf", emoji: "🧣" },
        { text: "Boots — stomp your feet like wearing big boots", emoji: "👢" },
      ],
    },
    {
      type: "activity",
      instructions: "As a class, decide together whether each clothing item is for hot or cold weather before tapping — then have kids mime actually putting it on (shiver and hug yourself for coats and scarves, fan yourself for shorts and sandals). This doubles nicely as a movement break. Then play a second game to reinforce it.",
      config: {
        engine: "train_the_robot",
        title: "Hot Weather Clothes or Cold Weather Clothes?",
        labelA: "Hot Weather",
        labelB: "Cold Weather",
        emojiA: "🥵",
        emojiB: "🥶",
        items: [
          { word: "shorts", emoji: "🩳", bucket: "a" },
          { word: "t-shirt", emoji: "👕", bucket: "a" },
          { word: "sandals", emoji: "👡", bucket: "a" },
          { word: "sunglasses", emoji: "🕶️", bucket: "a", minTrack: "explorers" },
          { word: "coat", emoji: "🧥", bucket: "b" },
          { word: "scarf", emoji: "🧣", bucket: "b" },
          { word: "boots", emoji: "👢", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, then have the whole class act out being in sunny weather (shielding their eyes, big smile) as they say it together.",
      config: {
        engine: "sentence_builder",
        title: "It's sunny today.",
        words: [
          { text: "It's", role: "subject" },
          { text: "sunny", role: "object" },
          { text: "today", role: "other" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[0],
    },
    {
      type: "team_relay",
      title: "Hot or Cold Clothes Relay!",
      instructions:
        "Split the class into two (or more) teams. Read each prompt aloud and have the next player from each team call out a clothing word that fits — award a point for every correct answer, then move to the next prompt.",
      prompts: [
        { text: "Name something you wear when it's HOT outside!", emoji: "🥵" },
        { text: "Name something you wear when it's COLD outside!", emoji: "🥶" },
        { text: "Name something you'd wear to the beach!", emoji: "🏖️" },
        { text: "Name something you'd wear in the snow!", emoji: "❄️", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "It's Sunny Today Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching weather or clothes picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Weather, weather, what do you see?", response: "It's sunny today, warm as can be!" },
        { call: "Weather, weather, is it hot?", response: "It's hot today — shorts, I've got!" },
        {
          call: "Weather, weather, feeling cold?",
          response: "It's cold today — put on your coat!",
          minTrack: "explorers",
        },
        { call: "Weather, weather, what's today?", response: "It's sunny today — hip hip hooray!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Is a coat hot weather or cold weather?\"",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we acted out hot and cold weather clothes, sorted clothes into hot weather and cold weather, played a second game building the sentence \"It's sunny today,\" helped Vora follow clear step-by-step instructions, and chanted about the weather together.",
      summarySimple: "Today we sorted hot and cold clothes and chanted about the weather!",
      homework: "Pick out your own clothes for tomorrow's weather and say if they're \"hot weather\" or \"cold weather\" clothes, in English.",
    },
  ],
};

export const m7_week3: Lesson = {
  ...meta("m7_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Draw a big sun on the board (or hold up a sunny-weather photo) and ask \"What's the weather?\" Let kids call out \"sunny!\" before building today's sentence.",
      prompt: "What's the weather? ☀️",
    },
    {
      type: "concept",
      title: "Vora Builds a Sentence",
      bigIdeas: [],
      lines: [
        {
          text: "Sunny, cloudy, rainy — whatever the weather, there's always a sentence for it: \"It's ___ today.\"",
          textSimple: "There's always a sentence: \"It's ___ today.\"",
        },
        { text: "Let's build it together, one word at a time!" },
      ],
      teacherNote:
        "Just a quick bridge into today's sentence-building game — the \"It's ___\" pattern doesn't need re-teaching by now (see Week 1), this is pure practice.",
    },
    {
      type: "story",
      title: "Vora Trains a Little Robot",
      teacherNote:
        "Read each panel aloud. Pause after panel 3 to ask the class why THEY think the little robot got it wrong, before revealing Vora's fix in panel 4 — this is a fun, concrete parallel to the train_the_robot game the class has already played.",
      panels: [
        { text: "Vora had a little robot friend who was learning to sort clothes into hot weather or cold weather.", textSimple: "A little robot was learning to sort clothes.", emoji: "🤖" },
        { text: "Vora showed the robot lots of examples: shorts (hot!), coats (cold!), sandals (hot!), boots (cold!).", textSimple: "Vora showed lots of examples: shorts, coats, sandals, boots.", emoji: "🧥" },
        { text: "Then the robot tried alone with something new — swimming goggles. \"Cold weather?\" guessed the robot. Oops — goggles are for a hot day at the pool!", textSimple: "The robot guessed goggles wrong!", emoji: "🥽" },
        { text: "Vora didn't scold the little robot — it just showed more hot-weather examples: sunglasses, flip-flops, a swimsuit.", textSimple: "Vora showed more hot-weather examples.", emoji: "🕶️" },
        { text: "Next time the robot saw the goggles, it got it right away: \"Hot weather!\"", textSimple: "Next time: \"Hot weather!\" Correct!", emoji: "✅" },
        { text: "That's how real computer programs learn to sort too — lots of examples, a few mistakes, and more practice, never a magic instant answer.", textSimple: "No magic — just lots of examples and practice.", emoji: "💡" },
      ],
      comprehensionQuestions: [
        { question: "Why did the little robot get the swimming goggles wrong the first time?", discussionNote: "It hadn't seen enough hot-weather examples yet — it needed more practice, just like any learner." },
        { question: "What would you show the robot to help it learn faster next time?", discussionNote: "Open discussion — connects to the idea that more and better examples help a learner make better guesses." },
      ],
    },
    {
      type: "movement",
      title: "Hot & Cold Clothes Actions!",
      instructions:
        "Call out each clothing word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Shorts — pat your legs like putting on shorts", emoji: "🩳" },
        { text: "T-shirt — pull an imaginary t-shirt over your head", emoji: "👕" },
        { text: "Sandals — wiggle your toes", emoji: "👡" },
        { text: "Coat — hug yourself and zip up an imaginary coat", emoji: "🧥" },
        { text: "Scarf — wrap your hands around your neck like a scarf", emoji: "🧣" },
        { text: "Boots — stomp your feet like wearing big boots", emoji: "👢" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, then have the whole class act out being in sunny weather (shielding their eyes, big smile) as they say it together. Then play a second game to reinforce it.",
      config: {
        engine: "sentence_builder",
        title: "It's sunny today.",
        words: [
          { text: "It's", role: "subject" },
          { text: "sunny", role: "object" },
          { text: "today", role: "other" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "As a class, decide together whether each clothing item is for hot or cold weather before tapping — then have kids mime actually putting it on (shiver and hug yourself for coats and scarves, fan yourself for shorts and sandals). This doubles nicely as a movement break.",
      config: {
        engine: "train_the_robot",
        title: "Hot Weather Clothes or Cold Weather Clothes?",
        labelA: "Hot Weather",
        labelB: "Cold Weather",
        emojiA: "🥵",
        emojiB: "🥶",
        items: [
          { word: "shorts", emoji: "🩳", bucket: "a" },
          { word: "t-shirt", emoji: "👕", bucket: "a" },
          { word: "sandals", emoji: "👡", bucket: "a" },
          { word: "sunglasses", emoji: "🕶️", bucket: "a", minTrack: "explorers" },
          { word: "coat", emoji: "🧥", bucket: "b" },
          { word: "scarf", emoji: "🧣", bucket: "b" },
          { word: "boots", emoji: "👢", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[1],
    },
    {
      type: "class_vote",
      title: "Favorite Weather Vote!",
      instructions:
        "Ask the question aloud. Kids vote by raising their hand for their favorite option, or simply discuss as a class — there's no single right answer.",
      question: "What's your favorite kind of weather?",
      options: [
        { text: "Sunny", emoji: "☀️" },
        { text: "Rainy", emoji: "🌧️" },
        { text: "Cloudy", emoji: "☁️" },
        { text: "Snowy", emoji: "❄️" },
      ],
    },
    {
      type: "chant",
      title: "Sunny or Rainy Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching weather picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Weather, weather, what do you see?", response: "It's sunny today, look and see!" },
        { call: "Weather, weather, hear the rain?", response: "It's rainy today, again and again!" },
        {
          call: "Weather, weather, clear and bright?",
          response: "It's sunny today, what a sight!",
          minTrack: "explorers",
        },
        { call: "Weather, weather, wet today?", response: "It's rainy today, hip hip hooray!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Is it sunny or rainy today?\" and check whether their answer matches the real weather.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we acted out hot and cold weather clothes, played three activities — building the sentence \"It's sunny today\" one word at a time, sorting clothes into hot weather and cold weather, and spotting real AI in everyday life — and chanted about sunny and rainy weather together.",
      summarySimple: "Today we sorted clothes, built a weather sentence, and chanted together!",
      homework: "Look outside tonight and try building today's weather sentence with a family member.",
    },
  ],
};

export const m7_week4: Lesson = {
  ...meta("m7_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Open the blinds or point to a window and ask \"What's it like outside right now?\" Let a few kids answer in Korean before starting today's English sentence.",
      prompt: "What's it like outside? 🪟",
      promptSimple: "Look outside! Sunny? Rainy? 🪟",
    },
    {
      type: "concept",
      title: "Check the Sky!",
      bigIdeas: [],
      lines: [
        { text: "Look outside the window with me — what do you see?" },
        {
          text: "However the sky looks, there's a sentence for it: \"It's ___ today.\"",
          textSimple: "There's a sentence for every sky: \"It's ___ today.\"",
        },
        { text: "In Korean, weather doesn't need a subject — but English always keeps a little word: \"It.\"", minTrack: "explorers" },
        {
          text: "Let's build it together, then check if it's really true outside!",
          textSimple: "Let's build it, then check outside!",
        },
      ],
      teacherNote:
        "This is the most immediately real-world-checkable sentence pattern in the curriculum — after building it, look out the window together and see if the class's sentence is actually true today. Also a good moment to flag that English's \"It's\" has no direct Korean equivalent: Korean weather sentences don't need a placeholder subject at all, so kids may want to skip straight to the weather word. Point out that English always keeps \"It's,\" even though nothing specific is \"it.\"",
    },
    {
      type: "story",
      title: "Vora Checks the Real Sky",
      teacherNote:
        "Read each panel aloud. Pause after panel 3 to ask the class to guess what the real sky looks like today before revealing panel 4 — the point is that even a careful guess is only a guess until you check it against reality.",
      panels: [
        { text: "All month, Vora had learned to spot weather patterns — like how cloudy days often turn rainy.", textSimple: "Vora learned to spot weather patterns all month.", emoji: "☁️" },
        { text: "Today, Vora looked at the pattern so far and guessed: \"I think it's cloudy today!\"", textSimple: "\"I think it's cloudy today!\" guessed Vora.", emoji: "🤔" },
        { text: "But instead of just trusting the guess, Vora did something smart — it looked out the real window to check.", textSimple: "Vora checked the real window to be sure.", emoji: "🪟" },
        { text: "Surprise! It was actually sunny outside — the pattern didn't hold this time.", textSimple: "Surprise — it was sunny, not cloudy!", emoji: "☀️" },
        { text: "Vora wasn't upset. \"Good thing I checked,\" it said. \"A guess is only a guess until you look for yourself.\"", textSimple: "\"Good thing I checked!\" said Vora.", emoji: "😊" },
        { text: "Even careful guesses can be wrong sometimes — that's why checking the real answer always matters.", textSimple: "Checking the real answer always matters!", emoji: "✅" },
      ],
      comprehensionQuestions: [
        { question: "Why did Vora look out the real window instead of just trusting its guess?", discussionNote: "Checking a guess against reality matters — even a careful, pattern-based prediction can turn out wrong sometimes." },
        { question: "Has one of your own guesses ever turned out to be wrong? What did you do next?", discussionNote: "Open discussion — normalizes that predictions/guesses can be wrong and shows checking is a healthy next step." },
      ],
    },
    {
      type: "movement",
      title: "Weather Review Actions!",
      instructions:
        "Call out each weather word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Sunny — stretch your arms up high", emoji: "☀️" },
        { text: "Rainy — wiggle your fingers down like rain", emoji: "🌧️" },
        { text: "Cloudy — float your arms slowly side to side", emoji: "☁️" },
        { text: "Snowy — shiver and hug yourself", emoji: "❄️" },
        { text: "Hot — fan your face fast", emoji: "🥵" },
        { text: "Cold — hug yourself and shiver", emoji: "🥶" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time. Once it's complete, look out the window together — is it actually rainy today? If not, rebuild the sentence with the real weather word instead!",
      config: {
        engine: "sentence_builder",
        title: "It's rainy today.",
        words: [
          { text: "It's", role: "subject" },
          { text: "rainy", role: "object" },
          { text: "today", role: "other" },
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
      title: "Real Weather Relay!",
      instructions:
        "Split the class into two (or more) teams. Read each prompt aloud and have the next player from each team call out an answer — award a point for every reasonable answer, then move to the next prompt.",
      prompts: [
        { text: "Name a weather word for a sunny day!", emoji: "☀️" },
        { text: "Name a weather word for a cold day!", emoji: "🥶" },
        { text: "Name a clue that tells you rain might be coming!", emoji: "☁️" },
        { text: "Say today's real weather in one English word!", emoji: "🪟", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Weather Review Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching weather picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Weather, weather, white and cold?", response: "It's snowy today, so I'm told!" },
        { call: "Weather, weather, sweaty and bright?", response: "It's hot today, day and night!" },
        {
          call: "Weather, weather, shiver and shake?",
          response: "It's cold today, for goodness sake!",
          minTrack: "explorers",
        },
        { call: "Weather, weather, what's today?", response: "Check outside and shout — hooray!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Go around and have every child say \"It's ___ today\" using today's real weather.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we acted out weather words one more time, built \"It's ___ today,\" checked it against the real sky outside our window, helped Vora follow clear step-by-step instructions, spotted real AI in everyday life, and chanted about the weather together.",
      summarySimple: "Today we said weather words, built a sentence, and checked the real sky!",
      homework: "Check the weather every day this week and greet a family member with \"It's ___ today!\" in English.",
    },
  ],
};
