import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";
import { getLesson } from "@/lib/curriculum";
import { allContentOverrides } from "@/lib/content/overrides";
import { vocabOverrideKey, movementOverrideKey } from "@/lib/content/overrideKey";
import { Card } from "@/components/ui/Card";
import { OverrideItemEditor } from "@/components/console/OverrideItemEditor";

export default async function AdminLessonContentPage({ params }: { params: Promise<{ lessonKey: string }> }) {
  const admin = await requireOrgAdmin();
  if (!admin) redirect("/dashboard");

  const { lessonKey } = await params;
  const lesson = getLesson(lessonKey);
  if (!lesson) notFound();

  const overrides = await allContentOverrides();

  const editableSections = lesson.segments
    .map((segment, segIndex) => {
      if (segment.type === "vocab") {
        return {
          segIndex,
          title: segment.title,
          kind: "Vocabulary" as const,
          items: segment.words.map((w, itemIndex) => ({
            key: vocabOverrideKey(lesson.key, segIndex, itemIndex),
            originalText: w.word,
            emoji: w.emoji,
          })),
        };
      }
      if (segment.type === "movement") {
        return {
          segIndex,
          title: segment.title,
          kind: "Movement Break" as const,
          items: segment.moves.map((m, itemIndex) => ({
            key: movementOverrideKey(lesson.key, segIndex, itemIndex),
            originalText: m.text,
            emoji: m.emoji,
          })),
        };
      }
      return null;
    })
    .filter((s): s is NonNullable<typeof s> => s !== null);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link href="/admin/content" className="text-sm font-semibold text-ink/50">
          ← All lessons
        </Link>
        <h1 className="font-display text-2xl font-bold text-indigo-dark">{lesson.title}</h1>
        <p className="text-sm text-ink/60">
          Upload a real photo next to any word or action below, or edit its label. Changes apply immediately to every
          class running this lesson.
        </p>
      </div>

      {editableSections.length === 0 && (
        <Card>
          <p className="text-sm text-ink/50">
            This lesson has no vocabulary or Movement Break items to attach images to.
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
              return (
                <OverrideItemEditor
                  key={item.key}
                  contentKey={item.key}
                  originalText={item.originalText}
                  emoji={item.emoji}
                  initialTextOverride={override?.textOverride ?? null}
                  initialImageUrl={override?.imageUrl ?? null}
                />
              );
            })}
          </div>
        </Card>
      ))}
    </div>
  );
}
