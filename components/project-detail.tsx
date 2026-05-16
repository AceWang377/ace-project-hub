import { ArrowRight, ExternalLink, FileText, GitBranch, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ProjectMark } from "@/components/project-mark";
import { TrackedLink } from "@/components/tracked-link";
import type { Project } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getStatusLabels } from "@/lib/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const accent = project.brand.accentColor ?? "#00c7d4";
  const locale = useLocale() as Locale;
  const t = useTranslations("ProjectDetail");
  const statusLabels = getStatusLabels(locale);

  return (
    <>
      <section className="hero-rail text-white">
        <div className="container-x grid gap-10 py-16 md:grid-cols-[1fr_0.82fr] md:py-24">
          <div>
            <ProjectMark label={project.brand.icon ?? project.name.slice(0, 2)} image={project.brand.iconImage} accent={accent} dark />
            <h1 className="mt-8 max-w-3xl text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-white/82">
              {project.tagline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">{project.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedLink
                href={project.links.webApp ?? project.links.appStore ?? project.links.waitlist ?? "/contact"}
                eventName="project_primary_cta_click"
                projectSlug={project.slug}
                className="inline-flex h-12 items-center gap-2 rounded-[8px] bg-white px-5 text-sm font-black text-[#101211] transition hover:bg-[#eafbfd]"
              >
                {project.links.webApp ? t("openApp") : project.links.appStore ? t("viewAppStore") : t("joinWaitlist")}
                {project.links.webApp || project.links.appStore ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
              </TrackedLink>
              <TrackedLink
                href="/contact"
                eventName="project_secondary_cta_click"
                projectSlug={project.slug}
                className="inline-flex h-12 items-center gap-2 rounded-[8px] border border-white/20 px-5 text-sm font-black text-white transition hover:bg-white/10"
              >
                {t("contactAce")}
              </TrackedLink>
              {project.links.github ? (
                <TrackedLink
                  href={project.links.github}
                  eventName="project_secondary_cta_click"
                  projectSlug={project.slug}
                  className="inline-flex h-12 items-center gap-2 rounded-[8px] border border-white/20 px-5 text-sm font-black text-white transition hover:bg-white/10"
                >
                  GitHub
                  <GitBranch size={16} />
                </TrackedLink>
              ) : null}
            </div>
          </div>
          <div className="motion-safe-float rounded-[8px] border border-white/14 bg-white/[0.06] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-between border-b border-white/12 pb-4">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-white/42">{t("projectStatus")}</span>
              <span className="rounded-[8px] bg-white px-2.5 py-1 text-xs font-black uppercase tracking-[0.1em] text-[#101211]">
                {statusLabels[project.status]}
              </span>
            </div>
            <div className="grid gap-4 py-6">
              {project.features.slice(0, 3).map((feature, index) => (
                <div key={feature.title} className="grid grid-cols-[34px_1fr] gap-3">
                  <span className="flex size-8 items-center justify-center rounded-[8px] bg-white/10 text-sm font-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-black">{feature.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/58">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-[8px] bg-white px-4 py-4 text-[#101211]">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#69716c]">{t("legalSupport")}</p>
              <div className="mt-3 grid gap-2 text-sm font-bold">
                <Link href={`/legal/privacy/${project.slug}`} className="inline-flex items-center gap-2">
                  <ShieldCheck size={15} />
                  {t("privacyPolicy")}
                </Link>
                <Link href={`/legal/terms/${project.slug}`} className="inline-flex items-center gap-2">
                  <FileText size={15} />
                  {t("terms")}
                </Link>
                <Link href={`/support/${project.slug}`} className="inline-flex items-center gap-2">
                  <Wrench size={15} />
                  {t("support")}
                </Link>
                {project.links.landing ? (
                  <Link href={project.links.landing} className="inline-flex items-center gap-2">
                    <ExternalLink size={15} />
                    {t("projectSite")}
                  </Link>
                ) : null}
                {project.links.github ? (
                  <Link href={project.links.github} className="inline-flex items-center gap-2">
                    <GitBranch size={15} />
                    {t("sourceRepo")}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-16 md:grid-cols-[0.82fr_1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#6b736e]">{t("problem")}</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl">{project.problem}</h2>
        </div>
        <div className="rounded-[8px] border border-[#101211]/10 bg-white p-7">
          <p className="text-lg font-semibold leading-8 text-[#39413d]">{project.solution}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-x">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#6b736e]">{t("productPreview")}</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl">{t("previewTitle")}</h2>
            </div>
            <span className="max-w-sm text-sm leading-6 text-[#626a65]">
              {t("previewDescription")}
            </span>
          </div>
          <div className="rounded-[8px] border border-[#101211]/10 bg-[#f6f7f4] p-4">
            {project.media.screenshots?.length ? (
              <div className="grid gap-4 md:grid-cols-3">
                {project.media.screenshots.map((screenshot, index) => (
                  <figure
                    key={screenshot}
                    className="overflow-hidden rounded-[8px] border border-[#101211]/10 bg-white shadow-[0_16px_40px_rgba(16,18,17,0.08)]"
                  >
                    <div className="relative aspect-[9/16] bg-[#101211]">
                      <Image
                        src={screenshot}
                        alt={`${project.name} product screenshot ${index + 1}`}
                        fill
                        sizes="(min-width: 768px) 30vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="grid min-h-[340px] gap-4 md:grid-cols-[1fr_0.7fr]">
                <div className="grid-paper rounded-[8px] bg-[#101211] p-6 text-white">
                  <div className="flex items-center justify-between">
                    <ProjectMark label={project.brand.icon ?? project.name.slice(0, 2)} image={project.brand.iconImage} accent={accent} dark />
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-white/40">{t("preview")}</span>
                  </div>
                  <h3 className="mt-16 max-w-xl text-4xl font-black tracking-[-0.05em]">{project.tagline}</h3>
                </div>
                <div className="grid gap-3">
                  {project.category.map((category) => (
                    <div key={category} className="rounded-[8px] border border-[#101211]/10 bg-white p-4">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#7a827d]">{t("category")}</p>
                      <p className="mt-2 text-lg font-black">{category}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-16 md:grid-cols-[0.7fr_1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#6b736e]">{t("whoFor")}</p>
          <ul className="mt-6 grid gap-3">
            {project.targetUsers.map((user) => (
              <li key={user} className="rounded-[8px] border border-[#101211]/10 bg-white px-4 py-3 font-bold">
                {user}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#6b736e]">{t("features")}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <article key={feature.title} className="rounded-[8px] border border-[#101211]/10 bg-white p-5">
                <h3 className="text-lg font-black">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#606963]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101211] py-16 text-white">
        <div className="container-x grid gap-10 md:grid-cols-[0.65fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-white/42">{t("roadmap")}</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">{t("currentStatus", { status: statusLabels[project.status] })}</h2>
          </div>
          <div className="grid gap-3">
            {project.roadmap.map((item) => (
              <div key={item.label} className="grid gap-2 rounded-[8px] border border-white/12 p-5 sm:grid-cols-[90px_1fr]">
                <span className="text-sm font-black text-[#00c7d4]">{item.label}</span>
                <p className="text-sm leading-6 text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-8 rounded-[8px] border border-[#101211]/10 bg-white p-6 md:grid-cols-[0.8fr_1fr] md:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#6b736e]">{t("faqLabel")}</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">{t("faqTitle")}</h2>
          </div>
          <div className="grid gap-4">
            {[
              [t("faqLiveQ"), t("faqLiveA", { status: statusLabels[project.status] })],
              [t("faqUsersQ"), project.targetUsers.join(locale === "zh" ? "、" : ", ") + (locale === "zh" ? "。" : ".")],
              [t("faqTryQ"), project.links.webApp || project.links.appStore ? t("faqTryPrimary") : t("faqTryWaitlist")],
              [t("faqSupportQ"), t("faqSupportA", { slug: project.slug })],
              [t("faqPrivacyQ"), t("faqPrivacyA", { slug: project.slug })],
            ].map(([question, answer]) => (
              <div key={question} className="border-b border-[#101211]/10 pb-4 last:border-0 last:pb-0">
                <h3 className="font-black">{question}</h3>
                <p className="mt-2 text-sm leading-6 text-[#606963]">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
