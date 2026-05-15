import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  const payload = contactSchema.safeParse(await request.json().catch(() => ({})));

  if (!payload.success) {
    return NextResponse.json(
      { message: payload.error.issues[0]?.message ?? "Check the form and try again." },
      { status: 400 },
    );
  }

  if (payload.data.company) {
    return NextResponse.json({ message: "Message received." });
  }

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json(
      {
        message:
          "Supabase is not configured yet. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to enable contact messages.",
      },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("contact_messages").insert({
    email: payload.data.email,
    name: payload.data.name || null,
    project_slug: payload.data.project_slug || null,
    source_path: payload.data.source_path || null,
    message: payload.data.message,
  });

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Message received." });
}
