import { redirect } from "next/navigation";
import Link from "next/link";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";
import { pendingTeachersForOrg } from "@/lib/console/queries";
import { Card } from "@/components/ui/Card";
import { GamepadIcon, ChatIcon } from "@/components/icons";

export default async function AdminHomePage() {
  const admin = await requireOrgAdmin();
  if (!admin) redirect("/dashboard");

  const pending = await pendingTeachersForOrg(admin.organizationId);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-indigo-dark">Admin</h1>
        <p className="text-sm text-ink/60">Manage teacher access and edit curriculum content.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link href="/admin/teachers">
          <Card className="flex items-center gap-4 transition-transform hover:scale-[1.01]">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coral/15 text-coral">
              <ChatIcon size={24} />
            </span>
            <div>
              <p className="font-display font-bold text-ink">Pending Teacher Sign-ups</p>
              <p className="text-sm text-ink/60">
                {pending.length === 0 ? "Nothing waiting right now" : `${pending.length} waiting for approval`}
              </p>
            </div>
          </Card>
        </Link>

        <Link href="/admin/content">
          <Card className="flex items-center gap-4 transition-transform hover:scale-[1.01]">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo/15 text-indigo-dark">
              <GamepadIcon size={24} />
            </span>
            <div>
              <p className="font-display font-bold text-ink">Edit Curriculum Content</p>
              <p className="text-sm text-ink/60">Attach photos or replace labels on any lesson&apos;s words and actions</p>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}
