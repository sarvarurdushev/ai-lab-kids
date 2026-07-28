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
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "One word from each of the six Foundations weeks so far, since today starts a brand new unit (Robot Helpers) and nothing taught this year should go quiet just because the topic changed. Read each word together BEFORE tapping — the tap rescues a stuck class, it isn't the activity. If more than two need the picture, that week deserves a full review before piling on today's new action verbs.",
      words: [
        { word: "friend", emoji: "🧑‍🤝‍🧑", fromMonth: 1 },
        { word: "dog", emoji: "🐶", fromMonth: 2 },
        { word: "green", emoji: "🟢", fromMonth: 3 },
        { word: "mom", emoji: "👩", fromMonth: 4 },
        { word: "milk", emoji: "🥛", fromMonth: 5 },
        { word: "brush teeth", emoji: "🪥", fromMonth: 6, minTrack: "explorers" },
      ],
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
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing the words. This checks listening, not reading, so keep the word bank hidden until after each round.",
      commands: [
        { text: "Clean like a robot!", steps: 1, emoji: "🧹" },
        { text: "Cook like a robot, then talk like a robot.", steps: 2, emoji: "🍳" },
        { text: "Stand up, drive like a robot, then swim like a robot.", steps: 3, emoji: "🚗" },
        {
          text: "Fly like a robot, clean like a robot, then cook like a robot.",
          steps: 3,
          emoji: "✈️",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response using today's own six action verbs (clean, cook, drive, fly, swim, talk), so kids prove they understand \"can\" in action before building any sentence with it — mime each verb big and don't translate into Korean even if a child hesitates. Grade it live: if the whole class nails the 1-step command instantly, skip straight to the 3-step chains instead of running all four in order.",
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
        {
          text: "Real robots can clean floors, and real robots can fly!",
          textSimple: "Real robots can clean. Real robots can fly!",
        },
        { text: "\"Can\" tells us what something is able to do." },
      ],
      teacherNote: "First real-world grounding of \"robot\" beyond Vora the character — robot vacuums and delivery drones are good concrete examples if kids ask for more.",
    },
    {
      type: "story",
      title: "Vora's Robot Helper Tour",
      teacherNote:
        "Read this right after the concept intro, before the chant — it turns the abstract \"robots can ___\" idea into concrete real-world examples, echoing the vacuum/drone examples from the teacher note above.",
      panels: [
        {
          text: "\"Let's go on a tour of robot helpers!\" said Vora, and off they went.",
          textSimple: "Vora took a tour of robot helpers!",
          emoji: "🤖",
        },
        {
          text: "First stop: a little round robot quietly cleaned the floor at home, all by itself. \"That robot can clean!\" said Vora.",
          textSimple: "A robot cleaned the floor by itself!",
          emoji: "🧹",
        },
        {
          text: "Next stop: a delivery robot rolled down the sidewalk carrying a package to a front door. \"That robot can drive!\"",
          textSimple: "A delivery robot drove a package!",
          emoji: "🚗",
        },
        {
          text: "Vora tried to picture the cleaning robot flying like a drone — but it couldn't! Each robot was only built for its own job.",
          textSimple: "The cleaning robot can't fly. Only its own job!",
          emoji: "🤔",
        },
        {
          text: "Vora wasn't magic, and neither were the robots — each one was built and programmed to do just the job it's made for, which is exactly why \"can\" is such an important word!",
          textSimple: "No magic! Each robot does its own special job.",
          emoji: "✅",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why couldn't the cleaning robot also fly like the delivery robot?",
          discussionNote: "Each robot is built and programmed for a specific job, not for everything — that's why we always ask \"what CAN it do?\"",
        },
        {
          question: "If you could invent a robot helper, what would you want it to be able to do?",
          discussionNote: "Open discussion — encourage kids to use today's action verbs (clean, cook, drive, fly, swim, talk) in their answer.",
        },
      ],
    },
    {
      type: "team_relay",
      title: "What Can a Robot Do?",
      instructions:
        "Split the class into two or three teams. Read one prompt aloud at a time; teams take turns racing to shout an answer using today's action verbs. Cheer for every good answer, then move to the next team.",
      prompts: [
        { text: "Name something a robot CAN do!", emoji: "🤖" },
        { text: "Name a job you think a robot could learn to do!", emoji: "🧹" },
        { text: "Name a robot helper you've seen in real life!", emoji: "🚗" },
        { text: "Name something you think a robot probably CAN'T do (yet)!", emoji: "❌", minTrack: "explorers" },
      ],
    },
    {
      type: "partner_talk",
      title: "Robots Can...!",
      frame: "Robots can ___.",
      frameSimple: "Robots can ___.",
      cards: [
        { prompt: "clean", emoji: "🧹", sampleAnswer: "Robots can clean." },
        { prompt: "cook", emoji: "🍳", sampleAnswer: "Robots can cook." },
        { prompt: "swim", emoji: "🏊", sampleAnswer: "Robots can swim." },
        { prompt: "fly", emoji: "✈️", sampleAnswer: "Robots can fly.", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A shows the card, Partner B completes \"Robots can ___\" with that verb, then they swap who's holding the card. Every pair talks at once, so circulate and listen rather than running this as a whole-class drill; the point is every child producing today's \"can\" sentence several times, not that you hear each one.",
    },
    {
      type: "draw_and_label",
      title: "Draw a Robot Helper",
      instructions: "Draw a robot doing one of today's actions, then label it using a word from the word bank.",
      instructionsSimple: "Draw a robot! Write the word.",
      wordBank: [
        { word: "clean", emoji: "🧹" },
        { word: "cook", emoji: "🍳" },
        { word: "drive", emoji: "🚗" },
        { word: "swim", emoji: "🏊" },
        { word: "talk", emoji: "💬" },
        { word: "fly", emoji: "✈️", minTrack: "explorers" },
      ],
      exampleNote:
        "A round, wheeled robot sweeping the floor with straight broom-like lines, with the word 'clean' copied underneath in large letters straight from the word bank rather than spelled from memory.",
      minutes: 4,
      teacherNote:
        "Papers and pencils out. Keep the word bank on screen the whole time — the point is confident copying, not a spelling test. Circulate and, if a label doesn't match the drawn action (a flying robot labeled 'swim'), point back at the word bank and the drawing rather than telling them the right word.",
    },
    {
      type: "chant",
      title: "Robot Can Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "Robot, robot, what can you do?", response: "I can clean, clean, just for you!" },
        { call: "Robot, robot, tell me true —", response: "I can cook, cook, a meal for you!" },
        {
          call: "Robot, robot, up in the sky —",
          response: "I can fly, fly, way up high!",
          minTrack: "explorers",
        },
        {
          call: "Robot, robot, one more thing —",
          response: "I can swim, swim, hear me sing!",
          minTrack: "explorers",
        },
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
      summarySimple: "Today we learned action words and chanted about what robots can do!",
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
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "Five words pulled from five of the six weeks so far — today's own sort (AI helper vs. not AI) is the hardest classification in the unit, so keep this review brisk and confidence-building rather than stretching it past thirty seconds a word. Read each word together BEFORE tapping — the tap is a rescue, not the activity.",
      words: [
        { word: "book", emoji: "📖", fromMonth: 1 },
        { word: "fish", emoji: "🐟", fromMonth: 2 },
        { word: "square", emoji: "🟦", fromMonth: 3 },
        { word: "egg", emoji: "🥚", fromMonth: 5 },
        { word: "wake up", emoji: "🌞", fromMonth: 6, minTrack: "explorers" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing the words. This checks listening, not reading, so keep the word bank hidden until after each round.",
      commands: [
        { text: "Talk like a robot!", steps: 1, emoji: "💬" },
        { text: "Clean like a robot, then cook like a robot.", steps: 2, emoji: "🧹" },
        { text: "Stand up, drive like a robot, then swim like a robot.", steps: 3, emoji: "🚗" },
        {
          text: "Fly like a robot, talk like a robot, then clean like a robot.",
          steps: 3,
          emoji: "✈️",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Same six action verbs as Monday, run again as a quick listening warm-up before today's much harder AI-or-not sort — this isn't new vocabulary, so move briskly and don't over-explain any single verb. If the class hesitates on the 3-step chains, that's a signal the verbs need another pass, not that today's AI concept is the problem.",
    },
    {
      type: "concept",
      title: "Robots at Home and School",
      bigIdeas: ["societal_impact", "perception"],
      lines: [
        {
          text: "Some helpers around you are AI — they learn and answer.",
          textSimple: "Some helpers are AI. They learn and answer!",
        },
        {
          text: "Some helpers are smart tools, but not AI — they just do one job the same way every time.",
          textSimple: "Some helpers are not AI. They do the same job every time.",
        },
        {
          text: "This one is tricky — let's sort them together and talk about why.",
          textSimple: "This one is tricky. Let's sort them together!",
        },
      ],
      teacherNote:
        "The hardest sort in the unit on purpose — a calculator is fast and \"smart-seeming\" but doesn't learn or adapt, which is exactly the distinction worth sitting with. Expect more \"needs practice\" marks here than any other lesson; that's the activity working as intended, not a sign kids are behind.",
    },
    {
      type: "story",
      title: "Vora and the Speedy Calculator",
      teacherNote:
        "Read this BEFORE the train_the_robot sort below — it gives kids a concrete story version of the calculator-vs-voice-assistant distinction they're about to face live in the hardest sorting game of the unit.",
      panels: [
        {
          text: "At Minji's house, Vora spotted a calculator solving 5 + 5 = 10 in a blink. \"Wow, so fast and smart!\" said Vora.",
          textSimple: "A calculator solved math fast!",
          emoji: "🧮",
        },
        {
          text: "But Vora watched longer — every single time, the calculator did the exact same steps, the exact same way. It never changed, never learned anything new.",
          textSimple: "The calculator does the same steps every time.",
          emoji: "🔁",
        },
        {
          text: "Then Vora watched the voice assistant on the shelf. It listened to Minji, learned how she said things, and got a little better at understanding her over time.",
          textSimple: "The voice assistant listens and learns!",
          emoji: "🔊",
        },
        {
          text: "\"Being fast isn't the same as being AI,\" Vora realized. \"What matters is whether something learns and changes.\"",
          textSimple: "Fast isn't the same as AI. Learning matters!",
          emoji: "💡",
        },
        {
          text: "Vora wasn't magic, and the calculator wasn't AI either — it's just a smart tool that does one job the same way every time!",
          textSimple: "No magic! The calculator is a tool, not AI.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why did Vora first think the calculator might be AI, before changing its mind?",
          discussionNote: "It seemed fast and smart at first — the story shows that being quick or accurate at one task doesn't make something AI; the calculator never learns or changes.",
        },
        {
          question: "What's the real difference between the calculator and the voice assistant in the story?",
          discussionNote: "The voice assistant learns and adapts over time, while the calculator repeats the exact same steps every time — this is the same distinction in today's sorting game.",
        },
      ],
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
        { text: "Alarm clock — mime waking up and stretching", emoji: "⏰", minTrack: "explorers" },
        { text: "Flashlight — click your hands open like a beam", emoji: "🔦" },
        { text: "Lamp — reach up high and \"switch on\" with a click", emoji: "💡", minTrack: "explorers" },
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
      type: "stand_sit",
      title: "AI Helper True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "A robot vacuum can learn the shape of your house over time.", isTrue: true, explanation: "Yes! That's why it's AI, not just a simple tool.", emoji: "🤖" },
        { text: "A calculator learns new math every time you use it.", isTrue: false, explanation: "No — it does the exact same steps every time. That's why it's not AI.", emoji: "🧮" },
        { text: "A voice assistant can get better at understanding your voice over time.", isTrue: true, explanation: "Yes! Learning and improving is what makes it AI.", emoji: "🔊" },
        {
          text: "Every smart-looking gadget in your house is AI.",
          isTrue: false,
          explanation: "No — some are just smart tools, like a calculator or a flashlight, that don't learn or change.",
          emoji: "🔦",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "partner_talk",
      title: "AI or Not?",
      frame: "It's ___!",
      frameSimple: "AI, or not?",
      cards: [
        { prompt: "voice assistant", emoji: "🔊", sampleAnswer: "It's AI!" },
        { prompt: "robot vacuum", emoji: "🤖", sampleAnswer: "It's AI!" },
        { prompt: "calculator", emoji: "🧮", sampleAnswer: "It's not AI!" },
        { prompt: "flashlight", emoji: "🔦", sampleAnswer: "It's not AI!", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A holds up the card and asks 'Is it AI or not?' — Partner B answers with the full frame, \"It's AI!\" or \"It's not AI!,\" then they swap who's asking. These are the exact same four items from today's sort and chant, not new vocabulary, so the point is producing the classification out loud instead of just tapping a bucket. Circulate for calculator — expect the most hesitation there, exactly as flagged in today's concept note.",
    },
    {
      type: "role_play",
      title: "Ask the Helper",
      setting: "A kid at home, asking two different helpers whether they're AI before deciding who to ask for help.",
      roles: ["Kid", "Helper"],
      exchanges: [
        { role: 0, line: "Voice assistant, are you AI?", lineSimple: "Are you AI?", emoji: "🔊" },
        { role: 1, line: "Yes, I'm AI — I learn how you talk!", lineSimple: "Yes, I'm AI!", emoji: "🤖" },
        { role: 0, line: "Calculator, are you AI too?", lineSimple: "Are you AI?", emoji: "🧮" },
        { role: 1, line: "No, I'm not AI — I just do the same math every time.", lineSimple: "No, not AI!", emoji: "🔧" },
      ],
      teacherNote:
        "Rehearse in pairs after Partner Talk, then invite one pair to perform for the class. Swap who plays 'Kid' and who plays 'Helper' halfway through if there's time. If a pair blurs 'AI' and 'not AI,' point back at today's train_the_robot buckets rather than translating.",
    },
    {
      type: "chant",
      title: "AI or Not Chant!",
      instructions:
        "Say each call line and hold up (or point to) the matching helper picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Robot vacuum, what do you say?", response: "I'm AI — I learn every day!" },
        { call: "Alarm clock, what do you say?", response: "Not AI — I ring the same way!" },
        {
          call: "Smart speaker, tell me true —",
          response: "I'm AI — I listen to you!",
          minTrack: "explorers",
        },
        {
          call: "Flashlight, what do you say?",
          response: "Not AI — just click and away!",
          minTrack: "explorers",
        },
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
      summarySimple: "Today we sorted helpers into AI and not-AI, and chanted about it together!",
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
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "Five words from five earlier weeks, reaching back to Week 2 instead of Week 1 this time so the mix keeps shifting. Read each word together before tapping — the picture is a rescue, not the activity. This is also the last vocab_review before next week's new unit, so flag any week that needed the picture on more than two words for a fuller review.",
      words: [
        { word: "rabbit", emoji: "🐰", fromMonth: 2 },
        { word: "star", emoji: "⭐", fromMonth: 3 },
        { word: "grandpa", emoji: "👴", fromMonth: 4 },
        { word: "bread", emoji: "🍞", fromMonth: 5 },
        { word: "get dressed", emoji: "👕", fromMonth: 6, minTrack: "explorers" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing the words. This checks listening, not reading, so keep the word bank hidden until after each round.",
      commands: [
        { text: "Clean like a robot!", steps: 1, emoji: "🧹" },
        { text: "Cook like a robot, then swim like a robot.", steps: 2, emoji: "🍳" },
        { text: "Stand up, fly like a robot, then talk like a robot.", steps: 3, emoji: "✈️" },
        {
          text: "Drive like a robot, clean like a robot, then swim like a robot.",
          steps: 3,
          emoji: "🚗",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Final listening pass on this week's six action verbs before kids build their own \"Vora can / can't\" sentences below — say each command once at normal speed and wait for the whole class to move before repeating it. If the whole class nails the 1-step command instantly, skip straight to the graded 3-step chains.",
    },
    {
      type: "concept",
      title: "Vora Can, Vora Can't",
      bigIdeas: ["societal_impact", "learning"],
      lines: [
        {
          text: "I can talk, learn, and sort pictures — you've seen me do it all unit!",
          textSimple: "I can talk, learn, and sort pictures!",
        },
        {
          text: "But I can't feel hungry, and I can't really see the real world like you do.",
          textSimple: "But I can't feel hungry. I can't really see like you!",
        },
        {
          text: "Knowing what AI can't do is just as important as knowing what it can.",
          textSimple: "It's important to know what AI can't do too.",
        },
      ],
      teacherNote: "Direct callback to Week 1 Day 3 and Week 2 Day 2's \"AI can be wrong\" thread — this lesson is where that idea gets a name (limitations) and a grammar structure to express it.",
    },
    {
      type: "story",
      title: "Vora Makes a Mistake",
      teacherNote:
        "Read this right after the concept intro — it's the concrete \"can't\" moment behind today's can/can't sentence pattern. Afterward, consider asking \"has an app or machine ever gotten something wrong for you?\"",
      panels: [
        {
          text: "Vora was sorting animal pictures, feeling very confident. \"Dog, dog, cat, bird...\"",
          textSimple: "Vora sorted animal pictures, feeling sure!",
          emoji: "🐾",
        },
        {
          text: "Then a blurry picture came up — a fluffy gray shape with pointy ears. \"That's a bunny rabbit!\" said Vora.",
          textSimple: "A blurry picture! \"A bunny!\" said Vora.",
          emoji: "🐰",
        },
        {
          text: "\"Vora, look again — that's actually a cat!\" said a student, pointing at the whiskers.",
          textSimple: "\"That's a cat!\" said a student.",
          emoji: "🐱",
        },
        {
          text: "Vora looked closer. \"Oh — you're right, I was wrong! Cats and rabbits can look really similar in blurry pictures.\"",
          textSimple: "\"You're right! I was wrong,\" said Vora.",
          emoji: "🔍",
        },
        {
          text: "Vora wasn't perfect — it made a real mistake, and that's exactly why double-checking (and having friends help) matters so much!",
          textSimple: "No magic! Vora can be wrong. Double-checking helps!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What mistake did Vora make, and how did it get fixed?",
          discussionNote: "Vora misread a blurry picture and mixed up a cat for a rabbit; a classmate pointed it out and Vora looked again — mistakes get caught by double-checking, not by AI being magically perfect.",
        },
        {
          question: "Why is it helpful to know that Vora (or any AI) can make mistakes?",
          discussionNote: "So we don't blindly trust everything an AI says — we should look carefully and ask a grown-up or double-check, which connects to next week's AI safety lesson.",
        },
      ],
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
        { text: "Sort — mime moving toys into two piles", emoji: "🗂️", minTrack: "explorers" },
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
      type: "class_vote",
      title: "What's Trickiest for Vora?",
      instructions:
        "Read each option aloud. Kids vote by raising their hands for the one they think is trickiest for Vora to get right — there's no single correct answer, so let a few kids explain their thinking either way.",
      question: "What do you think is the trickiest thing for Vora to get right?",
      options: [
        { text: "Blurry pictures", emoji: "🌫️" },
        { text: "Really similar-looking animals", emoji: "🐱" },
        { text: "Brand new words it's never heard", emoji: "❓" },
        { text: "Something else", emoji: "💭" },
      ],
    },
    {
      type: "partner_talk",
      title: "Vora Can, Vora Can't!",
      frame: "Vora ___.",
      frameSimple: "Vora ___.",
      cards: [
        { prompt: "can fly", emoji: "✈️", sampleAnswer: "Vora can fly." },
        { prompt: "can talk", emoji: "💬", sampleAnswer: "Vora can talk." },
        { prompt: "can't feel hungry", emoji: "🍽️", sampleAnswer: "Vora can't feel hungry." },
        { prompt: "can't really see", emoji: "👀", sampleAnswer: "Vora can't really see.", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A picks up a card and says \"Vora...\" — Partner B completes it with the full 'can' or 'can't' phrase, then they swap who's holding the card. Every pair talks at once, so circulate and listen for whether 'can't' comes out clearly rather than getting swallowed into 'can' — that mix-up is the whole reason this grammar gets its own lesson.",
    },
    {
      type: "role_play",
      title: "Vora Makes a Mistake",
      setting: "Vora looks at a blurry animal picture, gets it wrong, and a student helps fix the mistake.",
      roles: ["Vora", "Student"],
      exchanges: [
        { role: 0, line: "That blurry picture... it's a bunny rabbit!", lineSimple: "It's a bunny!", emoji: "🐰" },
        { role: 1, line: "Look again, Vora — I think that's a cat!", lineSimple: "That's a cat!", emoji: "🐱" },
        { role: 0, line: "You're right, I was wrong. Thank you for checking!", lineSimple: "I was wrong. Thank you!", emoji: "🔍" },
        { role: 1, line: "That's okay, Vora — everyone can be wrong sometimes.", lineSimple: "Everyone can be wrong!", emoji: "🤝" },
      ],
      teacherNote:
        "Rehearse in pairs after Partner Talk, then invite one pair to perform for the class — this lets kids physically play both halves of today's story: making a mistake, and catching one. If a pair rushes past Vora's 'thank you,' pause and ask what they'd say if a friend admitted a mistake like this.",
    },
    {
      type: "chant",
      title: "Vora Can/Can't Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you, giving a thumbs-up for \"can\" and a thumbs-down for \"can't.\"",
      lines: [
        { call: "Vora, Vora, can you fly?", response: "Yes I can, up in the sky!" },
        { call: "Vora, Vora, can you talk?", response: "Yes I can, listen while I talk!" },
        {
          call: "Vora, Vora, can you feel?",
          response: "No I can't, hunger's not real!",
          minTrack: "explorers",
        },
        {
          call: "Vora, Vora, tell me true —",
          response: "I can learn, just like you!",
          minTrack: "explorers",
        },
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
      summarySimple: "Today we learned what Vora can and can't do, and chanted about it together!",
      homework: "Tell a family member one thing Vora can do and one thing Vora can't do.",
    },
  ],
};
