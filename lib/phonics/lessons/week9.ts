import type { Lesson } from "@/lib/curriculum/types";

/**
 * Letters and Sounds Phase 3 consonant digraphs, part 2. Three new sounds
 * this week — th, wh, ng — following straight on from week8's ch/sh.
 *
 * Full 50-minute build on the week1.ts block order — see that file's header
 * for the block-by-block timing and why the order shouldn't be shuffled.
 * This week needs one extra phonics_sound block compared to week8 (three new
 * digraphs instead of two) but only a single letter_formation block, since
 * 'th' is the one that most needs dedicated handwriting time; the running
 * segment count still lands in the same ~15-17 range as every other week.
 *
 * Every word in the blending, word chain, sound box, dictation, and
 * decodable-text blocks is spellable with the sounds taught in weeks 1-9
 * only — every single letter, plus ck, qu, ch, sh, th, wh, ng — with heart
 * words already taught by week 9 (the, a, is, was, said, you, he, she, what,
 * and a handful more) the only exception, and 'ng' only ever appears at the
 * end of a word or syllable, never the start.
 */
export const ph_week9: Lesson = {
  key: "ph_week9",
  unitKey: "phonics_foundations",
  title: "Sound It Out: th, wh, ng",
  bigIdeas: [],
  englishFocus: "Hearing, blending, and writing three brand-new digraph sounds — th, wh, and ng.",
  koreanL1Note:
    "'th' is a genuine trouble spot: Korean has no /θ/, so it's commonly replaced with /s/ (thin becomes \"sin,\" thumb becomes \"sum\") — the exact contrast the Minimal Pairs th/s game is built to drill. Treat this as the start of regular th/s practice, not a one-off: play a Minimal Pairs th/s round at least once a week for the rest of the unit, since the substitution is stubborn and won't clear up after a single lesson. 'wh' is much easier by comparison — in everyday speech it lands on the /w/ sound children already have, so don't spend extra correction time on it. Kids will need paper and a pencil from the letter-formation block onward.",
  objectives: [
    "I can say the sound th, wh, and ng make.",
    "I can blend a digraph with other sounds to read a word.",
    "I can write th when I hear its sound.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 3, consonant digraphs.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's ch and sh keyword pictures and have the class say each sound. Then say: 'Two letters, one sound — today we meet THREE more!'",
      prompt: "Can you still remember ch and sh?",
      promptSimple: "Do you remember ch and sh?",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "A cumulative review of every sound so far, boiled down to ten cards: five single letters, last week's two digraphs, and today's three new digraphs at the end. You set the pace — hold on any card the class stumbles on, and move quickly through the ones they already own.",
        cards: [
          { letters: "e", keyword: "Elephant", emoji: "🐘" },
          { letters: "u", keyword: "Umbrella", emoji: "☂️" },
          { letters: "v", keyword: "Van", emoji: "🚐" },
          { letters: "w", keyword: "Web", emoji: "🕸️" },
          { letters: "x", keyword: "Box", emoji: "📦" },
          { letters: "ch", keyword: "Choo-choo train", emoji: "🚂" },
          { letters: "sh", keyword: "Shush", emoji: "🤫" },
          { letters: "th", keyword: "Thumb", emoji: "👍" },
          { letters: "wh", keyword: "Whale", emoji: "🐳" },
          { letters: "ng", keyword: "Ring", emoji: "💍" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Just your ears this time — no letters! Listen, change the word, and say the new one out loud.",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — don't show or mention spellings here, the letters come next. Say the start word, give the instruction, let the whole class answer aloud together, THEN reveal. Round 1 previews /th/ before they've seen the letter — if a child says /s/ instead (the common Korean-L1 substitution), just say 'pin' back slowly and move on; you'll drill this properly once 'th' is introduced. Round 2 is a nice early hint that 'wh' will sound just like plain /w/.",
        rounds: [
          { startWord: "thin", startEmoji: "📏", instruction: "Change the /th/ to /p/.", answerWord: "pin", answerEmoji: "📌" },
          { startWord: "hip", startEmoji: "🍑", instruction: "Add /w/ to the front.", answerWord: "whip", answerEmoji: "🌪️" },
          { startWord: "sing", startEmoji: "🎤", instruction: "Change the /s/ to /r/.", answerWord: "ring", answerEmoji: "💍" },
          {
            startWord: "ring",
            startEmoji: "💍",
            instruction: "Change the /r/ to /w/.",
            answerWord: "wing",
            answerEmoji: "🦅",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "th",
      keyword: "Thumb",
      keywordEmoji: "👍",
      actionCue: "Stick your tongue very lightly between your teeth and blow: th-th-th.",
      teacherNote:
        "Korean has no /θ/ sound, so kids will often substitute /s/ — that's exactly what the Minimal Pairs th/s game is built to drill. Start playing it regularly from this week on.",
    },
    {
      type: "phonics_sound",
      letters: "wh",
      keyword: "Whale",
      keywordEmoji: "🐳",
      actionCue: "Mime a whale's tail splashing and blow a soft wh-wh-wh.",
      teacherNote: "In most everyday speech this sounds the same as plain 'w' — don't worry about the technical difference at this age.",
    },
    {
      type: "phonics_sound",
      letters: "ng",
      keyword: "Ring",
      keywordEmoji: "💍",
      actionCue: "Hold up a finger like it's wearing a ring and hum ng-ng-ng through your nose.",
      teacherNote: "Only ever heard at the end of a word (ring, song, king) — never at the start.",
    },
    {
      type: "letter_formation",
      letters: "th",
      strokes: [
        "Start with t: begin at the top line, pull straight down past the middle, then add a small cross near the top — just like you already know from writing t.",
        "Lift your pencil and move right next to it to start h.",
        "Now h: start at the top, pull straight down past the bottom line, then bump back up and curve over for the second half.",
      ],
      skyWriteCue: "Sky-write a big t, then right beside it a big h — say th-th-th the whole time, with your tongue peeking out between your teeth!",
      teacherNote:
        "Two separate letters and one pencil lift between them, but remind the class they always stay side by side and make just ONE sound — never sound them out as t...h separately. The slip to watch for is kids saying /t/ instead of /th/ out of habit, especially right after writing the familiar 't' shape — stop and have them show you the tongue-peek before they say the sound out loud. Calling it 'the th pair,' the same way last week's ch and sh were 'pairs,' helps the one-sound idea stick.",
    },
    {
      type: "activity",
      instructions: "Let's blend th, wh, and ng with sounds we already know!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote:
          "Each digraph is one tile, same as ck, ch, and sh — tap it once, not letter by letter. This is also a great moment to slip in a quick th/s Minimal Pairs round right after.",
        words: [
          { parts: ["th", "i", "n"], word: "thin", emoji: "📏" },
          { parts: ["wh", "i", "p"], word: "whip", emoji: "🌪️" },
          { parts: ["k", "i", "ng"], word: "king", emoji: "🤴" },
          { parts: ["s", "o", "ng"], word: "song", emoji: "🎵" },
          { parts: ["wh", "e", "n"], word: "when", emoji: "⏰", minTrack: "explorers" },
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
          "Read the new word together BEFORE tapping Check. Link 2 swaps a single-letter tile for the ng tile, and link 3 swaps it back to a single letter — a good moment to remind the class that ng, like th and wh, is still just ONE tile even though it's two letters.",
        start: { parts: ["th", "i", "n"], word: "thin", emoji: "📏" },
        links: [
          { changeIndex: 0, newPart: "p", word: "pin", emoji: "📌" },
          { changeIndex: 2, newPart: "ng", word: "ping", emoji: "🏓" },
          { changeIndex: 0, newPart: "r", word: "ring", emoji: "💍" },
          { changeIndex: 0, newPart: "k", word: "king", emoji: "🤴", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "th — tongue peeking out lightly, th-th-th", emoji: "👍" },
        { text: "wh — whale tail splash, wh-wh-wh", emoji: "🐳" },
        { text: "ng — hold up your ring finger and hum, ng-ng-ng", emoji: "💍" },
        { text: "Say them all in a row, fast then slow: th, wh, ng!", emoji: "🔁" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly and have the class push a finger forward for each sound BEFORE anyone taps. 'bath' is 4 letters but 3 boxes, and 'thing' is 5 letters but still just 3 boxes — th, wh, and ng each fill exactly ONE box no matter how many letters they're built from. 'thing' is the best proof of all: two digraphs in one word, and still only three boxes.",
        words: [
          { word: "bath", emoji: "🛁", parts: ["b", "a", "th"] },
          { word: "when", emoji: "⏰", parts: ["wh", "e", "n"] },
          { word: "ring", emoji: "💍", parts: ["r", "i", "ng"] },
          { word: "thing", emoji: "📦", parts: ["th", "i", "ng"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Let's review some words that don't play by the rules.",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "These are all review, not new — sound out the regular letters together first, THEN point to the heart letters as a reminder. 'what' is a nice one to slow down on: the wh is perfectly regular now that they've just learned it, it's only the vowel sound that's irregular.",
        words: [
          { word: "what", heartIndexes: [2], sentence: "What is in the ring?" },
          { word: "was", heartIndexes: [1, 2], sentence: "The king was in the ring." },
          { word: "she", heartIndexes: [2], sentence: "She had a whip.", minTrack: "explorers" },
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
          "Say each word twice, clearly and at normal speed — don't over-stretch it, or kids spell what they hear rather than the real word. Give everyone time to finish writing before revealing. Praise correct SOUNDS even if handwriting is messy. 'thing' is the hardest word today — it needs both th and ng remembered as single units back to back.",
        words: [
          { text: "thin" },
          { text: "when" },
          { text: "king" },
          { text: "bath" },
          { text: "thing", minTrack: "explorers" },
        ],
        sentences: [{ text: "The king had a bath." }, { text: "The whip was thin.", minTrack: "explorers" }],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read a real story together — you know every sound in it!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally as a class, then ask one child to read it alone if they'd like to. Every word uses only sounds from weeks 1-9 plus the heart words 'the,' 'a,' 'he,' 'was,' 'she,' and 'said.' Tap any word the class gets stuck on.",
        lines: [
          { text: "The king had a thin whip.", emoji: "🤴" },
          { text: "He was in his bath.", emoji: "🛁" },
          { text: "She said, 'Sing a song!'", emoji: "🎤" },
          { text: "The king sang and had fun.", emoji: "😄" },
        ],
        comprehensionQuestions: [
          { question: "What did the king have?", discussionNote: "A thin whip — point back to the first line together." },
          { question: "Which two words end with the /ng/ sound?", discussionNote: "'sang' and 'song' — have a child come up and touch the ng on the screen." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today two more letter teams joined ch and sh: th, wh, and ng! We blended them into words like thin, whip, king, and song, practiced writing th, wrote down words and sentences we heard, and read a whole story about a king with a whip!",
      summarySimple: "We learned th, wh, ng! We made words, wrote them down, and read a story!",
      homework: "At home, find one thing with a th, wh, or ng sound in its name and tell a grown-up.",
    },
  ],
};
