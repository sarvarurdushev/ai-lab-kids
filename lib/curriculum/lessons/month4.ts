import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m4_week1: Lesson = {
  ...meta("m4_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up a picture of a plastic bottle and a picture of an apple core. Ask \"Recycle, or trash?\" for each and take quick guesses before you explain anything.",
      prompt: "Recycle or trash? ♻️",
    },
    {
      type: "vocab",
      title: "Earth Words",
      words: [
        { word: "tree", emoji: "🌳" },
        { word: "recycle", emoji: "♻️" },
        { word: "trash", emoji: "🗑️" },
        { word: "earth", emoji: "🌎" },
        { word: "water", emoji: "💧" },
        { word: "air", emoji: "💨", minTrack: "explorers" },
        { word: "plant", emoji: "🌱" },
      ],
    },
    {
      type: "concept",
      title: "Vora Cares for Earth",
      bigIdeas: ["learning", "societal_impact"],
      lines: [
        {
          text: "There are things we should do for the earth, like \"We should turn off the water.\"",
          textSimple: "We should turn off the water.",
        },
        {
          text: "And things we shouldn't do, like \"We shouldn't throw trash on the ground.\"",
          textSimple: "We shouldn't throw trash on the ground.",
        },
        { text: "\"Should\" stays exactly the same word every time — it doesn't change for \"I\" or \"we\" like some Korean verb endings do.", minTrack: "explorers" },
        {
          text: "Scientists use AI to study huge amounts of weather data, so they can understand how our earth is changing.",
          textSimple: "Scientists use AI to study our earth.",
        },
      ],
      teacherNote:
        "Modal \"should\" has no verb-final Korean counterpart to lean on — the same challenge as \"can\" back in the foundations unit. Model it as a fixed chunk (\"We should ___\") before analyzing it. The AI thread here is Big Idea 3 (Learning): scientists don't guess about climate randomly, they learn patterns from enormous datasets, the same \"learn from lots of examples\" idea Vora has modeled with pictures all year.",
    },
    {
      type: "story",
      title: "Vora Learns From Years of Weather",
      teacherNote:
        "Read each panel aloud, pausing after panel 3 to ask what Vora might notice after looking at so many years of data, before revealing panel 4 — the point is that scientists (and Vora) learn from huge amounts of real data, not a single guess.",
      panels: [
        {
          text: "Vora looked at just one year of weather data. \"Hmm,\" it said, \"I'm not sure what's changing.\"",
          textSimple: "One year: \"Not sure yet,\" said Vora.",
          emoji: "📅",
        },
        {
          text: "So Vora looked at ten years of weather data. Then fifty years. Then one hundred years!",
          textSimple: "Vora looked at 100 years of weather!",
          emoji: "📊",
        },
        {
          text: "With so much data, a pattern started to appear — summers were slowly getting warmer, year after year.",
          textSimple: "A pattern appeared: summers getting warmer.",
          emoji: "🌡️",
        },
        {
          text: "\"Now I can see it clearly,\" said Vora. \"That's why we should care for our earth — to help keep it healthy.\"",
          textSimple: "\"We should care for our earth,\" said Vora.",
          emoji: "🌎",
        },
        {
          text: "Vora didn't guess this from one day — real scientists use AI the very same way, studying huge amounts of data to understand how our earth is changing.",
          textSimple: "No magic — just lots and lots of real data!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why did Vora need to look at so many years of weather, instead of just one?",
          discussionNote: "One year isn't enough to see a pattern — looking at lots of data over time is how scientists (and AI) notice real changes, like warming summers.",
        },
        {
          question: "What's one thing YOU could do to help take care of the earth?",
          discussionNote: "Open discussion — recycling, saving water, turning off lights, connecting back to today's \"should/shouldn't\" sentences.",
        },
      ],
    },
    {
      type: "movement",
      title: "Earth Words in Action!",
      instructions:
        "Call out each earth word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Tree — stretch tall with arms like branches", emoji: "🌳" },
        { text: "Recycle — pretend to toss something into a bin", emoji: "♻️" },
        { text: "Trash — hold your nose and toss it away", emoji: "🗑️" },
        { text: "Earth — hug yourself in a big circle like a globe", emoji: "🌎" },
        { text: "Water — wiggle your fingers like dripping water", emoji: "💧" },
        { text: "Air — blow a big breath out like wind", emoji: "💨", minTrack: "explorers" },
        { text: "Plant — crouch down small, then grow up tall", emoji: "🌱" },
      ],
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each item goes before anyone taps — talk through the tricky ones, like the plastic bag, out loud.",
      config: {
        engine: "train_the_robot",
        title: "Recycle or Trash?",
        labelA: "Recycle",
        labelB: "Trash",
        emojiA: "♻️",
        emojiB: "🗑️",
        items: [
          { word: "bottle", emoji: "🧴", bucket: "a" },
          { word: "can", emoji: "🥫", bucket: "a" },
          { word: "paper", emoji: "📄", bucket: "a" },
          { word: "banana peel", emoji: "🍌", bucket: "b" },
          { word: "tissue", emoji: "🧻", bucket: "b" },
          { word: "broken toy", emoji: "🧸", bucket: "b" },
          { word: "plastic bag", emoji: "🛍️", bucket: "b", minTrack: "explorers" },
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
      type: "team_relay",
      title: "Recycle or Trash Relay!",
      instructions:
        "Split the class into two teams. Read each prompt aloud, then point to one team to shout out an answer before switching to the other team for the next prompt. Any reasonable answer counts!",
      prompts: [
        { text: "Name something you should recycle!", emoji: "♻️" },
        { text: "Name something that goes in the trash!", emoji: "🗑️" },
        { text: "Name something we should do to save water!", emoji: "💧" },
        { text: "Name something that helps a plant grow!", emoji: "🌱", minTrack: "explorers" },
        { text: "Name something we should never throw on the ground!", emoji: "🚯" },
      ],
    },
    {
      type: "chant",
      title: "We Should Chant",
      instructions:
        "Say each call line and have kids answer with the response, like a promise to the earth. The whole class echoes the response line back to you.",
      lines: [
        { call: "What should we do with a bottle or can?", response: "We should recycle — yes we can!" },
        { call: "What should we do with the water each day?", response: "We should save it — don't waste it away!" },
        {
          call: "What shouldn't we throw on the ground below?",
          response: "We shouldn't throw trash — no, no, no!",
          minTrack: "explorers",
        },
        { call: "What do we do for our whole earth so grand?", response: "We should care for it, hand in hand!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask one table: name one thing we should recycle at home and one thing that's trash.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned earth words, acted them out, practiced \"We should / shouldn't ___,\" and sorted recycling from trash — just like scientists sort through huge amounts of data to understand our climate, practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about caring for the earth together.",
      summarySimple: "Today we learned earth words, sorted recycling from trash, and sang an earth chant with Vora!",
      homework: "Find one thing at home that should be recycled, and tell a family member in English.",
    },
  ],
};

export const m4_week2: Lesson = {
  ...meta("m4_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up a picture of a messy, used bottle. Ask \"What do we do first?\" and take a few guesses before revealing today's recycling steps game.",
      prompt: "What do we do first? ♻️",
      promptSimple: "Bottle's dirty! What now? ♻️",
    },
    {
      type: "concept",
      title: "Vora Follows the Steps",
      bigIdeas: ["learning", "societal_impact"],
      lines: [
        {
          text: "Remember: scientists use AI to study huge amounts of data to help our earth.",
          textSimple: "Scientists use AI to help our earth.",
        },
        {
          text: "Today, let's follow the exact steps of recycling, one after another.",
          textSimple: "Let's follow the recycling steps!",
        },
      ],
      teacherNote:
        "Short recap only — Week 1 fully introduced the AI-learns-from-data thread through climate science; here it's briefly reconnected to today's ordered-steps game before playing.",
    },
    {
      type: "story",
      title: "Vora Skips a Recycling Step",
      teacherNote:
        "Read each panel aloud, pausing after panel 2 to ask what might go wrong if you skip a step, before revealing panel 3 — the point is that each step matters, in order.",
      panels: [
        {
          text: "Vora grabbed a dirty bottle and tossed it straight into the recycling bin, no rinsing at all.",
          textSimple: "Vora skipped rinsing the bottle!",
          emoji: "🧴",
        },
        {
          text: "But the bottle was still sticky, and it made a mess with the other clean recycling.",
          textSimple: "Oops! The sticky bottle made a mess.",
          emoji: "😬",
        },
        {
          text: "\"I skipped the rinsing step,\" Vora realized. \"Each step matters, in the right order.\"",
          textSimple: "\"I skipped a step!\" said Vora.",
          emoji: "🤔",
        },
        {
          text: "So Vora tried again: rinse it, sort it, THEN put it in the bin — and this time, it worked perfectly.",
          textSimple: "Rinse, sort, THEN bin. It worked!",
          emoji: "✅",
        },
        {
          text: "Following the steps in order isn't extra work for no reason — each one matters, the same way scientists follow careful steps to study our earth.",
          textSimple: "Steps in order matter — every time!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What went wrong when Vora skipped the rinsing step?",
          discussionNote: "The sticky bottle made a mess — skipping a step out of order caused a problem, just like in today's sequencing game.",
        },
        {
          question: "Why do you think rinsing comes before putting something in the recycling bin?",
          discussionNote: "Open discussion — clean recycling is easier and safer to reuse; the order of steps has a real reason behind it.",
        },
      ],
    },
    {
      type: "movement",
      title: "Recycling Actions!",
      instructions:
        "Call out each step or word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Rinse it — wiggle your fingers like running water", emoji: "🚿" },
        { text: "Sort it — point one way then the other", emoji: "♻️" },
        { text: "Put it in the bin — pretend to toss something in", emoji: "🗑️" },
        { text: "Truck takes it away — drive an imaginary steering wheel", emoji: "🚛" },
        { text: "Plant — crouch down small, then grow up tall", emoji: "🌱" },
        { text: "Leaf — wave your arms gently like leaves", emoji: "🌿" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step of recycling a bottle. Read each step aloud together as it's placed. Then play a second game to reinforce it.",
      config: {
        engine: "sequence_builder",
        title: "Recycling Steps",
        steps: [
          { text: "Rinse it", emoji: "🚿" },
          { text: "Sort it", emoji: "♻️" },
          { text: "Put it in the bin", emoji: "🗑️" },
          { text: "The truck takes it away", emoji: "🚛", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Show the sequence one item at a time and ask kids to guess what comes next before revealing the answer. Encourage them to explain the pattern in their own words.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next?",
        teacherNote:
          "Concretely demonstrates the \"learning\" big idea: AI (and people) predict what comes next by finding a pattern in examples — the same idea behind how scientists use patterns in climate data.",
        rounds: [
          { sequence: ["🌱", "🌿", "🌱", "🌿"], answer: "🌱", options: ["🌱", "🌿", "🌳"] },
          { sequence: ["♻️", "🗑️", "♻️", "🗑️"], answer: "♻️", options: ["♻️", "🗑️", "🌎"] },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[3],
    },
    {
      type: "stand_sit",
      title: "Recycling — True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "You should rinse a bottle before recycling it.", isTrue: true, explanation: "Yes! A clean bottle is easier to recycle.", emoji: "🚿" },
        { text: "It doesn't matter what order you do the recycling steps in.", isTrue: false, explanation: "No — doing steps in order helps it work right!", emoji: "🔀" },
        { text: "A truck picks up recycling and takes it away.", isTrue: true, explanation: "Yes! The truck takes it to be reused.", emoji: "🚛" },
        {
          text: "Recycling steps are the same as the steps for growing a plant.",
          isTrue: false,
          explanation: "No — they're both step-by-step, but the steps themselves are different!",
          emoji: "🌱",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "chant",
      title: "Recycling Steps Chant",
      instructions:
        "Say each call line and act out the step together. The whole class echoes the response line back to you.",
      lines: [
        { call: "What do we do first with a bottle in hand?", response: "First we rinse it, isn't that grand?" },
        { call: "What comes next, before we're through?", response: "Next we sort it — me and you!" },
        {
          call: "Then what do we do, don't delay?",
          response: "Then we put it in the bin, hooray!",
          minTrack: "explorers",
        },
        { call: "Last of all, where does it go?", response: "The truck takes it away, off we go!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask a student to say the recycling steps in order: rinse it, sort it, put it in the bin.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — putting the steps of recycling in order, acting out each step, guessing what comes next in a pattern, helping Vora follow clear step-by-step instructions, and chanting the recycling steps together.",
      summarySimple: "Today we put recycling steps in order and sang a recycling chant with Vora!",
    },
  ],
};

export const m4_week3: Lesson = {
  ...meta("m4_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Show three emoji in a row — 🌱🌿🌱 — and ask \"What comes next?\" before revealing today's pattern game.",
      prompt: "What comes next? 🌱🌿🌱...",
    },
    {
      type: "concept",
      title: "Vora Finds the Pattern",
      bigIdeas: ["learning", "societal_impact"],
      lines: [
        {
          text: "Scientists look for patterns in weather data to understand our changing earth.",
          textSimple: "Scientists look for patterns in weather.",
        },
        {
          text: "Let's practice finding a pattern too, and guess what comes next.",
          textSimple: "Let's find a pattern! What comes next?",
        },
      ],
      teacherNote:
        "Short recap only — Week 1 introduced the AI-learns-from-data thread through climate science; here it's briefly reconnected to pattern-finding before the prediction game.",
    },
    {
      type: "story",
      title: "Vora Finds the Weather Pattern",
      teacherNote:
        "Read each panel aloud, pausing after panel 3 to let kids guess what comes next before revealing panel 4 — the same prediction skill as today's pattern game.",
      panels: [
        {
          text: "Vora looked at years of temperature charts: warm, warmer, warm, warmer.",
          textSimple: "Warm, warmer, warm, warmer.",
          emoji: "📈",
        },
        {
          text: "\"I notice something repeating,\" said Vora, looking closely at the numbers.",
          textSimple: "\"Something is repeating,\" said Vora.",
          emoji: "🔍",
        },
        {
          text: "\"If the pattern keeps going... what do you think comes next?\" Vora asked.",
          textSimple: "\"What comes next?\" asked Vora.",
          emoji: "🤔",
        },
        {
          text: "\"Warmer again,\" Vora guessed — and that's exactly what scientists' real data showed too.",
          textSimple: "\"Warmer again,\" guessed Vora. Correct!",
          emoji: "🌡️",
        },
        {
          text: "Finding a pattern in lots of information and guessing what comes next — that's exactly how scientists (and Vora) study our changing earth.",
          textSimple: "Find the pattern, then guess what's next!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora guess what came next in the temperature pattern?",
          discussionNote: "It looked at lots of past data and noticed a repeating pattern — the same pattern-finding skill from today's activity.",
        },
        {
          question: "Why is it helpful for scientists to notice patterns in earth data?",
          discussionNote: "Open discussion — noticing patterns helps us understand and plan for changes, like knowing when to expect warmer weather.",
        },
      ],
    },
    {
      type: "movement",
      title: "Earth Pattern Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Plant — crouch down small, then grow up tall", emoji: "🌱" },
        { text: "Leaf — wave your arms gently like leaves", emoji: "🌿" },
        { text: "Recycle — pretend to toss something into a bin", emoji: "♻️" },
        { text: "Trash — hold your nose and toss it away", emoji: "🗑️" },
        { text: "Rinse it — wiggle your fingers like running water", emoji: "🚿" },
        { text: "Truck — drive an imaginary steering wheel", emoji: "🚛" },
      ],
    },
    {
      type: "activity",
      instructions: "Show the sequence one item at a time and ask kids to guess what comes next before revealing the answer. Encourage them to explain the pattern in their own words. Then play a second game to reinforce it.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next?",
        teacherNote:
          "Concretely demonstrates the \"learning\" big idea: AI (and people) predict what comes next by finding a pattern in examples — the same idea behind how scientists use patterns in climate data.",
        rounds: [
          { sequence: ["🌱", "🌿", "🌱", "🌿"], answer: "🌱", options: ["🌱", "🌿", "🌳"] },
          { sequence: ["♻️", "🗑️", "♻️", "🗑️"], answer: "♻️", options: ["♻️", "🗑️", "🌎"] },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step of recycling a bottle. Read each step aloud together as it's placed.",
      config: {
        engine: "sequence_builder",
        title: "Recycling Steps",
        steps: [
          { text: "Rinse it", emoji: "🚿" },
          { text: "Sort it", emoji: "♻️" },
          { text: "Put it in the bin", emoji: "🗑️" },
          { text: "The truck takes it away", emoji: "🚛", minTrack: "explorers" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[4],
    },
    {
      type: "class_vote",
      title: "One Earth Habit",
      instructions:
        "Read the question aloud. Let kids vote by raising their hands for their favorite earth-friendly habit, or discuss as a class.",
      question: "Which earth-friendly habit do you want to try this week?",
      questionSimple: "Which earth habit do you want to try?",
      options: [
        { text: "Recycle a bottle", emoji: "♻️" },
        { text: "Turn off the water", emoji: "💧" },
        { text: "Plant something", emoji: "🌱" },
        { text: "Pick up trash", emoji: "🗑️" },
      ],
    },
    {
      type: "chant",
      title: "What Comes Next? Chant",
      instructions:
        "Say each call line and have kids guess before the response. The whole class echoes the response line back to you.",
      lines: [
        { call: "Leaf, then plant, then leaf again —", response: "What comes next? A leaf, my friend!" },
        { call: "Recycle, trash, recycle too —", response: "What comes next? Recycle — that's true!" },
        {
          call: "Rinse it, sort it, what comes then?",
          response: "Put it in the bin — and count to ten!",
          minTrack: "explorers",
        },
        { call: "Last of all, where does it go?", response: "The truck takes it away, off we go!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Show one more pattern and ask a student to say what comes next, and explain why.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — guessing what comes next in a pattern, acting out earth actions, putting the steps of recycling in order, spotting real AI in everyday life, and chanting about patterns and recycling together.",
      summarySimple: "Today we guessed what comes next and sang a pattern chant with Vora!",
    },
  ],
};

export const m4_week4: Lesson = {
  ...meta("m4_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"What is one thing we should do for the earth?\" Take a few quick answers before revealing today's sentence.",
      prompt: "We should ___.",
    },
    {
      type: "concept",
      title: "All of Us Together",
      bigIdeas: [],
      lines: [
        {
          text: "All month we talked about things we should do for the earth.",
          textSimple: "We talked about caring for the earth.",
        },
        {
          text: "Today, let's say it together, out loud: We should recycle.",
          textSimple: "Let's say it together: We should recycle!",
        },
        {
          text: "Notice this sentence uses \"We,\" not \"I\" — it's about all of us together, not just one person.",
          textSimple: "\"We\" means all of us together!",
        },
      ],
      teacherNote:
        "First group-subject (\"we\") sentence in the curriculum — every earlier sentence pattern (\"I see a...\", \"I'm from...\", \"This is my...\") was first-person singular. Call out the shift explicitly: \"we\" means the whole class saying it together, which is a small but genuine grammatical step worth naming.",
    },
    {
      type: "story",
      title: "Vora Asks Everyone to Help",
      teacherNote:
        "Read each panel aloud, emphasizing the shift from \"I\" to \"we\" — Vora needs everyone's help, not just its own effort, to make a real difference for the earth.",
      panels: [
        {
          text: "Vora tried to clean up litter at the park all by itself. \"I should recycle,\" it said, picking up one can.",
          textSimple: "Vora tried to clean up all alone.",
          emoji: "🥫",
        },
        {
          text: "But the park was big, and there was so much to pick up — one robot alone couldn't do it all.",
          textSimple: "Too much for Vora alone!",
          emoji: "😅",
        },
        {
          text: "\"I can't do this by myself,\" Vora realized. \"I need help from everyone.\"",
          textSimple: "\"I need everyone's help,\" said Vora.",
          emoji: "🤝",
        },
        {
          text: "So Vora called out to the whole class: \"We should recycle — together!\" And everyone joined in.",
          textSimple: "\"We should recycle — together!\"",
          emoji: "🧑‍🤝‍🧑",
        },
        {
          text: "One helper can only do so much, but when everyone says \"we\" and works together, the whole earth benefits.",
          textSimple: "\"We\" together helps the whole earth!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why couldn't Vora clean up the whole park by itself?",
          discussionNote: "It was too big a job for just one helper — this is why the lesson's sentence uses \"we,\" showing that caring for the earth takes everyone working together.",
        },
        {
          question: "What's one way our whole class could work together to help the earth?",
          discussionNote: "Open discussion — a class recycling bin, a planting day, turning off lights together.",
        },
      ],
    },
    {
      type: "movement",
      title: "We Should Recycle — Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "We — link arms with the person next to you", emoji: "🧑‍🤝‍🧑" },
        { text: "Should — nod your head and give a thumbs up", emoji: "👍" },
        { text: "Recycle — pretend to toss something into a bin", emoji: "♻️" },
        { text: "Together — hold hands in a big circle", emoji: "🤝" },
        { text: "Earth — hug yourself in a big circle like a globe", emoji: "🌎" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then have the whole class say it together like a chant, a few times.",
      config: {
        engine: "sentence_builder",
        title: "We should recycle.",
        words: [
          { text: "We", role: "subject" },
          { text: "should", role: "other" },
          { text: "recycle", role: "verb" },
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
      type: "team_relay",
      title: "We Should... Relay!",
      instructions:
        "Split the class into two teams. Read each prompt aloud, then point to one team to complete the sentence \"We should ___!\" out loud before switching to the other team for the next prompt.",
      prompts: [
        { text: "We should ___ the bottle! (recycle)", emoji: "♻️" },
        { text: "We should ___ the water! (save)", emoji: "💧" },
        { text: "We should ___ a tree! (plant)", emoji: "🌳" },
        { text: "We should ___ trash on the ground! (never throw)", emoji: "🚯", minTrack: "explorers" },
        { text: "We should ___ the earth! (care for)", emoji: "🌎" },
      ],
    },
    {
      type: "chant",
      title: "We Should Recycle Chant",
      instructions:
        "Say each call line with a big voice. The whole class echoes the response line back to you.",
      lines: [
        { call: "What do we say, all of us together?", response: "We should recycle, now and forever!" },
        { call: "Who takes care of our earth so grand?", response: "We do, we do, hand in hand!" },
        {
          call: "Say it loud, don't be shy —",
          response: "We should recycle, way up high!",
          minTrack: "explorers",
        },
        { call: "One more time, all together now!", response: "We should recycle — take a bow!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Everyone says \"We should recycle!\" together — thumbs up if you said the whole sentence.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we built our first \"we\" sentence together — \"We should recycle\" — acted it out with the whole class, closing out a month of caring for the earth, helped Vora follow clear instructions, spotted real AI in everyday life, and chanted it together one more time.",
      summarySimple: "Today we all said \"We should recycle!\" together with Vora!",
      homework: "Say \"We should recycle\" with your family tonight, and pick one thing to recycle together.",
    },
  ],
};
