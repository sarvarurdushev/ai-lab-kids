import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { classes, schools } from "@/lib/db/schema";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { createClassSchema } from "@/lib/validation/console";

export async function POST(request: NextRequest) {
  const teacher = await requireTeacher();
  if (!teacher) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const body = await request.json().catch(() => null);
  const parsed = createClassSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const [school] = await db.select().from(schools).where(eq(schools.id, parsed.data.schoolId)).limit(1);
  if (!school || school.organizationId !== teacher.organizationId) {
    return NextResponse.json({ error: "School not found" }, { status: 404 });
  }

  const [created] = await db
    .insert(classes)
    .values({
      schoolId: parsed.data.schoolId,
      teacherAccountId: teacher.id,
      name: parsed.data.name,
      gradeLabel: parsed.data.gradeLabel,
      koreanSupportLevel: parsed.data.koreanSupportLevel,
      ageTrack: parsed.data.ageTrack,
    })
    .returning();
  return NextResponse.json(created);
}
