import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";
import { getLesson, ENGINE_PRESENTATION, type AgeTrack } from "@/lib/curriculum";
import { allContentOverrides } from "@/lib/content/overrides";
import {
  vocabOverrideKey,
  movementOverrideKey,
  trainRobotItemKey,
  trainRobotBucketKey,
  sequenceStepKey,
  memoryPairKey,
  minimalPairKey,
  aiOrNotItemKey,
  instructVoraGoalKey,
  instructVoraVagueKey,
  instructVoraStepKey,
  patternPredictorGlyphs,
  patternGlyphKey,
  warmupPromptKey,
  warmupPromptSimpleKey,
  conceptLineKey,
  conceptLineSimpleKey,
  chantLineKey,
  chantSongKey,
  wrapupSummaryKey,
  wrapupSummarySimpleKey,
  wrapupHomeworkKey,
  teamRelayPromptKey,
  standSitStatementKey,
  classVoteQuestionKey,
  classVoteQuestionSimpleKey,
  classVoteOptionKey,
  storyPanelKey,
  storyPanelSimpleKey,
  storyAudioKey,
} from "@/lib/content/overrideKey";
import { Card } from "@/components/ui/Card";
import { OverrideItemEditor } from "@/components/console/OverrideItemEditor";
import { TextOverrideEditor } from "@/components/console/TextOverrideEditor";
import { SongOverrideEditor } from "@/components/console/SongOverrideEditor";

interface EditableItem {
  key: string;
  originalText: string;
  emoji: string;
  textEditable?: boolean;
  minTrack?: AgeTrack;
  /** True for plain-sentence fields (chant lines, wrap-up text) with no natural image slot — rendered with TextOverrideEditor instead of the emoji/photo box. */
  noImage?: boolean;
  /** Set for warmup/concept/wrapup fields that have a separate wording per track (see warmupPromptSimpleKey etc.) — labels which track's version this particular editor controls, distinct from minTrack's "only shown to this track at all" meaning. */
  variantLabel?: string;
}

interface EditableSection {
  segIndex: number;
  title: string;
  kind: string;
  items: EditableItem[];
}

const TRACK_LABEL: Record<"all" | AgeTrack, string> = {
  all: "All items",
  little_sparks: "Little Sparks (4-5)",
  explorers: "AI Explorers (6+)",
};

export default async function AdminLessonContentPage({
  params,
  searchParams,
}: {
  params: Promise<{ lessonKey: string }>;
  searchParams: Promise<{ track?: string }>;
}) {
  const admin = await requireOrgAdmin();
  if (!admin) redirect("/dashboard");

  const { lessonKey } = await params;
  const { track: trackParam } = await searchParams;
  const track: "all" | AgeTrack = trackParam === "little_sparks" || trackParam === "explorers" ? trackParam : "all";

  const lesson = getLesson(lessonKey);
  if (!lesson) notFound();

  const overrides = await allContentOverrides();

  const editableSections: EditableSection[] = lesson.segments
    .map((segment, segIndex): EditableSection | null => {
      if (segment.type === "warmup") {
        const items: EditableItem[] = [];
        if (track === "all" || track === "explorers") {
          items.push({
            key: warmupPromptKey(lesson.key, segIndex),
            originalText: segment.prompt,
            emoji: "💭",
            variantLabel: "AI Explorers (6+) wording",
          });
        }
        if (track === "all" || track === "little_sparks") {
          items.push({
            key: warmupPromptSimpleKey(lesson.key, segIndex),
            originalText: segment.promptSimple ?? segment.prompt,
            emoji: "💭",
            variantLabel: "Little Sparks (4-5) wording",
          });
        }
        return { segIndex, title: "Warm-up prompt", kind: "Warm-up", items };
      }
      if (segment.type === "vocab") {
        return {
          segIndex,
          title: segment.title,
          kind: "Vocabulary",
          items: segment.words.map((w, i) => ({
            key: vocabOverrideKey(lesson.key, segIndex, i),
            originalText: w.word,
            emoji: w.emoji,
            minTrack: w.minTrack,
          })),
        };
      }
      if (segment.type === "concept") {
        const items: EditableItem[] = segment.lines.flatMap((l, i) => {
          // A line already gated to one track entirely (minTrack) behaves like every other gated item below — one editor, hidden by the generic track filter. Only ungated lines get the paired Explorers/Little-Sparks wording editors.
          if (l.minTrack) {
            return [{ key: conceptLineKey(lesson.key, segIndex, i), originalText: l.text, emoji: "🤖", minTrack: l.minTrack }];
          }
          const lineItems: EditableItem[] = [];
          if (track === "all" || track === "explorers") {
            lineItems.push({
              key: conceptLineKey(lesson.key, segIndex, i),
              originalText: l.text,
              emoji: "🤖",
              variantLabel: "AI Explorers (6+) wording",
            });
          }
          if (track === "all" || track === "little_sparks") {
            lineItems.push({
              key: conceptLineSimpleKey(lesson.key, segIndex, i),
              originalText: l.textSimple ?? l.text,
              emoji: "🤖",
              variantLabel: "Little Sparks (4-5) wording",
            });
          }
          return lineItems;
        });
        return { segIndex, title: segment.title, kind: "Vora Explains", items };
      }
      if (segment.type === "movement") {
        return {
          segIndex,
          title: segment.title,
          kind: "Movement Break",
          items: segment.moves.map((m, i) => ({
            key: movementOverrideKey(lesson.key, segIndex, i),
            originalText: m.text,
            emoji: m.emoji,
            minTrack: m.minTrack,
          })),
        };
      }
      if (segment.type === "chant") {
        return {
          segIndex,
          title: segment.title,
          kind: "Chant Time",
          items: segment.lines.flatMap((l, i) => [
            { key: chantLineKey(lesson.key, segIndex, i, "call" as const), originalText: l.call, emoji: "🗣️", noImage: true, minTrack: l.minTrack },
            { key: chantLineKey(lesson.key, segIndex, i, "response" as const), originalText: l.response, emoji: "👂", noImage: true, minTrack: l.minTrack },
          ]),
        };
      }
      if (segment.type === "team_relay") {
        return {
          segIndex,
          title: segment.title,
          kind: "Team Relay",
          items: segment.prompts.map((p, i) => ({
            key: teamRelayPromptKey(lesson.key, segIndex, i),
            originalText: p.text,
            emoji: p.emoji,
            minTrack: p.minTrack,
          })),
        };
      }
      if (segment.type === "stand_sit") {
        return {
          segIndex,
          title: segment.title,
          kind: "Stand Up, Sit Down",
          items: segment.statements.map((s, i) => ({
            key: standSitStatementKey(lesson.key, segIndex, i),
            originalText: s.text,
            emoji: s.emoji,
            minTrack: s.minTrack,
          })),
        };
      }
      if (segment.type === "class_vote") {
        const items: EditableItem[] = [];
        if (track === "all" || track === "explorers") {
          items.push({
            key: classVoteQuestionKey(lesson.key, segIndex),
            originalText: segment.question,
            emoji: "🗳️",
            variantLabel: "AI Explorers (6+) wording",
          });
        }
        if (track === "all" || track === "little_sparks") {
          items.push({
            key: classVoteQuestionSimpleKey(lesson.key, segIndex),
            originalText: segment.questionSimple ?? segment.question,
            emoji: "🗳️",
            variantLabel: "Little Sparks (4-5) wording",
          });
        }
        segment.options.forEach((o, i) => {
          items.push({ key: classVoteOptionKey(lesson.key, segIndex, i), originalText: o.text, emoji: o.emoji });
        });
        return { segIndex, title: segment.title, kind: "Class Vote", items };
      }
      if (segment.type === "story") {
        const items: EditableItem[] = segment.panels.flatMap((p, i) => {
          const panelItems: EditableItem[] = [];
          if (track === "all" || track === "explorers") {
            panelItems.push({
              key: storyPanelKey(lesson.key, segIndex, i),
              originalText: p.text,
              emoji: p.emoji,
              variantLabel: "AI Explorers (6+) wording",
            });
          }
          if (track === "all" || track === "little_sparks") {
            panelItems.push({
              key: storyPanelSimpleKey(lesson.key, segIndex, i),
              originalText: p.textSimple ?? p.text,
              emoji: p.emoji,
              variantLabel: "Little Sparks (4-5) wording",
            });
          }
          return panelItems;
        });
        return { segIndex, title: segment.title, kind: "Story Time", items };
      }
      if (segment.type === "wrapup") {
        const items: EditableItem[] = [];
        if (track === "all" || track === "explorers") {
          items.push({
            key: wrapupSummaryKey(lesson.key, segIndex),
            originalText: segment.summary,
            emoji: "🎁",
            noImage: true,
            variantLabel: "AI Explorers (6+) wording",
          });
        }
        if (track === "all" || track === "little_sparks") {
          items.push({
            key: wrapupSummarySimpleKey(lesson.key, segIndex),
            originalText: segment.summarySimple ?? segment.summary,
            emoji: "🎁",
            noImage: true,
            variantLabel: "Little Sparks (4-5) wording",
          });
        }
        if (segment.homework) {
          items.push({ key: wrapupHomeworkKey(lesson.key, segIndex), originalText: segment.homework, emoji: "📝", noImage: true });
        }
        return { segIndex, title: "Wrap-up", kind: "Wrap-up", items };
      }
      if (segment.type !== "activity") return null;

      const config = segment.config;
      const kind = ENGINE_PRESENTATION[config.engine].label;

      if (config.engine === "train_the_robot") {
        return {
          segIndex,
          title: config.title,
          kind,
          items: [
            ...config.items.map((it, i) => ({
              key: trainRobotItemKey(lesson.key, segIndex, i),
              originalText: it.word,
              emoji: it.emoji,
              minTrack: it.minTrack,
            })),
            { key: trainRobotBucketKey(lesson.key, segIndex, "a"), originalText: `Category: ${config.labelA}`, emoji: config.emojiA },
            { key: trainRobotBucketKey(lesson.key, segIndex, "b"), originalText: `Category: ${config.labelB}`, emoji: config.emojiB },
          ],
        };
      }
      if (config.engine === "sequence_builder") {
        return {
          segIndex,
          title: config.title,
          kind,
          items: config.steps.map((s, i) => ({
            key: sequenceStepKey(lesson.key, segIndex, i),
            originalText: s.text,
            emoji: s.emoji,
            minTrack: s.minTrack,
          })),
        };
      }
      if (config.engine === "memory_match") {
        return {
          segIndex,
          title: config.title,
          kind,
          items: config.pairs.map((p, i) => ({
            key: memoryPairKey(lesson.key, segIndex, i),
            originalText: p.word,
            emoji: p.emoji,
            minTrack: p.minTrack,
          })),
        };
      }
      if (config.engine === "minimal_pairs") {
        return {
          segIndex,
          title: config.title,
          kind,
          items: config.pairs.flatMap((p, i) => [
            { key: minimalPairKey(lesson.key, segIndex, i, "a" as const), originalText: p.wordA.text, emoji: p.wordA.emoji, minTrack: p.minTrack },
            { key: minimalPairKey(lesson.key, segIndex, i, "b" as const), originalText: p.wordB.text, emoji: p.wordB.emoji, minTrack: p.minTrack },
          ]),
        };
      }
      if (config.engine === "ai_or_not") {
        return {
          segIndex,
          title: config.title,
          kind,
          items: config.items.map((it, i) => ({
            key: aiOrNotItemKey(lesson.key, segIndex, i),
            originalText: it.scenario,
            emoji: it.emoji,
            minTrack: it.minTrack,
          })),
        };
      }
      if (config.engine === "instruct_vora") {
        return {
          segIndex,
          title: config.title,
          kind,
          items: [
            { key: instructVoraGoalKey(lesson.key, segIndex), originalText: config.goalLabel, emoji: config.goalEmoji },
            { key: instructVoraVagueKey(lesson.key, segIndex), originalText: config.vagueInstruction, emoji: config.vagueResultEmoji },
            ...config.steps.map((s, i) => ({
              key: instructVoraStepKey(lesson.key, segIndex, i),
              originalText: s.text,
              emoji: s.emoji,
            })),
          ],
        };
      }
      if (config.engine === "pattern_predictor") {
        return {
          segIndex,
          title: config.title,
          kind,
          items: config.rounds.flatMap((round, roundIndex) =>
            patternPredictorGlyphs(round).map((glyph, glyphIndex) => ({
              key: patternGlyphKey(lesson.key, segIndex, roundIndex, glyphIndex),
              originalText: glyph,
              emoji: glyph,
              textEditable: false,
              minTrack: round.minTrack,
            }))
          ),
        };
      }
      // sentence_builder shows plain grammar-role text tiles with no emoji/image slot by design.
      return null;
    })
    .filter((s): s is EditableSection => s !== null && s.items.length > 0)
    .map((section) => ({
      ...section,
      items: track === "all" ? section.items : section.items.filter((item) => !item.minTrack || item.minTrack === track),
    }))
    .filter((section) => section.items.length > 0);

  const chantSegmentIndexes = lesson.segments
    .map((s, i) => (s.type === "chant" ? i : -1))
    .filter((i) => i !== -1);

  const storySegmentIndexes = lesson.segments
    .map((s, i) => (s.type === "story" ? i : -1))
    .filter((i) => i !== -1);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link href="/admin/content" className="text-sm font-semibold text-ink/50">
          ← All lessons
        </Link>
        <h1 className="font-display text-2xl font-bold text-indigo-dark">{lesson.title}</h1>
        <p className="text-sm text-ink/60">
          Upload a real photo next to any word, action, or activity item below, or edit its label. Changes apply
          immediately to every class running this lesson.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(["all", "little_sparks", "explorers"] as const).map((t) => (
          <Link
            key={t}
            href={t === "all" ? `/admin/content/${lesson.key}` : `/admin/content/${lesson.key}?track=${t}`}
            className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide ${
              track === t ? "bg-indigo text-white" : "bg-white text-ink/50 hover:text-ink"
            }`}
          >
            {TRACK_LABEL[t]}
          </Link>
        ))}
      </div>

      {chantSegmentIndexes.map((segIndex) => (
        <SongOverrideEditor
          key={segIndex}
          contentKey={chantSongKey(lesson.key, segIndex)}
          initialAudioUrl={overrides[chantSongKey(lesson.key, segIndex)]?.audioUrl ?? null}
        />
      ))}

      {storySegmentIndexes.map((segIndex) => (
        <SongOverrideEditor
          key={segIndex}
          contentKey={storyAudioKey(lesson.key, segIndex)}
          initialAudioUrl={overrides[storyAudioKey(lesson.key, segIndex)]?.audioUrl ?? null}
          label="Story narration (optional)"
          uploadLabel="narration"
        />
      ))}

      {editableSections.length === 0 && (
        <Card>
          <p className="text-sm text-ink/50">
            {track === "all" ? "This lesson has no items to attach images to." : `Nothing in this lesson is restricted to ${TRACK_LABEL[track]}.`}
          </p>
        </Card>
      )}

      {editableSections.map((section) => (
        <Card key={section.segIndex} className="flex flex-col gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-indigo-dark">{section.kind}</p>
            <p className="font-display font-bold text-ink">{section.title}</p>
          </div>
          <div className="flex flex-col gap-2">
            {section.items.map((item) => {
              const override = overrides[item.key];
              const trackBadge = item.minTrack ? (
                <span className="mb-1 w-fit rounded-full bg-amber/15 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-dark">
                  {TRACK_LABEL[item.minTrack]} only
                </span>
              ) : item.variantLabel ? (
                <span className="mb-1 w-fit rounded-full bg-indigo/10 px-2 py-0.5 text-[10px] font-bold uppercase text-indigo-dark">
                  {item.variantLabel}
                </span>
              ) : null;
              return item.noImage ? (
                <div key={item.key} className="flex flex-col gap-1">
                  {trackBadge}
                  <TextOverrideEditor
                    contentKey={item.key}
                    label={item.emoji}
                    originalText={item.originalText}
                    initialTextOverride={override?.textOverride ?? null}
                    multiline={item.originalText.length > 60}
                  />
                </div>
              ) : (
                <div key={item.key} className="flex flex-col gap-1">
                  {trackBadge}
                  <OverrideItemEditor
                    contentKey={item.key}
                    originalText={item.originalText}
                    emoji={item.emoji}
                    initialTextOverride={override?.textOverride ?? null}
                    initialImageUrl={override?.imageUrl ?? null}
                    textEditable={item.textEditable ?? true}
                  />
                </div>
              );
            })}
          </div>
        </Card>
      ))}
    </div>
  );
}
