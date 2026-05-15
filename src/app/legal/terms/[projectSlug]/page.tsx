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
    title: project ? `${project.name} Terms` : "Terms",
    description: project ? `Terms for ${project.name}.` : "Terms.",
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = getProject(projectSlug);
  if (!project) notFound();

  return (
    <article className="container-x max-w-3xl py-16 md:py-24">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">
        Last updated 2026-05-15
      </p>
      <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl">{project.name} Terms</h1>
      <div className="mt-10 grid gap-6 text-base leading-7 text-[#4f5853] [&_h2]:mt-4 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:tracking-[-0.03em] [&_h2]:text-[#101211]">
        <h2>Use of the project</h2>
        <p>
          {project.name} is provided as described on its project page and may change as the product
          develops. Do not use it for unlawful, abusive, or harmful activity.
        </p>
        <h2>Availability</h2>
        <p>
          Some projects are still in build, review, or beta status. Features, links, and availability
          can change without notice.
        </p>
        <h2>Content and feedback</h2>
        <p>
          If you send feedback, support questions, or waitlist messages, Ace may use that information
          to improve the product and reply to you.
        </p>
        <h2>No warranty</h2>
        <p>
          The project is provided without warranties. Ace is not responsible for indirect losses,
          service interruption, or third-party platform behavior.
        </p>
        <h2>Contact</h2>
        <p>Questions about these terms can be sent to {siteConfig.supportEmail}.</p>
      </div>
    </article>
  );
}
