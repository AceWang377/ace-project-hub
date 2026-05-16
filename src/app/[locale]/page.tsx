import { ArrowRight, CircleDot, Mail, Rocket, ShieldCheck } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectCard } from "@/components/project-card";
import { ProjectMark } from "@/components/project-mark";
import { TrackedLink } from "@/components/tracked-link";
import { WaitlistForm } from "@/components/waitlist-form";
import { getNotes } from "@/content/notes";
import { Link } from "@/i18n/navigation";
import { getFeaturedProjects } from "@/lib/projects";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const featuredProjects = getFeaturedProjects(locale);
  const notes = getNotes(locale);

  const principles = [
    { key: "ship", title: t("principles.ship.title"), body: t("principles.ship.body") },
    { key: "signals", title: t("principles.signals.title"), body: t("principles.signals.body") },
    { key: "feedback", title: t("principles.feedback.title"), body: t("principles.feedback.body") },
    { key: "focus", title: t("principles.focus.title"), body: t("principles.focus.body") },
  ];

  return (
    <>
      <section className="hero-rail overflow-hidden text-white">
        <div className="container-x grid min-h-[calc(100vh-64px)] items-center gap-12 py-14 md:grid-cols-[1fr_0.88fr] md:py-18">
          <div>
            <div className="inline-flex items-center gap-2 rounded-[8px] border border-white/14 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-white/60">
              <CircleDot size={14} className="text-[#00c7d4]" />
              {t("badge")}
            </div>
            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[0.96] tracking-[-0.055em] sm:text-5xl md:text-7xl lg:text-8xl">
              {t("title")}
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/68 md:text-xl">
              {t("description")}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <TrackedLink
                href="/projects"
                eventName="project_primary_cta_click"
                className="inline-flex h-12 items-center gap-2 rounded-[8px] bg-white px-5 text-sm font-black text-[#101211] transition hover:bg-[#eafbfd]"
              >
                {t("explore")}
                <ArrowRight size={16} />
              </TrackedLink>
              <TrackedLink
                href="/contact"
                eventName="project_secondary_cta_click"
                className="inline-flex h-12 items-center gap-2 rounded-[8px] border border-white/20 px-5 text-sm font-black text-white transition hover:bg-white/10"
              >
                {t("contact")}
                <Mail size={16} />
              </TrackedLink>
            </div>
          </div>
          <div className="motion-safe-float rounded-[8px] border border-white/14 bg-white/[0.06] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <div className="grid-paper rounded-[8px] bg-[#f6f7f4] p-4 text-[#101211]">
              <div className="flex items-center justify-between border-b border-[#101211]/10 pb-4">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#68716b]">
                  {t("console")}
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
                    <ProjectMark
                      label={project.brand.icon ?? project.name.slice(0, 2)}
                      image={project.brand.iconImage}
                      accent={project.brand.accentColor}
                      className="size-10"
                    />
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
                {[t("legal"), t("support"), t("seo")].map((item) => (
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
              {t("featuredLabel")}
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.055em] md:text-6xl">
              {t("featuredTitle")}
            </h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-black">
            {t("viewAll")}
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
              {t("principlesLabel")}
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.055em] md:text-6xl">
              {t("principlesTitle")}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => (
              <article key={item.key} className="rounded-[8px] border border-[#101211]/10 p-5">
                <Rocket size={18} className="text-[#00a5b0]" />
                <h3 className="mt-5 text-xl font-black tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#626b65]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="notes" className="container-x py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.58fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">
              {t("notesLabel")}
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.055em]">{t("notesTitle")}</h2>
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
              {t("ctaTitle")}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/62">
              {t("ctaDescription")}
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
