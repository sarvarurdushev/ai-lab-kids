import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { SignOutButton } from "@/components/console/SignOutButton";

export function AlreadySignedIn({ name, email }: { name: string; email: string }) {
  return (
    <Card className="flex w-full max-w-sm flex-col items-center gap-3 text-center">
      <h1 className="font-display text-xl font-bold text-indigo-dark">You&apos;re already signed in</h1>
      <p className="text-sm text-ink/60">
        Signed in as <span className="font-semibold text-ink">{name}</span> ({email}). Sign out first if you want to
        log in or sign up with a different account.
      </p>
      <div className="flex w-full flex-col items-center gap-2">
        <Link
          href="/dashboard"
          className="font-display w-full rounded-2xl bg-indigo px-6 py-3 text-center text-lg font-semibold text-white shadow-md shadow-indigo/30 transition-all hover:bg-indigo-dark active:scale-95"
        >
          Go to dashboard
        </Link>
        <SignOutButton />
      </div>
    </Card>
  );
}
