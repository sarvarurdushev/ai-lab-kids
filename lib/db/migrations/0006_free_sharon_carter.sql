CREATE TABLE "sound_checks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"class_id" uuid NOT NULL,
	"lesson_key" text NOT NULL,
	"grapheme" text NOT NULL,
	"needed_hint" boolean NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "sound_checks" ADD CONSTRAINT "sound_checks_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "sound_checks_class_grapheme_idx" ON "sound_checks" USING btree ("class_id","grapheme");