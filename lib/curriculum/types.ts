/**
 * Content model for the full teacher-led curriculum. See
 * docs/AI_CURRICULUM.md ("Content vs. progress split") for why this lives
 * as versioned code, not database rows: curriculum content is authored and
 * reviewed like a textbook, not edited at runtime by end users.
 *
 * English-only by design: every learner-facing string is plain English.
 * Kids at this age/level can't read fluently in either language, so the
 * product leans on visuals (emoji, icons, Vora's expressions) to carry
 * meaning instead of a second-language subtitle track.
 */

/** "Little Sparks" (4-5, pre-reader) vs "AI Explorers" (6+, early reader) — same values used by lib/soloCurriculum.ts. */
export type AgeTrack = "little_sparks" | "explorers";

export type BigIdea = "perception" | "learning" | "reasoning" | "natural_interaction" | "societal_impact";

export const BIG_IDEA_LABELS: Record<BigIdea, string> = {
  perception: "Perception",
  learning: "Learning",
  reasoning: "Representation & Reasoning",
  natural_interaction: "Natural Interaction",
  societal_impact: "Societal Impact",
};

export interface VocabWord {
  word: string;
  emoji: string;
  /** Present only when this word is chosen specifically to drill a sound gap common for Korean-speaking learners (see docs/KOREAN_L1_NOTES.md). */
  targetsSound?: string;
  /** Set to "explorers" for bonus words shown only to the 6+ track — see lib/trackContent.ts. Omit to show to every track. */
  minTrack?: AgeTrack;
}

export interface WarmupSegment {
  type: "warmup";
  teacherScript: string;
  /** What the teacher says/does to open the lesson — displayed on the projector as a prompt for the class to respond to together. */
  prompt: string;
  /** A shorter, simpler version of `prompt` shown instead for Little Sparks (4-5) classes — see lib/trackContent.ts. Optional: falls back to `prompt` until authored. */
  promptSimple?: string;
}

export interface VocabSegment {
  type: "vocab";
  title: string;
  words: VocabWord[];
}

export interface ConceptSegment {
  type: "concept";
  title: string;
  bigIdeas: BigIdea[];
  /** Vora's lines, shown/spoken one at a time on the projector — kept to a short phrase each. A line with minTrack: "explorers" is skipped for little_sparks classes; `textSimple`, when present, replaces `text` for little_sparks instead of skipping the line — see lib/trackContent.ts. */
  lines: { text: string; textSimple?: string; minTrack?: AgeTrack }[];
  teacherNote: string;
}

export type ActivityEngine =
  | "train_the_robot"
  | "sequence_builder"
  | "sentence_builder"
  | "minimal_pairs"
  | "memory_match"
  | "pattern_predictor"
  | "ai_or_not"
  | "instruct_vora"
  | "blending"
  | "sound_drill"
  | "phoneme_swap"
  | "word_chain"
  | "sound_box"
  | "heart_word"
  | "dictation"
  | "decodable_text"
  | "fluency_race";

export interface SortBucketItem {
  word: string;
  emoji: string;
  bucket: "a" | "b";
  minTrack?: AgeTrack;
}

export interface TrainTheRobotConfig {
  engine: "train_the_robot";
  title: string;
  labelA: string;
  labelB: string;
  emojiA: string;
  emojiB: string;
  items: SortBucketItem[];
}

export interface SequenceBuilderConfig {
  engine: "sequence_builder";
  title: string;
  steps: { text: string; emoji: string; minTrack?: AgeTrack }[];
}

/** Same ordering mechanic as sequence_builder, but the tiles are words of a sentence (SVO drill) instead of routine steps — connector labels become grammar roles instead of first/next/then/last. */
export interface SentenceBuilderConfig {
  engine: "sentence_builder";
  title: string;
  /** Words in correct left-to-right order; each tagged with its grammar role for the teacher-facing label. */
  words: { text: string; role: "subject" | "verb" | "object" | "other" }[];
}

export interface MinimalPairsConfig {
  engine: "minimal_pairs";
  title: string;
  targetSound: string;
  teacherNote: string;
  pairs: {
    wordA: { text: string; emoji: string };
    wordB: { text: string; emoji: string };
    minTrack?: AgeTrack;
  }[];
}

/** Flip-card pairs game: reinforces a month's vocabulary through recognition/recall rather than production. Modeled on the classic "memory" game — see docs/AI_CURRICULUM.md. */
export interface MemoryMatchConfig {
  engine: "memory_match";
  title: string;
  pairs: { word: string; emoji: string; minTrack?: AgeTrack }[];
}

/** "What comes next?" — a short emoji sequence with one blank; kids pick the missing item from a few choices. Concretely demonstrates the "representation & reasoning" / "learning" big idea: AI (and people) predict what comes next by finding a pattern in examples. */
export interface PatternPredictorConfig {
  engine: "pattern_predictor";
  title: string;
  teacherNote: string;
  rounds: {
    sequence: string[];
    answer: string;
    options: string[];
    minTrack?: AgeTrack;
  }[];
}

/**
 * "Is This AI?" — real-world recognition game, not vocabulary practice.
 * Kids classify everyday things/systems as AI or not, with an immediate
 * plain-language explanation after each answer. This is the single most
 * widely-recommended elementary AI-literacy activity across ISTE ("K-2
 * students identify AI in voice assistants") and AI4K12 Big Idea 5
 * (Societal Impact / "AI is everywhere") — see docs/AI_CURRICULUM.md
 * "Standards alignment". Content is authored once as a reusable bank (see
 * lib/curriculum/aiLabBank.ts) and rotated across months, since the whole
 * point is real-world examples, not month-themed vocabulary. Content is
 * kept to a short label + emoji per item — recognition, not reading, is
 * the point.
 */
export interface AIOrNotConfig {
  engine: "ai_or_not";
  title: string;
  teacherNote: string;
  items: {
    scenario: string;
    emoji: string;
    isAI: boolean;
    explanation: string;
    minTrack?: AgeTrack;
  }[];
}

/**
 * "Give Vora Clear Instructions" — kids first watch a vague instruction
 * cause Vora to do the wrong thing, then arrange precise, ordered steps
 * that make Vora succeed. Concretely teaches that computers/AI act
 * exactly on the instructions they're given (UNESCO AI Competency
 * Framework for Students, "AI techniques and applications" /"AI system
 * design" dimensions) — the same precision-matters idea behind
 * programming an algorithm or writing a clear prompt, at an age-safe,
 * fully offline remove from a real chatbot. Also a reusable bank — see
 * lib/curriculum/aiLabBank.ts. Every string here is short by design: the
 * steps are the activity, not the narration around them.
 */
export interface InstructVoraConfig {
  engine: "instruct_vora";
  title: string;
  teacherNote: string;
  goalLabel: string;
  goalEmoji: string;
  vagueInstruction: string;
  vagueResultEmoji: string;
  vagueResultText: string;
  steps: { text: string; emoji: string }[];
  successText: string;
}

/**
 * "Sound It Out" — the core synthetic-phonics mechanic: tap each letter (or
 * digraph/blend) tile left to right to reveal it, then blend the revealed
 * parts into the whole word. Deliberately never speaks an individual part
 * through text-to-speech — see components/engines/BlendingEngine.tsx for
 * why (TTS says letter names, not clipped phonemes) — the teacher voices
 * each sound live and the class echoes it; only the finished real word is
 * safe for speak(). `parts` is always the correct left-to-right spelling,
 * never shuffled: revealing is a rehearsal, not a reordering puzzle.
 */
export interface BlendingConfig {
  engine: "blending";
  title: string;
  teacherNote: string;
  words: {
    parts: string[];
    word: string;
    emoji: string;
    minTrack?: AgeTrack;
  }[];
}

/**
 * Rapid cumulative review of every sound taught so far — UFLI Foundations'
 * steps 2-3 ("visual drill" / "auditory drill"), the structural piece the
 * first phonics build skipped entirely. Teacher-paced: one card at a time,
 * class says the sound chorally, teacher advances. Deliberately not timed
 * or scored — this is warm-up recall, not assessment.
 */
export interface SoundDrillConfig {
  engine: "sound_drill";
  title: string;
  teacherNote: string;
  cards: { letters: string; keyword: string; emoji: string; minTrack?: AgeTrack }[];
}

/**
 * "Say cat. Now change /k/ to /b/." Phoneme addition, deletion, and
 * substitution — the highest-value phonemic-awareness skill and the
 * strongest single predictor of later reading. The class answers ALOUD
 * before the answer is revealed, so the reveal is a check, not the
 * activity itself.
 */
export interface PhonemeSwapConfig {
  engine: "phoneme_swap";
  title: string;
  teacherNote: string;
  rounds: {
    startWord: string;
    startEmoji: string;
    /** Kid-facing instruction, e.g. "Take away the /s/" or "Change /k/ to /b/". */
    instruction: string;
    answerWord: string;
    answerEmoji: string;
    minTrack?: AgeTrack;
  }[];
}

/**
 * cat -> cot -> cop -> chop. Each link changes exactly ONE tile, so kids
 * must attend to every position in a word instead of guessing from the
 * first letter — the reason word chaining is the single highest-value
 * phonics activity in the literature. `changeIndex` is validated against
 * the running tile array at authoring time, not runtime.
 */
export interface WordChainConfig {
  engine: "word_chain";
  title: string;
  teacherNote: string;
  start: { parts: string[]; word: string; emoji: string };
  links: {
    /** Which tile position changes (0-based) to make this new word. */
    changeIndex: number;
    newPart: string;
    word: string;
    emoji: string;
    minTrack?: AgeTrack;
  }[];
}

/**
 * Elkonin boxes: one box per SOUND, not per letter — so "ship" is three
 * boxes for four letters. The classic bridge from hearing sounds to
 * spelling them, and the cleanest way to show kids that sounds and
 * letters aren't the same thing.
 */
export interface SoundBoxConfig {
  engine: "sound_box";
  title: string;
  teacherNote: string;
  words: { word: string; emoji: string; parts: string[]; minTrack?: AgeTrack }[];
}

/**
 * High-frequency words with one irregular part. Kids sound out everything
 * that behaves normally and memorize ("heart") only the letter(s) that
 * don't — evidence-based practice that beats whole-word memorization.
 * `heartIndexes` are positions into `word`, so the renderer can mark
 * exactly the irregular letters.
 */
export interface HeartWordConfig {
  engine: "heart_word";
  title: string;
  teacherNote: string;
  words: {
    word: string;
    heartIndexes: number[];
    sentence: string;
    minTrack?: AgeTrack;
  }[];
}

/**
 * Encoding — the half of phonics the first build shipped without. Teacher
 * says a word or sentence, kids write it on paper, then the screen reveals
 * the correct spelling to check against. The reveal is deliberately a
 * separate teacher action: revealing early turns writing practice into
 * copying practice.
 */
export interface DictationConfig {
  engine: "dictation";
  title: string;
  teacherNote: string;
  words: { text: string; minTrack?: AgeTrack }[];
  sentences: { text: string; minTrack?: AgeTrack }[];
}

/**
 * Connected text — UFLI's step 8, which every lesson is supposed to end
 * with. A short passage built only from sounds already taught, read
 * chorally; tapping any word enlarges and speaks it for a kid who gets
 * stuck. Distinct from StorySegment (a narrative told to the class) —
 * this is text the children read themselves.
 */
export interface DecodableTextConfig {
  engine: "decodable_text";
  title: string;
  teacherNote: string;
  lines: { text: string; emoji: string }[];
  comprehensionQuestions: { question: string; discussionNote: string }[];
}

/**
 * Timed automaticity round — the class reads as many already-taught words
 * as it can before the timer runs out, then tries to beat its own record.
 * Optional overflow block for fast classes and review weeks, not part of
 * the core 50 minutes.
 */
export interface FluencyRaceConfig {
  engine: "fluency_race";
  title: string;
  teacherNote: string;
  seconds: number;
  words: { text: string; minTrack?: AgeTrack }[];
}

export type ActivityConfig =
  | TrainTheRobotConfig
  | SequenceBuilderConfig
  | SentenceBuilderConfig
  | MinimalPairsConfig
  | MemoryMatchConfig
  | PatternPredictorConfig
  | AIOrNotConfig
  | InstructVoraConfig
  | BlendingConfig
  | SoundDrillConfig
  | PhonemeSwapConfig
  | WordChainConfig
  | SoundBoxConfig
  | HeartWordConfig
  | DictationConfig
  | DecodableTextConfig
  | FluencyRaceConfig;

export interface ActivitySegment {
  type: "activity";
  instructions: string;
  config: ActivityConfig;
}

export interface CheckSegment {
  type: "check";
  prompt: string;
  method: "whole_class_thumbs" | "cold_call";
}

/**
 * A short, physical, whole-class energy break tied to the lesson's own
 * vocabulary — kids act out each word instead of just hearing it. Exists
 * to add real engaged minutes to a lesson (not padding), and to give
 * movement-based reinforcement for kids who don't learn well from sitting
 * and listening. Content-only, no interactive engine needed.
 */
export interface MovementSegment {
  type: "movement";
  title: string;
  instructions: string;
  /** A move tagged minTrack: "explorers" is skipped for little_sparks classes, giving a shorter movement break — see lib/trackContent.ts. */
  moves: { text: string; emoji: string; minTrack?: AgeTrack }[];
}

/**
 * A short call-and-response chant reinforcing the lesson's target sentence
 * pattern through rhythm and repetition — a standard, well-evidenced ESL
 * technique for this age group. The teacher says the call line, the whole
 * class echoes the response line. Content-only, no interactive engine.
 */
export interface ChantSegment {
  type: "chant";
  title: string;
  instructions: string;
  /** A line tagged minTrack: "explorers" is skipped for little_sparks classes — a shorter, slower chant with more repetition of the remaining lines, rather than every line simplified in place — see lib/trackContent.ts. */
  lines: { call: string; response: string; minTrack?: AgeTrack }[];
}

export interface WrapupSegment {
  type: "wrapup";
  summary: string;
  /** A shorter, simpler version of `summary` shown instead for Little Sparks (4-5) classes — see lib/trackContent.ts. Optional: falls back to `summary` until authored. */
  summarySimple?: string;
  homework?: string;
}

/**
 * Unplugged, teacher-run team competition — no interactive engine, just a
 * script the projector displays while teams take turns calling out an
 * answer. Modeled on the "Categories Relay" format widely used in ESL
 * young-learner classrooms to get far more kids speaking per minute than
 * one-at-a-time Q&A (see docs/AI_CURRICULUM.md, "Activity design").
 */
export interface TeamRelaySegment {
  type: "team_relay";
  title: string;
  instructions: string;
  /** Each prompt is read aloud in turn to alternating teams; a prompt tagged minTrack: "explorers" is skipped for little_sparks classes, giving a shorter relay — see lib/trackContent.ts. */
  prompts: { text: string; emoji: string; minTrack?: AgeTrack }[];
}

/**
 * Unplugged whole-body true/false game — the teacher reads a statement,
 * kids stand if it's true and crouch/sit if it's false, then the teacher
 * reveals the answer and a one-line explanation. A TPR-style alternative to
 * tap-to-answer recognition games (see docs/AI_CURRICULUM.md's Total
 * Physical Response research), giving a genuine movement break with
 * real content instead of just the pre-lesson energy release.
 */
export interface StandSitSegment {
  type: "stand_sit";
  title: string;
  instructions: string;
  /** A statement tagged minTrack: "explorers" is skipped for little_sparks classes — see lib/trackContent.ts. */
  statements: { text: string; isTrue: boolean; explanation: string; emoji: string; minTrack?: AgeTrack }[];
}

/**
 * Unplugged open-discussion / show-of-hands poll — the teacher poses a
 * question with no single correct answer, the class votes or discusses,
 * and the teacher can share their own take after. Distinct from a
 * CheckSegment (which checks understanding of a specific grammar pattern):
 * this is a genuine opinion/discussion moment, the kind of teacher-led
 * talk elementary AI-literacy guides recommend alongside any game.
 */
export interface ClassVoteSegment {
  type: "class_vote";
  title: string;
  instructions: string;
  question: string;
  /** A shorter, simpler version of `question` shown instead for Little Sparks (4-5) classes — see lib/trackContent.ts. Optional: falls back to `question` until authored. */
  questionSimple?: string;
  options: { text: string; emoji: string }[];
}

/**
 * A short illustrated read-aloud where Vora tells a story that makes the
 * month's AI big idea concrete through narrative, not a game — comprehensible
 * input via storytelling is a core, well-evidenced technique for this age
 * band (see docs/AI_CURRICULUM.md's Total Physical Response / comprehensible
 * input research), distinct from every game-based activity engine here.
 * Reuses the same audio-upload system built for chant songs, so a teacher
 * can record or upload real narration (see lib/content/overrideKey.ts's
 * storyAudioKey).
 */
export interface StorySegment {
  type: "story";
  title: string;
  teacherNote: string;
  /** Vora's narration, one panel at a time. A panel's textSimple, when present, replaces text for little_sparks — see lib/trackContent.ts. */
  panels: { text: string; textSimple?: string; emoji: string }[];
  /** Open discussion prompts the teacher asks after the story — no stored answer, just a hint of what a good response looks like. */
  comprehensionQuestions: { question: string; discussionNote: string }[];
}

/**
 * One letter-sound (or digraph) taught with a keyword picture and a
 * physical action the whole class does together while saying the sound —
 * the one technique shared by every well-regarded phonics program (an
 * action per sound). Content-only, like Movement/Chant: the teacher voices
 * the sound live and the class echoes/acts it out. An optional uploaded
 * song reinforces it further (see phonicsSoundAudioKey in overrideKey.ts) —
 * nothing here is synthesized speech.
 */
export interface PhonicsSoundSegment {
  type: "phonics_sound";
  /** The letter(s) this segment teaches — a digraph like "sh" is one unit, same convention as BlendingConfig's `parts`. */
  letters: string;
  keyword: string;
  keywordEmoji: string;
  actionCue: string;
  teacherNote: string;
}

/**
 * Handwriting: how the letter is physically formed, one stroke at a time,
 * with the class sky-writing it together before anyone writes on paper.
 * Content-only like Movement/Chant — the projector shows the letter huge
 * and lists the strokes; the teacher models and the class copies.
 */
export interface LetterFormationSegment {
  type: "letter_formation";
  letters: string;
  /** One short instruction per stroke, in order — "Start at the top. Pull straight down." */
  strokes: string[];
  skyWriteCue: string;
  teacherNote: string;
}

/*
 * ---------------------------------------------------------------------------
 * Productive-language segments (the AI+English 50-minute rebuild)
 * ---------------------------------------------------------------------------
 * The lessons above this point are strong on comprehensible INPUT — listening,
 * watching, echoing, tapping an answer. A count across all 72 lessons found
 * every one of them ends in a single `check`: 40 use `cold_call` (one child
 * speaks) and 32 use `whole_class_thumbs` (no child speaks). So a given child
 * produced English aloud roughly once per 50-minute class and never wrote
 * anything down.
 *
 * That's the same shape of gap phonics had between decoding and encoding, and
 * the fix is the same: build the missing half rather than padding the half
 * that already works. These five segments are all OUTPUT — every child speaks,
 * performs, or writes. Like Movement/Chant/StandSit they're content-only, with
 * no interactive engine: the projector shows the frame and the prompts, and
 * the talking happens in the room.
 */

/**
 * Structured pair speaking on a fixed sentence frame — the single highest-value
 * addition, because it converts "one child speaks" into "every child speaks"
 * without costing extra clock time. Partners work simultaneously; the teacher
 * circulates rather than leading. Standard EFL practice and the main reason a
 * communicative classroom outperforms a lecture-style one at this age.
 */
export interface PartnerTalkSegment {
  type: "partner_talk";
  title: string;
  /** The sentence frame both partners use, shown huge on the projector — e.g. "It's ___ today." */
  frame: string;
  /** A shorter frame for Little Sparks (4-5), who need fewer slots to fill — see lib/trackContent.ts. */
  frameSimple?: string;
  /** One prompt card per turn; partners swap after each. A card tagged minTrack: "explorers" is skipped for little_sparks. */
  cards: { prompt: string; emoji: string; sampleAnswer?: string; minTrack?: AgeTrack }[];
  /** Projector countdown per turn, so pairs swap without the teacher policing it. */
  secondsPerTurn: number;
  teacherNote: string;
}

/**
 * Cumulative spaced review of vocabulary from EARLIER months — the direct
 * analogue of the phonics Sound Drill, and added for the same reason: `vocab`
 * appears only 24 times across 72 lessons (week 1 of each month), so words were
 * introduced once and then never systematically retrieved again. The picture
 * stays hidden until tapped so kids retrieve from the word first.
 */
export interface VocabReviewSegment {
  type: "vocab_review";
  title: string;
  /** Drawn from months already taught — spacing is the entire point, so same-month words don't belong here. */
  words: { word: string; emoji: string; fromMonth: number; minTrack?: AgeTrack }[];
  teacherNote: string;
}

/**
 * Paper-and-pencil production: kids draw the lesson's content and label it
 * from a projected word bank. The written half of the language, which nothing
 * in the AI+English course previously touched, and the one segment that needs
 * physical materials — say so in the lesson's `koreanL1Note` the way the
 * phonics dictation blocks do.
 */
export interface DrawAndLabelSegment {
  type: "draw_and_label";
  title: string;
  instructions: string;
  /** Simpler wording for Little Sparks (4-5) — see lib/trackContent.ts. */
  instructionsSimple?: string;
  /** Projected while they draw, so spelling is copied rather than guessed. */
  wordBank: { word: string; emoji: string; minTrack?: AgeTrack }[];
  /** What a finished page looks like — for the teacher to describe, shown after they draw rather than before, so it doesn't become a template to copy. */
  exampleNote: string;
  minutes: number;
  teacherNote: string;
}

/**
 * A short two-part dialogue the class performs. Gives the sentence frame a
 * social shape — who says what, to whom, and why — which a drill can't. Pairs
 * naturally after PartnerTalk: rehearse in pairs, then a volunteer pair performs.
 */
export interface RolePlaySegment {
  type: "role_play";
  title: string;
  setting: string;
  /** The two parts, e.g. ["Shopkeeper", "Customer"]. */
  roles: [string, string];
  /** `role` indexes into `roles`. A line's lineSimple, when present, replaces line for little_sparks. */
  exchanges: { role: 0 | 1; line: string; lineSimple?: string; emoji: string }[];
  teacherNote: string;
}

/**
 * Total Physical Response listening comprehension — the teacher says an
 * instruction and kids perform it. Proves comprehension without demanding
 * production, so it belongs BEFORE the speaking blocks as the bridge into
 * them. Commands are graded by how many steps they chain together.
 */
export interface ListenAndDoSegment {
  type: "listen_and_do";
  title: string;
  instructions: string;
  /** Graded: start at one step and build up. `steps` is how many actions the command chains. */
  commands: { text: string; steps: number; emoji: string; minTrack?: AgeTrack }[];
  teacherNote: string;
}

export type LessonSegment =
  | WarmupSegment
  | VocabSegment
  | ConceptSegment
  | ActivitySegment
  | MovementSegment
  | ChantSegment
  | CheckSegment
  | WrapupSegment
  | TeamRelaySegment
  | StandSitSegment
  | ClassVoteSegment
  | StorySegment
  | PhonicsSoundSegment
  | LetterFormationSegment
  | PartnerTalkSegment
  | VocabReviewSegment
  | DrawAndLabelSegment
  | RolePlaySegment
  | ListenAndDoSegment;

/**
 * Which of the month's four weekly class sessions a lesson is — one
 * standalone, full lesson plan per week, matching a once-a-week class
 * cadence. `week1` introduces the month's vocabulary/sentence pattern and
 * AI concept; `week2` and `week3` each build a full lesson around one of
 * the month's two games (still teaching/reinforcing the concept, not just
 * playing); `week4` is the speaking-confidence + review week. See
 * lib/curriculum/months.ts.
 */
export type MonthlySlot = "week1" | "week2" | "week3" | "week4";

export interface LessonMeta {
  key: string;
  unitKey: string;
  /** Set for the 8-week "Vora's Classroom" foundations unit. Monthly-curriculum lessons use monthIndex/slot instead. */
  week?: number;
  day?: number;
  /** Set for monthly-curriculum lessons (1-12) — see lib/curriculum/months.ts. */
  monthIndex?: number;
  slot?: MonthlySlot;
  title: string;
  bigIdeas: BigIdea[];
  englishFocus: string;
  /** Teacher-only pedagogical rationale — plain English prose about a Korean-learner phonology/grammar gap this lesson targets (see docs/KOREAN_L1_NOTES.md). Never shown to kids or projected. */
  koreanL1Note: string;
  objectives: string[];
  standardsNote: string;
}

export interface Lesson extends LessonMeta {
  segments: LessonSegment[];
}

export interface Unit {
  key: string;
  title: string;
  weekRange: [number, number];
  summary: string;
}

/** One month of the year-long themed curriculum — see docs/MONTHLY_CURRICULUM.md. Each month has three lessons (class/action_play/spotlight slots) reachable via lessonsForMonth(). */
export interface MonthlyUnit {
  key: string;
  monthIndex: number;
  title: string;
  /** The real-world topic this month adapts (from the reference 12-month topic guide), kept for teacher orientation even though the AI big idea is the pedagogical spine. */
  posterTheme: string;
  bigIdeaFocus: BigIdea;
  englishFocus: string;
  summary: string;
}
