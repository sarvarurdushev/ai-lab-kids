"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

/** A large picture-first editor for one Story Time panel — visuals are the point of a story slide, so the upload area is a big preview, not a small thumbnail like other content items. */
export function StoryPanelEditor({
  contentKey,
  originalText,
  emoji,
  initialTextOverride,
  initialImageUrl,
}: {
  contentKey: string;
  originalText: string;
  emoji: string;
  initialTextOverride: string | null;
  initialImageUrl: string | null;
}) {
  const [text, setText] = useState(initialTextOverride ?? "");
  const [imageUrl, setImageUrl] = useState<string | null>(initialImageUrl);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "uploading" | "error">("idle");
  const fileInput = useRef<HTMLInputElement>(null);

  async function uploadFile(file: File) {
    setStatus("uploading");
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/uploads", { method: "POST", body: form });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      const data = await res.json();
      setImageUrl(data.url);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  async function save() {
    setStatus("saving");
    try {
      const res = await fetch("/api/admin/content-overrides", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentKey, textOverride: text.trim() || null, imageUrl }),
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
      setImageUrl(null);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-cream p-3">
      <button
        type="button"
        onClick={() => fileInput.current?.click()}
        className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm"
        title="Click to upload a picture for this part of the story"
      >
        {imageUrl ? (
          <Image src={imageUrl} alt="" fill sizes="600px" className="object-cover" />
        ) : (
          <span className="text-7xl">{emoji}</span>
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-sm font-bold text-white opacity-0 transition-opacity group-hover:bg-ink/50 group-hover:opacity-100">
          {status === "uploading" ? "Uploading..." : imageUrl ? "Change picture" : "Upload picture"}
        </span>
      </button>
      <input
        ref={fileInput}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void uploadFile(file);
          e.target.value = "";
        }}
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={originalText}
        rows={2}
        className="w-full rounded-lg border-2 border-ink/10 bg-white px-2 py-1.5 text-sm focus:border-indigo focus:outline-none"
      />
      <div className="flex items-center justify-end gap-1.5">
        {status === "saved" && <span className="text-xs font-semibold text-mint">Saved</span>}
        {status === "error" && <span className="text-xs font-semibold text-coral">Error</span>}
        <Button variant="ghost" className="!px-2 !py-1 !text-xs" onClick={clearOverride} disabled={status === "saving"}>
          Reset
        </Button>
        <Button variant="secondary" className="!px-3 !py-1 !text-xs" onClick={save} disabled={status === "saving" || status === "uploading"}>
          Save
        </Button>
      </div>
    </div>
  );
}
