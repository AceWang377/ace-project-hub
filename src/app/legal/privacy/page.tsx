import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Privacy Policies",
  description: "Project-specific privacy policy links for Ace Project Hub.",
};

export default function PrivacyIndexPage() {
  return <LegalIndex title="Privacy Policies" basePath="/legal/privacy" />;
}

function LegalIndex({ title, basePath }: { title: string; basePath: string }) {
  return (
    <section className="container-x py-16 md:py-24">
      <h1 className="text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">{title}</h1>
      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`${basePath}/${project.slug}`}
            className="rounded-[8px] border border-[#101211]/10 bg-white p-5 font-black transition hover:border-[#101211]/30"
          >
            {project.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
