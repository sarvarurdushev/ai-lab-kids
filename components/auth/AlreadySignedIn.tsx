import { Panel } from "@/components/editorial/Panel";
import { EditorialLinkButton } from "@/components/editorial/EditorialButton";
import { EditorialSignOutButton } from "@/components/editorial/EditorialSignOutButton";

export function AlreadySignedIn({ name, email }: { name: string; email: string }) {
  return (
    <Panel variant="bare" className="flex w-full max-w-sm flex-col items-center gap-3 text-center">
      <h1 className="font-editorial text-xl font-bold text-navy">You&apos;re already signed in</h1>
      <p className="text-sm text-slate">
        Signed in as <span className="font-semibold text-navy">{name}</span> ({email}). Sign out first if you want to
        log in or sign up with a different account.
      </p>
      <div className="flex w-full flex-col items-center gap-3">
        <EditorialLinkButton href="/dashboard" className="w-full">
          Go to dashboard
        </EditorialLinkButton>
        <EditorialSignOutButton />
      </div>
    </Panel>
  );
}
