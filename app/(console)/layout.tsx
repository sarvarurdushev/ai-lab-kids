import { redirect } from "next/navigation";
import Link from "next/link";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { getOrganization } from "@/lib/console/queries";
import { SignOutButton } from "@/components/console/SignOutButton";

export default async function ConsoleLayout({ children }: { children: React.ReactNode }) {
  const teacher = await requireTeacher();
  if (!teacher) redirect("/login");
  const org = await getOrganization(teacher.organizationId);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-gradient-to-b from-indigo/10 via-cream to-cream">
      <header className="flex items-center justify-between border-b border-ink/10 bg-white/70 px-4 py-3">
        <Link href="/dashboard" className="font-display font-bold text-indigo-dark">
          AI Lab <span className="text-ink/40">Console</span>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-ink/60">
            {teacher.name} · {org?.name}
            {teacher.role === "org_admin" && (
              <span className="ml-1 rounded-full bg-indigo/10 px-2 py-0.5 text-[10px] font-bold uppercase text-indigo-dark">
                Org Admin
              </span>
            )}
          </span>
          <SignOutButton />
        </div>
      </header>
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6">{children}</main>
    </div>
  );
}
