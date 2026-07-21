import { z } from "zod";

export const startLessonSessionSchema = z.object({
  unitKey: z.string().min(1),
  lessonKey: z.string().min(1),
});

export const updateLessonSessionSchema = z.object({
  currentSegmentIndex: z.number().int().min(0).optional(),
  completed: z.boolean().optional(),
});

export const createClassSchema = z.object({
  schoolId: z.string().uuid(),
  name: z.string().trim().min(1).max(120),
  gradeLabel: z.string().trim().min(1).max(60),
  koreanSupportLevel: z.enum(["full", "light", "minimal"]).default("full"),
  ageTrack: z.enum(["little_sparks", "explorers"]).default("explorers"),
});
