import { ArrowRight, CircleDot, Mail, Rocket, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { TrackedLink } from "@/components/tracked-link";
import { WaitlistForm } from "@/components/waitlist-form";
import { notes } from "@/content/notes";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <section className="hero-rail overflow-hidden text-white">
        <div className="container-x grid min-h-[calc(100vh-64px)] items-center gap-12 py-14 md:grid-cols-[1fr_0.88fr] md:py-18">
          <div>
            <div className="inline-flex items-center gap-2 rounded-[8px] border border-white/14 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-white/60">
              <CircleDot size={14} className="text-[#00c7d4]" />
              Currently building: AceSignalForge
            </div>
            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[0.96] tracking-[-0.055em] sm:text-5xl md:text-7xl lg:text-8xl">
              Building focused apps and tools for real workflows.
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/68 md:text-xl">
              I design and build small, practical products across productivity, AI workflows,
              creative tools, and mobile apps.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <TrackedLink
                href="/projects"
                eventName="project_primary_cta_click"
                className="inline-flex h-12 items-center gap-2 rounded-[8px] bg-white px-5 text-sm font-black text-[#101211] transition hover:bg-[#eafbfd]"
              >
                Explore Projects
                <ArrowRight size={16} />
              </TrackedLink>
              <TrackedLink
                href="/contact"
                eventName="project_secondary_cta_click"
                className="inline-flex h-12 items-center gap-2 rounded-[8px] border border-white/20 px-5 text-sm font-black text-white transition hover:bg-white/10"
              >
                Contact Ace
                <Mail size={16} />
              </TrackedLink>
            </div>
          </div>
          <div className="motion-safe-float rounded-[8px] border border-white/14 bg-white/[0.06] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <div className="grid-paper rounded-[8px] bg-[#f6f7f4] p-4 text-[#101211]">
              <div className="flex items-center justify-between border-b border-[#101211]/10 pb-4">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#68716b]">
                  Project console
                </span>
                <span className="size-3 rounded-full bg-[#00c7d4]" />
              </div>
              <div className="mt-5 grid gap-3">
                {featuredProjects.map((project, index) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="grid grid-cols-[42px_1fr_auto] items-center gap-3 rounded-[8px] border border-[#101211]/10 bg-white p-3 transition hover:border-[#101211]/28"
                  >
                    <span className="flex size-10 items-center justify-center rounded-[8px] bg-[#101211] text-[0.68rem] font-black text-white shadow-[inset_0_-3px_0_#00c7d4]">
                      {project.brand.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-black">{project.name}</span>
                      <span className="block truncate text-xs font-semibold text-[#667069]">
                        {project.tagline}
                      </span>
                    </span>
                    <span className="text-xs font-black text-[#7b8580]">0{index + 1}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["Legal", "Support", "SEO"].map((item) => (
                  <div key={item} className="rounded-[8px] border border-[#101211]/10 bg-white p-3">
                    <span className="text-xs font-black uppercase tracking-[0.12em] text-[#6a736d]">
                      {item}
                    </span>
                    <span className="mt-2 block h-1.5 rounded-full bg-[#00c7d4]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">
              Featured projects
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.055em] md:text-6xl">
              One hub. Several product paths.
            </h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-black">
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">
              Operating principles
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.055em] md:text-6xl">
              Small ships, real signals.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Ship small.", "Make each release narrow enough to understand."],
              ["Measure real signals.", "Watch user action, not vanity motion."],
              ["Improve from feedback.", "Let launches teach the next build."],
              ["Keep products focused.", "A useful edge beats a crowded surface."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-[8px] border border-[#101211]/10 p-5">
                <Rocket size={18} className="text-[#00a5b0]" />
                <h3 className="mt-5 text-xl font-black tracking-[-0.03em]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#626b65]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="notes" className="container-x py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.58fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">
              Latest notes
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.055em]">Build log signals.</h2>
          </div>
          <div className="grid gap-3">
            {notes.map((note) => (
              <article
                key={note.title}
                className="grid gap-2 rounded-[8px] border border-[#101211]/10 bg-white p-5 md:grid-cols-[130px_1fr]"
              >
                <time className="text-sm font-black text-[#00a5b0]">{note.date}</time>
                <div>
                  <h3 className="font-black">{note.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#626b65]">{note.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101211] py-16 text-white md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-[0.82fr_1fr]">
          <div>
            <ShieldCheck size={24} className="text-[#00c7d4]" />
            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-[-0.055em] md:text-6xl">
              Interested in one of the projects?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/62">
              Send feedback, request early access, or get updates when a project moves from build
              mode into public release.
            </p>
          </div>
          <div className="rounded-[8px] bg-[#f6f7f4] p-5 text-[#101211] md:p-6">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
