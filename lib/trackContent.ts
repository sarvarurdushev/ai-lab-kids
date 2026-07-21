import "server-only";
import type { ActivityConfig, AgeTrack, Lesson, LessonSegment } from "./curriculum/types";

/**
 * Same lesson, two age tracks — rather than authoring two full copies of
 * every lesson, pieces that only make sense for the 6+ "Explorers" track
 * (harder vocab, a longer sort, an extra pattern round) are tagged
 * `minTrack: "explorers"` where they're authored (see lib/curriculum/types.ts).
 * This strips those pieces out server-side for "Little Sparks" (4-5)
 * classes before the lesson ever reaches the Presentation Player. Always
 * returns a new object — lesson content objects are shared module-level
 * singletons across every request, so this must never mutate `lesson`.
 */
export function filterLessonForTrack(lesson: Lesson, track: AgeTrack): Lesson {
  return { ...lesson, segments: lesson.segments.map((segment) => filterSegment(segment, track)) };
}

function keep<T extends { minTrack?: AgeTrack }>(items: T[], track: AgeTrack): T[] {
  return items.filter((item) => !item.minTrack || item.minTrack === track);
}

function filterSegment(segment: LessonSegment, track: AgeTrack): LessonSegment {
  switch (segment.type) {
    case "vocab":
      return { ...segment, words: keep(segment.words, track) };
    case "concept":
      return { ...segment, lines: keep(segment.lines, track) };
    case "activity":
      return { ...segment, config: filterActivityConfig(segment.config, track) };
    case "warmup":
    case "movement":
    case "chant":
    case "check":
    case "wrapup":
      return segment;
  }
}

function filterActivityConfig(config: ActivityConfig, track: AgeTrack): ActivityConfig {
  switch (config.engine) {
    case "train_the_robot":
      return { ...config, items: keep(config.items, track) };
    case "sequence_builder":
      return { ...config, steps: keep(config.steps, track) };
    case "minimal_pairs":
      return { ...config, pairs: keep(config.pairs, track) };
    case "memory_match":
      return { ...config, pairs: keep(config.pairs, track) };
    case "pattern_predictor":
      return { ...config, rounds: keep(config.rounds, track) };
    case "sentence_builder":
      // Word order is the point of this engine — filtering would break the sentence, so both tracks always get the full sentence.
      return config;
    case "ai_or_not":
      return { ...config, items: keep(config.items, track) };
    case "instruct_vora":
      // A fixed short instruction sequence — no minTrack-tagged steps to filter.
      return config;
  }
}
