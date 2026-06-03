"use client";

import { Check, Send } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import type { Locale } from "@/i18n/routing";
import { trackEvent } from "@/lib/analytics";
import { getProjects } from "@/lib/projects";

const directEmail = "acewang377@gmail.com";
const quickHelpSlug = "quick-help";

function normalizeProject(value?: string) {
  if (!value) return "";
  const normalized = value.toLowerCase();
  if (
    value === quickHelpSlug ||
    normalized.includes("quick tech help") ||
    normalized.includes("same-day tech help")
  ) {
    return quickHelpSlug;
  }

  return value;
}

export function ContactForm({ defaultProject }: { defaultProject?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fallbackHref, setFallbackHref] = useState("");
  const locale = useLocale() as Locale;
  const t = useTranslations("Forms");
  const projects = getProjects(locale);
  const initialProject = normalizeProject(defaultProject);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");
    setFallbackHref("");

    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form));
    const emailBody = [
      `From: ${String(body.name || "Not provided")} <${String(body.email || "")}>`,
      `Project: ${String(body.project_slug || t("general"))}`,
      "",
      String(body.message || ""),
    ].join("\n");
    const fallback = `mailto:${directEmail}?subject=${encodeURIComponent("Ace Project Hub contact")}&body=${encodeURIComponent(emailBody)}`;

    try {
      const response = await fetch("/api/contact", {
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
        setFallbackHref(fallback);
        setMessage(t("contactFallback"));
        return;
      }

      trackEvent({
        event_name: "contact_submit",
        project_slug: String(body.project_slug || ""),
      });
      form.reset();
      setState("success");
      setMessage(result.message ?? t("contactSuccess"));
    } catch {
      setState("error");
      setFallbackHref(fallback);
      setMessage(t("contactFallback"));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <input className="hidden" name="company" tabIndex={-1} autoComplete="off" suppressHydrationWarning />
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#202522]">
          {t("email")}
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-12 rounded-[8px] border border-[#101211]/15 bg-white px-3 text-sm font-normal text-[#101211] shadow-sm"
            suppressHydrationWarning
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#202522]">
          {t("name")}
          <input
            name="name"
            placeholder={t("optional")}
            className="h-12 rounded-[8px] border border-[#101211]/15 bg-white px-3 text-sm font-normal text-[#101211] shadow-sm"
            suppressHydrationWarning
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-[#202522]">
        {t("project")}
        <select
          name="project_slug"
          defaultValue={initialProject}
          className="h-12 rounded-[8px] border border-[#101211]/15 bg-white px-3 text-sm font-normal text-[#101211] shadow-sm"
          suppressHydrationWarning
        >
          <option value="">{t("general")}</option>
          <option value={quickHelpSlug}>{t("quickHelp")}</option>
          {projects.map((project) => (
            <option key={project.slug} value={project.slug}>
              {project.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-[#202522]">
        {t("message")}
        <textarea
          name="message"
          rows={6}
          required
          placeholder={t("contactPlaceholder")}
          className="resize-none rounded-[8px] border border-[#101211]/15 bg-white px-3 py-3 text-sm font-normal text-[#101211] shadow-sm"
          suppressHydrationWarning
        />
      </label>
      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#101211] px-5 text-sm font-black text-white transition hover:bg-[#262c29] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "success" ? <Check size={16} /> : <Send size={16} />}
        {state === "loading" ? t("sending") : state === "success" ? t("sent") : t("sendMessage")}
      </button>
      {message ? (
        <p
          className={`text-sm font-semibold ${state === "error" ? "text-red-700" : "text-[#006d75]"}`}
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
      {fallbackHref ? (
        <a
          href={fallbackHref}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-[#101211]/15 bg-white px-4 text-sm font-black text-[#101211] transition hover:bg-[#eef8f9]"
        >
          {t("emailDirectly")}
          <Send size={15} />
        </a>
      ) : null}
    </form>
  );
}
