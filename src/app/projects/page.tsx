import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore AceSignalForge, Blacktop, LastPercent, Ace Studio, and future Ace projects.",
  openGraph: {
    title: "Ace Projects",
    description: "A directory of apps, tools, and experiments by Ace.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">Projects</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">
          Apps, tools, and experiments under one roof.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5f6862]">
          Each project page carries its own status, CTA, privacy policy, terms, and support route.
          Adding a future project starts in one editable config file.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} featured={index === 0} />
        ))}
      </div>
    </section>
  );
}
