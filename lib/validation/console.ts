import { z } from "zod";

export const startLessonSessionSchema = z.object({
  unitKey: z.string().min(1),
  lessonKey: z.string().min(1),
});

export const updateLessonSessionSchema = z.object({
  currentSegmentIndex: z.number().int().min(0).optional(),
  completed: z.boolean().optional(),
});

export const recordMarkSchema = z.object({
  activityKey: z.string().min(1),
  mark: z.enum(["needs_practice", "got_it", "excelling"]),
  studentId: z.string().uuid().nullable().optional(),
  note: z.string().max(500).optional(),
});

export const createClassSchema = z.object({
  schoolId: z.string().uuid(),
  name: z.string().trim().min(1).max(120),
  gradeLabel: z.string().trim().min(1).max(60),
  koreanSupportLevel: z.enum(["full", "light", "minimal"]).default("full"),
});

export const addStudentSchema = z.object({
  koreanName: z.string().trim().min(1).max(80),
  englishName: z.string().trim().max(80).optional(),
  avatarEmoji: z.string().trim().min(1).max(8).default("🧒"),
});
