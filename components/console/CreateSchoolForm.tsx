"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function CreateSchoolForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/schools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Could not create school.");
        return;
      }
      setName("");
      router.refresh();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="flex flex-col gap-3">
      <p className="text-sm font-semibold text-ink/70">
        Set up your first school so you can create classes.
      </p>
      <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Bright Future Academy"
          className="flex-1 rounded-xl border-2 border-ink/10 bg-white px-3 py-2 text-sm focus:border-indigo focus:outline-none"
        />
        <Button type="submit" variant="secondary" disabled={submitting || !name.trim()}>
          {submitting ? "Creating..." : "Create School"}
        </Button>
      </form>
      {error && <p className="text-sm font-semibold text-coral">{error}</p>}
    </Card>
  );
}
