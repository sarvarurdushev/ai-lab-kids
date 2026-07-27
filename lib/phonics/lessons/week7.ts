import type { Lesson } from "@/lib/curriculum/types";

/**
 * Letters and Sounds Phase 3, Set 7 — the last of the 26 letters, plus the
 * "qu" pair. Cumulative letters through this week: every letter a-z, plus
 * ck and qu. Worth calling out to the class as a milestone.
 *
 * Full 50-minute build on the week1.ts block order — see that file's header
 * for the block-by-block timing and why the order shouldn't be shuffled.
 * Every word in the blending, chain, box, dictation and text blocks is
 * spellable with the sounds taught in weeks 1-7 only.
 */
export const ph_week7: Lesson = {
  key: "ph_week7",
  unitKey: "phonics_foundations",
  title: "Sound It Out: y, z, qu — Every Letter!",
  bigIdeas: [],
  englishFocus:
    "Hearing, blending, and writing y, z, qu into real words — completing every letter sound in the alphabet.",
  koreanL1Note:
    "None of y/z/qu is a Korean-L1 trouble sound. This is a good checkpoint week: if l/r, f/p, or v/b still need work, use this week's sound drill to fold in a Minimal Pairs round before moving on to digraphs next week. Kids will need paper and a pencil from the handwriting block onward.",
  objectives: [
    "I can say the sound each letter makes: y, z, qu.",
    "I know the sound of every letter in the alphabet now.",
    "I can write y and z when I hear their sounds.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 3, Set 7.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's j, v, w, x keyword pictures and have the class say each sound.",
      prompt: "Can you still remember j, v, w, x?",
      promptSimple: "Do you remember j, v, w, x?",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "A cumulative review of every sound so far, boiled down to ten cards: all five vowels (the ones that slip first), two trickier consonants, and today's three new ones at the end. You set the pace — hold on a card the class stumbles on, and rip through the ones they own. Two or three seconds each is the target once they're fluent.",
        cards: [
          { letters: "a", keyword: "Apple", emoji: "🍎" },
          { letters: "e", keyword: "Elephant", emoji: "🐘" },
          { letters: "i", keyword: "Igloo", emoji: "🧊" },
          { letters: "o", keyword: "Octopus", emoji: "🐙" },
          { letters: "u", keyword: "Umbrella", emoji: "☂️" },
          { letters: "ck", keyword: "Sock", emoji: "🧦" },
          { letters: "v", keyword: "Volcano", emoji: "🌋" },
          { letters: "y", keyword: "Yo-yo", emoji: "🪀" },
          { letters: "z", keyword: "Zebra", emoji: "🦓" },
          { letters: "qu", keyword: "Queen", emoji: "👑" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Just your ears this time — no letters! Listen, change one sound, and say the new word out loud.",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — don't show or mention letters here. Say the start word, give the instruction, let the whole class answer aloud together, THEN reveal. If they stall, say the two words slowly back to back so they hear the one part that moved.",
        rounds: [
          { startWord: "zip", startEmoji: "🤐", instruction: "Change the /z/ to /l/.", answerWord: "lip", answerEmoji: "👄" },
          { startWord: "am", startEmoji: "🙋", instruction: "Add /y/ to the front.", answerWord: "yam", answerEmoji: "🍠" },
          { startWord: "zap", startEmoji: "⚡", instruction: "Change the /z/ to /m/.", answerWord: "map", answerEmoji: "🗺️" },
          {
            startWord: "quit",
            startEmoji: "🛑",
            instruction: "Change the /t/ to /z/.",
            answerWord: "quiz",
            answerEmoji: "❓",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "y",
      keyword: "Yo-yo",
      keywordEmoji: "🪀",
      actionCue: "Mime playing with a yo-yo and say y-y-y.",
      teacherNote: "At the start of a word, 'y' is a consonant sound (yes, yo-yo) — its vowel sound comes up much later.",
    },
    {
      type: "phonics_sound",
      letters: "z",
      keyword: "Zebra",
      keywordEmoji: "🦓",
      actionCue: "Mime zig-zag stripes with your finger and buzz zzzz.",
      teacherNote: "A continuant with a buzz — hold it and let the class feel it in their throat.",
    },
    {
      type: "phonics_sound",
      letters: "qu",
      keyword: "Queen",
      keywordEmoji: "👑",
      actionCue: "Mime placing a crown on your head and say qu-qu-qu.",
      teacherNote: "'q' is never taught alone in English — it's always paired with 'u,' together making one /kw/ sound.",
    },
    {
      type: "letter_formation",
      letters: "y",
      strokes: [
        "Start at the top left. Slant down to the right and stop in the middle.",
        "Lift your pencil and start again at the top right.",
        "Slant down to the left, past the bottom line, and finish with a little tail.",
      ],
      skyWriteCue: "Everyone stand and sky-write a giant y — slant, lift, and a long tail that hangs below the line! Say y-y-y.",
      teacherNote:
        "The first letter this unit whose tail drops BELOW the line. Kids almost always stop the tail at the line — write 'yo-yo' big on the board so they can see the tail hanging down and copy that.",
    },
    {
      type: "letter_formation",
      letters: "z",
      strokes: [
        "Start at the top on the left. Go straight across to the right.",
        "Slant down to the left, all the way to the bottom line.",
        "Go straight across to the right again.",
      ],
      skyWriteCue: "Sky-write a big z — across, down-slant, across! Buzz zzzz the whole time.",
      teacherNote:
        "Three straight lines, no curves, no lifting the pencil — one of the easiest letters to form, so it's a nice confidence win right after y. Kids who write it backwards are usually starting on the right; remind them every letter starts on the left.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words — and celebrate knowing every letter!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Every letter sound has now been taught. Celebrate this one with the class before moving on to letter teams next week.",
        words: [
          { parts: ["y", "e", "s"], word: "yes", emoji: "👍" },
          { parts: ["z", "i", "p"], word: "zip", emoji: "🤐" },
          { parts: ["qu", "i", "z"], word: "quiz", emoji: "❓" },
          { parts: ["z", "a", "p"], word: "zap", emoji: "⚡" },
          { parts: ["qu", "i", "t"], word: "quit", emoji: "🛑", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Watch closely — only ONE sound changes each time. Can you spot which one?",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Read the new word together BEFORE tapping Check. The highlighted tile shows what changed — ask 'which sound is different?' every single link. Notice the last link swaps one tile for 'ck': two letters, still one sound, still one tile.",
        start: { parts: ["z", "i", "p"], word: "zip", emoji: "🤐" },
        links: [
          { changeIndex: 0, newPart: "l", word: "lip", emoji: "👄" },
          { changeIndex: 2, newPart: "d", word: "lid", emoji: "🫙" },
          { changeIndex: 0, newPart: "k", word: "kid", emoji: "🧒" },
          { changeIndex: 2, newPart: "ck", word: "kick", emoji: "🦵", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "y — play with a yo-yo, y-y-y", emoji: "🪀" },
        { text: "z — zig-zag stripes, zzzz", emoji: "🦓" },
        { text: "qu — put on a crown, qu-qu-qu", emoji: "👑" },
        { text: "Everyone's favorite sound from this whole unit — do it one more time!", emoji: "🎉" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly and have the class push a finger forward for each sound BEFORE anyone taps. 'quiz' is the one to linger on: four letters, but only three boxes, because qu is one sound. Same with 'quick' — five letters, three sounds.",
        words: [
          { word: "yes", emoji: "👍", parts: ["y", "e", "s"] },
          { word: "zip", emoji: "🤐", parts: ["z", "i", "p"] },
          { word: "quiz", emoji: "❓", parts: ["qu", "i", "z"] },
          { word: "quick", emoji: "🏃", parts: ["qu", "i", "ck"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Some words don't play by the rules. Sound out the normal parts, then learn the rest by heart!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "Sound out the regular letters together first, THEN reveal the heart letters. Say: 'this part we can sound out; this part we just have to know by heart.' These three turn up constantly in stories, so they earn the minutes.",
        words: [
          { word: "he", heartIndexes: [1], sentence: "He can zip up the bag." },
          { word: "she", heartIndexes: [2], sentence: "She has a red cap." },
          { word: "was", heartIndexes: [1, 2], sentence: "The pup was in the mud.", minTrack: "explorers" },
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
          "Say each word twice, clearly and at normal speed — don't over-stretch it, or kids spell what they hear rather than the real word. Give everyone time to finish before revealing. Praise correct SOUNDS even when the handwriting is wobbly. Remind them 'qu' is always the two letters together.",
        words: [{ text: "yes" }, { text: "zip" }, { text: "zap" }, { text: "quiz" }, { text: "quit", minTrack: "explorers" }],
        sentences: [{ text: "The quiz is fun." }, { text: "She can zip up the bag.", minTrack: "explorers" }],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read a real story together — you know every sound in it!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally as a class, then let any child who wants to read it alone. Every word uses only sounds from weeks 1-7 plus the heart words 'a', 'the', 'is' and 'he'. Tap any word the class gets stuck on.",
        lines: [
          { text: "Sam has a quiz.", emoji: "📋" },
          { text: "He can zip up the bag.", emoji: "🎒" },
          { text: "The quiz is fun!", emoji: "🎉" },
          { text: "Yes! Sam did it.", emoji: "👍" },
        ],
        comprehensionQuestions: [
          { question: "What did Sam have today?", discussionNote: "A quiz — read the first line again together and let the class answer chorally." },
          { question: "Which word starts with the /z/ sound?", discussionNote: "'zip' — have a child come up and touch the z on the screen." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "You now know every letter sound in the alphabet! Today we learned y, z, qu, blended them into words like yes, zip and quiz, wrote them down, and read a whole story.",
      summarySimple: "We know every letter sound now! We made words, wrote them, and read a story!",
      homework: "At home, see how many letter sounds you can say out loud — all 26, plus qu!",
    },
  ],
};
