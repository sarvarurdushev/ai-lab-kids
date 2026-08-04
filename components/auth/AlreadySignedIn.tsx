"use client";

import { Panel } from "@/components/editorial/Panel";
import { EditorialLinkButton } from "@/components/editorial/EditorialButton";
import { EditorialSignOutButton } from "@/components/editorial/EditorialSignOutButton";
import { useDictionary } from "@/components/i18n/LocaleProvider";

export function AlreadySignedIn({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const dict = useDictionary();
  const t = dict.auth.alreadySignedIn;
  return (
    <Panel
      variant="bare"
      className="flex w-full max-w-sm flex-col items-center gap-3 text-center"
    >
      <h1 className="font-editorial text-xl font-bold text-navy">{t.title}</h1>
      <p className="text-sm text-slate">
        {t.bodyBefore}
        <span className="font-semibold text-navy">{name}</span>
        {t.bodyMiddle}
        {email}
        {t.bodyAfter}
      </p>
      <div className="flex w-full flex-col items-center gap-3">
        <EditorialLinkButton href="/dashboard" className="w-full">
          {t.goToDashboard}
        </EditorialLinkButton>
        <EditorialSignOutButton />
      </div>
    </Panel>
  );
}
