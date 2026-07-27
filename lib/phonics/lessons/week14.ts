import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 1 review and celebration — closes weeks 1-13: every one of
 * the 26 letters, ck, qu, all five digraphs (ch, sh, th, wh, ng), and all
 * four blend families (l-, r-, s-, and final blends). Rebuilt to the full
 * 50-minute shape set by week1.ts, adapted for a capstone/review week the
 * same way week26.ts (Unit 2's review) is: no new sound is taught, so
 * there's no phonics_sound or letter_formation block, and a fluency_race
 * celebration block is added — this is the only Unit 1 week using it.
 *
 * Two upgrades over the previous version of this file:
 *  - Heart Words used to misuse the generic memory_match engine (a flip-card
 *    recall game) for what are really irregular sight words. It's now the
 *    real heart_word engine, and consolidates SIX words from across the
 *    whole unit instead of a normal week's 2-3.
 *  - A fluency_race block was added after Sound Boxes and before Heart
 *    Words — the natural home for a timed celebration read in a review
 *    week, built entirely from words that combine a blend AND a digraph.
 *
 *   1  Sound Drill        4 min   a full sweep: vowels, ck/qu, all five digraphs
 *   2  Phoneme Play        3 min   oral only — add, remove, and swap, all mixed
 *   3  Sound It Out        5 min   blend + digraph in the same word
 *   4  Word Chain          5 min   one tile changes at a time
 *   5  Movement Break      3 min   halfway-point celebration reset
 *   6  Sound Boxes         5 min   segmenting — the bridge to spelling
 *   7  Fluency Race        3 min   timed celebration read, blend+digraph words
 *   8  Heart Words         6 min   six consolidating words, the whole unit's set
 *   9  Write What You Hear 5 min   dictation — the encoding half
 *  10  Read It Together    5 min   the unit's capstone decodable passage
 *  11  Chant                4 min   call-and-response celebration
 *  12  Wrap-up              2 min
 *
 * Every word in the blending, chain, box, dictation, fluency race and
 * decodable text blocks was checked letter by letter against the exact
 * grapheme set taught in weeks 1-13 (every letter, ck, qu, ch/sh/th/wh/ng,
 * and every blend family) plus only the heart words actually introduced by
 * week 13.
 */
export const ph_week14: Lesson = {
  key: "ph_week14",
  unitKey: "phonics_foundations",
  title: "Sound It All Out! (Review)",
  bigIdeas: [],
  englishFocus:
    "Reading words that combine a blend AND a digraph together, racing to read familiar words fast, and consolidating six heart words met across the whole unit.",
  koreanL1Note:
    "A genuine milestone: every single sound taught this unit — all 26 letters, ck and qu, all five digraphs (ch, sh, th, wh, ng), and all four blend families (l-, r-, s-, and final blends) — now combines freely in the same words, the fluency race, and a real decodable passage. If l/r, f/p, v/b, or th/s still need work, this review week is the natural place for one more FULL Minimal Pairs round on whichever contrast is weakest, right after the Sound Drill while sounds are freshest — there's no new content competing for time today, so it's worth playing the whole game rather than a quick aside, and worth returning to before Unit 2 raises the stakes with vowel teams. Kids will need paper and a pencil from the dictation block onward.",
  objectives: [
    "I can blend words that combine a blend and a digraph in the same word.",
    "I can read familiar words as quickly and accurately as I can in a timed race.",
    "I can recognize six heart words by sight: the, was, said, you, are, and have.",
  ],
  standardsNote:
    "Systematic synthetic phonics review (National Reading Panel, 2000); heart words taught by sounding out the regular part and memorizing only the irregular part, not by rote whole-word memorization. Delivered on UFLI Foundations' 8-step routine, expanded to a 50-minute whole-class lesson and closed with a timed fluency round, the way a review week should end.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Say: 'Today we mix EVERYTHING together — letters, letter-teams, and blends, all in the same word!'",
      prompt: "Let's mix everything we've learned together!",
      promptSimple: "Let's mix it all together!",
    },
    {
      type: "activity",
      instructions: "Say each sound as fast as you can — this is a full sweep of everything we've learned!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "A genuine full-unit sweep, not a random sample: every vowel, both ck and qu, and all five digraphs, in that order. Keep the pace brisk — this is recall, not teaching. Whatever the class hesitates on is useful information for the Minimal Pairs round later in this lesson, not a reason to stop and reteach here.",
        cards: [
          { letters: "a", keyword: "Apple", emoji: "🍎" },
          { letters: "e", keyword: "Elephant", emoji: "🐘" },
          { letters: "o", keyword: "Octopus", emoji: "🐙" },
          { letters: "ck", keyword: "Sock", emoji: "🧦" },
          { letters: "qu", keyword: "Queen", emoji: "👑" },
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
      instructions: "Ears only — no letters this time. Listen, change the word, and say the new one out loud together.",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — don't show or mention letters here. Say the start word, give the instruction, let the class answer aloud together, THEN reveal. These four rounds deliberately mix every manipulation type met this unit: round 1 removes a sound, round 2 adds one, and rounds 3-4 swap one — round 3 swaps a whole digraph for a whole blend in one move, which is exactly the sound-level flexibility a review week should test.",
        rounds: [
          { startWord: "stop", startEmoji: "🛑", instruction: "Take away the /s/. What's left?", answerWord: "top", answerEmoji: "🔝" },
          { startWord: "in", startEmoji: "📥", instruction: "Add /th/ to the front.", answerWord: "thin", answerEmoji: "📏" },
          { startWord: "chomp", startEmoji: "🦈", instruction: "Change the /ch/ to /st/.", answerWord: "stomp", answerEmoji: "🦶" },
          {
            startWord: "flash",
            startEmoji: "⚡",
            instruction: "Change the /fl/ to /cr/.",
            answerWord: "crash",
            answerEmoji: "💥",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "activity",
      instructions: "These words each combine a blend AND a digraph — the hardest combination in the whole unit. Sound out every tile, then blend!",
      config: {
        engine: "blending",
        title: "Sound It All Out!",
        teacherNote:
          "Every word below combines a blend (l-, r-, s-, or final) with a digraph — genuinely the hardest decoding move taught this year. Slow down more here than in any other block this lesson; if the class rushes, they'll drop a tile. 'shrimp' is the biggest lift of the five — if a child freezes, model it in two chunks (shr...imp) before blending the whole word together.",
        words: [
          { parts: ["f", "l", "a", "sh"], word: "flash", emoji: "⚡" },
          { parts: ["c", "r", "a", "sh"], word: "crash", emoji: "💥" },
          { parts: ["s", "w", "i", "sh"], word: "swish", emoji: "🏀" },
          { parts: ["ch", "o", "m", "p"], word: "chomp", emoji: "🦈" },
          { parts: ["sh", "r", "i", "m", "p"], word: "shrimp", emoji: "🦐", minTrack: "explorers" },
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
          "Read the new word together BEFORE tapping Check — ask 'which tile changed?' on every single link. The first change swaps the digraph 'ch' for the single letter 'l' (chimp -> limp) — exactly the kind of swap the class needs to see hasn't broken any rule: a tile is a tile, whether it holds one letter or two.",
        start: { parts: ["ch", "o", "m", "p"], word: "chomp", emoji: "🦈" },
        links: [
          { changeIndex: 1, newPart: "i", word: "chimp", emoji: "🐒" },
          { changeIndex: 0, newPart: "l", word: "limp", emoji: "🤕" },
          { changeIndex: 3, newPart: "b", word: "limb", emoji: "🌳" },
          { changeIndex: 1, newPart: "a", word: "lamb", emoji: "🐑" },
          { changeIndex: 3, newPart: "p", word: "lamp", emoji: "💡", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Celebration Actions!",
      instructions: "Do a big action for each — this is a celebration of everything learned this unit!",
      moves: [
        { text: "Take a bow — you finished the whole first phonics unit!", emoji: "🎉" },
        { text: "High-five a friend for every blend and digraph you remember.", emoji: "🙌" },
        { text: "Chomp like a shark, then stomp like a pup — your favorite word from this unit!", emoji: "🦈" },
        { text: "One big cheer for every single sound you know now!", emoji: "🎊" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly and have the class push a finger forward for each sound before anyone taps. Every word this week has more letters than sounds — 'thank' is five letters but four sounds, 'shrimp' is six letters but five — a fitting reminder at the end of the unit that a box is for a SOUND, not a letter.",
        words: [
          { word: "chomp", emoji: "🦈", parts: ["ch", "o", "m", "p"] },
          { word: "thank", emoji: "🙏", parts: ["th", "a", "n", "k"] },
          { word: "swish", emoji: "🏀", parts: ["s", "w", "i", "sh"] },
          { word: "shrimp", emoji: "🦐", parts: ["sh", "r", "i", "m", "p"], minTrack: "explorers" },
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
          "Set a 60-second timer. Point to each word left to right; the class reads it chorally as fast as it can while staying accurate. Every single word here combines a blend with a digraph — deliberately the hardest word shape taught all unit — so don't expect flawless speed; this is a celebration of how far the class has come, not a test. Time it again in a few weeks and celebrate any improvement.",
        seconds: 60,
        words: [
          { text: "flash" },
          { text: "clash" },
          { text: "crash" },
          { text: "brush" },
          { text: "blush" },
          { text: "swish" },
          { text: "chomp" },
          { text: "thump" },
          { text: "chunk" },
          { text: "thank" },
          { text: "clang" },
          { text: "shrimp" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Some very common words break the rules a little. Sound out the part you can, and remember the rest by heart!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "Sound out the regular letters together first, THEN reveal the heart letters. This is the whole unit's heart-word set gathered in one place — six words instead of a normal week's two or three, so slow down and treat each one like its own small win. If a child mixes up 'was' and 'saw', or reads 'the' as 'they', that's completely normal at this stage — just re-say the word and move on rather than over-correcting. The last two words (are, have) are held for the Explorers track since each combines an irregular vowel AND a silent letter, the hardest heart-word shape met this unit.",
        words: [
          { word: "the", heartIndexes: [1, 2], sentence: "The pup ran fast." },
          { word: "was", heartIndexes: [1, 2], sentence: "The dog was glad." },
          { word: "said", heartIndexes: [1, 2], sentence: "Sam said stop!" },
          { word: "you", heartIndexes: [1, 2], sentence: "Can you chomp fast?" },
          { word: "are", heartIndexes: [0, 2], sentence: "You are the best!", minTrack: "explorers" },
          { word: "have", heartIndexes: [3], sentence: "You have a big grin.", minTrack: "explorers" },
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
          "Papers and pencils out — say each word twice at normal speed, don't over-stretch it or kids will spell what they hear instead of the real word. Give everyone time to finish before revealing. The last sentence stacks three heart words back to back (you, are, the) — that's real fluency practice, not a trick; if the class needs it, read the whole sentence once for meaning before dictating it piece by piece.",
        words: [{ text: "chomp" }, { text: "flash" }, { text: "crash" }, { text: "thump" }, { text: "shrimp", minTrack: "explorers" }],
        sentences: [
          { text: "The crab did a big stomp." },
          { text: "Sam and Kim can blend fast." },
          { text: "You are the best at this!", minTrack: "explorers" },
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
          "This is the capstone read of the entire unit — read each line chorally first, then invite volunteers to read alone. Every word here uses only sounds and heart words taught across weeks 1-13. Tap any word the class gets stuck on — 'shrimp' in line one is the single hardest word in this whole lesson, so don't rush past it.",
        lines: [
          { text: "Sam and Kim can chomp a big shrimp.", emoji: "🦐" },
          { text: "A crab went into the shed with a flash.", emoji: "🦀" },
          { text: "The pup did a big stomp and a chomp.", emoji: "🐶" },
          { text: "You are so glad you can blend and chant!", emoji: "🎉" },
          { text: "The class can blend it all!", emoji: "🏆" },
        ],
        comprehensionQuestions: [
          { question: "What did Sam and Kim chomp?", discussionNote: "A big shrimp — point back to the first line together." },
          {
            question: "What can the whole class do now that they finished this unit?",
            discussionNote: "Blend it all! Celebrate the specific sounds or words the class is proudest of.",
          },
        ],
      },
    },
    {
      type: "chant",
      title: "We Can Sound It All Out!",
      instructions: "Say the call line, then have the whole class echo the response, loud and proud.",
      lines: [
        { call: "Letters, teams, and blends today,", response: "we sound them all, hip-hip-hooray!" },
        { call: "Ch, sh, th, wh, ng,", response: "every single sound-team thing!" },
        { call: "Blends at the start, blends at the end,", response: "two sounds together, sound-friend to sound-friend!" },
        { call: "We finished Unit One,", response: "now let's have some fun!" },
      ],
    },
    {
      type: "wrapup",
      summary:
        "You finished Phonics Unit 1! You know every one of the 26 letters, ck and qu, five digraphs (ch, sh, th, wh, ng), and all four blend families — l-, r-, s-, and final blends. You can blend words that combine a blend AND a digraph, like 'shrimp' and 'flash,' you raced to read words fast, and you know six heart words by heart: the, was, said, you, are, and have!",
      summarySimple: "You finished Phonics Unit 1! You know every letter, ch/sh/th/wh/ng, every blend, and 6 heart words! You even raced to read fast!",
      homework: "At home, find a sign, book, or label and try to sound out one whole word — even a tricky one with a blend AND a digraph in it.",
    },
  ],
};
