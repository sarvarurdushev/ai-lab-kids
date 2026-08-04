"use client";

import { useRouter } from "next/navigation";
import { useDictionary } from "@/components/i18n/LocaleProvider";

/**
 * Editorial-styled duplicate of components/console/SignOutButton.tsx — that
 * file is out of scope (console-only), and the logic is 8 lines and stable,
 * so duplicating it here is correct rather than importing across the
 * public/console boundary.
 */
export function EditorialSignOutButton({
  className = "",
}: {
  className?: string;
}) {
  const router = useRouter();
  const dict = useDictionary();
  return (
    <button
      type="button"
      onClick={async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/login");
        router.refresh();
      }}
      className={`text-sm font-semibold text-slate transition-colors hover:text-coral-ink ${className}`}
    >
      {dict.common.signOut}
    </button>
  );
}
