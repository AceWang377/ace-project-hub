import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getProjectSlugs().map((projectSlug) => ({ projectSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}): Promise<Metadata> {
  const { projectSlug } = await params;
  const project = getProject(projectSlug);
  return {
    title: project ? `${project.name} Privacy Policy` : "Privacy Policy",
    description: project ? `Privacy policy for ${project.name}.` : "Privacy policy.",
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = getProject(projectSlug);
  if (!project) notFound();

  return (
    <PolicyShell title={`${project.name} Privacy Policy`} updated="2026-05-15">
      <h2>What data is collected</h2>
      <p>
        This project page may collect your email, optional name, project interest, message content,
        source path, and submission timestamp when you use the contact or waitlist forms. The app
        itself may collect additional data only when that behavior is explicitly added to the live
        product.
      </p>
      <h2>How data is used</h2>
      <p>
        Submitted information is used to reply to support requests, manage early-access interest,
        improve project communication, and understand which project pages are useful.
      </p>
      <h2>Third-party services</h2>
      <p>
        Form submissions and optional site events are designed to be stored in Supabase. Hosting may
        run on Vercel or another deployment provider. App Store distribution may use Apple services
        when a mobile app is released.
      </p>
      <h2>Analytics and tracking</h2>
      <p>
        The site can record lightweight events such as page views, project CTA clicks, contact
        submissions, and waitlist submissions. No advertising profile is created from this hub.
      </p>
      <h2>User rights and deletion requests</h2>
      <p>
        You can request a copy or deletion of submitted information by emailing {siteConfig.supportEmail}.
      </p>
      <h2>Changes</h2>
      <p>
        This policy may be updated as the project changes. The last updated date above will change
        when material updates are made.
      </p>
    </PolicyShell>
  );
}

function PolicyShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="container-x max-w-3xl py-16 md:py-24">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">
        Last updated {updated}
      </p>
      <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl">{title}</h1>
      <div className="mt-10 grid gap-6 text-base leading-7 text-[#4f5853] [&_h2]:mt-4 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:tracking-[-0.03em] [&_h2]:text-[#101211]">
        {children}
      </div>
    </article>
  );
}
