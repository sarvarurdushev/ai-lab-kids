ALTER TYPE "public"."teacher_role" ADD VALUE 'pending' BEFORE 'org_admin';--> statement-breakpoint
CREATE TABLE "content_overrides" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content_key" text NOT NULL,
	"text_override" text,
	"image_url" text,
	"updated_by" uuid,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "content_overrides" ADD CONSTRAINT "content_overrides_updated_by_teacher_accounts_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."teacher_accounts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "content_overrides_key_idx" ON "content_overrides" USING btree ("content_key");