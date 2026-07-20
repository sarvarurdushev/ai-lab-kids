"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface School {
  id: string;
  name: string;
}

export function CreateClassForm({ schools }: { schools: School[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [gradeLabel, setGradeLabel] = useState("");
  const [schoolId, setSchoolId] = useState(schools[0]?.id ?? "");
  const [koreanSupportLevel, setKoreanSupportLevel] = useState<"full" | "light" | "minimal">("full");
  const [ageTrack, setAgeTrack] = useState<"little_sparks" | "explorers">("explorers");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!open) {
    return (
      <Button variant="ghost" onClick={() => setOpen(true)} className="w-full">
        + New Class
      </Button>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ schoolId, name, gradeLabel, koreanSupportLevel, ageTrack }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Could not create class.");
        return;
      }
      const created = await res.json();
      router.push(`/classes/${created.id}`);
      router.refresh();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="flex flex-col gap-3">
      <form onSubmit={submit} className="flex flex-col gap-3">
        <label className="flex flex-col gap-1 text-sm font-semibold text-ink/70">
          Class name
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Vora 3-A"
            className="rounded-xl border-2 border-ink/10 bg-white px-3 py-2 text-sm focus:border-indigo focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-ink/70">
          Grade / level
          <input
            required
            value={gradeLabel}
            onChange={(e) => setGradeLabel(e.target.value)}
            placeholder="e.g. Grade 3"
            className="rounded-xl border-2 border-ink/10 bg-white px-3 py-2 text-sm focus:border-indigo focus:outline-none"
          />
        </label>
        {schools.length > 1 && (
          <label className="flex flex-col gap-1 text-sm font-semibold text-ink/70">
            School
            <select
              value={schoolId}
              onChange={(e) => setSchoolId(e.target.value)}
              className="rounded-xl border-2 border-ink/10 bg-white px-3 py-2 text-sm focus:border-indigo focus:outline-none"
            >
              {schools.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
        )}
        <label className="flex flex-col gap-1 text-sm font-semibold text-ink/70">
          Age track
          <select
            value={ageTrack}
            onChange={(e) => setAgeTrack(e.target.value as "little_sparks" | "explorers")}
            className="rounded-xl border-2 border-ink/10 bg-white px-3 py-2 text-sm focus:border-indigo focus:outline-none"
          >
            <option value="little_sparks">Little Sparks — ages 4-5</option>
            <option value="explorers">AI Explorers — ages 6+</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-ink/70">
          Korean support level
          <select
            value={koreanSupportLevel}
            onChange={(e) => setKoreanSupportLevel(e.target.value as "full" | "light" | "minimal")}
            className="rounded-xl border-2 border-ink/10 bg-white px-3 py-2 text-sm focus:border-indigo focus:outline-none"
          >
            <option value="full">Full — every line bilingual</option>
            <option value="light">Light — key vocab/instructions only</option>
            <option value="minimal">Minimal — English immersion</option>
          </select>
        </label>
        {error && <p className="text-sm font-semibold text-coral">{error}</p>}
        <div className="flex gap-2">
          <Button type="submit" variant="secondary" disabled={submitting || !schoolId}>
            {submitting ? "Creating..." : "Create Class"}
          </Button>
          <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}
