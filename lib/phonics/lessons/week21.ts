import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 7 — r-controlled vowel: ar. Explorers (6+) only.
 *
 * Full 50-minute class, built on the same block order as week1.ts (the
 * reference lesson) and week17.ts (the first converted Unit 2 week):
 * cumulative drill → oral phoneme work → the new grapheme → handwriting →
 * blending → chaining → movement → segmenting → heart words → dictation →
 * connected text → wrap-up.
 *
 * Decodability: every word below uses only Unit 1's sounds plus a_e, i_e,
 * o_e, ai, ay, ee, ea, oa, ow, igh, oo, ue, ar. The only exceptions are the
 * taught heart words (was, are, have), which appear only in the
 * connected-text block.
 */
export const ph_week21: Lesson = {
  key: "ph_week21",
  unitKey: "phonics_vowel_teams",
  title: "R-Controlled Vowels: ar",
  bigIdeas: [],
  englishFocus:
    "Learning that a vowel followed by r makes a brand-new sound, different from the vowel alone, and writing ar from dictation.",
  koreanL1Note:
    "This is where 'r' from Unit 1 shows up again in a new job — it changes the vowel in front of it rather than being its own separate sound. Keep modeling it clearly; the l/r contrast from Unit 1 still applies here. Kids will need paper and a pencil from the handwriting block onward, and again for dictation.",
  objectives: [
    "I know that 'ar' makes its own sound, different from 'a' alone.",
    "I can blend words that use the ar pattern.",
    "I can write ar when I hear it change the sound of a vowel in a word.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — r-controlled vowels, ar — delivered on UFLI Foundations' 8-step lesson routine expanded to 50 minutes.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Say 'a' alone (like in cat), then 'ar' (like in car). Ask: does the r change how the vowel sounds?",
      prompt: "Does 'r' change how a vowel sounds?",
      promptSimple: "R changes the vowel sound!",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast! These are all sounds we already know.",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Pure recall warm-up — brisk and choral, about fifteen seconds a card. Ten vowel teams in, this is a sampling rather than every single one taught — swap in whichever cards your class still hesitates on. Today's ar is a different kind of pattern (a vowel changed by the letter after it, not two vowels teaming up), so this drill is more about keeping old sounds sharp than previewing the new one.",
        cards: [
          { letters: "a_e", keyword: "Cake", emoji: "🎂" },
          { letters: "ai", keyword: "Rain", emoji: "🌧️" },
          { letters: "ay", keyword: "Day", emoji: "☀️" },
          { letters: "ee", keyword: "Bee", emoji: "🐝" },
          { letters: "ea", keyword: "Sea", emoji: "🌊" },
          { letters: "oa", keyword: "Boat", emoji: "⛵" },
          { letters: "ow", keyword: "Snow", emoji: "❄️" },
          { letters: "igh", keyword: "Light", emoji: "💡" },
          { letters: "oo", keyword: "Moon", emoji: "🌙" },
          { letters: "ue", keyword: "Blue", emoji: "🔵", minTrack: "explorers" },
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
          "Purely oral — no letters, ears only. Say the start word, give the instruction, let the class answer together, THEN reveal. art→cart is an addition (a whole onset sound joining the front) — make sure kids hear /k/ joining rather than replacing anything.",
        rounds: [
          { startWord: "car", startEmoji: "🚗", instruction: "Change the /c/ to /f/.", answerWord: "far", answerEmoji: "🏞️" },
          { startWord: "far", startEmoji: "🏞️", instruction: "Change the /f/ to /j/.", answerWord: "jar", answerEmoji: "🫙" },
          { startWord: "art", startEmoji: "🎨", instruction: "Add /c/ to the front.", answerWord: "cart", answerEmoji: "🛒" },
          { startWord: "cart", startEmoji: "🛒", instruction: "Change the /c/ to /p/.", answerWord: "part", answerEmoji: "🧩", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "ar",
      keyword: "Car",
      keywordEmoji: "🚗",
      actionCue: "Mime holding a steering wheel and say ar-ar-ar.",
      teacherNote: "Not a short 'a' plus a separate 'r' — the two letters together make one new, single sound.",
    },
    {
      type: "letter_formation",
      letters: "ar",
      strokes: [
        "Start the a with a small curve that closes into a circle, then a short straight line down on the right — just like a normal a.",
        "Lift your pencil and, right beside it, make a tall r — a short line straight down, then a little curve at the top like a hook.",
        "Keep the two letters touching, with no gap — a and r are read as one new sound together, not 'a' then 'r'.",
      ],
      skyWriteCue: "Everyone stand and sky-write a giant a, then right beside it a tall r — say ar-ar-ar the whole time, one sound, not two!",
      teacherNote:
        "Do it in the air as a whole class first, then on paper. This is the first time kids are writing a vowel whose SOUND changes because of the very next letter — make sure they say ar-ar-ar as one sound while writing, not a separate 'a' and 'r'. Watch for a gap opening up between the two letters; that gap tends to make kids say them separately too.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — ar is one tile, a whole new sound.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "'ar' is one combined sound, not 'a' plus 'r' said separately.",
        words: [
          { parts: ["c", "ar"], word: "car", emoji: "🚗" },
          { parts: ["s", "t", "ar"], word: "star", emoji: "⭐" },
          { parts: ["f", "ar", "m"], word: "farm", emoji: "🚜" },
          { parts: ["sh", "ar", "k"], word: "shark", emoji: "🦈", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Only ONE sound changes each time. The 'ar' team never moves — watch every letter, not just the first!",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Today's chain never touches the ar tile — the consonants around it move instead. That forces kids to read all the way through the word instead of guessing from the first letter, which is exactly the habit long-vowel and r-controlled words need to break. Read each new word together BEFORE tapping Check, and ask 'which sound changed?' on every single link.",
        start: { parts: ["c", "ar", "t"], word: "cart", emoji: "🛒" },
        links: [
          { changeIndex: 2, newPart: "d", word: "card", emoji: "🃏" },
          { changeIndex: 0, newPart: "h", word: "hard", emoji: "💪" },
          { changeIndex: 0, newPart: "y", word: "yard", emoji: "🌳", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ar — steer a car, ar-ar-ar", emoji: "🚗" },
        { text: "Reach up and grab a star!", emoji: "⭐" },
        { text: "Mime driving a tractor on a farm.", emoji: "🚜" },
        { text: "Snap your jaws like a shark!", emoji: "🦈" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one — remember, boxes count sounds, not letters.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "'Start' has five letters but only four sounds, because ar is a team sharing one box, same as every vowel team before it. Say each word slowly, have the class push a finger forward per sound BEFORE tapping, then count the letters together and let them be surprised by the mismatch.",
        words: [
          { word: "car", emoji: "🚗", parts: ["c", "ar"] },
          { word: "farm", emoji: "🚜", parts: ["f", "ar", "m"] },
          { word: "shark", emoji: "🦈", parts: ["sh", "ar", "k"] },
          { word: "start", emoji: "🏁", parts: ["s", "t", "ar", "t"], minTrack: "explorers" },
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
          "Sound out the regular parts first, THEN reveal the heart letters. In 'was', the w behaves normally but the a and the s don't. Point out that 'are' is almost NOT a heart word anymore — now that the class knows ar, only the silent e at the end is left to memorize by heart.",
        words: [
          { word: "was", heartIndexes: [1, 2], sentence: "The shark was in the dark." },
          { word: "are", heartIndexes: [2], sentence: "Cars are fast." },
          { word: "have", heartIndexes: [3], sentence: "Farms have barns.", minTrack: "explorers" },
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
          "Say each word twice at normal speed — over-stretching makes kids spell what they hear rather than the real word. Watch for kids writing 'a' then a separate 'r': remind them ar is one sound and gets written with no gap between the letters. Give everyone time to finish before revealing.",
        words: [
          { text: "car" },
          { text: "star" },
          { text: "farm" },
          { text: "shark" },
          { text: "yard", minTrack: "explorers" },
        ],
        sentences: [
          { text: "Sharks swim fast." },
          { text: "Farm cats run and play in yards.", minTrack: "explorers" },
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
          "Read each line chorally, then let a volunteer read it alone. Every word uses only sounds taught so far plus the heart words 'a', 'to', 'the', 'is' and 'said'. Tap any word the class gets stuck on to enlarge it.",
        lines: [
          { text: "A cat ran to the barn.", emoji: "🐱" },
          { text: "The cat is on the farm.", emoji: "🚜" },
          { text: "She said, \"See that star!\"", emoji: "⭐" },
          { text: "Cars park in the dark.", emoji: "🌃" },
        ],
        comprehensionQuestions: [
          { question: "Where did the cat run?", discussionNote: "To the barn on the farm — point back to the first two lines together." },
          { question: "Can you find two words with the ar sound?", discussionNote: "barn, farm, star, cars, park, dark — have a child point to two and say the ar sound aloud." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned that ar makes its own new sound. We blended, chained, and wrote words like car, star, farm, shark — and read a whole story!",
      summarySimple: "ar makes its own new sound! We made, wrote, and read: car, star, farm, shark!",
      homework: "At home, find something with an ar sound in its name and tell a grown-up.",
    },
  ],
};
