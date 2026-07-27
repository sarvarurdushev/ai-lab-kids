import type { Lesson } from "@/lib/curriculum/types";

/**
 * Fourth and FINAL consonant-blend week — word-final blends (nd, nt, mp,
 * nk, st) — and the last new phonics pattern before Unit 1's review week.
 * Same no-new-phonics_sound-segments shape as weeks 10-12: a blend isn't a
 * new SOUND, just two already-known sounds said quickly together, so
 * there's still no "sound of the day" or handwriting block to build
 * around. The difference this week is WHERE the two sounds sit: at the
 * END of the word instead of the start, which is also why the phoneme-swap
 * and word-chain games below are built around endings instead of onsets.
 * Expanded to a full 50-minute lesson on the same block order as
 * week1.ts (the reference lesson), with an extra word_chain link, an extra
 * dictation sentence, and a fourth decodable_text line standing in for the
 * two missing blocks — the same compensation week12.ts uses.
 */
export const ph_week13: Lesson = {
  key: "ph_week13",
  unitKey: "phonics_foundations",
  title: "Two Sounds at the End: Final Blends",
  bigIdeas: [],
  englishFocus:
    "Blending, chaining, and writing four-sound words that end with two consonants together — nd, nt, mp, nk, st — the last new blend pattern before Unit 1's review week.",
  koreanL1Note:
    "Same articulation challenge as the last three weeks, just at the other end of the word — Korean syllables rarely close on two consonants either. The signature slip to expect is dropping or swallowing the second consonant ('han' for 'hand'): model holding the first sound briefly before releasing the second, rather than rushing both together or dropping one. Kids will need paper and a pencil from the dictation block onward.",
  objectives: [
    "I can blend four-sound words that end with two consonants together (nd, nt, mp, nk, st).",
    "I can hear that a blend can happen at the start OR the end of a word.",
    "I can write final-blend words when I hear them, without dropping the second sound.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — consonant blends, word-final family; the last new pattern of Unit 1 before its review week.",
  segments: [
    {
      type: "warmup",
      teacherScript:
        "Remind the class: the last three weeks — l-blends, r-blends, s-blends — all put two consonants at the START of a word. Say 'jump' slowly and ask: this time, where do you hear the two sounds hiding — start, or end?",
      prompt: "This time, listen for two sounds at the END of the word!",
      promptSimple: "Listen at the end this time!",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast! These are all sounds we already know.",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Pure recall warm-up, brisk and choral. Cumulative review now covers all four digraphs plus a sample from two earlier blend families — the last card, 'st,' is worth lingering on, since it's about to reappear today at the END of a word instead of the start.",
        cards: [
          { letters: "s", keyword: "Sun", emoji: "☀️" },
          { letters: "ch", keyword: "Choo-choo train", emoji: "🚂" },
          { letters: "sh", keyword: "Shush", emoji: "🤫" },
          { letters: "th", keyword: "Thumb", emoji: "👍" },
          { letters: "wh", keyword: "Whale", emoji: "🐳" },
          { letters: "ng", keyword: "Ring", emoji: "💍" },
          { letters: "qu", keyword: "Queen", emoji: "👑" },
          { letters: "cr", keyword: "Crab", emoji: "🦀" },
          { letters: "st", keyword: "Stop", emoji: "🛑", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Listen carefully — we're adding or changing a sound at the END of a word this time. No letters, just your ears!",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — don't show or mention letters here. Say the start word, give the instruction, let the class answer aloud together, THEN reveal. The first round adds a final consonant — that's the whole concept of a final blend in one oral game. Avoid rounds that delete a final sound (take /d/ off 'sand' and you get 'san,' which isn't a real word) — every round here swaps or adds a real, meaningful ending instead.",
        rounds: [
          { startWord: "ram", startEmoji: "🐏", instruction: "Add /p/ to the end. What do you get?", answerWord: "ramp", answerEmoji: "🛝" },
          { startWord: "bent", startEmoji: "🙇", instruction: "Change the /t/ to /d/.", answerWord: "bend", answerEmoji: "💪" },
          { startWord: "sink", startEmoji: "🚰", instruction: "Change the /s/ to /p/.", answerWord: "pink", answerEmoji: "💗" },
          {
            startWord: "must",
            startEmoji: "❗",
            instruction: "Change the /m/ to /j/.",
            answerWord: "just",
            answerEmoji: "✅",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Every word below ends with two consonants together — sound out all four tiles, then blend!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote:
          "Model holding the first consonant briefly before the second releases, rather than mashing both sounds into one — that clean separation is what keeps a child from later writing only the first consonant.",
        words: [
          { parts: ["h", "a", "n", "d"], word: "hand", emoji: "✋" },
          { parts: ["j", "u", "m", "p"], word: "jump", emoji: "🤸" },
          { parts: ["p", "i", "n", "k"], word: "pink", emoji: "💗" },
          { parts: ["b", "e", "s", "t"], word: "best", emoji: "🥇" },
          { parts: ["t", "e", "n", "t"], word: "tent", emoji: "⛺", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "chant",
      title: "Blend It Fast!",
      instructions: "Say the call line, then have the whole class echo the response.",
      lines: [
        { call: "-N-D, -N-D...", response: "hand, hand, hand!" },
        { call: "-M-P, -M-P...", response: "jump, jump, jump!" },
        { call: "-N-K, -N-K...", response: "pink, pink, pink!" },
        { call: "-S-T, -S-T...", response: "best, best, best!" },
      ],
    },
    {
      type: "activity",
      instructions: "Watch closely — only ONE sound changes each time. Can you spot which one, even at the end?",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "An extra link today since there's no handwriting block to fill the time. The first two links are the whole point of the lesson: 'bend' to 'bent' to 'best' change ONLY the ending while the front stays exactly 'be-' — kids have to read all the way to the end instead of guessing from the first letter. The last three links flip it around and hold the ending 'st' steady while the front changes, so both directions get practiced. Read the new word together BEFORE tapping Check, every link.",
        start: { parts: ["b", "e", "n", "d"], word: "bend", emoji: "💪" },
        links: [
          { changeIndex: 3, newPart: "t", word: "bent", emoji: "🥀" },
          { changeIndex: 2, newPart: "s", word: "best", emoji: "🥇" },
          { changeIndex: 0, newPart: "r", word: "rest", emoji: "😴" },
          { changeIndex: 1, newPart: "u", word: "rust", emoji: "🔧" },
          { changeIndex: 0, newPart: "j", word: "just", emoji: "✅", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Blend Actions!",
      instructions: "Call out a word; everyone does its action.",
      moves: [
        { text: "hand — hold up your hand", emoji: "✋" },
        { text: "jump — jump in place", emoji: "🤸" },
        { text: "pink — point to something pink nearby", emoji: "💗" },
        { text: "best — give a thumbs up, your best smile!", emoji: "🥇" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly, stretching each sound, and have the class push a finger forward for each one before tapping. Every word today has exactly four sounds and four letters — that match is what makes the upcoming dictation task doable: segment first, then just write down what you hear in order.",
        words: [
          { word: "camp", emoji: "🏕️", parts: ["c", "a", "m", "p"] },
          { word: "sink", emoji: "🚰", parts: ["s", "i", "n", "k"] },
          { word: "fast", emoji: "🏃", parts: ["f", "a", "s", "t"] },
          { word: "band", emoji: "🎸", parts: ["b", "a", "n", "d"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Let's review some words that break the rules — sound out the part you can, and remember the rest by heart!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "A quick review of heart words already met, this time inside sentences built from today's final-blend words (jump, best, fast, tent, hand) — the review doubles as more final-blend reading practice.",
        words: [
          { word: "the", heartIndexes: [1, 2], sentence: "The best pup can jump." },
          { word: "was", heartIndexes: [1, 2], sentence: "Ben was fast in the tent." },
          { word: "into", heartIndexes: [3], sentence: "He put his hand into the tent.", minTrack: "explorers" },
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
          "Say each word twice, clearly and at normal speed. The signature error this week is dropping the second consonant — watch for 'han' instead of 'hand,' or 'bes' instead of 'best.' When you see it, say the word again holding the first sound briefly before releasing the second ('h-a-n...d'), rather than rushing both together or skipping one. Give everyone time to finish before revealing. An extra sentence today, since there's no handwriting block eating into the clock.",
        words: [{ text: "hand" }, { text: "jump" }, { text: "pink" }, { text: "best" }, { text: "tent", minTrack: "explorers" }],
        sentences: [
          { text: "Sam can jump and land." },
          { text: "The best kid can spot a tent." },
          { text: "Ben was fast and got a pink drum.", minTrack: "explorers" },
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
          "Read each line chorally, then let a volunteer read it alone. Every word uses only sounds taught so far plus the heart words 'the,' 'a,' 'was,' and 'into.' A fourth line today stands in for the missing letter-formation block.",
        lines: [
          { text: "Sam and Ben set up a tent.", emoji: "⛺" },
          { text: "Ben got the best spot for the tent.", emoji: "🥇" },
          { text: "Sam can jump into the tent fast.", emoji: "🤸" },
          { text: "The pink tent was the best!", emoji: "💗" },
        ],
        comprehensionQuestions: [
          { question: "Where did Sam jump?", discussionNote: "Into the tent — check the third line together." },
          { question: "What color was the tent?", discussionNote: "Pink — find the word 'pink' in the last line." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned that blends can happen at the END of a word too — we blended hand, jump, pink, and best, chained bend into bent, best, rest, rust, and just, wrote what we heard, and read a whole story about Sam and Ben's tent!",
      summarySimple: "We made end-blend words: hand, jump, pink, best! We wrote and read a story about a tent!",
      homework: "At home, say 'hand' slowly — can you hear BOTH the n and the d at the end? Try 'jump,' 'pink,' and 'best' too.",
    },
  ],
};
