import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { classForTeacher } from "@/lib/console/authz";
import { soundMasteryForClass } from "@/lib/console/soundMastery";
import { Card } from "@/components/ui/Card";
import { Vora } from "@/components/mascot/Vora";
import { SpeakerIcon } from "@/components/icons";

export default async function ClassSoundsPage({ params }: { params: Promise<{ classId: string }> }) {
  const teacher = await requireTeacher();
  if (!teacher) redirect("/login");

  const { classId } = await params;
  const klass = await classForTeacher(teacher, classId);
  if (!klass) notFound();

  const result = await soundMasteryForClass(classId);

  if (result.status === "needs_migration") {
    return (
      <div className="flex flex-col gap-5">
        <div>
          <Link href={`/classes/${classId}`} className="text-sm font-semibold text-ink/50">
            ← {klass.name}
          </Link>
          <h1 className="font-display text-2xl font-bold text-indigo-dark">Sound Check</h1>
        </div>
        <Card className="flex flex-col gap-3 border-l-4 border-amber">
          <p className="font-display font-bold text-ink">One setup step left</p>
          <p className="max-w-2xl text-sm text-ink/70">
            Sound Check stores its data in a new database table that isn&apos;t in your database yet. Run this once in
            the project folder, then reload this page:
          </p>
          <pre className="overflow-x-auto rounded-xl bg-ink px-4 py-3 text-sm text-cream">npm run db:migrate</pre>
          <p className="max-w-2xl text-xs text-ink/50">
            Until then, lessons still run normally — the Sound Drill just won&apos;t record which sounds needed a hint.
          </p>
        </Card>
      </div>
    );
  }

  const rows = result.rows;
  // Two clean practice rounds with no hint is a reasonable bar for "they've got it";
  // anything the class still reached for a hint on is worth another look.
  const solid = rows.filter((r) => r.timesShown >= 2 && r.timesNeededHint === 0);
  const shaky = rows.filter((r) => r.timesNeededHint > 0);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Link href={`/classes/${classId}`} className="text-sm font-semibold text-ink/50">
          ← {klass.name}
        </Link>
        <h1 className="font-display text-2xl font-bold text-indigo-dark">Sound Check</h1>
        <p className="max-w-2xl text-sm text-ink/60">
          Every time this class runs a Sound Drill, we note whether they needed the picture hint to remember a sound.
          Sounds they reached for a hint on are the ones worth reteaching before moving on.
        </p>
      </div>

      {rows.length === 0 ? (
        <Card className="flex items-center gap-4">
          <Vora size={56} mood="neutral" />
          <div>
            <p className="font-display font-bold text-ink">No sound drills yet</p>
            <p className="text-sm text-ink/60">
              Run any phonics lesson with this class — the Sound Drill is the first activity in every week — and this
              page will fill in.
            </p>
          </div>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Card className="!p-3 text-center">
              <p className="font-display text-2xl font-bold text-indigo-dark">{rows.length}</p>
              <p className="text-xs text-ink/50">Sounds practiced</p>
            </Card>
            <Card className="!p-3 text-center">
              <p className="font-display text-2xl font-bold text-mint">{solid.length}</p>
              <p className="text-xs text-ink/50">No hint needed</p>
            </Card>
            <Card className="!p-3 text-center">
              <p className="font-display text-2xl font-bold text-coral">{shaky.length}</p>
              <p className="text-xs text-ink/50">Needed a hint</p>
            </Card>
          </div>

          {shaky.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-coral">Worth reteaching</p>
              {shaky.map((r) => (
                <Card key={r.grapheme} className="flex items-center justify-between gap-3 !py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-coral/10 font-display text-2xl font-bold text-coral-dark">
                      {r.grapheme}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">
                        Needed a hint {r.timesNeededHint} of {r.timesShown} time{r.timesShown === 1 ? "" : "s"}
                      </p>
                      {r.taughtInWeek && (
                        <p className="text-xs text-ink/50">First taught in Phonics week {r.taughtInWeek}</p>
                      )}
                    </div>
                  </div>
                  {r.taughtInLessonKey && (
                    <Link
                      href={`/classes/${classId}/lesson/${r.taughtInLessonKey}`}
                      className="shrink-0 rounded-full bg-indigo px-3 py-1.5 text-xs font-bold text-white transition-transform hover:scale-105"
                    >
                      Reteach →
                    </Link>
                  )}
                </Card>
              ))}
            </div>
          )}

          {solid.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-mint">Solid</p>
              <Card className="flex flex-wrap gap-2">
                {solid.map((r) => (
                  <span
                    key={r.grapheme}
                    title={`${r.timesShown} clean rounds`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint/10 font-display text-xl font-bold text-mint-dark"
                  >
                    {r.grapheme}
                  </span>
                ))}
              </Card>
            </div>
          )}

          <p className="flex items-start gap-2 rounded-xl bg-cream p-3 text-xs text-ink/50">
            <SpeakerIcon size={14} className="mt-0.5 shrink-0" />
            <span>
              This tracks the class as a whole, not individual children — lessons run on one shared screen, so there&apos;s
              no per-child answer to measure. Treat it as a prompt to look closer, not a score.
            </span>
          </p>
        </>
      )}
    </div>
  );
}
