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
      type: "story",
      title: "Vora's Christmas Wish List",
      teacherNote:
        "Read each panel aloud, letting kids call out other AI helpers they remember from the year as you go — this story is meant to be interactive, not just read straight through. Pause before the final line to let the meaning land.",
      panels: [
        { text: "It was almost Christmas, and Vora was making a wish list — but not for toys. Vora wanted to remember all the AI helpers from this year!", textSimple: "Vora made a wish list of AI helpers from this year!", emoji: "🎄" },
        { text: "\"I want to remember the translator app,\" Vora wrote, \"that helped Grandma and her pen pal talk, even in different languages.\"", textSimple: "\"The translator app helped people talk in different languages!\"", emoji: "🌐" },
        { text: "\"And the wildlife camera that spotted a fox in the dark forest, using its night-vision sensor!\"", textSimple: "\"And the camera that spotted a fox in the dark!\"", emoji: "🦊" },
        { text: "\"And the weather forecast that guessed rain was coming, just by finding a pattern in cloudy days!\"", textSimple: "\"And the forecast that guessed rain was coming!\"", emoji: "🌧️" },
        { text: "\"Wait,\" Vora said, \"none of these helpers were magic. Each one just did ONE careful job really well.\"", textSimple: "\"None of these were magic — each did one job well!\"", emoji: "💡" },
        { text: "\"That's the best gift of all,\" said Vora, \"understanding how these helpers really work — not magic, just clever tools people built.\"", textSimple: "\"Understanding how they work is the best gift!\"", emoji: "🎁" },
      ],
      comprehensionQuestions: [
        { question: "Name one AI helper Vora remembered from this year. What job did it do?", discussionNote: "Any of: translator app (languages), wildlife camera (spotting animals), weather forecast (predicting weather), map app (finding routes), face recognition, or recycling sorting — the point is recall plus explaining its one job." },
        { question: "Why did Vora say understanding these helpers is \"the best gift\"?", discussionNote: "Open discussion — knowing how something works (rather than thinking it's magic) helps us use it wisely and not be afraid of it." },
      ],
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
      type: "stand_sit",
      title: "AI Helpers True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on — this is a fun review of AI helpers from all year!",
      statements: [
        { text: "Santa can guess every gift you want without ever asking you.", isTrue: false, explanation: "No — even in our stories, Santa needs to know what you want; AI helpers work the same way, needing real information, not magic guessing.", emoji: "🎅" },
        { text: "A translator app can help two people who speak different languages talk to each other.", isTrue: true, explanation: "Yes! We learned about this back in Month 2.", emoji: "🌐" },
        { text: "A weather forecast is a magic trick.", isTrue: false, explanation: "No — it's a careful guess based on patterns in past weather, like we learned in Month 7.", emoji: "🌦️" },
        { text: "A wildlife camera can use a sensor to spot an animal, even in the dark.", isTrue: true, explanation: "Yes! We learned this in Month 6.", emoji: "🦊", minTrack: "explorers" },
      ],
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
      type: "story",
      title: "Vora's Big Box of Sorting Games",
      teacherNote:
        "Read each panel aloud, and if you have time, let kids call out other sorting games they remember (Halloween spooky/not-spooky, hot/cold clothes) as you go. Pause before the final line to let the big idea land.",
      panels: [
        { text: "Vora found an old box full of picture cards — rockets, animals, weather, feelings — everything from the whole year!", textSimple: "Vora found an old box of pictures from the whole year!", emoji: "📦" },
        { text: "\"I remember sorting space things from Month 1,\" said Vora, \"and hot weather clothes from cold ones in Month 7!\"", textSimple: "\"I remember sorting space things, and hot and cold clothes!\"", emoji: "🚀" },
        { text: "Vora spread all the cards out and noticed something: every single sorting game worked the exact same way.", textSimple: "Vora noticed every sorting game worked the same way.", emoji: "🗂️" },
        { text: "\"Look at examples. Find what's similar. Put them in groups. That's it — that's ALL of sorting, no matter what the pictures show!\"", textSimple: "\"Look at examples. Find what's similar. Group them!\"", emoji: "💡" },
        { text: "Vora sorted the whole box in record time, humming happily. \"One trick, so many games!\"", textSimple: "Vora sorted the whole box fast! \"One trick, so many games!\"", emoji: "🎉" },
        { text: "It's not magic — the same simple idea (look, compare, group) works for rockets, weather, feelings, or anything else you want to sort.", textSimple: "No magic! Look, compare, and group — that's sorting.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "What one big idea did Vora notice connects ALL the sorting games from this year?", discussionNote: "Look at examples, notice what's similar, and put them into groups — the same basic process no matter the topic." },
        { question: "Which sorting game from this year was YOUR favorite — space things, animals, weather, feelings, or something else?", discussionNote: "Open discussion/recall — celebrate the range of the year's content." },
      ],
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
      type: "class_vote",
      title: "Favorite Game of the Year?",
      instructions:
        "Read the question aloud. Kids vote by raising hands for their favorite — a fun, reflective way to celebrate the whole year's games.",
      question: "Which game did you enjoy most this year: sorting into groups, finding patterns, or building sentences?",
      questionSimple: "Which game did you like best this year?",
      options: [
        { text: "Sorting", emoji: "🗂️" },
        { text: "Patterns", emoji: "🔮" },
        { text: "Sentences", emoji: "🧩" },
      ],
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
      type: "story",
      title: "Vora's Last Pattern of the Year",
      teacherNote:
        "Read each panel aloud, pausing after panel 2 to let kids study the three-part pattern themselves before Vora confirms it. A celebratory closer to the year's whole pattern-prediction thread.",
      panels: [
        { text: "On the last day of Pattern Club, Vora put up one final, extra-long pattern: star, pumpkin, gift, star, pumpkin, gift...", textSimple: "Vora made a long pattern: star, pumpkin, gift, star, pumpkin, gift...", emoji: "⭐" },
        { text: "The whole class leaned in. \"That's a pattern of THREE things repeating, not just two!\" someone noticed.", textSimple: "\"That's THREE things repeating, not two!\"", emoji: "🧩" },
        { text: "Vora smiled. \"You're right — patterns can repeat in twos, or threes, or even more!\"", textSimple: "Vora smiled. \"Patterns can repeat in twos or threes!\"", emoji: "😊" },
        { text: "\"Whether it's two things or three things repeating, the trick is always the same: look for what repeats, then guess what's next.\"", textSimple: "\"The trick is always the same: find what repeats!\"", emoji: "💡" },
        { text: "\"Star!\" the whole class shouted together for the missing piece — and they were exactly right.", textSimple: "\"Star!\" everyone shouted — and they were right!", emoji: "🌟" },
        { text: "It's not magic — from Month 1's shapes to today's carnival, finding what repeats and guessing what comes next is the same reasoning skill, every time.", textSimple: "No magic! Finding what repeats is the same skill, every time.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "How was today's final pattern different from earlier ones this year?", discussionNote: "It repeated in a group of THREE things (star, pumpkin, gift) instead of just two — but the same \"find what repeats\" trick still works." },
        { question: "Can YOU make up your own pattern with three things instead of two?", discussionNote: "Open, hands-on — invite a few kids to try a three-part pattern out loud." },
      ],
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
      type: "team_relay",
      title: "Year-Long Memory Relay!",
      instructions:
        "Split into two teams. Read each prompt aloud and let team members take turns calling out an answer from anywhere in the whole year — celebrate every correct memory!",
      prompts: [
        { text: "Name a word we learned about space!", emoji: "🚀" },
        { text: "Name an animal word from this year!", emoji: "🦁" },
        { text: "Name a weather word from this year!", emoji: "☀️" },
        { text: "Name a feeling word from this year!", emoji: "😊", minTrack: "explorers" },
        { text: "Name any AI helper we learned about this year!", emoji: "🤖", minTrack: "explorers" },
      ],
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
      type: "story",
      title: "Vora's Last New Sound",
      teacherNote:
        "Read each panel aloud, having the class buzz \"vvv\" along with Vora in panel 3. Since this is the very last lesson of the year, take a moment on panel 5 to let kids reminisce about the earlier sounds too.",
      panels: [
        { text: "On the very last day of the year, Vora heard a brand new sound rumble by: \"vvvvan!\" A moving van drove past the window.", textSimple: "Vora heard \"vvvvan!\" A van drove past!", emoji: "🚐" },
        { text: "\"Wait,\" said Vora, \"is that a van, or did someone say ban? My ears — I mean, my microphone sensor — need to listen extra carefully.\"", textSimple: "\"Van, or ban? I need to listen carefully!\"", emoji: "👂" },
        { text: "Vora buzzed its lip like the class practiced: \"vvv...\" and compared it to the sound outside.", textSimple: "Vora buzzed its lip: \"vvv...\" and listened.", emoji: "💨" },
        { text: "\"Yes! That buzzy /v/ sound only happens with a van, not a ban. My sound-sensor caught the tiny difference!\"", textSimple: "\"Yes! It's van! I caught the tiny difference!\"", emoji: "💡" },
        { text: "Looking back, Vora remembered every sound this year — light and right, fan and pan, think and sink, and now van and ban.", textSimple: "Vora remembered every sound from the whole year!", emoji: "📚" },
        { text: "It's not magic — careful listening, one sound at a time, all year long, is how ears (and microphones) become better sensors, step by step.", textSimple: "No magic! Careful listening all year made better ears.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "What tiny difference helped Vora tell \"van\" from \"ban\"?", discussionNote: "The buzzy /v/ sound (biting the bottom lip) versus the /b/ sound — a small mouth-shape difference that careful listening can catch." },
        { question: "Looking back at the WHOLE year, which sound (l/r, f/p, th/s, or v/b) was trickiest for you? Why do you think that is?", discussionNote: "Open, reflective discussion — celebrate progress across the whole year's listening-discrimination thread; there's no wrong answer." },
      ],
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
      type: "stand_sit",
      title: "A Year of Listening: True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on — a fun final review of the year's listening journey!",
      statements: [
        { text: "Korean has the exact same /v/ sound as English.", isTrue: false, explanation: "No — Korean doesn't have this exact sound, so it's brand new and takes practice, just like today!", emoji: "🚫" },
        { text: "Your ears are a kind of sensor.", isTrue: true, explanation: "Yes! Ears sense sound, just like other sensors sense movement or touch.", emoji: "👂" },
        { text: "Listening carefully gets easier with lots of practice.", isTrue: true, explanation: "Yes! That's why we practiced light/right, fan/pan, think/sink, and now van/ban all year.", emoji: "🎧" },
        { text: "Every sound in English also exists in Korean.", isTrue: false, explanation: "No — some English sounds, like /v/, don't have an exact match in Korean, so they take extra practice.", emoji: "🤔", minTrack: "explorers" },
      ],
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
