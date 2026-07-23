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
      type: "story",
      title: "Vora's First Halloween",
      teacherNote:
        "Read each panel aloud, pausing after panel 3 to ask \"So is the bat spooky or not spooky? How do you think Vora will decide?\" before revealing panel 4 — let kids predict using the same examples Vora saw.",
      panels: [
        { text: "It was Vora's very first Halloween. A paper bat hung from the ceiling, and Vora didn't know if it should feel spooky or not!", textSimple: "It was Vora's first Halloween. Is a bat spooky?", emoji: "🦇" },
        { text: "\"Is a bat spooky?\" Vora wondered. \"I've never seen one before tonight.\"", textSimple: "Vora wondered, \"Is a bat spooky?\"", emoji: "🤔" },
        { text: "Vora looked at ten Halloween pictures the class had already sorted — ghosts, witches, and bats were all in the \"spooky\" pile.", textSimple: "Vora looked at ten sorted pictures. Ghosts and witches were spooky.", emoji: "👻" },
        { text: "\"Oh! Every flying, nighttime creature in my examples went in the spooky pile. I bet this bat goes there too!\"", textSimple: "\"Flying night creatures are spooky. This bat too!\"", emoji: "💡" },
        { text: "Vora placed the bat in the spooky pile — and got it right! Just by learning from examples, without anyone explaining the rule.", textSimple: "Vora put the bat with the spooky things. Correct!", emoji: "✅" },
        { text: "It wasn't magic — Vora learned the same way YOU do: by looking at lots of examples until a pattern becomes clear.", textSimple: "No magic! Vora learned from lots of examples, just like you.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "How did Vora decide the bat was spooky, without being told directly?", discussionNote: "Vora compared it to lots of already-sorted examples and noticed a pattern — that's learning from examples." },
        { question: "Can you think of something that seems spooky to YOU but might not seem spooky to someone else?", discussionNote: "Open discussion — sorting can feel a little different for everyone; there's no single \"correct\" feeling of spooky." },
      ],
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
      type: "team_relay",
      title: "Spooky or Not Spooky Relay!",
      instructions:
        "Split the class into two teams. Read each prompt aloud and let teams take turns shouting an answer — any true answer counts, keep the energy spooky and fun!",
      prompts: [
        { text: "Name something spooky!", emoji: "👻" },
        { text: "Name something NOT spooky!", emoji: "🌸" },
        { text: "Name a Halloween costume word!", emoji: "🎭" },
        { text: "Name a Halloween treat!", emoji: "🍬" },
        { text: "Name a creature that flies at night!", emoji: "🦇", minTrack: "explorers" },
      ],
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
      type: "story",
      title: "Vora's Big Box of Shoes",
      teacherNote:
        "Read each panel aloud, pausing after panel 2 to ask \"How would YOU match the shoes?\" before revealing Vora's method — connects directly to the memory-match game that follows.",
      panels: [
        { text: "At the Halloween party, all the kids' shoes got mixed up in one big spooky pile!", textSimple: "All the shoes got mixed up in one big pile!", emoji: "👟" },
        { text: "Vora tried to help sort them back into pairs, but some shoes looked almost the same.", textSimple: "Vora tried to match pairs. Some looked the same!", emoji: "😵" },
        { text: "Vora looked closely at little details — a tiny pumpkin sticker, a scuffed toe — and matched shoes by their small clues.", textSimple: "Vora looked for small clues, like a sticker or a scuff.", emoji: "🔍" },
        { text: "\"I'm doing exactly what I do with pictures — comparing examples closely until I find what matches!\"", textSimple: "\"I compare closely until I find a match!\"", emoji: "💡" },
        { text: "One by one, every shoe found its partner, and the party could start on time!", textSimple: "Every shoe found its partner!", emoji: "🎉" },
        { text: "It wasn't magic — just careful comparing, the same skill from today's memory match game.", textSimple: "No magic! Just careful comparing.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "What clues did Vora use to match the shoes?", discussionNote: "Small details like stickers or scuff marks — comparing examples closely is the same skill as the memory match game." },
        { question: "What's a time YOU had to match two things that looked almost the same?", discussionNote: "Open discussion — socks, puzzle pieces, twins' outfits, and more — connects the skill to real life." },
      ],
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
      type: "stand_sit",
      title: "Halloween True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "A pumpkin is a kind of fruit.", isTrue: true, explanation: "Yes! Pumpkins are actually a fruit, just like squash.", emoji: "🎃" },
        { text: "Ghosts can only say \"boo\" in English.", isTrue: false, explanation: "No — \"boo\" is just one fun way to be spooky, not a rule!", emoji: "👻" },
        { text: "Bats sleep during the day and fly at night.", isTrue: true, explanation: "Yes! Bats are nocturnal, so they're most active at night.", emoji: "🦇", minTrack: "explorers" },
        { text: "Every costume needs to be scary.", isTrue: false, explanation: "No — costumes can be silly, cute, or anything you like!", emoji: "🎭" },
      ],
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
      type: "story",
      title: "Vora Guesses Who's Next",
      teacherNote:
        "Read each panel aloud, pausing after panel 3 to ask \"Who do YOU think comes to the door next?\" before revealing panel 4 — let kids predict using the pattern before Vora does.",
      panels: [
        { text: "Knock, knock! A ghost came to the door. Knock, knock! A pumpkin came next. Knock, knock! A ghost again!", textSimple: "Knock knock! Ghost. Knock knock! Pumpkin. Knock knock! Ghost!", emoji: "🚪" },
        { text: "Vora watched from the window. \"Ghost, pumpkin, ghost... I wonder who's next!\"", textSimple: "Vora watched. \"Ghost, pumpkin, ghost... who's next?\"", emoji: "🤔" },
        { text: "Vora noticed the costumes seemed to be taking turns, back and forth, over and over.", textSimple: "The costumes took turns, back and forth.", emoji: "🔁" },
        { text: "\"If the pattern keeps going, the next trick-or-treater should be a pumpkin!\"", textSimple: "\"The pattern says pumpkin comes next!\"", emoji: "💡" },
        { text: "Knock, knock! A kid in a pumpkin costume! \"I guessed it!\" cheered Vora.", textSimple: "Knock knock! A pumpkin costume! \"I guessed it!\"", emoji: "🎃" },
        { text: "It wasn't magic — Vora just noticed a pattern and made a careful guess, the same way we predicted patterns in today's game.", textSimple: "No magic! Just noticing a pattern and guessing.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "How did Vora guess which costume would come to the door next?", discussionNote: "Vora noticed the ghost/pumpkin pattern repeating and used it to make a careful guess — the same skill as today's pattern game." },
        { question: "Could the pattern have been wrong? What might make Vora's guess not come true?", discussionNote: "Open discussion — patterns are good guesses, not guarantees; a new costume could break the pattern at any time." },
      ],
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
      type: "class_vote",
      title: "Pick Your Costume!",
      instructions:
        "Read the question aloud. Kids vote by raising hands for their favorite option, or call out their own costume idea for \"something else\" — there's no wrong answer!",
      question: "If you could be any Halloween costume, what would you choose?",
      questionSimple: "What costume do you want?",
      options: [
        { text: "Ghost", emoji: "👻" },
        { text: "Witch", emoji: "🧙" },
        { text: "Pumpkin", emoji: "🎃" },
        { text: "Something else!", emoji: "✨" },
      ],
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
      type: "story",
      title: "Vora's Wildest Costume Yet",
      teacherNote:
        "Read each panel aloud, really hamming up panel 3 — the sillier Vora's costume, the better. Pause before panel 4 to ask \"What's the same about all of Vora's sentences?\"",
      panels: [
        { text: "\"I'm a ghost,\" said Vora, wearing a bedsheet. \"But what if I want to be something nobody's ever been before?\"", textSimple: "\"I'm a ghost,\" said Vora. \"What about something new?\"", emoji: "👻" },
        { text: "Vora looked around the room for ideas — a lunchbox, a lamp, a stack of books...", textSimple: "Vora looked around for ideas.", emoji: "🔍" },
        { text: "\"I'm a lamp!\" Vora announced, wearing a shade on its head and holding a flashlight. Everyone laughed and clapped.", textSimple: "\"I'm a lamp!\" said Vora. Everyone laughed!", emoji: "💡" },
        { text: "\"Wait — I just used the SAME sentence pattern as 'I'm a ghost'! Only the costume word changed.\"", textSimple: "\"Same sentence! Only the costume word changed!\"", emoji: "🧠" },
        { text: "\"I'm a ghost. I'm a lamp. I'm a dinosaur wearing sunglasses! Any silly costume fits the same sentence.\"", textSimple: "\"Any silly costume fits the same sentence!\"", emoji: "🦖" },
        { text: "It's not about picking the \"right\" costume — it's about knowing the pattern \"I'm a ___\" so ANY true or silly answer works!", textSimple: "No wrong costume — any answer fits \"I'm a ___\"!", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "What stayed the same every time Vora said a new costume?", discussionNote: "The sentence pattern \"I'm a ___\" stayed the same — only the costume word changed, the same idea as swapping words into any of this year's sentence frames." },
        { question: "What's the silliest costume YOU can think of to finish \"I'm a ___\"?", discussionNote: "Open discussion — encourage wild, silly answers; there's no wrong costume today." },
      ],
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
      type: "team_relay",
      title: "Silly Costume Relay!",
      instructions:
        "Split into two teams. Read each prompt aloud and let team members take turns shouting any costume idea using \"I'm a ___\" — silly and made-up answers are all correct today!",
      prompts: [
        { text: "Shout out any costume idea: \"I'm a ___!\"", emoji: "🎭" },
        { text: "Name a real Halloween costume!", emoji: "👻" },
        { text: "Name the silliest costume you can think of!", emoji: "🦖" },
        { text: "Name a costume using two words, like \"a scary witch\"!", emoji: "🧙", minTrack: "explorers" },
        { text: "Name a costume that isn't spooky at all!", emoji: "🌈", minTrack: "explorers" },
      ],
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
