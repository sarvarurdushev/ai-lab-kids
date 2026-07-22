import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";
import { getLesson, ENGINE_PRESENTATION } from "@/lib/curriculum";
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
} from "@/lib/content/overrideKey";
import { Card } from "@/components/ui/Card";
import { OverrideItemEditor } from "@/components/console/OverrideItemEditor";

interface EditableItem {
  key: string;
  originalText: string;
  emoji: string;
  textEditable?: boolean;
}

interface EditableSection {
  segIndex: number;
  title: string;
  kind: string;
  items: EditableItem[];
}

export default async function AdminLessonContentPage({ params }: { params: Promise<{ lessonKey: string }> }) {
  const admin = await requireOrgAdmin();
  if (!admin) redirect("/dashboard");

  const { lessonKey } = await params;
  const lesson = getLesson(lessonKey);
  if (!lesson) notFound();

  const overrides = await allContentOverrides();

  const editableSections: EditableSection[] = lesson.segments
    .map((segment, segIndex): EditableSection | null => {
      if (segment.type === "vocab") {
        return {
          segIndex,
          title: segment.title,
          kind: "Vocabulary",
          items: segment.words.map((w, i) => ({
            key: vocabOverrideKey(lesson.key, segIndex, i),
            originalText: w.word,
            emoji: w.emoji,
          })),
        };
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
          })),
        };
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
          })),
        };
      }
      if (config.engine === "minimal_pairs") {
        return {
          segIndex,
          title: config.title,
          kind,
          items: config.pairs.flatMap((p, i) => [
            { key: minimalPairKey(lesson.key, segIndex, i, "a" as const), originalText: p.wordA.text, emoji: p.wordA.emoji },
            { key: minimalPairKey(lesson.key, segIndex, i, "b" as const), originalText: p.wordB.text, emoji: p.wordB.emoji },
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
            }))
          ),
        };
      }
      // sentence_builder shows plain grammar-role text tiles with no emoji/image slot by design.
      return null;
    })
    .filter((s): s is EditableSection => s !== null && s.items.length > 0);

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

      {editableSections.length === 0 && (
        <Card>
          <p className="text-sm text-ink/50">This lesson has no items to attach images to.</p>
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
              return (
                <OverrideItemEditor
                  key={item.key}
                  contentKey={item.key}
                  originalText={item.originalText}
                  emoji={item.emoji}
                  initialTextOverride={override?.textOverride ?? null}
                  initialImageUrl={override?.imageUrl ?? null}
                  textEditable={item.textEditable ?? true}
                />
              );
            })}
          </div>
        </Card>
      ))}
    </div>
  );
}
