import type { Lesson } from "@/lib/curriculum/types";

/**
 * REFERENCE LESSON — every other phonics week mirrors this 12-block shape.
 *
 * Structured on UFLI Foundations' 8-step routine (phonemic awareness →
 * visual/auditory drill → blending → new concept → word work → irregular
 * words → connected text), expanded to a 50-minute whole-class EFL lesson.
 * The block order is deliberate and shouldn't be shuffled when authoring
 * other weeks:
 *
 *   1  Sound Drill        4 min   cumulative review before anything new
 *   2  Phoneme Play       4 min   oral sound manipulation, no print
 *   3  Sound of the Day   5 min   the new grapheme + keyword + action
 *   4  Write It Big       3 min   handwriting/sky-writing the new letter
 *   5  Sound It Out       5 min   blending it into words
 *   6  Word Chain         6 min   one sound changes at a time
 *   7  Movement Break     3 min   whole-body reset at the halfway mark
 *   8  Sound Boxes        5 min   segmenting — the bridge to spelling
 *   9  Heart Words        4 min   high-frequency irregular words
 *  10  Write What You Hear 5 min  dictation — the encoding half
 *  11  Read It Together   4 min   connected decodable text
 *  12  Wrap-up            2 min
 *
 * Week 1 has no prior sounds to drill, so block 1 previews the week's four
 * sounds instead of reviewing older ones — the only week where that's true.
 */
export const ph_week1: Lesson = {
  key: "ph_week1",
  unitKey: "phonics_foundations",
  title: "Sound It Out: s, a, t, p",
  bigIdeas: [],
  englishFocus: "Hearing, blending, and writing the sounds s, a, t, p.",
  koreanL1Note:
    "None of s/a/t/p is a known trouble sound for Korean speakers (unlike l/r, f/v, th/s) — this first set is chosen so every child's first blending success is friction-free. Harder English-specific contrasts are saved for the Minimal Pairs games once blending itself is familiar. Kids will need paper and a pencil from block 4 onward.",
  objectives: [
    "I can say the sound each letter makes: s, a, t, p.",
    "I can blend three sounds together to read a word.",
    "I can write the letters s, a, t, p when I hear their sounds.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) using the UK Letters and Sounds Phase 2 starting sequence, delivered on UFLI Foundations' 8-step lesson routine expanded to 50 minutes.",
  segments: [
    {
      type: "warmup",
      teacherScript:
        "Say each child's name slowly, stretching the very first sound: \"Mmmm-injun,\" \"Sssss-oo-a.\" Ask: can you hear the first sound?",
      prompt: "Let's listen for the first sound in words!",
      promptSimple: "Let's listen to sounds!",
    },
    {
      type: "activity",
      instructions: "Look at each letter and say its sound together. This is our first week, so these are brand new!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Every other week this block reviews ALL previously taught sounds. Week 1 has none yet, so it previews today's four instead — say each one for the class first, then have them echo.",
        cards: [
          { letters: "s", keyword: "Sun", emoji: "☀️" },
          { letters: "a", keyword: "Apple", emoji: "🍎" },
          { letters: "t", keyword: "Tiger", emoji: "🐯" },
          { letters: "p", keyword: "Popcorn", emoji: "🍿" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Listen carefully — we're going to change words by taking away or swapping a sound. No letters, just your ears!",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — don't show or mention letters here. Say the start word, give the instruction, let the class answer aloud together, THEN reveal. If they struggle, say both words slowly back to back.",
        rounds: [
          { startWord: "sat", startEmoji: "🪑", instruction: "Take away the /s/. What's left?", answerWord: "at", answerEmoji: "📍" },
          { startWord: "tap", startEmoji: "🚰", instruction: "Change the /t/ to /m/.", answerWord: "map", answerEmoji: "🗺️" },
          { startWord: "pat", startEmoji: "🤚", instruction: "Change the /p/ to /c/.", answerWord: "cat", answerEmoji: "🐱" },
          { startWord: "at", startEmoji: "📍", instruction: "Add /h/ to the front.", answerWord: "hat", answerEmoji: "🎩", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "s",
      keyword: "Sun",
      keywordEmoji: "☀️",
      actionCue: "Trace a big circle in the air like the sun, and stretch the sound out: sssssss.",
      teacherNote:
        "A continuant sound — kids can hold it. Have them hiss like the sun is \"sizzling.\" Never say \"suh\" — the added vowel makes blending harder later.",
    },
    {
      type: "phonics_sound",
      letters: "a",
      keyword: "Apple",
      keywordEmoji: "🍎",
      actionCue: "Pretend to take a big bite of an apple and say a short \"a-a-a.\"",
      teacherNote:
        "The short vowel sound as in \"cat,\" not the letter name \"ay.\" Kids will hear this sound in almost every word this week.",
    },
    {
      type: "phonics_sound",
      letters: "t",
      keyword: "Tiger",
      keywordEmoji: "🐯",
      actionCue: "Swipe one hand like a tiger's claw and say a clipped \"t, t, t\" — no \"tuh.\"",
      teacherNote: "A stop sound — quick and clipped, not stretched. Model it short so it blends cleanly.",
    },
    {
      type: "phonics_sound",
      letters: "p",
      keyword: "Popcorn",
      keywordEmoji: "🍿",
      actionCue: "Pop your hands open like popcorn popping and say a quick \"p, p, p.\"",
      teacherNote: "Another stop sound — same reminder as t: quick and clean, no added vowel.",
    },
    {
      type: "letter_formation",
      letters: "s",
      strokes: [
        "Start just below the top line.",
        "Curve back and around to the left, like the top of a snake.",
        "Then swing down and curve the other way to finish.",
      ],
      skyWriteCue: "Everyone stand up and draw a giant s in the air with one finger — say ssss the whole time!",
      teacherNote:
        "Do this in the air first as a whole class, then on paper. 's' is a good first letter to form — no straight lines, no lifting the pencil.",
    },
    {
      type: "letter_formation",
      letters: "t",
      strokes: ["Start at the top. Pull straight down.", "Lift your pencil.", "Cross it near the top."],
      skyWriteCue: "Sky-write a big t: down… and across! Say t-t-t as you cross it.",
      teacherNote:
        "The only letter today that needs the pencil lifted. Watch for kids crossing at the very top instead of just below it.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote:
          "Tap each tile to reveal it and say the sound together, then press Blend to hear the whole word. Read it as a class before revealing the picture.",
        words: [
          { parts: ["s", "a", "t"], word: "sat", emoji: "🪑" },
          { parts: ["t", "a", "p"], word: "tap", emoji: "🚰" },
          { parts: ["p", "a", "t"], word: "pat", emoji: "🤚" },
          { parts: ["s", "a", "p"], word: "sap", emoji: "🌳", minTrack: "explorers" },
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
          "Read the new word together BEFORE tapping Check. The highlighted tile shows what changed — ask 'which sound is different?' every single link.",
        start: { parts: ["s", "a", "t"], word: "sat", emoji: "🪑" },
        links: [
          { changeIndex: 0, newPart: "p", word: "pat", emoji: "🤚" },
          { changeIndex: 2, newPart: "p", word: "pap", emoji: "🥣" },
          { changeIndex: 0, newPart: "t", word: "tap", emoji: "🚰" },
          { changeIndex: 1, newPart: "i", word: "tip", emoji: "👆", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together. Speed up for a fun round.",
      moves: [
        { text: "s — trace a circle like the sun and hiss sssss", emoji: "☀️" },
        { text: "a — bite the apple and say a-a-a", emoji: "🍎" },
        { text: "t — swipe like a tiger, t-t-t", emoji: "🐯" },
        { text: "p — pop like popcorn, p-p-p", emoji: "🍿" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly, stretching each sound, and have the class push a finger forward for each one before tapping. The boxes count SOUNDS — that becomes important later when a word has more letters than sounds.",
        words: [
          { word: "at", emoji: "📍", parts: ["a", "t"] },
          { word: "sat", emoji: "🪑", parts: ["s", "a", "t"] },
          { word: "tap", emoji: "🚰", parts: ["t", "a", "p"] },
          { word: "pats", emoji: "🖐️", parts: ["p", "a", "t", "s"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Some words don't play by the rules. Let's learn our first ones!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "Sound out the regular letters together first, THEN reveal the heart letters. Say: 'this part we can sound out; this part we just have to know by heart.'",
        words: [
          { word: "the", heartIndexes: [1, 2], sentence: "I see the sun." },
          { word: "a", heartIndexes: [0], sentence: "I have a cat." },
          { word: "is", heartIndexes: [1], sentence: "The cat is happy.", minTrack: "explorers" },
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
          "Say each word twice, clearly and at normal speed — don't over-stretch it, or kids spell what they hear rather than the real word. Give everyone time to finish writing before revealing. Praise correct SOUNDS even if handwriting is messy.",
        words: [
          { text: "at" },
          { text: "sat" },
          { text: "tap" },
          { text: "pat" },
          { text: "sap", minTrack: "explorers" },
        ],
        sentences: [{ text: "A cat sat." }],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read a real story together — you know every sound in it!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally as a class, then ask one child to read it alone if they'd like to. Every word uses only s/a/t/p plus the heart words 'the' and 'a'. Tap any word the class gets stuck on.",
        lines: [
          { text: "A cat sat.", emoji: "🐱" },
          { text: "The cat sat on a mat.", emoji: "🧶" },
          { text: "Pat the cat!", emoji: "🤚" },
        ],
        comprehensionQuestions: [
          { question: "Where did the cat sit?", discussionNote: "On a mat — point back to the second line together." },
          { question: "What sound does 'sat' start with?", discussionNote: "/s/ — have them find the letter s on the screen." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned 4 new sounds — s, a, t, p — blended them into words, wrote them down, and read a whole story!",
      summarySimple: "We learned s, a, t, p! We made words and read a story!",
      homework: "At home, find one thing that starts with s, a, t, or p and tell a grown-up its sound.",
    },
  ],
};
