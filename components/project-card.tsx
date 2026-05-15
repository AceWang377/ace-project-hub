import { ArrowRight, ExternalLink } from "lucide-react";
import { ProjectMark } from "@/components/project-mark";
import { TrackedLink } from "@/components/tracked-link";
import type { Project } from "@/content/projects";
import { projectUrl, statusLabels } from "@/lib/projects";

export function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const accent = project.brand.accentColor ?? "#00c7d4";

  return (
    <article
      className={[
        "group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[8px] border border-[#101211]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#101211]/25 hover:shadow-[0_18px_50px_rgba(16,18,17,0.10)]",
        featured ? "md:col-span-2 md:min-h-[360px]" : "",
      ].join(" ")}
    >
      <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: accent }} />
      <div>
        <div className="flex items-start justify-between gap-4">
          <ProjectMark label={project.brand.icon ?? project.name.slice(0, 2)} accent={accent} />
          <span className="rounded-[8px] border border-[#101211]/10 px-2.5 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#4f5854]">
            {statusLabels[project.status]}
          </span>
        </div>
        <h2 className="mt-7 text-2xl font-black tracking-[-0.04em] text-[#101211] md:text-3xl">
          {project.name}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#4f5854] md:text-base">
          {project.tagline}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.category.map((category) => (
            <span
              key={category}
              className="rounded-[7px] bg-[#f1f3ef] px-2.5 py-1 text-xs font-bold text-[#59615c]"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <TrackedLink
          href={projectUrl(project)}
          eventName="project_card_click"
          projectSlug={project.slug}
          className="inline-flex h-10 items-center gap-2 rounded-[8px] bg-[#101211] px-4 text-sm font-bold text-white transition hover:bg-[#252b28]"
        >
          View Project
          <ArrowRight size={16} />
        </TrackedLink>
        {project.links.webApp ? (
          <TrackedLink
            href={project.links.webApp}
            eventName="web_app_click"
            projectSlug={project.slug}
            className="inline-flex h-10 items-center gap-2 rounded-[8px] border border-[#101211]/12 px-4 text-sm font-bold text-[#101211] transition hover:border-[#101211]/30 hover:bg-[#f7f8f5]"
          >
            Open App
            <ExternalLink size={15} />
          </TrackedLink>
        ) : null}
      </div>
    </article>
  );
}
