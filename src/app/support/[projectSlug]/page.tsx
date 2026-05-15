import type { Metadata } from "next";
import Link from "next/link";
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
    title: project ? `${project.name} Support` : "Support",
    description: project ? `Support page for ${project.name}.` : "Support page.",
  };
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = getProject(projectSlug);
  if (!project) notFound();

  return (
    <section className="container-x grid gap-10 py-16 md:grid-cols-[0.72fr_1fr] md:py-24">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">Support</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">
          {project.name} support.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5f6862]">
          For help, bug reports, App Store reviewer questions, or data deletion requests, contact
          Ace at {siteConfig.supportEmail}.
        </p>
      </div>
      <div className="grid gap-4">
        {[
          ["Common issues", "If something looks broken, include your device, browser or app version, and the steps to reproduce it."],
          ["Bug reports", "Send a concise message with screenshots if available. Avoid sharing sensitive data in plain text."],
          ["Data deletion", `Email ${siteConfig.supportEmail} with the project name and the email address used in the form.`],
          ["App Store link", project.links.appStore ? "Use the App Store CTA on the project page." : "The App Store link will be added when available."],
        ].map(([title, body]) => (
          <article key={title} className="rounded-[8px] border border-[#101211]/10 bg-white p-5">
            <h2 className="text-xl font-black tracking-[-0.03em]">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#606963]">{body}</p>
          </article>
        ))}
        <Link
          href={`/contact?project=${project.slug}`}
          className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#101211] px-5 text-sm font-black text-white transition hover:bg-[#262c29]"
        >
          Contact support
        </Link>
      </div>
    </section>
  );
}
