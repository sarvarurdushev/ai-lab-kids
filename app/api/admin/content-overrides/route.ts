import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { contentOverrides } from "@/lib/db/schema";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";
import { contentOverrideSchema } from "@/lib/validation/console";

export async function PUT(request: NextRequest) {
  const admin = await requireOrgAdmin();
  if (!admin) return NextResponse.json({ error: "Not authorized" }, { status: 403 });

  const body = await request.json().catch(() => null);
  const parsed = contentOverrideSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const { contentKey, textOverride, imageUrl, audioUrl } = parsed.data;
  await db
    .insert(contentOverrides)
    .values({ contentKey, textOverride: textOverride ?? null, imageUrl: imageUrl ?? null, audioUrl: audioUrl ?? null, updatedBy: admin.id })
    .onConflictDoUpdate({
      target: contentOverrides.contentKey,
      set: {
        textOverride: textOverride ?? null,
        imageUrl: imageUrl ?? null,
        audioUrl: audioUrl ?? null,
        updatedBy: admin.id,
        updatedAt: new Date(),
      },
    });

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  const admin = await requireOrgAdmin();
  if (!admin) return NextResponse.json({ error: "Not authorized" }, { status: 403 });

  const key = request.nextUrl.searchParams.get("key");
  if (!key) return NextResponse.json({ error: "Missing key" }, { status: 400 });

  await db.delete(contentOverrides).where(eq(contentOverrides.contentKey, key));
  return NextResponse.json({ ok: true });
}
