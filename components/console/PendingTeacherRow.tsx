"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export function PendingTeacherRow({ id, name, email }: { id: string; name: string; email: string }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState<"approve" | "reject" | null>(null);

  async function act(action: "approve" | "reject") {
    if (action === "reject" && !confirm(`Reject ${name}'s sign-up? This deletes their account.`)) return;
    setSubmitting(action);
    try {
      await fetch(`/api/admin/teachers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      router.refresh();
    } finally {
      setSubmitting(null);
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-cream px-4 py-3">
      <div>
        <p className="font-semibold text-ink">{name}</p>
        <p className="text-xs text-ink/50">{email}</p>
      </div>
      <div className="flex shrink-0 gap-2">
        <Button
          variant="ghost"
          className="!px-3 !py-1.5 !text-sm text-coral"
          disabled={submitting !== null}
          onClick={() => act("reject")}
        >
          {submitting === "reject" ? "..." : "Reject"}
        </Button>
        <Button
          variant="secondary"
          className="!px-3 !py-1.5 !text-sm"
          disabled={submitting !== null}
          onClick={() => act("approve")}
        >
          {submitting === "approve" ? "..." : "Approve as teacher"}
        </Button>
      </div>
    </div>
  );
}
