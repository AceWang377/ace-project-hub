"use client";

import { Check, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { projects } from "@/content/projects";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "loading" | "success" | "error";

export function WaitlistForm({ defaultProject }: { defaultProject?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form));

    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        source_path: window.location.pathname,
      }),
    });

    const result = (await response.json()) as { message?: string };
    if (!response.ok) {
      setState("error");
      setMessage(result.message ?? "The form could not be submitted.");
      return;
    }

    trackEvent({
      event_name: "waitlist_submit",
      project_slug: String(body.project_slug || ""),
    });
    form.reset();
    setState("success");
    setMessage(result.message ?? "You're on the update list.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <input className="hidden" name="company" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-2">
        <label htmlFor="waitlist-email" className="text-sm font-bold text-[#202522]">
          Email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="h-12 rounded-[8px] border border-[#101211]/15 bg-white px-3 text-sm text-[#101211] shadow-sm"
        />
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#202522]">
          Name
          <input
            name="name"
            placeholder="Optional"
            className="h-12 rounded-[8px] border border-[#101211]/15 bg-white px-3 text-sm font-normal text-[#101211] shadow-sm"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#202522]">
          Project
          <select
            name="project_slug"
            defaultValue={defaultProject ?? ""}
            className="h-12 rounded-[8px] border border-[#101211]/15 bg-white px-3 text-sm font-normal text-[#101211] shadow-sm"
          >
            <option value="">General updates</option>
            {projects.map((project) => (
              <option key={project.slug} value={project.slug}>
                {project.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-[#202522]">
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Optional context or feedback"
          className="resize-none rounded-[8px] border border-[#101211]/15 bg-white px-3 py-3 text-sm font-normal text-[#101211] shadow-sm"
        />
      </label>
      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#101211] px-5 text-sm font-black text-white transition hover:bg-[#262c29] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "success" ? <Check size={16} /> : <Send size={16} />}
        {state === "loading" ? "Sending..." : state === "success" ? "Submitted" : "Join Updates"}
      </button>
      {message ? (
        <p
          className={`text-sm font-semibold ${state === "error" ? "text-red-700" : "text-[#006d75]"}`}
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
