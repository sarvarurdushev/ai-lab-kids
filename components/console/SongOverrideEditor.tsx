"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MusicNoteIcon } from "@/components/icons";

/** Attaches one audio recording to a whole segment (a chant or a story) — a teacher can sing/hum or narrate once and every class hears it. */
export function SongOverrideEditor({
  contentKey,
  initialAudioUrl,
  label = "Chant song (optional)",
  uploadLabel = "song",
}: {
  contentKey: string;
  initialAudioUrl: string | null;
  label?: string;
  uploadLabel?: string;
}) {
  const [audioUrl, setAudioUrl] = useState<string | null>(initialAudioUrl);
  const [status, setStatus] = useState<"idle" | "uploading" | "saving" | "saved" | "error">("idle");
  const fileInput = useRef<HTMLInputElement>(null);

  async function uploadAndSave(file: File) {
    setStatus("uploading");
    try {
      const form = new FormData();
      form.append("file", file);
      const uploadRes = await fetch("/api/admin/uploads", { method: "POST", body: form });
      if (!uploadRes.ok) {
        setStatus("error");
        return;
      }
      const { url } = await uploadRes.json();
      setStatus("saving");
      const saveRes = await fetch("/api/admin/content-overrides", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentKey, audioUrl: url }),
      });
      setAudioUrl(url);
      setStatus(saveRes.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  }

  async function removeSong() {
    setStatus("saving");
    try {
      await fetch(`/api/admin/content-overrides?key=${encodeURIComponent(contentKey)}`, { method: "DELETE" });
      setAudioUrl(null);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col gap-2 rounded-xl bg-cream p-3">
      <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/50">
        <MusicNoteIcon size={12} /> {label}
      </p>
      {audioUrl && <audio controls src={audioUrl} className="h-9 w-full" />}
      <input
        ref={fileInput}
        type="file"
        accept="audio/mpeg,audio/mp4,audio/wav,audio/x-wav,audio/ogg,audio/webm"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void uploadAndSave(file);
          e.target.value = "";
        }}
      />
      <div className="flex items-center justify-end gap-1.5">
        {status === "saved" && <span className="text-xs font-semibold text-mint">Saved</span>}
        {status === "error" && <span className="text-xs font-semibold text-coral">Error</span>}
        {audioUrl && (
          <Button variant="ghost" className="!px-2 !py-1 !text-xs" onClick={removeSong} disabled={status === "saving"}>
            Remove
          </Button>
        )}
        <Button
          variant="secondary"
          className="!px-3 !py-1 !text-xs"
          onClick={() => fileInput.current?.click()}
          disabled={status === "uploading" || status === "saving"}
        >
          {status === "uploading" ? "Uploading..." : audioUrl ? `Replace ${uploadLabel}` : `Upload ${uploadLabel}`}
        </Button>
      </div>
    </div>
  );
}
