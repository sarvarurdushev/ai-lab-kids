/**
 * Content model for the full teacher-led curriculum. See
 * docs/AI_CURRICULUM.md ("Content vs. progress split") for why this lives
 * as versioned code, not database rows: curriculum content is authored and
 * reviewed like a textbook, not edited at runtime by end users.
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

/** Every learner-facing string carries both languages — see lib/i18n.ts for how korean_support_level decides what's shown. */
export interface Bilingual {
  en: string;
  ko: string;
}

export interface VocabWord {
  word: Bilingual;
  emoji: string;
  /** Present only when this word is chosen specifically to drill a Korean L1 sound gap (see docs/KOREAN_L1_NOTES.md). */
  targetsSound?: string;
  /** Set to "explorers" for bonus words shown only to the 6+ track — see lib/trackContent.ts. Omit to show to every track. */
  minTrack?: AgeTrack;
}

export interface WarmupSegment {
  type: "warmup";
  teacherScript: Bilingual;
  /** What the teacher says/does to open the lesson — displayed on the projector as a prompt for the class to respond to together. */
  prompt: Bilingual;
}

export interface VocabSegment {
  type: "vocab";
  title: Bilingual;
  words: VocabWord[];
}

export interface ConceptSegment {
  type: "concept";
  title: Bilingual;
  bigIdeas: BigIdea[];
  /** Robi's lines, shown/spoken one at a time on the projector. A line with minTrack: "explorers" is skipped for little_sparks classes — see lib/trackContent.ts. */
  lines: (Bilingual & { minTrack?: AgeTrack })[];
  teacherNote: string;
}

export type ActivityEngine =
  | "train_the_robot"
  | "sequence_builder"
  | "sentence_builder"
  | "minimal_pairs"
  | "memory_match"
  | "pattern_predictor";

export interface SortBucketItem {
  word: Bilingual;
  emoji: string;
  bucket: "a" | "b";
  minTrack?: AgeTrack;
}

export interface TrainTheRobotConfig {
  engine: "train_the_robot";
  title: Bilingual;
  labelA: Bilingual;
  labelB: Bilingual;
  emojiA: string;
  emojiB: string;
  items: SortBucketItem[];
}

export interface SequenceBuilderConfig {
  engine: "sequence_builder";
  title: Bilingual;
  steps: { text: Bilingual; emoji: string; minTrack?: AgeTrack }[];
}

/** Same ordering mechanic as sequence_builder, but the tiles are words of a sentence (SVO drill) instead of routine steps — connector labels become grammar roles instead of first/next/then/last. */
export interface SentenceBuilderConfig {
  engine: "sentence_builder";
  title: Bilingual;
  /** Words in correct left-to-right order; each tagged with its grammar role for the teacher-facing label. */
  words: { text: string; role: "subject" | "verb" | "object" | "other"; ko: string }[];
  translation: Bilingual;
}

export interface MinimalPairsConfig {
  engine: "minimal_pairs";
  title: Bilingual;
  targetSound: string;
  teacherNote: string;
  pairs: {
    wordA: { text: string; emoji: string; ko: string };
    wordB: { text: string; emoji: string; ko: string };
    minTrack?: AgeTrack;
  }[];
}

/** Flip-card pairs game: reinforces a month's vocabulary through recognition/recall rather than production. Modeled on the classic "memory" game — see docs/AI_CURRICULUM.md. */
export interface MemoryMatchConfig {
  engine: "memory_match";
  title: Bilingual;
  pairs: { word: Bilingual; emoji: string; minTrack?: AgeTrack }[];
}

/** "What comes next?" — a short emoji sequence with one blank; kids pick the missing item from a few choices. Concretely demonstrates the "representation & reasoning" / "learning" big idea: AI (and people) predict what comes next by finding a pattern in examples. */
export interface PatternPredictorConfig {
  engine: "pattern_predictor";
  title: Bilingual;
  teacherNote: string;
  rounds: {
    sequence: string[];
    answer: string;
    options: string[];
    minTrack?: AgeTrack;
  }[];
}

export type ActivityConfig =
  | TrainTheRobotConfig
  | SequenceBuilderConfig
  | SentenceBuilderConfig
  | MinimalPairsConfig
  | MemoryMatchConfig
  | PatternPredictorConfig;

export interface ActivitySegment {
  type: "activity";
  instructions: Bilingual;
  config: ActivityConfig;
}

export interface CheckSegment {
  type: "check";
  prompt: Bilingual;
  method: "whole_class_thumbs" | "cold_call";
}

export interface WrapupSegment {
  type: "wrapup";
  summary: Bilingual;
  homework?: Bilingual;
}

export type LessonSegment =
  | WarmupSegment
  | VocabSegment
  | ConceptSegment
  | ActivitySegment
  | CheckSegment
  | WrapupSegment;

/** Which of the month's three class sessions a lesson is — mirrors the "Class 50 / Action Play 50 / Today's English Spotlight" pillars of the reference curriculum. See lib/curriculum/months.ts. */
export type MonthlySlot = "class" | "action_play" | "spotlight";

export interface LessonMeta {
  key: string;
  unitKey: string;
  /** Set for the 8-week "Robi's Classroom" foundations unit. Monthly-curriculum lessons use monthIndex/slot instead. */
  week?: number;
  day?: number;
  /** Set for monthly-curriculum lessons (1-12) — see lib/curriculum/months.ts. */
  monthIndex?: number;
  slot?: MonthlySlot;
  title: Bilingual;
  bigIdeas: BigIdea[];
  englishFocus: Bilingual;
  koreanL1Note: string;
  objectives: Bilingual[];
  standardsNote: string;
}

export interface Lesson extends LessonMeta {
  segments: LessonSegment[];
}

export interface Unit {
  key: string;
  title: Bilingual;
  weekRange: [number, number];
  summary: Bilingual;
}

/** One month of the year-long themed curriculum — see docs/MONTHLY_CURRICULUM.md. Each month has three lessons (class/action_play/spotlight slots) reachable via lessonsForMonth(). */
export interface MonthlyUnit {
  key: string;
  monthIndex: number;
  title: Bilingual;
  /** The real-world topic this month adapts (from the reference 12-month topic guide), kept for teacher orientation even though the AI big idea is the pedagogical spine. */
  posterTheme: string;
  bigIdeaFocus: BigIdea;
  englishFocus: Bilingual;
  summary: Bilingual;
}
