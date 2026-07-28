import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w5d1_yummy_food: Lesson = {
  ...meta("w5d1_yummy_food"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Do you like kimchi?\" Give a thumbs up yourself and encourage kids to react before teaching the sentence frame.",
      prompt: "Do you like kimchi? 🥬",
    },
    {
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "One word from each of the last four weeks, so nothing from the start of Foundations goes stale before today's brand-new food words arrive. Read each word together BEFORE tapping — the tap should confirm a guess, not replace one. If more than two need the picture to land, that's worth a quick revisit before pushing ahead into today's vocab.",
      words: [
        { word: "friend", emoji: "🧑‍🤝‍🧑", fromMonth: 1 },
        { word: "cat", emoji: "🐱", fromMonth: 2 },
        { word: "red", emoji: "🔴", fromMonth: 3 },
        { word: "circle", emoji: "⭕", fromMonth: 3 },
        { word: "five", emoji: "5️⃣", fromMonth: 4, minTrack: "explorers" },
      ],
    },
    {
      type: "vocab",
      title: "Food",
      words: [
        { word: "apple", emoji: "🍎" },
        { word: "rice", emoji: "🍚" },
        { word: "bread", emoji: "🍞" },
        { word: "milk", emoji: "🥛" },
        { word: "egg", emoji: "🥚" },
        { word: "kimchi", emoji: "🥬" },
        { word: "bibimbap", emoji: "🍲" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing the words on screen. This checks listening to today's brand-new food words, not reading, so keep the vocab hidden until after each round.",
      commands: [
        { text: "Point to the rice.", steps: 1, emoji: "🍚" },
        { text: "Pretend to eat an apple, then rub your tummy.", steps: 2, emoji: "🍎" },
        { text: "Crack an imaginary egg, stir it in a bowl, then pretend to eat it.", steps: 3, emoji: "🥚" },
        {
          text: "Pretend to eat bibimbap, fan your mouth like it's spicy, then give a big thumbs up.",
          steps: 3,
          emoji: "🍲",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response: this proves the class understood rice, apple, egg, and bibimbap before anyone has to say a full sentence about them, so resist translating into Korean even if a child hesitates — model the action bigger instead. Grade it live: if the class nails the 1-step command instantly, skip ahead to the 3-step ones rather than running all four in order.",
    },
    {
      type: "concept",
      title: "I Like...",
      bigIdeas: [],
      lines: [{ text: "I like kimchi. I like bibimbap. What do you like?" }],
      teacherNote:
        "Kimchi and bibimbap are here on purpose: kids already have full L1 confidence with these words, so the new work is only the English sentence frame around a familiar concept — not the vocabulary itself.",
    },
    {
      type: "story",
      title: "Vora Tries to Guess",
      teacherNote:
        "Read this before the movement game — it's a light, no-jargon preview of tomorrow's fruit-and-vegetable sorting lesson, so keep the tone playful rather than explaining \"learning\" as a formal idea yet.",
      panels: [
        {
          text: "All week, Vora watched what kids picked for snack time — lots of rice, lots of apples, and quite a bit of kimchi!",
          textSimple: "Vora watched snack time all week.",
          emoji: "🍚",
        },
        {
          text: "\"I bet the next friend picks rice too!\" said Vora — and sure enough, right again!",
          textSimple: "\"Rice again!\" said Vora. Right!",
          emoji: "🎯",
        },
        {
          text: "But then Vora guessed a friend would love kimchi... and that friend made a big \"no thank you!\" face.",
          textSimple: "Vora guessed kimchi. \"No thanks!\" said the friend.",
          emoji: "🥬",
        },
        {
          text: "\"Hmm,\" said Vora. \"Lots of friends like the same foods... but not every single friend likes the exact same things.\"",
          textSimple: "Not everyone likes the same food!",
          emoji: "🤔",
        },
        {
          text: "Vora wasn't magic — it just noticed what LOTS of kids liked. But every person is a little different, so the best way to really know is just to ask: \"Do you like it?\"",
          textSimple: "No magic! Vora just noticed patterns — but asking is best.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why was Vora wrong about the kimchi guess?",
          discussionNote: "Vora noticed a pattern in what lots of kids liked, but one person can still be different from the pattern — noticing a pattern isn't the same as knowing for sure.",
        },
        {
          question: "What's a food YOU like that might surprise Vora?",
          discussionNote: "Open discussion — celebrate that everyone's favorite foods can be a little different.",
        },
      ],
    },
    {
      type: "movement",
      title: "Yummy Food Actions!",
      instructions:
        "Call out each food word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Apple — pretend to take a big bite", emoji: "🍎" },
        { text: "Rice — pretend to scoop rice with a spoon", emoji: "🍚" },
        { text: "Bread — pretend to tear off a piece of bread", emoji: "🍞" },
        { text: "Milk — pretend to drink from a cup", emoji: "🥛" },
        { text: "Egg — crack an imaginary egg", emoji: "🥚" },
        { text: "Kimchi — fan your mouth like it's spicy", emoji: "🥬" },
        { text: "Bibimbap — stir a big bowl with your arm", emoji: "🍲" },
      ],
    },
    {
      type: "team_relay",
      title: "Name a Yummy Food!",
      instructions:
        "Split the class into two or three teams. Read one prompt aloud at a time; teams take turns racing to shout a correct food word. Keep score by cheering loudly for every good answer — a repeat answer from the same team just means try again!",
      prompts: [
        { text: "Name a food that's a fruit!", emoji: "🍎" },
        { text: "Name a food you eat with a spoon!", emoji: "🥣" },
        { text: "Name a food you drink!", emoji: "🥛" },
        { text: "Name a Korean food we talked about today!", emoji: "🥬" },
        { text: "Name a food that's spicy!", emoji: "🌶️", minTrack: "explorers" },
      ],
    },
    {
      type: "partner_talk",
      title: "I Like...!",
      frame: "I like ___.",
      frameSimple: "I like ___.",
      cards: [
        { prompt: "apples", emoji: "🍎", sampleAnswer: "I like apples." },
        { prompt: "rice", emoji: "🍚", sampleAnswer: "I like rice." },
        { prompt: "kimchi", emoji: "🥬", sampleAnswer: "I like kimchi." },
        { prompt: "bibimbap", emoji: "🍲", sampleAnswer: "I like bibimbap.", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A shows the card, Partner B completes \"I like ___\" using that food, then they swap so Partner A gets the next card. This is the first time today's words other than kimchi and bibimbap get said in a full sentence — listen for whether kids substitute apples, rice, and bread confidently rather than defaulting back to the two foods from the concept block.",
    },
    {
      type: "draw_and_label",
      title: "Draw Your Favorite Food",
      instructions: "Draw a picture of a food you like to eat, then label it using a word from the word bank.",
      instructionsSimple: "Draw food you like! Write the word.",
      wordBank: [
        { word: "apple", emoji: "🍎" },
        { word: "rice", emoji: "🍚" },
        { word: "bread", emoji: "🍞" },
        { word: "milk", emoji: "🥛" },
        { word: "egg", emoji: "🥚" },
        { word: "kimchi", emoji: "🥬" },
        { word: "bibimbap", emoji: "🍲", minTrack: "explorers" },
      ],
      exampleNote:
        "A round bowl of bibimbap with little swirls drawn in for rice and vegetables, labeled \"bibimbap\" underneath in large letters copied straight from the word bank.",
      minutes: 4,
      teacherNote:
        "Papers and pencils out — this is the first time this week's food words get written down instead of only spoken. Keep the word bank on screen the whole four minutes so kids copy confidently rather than guess-spell from memory. Circulate and, if a label doesn't match the drawing, point back at the word bank rather than supplying the correct word yourself.",
    },
    {
      type: "chant",
      title: "I Like Food Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching food picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Yummy, yummy, what do you like?", response: "I like apples, take a bite!" },
        { call: "Yummy, yummy, what's for you?", response: "I like rice, and kimchi too!" },
        {
          call: "Yummy, yummy, tell me true —",
          response: "I like bibimbap, how about you?",
          minTrack: "explorers",
        },
        {
          call: "Yummy, yummy, one more time —",
          response: "I like bread and milk, so fine!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Go around the room: each kid says one food they like.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned food words — including some we already knew in Korean — and how to say \"I like ___\" in English, acted out the food words, and chanted about our favorite foods.",
      summarySimple: "Today we learned yummy food words and sang a food chant with Vora!",
    },
  ],
};

export const w5d2_fruit_or_vegetable: Lesson = {
  ...meta("w5d2_fruit_or_vegetable"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Is an apple a fruit or a vegetable?\" Kids should answer easily — this warms up the category words before the sort.",
      prompt: "Fruit or vegetable?",
    },
    {
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "Bird and lion carry over Week 2's animal-sorting practice — the exact skill today's fruit-or-vegetable sort reuses, so say so out loud if a kid asks why animals are back. Read each word together before tapping; if more than two need the picture, spend thirty extra seconds on that word rather than rushing into today's sort.",
      words: [
        { word: "hello", emoji: "👋", fromMonth: 1 },
        { word: "lion", emoji: "🦁", fromMonth: 2 },
        { word: "bird", emoji: "🐦", fromMonth: 2 },
        { word: "square", emoji: "🟦", fromMonth: 3 },
        { word: "dad", emoji: "👨", fromMonth: 4 },
        { word: "two", emoji: "2️⃣", fromMonth: 4, minTrack: "explorers" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed. Wait for the whole class to act it out before showing the words. These reuse yesterday's food words as listening practice, before today's sort asks kids to talk about fruits and vegetables instead of just eating them.",
      commands: [
        { text: "Point to the bread.", steps: 1, emoji: "🍞" },
        { text: "Pretend to drink milk, then wipe your mouth.", steps: 2, emoji: "🥛" },
        { text: "Pretend to eat kimchi, fan your mouth like it's spicy, then give a thumbs up.", steps: 3, emoji: "🥬" },
        {
          text: "Pretend to scoop rice with a spoon, pretend to eat an apple, then rub your tummy.",
          steps: 3,
          emoji: "🍚",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "This is a quick comprehension check on yesterday's food words before today's fruit-or-vegetable sort asks kids to talk, not just listen. If more than a couple of kids freeze on \"kimchi\" or \"rice,\" pause and revisit yesterday's movement actions before continuing — the sorting game below assumes these words are already solid.",
    },
    {
      type: "concept",
      title: "Fruit or Vegetable?",
      bigIdeas: ["perception", "learning"],
      lines: [
        {
          text: "We've taught Vora to sort before — remember animals and vehicles?",
          textSimple: "Vora sorted before. Remember animals and cars?",
        },
        {
          text: "Let's see if Vora can learn a brand new category: fruit and vegetable!",
          textSimple: "Can Vora learn a new group: fruit and vegetables?",
        },
      ],
      teacherNote:
        "Second full train/guess classification loop with brand-new vocabulary — a good moment to ask the class to predict out loud whether Vora will learn faster this time.",
    },
    {
      type: "story",
      title: "Vora and the Tricky Tomato",
      teacherNote:
        "Read this before the train_the_robot sort below — it gives kids a concrete, funny example of a tricky classification case before they meet a similar tricky item (or debate one) in the game.",
      panels: [
        {
          text: "Apple, banana, grapes — fruit, fruit, fruit! Carrot, broccoli, corn — vegetable, vegetable, vegetable! Vora was sorting fast.",
          textSimple: "Vora sorted fruits and vegetables fast!",
          emoji: "🥕",
        },
        {
          text: "Then a tomato rolled onto the table. Vora paused. \"Hmm... are you sweet like a fruit, or savory like a vegetable?\"",
          textSimple: "A tomato! Vora stopped to think.",
          emoji: "🍅",
        },
        {
          text: "Vora looked back at lots of examples — tomatoes grow from a flower and have seeds, just like other fruits!",
          textSimple: "Tomatoes have seeds, like other fruits.",
          emoji: "🌱",
        },
        {
          text: "\"But,\" said Vora, \"people usually cook and eat tomatoes the way they eat vegetables — in salads and soups, not fruit salad!\"",
          textSimple: "But people eat tomatoes like a vegetable!",
          emoji: "🥗",
        },
        {
          text: "Vora wasn't magic — it just compared the tomato to lots of examples, and sometimes even careful sorting has a genuinely tricky case!",
          textSimple: "No magic! Some foods are just tricky to sort.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why did the tomato make Vora pause instead of sorting it right away?",
          discussionNote: "It had features of both groups — seeds like a fruit, but used in cooking like a vegetable — a genuinely tricky example, not a mistake.",
        },
        {
          question: "Can you think of another food that might be tricky to sort into just one group?",
          discussionNote: "Open discussion (e.g., pumpkin, cucumber, olive) — the goal is noticing that some real classification calls are genuinely hard, even for careful sorters.",
        },
      ],
    },
    {
      type: "movement",
      title: "Fruit and Veggie Actions!",
      instructions:
        "Call out each fruit or vegetable and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Apple — pretend to take a big bite", emoji: "🍎" },
        { text: "Banana — peel an imaginary banana", emoji: "🍌" },
        { text: "Carrot — crunch like biting a carrot", emoji: "🥕" },
        { text: "Broccoli — make tiny tree branches with your arms", emoji: "🥦", minTrack: "explorers" },
        { text: "Corn — pretend to munch corn side to side", emoji: "🌽" },
        { text: "Tomato — squeeze your hands like squishing a tomato", emoji: "🍅" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids sort the first few together as a class, then Vora starts guessing on its own — the class judges whether Vora got it right.",
      config: {
        engine: "train_the_robot",
        title: "Fruit or Vegetable?",
        labelA: "Fruit",
        labelB: "Vegetable",
        emojiA: "🍎",
        emojiB: "🥕",
        items: [
          { word: "apple", emoji: "🍎", bucket: "a" },
          { word: "banana", emoji: "🍌", bucket: "a" },
          { word: "grapes", emoji: "🍇", bucket: "a" },
          { word: "strawberry", emoji: "🍓", bucket: "a" },
          { word: "watermelon", emoji: "🍉", bucket: "a" },
          { word: "carrot", emoji: "🥕", bucket: "b" },
          { word: "broccoli", emoji: "🥦", bucket: "b" },
          { word: "corn", emoji: "🌽", bucket: "b" },
          { word: "potato", emoji: "🥔", bucket: "b" },
          { word: "tomato", emoji: "🍅", bucket: "b" },
        ],
      },
    },
    {
      type: "stand_sit",
      title: "Fruit or Vegetable True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "A carrot is a fruit.", isTrue: false, explanation: "No — a carrot grows underground and is a vegetable!", emoji: "🥕" },
        { text: "Grapes grow in a bunch and are a fruit.", isTrue: true, explanation: "Yes! Grapes are a fruit.", emoji: "🍇" },
        { text: "Vora sorts fruits and vegetables by comparing lots and lots of examples.", isTrue: true, explanation: "Yes! That's exactly how Vora (and real AI) learns to sort.", emoji: "🧠" },
        {
          text: "Every single food is easy to sort — there are never any tricky ones.",
          isTrue: false,
          explanation: "No — remember the tomato! Some foods are genuinely tricky, even for careful sorters.",
          emoji: "🍅",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "partner_talk",
      title: "Fruit or Vegetable?",
      frame: "That's a ___!",
      frameSimple: "Fruit or vegetable?",
      cards: [
        { prompt: "banana", emoji: "🍌", sampleAnswer: "That's a fruit!" },
        { prompt: "broccoli", emoji: "🥦", sampleAnswer: "That's a vegetable!" },
        { prompt: "strawberry", emoji: "🍓", sampleAnswer: "That's a fruit!" },
        { prompt: "potato", emoji: "🥔", sampleAnswer: "That's a vegetable!", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A shows the card, Partner B calls out \"That's a fruit!\" or \"That's a vegetable!\" before they swap — the point is producing the full sentence, not just tapping a bucket like in the train_the_robot game they just played, so hold both partners to it rather than a one-word answer. Circulate for pairs who slow down on broccoli or potato, the trickier vegetable words from today's sort.",
    },
    {
      type: "role_play",
      title: "At the Fruit and Vegetable Stand",
      setting: "A fruit and vegetable stand at an outdoor market.",
      roles: ["Vendor", "Customer"],
      exchanges: [
        { role: 0, line: "Welcome! Are you looking for a fruit or a vegetable today?", lineSimple: "Fruit or vegetable?", emoji: "🧺" },
        { role: 1, line: "Hmm, is a tomato a fruit or a vegetable?", lineSimple: "Tomato — fruit or vegetable?", emoji: "🍅" },
        {
          role: 0,
          line: "Great question! It grows from seeds like a fruit, but people cook it like a vegetable.",
          lineSimple: "Tricky! It's a bit of both.",
          emoji: "🤔",
        },
        { role: 1, line: "I'll just take a carrot then — that's easy, it's a vegetable!", lineSimple: "I'll take a carrot. Vegetable!", emoji: "🥕" },
      ],
      teacherNote:
        "Rehearse both parts in pairs first, then invite one pair to perform for the class. The Vendor's tomato line is deliberately today's tricky case from the story — if a pair improvises a different tricky food (pumpkin, avocado), let them; the goal is applying \"sometimes sorting is genuinely hard\" to a new example, not memorizing this exact exchange.",
    },
    {
      type: "chant",
      title: "Fruit or Vegetable Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching food picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Apple, apple, fruit or not?", response: "That's a fruit — yes, a lot!" },
        { call: "Carrot, carrot, what do you say?", response: "That's a vegetable — hip hip hooray!" },
        {
          call: "Banana, banana, tell me true —",
          response: "That's a fruit, yellow and new!",
          minTrack: "explorers",
        },
        {
          call: "Broccoli, broccoli, green and small —",
          response: "That's a vegetable, best of all!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "\"Vora learned faster / slower this time.\" Ask the class which, and why they think so.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced sorting fruit and vegetables, checked whether Vora's learning got faster with practice, acted out fruits and vegetables, and chanted about what's a fruit and what's a vegetable.",
      summarySimple: "Today we sorted fruits and vegetables and sang a chant about them with Vora!",
    },
  ],
};

export const w5d3_do_you_like: Lesson = {
  ...meta("w5d3_do_you_like"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask two or three kids \"Do you like pizza?\" and model a quick \"Yes, I do\" / \"No, I don't\" before the activity.",
      prompt: "Do you like pizza? 🍕",
    },
    {
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "This closes out the week, so treat it as a quick check that Weeks 1-4 are still solid before the unit moves on. Read each word together before tapping — the picture is a rescue, not the activity. If more than two need the picture, flag that week for a fuller review before Week 6 starts.",
      words: [
        { word: "pencil", emoji: "✏️", fromMonth: 1 },
        { word: "rabbit", emoji: "🐰", fromMonth: 2 },
        { word: "purple", emoji: "🟣", fromMonth: 3 },
        { word: "star", emoji: "⭐", fromMonth: 3, minTrack: "explorers" },
        { word: "sister", emoji: "👧", fromMonth: 4 },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed, and wait for everyone to move before revealing the words. The last two commands end in a head-nod or a head-shake — a physical preview of the \"Yes, I do\" / \"No, I don't\" answers coming later in today's chant and check.",
      commands: [
        { text: "Point to the milk.", steps: 1, emoji: "🥛" },
        { text: "Pretend to tear off a piece of bread, then pretend to eat it.", steps: 2, emoji: "🍞" },
        { text: "Pretend to eat kimchi, fan your mouth, then shake your head no like you don't like it.", steps: 3, emoji: "🥬" },
        {
          text: "Pretend to eat bibimbap, nod your head yes like you love it, then give a big thumbs up.",
          steps: 3,
          emoji: "🍲",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "The kimchi and bibimbap commands are staged on purpose — a head shake for \"don't like\" and a nod plus thumbs up for \"like\" — so lean on the gesture if a child hesitates between \"Yes, I do\" and \"No, I don't\" later on. Grade it live: skip straight to the 3-step commands if the class breezes through the 1-step one.",
    },
    {
      type: "concept",
      title: "Asking with \"Do\"",
      bigIdeas: [],
      lines: [
        {
          text: "In Korean, we ask a question just by changing how our voice sounds.",
          textSimple: "In Korean, our voice changes to ask a question.",
        },
        {
          text: "In English, we add a new word at the very front: \"Do.\"",
          textSimple: "In English, we add \"Do\" at the start.",
        },
        { text: "Let's build the question one word at a time." },
      ],
      teacherNote:
        "This is the yes/no question-formation gap — English fronts an auxiliary \"do\" with no direct Korean equivalent. Build it physically with the tiles below rather than explaining the grammar rule abstractly.",
    },
    {
      type: "story",
      title: "Vora Learns to Just Ask",
      teacherNote:
        "Read this before the sentence-building game — it gives a concrete reason WHY we ask \"Do you like ___?\" instead of just guessing, which makes the question feel useful rather than just a grammar drill.",
      panels: [
        {
          text: "After a whole week of watching, Vora felt sure it could guess anyone's favorite food.",
          textSimple: "Vora watched all week. Now it feels sure!",
          emoji: "😎",
        },
        {
          text: "\"I bet you like rice!\" Vora told Minji. Minji shook her head. \"No, I don't! I like bibimbap best!\"",
          textSimple: "\"You like rice!\" said Vora. \"No!\" said Minji.",
          emoji: "🍲",
        },
        {
          text: "Vora was surprised. Most friends DID like rice a lot — but Minji was her own person, not just like everyone else.",
          textSimple: "Minji is different from other friends!",
          emoji: "🤔",
        },
        {
          text: "\"I don't have to guess,\" Vora realized. \"I can just ask: Do you like bibimbap?\"",
          textSimple: "Vora can just ask instead of guessing!",
          emoji: "❓",
        },
        {
          text: "Vora wasn't magic — guessing patterns is useful, but the surest way to really know what one person likes is simply to ask them, and listen!",
          textSimple: "No magic! Asking is the best way to know.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why was Vora's guess about Minji wrong?",
          discussionNote: "Vora guessed from a pattern in what many friends liked, but each person can still be different from the pattern — one guess isn't a guarantee.",
        },
        {
          question: "What's something you like that might be different from your best friend?",
          discussionNote: "Open discussion — celebrate that everyone can have their own likes, and that asking is how we find out.",
        },
      ],
    },
    {
      type: "movement",
      title: "Do You Like It? Actions!",
      instructions:
        "Call out each line and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Do you—? — shrug your shoulders and open your hands", emoji: "🤷", minTrack: "explorers" },
        { text: "Like — give a big thumbs up", emoji: "👍" },
        { text: "Apples — pretend to take a big bite", emoji: "🍎" },
        { text: "Pizza — pretend to take a big cheesy bite", emoji: "🍕" },
        { text: "Yes, I do! — nod your head big", emoji: "✅" },
        { text: "No, I don't! — shake your head no", emoji: "❌" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the question one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full question together.",
      config: {
        engine: "sentence_builder",
        title: "Do you like apples?",
        words: [
          { text: "Do", role: "other" },
          { text: "you", role: "subject" },
          { text: "like", role: "verb" },
          { text: "apples", role: "object" },
        ],
      },
    },
    {
      type: "class_vote",
      title: "What's Your Favorite Food?",
      instructions:
        "Read each food option aloud. Kids vote by raising their hands (or standing up) for their favorite — tally the votes on the board together and celebrate that everyone can like something different!",
      question: "Which food is your favorite?",
      options: [
        { text: "Kimchi", emoji: "🥬" },
        { text: "Bibimbap", emoji: "🍲" },
        { text: "Pizza", emoji: "🍕" },
        { text: "Apples", emoji: "🍎" },
      ],
    },
    {
      type: "partner_talk",
      title: "Do You Like It?",
      frame: "Do you like ___?",
      frameSimple: "Like it?",
      cards: [
        { prompt: "apples", emoji: "🍎", sampleAnswer: "Yes, I do! / No, I don't!" },
        { prompt: "pizza", emoji: "🍕", sampleAnswer: "Yes, I do! / No, I don't!" },
        { prompt: "kimchi", emoji: "🥬", sampleAnswer: "Yes, I do! / No, I don't!" },
        { prompt: "bibimbap", emoji: "🍲", sampleAnswer: "Yes, I do! / No, I don't!", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A asks the full question — \"Do you like apples?\" — using the same tiles from today's sentence-builder game, and Partner B gives a genuine answer, \"Yes, I do!\" or \"No, I don't!,\" before they swap who's asking. Unlike other Partner Talks this week, there's no single correct sampleAnswer here — the point is a real question about a real opinion, so listen for whether kids produce the full \"Do\" question rather than dropping back to just naming the food.",
    },
    {
      type: "role_play",
      title: "Trading Lunch",
      setting: "A lunchroom table where two friends are trading snacks.",
      roles: ["Friend A", "Friend B"],
      exchanges: [
        { role: 0, line: "Do you like kimchi? I have extra!", lineSimple: "Do you like kimchi?", emoji: "🥬" },
        { role: 1, line: "Yes, I do! Thank you! Do you like pizza?", lineSimple: "Yes, I do! Do you like pizza?", emoji: "🍕" },
        { role: 0, line: "No, I don't — but I like bibimbap a lot!", lineSimple: "No, I don't. I like bibimbap!", emoji: "🍲" },
        { role: 1, line: "Me too! Let's trade — bibimbap for kimchi!", lineSimple: "Let's trade!", emoji: "🤝" },
      ],
      teacherNote:
        "This performs the exact \"Do you like ___?\" question the class just built with tiles, now inside a real reason to ask — trading lunch. Rehearse both parts in pairs, then have a volunteer pair perform; listen for whether Friend B answers with the full \"Yes, I do\" / \"No, I don't\" rather than just \"yes\" or \"no.\"",
    },
    {
      type: "chant",
      title: "Do You Like It? Chant",
      instructions:
        "Say each call line and have the class echo the response, then really answer for themselves!",
      lines: [
        { call: "Do you like apples? Ask your friend —", response: "Yes, I do! Now ask again!" },
        { call: "Do you like pizza, warm and round?", response: "Yes, I do! Best food in town!" },
        {
          call: "Do you like apples, hard and sweet?",
          response: "No, I don't! Not a treat!",
          minTrack: "explorers",
        },
        {
          call: "Do you like pizza — one more time?",
          response: "Yes, I do! Say it in rhyme!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Partners ask and answer \"Do you like ___?\" three times, swapping the food word.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we built yes/no questions with \"Do you like ___?\" — closing out our week on food and choices, acted out asking and answering, and chanted \"Do you like ___?\" together.",
      summarySimple: "Today we learned to ask \"Do you like ___?\" and chanted about our favorite foods!",
      homework: "Ask a family member \"Do you like ___?\" about three different foods.",
    },
  ],
};
