CREATE TABLE "addresses" (
	"id" serial PRIMARY KEY NOT NULL,
	"address" text NOT NULL
);
--> statement-breakpoint
CREATE INDEX "id_idx" ON "addresses" USING btree ("id");--> statement-breakpoint
CREATE INDEX "address_idx" ON "addresses" USING btree ("address");