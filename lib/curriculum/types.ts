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
  | "blending";

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

export type ActivityConfig =
  | TrainTheRobotConfig
  | SequenceBuilderConfig
  | SentenceBuilderConfig
  | MinimalPairsConfig
  | MemoryMatchConfig
  | PatternPredictorConfig
  | AIOrNotConfig
  | InstructVoraConfig
  | BlendingConfig;

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
  | PhonicsSoundSegment;

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
