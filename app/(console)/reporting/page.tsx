import { redirect } from "next/navigation";
import Link from "next/link";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";
import { orgReportingSummary } from "@/lib/console/reporting";
import { Card } from "@/components/ui/Card";

export default async function ReportingPage() {
  const teacher = await requireOrgAdmin();
  if (!teacher) redirect("/dashboard");

  const rows = await orgReportingSummary(teacher.organizationId);
  const totals = rows.reduce(
    (acc, r) => ({
      students: acc.students + r.studentCount,
      completed: acc.completed + r.lessonsCompleted,
      gotIt: acc.gotIt + r.marksGotIt,
      needsPractice: acc.needsPractice + r.marksNeedsPractice,
      excelling: acc.excelling + r.marksExcelling,
    }),
    { students: 0, completed: 0, gotIt: 0, needsPractice: 0, excelling: 0 }
  );
  const totalMarks = totals.gotIt + totals.needsPractice + totals.excelling;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Link href="/dashboard" className="text-sm font-semibold text-ink/50">
          ← Dashboard
        </Link>
        <h1 className="font-display text-2xl font-bold text-indigo-dark">Organization Reporting</h1>
        <p className="text-sm text-ink/60">Rolled up across every class and school in your organization.</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card className="!p-3 text-center">
          <p className="font-display text-2xl font-bold text-indigo-dark">{rows.length}</p>
          <p className="text-xs text-ink/50">Classes</p>
        </Card>
        <Card className="!p-3 text-center">
          <p className="font-display text-2xl font-bold text-indigo-dark">{totals.students}</p>
          <p className="text-xs text-ink/50">Students</p>
        </Card>
        <Card className="!p-3 text-center">
          <p className="font-display text-2xl font-bold text-indigo-dark">{totals.completed}</p>
          <p className="text-xs text-ink/50">Lessons completed</p>
        </Card>
      </div>

      {totalMarks > 0 && (
        <Card className="flex flex-col gap-2">
          <p className="text-xs font-bold tracking-wide text-ink/50 uppercase">Participation marks, all classes</p>
          <div className="flex h-4 overflow-hidden rounded-full bg-ink/5">
            <div className="bg-mint" style={{ width: `${(totals.gotIt / totalMarks) * 100}%` }} />
            <div className="bg-amber" style={{ width: `${(totals.excelling / totalMarks) * 100}%` }} />
            <div className="bg-coral" style={{ width: `${(totals.needsPractice / totalMarks) * 100}%` }} />
          </div>
          <div className="flex justify-between text-xs text-ink/50">
            <span>👍 Got it: {totals.gotIt}</span>
            <span>⭐ Excelling: {totals.excelling}</span>
            <span>🤔 Needs practice: {totals.needsPractice}</span>
          </div>
        </Card>
      )}

      <div className="flex flex-col gap-3">
        <p className="text-xs font-bold tracking-wide text-ink/50 uppercase">By class</p>
        {rows.map((r) => {
          const rowMarks = r.marksGotIt + r.marksNeedsPractice + r.marksExcelling;
          return (
            <Card key={r.classId} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-ink">{r.className}</p>
                  <p className="text-xs text-ink/50">
                    {r.schoolName} · {r.teacherName} · {r.studentCount} students
                  </p>
                </div>
                <Link
                  href={`/classes/${r.classId}`}
                  className="shrink-0 text-xs font-bold text-indigo underline-offset-2 hover:underline"
                >
                  Open →
                </Link>
              </div>
              <div className="flex gap-4 text-xs text-ink/60">
                <span>✅ {r.lessonsCompleted} completed</span>
                <span>▶️ {r.lessonsInProgress} in progress</span>
              </div>
              {rowMarks > 0 && (
                <div className="flex h-2 overflow-hidden rounded-full bg-ink/5">
                  <div className="bg-mint" style={{ width: `${(r.marksGotIt / rowMarks) * 100}%` }} />
                  <div className="bg-amber" style={{ width: `${(r.marksExcelling / rowMarks) * 100}%` }} />
                  <div className="bg-coral" style={{ width: `${(r.marksNeedsPractice / rowMarks) * 100}%` }} />
                </div>
              )}
            </Card>
          );
        })}
        {rows.length === 0 && <p className="text-sm text-ink/50">No classes yet.</p>}
      </div>
    </div>
  );
}
