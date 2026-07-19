/**
 * Content model for the full teacher-led curriculum. See
 * docs/AI_CURRICULUM.md ("Content vs. progress split") for why this lives
 * as versioned code, not database rows: curriculum content is authored and
 * reviewed like a textbook, not edited at runtime by end users.
 */

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
  /** Robi's lines, shown/spoken one at a time on the projector. */
  lines: Bilingual[];
  teacherNote: string;
}

export type ActivityEngine = "train_the_robot" | "sequence_builder" | "sentence_builder" | "minimal_pairs";

export interface SortBucketItem {
  word: Bilingual;
  emoji: string;
  bucket: "a" | "b";
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
  steps: { text: Bilingual; emoji: string }[];
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
  }[];
}

export type ActivityConfig =
  | TrainTheRobotConfig
  | SequenceBuilderConfig
  | SentenceBuilderConfig
  | MinimalPairsConfig;

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

export interface LessonMeta {
  key: string;
  unitKey: string;
  week: number;
  day: number;
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
