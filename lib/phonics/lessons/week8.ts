import type { Lesson } from "@/lib/curriculum/types";

/**
 * Letters and Sounds Phase 3 consonant digraphs, part 1. Only two new
 * sounds this week (not four) — digraphs are a genuinely new
 * grapheme-to-phoneme leap and deserve more repetition time than a single
 * letter did.
 *
 * Full 50-minute build on the week1.ts block order — see that file's header
 * for the block-by-block timing and why the order shouldn't be shuffled.
 * Every word in the blending, word chain, sound box, dictation and
 * decodable-text blocks is spellable with the sounds taught in weeks 1-8
 * only (every single letter, plus ck, qu, ch, sh), with the heart words
 * "the," "a," "is," "was," "said," "you," "he," "she" the only exception,
 * and only inside the connected-text block.
 */
export const ph_week8: Lesson = {
  key: "ph_week8",
  unitKey: "phonics_foundations",
  title: "Sound It Out: ch, sh",
  bigIdeas: [],
  englishFocus: "Hearing, blending, and writing two brand-new digraph sounds — ch and sh.",
  koreanL1Note:
    "Neither 'ch' nor 'sh' is a Korean-L1 trouble sound on its own, but this is the first time two letters make one sound the class hasn't met before (unlike 'ck,' which was just a new spelling of an already-known sound) — expect it to take longer to click than a single letter did. Kids will need paper and a pencil from the handwriting block onward.",
  objectives: [
    "I can say the sound ch and sh make.",
    "I can blend a digraph with other sounds to read a word.",
    "I can write ch when I hear its sound.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 3, consonant digraphs.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: 'Sometimes TWO letters team up to make ONE new sound. Let's meet two of them today!'",
      prompt: "Can two letters make one new sound?",
      promptSimple: "Two letters, one sound!",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "A cumulative review of every sound so far, boiled down to ten cards: all five vowels, three trickier spellings from earlier weeks, and today's two new digraphs at the end. You set the pace — hold on any card the class stumbles on, and move quickly through the ones they already own.",
        cards: [
          { letters: "a", keyword: "Apple", emoji: "🍎" },
          { letters: "e", keyword: "Elephant", emoji: "🐘" },
          { letters: "i", keyword: "Igloo", emoji: "🧊" },
          { letters: "o", keyword: "Octopus", emoji: "🐙" },
          { letters: "u", keyword: "Umbrella", emoji: "☂️" },
          { letters: "ck", keyword: "Sock", emoji: "🧦" },
          { letters: "qu", keyword: "Queen", emoji: "👑" },
          { letters: "z", keyword: "Zebra", emoji: "🦓" },
          { letters: "ch", keyword: "Choo-choo train", emoji: "🚂" },
          { letters: "sh", keyword: "Shush", emoji: "🤫" },
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
          "Purely oral — don't show or mention letters here. Say the start word, give the instruction, let the whole class answer aloud together, THEN reveal. Round 3 removes the whole digraph at once — a nice early hint that ch/sh really do act as a single sound, not two.",
        rounds: [
          { startWord: "chip", startEmoji: "🍟", instruction: "Change the /ch/ to /sh/.", answerWord: "ship", answerEmoji: "🚢" },
          { startWord: "wish", startEmoji: "🌠", instruction: "Change the /w/ to /f/.", answerWord: "fish", answerEmoji: "🐟" },
          { startWord: "chat", startEmoji: "💬", instruction: "Take away the /ch/. What's left?", answerWord: "at", answerEmoji: "📍" },
          {
            startWord: "in",
            startEmoji: "📥",
            instruction: "Add /sh/ to the front.",
            answerWord: "shin",
            answerEmoji: "🦵",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "ch",
      keyword: "Choo-choo train",
      keywordEmoji: "🚂",
      actionCue: "Pump your arms like a train's wheels and say ch-ch-ch.",
      teacherNote: "A brand-new sound, not just s+h or c+h said separately — model it as one clean unit.",
    },
    {
      type: "phonics_sound",
      letters: "sh",
      keyword: "Shush",
      keywordEmoji: "🤫",
      actionCue: "Put a finger to your lips and say a long shhhh.",
      teacherNote: "A continuant — easy to hold and quiet, which makes it a fun one to exaggerate.",
    },
    {
      type: "letter_formation",
      letters: "ch",
      strokes: [
        "Start with c: begin just under the top line and curve backward around, like closing a small letter c.",
        "Lift your pencil and move right next to it to start h.",
        "Now h: start at the top, pull straight down past the bottom line, then bump back up and curve over for the second half.",
      ],
      skyWriteCue: "Sky-write a big c, then right beside it a big h — say ch-ch-ch the whole time, like the two letters are holding hands.",
      teacherNote:
        "Two separate letters and two pencil lifts, but remind the class they always stay side by side and make just ONE sound — never sound them out as c...h separately. Naming it 'the ch pair' rather than 'c and h' helps this stick.",
    },
    {
      type: "activity",
      instructions: "Let's blend ch and sh with sounds we already know!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Each digraph is one tile, same as 'ck' — tap it once, not letter by letter.",
        words: [
          { parts: ["ch", "i", "p"], word: "chip", emoji: "🍟" },
          { parts: ["sh", "o", "p"], word: "shop", emoji: "🏪" },
          { parts: ["f", "i", "sh"], word: "fish", emoji: "🐟" },
          { parts: ["w", "i", "sh"], word: "wish", emoji: "🌠" },
          { parts: ["ch", "a", "t"], word: "chat", emoji: "💬", minTrack: "explorers" },
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
          "Read the new word together BEFORE tapping Check. The first tile swaps between a single letter and a whole digraph a few times here — every swap is still just ONE tile changing, whether it holds one letter or two.",
        start: { parts: ["sh", "o", "p"], word: "shop", emoji: "🏪" },
        links: [
          { changeIndex: 0, newPart: "t", word: "top", emoji: "🔝" },
          { changeIndex: 1, newPart: "i", word: "tip", emoji: "👆" },
          { changeIndex: 0, newPart: "ch", word: "chip", emoji: "🍟" },
          { changeIndex: 0, newPart: "sh", word: "ship", emoji: "🚢", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ch — pump your arms like a train, ch-ch-ch", emoji: "🚂" },
        { text: "sh — finger on lips, shhhh", emoji: "🤫" },
        { text: "Say it fast: ch, sh, ch, sh!", emoji: "🔁" },
        { text: "Now say it slow and clear one more time.", emoji: "🐢" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly and have the class push a finger forward for each sound BEFORE anyone taps. 'chip' and 'fish' are both three boxes even though 'fish' has four letters — ch and sh each take up just one box.",
        words: [
          { word: "chip", emoji: "🍟", parts: ["ch", "i", "p"] },
          { word: "fish", emoji: "🐟", parts: ["f", "i", "sh"] },
          { word: "shed", emoji: "🛖", parts: ["sh", "e", "d"] },
          { word: "lunch", emoji: "🍱", parts: ["l", "u", "n", "ch"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Some words don't play by the rules. Let's learn two more by heart!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "Sound out the regular letters together first, THEN reveal the heart letters. Say: 'this part we can sound out; this part we just have to know by heart.' Both of today's words turn up constantly once kids start reading real dialogue.",
        words: [
          { word: "said", heartIndexes: [1, 2], sentence: "Sam said yes." },
          { word: "you", heartIndexes: [1, 2], sentence: "You can chat." },
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
          "Say each word twice, clearly and at normal speed — don't over-stretch it, or kids spell what they hear rather than the real word. Give everyone time to finish writing before revealing. Praise correct SOUNDS even if handwriting is messy. Remind them ch and sh are always written as their two-letter pair.",
        words: [{ text: "ship" }, { text: "chop" }, { text: "dish" }, { text: "much" }, { text: "lunch", minTrack: "explorers" }],
        sentences: [{ text: "Sam can chop." }, { text: "Dan had lunch.", minTrack: "explorers" }],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read a real story together — you know every sound in it!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally as a class, then ask one child to read it alone if they'd like to. Every word uses only sounds from weeks 1-8 plus the heart words 'the,' 'is,' 'said,' 'a,' and 'you.' Tap any word the class gets stuck on.",
        lines: [
          { text: "Sam is at the shop.", emoji: "🏪" },
          { text: "He had chips and fish.", emoji: "🍟" },
          { text: "Sam said yum, yum!", emoji: "😋" },
          { text: "You wish you had chips?", emoji: "🤩" },
        ],
        comprehensionQuestions: [
          { question: "Where is Sam?", discussionNote: "At the shop — point back to the first line together." },
          { question: "Which word starts with the /ch/ sound?", discussionNote: "'chips' — have a child come up and touch the ch on the screen." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today two letters teamed up to make one new sound each: ch and sh! We blended them into words like chip, shop, fish and wish, learned the heart words said and you, wrote down what we heard, and read a whole story!",
      summarySimple: "We learned ch and sh! We made words, wrote them down, and read a story!",
      homework: "At home, find one thing with a ch or sh sound in its name and tell a grown-up.",
    },
  ],
};
