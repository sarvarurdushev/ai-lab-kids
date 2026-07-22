"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

/** Plain paragraph/sentence override — no emoji, no image slot (wrap-up text, chant lines). */
export function TextOverrideEditor({
  contentKey,
  label,
  originalText,
  initialTextOverride,
  multiline = false,
}: {
  contentKey: string;
  label: string;
  originalText: string;
  initialTextOverride: string | null;
  multiline?: boolean;
}) {
  const [text, setText] = useState(initialTextOverride ?? "");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function save() {
    setStatus("saving");
    try {
      const res = await fetch("/api/admin/content-overrides", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentKey, textOverride: text.trim() || null }),
      });
      setStatus(res.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  }

  async function clearOverride() {
    setStatus("saving");
    try {
      await fetch(`/api/admin/content-overrides?key=${encodeURIComponent(contentKey)}`, { method: "DELETE" });
      setText("");
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col gap-1.5 rounded-xl bg-cream p-3">
      <p className="text-xs font-bold uppercase tracking-wide text-ink/50">{label}</p>
      {multiline ? (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={originalText}
          rows={3}
          className="w-full rounded-lg border-2 border-ink/10 bg-white px-2 py-1.5 text-sm focus:border-indigo focus:outline-none"
        />
      ) : (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={originalText}
          className="w-full rounded-lg border-2 border-ink/10 bg-white px-2 py-1.5 text-sm focus:border-indigo focus:outline-none"
        />
      )}
      <div className="flex items-center justify-end gap-1.5">
        {status === "saved" && <span className="text-xs font-semibold text-mint">Saved</span>}
        {status === "error" && <span className="text-xs font-semibold text-coral">Error</span>}
        <Button variant="ghost" className="!px-2 !py-1 !text-xs" onClick={clearOverride} disabled={status === "saving"}>
          Reset
        </Button>
        <Button variant="secondary" className="!px-3 !py-1 !text-xs" onClick={save} disabled={status === "saving"}>
          Save
        </Button>
      </div>
    </div>
  );
}
