"use client";

import { useState } from "react";

interface RosterStudent {
  id: string;
  koreanName: string;
  englishName: string | null;
  avatarEmoji: string;
}

const MARKS: { key: "needs_practice" | "got_it" | "excelling"; label: string; emoji: string; className: string }[] = [
  { key: "needs_practice", label: "Needs practice", emoji: "🤔", className: "bg-coral/15 text-coral" },
  { key: "got_it", label: "Got it", emoji: "👍", className: "bg-mint/15 text-mint" },
  { key: "excelling", label: "Excelling", emoji: "⭐", className: "bg-amber/15 text-amber-dark" },
];

export function MarkPanel({
  sessionId,
  activityKey,
  roster,
}: {
  sessionId: string;
  activityKey: string;
  roster: RosterStudent[];
}) {
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [lastMarked, setLastMarked] = useState<string | null>(null);

  async function mark(markKey: "needs_practice" | "got_it" | "excelling") {
    await fetch(`/api/lesson-sessions/${sessionId}/marks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activityKey, mark: markKey, studentId: selectedStudentId }),
    }).catch(() => undefined);
    const who = selectedStudentId
      ? (roster.find((s) => s.id === selectedStudentId)?.englishName ??
        roster.find((s) => s.id === selectedStudentId)?.koreanName)
      : "Whole class";
    setLastMarked(`${who}: ${MARKS.find((m) => m.key === markKey)?.label}`);
    setSelectedStudentId(null);
  }

  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-white/70 p-3">
      <p className="text-xs font-bold tracking-wide text-ink/50 uppercase">Mark participation</p>

      {roster.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedStudentId(null)}
            className={`rounded-full px-2.5 py-1 text-xs font-bold ${
              selectedStudentId === null ? "bg-indigo text-white" : "bg-white text-ink/60"
            }`}
          >
            Whole class
          </button>
          {roster.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedStudentId(s.id)}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
                selectedStudentId === s.id ? "bg-indigo text-white" : "bg-white text-ink/60"
              }`}
            >
              <span>{s.avatarEmoji}</span>
              {s.englishName || s.koreanName}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-3 gap-2">
        {MARKS.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => mark(m.key)}
            className={`flex flex-col items-center gap-0.5 rounded-xl py-2 text-xs font-bold ${m.className}`}
          >
            <span className="text-lg">{m.emoji}</span>
            {m.label}
          </button>
        ))}
      </div>

      {lastMarked && <p className="text-center text-[11px] text-ink/40">Marked: {lastMarked}</p>}
    </div>
  );
}
