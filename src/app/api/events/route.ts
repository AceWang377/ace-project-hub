import { z } from "zod";
import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

const eventSchema = z.object({
  event_name: z.string().min(2).max(80),
  project_slug: z.string().max(120).optional().or(z.literal("")),
  source_path: z.string().max(240).optional().or(z.literal("")),
  target_url: z.string().max(500).optional().or(z.literal("")),
  metadata: z
    .record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.null()]))
    .optional(),
});

export async function POST(request: Request) {
  const payload = eventSchema.safeParse(await request.json().catch(() => ({})));

  if (!payload.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json({ ok: true, skipped: "Supabase not configured" });
  }

  await supabase.from("site_events").insert({
    event_name: payload.data.event_name,
    project_slug: payload.data.project_slug || null,
    source_path: payload.data.source_path || null,
    target_url: payload.data.target_url || null,
    metadata: payload.data.metadata ?? null,
  });

  return NextResponse.json({ ok: true });
}
