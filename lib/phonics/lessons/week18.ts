import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 4 — long-o vowel teams: oa, ow. Explorers (6+) only.
 *
 * Full 50-minute class, built on the same block order as week1.ts (the
 * reference lesson) and week17.ts (the first converted Unit 2 week):
 * cumulative drill → oral phoneme work → the new graphemes → handwriting →
 * blending → chaining → movement → segmenting → heart words → dictation →
 * connected text → wrap-up. Unit 2 is the Explorers-only track: every child
 * here has already blended CVC words for many weeks, so the lesson spends
 * real time on encoding (writing), not re-teaching what a sound is.
 *
 * Note for later: 'ow' comes back in week 24 making a DIFFERENT sound (as
 * in "cow") — that lesson explicitly calls back to this one.
 *
 * Decodability: every word below uses only Unit 1's sounds plus a_e, i_e,
 * o_e, ai, ay, ee, ea, oa, ow. The only exceptions are the taught heart
 * words (was, to, are), which appear only in the connected-text block.
 */
export const ph_week18: Lesson = {
  key: "ph_week18",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: oa, ow (long o)",
  bigIdeas: [],
  englishFocus:
    "Learning that oa and ow (as in \"snow\") both make the long o sound, and writing both spellings from dictation.",
  koreanL1Note:
    "No particular Korean-L1 trouble sound here. Flag for later: 'ow' will resurface in a few weeks making a completely different sound (as in \"cow\") — worth a quick heads-up now that English spelling sometimes does this. Kids will need paper and a pencil from the handwriting block onward, and again for dictation.",
  objectives: [
    "I know that oa and ow can both make the long o sound.",
    "I can blend words that use the oa or ow (long o) pattern.",
    "I can write oa and ow when I hear the long o sound in a word.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — long vowel teams, oa/ow — delivered on UFLI Foundations' 8-step lesson routine expanded to 50 minutes.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of ee/ea from last week. Say: 'Today, two more spellings for one long sound — this time, long o.'",
      prompt: "Two more spellings, one long o sound!",
      promptSimple: "Two spellings, one sound: oa!",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast! These are all sounds we already know.",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Pure recall warm-up, not assessment — keep it brisk and choral, about fifteen seconds a card. The vowel-team cards matter most today: kids need a_e, ai, ay, ee and ea solid in their ears before we add oa and ow as two more spellings for a long vowel.",
        cards: [
          { letters: "sh", keyword: "Ship", emoji: "🚢" },
          { letters: "ch", keyword: "Chair", emoji: "🪑" },
          { letters: "a_e", keyword: "Cake", emoji: "🎂" },
          { letters: "i_e", keyword: "Bike", emoji: "🚲" },
          { letters: "o_e", keyword: "Bone", emoji: "🦴" },
          { letters: "ai", keyword: "Rain", emoji: "🌧️" },
          { letters: "ay", keyword: "Day", emoji: "☀️" },
          { letters: "ee", keyword: "Bee", emoji: "🐝" },
          { letters: "ea", keyword: "Sea", emoji: "🌊", minTrack: "explorers" },
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
          "Purely oral — don't show or mention letters here. Say the start word, give the instruction, let the class answer chorally, THEN reveal. If they stall, say both words slowly back to back and ask what changed.",
        rounds: [
          { startWord: "slow", startEmoji: "🐢", instruction: "Take away the /s/. What's left?", answerWord: "low", answerEmoji: "⬇️" },
          { startWord: "low", startEmoji: "⬇️", instruction: "Change the /l/ to /m/.", answerWord: "mow", answerEmoji: "🚜" },
          { startWord: "mow", startEmoji: "🚜", instruction: "Change the /m/ to /r/.", answerWord: "row", answerEmoji: "🚣" },
          { startWord: "row", startEmoji: "🚣", instruction: "Change the /r/ to /gr/.", answerWord: "grow", answerEmoji: "🌱", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "oa",
      keyword: "Boat",
      keywordEmoji: "⛵",
      actionCue: "Rock side to side like a boat on water and say a long o-o-o.",
      teacherNote: "Used in the middle of a word (boat, coat) — very reliable, almost always says long o.",
    },
    {
      type: "phonics_sound",
      letters: "ow",
      keyword: "Snow",
      keywordEmoji: "❄️",
      actionCue: "Flutter your fingers down slowly like falling snow and say a long o-o-o.",
      teacherNote:
        "This spelling has two possible sounds in English — today it's the long-o sound (snow, grow). In a few weeks it comes back making a totally different sound, like in 'cow' — that's normal, not a mistake.",
    },
    {
      type: "letter_formation",
      letters: "oa",
      strokes: [
        "Start at the top of the o and curve all the way around to close the circle.",
        "Lift your pencil and move right next to it.",
        "Start the a with a small curve that closes like an o, then add a short straight line down the right side.",
      ],
      skyWriteCue:
        "Everyone stand and sky-write a giant o… then right beside it a giant a. Stretch a long ooooo the whole time!",
      teacherNote:
        "Do it in the air as a whole class first, then on paper. The two letters are written right next to each other and read as ONE sound — remind kids they don't pause or say two separate sounds between the o and the a. Watch for the second letter (a) coming out too small or squeezed against the o.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — oa and ow (long o) are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Both spellings say long o this week — a different 'ow' sound comes up later.",
        words: [
          { parts: ["b", "oa", "t"], word: "boat", emoji: "⛵" },
          { parts: ["c", "oa", "t"], word: "coat", emoji: "🧥" },
          { parts: ["s", "n", "ow"], word: "snow", emoji: "❄️" },
          { parts: ["r", "ow"], word: "row", emoji: "🚣", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Only ONE sound changes each time. The 'oa' team never moves — watch every letter, not just the first!",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Today's chain never touches the oa tile — only the consonants around it move. That forces kids to read all the way through the word instead of guessing from the first letter, which is exactly the habit long-vowel words need to break. Read each new word together BEFORE tapping Check, and ask 'which sound changed?' on every single link.",
        start: { parts: ["b", "oa", "t"], word: "boat", emoji: "⛵" },
        links: [
          { changeIndex: 0, newPart: "c", word: "coat", emoji: "🧥" },
          { changeIndex: 2, newPart: "l", word: "coal", emoji: "🪨" },
          { changeIndex: 0, newPart: "f", word: "foal", emoji: "🐴", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "oa — rock like a boat, o-o-o", emoji: "⛵" },
        { text: "ow — flutter like falling snow, o-o-o", emoji: "❄️" },
        { text: "Mime putting on a warm coat.", emoji: "🧥" },
        { text: "Mime rowing a boat.", emoji: "🚣" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one — remember, boxes count sounds, not letters.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "This is the block that makes vowel teams click, again. 'Glow' has four letters but only three sounds, because ow is a team sharing one box. Say each word slowly, have the class push a finger forward per sound BEFORE tapping, then count the letters together and let them notice the mismatch.",
        words: [
          { word: "boat", emoji: "⛵", parts: ["b", "oa", "t"] },
          { word: "road", emoji: "🛣️", parts: ["r", "oa", "d"] },
          { word: "snow", emoji: "❄️", parts: ["s", "n", "ow"] },
          { word: "glow", emoji: "✨", parts: ["g", "l", "ow"], minTrack: "explorers" },
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
          "Sound out the regular letters together first, THEN reveal the heart letters. In 'was', the w behaves normally but the a and the s don't — say 'this part we can sound out, this part we just know by heart.' 'are' is fully irregular for now since we haven't met ar as its own sound yet — that's coming soon.",
        words: [
          { word: "was", heartIndexes: [1, 2], sentence: "The boat was slow." },
          { word: "to", heartIndexes: [1], sentence: "The goat likes to eat." },
          { word: "are", heartIndexes: [0, 1, 2], sentence: "Boats are slow.", minTrack: "explorers" },
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
          "Say each word twice at normal speed — over-stretching makes kids spell what they hear rather than the real word. The hard call today is oa vs ow: both are correct guesses for the long o sound, so praise any plausible spelling, then show which one this word actually uses. Give everyone time to finish before revealing.",
        words: [
          { text: "boat" },
          { text: "coat" },
          { text: "snow" },
          { text: "road" },
          { text: "goat", minTrack: "explorers" },
        ],
        sentences: [
          { text: "Goats can run fast." },
          { text: "Snow can float on top.", minTrack: "explorers" },
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
          "Read each line chorally, then let a volunteer read it alone. Every word uses only sounds taught so far plus the heart words 'a', 'he', 'to' and 'his'. Tap any word the class gets stuck on to enlarge it.",
        lines: [
          { text: "A goat put on a coat.", emoji: "🐐" },
          { text: "He went on the road.", emoji: "🛣️" },
          { text: "He got to the boat.", emoji: "⛵" },
          { text: "Snow got on his coat!", emoji: "❄️" },
        ],
        comprehensionQuestions: [
          { question: "Where did the goat go?", discussionNote: "Down the road to the boat — point back to lines two and three together." },
          { question: "What happened to his coat at the end?", discussionNote: "Snow got on it! Have a child point to the word 'snow' and the word 'coat'." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned oa and ow can both say long o. We blended, chained, and wrote words like boat, coat, snow — and read a whole story!",
      summarySimple: "oa and ow can say long o! We made, wrote, and read: boat, coat, snow!",
      homework: "At home, find something with an oa or ow sound in its name and tell a grown-up.",
    },
  ],
};
