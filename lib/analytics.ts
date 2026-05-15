"use client";

type EventPayload = {
  event_name: string;
  project_slug?: string;
  target_url?: string;
  metadata?: Record<string, string | number | boolean | null>;
};

export function trackEvent(payload: EventPayload) {
  if (typeof window === "undefined") {
    return;
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 1200);

  void fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      source_path: window.location.pathname,
    }),
    signal: controller.signal,
  })
    .catch(() => {
      // Analytics should never block navigation or form work.
    })
    .finally(() => {
      window.clearTimeout(timeout);
    });
}
