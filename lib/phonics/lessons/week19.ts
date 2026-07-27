import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 5 — long-i vowel teams: igh, y. Explorers (6+) only.
 *
 * Full 50-minute class, built on the same block order as week1.ts (the
 * reference lesson) and week17.ts (the first converted Unit 2 week):
 * cumulative drill → oral phoneme work → the new graphemes → handwriting →
 * blending → chaining → movement → segmenting → heart words → dictation →
 * connected text → wrap-up.
 *
 * Decodability: every word below uses only Unit 1's sounds plus a_e, i_e,
 * o_e, ai, ay, ee, ea, oa, ow, igh. The only exceptions are the taught
 * heart words (of, have, was), which appear only in the connected-text
 * block.
 */
export const ph_week19: Lesson = {
  key: "ph_week19",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: igh, y (long i)",
  bigIdeas: [],
  englishFocus:
    "Learning that igh and a word-final y can both make the long i sound, and writing both spellings from dictation.",
  koreanL1Note:
    "No particular Korean-L1 trouble sound here. Worth flagging: 'y' at the end of a short word says long i (fly, my), but at the end of a longer word it often says a soft long-e-ish sound instead (happy) — only the short-word version is taught here. Kids will need paper and a pencil from the handwriting block onward, and again for dictation.",
  objectives: [
    "I know that igh and a word-final y can both make the long i sound.",
    "I can blend words that use the igh or y (long i) pattern.",
    "I can write igh and y when I hear the long i sound in a word.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — long vowel teams, igh/y — delivered on UFLI Foundations' 8-step lesson routine expanded to 50 minutes.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of oa/ow from last week. Say: 'Today, two more spellings for one long sound — this time, long i.'",
      prompt: "Two more spellings, one long i sound!",
      promptSimple: "Two spellings, one sound: igh!",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast! These are all sounds we already know.",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Pure recall warm-up — brisk and choral, about fifteen seconds a card. This is now every long-vowel team taught so far; the more of these that are automatic, the more attention kids have left over for the brand-new igh and y today.",
        cards: [
          { letters: "a_e", keyword: "Cake", emoji: "🎂" },
          { letters: "i_e", keyword: "Bike", emoji: "🚲" },
          { letters: "o_e", keyword: "Bone", emoji: "🦴" },
          { letters: "ai", keyword: "Rain", emoji: "🌧️" },
          { letters: "ay", keyword: "Day", emoji: "☀️" },
          { letters: "ee", keyword: "Bee", emoji: "🐝" },
          { letters: "ea", keyword: "Sea", emoji: "🌊" },
          { letters: "oa", keyword: "Boat", emoji: "⛵" },
          { letters: "ow", keyword: "Snow", emoji: "❄️", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Ears only — no letters! Listen, change the sound, and say the new word out loud.",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — no letters yet. Say the start word, give the instruction, let the class answer together, THEN reveal. The fright→right round is a true deletion, not a substitution — make sure the class hears the /f/ simply disappear rather than swap to something else.",
        rounds: [
          { startWord: "fright", startEmoji: "😱", instruction: "Take away the /f/. What's left?", answerWord: "right", answerEmoji: "➡️" },
          { startWord: "right", startEmoji: "➡️", instruction: "Change the /r/ to /n/.", answerWord: "night", answerEmoji: "🌙" },
          { startWord: "night", startEmoji: "🌙", instruction: "Change the /n/ to /l/.", answerWord: "light", answerEmoji: "💡" },
          { startWord: "light", startEmoji: "💡", instruction: "Add /f/ to the front.", answerWord: "flight", answerEmoji: "✈️", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "igh",
      keyword: "Light",
      keywordEmoji: "💡",
      actionCue: "Flick your fingers open like a light switching on and say a long i-i-i.",
      teacherNote: "Three letters, one sound — the 'gh' is silent, only there to spell the pattern.",
    },
    {
      type: "phonics_sound",
      letters: "y",
      keyword: "Fly",
      keywordEmoji: "🪰",
      actionCue: "Flap your arms like flying and say a long i-i-i.",
      teacherNote: "This is 'y' at the very end of a short word (fly, my, sky) — a different, shorter sound shows up at the end of longer words, but that's not taught yet.",
    },
    {
      type: "letter_formation",
      letters: "igh",
      strokes: [
        "Make a straight line down for the i, then add a dot high above it — don't forget the dot!",
        "Right beside it, make a tall g — down, then a little curl at the bottom.",
        "Last, add a tall h — straight down, then a hump over to the right.",
      ],
      skyWriteCue:
        "Everyone stand and sky-write a giant i-g-h in the air, all three letters close together — say one long iiiii the whole time, because gh stays silent!",
      teacherNote:
        "Do it in the air as a whole class first, then on paper. All three letters are written together as one chunk for one sound — the gh is silent, just along for the ride, so don't let kids pause or sound it out separately. Watch that the dot on the i doesn't get forgotten or drift too far from the line below it.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — igh is one tile, y stands alone as the long-i sound at the end.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Both spellings say long i this week.",
        words: [
          { parts: ["l", "igh", "t"], word: "light", emoji: "💡" },
          { parts: ["n", "igh", "t"], word: "night", emoji: "🌙" },
          { parts: ["f", "l", "y"], word: "fly", emoji: "🪰" },
          { parts: ["s", "k", "y"], word: "sky", emoji: "🌌", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Only ONE sound changes each time. The 'igh' team never moves — watch the very first sound!",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Today's chain never touches the igh tile — only the very first consonant moves. That forces kids to read all the way through the word instead of guessing from the first letter, which is exactly the habit long-vowel words need to break. Read each new word together BEFORE tapping Check, and ask 'which sound changed?' on every single link.",
        start: { parts: ["r", "igh", "t"], word: "right", emoji: "➡️" },
        links: [
          { changeIndex: 0, newPart: "t", word: "tight", emoji: "🤏" },
          { changeIndex: 0, newPart: "m", word: "might", emoji: "💪" },
          { changeIndex: 0, newPart: "n", word: "night", emoji: "🌙" },
          { changeIndex: 0, newPart: "f", word: "fight", emoji: "🥊", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "igh — flick fingers like a light, i-i-i", emoji: "💡" },
        { text: "y — flap your arms and fly, i-i-i", emoji: "🪰" },
        { text: "Mime turning off the light for night time.", emoji: "🌙" },
        { text: "Point up at the sky!", emoji: "🌌" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one — remember, boxes count sounds, not letters.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "igh is the clearest example yet of letters outnumbering sounds — 'light' has five letters but only three sounds. Say each word slowly, have the class push a finger forward per sound BEFORE tapping, then count the letters together and let them be surprised by the mismatch.",
        words: [
          { word: "light", emoji: "💡", parts: ["l", "igh", "t"] },
          { word: "night", emoji: "🌙", parts: ["n", "igh", "t"] },
          { word: "fly", emoji: "🪰", parts: ["f", "l", "y"] },
          { word: "sky", emoji: "🌌", parts: ["s", "k", "y"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Some words don't play by the rules. Sound out the part you can, and learn the rest by heart.",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "Sound out the regular parts first, THEN reveal the heart letters. In 'of', only the f misbehaves (it says /v/); in 'have', it's just the silent e at the end that breaks the rule. 'was' is a nice review today, said right beside the new long i in 'high' and 'sky'.",
        words: [
          { word: "of", heartIndexes: [1], sentence: "He has lots of kites." },
          { word: "have", heartIndexes: [3], sentence: "Kids have kites at night." },
          { word: "was", heartIndexes: [1, 2], sentence: "The kite was high in the sky.", minTrack: "explorers" },
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
          "Say each word twice at normal speed — over-stretching makes kids spell what they hear rather than the real word. The hard call today is igh vs y: both are correct guesses for the long i sound, so praise any plausible spelling, then show which one this word actually uses. Give everyone time to finish before revealing.",
        words: [
          { text: "light" },
          { text: "night" },
          { text: "fly" },
          { text: "sky" },
          { text: "right", minTrack: "explorers" },
        ],
        sentences: [
          { text: "Kids fly kites at night." },
          { text: "Big kids can fly high in the sky at night.", minTrack: "explorers" },
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
          "Read each line chorally, then let a volunteer read it alone. Every word uses only sounds taught so far plus the heart words 'a', 'the', 'is', 'he' and 'said'. Tap any word the class gets stuck on to enlarge it.",
        lines: [
          { text: "A kid can fly a kite at night.", emoji: "🪁" },
          { text: "The kite is high in the sky.", emoji: "🌌" },
          { text: "He said, \"My kite can fly!\"", emoji: "😊" },
          { text: "Kids like to fly kites at night.", emoji: "🌙" },
        ],
        comprehensionQuestions: [
          { question: "When does the kid fly the kite?", discussionNote: "At night — point back to the first line together." },
          { question: "Can you find a word with the igh pattern?", discussionNote: "high, night — have a child point to each and say the long i sound aloud." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned igh and y can both say long i. We blended, chained, and wrote words like light, night, fly, sky — and read a whole story!",
      summarySimple: "igh and y can say long i! We made, wrote, and read: light, night, fly, sky!",
      homework: "At home, find something with a long i sound in its name and tell a grown-up.",
    },
  ],
};
