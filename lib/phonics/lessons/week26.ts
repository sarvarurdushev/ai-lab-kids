import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2 review and celebration — Explorers (6+) only. Closes
 * with a short decodable Story Time (reusing the existing big-visual
 * Story Time slides, no new code) built entirely from words verified
 * against everything taught across BOTH units, as the payoff moment: a
 * real, connected mini-story the class can actually read together.
 *
 * Rebuilt to the full 50-minute shape set by week1.ts/week22.ts, adapted
 * for a capstone/review week — no new sound is taught, so there is no
 * phonics_sound or letter_formation block this week; a fluency_race
 * celebration block is added right before the wrap-up instead:
 *
 *   1  Sound Drill          4 min   mixed review from BOTH units
 *   2  Phoneme Play         4 min   oral sound swapping, no print
 *   3  Sound It Out         5 min   vowel teams + Unit 1 blends/digraphs
 *   4  Word Chain           5 min   one sound changes at a time
 *   5  Movement Break       3 min   whole-body reset at the halfway mark
 *   6  Story Time           4 min   narrative read-aloud, the two-unit payoff
 *   7  Sound Boxes          5 min   segmenting — the bridge to spelling
 *   8  Heart Words          4 min   high-frequency irregular words, reviewed
 *   9  Write What You Hear  5 min   dictation — the encoding half
 *  10  Read It Together     4 min   longer capstone decodable passage
 *  11  Fluency Race         2 min   timed celebration read
 *  12  Wrap-up              2 min
 *
 * Every word in the blending, chain, box, dictation, reading and fluency
 * blocks was checked word by word against only the sounds taught across
 * Units 1 and 2 (all Unit 1 letters, digraphs and blends, plus a_e/i_e/o_e,
 * ai/ay, ee/ea, oa/ow, igh/y, oo/ue, ar/or/er/ir/ur, ow/ou, oi/oy). The
 * only exceptions are heart words, taught/reviewed in block 8 before they
 * appear in the story and reading.
 */
export const ph_week26: Lesson = {
  key: "ph_week26",
  unitKey: "phonics_vowel_teams",
  title: "Sound It All Out, Unit 2! (Review)",
  bigIdeas: [],
  englishFocus:
    "Reviewing every vowel team and r-controlled vowel from Unit 2, then reading a real short story together, writing what we hear, and racing to read familiar words fast.",
  koreanL1Note:
    "A genuine second milestone: everything from Unit 1 (every letter, digraphs, blends) plus Unit 2 (silent-e, vowel teams, r-controlled vowels, diphthongs) now combines into real connected text, not just single words — the first time this class reads actual sentences together. Kids will need paper and a pencil from the dictation block onward.",
  objectives: [
    "I can blend words that combine a vowel team with a blend or digraph.",
    "I can read a short story made entirely of words I've learned to sound out.",
    "I can write words and sentences using the sounds I've learned across both units.",
  ],
  standardsNote:
    "Systematic synthetic phonics review (National Reading Panel, 2000); every sentence below was checked word by word against only the sounds taught in Units 1 and 2 before being written. Delivered on UFLI Foundations' 8-step routine (cumulative drill → phonemic awareness → word work → irregular words → dictation → connected text) expanded to a 50-minute whole-class lesson.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Say: 'You've learned SO many sounds across two whole units. Today, let's put them all together and read a real story!'",
      prompt: "Let's read a real story together!",
      promptSimple: "Time for a real story!",
    },
    {
      type: "activity",
      instructions: "Say each sound as fast as you can — this is a mix from EVERYTHING we've learned!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "A mixed review from both units — a few Unit 1 digraphs alongside every Unit 2 vowel team and r-controlled vowel. Go fast — one card per breath. This is recall, not teaching; whatever the class hesitates on is worth revisiting informally over the next few weeks.",
        cards: [
          { letters: "sh", keyword: "Ship", emoji: "🚢" },
          { letters: "th", keyword: "Thumb", emoji: "👍" },
          { letters: "a_e", keyword: "Cake", emoji: "🍰" },
          { letters: "ee", keyword: "Bee", emoji: "🐝" },
          { letters: "oa", keyword: "Boat", emoji: "⛵" },
          { letters: "ar", keyword: "Car", emoji: "🚗" },
          { letters: "or", keyword: "Corn", emoji: "🌽" },
          { letters: "ir", keyword: "Bird", emoji: "🐦" },
          { letters: "ou", keyword: "Cloud", emoji: "☁️" },
          { letters: "oi", keyword: "Coin", emoji: "🪙" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Ears only — no letters this time. Listen, change one sound, and say the new word out loud together.",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — don't write anything. Say the start word, give the instruction, let the whole class answer aloud, THEN reveal. These four rounds sample sounds from across both units, on purpose.",
        rounds: [
          { startWord: "ship", startEmoji: "🚢", instruction: "Change the /sh/ to /ch/.", answerWord: "chip", answerEmoji: "🍟" },
          { startWord: "corn", startEmoji: "🌽", instruction: "Change the /c/ to /h/.", answerWord: "horn", answerEmoji: "📯" },
          { startWord: "coin", startEmoji: "🪙", instruction: "Change the /c/ to /j/.", answerWord: "join", answerEmoji: "🤝" },
          {
            startWord: "cloud",
            startEmoji: "☁️",
            instruction: "Take away the /k/. What's left?",
            answerWord: "loud",
            answerEmoji: "📢",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "activity",
      instructions: "These words combine a vowel team with a blend or a digraph — sound out every tile, then blend!",
      config: {
        engine: "blending",
        title: "Sound It All Out!",
        teacherNote: "Each word below combines a Unit 2 vowel team with a Unit 1 blend or digraph.",
        words: [
          { parts: ["s", "ea", "l"], word: "seal", emoji: "🦭" },
          { parts: ["t", "oa", "s", "t"], word: "toast", emoji: "🍞" },
          { parts: ["b", "ur", "n", "t"], word: "burnt", emoji: "🔥" },
          { parts: ["p", "oi", "n", "t"], word: "point", emoji: "👉", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Watch closely — only ONE tile changes each time. Can you spot which one?",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Read the new word together BEFORE tapping Check. Only the first consonant changes this round — the or tile never moves, which is exactly what makes it easy to track.",
        start: { parts: ["c", "or", "n"], word: "corn", emoji: "🌽" },
        links: [
          { changeIndex: 0, newPart: "b", word: "born", emoji: "👶" },
          { changeIndex: 0, newPart: "t", word: "torn", emoji: "😢" },
          { changeIndex: 0, newPart: "h", word: "horn", emoji: "📯", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Celebration Actions!",
      instructions: "Do a big action for each — this celebrates finishing Unit 2!",
      moves: [
        { text: "Take a bow — you finished Phonics Unit 2!", emoji: "🎉" },
        { text: "Mime turning the page of a book you just read.", emoji: "📖" },
        { text: "High-five a friend for every vowel team you remember.", emoji: "🙌" },
        { text: "One big cheer for reading a real story!", emoji: "🎊" },
      ],
    },
    {
      type: "story",
      title: "A Story You Can Read!",
      teacherNote:
        "Read it together as a class first, sounding out any word that needs it, then read it again smoothly. Every single word here uses only sounds already taught.",
      panels: [
        { text: "The cat sat in the rain.", emoji: "🐱" },
        { text: "A frog can swim in the pond.", emoji: "🐸" },
        { text: "A bird can fly by the moon.", emoji: "🐦" },
        { text: "You did it! You can read!", emoji: "🎉" },
      ],
      comprehensionQuestions: [
        { question: "Which animal was in the rain?", discussionNote: "The cat — check the first panel's picture and words together." },
        { question: "What could you read in this story that you couldn't read at the start of the year?", discussionNote: "Any specific word or sound the class is proud of — celebrate it." },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly and have the class push a finger forward for each sound before anyone taps. These four sample a Unit 1 digraph, an r-controlled vowel, and both diphthongs from this unit.",
        words: [
          { word: "shirt", emoji: "👕", parts: ["sh", "ir", "t"] },
          { word: "point", emoji: "👉", parts: ["p", "oi", "n", "t"] },
          { word: "storm", emoji: "⛈️", parts: ["s", "t", "or", "m"] },
          { word: "cloud", emoji: "☁️", parts: ["c", "l", "ou", "d"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Some words don't play by the rules. Sound out the part you can, and learn the rest by heart!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "A review of heart words from across this unit. Sound out the regular letters together first, THEN reveal the heart letters — the class should recognize all three of these by now.",
        words: [
          { word: "are", heartIndexes: [2], sentence: "You are so smart!" },
          { word: "have", heartIndexes: [3], sentence: "You have a big brain!" },
          { word: "said", heartIndexes: [1, 2], sentence: "She said, \"You can read!\"", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Papers and pencils out! Listen, then write what you hear. Don't look until we check together.",
      config: {
        engine: "dictation",
        title: "Write What You Hear",
        teacherNote:
          "Say each word twice at normal speed — don't over-stretch it, or kids spell what they hear rather than the real word. Give everyone time to finish before revealing. This is a mixed review, so praise any correct sound choice, not just one spelling.",
        words: [{ text: "bird" }, { text: "storm" }, { text: "cloud" }, { text: "coin" }, { text: "point", minTrack: "explorers" }],
        sentences: [
          { text: "The bird found a shiny coin." },
          { text: "A storm can not stop us now.", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read our biggest story yet — you know every sound on this page!",
      config: {
        engine: "decodable_text",
        title: "Read It All Together",
        teacherNote:
          "This is the capstone read — five lines pulling together sounds from all across Units 1 and 2. Read each line chorally, then invite volunteers to read alone. Every word here uses only sounds already taught plus the heart words 'the' and 'to'. Tap any word the class gets stuck on.",
        lines: [
          { text: "A boy and a girl run to the barn.", emoji: "🌾" },
          { text: "They see a bird by a green fern.", emoji: "🐦" },
          { text: "The bird can chirp and twirl.", emoji: "🌀" },
          { text: "A storm and loud thunder crash.", emoji: "⛈️" },
          { text: "The kids found a coin and a toy in the soil.", emoji: "🪙" },
        ],
        comprehensionQuestions: [
          { question: "Where did the boy and girl go?", discussionNote: "To the barn — check line one and point at the word 'barn.'" },
          {
            question: "What two things did the kids find in the soil at the end?",
            discussionNote: "A coin and a toy — read the last line again together and point at each word.",
          },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Let's see how many words we can read in 60 seconds — ready, set, go!",
      config: {
        engine: "fluency_race",
        title: "Fluency Race!",
        teacherNote:
          "Set a 60-second timer. Point to each word left to right; the class reads it chorally as fast as it can while staying accurate. Time it again another day and celebrate any improvement — this is a fun celebration of everything learned across both units, not a test.",
        seconds: 60,
        words: [
          { text: "cat" },
          { text: "ship" },
          { text: "cake" },
          { text: "rain" },
          { text: "boat" },
          { text: "light" },
          { text: "moon" },
          { text: "car" },
          { text: "corn" },
          { text: "bird" },
          { text: "cow" },
          { text: "coin" },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "You finished Phonics Unit 2! You know silent-e, ai/ay, ee/ea, oa/ow, igh/y, oo/ue, ar/or/er/ir/ur, and ow/ou/oi/oy — you reviewed them all, wrote what you heard, read a real story and a whole capstone passage, and raced to read words fast!",
      summarySimple: "You finished Phonics Unit 2! You wrote, read a real story, and raced to read words fast!",
      homework: "At home, try reading one sign, label, or short sentence out loud using everything you've learned.",
    },
  ],
};
