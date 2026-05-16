import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return ["en", "zh"].flatMap((locale) => getProjectSlugs().map((projectSlug) => ({ locale, projectSlug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; projectSlug: string }>;
}): Promise<Metadata> {
  const { locale, projectSlug } = await params;
  const project = getProject(projectSlug, locale);
  return {
    title: project ? `${project.name} ${locale === "zh" ? "支持" : "Support"}` : locale === "zh" ? "支持" : "Support",
    description: project ? `${project.name} support page.` : "Support page.",
  };
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string; projectSlug: string }>;
}) {
  const { locale, projectSlug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Support");
  const project = getProject(projectSlug, locale);
  if (!project) notFound();

  return (
    <section className="container-x grid gap-10 py-16 md:grid-cols-[0.72fr_1fr] md:py-24">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">{t("label")}</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">
          {t("projectTitle", { name: project.name })}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5f6862]">
          {t("projectDescription", { email: siteConfig.supportEmail })}
        </p>
      </div>
      <div className="grid gap-4">
        {[
          [t("commonIssues"), t("commonIssuesBody")],
          [t("bugReports"), t("bugReportsBody")],
          [t("dataDeletion"), t("dataDeletionBody", { email: siteConfig.supportEmail })],
          [t("appStore"), project.links.appStore ? t("appStoreAvailable") : t("appStoreUnavailable")],
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
          {t("contactSupport")}
        </Link>
      </div>
    </section>
  );
}
