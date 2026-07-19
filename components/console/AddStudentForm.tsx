"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

const AVATAR_CHOICES = ["🧒", "👦", "👧", "🐱", "🐶", "🐰", "🦊", "🐻"];

export function AddStudentForm({ classId }: { classId: string }) {
  const router = useRouter();
  const [koreanName, setKoreanName] = useState("");
  const [englishName, setEnglishName] = useState("");
  const [avatarEmoji, setAvatarEmoji] = useState(AVATAR_CHOICES[0]);
  const [submitting, setSubmitting] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`/api/classes/${classId}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ koreanName, englishName: englishName || undefined, avatarEmoji }),
      });
      if (res.ok) {
        setKoreanName("");
        setEnglishName("");
        router.refresh();
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-wrap items-end gap-2">
      <div className="flex gap-1">
        {AVATAR_CHOICES.map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => setAvatarEmoji(e)}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-lg ${
              avatarEmoji === e ? "bg-indigo/20 ring-2 ring-indigo" : "bg-white"
            }`}
          >
            {e}
          </button>
        ))}
      </div>
      <input
        required
        value={koreanName}
        onChange={(e) => setKoreanName(e.target.value)}
        placeholder="Korean name (e.g. 지민)"
        className="min-w-0 flex-1 rounded-xl border-2 border-ink/10 bg-white px-3 py-2 text-sm focus:border-indigo focus:outline-none"
      />
      <input
        value={englishName}
        onChange={(e) => setEnglishName(e.target.value)}
        placeholder="English name (optional)"
        className="min-w-0 flex-1 rounded-xl border-2 border-ink/10 bg-white px-3 py-2 text-sm focus:border-indigo focus:outline-none"
      />
      <Button type="submit" variant="secondary" disabled={submitting} className="!px-4 !py-2 !text-sm">
        Add
      </Button>
    </form>
  );
}
