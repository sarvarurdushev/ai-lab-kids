import { redirect } from "next/navigation";
import Link from "next/link";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";
import { AUTHORED_LESSONS, getUnit, getMonth } from "@/lib/curriculum";
import { PHONICS_LESSONS } from "@/lib/phonics";
import { Card } from "@/components/ui/Card";

function unitTitle(unitKey: string): string {
  return getUnit(unitKey)?.title ?? getMonth(unitKey)?.title ?? unitKey;
}

export default async function AdminContentIndexPage() {
  const admin = await requireOrgAdmin();
  if (!admin) redirect("/dashboard");

  const groups = new Map<string, typeof AUTHORED_LESSONS>();
  for (const lesson of AUTHORED_LESSONS) {
    const list = groups.get(lesson.unitKey) ?? [];
    list.push(lesson);
    groups.set(lesson.unitKey, list);
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link href="/admin" className="text-sm font-semibold text-ink/50 hover:text-ink">
          ← Admin
        </Link>
        <h1 className="font-display text-2xl font-bold text-indigo-dark">Edit Curriculum Content</h1>
        <p className="text-sm text-ink/60">
          Pick a lesson to attach real photos or replace labels for any of its words, actions, or activity items.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card className="flex flex-col gap-2 border-l-4 border-indigo">
          <p className="font-display font-bold text-ink">
            Phonics <span className="font-normal text-ink/40">— new program, reference week</span>
          </p>
          <div className="flex flex-col gap-1">
            {PHONICS_LESSONS.map((lesson) => (
              <Link
                key={lesson.key}
                href={`/admin/content/${lesson.key}`}
                className="rounded-lg px-2 py-1.5 text-sm font-semibold text-ink/70 hover:bg-indigo/5 hover:text-indigo-dark"
              >
                {lesson.title}
              </Link>
            ))}
          </div>
        </Card>
        {[...groups.entries()].map(([unitKey, lessons]) => (
          <Card key={unitKey} className="flex flex-col gap-2">
            <p className="font-display font-bold text-ink">{unitTitle(unitKey)}</p>
            <div className="flex flex-col gap-1">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.key}
                  href={`/admin/content/${lesson.key}`}
                  className="rounded-lg px-2 py-1.5 text-sm font-semibold text-ink/70 hover:bg-indigo/5 hover:text-indigo-dark"
                >
                  {lesson.title}
                </Link>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
