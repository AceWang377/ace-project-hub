"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getProjectSlugs } from "@/lib/projects";
import { trackEvent } from "@/lib/analytics";

const projectSlugs = getProjectSlugs();

export function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const projectSlug = projectSlugs.find((slug) => pathname.includes(slug));
    let eventName = "homepage_view";

    if (pathname === "/projects") eventName = "projects_index_view";
    else if (pathname.startsWith("/projects/")) eventName = "project_page_view";
    else if (pathname.startsWith("/legal/privacy/")) eventName = "privacy_policy_view";
    else if (pathname.startsWith("/support/")) eventName = "support_page_view";

    trackEvent({
      event_name: eventName,
      project_slug: projectSlug,
    });
  }, [pathname]);

  return null;
}
