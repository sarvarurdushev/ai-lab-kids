"use client";

import { Panel } from "@/components/editorial/Panel";
import { CloudShape } from "@/components/editorial/decor/CloudShape";
import { Vora } from "@/components/mascot/Vora";
import { EditorialSignOutButton } from "@/components/editorial/EditorialSignOutButton";
import { useDictionary } from "@/components/i18n/LocaleProvider";
import { interpolate } from "@/lib/i18n/format";

/** Split from app/(auth)/pending-approval/page.tsx (an async Server Component doing the requireTeacher()/redirect() data fetch) purely so this piece can call useDictionary(). */
export function PendingApprovalContent({ firstName }: { firstName: string }) {
  const dict = useDictionary();
  const t = dict.auth.pendingApproval;
  return (
    <Panel
      variant="bare"
      className="flex w-full max-w-sm flex-col items-center gap-3 text-center"
    >
      <div className="relative flex items-center justify-center">
        <CloudShape
          accent="sky"
          size={100}
          opacity={0.5}
          className="pointer-events-none absolute"
        />
        <Vora size={80} mood="thinking" />
      </div>
      <h1 className="font-editorial text-xl font-bold text-navy">
        {interpolate(t.title, { name: firstName })}
      </h1>
      <p className="text-sm text-slate">{t.body}</p>
      <EditorialSignOutButton />
    </Panel>
  );
}
