import type { Lesson } from "@/lib/curriculum/types";

/**
 * Third consonant-blend week — s-blends. Like weeks 10-11, no new
 * phonics_sound or letter_formation segments: a blend isn't a new SOUND,
 * just two already-known sounds said quickly together — so there's no
 * "sound of the day" or handwriting block to build around. Expanded to a
 * full 50-minute lesson on the same block order as week1.ts (the reference
 * lesson), with an extra word_chain round, an extra dictation sentence, and
 * a fourth decodable_text line standing in for the missing blocks.
 */
export const ph_week12: Lesson = {
  key: "ph_week12",
  unitKey: "phonics_foundations",
  title: "Two Sounds, Said Fast: s-Blends",
  bigIdeas: [],
  englishFocus:
    "Blending two known consonants together at the start of a word — sc, sk, sm, sn, sp, st, sw — and writing them down from dictation.",
  koreanL1Note:
    "Same articulation challenge as the last two weeks — a word starting with two consonants and no vowel between them. 's' is a Korean sound already, which helps: kids just need practice sliding straight from it into the next consonant. Kids will need paper and a pencil from the dictation block onward.",
  objectives: [
    "I can blend four-sound words that start with sc, sk, sm, sn, sp, st, or sw.",
    "I can tell the difference between a word that starts with 's' alone and one that starts with an s-blend.",
    "I can write s-blend words when I hear them, using the sounds I already know.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — consonant blends, s-blend family.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Say 'sun' (just s), then 'stop' (s-blend) — ask the class which one has two sounds hiding at the start.",
      prompt: "One sound, or two sounds hiding together?",
      promptSimple: "One sound, or two?",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast! These are all sounds we already know.",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Pure recall warm-up, not assessment — keep it brisk and choral. Today's review leans on the four digraphs and the last two weeks' l- and r-blends, since s-blends are simply a third blend family: the same 'two sounds said together' idea, just with s standing in front this time.",
        cards: [
          { letters: "s", keyword: "Sun", emoji: "☀️" },
          { letters: "ch", keyword: "Choo-choo train", emoji: "🚂" },
          { letters: "sh", keyword: "Shush", emoji: "🤫" },
          { letters: "th", keyword: "Thumb", emoji: "👍" },
          { letters: "wh", keyword: "Whale", emoji: "🐳" },
          { letters: "ng", keyword: "Ring", emoji: "💍" },
          { letters: "qu", keyword: "Queen", emoji: "👑" },
          { letters: "bl", keyword: "Block", emoji: "🧱" },
          { letters: "cr", keyword: "Crab", emoji: "🦀", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Listen carefully — we're adding a sound to the front of a word. No letters, just your ears!",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — don't show or mention letters here. Say the start word, give the instruction, let the class answer aloud together, THEN reveal. Three of the four rounds add /s/ to the front of a word the class already knows — that's the whole concept of an s-blend in one oral game.",
        rounds: [
          { startWord: "top", startEmoji: "🔝", instruction: "Add /s/ to the front.", answerWord: "stop", answerEmoji: "🛑" },
          { startWord: "pin", startEmoji: "📌", instruction: "Add /s/ to the front.", answerWord: "spin", answerEmoji: "🌀" },
          { startWord: "nap", startEmoji: "😴", instruction: "Add /s/ to the front.", answerWord: "snap", answerEmoji: "🫰" },
          {
            startWord: "snap",
            startEmoji: "🫰",
            instruction: "Change the /n/ to /w/.",
            answerWord: "swap",
            answerEmoji: "🔄",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Every word below starts with 's' plus another consonant — sound out all four tiles, then blend!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "s-blends are usually the easiest blend family, since 's' is a continuant — kids can hold it while sliding into the next sound.",
        words: [
          { parts: ["s", "t", "o", "p"], word: "stop", emoji: "🛑" },
          { parts: ["s", "p", "o", "t"], word: "spot", emoji: "📍" },
          { parts: ["s", "w", "i", "m"], word: "swim", emoji: "🏊" },
          { parts: ["s", "n", "a", "p"], word: "snap", emoji: "🫰" },
          { parts: ["s", "k", "i", "p"], word: "skip", emoji: "⛷️", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "chant",
      title: "Blend It Fast!",
      instructions: "Say the call line, then have the whole class echo the response.",
      lines: [
        { call: "S-T, S-T...", response: "stop, stop, stop!" },
        { call: "S-P, S-P...", response: "spot, spot, spot!" },
        { call: "S-W, S-W...", response: "swim, swim, swim!" },
        { call: "S-N, S-N...", response: "snap, snap, snap!" },
      ],
    },
    {
      type: "activity",
      instructions: "Watch closely — only ONE sound changes each time. Can you spot which one?",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "An extra round today since there's no handwriting block to fill the time. Read the new word together BEFORE tapping Check — the highlighted tile shows what changed, so ask 'which sound is different?' on every single link.",
        start: { parts: ["s", "t", "a", "ck"], word: "stack", emoji: "🧱" },
        links: [
          { changeIndex: 1, newPart: "n", word: "snack", emoji: "🍪" },
          { changeIndex: 3, newPart: "p", word: "snap", emoji: "🫰" },
          { changeIndex: 1, newPart: "l", word: "slap", emoji: "🖐️" },
          { changeIndex: 2, newPart: "i", word: "slip", emoji: "🧴" },
          { changeIndex: 3, newPart: "d", word: "slid", emoji: "🛝", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Blend Actions!",
      instructions: "Call out a word; everyone does its action.",
      moves: [
        { text: "stop — freeze like a statue", emoji: "🛑" },
        { text: "spot — point to a spot on the floor", emoji: "📍" },
        { text: "swim — mime swimming strokes", emoji: "🏊" },
        { text: "snap — snap your fingers", emoji: "🫰" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly, stretching each sound, and have the class push a finger forward for each one before tapping. Every s-blend word today has exactly four sounds — the same number of boxes as letters, which is a nice contrast to save for later when that stops being true.",
        words: [
          { word: "spot", emoji: "📍", parts: ["s", "p", "o", "t"] },
          { word: "swim", emoji: "🏊", parts: ["s", "w", "i", "m"] },
          { word: "snap", emoji: "🫰", parts: ["s", "n", "a", "p"] },
          { word: "skip", emoji: "⛷️", parts: ["s", "k", "i", "p"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Let's review some words that break the rules — sound out the part you can, and remember the rest by heart!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote: "A quick review of heart words already met, this time inside sentences built from today's s-blend words.",
        words: [
          { word: "the", heartIndexes: [1, 2], sentence: "The frog can swim." },
          { word: "to", heartIndexes: [1], sentence: "Run to the spot!" },
          { word: "was", heartIndexes: [1, 2], sentence: "The pup was fast.", minTrack: "explorers" },
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
          "Say each word twice, clearly and at normal speed. Give everyone time to finish writing before revealing. An extra sentence today, since there's no handwriting block eating into the clock.",
        words: [{ text: "stop" }, { text: "snack" }, { text: "slip" }, { text: "swim" }, { text: "skip", minTrack: "explorers" }],
        sentences: [
          { text: "The pup can stop." },
          { text: "Sam can snack and swim." },
          { text: "A frog can spot a bug.", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read a real story together — you know every sound in it!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally, then let a volunteer read it alone. Every word uses only sounds taught so far plus the heart word 'the' and 'a'. A fourth line today stands in for the missing letter-formation block.",
        lines: [
          { text: "A pup ran to a big spot.", emoji: "🐶" },
          { text: "A pup can spot a bug.", emoji: "🐛" },
          { text: "Snap! The pup got the bug.", emoji: "🫰" },
          { text: "The pup can swim and skip!", emoji: "🏊" },
        ],
        comprehensionQuestions: [
          { question: "What did the pup spot?", discussionNote: "A bug — check the second line together." },
          { question: "What two things can the pup do at the end?", discussionNote: "Swim and skip — find both words in the last line." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we reviewed everything so far, blended s-blend words like stop, spot, swim, and snap, chained sounds one at a time into stack, snack, and slip, wrote what we heard, and read a whole story about a pup!",
      summarySimple: "We made s-blend words: stop, spot, swim, snap! We wrote and read a story!",
      homework: "At home, say 'sun,' then 'stop' — can you feel the extra sound in 'stop'?",
    },
  ],
};
