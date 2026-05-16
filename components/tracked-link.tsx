"use client";

import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  projectSlug?: string;
};

export function TrackedLink({ eventName, projectSlug, href, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        trackEvent({
          event_name: eventName,
          project_slug: projectSlug,
          target_url: href.toString(),
        });
        onClick?.(event);
      }}
      {...props}
    />
  );
}
