CREATE TYPE "public"."age_track" AS ENUM('little_sparks', 'explorers');--> statement-breakpoint
ALTER TABLE "classes" ADD COLUMN "age_track" "age_track" DEFAULT 'explorers' NOT NULL;