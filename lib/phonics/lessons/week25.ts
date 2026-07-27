import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 14 — diphthongs: oi, oy. Explorers (6+) only.
 *
 * Rebuilt to the full 50-minute shape set by week1.ts/week22.ts — same
 * block order, same reasons:
 *
 *   1  Sound Drill          4 min   cumulative review of Unit 2 so far
 *   2  Phoneme Play         4 min   oral sound swapping, no print
 *   3  Sound of the Day     5 min   oi (middle) and oy (end)
 *   4  Write It Big         4 min   handwriting the oi pattern
 *   5  Sound It Out         5 min   blending it into words
 *   6  Word Chain           5 min   one sound changes at a time
 *   7  Movement Break       3 min   whole-body reset at the halfway mark
 *   8  Sound Boxes          5 min   segmenting — the bridge to spelling
 *   9  Heart Words          4 min   high-frequency irregular words
 *  10  Write What You Hear  5 min   dictation — the encoding half
 *  11  Read It Together     4 min   connected decodable text
 *  12  Wrap-up              2 min
 *
 * Every word in the blending, chain, box, dictation and reading blocks was
 * checked against the cumulative set through this week (all Unit 1 letters,
 * digraphs and blends, plus a_e/i_e/o_e, ai/ay, ee/ea, oa/ow, igh/y, oo/ue,
 * ar/or/er/ir/ur, ow/ou and today's oi/oy). The only exceptions are heart
 * words, which are taught as heart words in block 9 before they appear in
 * the reading.
 */
export const ph_week25: Lesson = {
  key: "ph_week25",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: oi, oy",
  bigIdeas: [],
  englishFocus:
    "Learning that oi and oy both make the same sound — then reading, blending, and writing words that use them.",
  koreanL1Note:
    "No particular Korean-L1 trouble sound here — the split between oi (middle of word) and oy (end of word) mirrors the ai/ay pattern from earlier in this unit, which should make it click quickly. Kids will need paper and a pencil from the Write It Big block onward.",
  objectives: [
    "I know that oi and oy make the same sound.",
    "I can blend words that use the oi or oy pattern.",
    "I can write words with the oi or oy pattern when I hear them.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — diphthongs, oi/oy. Delivered on UFLI Foundations' 8-step routine (cumulative drill → phonemic awareness → new concept → word work → irregular words → dictation → connected text) expanded to a 50-minute whole-class lesson.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class that ai goes in the middle of a word and ay goes at the end. Say: 'Today's pair works the exact same way.'",
      prompt: "One more team split by word position!",
      promptSimple: "One more sound: oi and oy!",
    },
    {
      type: "activity",
      instructions: "Say each sound as fast as you can — these are all sounds you already know!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Cumulative review of every vowel team and r-controlled vowel taught so far in this unit. Go fast — one card per breath. Anything the class hesitates on is what to slip back into the movement break later. Don't teach here, just recall.",
        cards: [
          { letters: "a_e", keyword: "Cake", emoji: "🍰" },
          { letters: "ai", keyword: "Rain", emoji: "🌧️" },
          { letters: "ee", keyword: "Bee", emoji: "🐝" },
          { letters: "oa", keyword: "Boat", emoji: "⛵" },
          { letters: "igh", keyword: "Light", emoji: "💡" },
          { letters: "oo", keyword: "Moon", emoji: "🌙" },
          { letters: "ar", keyword: "Car", emoji: "🚗" },
          { letters: "or", keyword: "Corn", emoji: "🌽" },
          { letters: "ir", keyword: "Bird", emoji: "🐦" },
          { letters: "ou", keyword: "Cloud", emoji: "☁️" },
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
          "Purely oral — don't write anything. Say the start word, give the instruction, let the whole class answer aloud, THEN reveal. oi and oy sound identical, so what's moving is only the consonant, never the vowel.",
        rounds: [
          { startWord: "coin", startEmoji: "🪙", instruction: "Change the /c/ to /j/.", answerWord: "join", answerEmoji: "🤝" },
          { startWord: "toy", startEmoji: "🧸", instruction: "Change the /t/ to /b/.", answerWord: "boy", answerEmoji: "🧑" },
          { startWord: "boy", startEmoji: "🧑", instruction: "Change the /b/ to /j/.", answerWord: "joy", answerEmoji: "😊" },
          {
            startWord: "oil",
            startEmoji: "🛢️",
            instruction: "Add /b/ to the front.",
            answerWord: "boil",
            answerEmoji: "🍲",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "oi",
      keyword: "Coin",
      keywordEmoji: "🪙",
      actionCue: "Mime flipping a coin and say oy-oy-oy.",
      teacherNote: "Used in the middle of a word (coin, boil) — just like 'ai' from earlier in this unit.",
    },
    {
      type: "phonics_sound",
      letters: "oy",
      keyword: "Toy",
      keywordEmoji: "🧸",
      actionCue: "Mime playing with a favorite toy and say the exact same sound: oy-oy-oy.",
      teacherNote: "Used at the end of a word (toy, boy) — the same middle/end split as 'ai' and 'ay.'",
    },
    {
      type: "letter_formation",
      letters: "oi",
      strokes: [
        "Start the o just below the top line and circle all the way around back to where you started.",
        "Lift your pencil and set it down right next to the o.",
        "For the i, pull straight down in a short line.",
        "Lift again and add a dot right on top.",
      ],
      skyWriteCue: "Everyone stand up and sky-write a giant o, then a giant i with its dot — say oi-oi-oi the whole time, never 'oh-eye'!",
      teacherNote:
        "Two letters, one sound — same idea as every vowel team and r-controlled pattern so far. oi shows up in the middle of a word (like coin). Say the single oi sound while writing both letters as a pair, air first, then on paper.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — oi and oy are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "oi shows up in the middle of a word, oy at the end — same pattern as ai/ay.",
        words: [
          { parts: ["c", "oi", "n"], word: "coin", emoji: "🪙" },
          { parts: ["b", "oi", "l"], word: "boil", emoji: "🍲" },
          { parts: ["t", "oy"], word: "toy", emoji: "🧸" },
          { parts: ["b", "oy"], word: "boy", emoji: "🧑", minTrack: "explorers" },
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
          "Read the new word together BEFORE tapping Check. Only the first consonant changes this round — the oi tile never moves, which is exactly what makes it easy to track.",
        start: { parts: ["b", "oi", "l"], word: "boil", emoji: "🍲" },
        links: [
          { changeIndex: 0, newPart: "c", word: "coil", emoji: "🌀" },
          { changeIndex: 0, newPart: "f", word: "foil", emoji: "🧻" },
          { changeIndex: 0, newPart: "s", word: "soil", emoji: "🟤", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "oi — flip a coin, oy-oy-oy", emoji: "🪙" },
        { text: "Mime stirring a boiling pot — careful, hot!", emoji: "🍲" },
        { text: "oy — hug your favorite toy, oy-oy-oy", emoji: "🧸" },
        { text: "Give a thumbs up, just like this word ends!", emoji: "👍" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly and have the class push a finger forward for each sound before anyone taps. 'point' is the one to slow down on — five letters but only four sounds, since 'oi' is two letters doing one job.",
        words: [
          { word: "toy", emoji: "🧸", parts: ["t", "oy"] },
          { word: "coin", emoji: "🪙", parts: ["c", "oi", "n"] },
          { word: "point", emoji: "👉", parts: ["p", "oi", "n", "t"] },
          { word: "moist", emoji: "💧", parts: ["m", "oi", "s", "t"], minTrack: "explorers" },
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
          "Sound out the regular letters together first, THEN reveal the heart letters. 'some' is a good one to name explicitly: the class already knows short o and silent e as separate rules — 'some' breaks both, which is exactly why it has to be learned by heart.",
        words: [
          { word: "some", heartIndexes: [1], sentence: "We have some toy coins." },
          { word: "have", heartIndexes: [3], sentence: "Boys have fun at the pond." },
          { word: "they", heartIndexes: [2, 3], sentence: "They enjoy the toy shop.", minTrack: "explorers" },
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
          "Say each word twice at normal speed — don't over-stretch it, or kids spell what they hear rather than the real word. Give everyone time to finish before revealing. Praise correct SOUNDS even if the handwriting is wobbly; today's spelling choice between oi and oy is the only thing being assessed.",
        words: [{ text: "toy" }, { text: "coin" }, { text: "boil" }, { text: "point" }, { text: "soil", minTrack: "explorers" }],
        sentences: [
          { text: "The boy has a toy and a coin." },
          { text: "We have some soil for the plant.", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read it for real — you know every sound on this page!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally, then invite one child to read it alone if they'd like to. Every word uses only sounds taught so far plus the heart words 'the,' 'they' and 'have'. Tap any word the class gets stuck on.",
        lines: [
          { text: "A boy has a toy car.", emoji: "🚗" },
          { text: "A girl found a coin in the soil.", emoji: "🪙" },
          { text: "They join hands and have fun.", emoji: "🤝" },
          { text: "Boys enjoy toys with joy.", emoji: "🧸" },
        ],
        comprehensionQuestions: [
          { question: "What did the girl find in the soil?", discussionNote: "A coin — check line two and point at the word 'coin.'" },
          {
            question: "Which two words in the last line sound almost the same?",
            discussionNote: "Toys and joy — both use the oy spelling. Have kids find each one.",
          },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned oi and oy both make the same sound. We blended, chained, and wrote words like coin, boil, and toy — and read all about it!",
      summarySimple: "oi and oy say the same sound! We made, wrote, and read: coin, boil, toy!",
      homework: "At home, find a toy and say its name — can you hear the oy sound?",
    },
  ],
};
