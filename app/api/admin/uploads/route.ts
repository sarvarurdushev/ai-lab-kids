import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";

const ALLOWED_IMAGE_TYPES: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
};
const ALLOWED_AUDIO_TYPES: Record<string, string> = {
  "audio/mpeg": "mp3",
  "audio/mp4": "m4a",
  "audio/wav": "wav",
  "audio/x-wav": "wav",
  "audio/ogg": "ogg",
  "audio/webm": "weba",
};
const MAX_IMAGE_BYTES = 8 * 1024 * 1024; // 8MB — plenty for a phone photo
const MAX_AUDIO_BYTES = 20 * 1024 * 1024; // 20MB — a few minutes of a chant recording
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

export async function POST(request: NextRequest) {
  const admin = await requireOrgAdmin();
  if (!admin) return NextResponse.json({ error: "Not authorized" }, { status: 403 });

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const imageExt = ALLOWED_IMAGE_TYPES[file.type];
  const audioExt = ALLOWED_AUDIO_TYPES[file.type];
  const ext = imageExt ?? audioExt;
  if (!ext) {
    return NextResponse.json({ error: "Only PNG/JPEG/WEBP/GIF images or MP3/M4A/WAV/OGG audio are allowed" }, { status: 400 });
  }
  const maxBytes = imageExt ? MAX_IMAGE_BYTES : MAX_AUDIO_BYTES;
  if (file.size > maxBytes) {
    return NextResponse.json({ error: `File is too large (max ${maxBytes / (1024 * 1024)}MB)` }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const filename = `${randomUUID()}.${ext}`;
  await mkdir(UPLOAD_DIR, { recursive: true });
  await writeFile(path.join(UPLOAD_DIR, filename), bytes);

  return NextResponse.json({ url: `/uploads/${filename}`, kind: imageExt ? "image" : "audio" });
}
