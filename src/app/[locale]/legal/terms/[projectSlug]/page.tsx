import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
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
  const t = await getTranslations({ locale, namespace: "Legal" });
  const project = getProject(projectSlug, locale);
  return {
    title: project ? t("termsProjectTitle", { name: project.name }) : t("termsTitle"),
    description: project ? `Terms for ${project.name}.` : t("termsDescription"),
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string; projectSlug: string }>;
}) {
  const { locale, projectSlug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Legal");
  const project = getProject(projectSlug, locale);
  if (!project) notFound();

  return (
    <article className="container-x max-w-3xl py-16 md:py-24">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">
        {t("lastUpdated", { date: "2026-05-15" })}
      </p>
      <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl">{t("termsProjectTitle", { name: project.name })}</h1>
      <div className="mt-10 grid gap-6 text-base leading-7 text-[#4f5853] [&_h2]:mt-4 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:tracking-[-0.03em] [&_h2]:text-[#101211]">
        <h2>{t("terms.useTitle")}</h2>
        <p>{t("terms.useBody", { name: project.name })}</p>
        <h2>{t("terms.availabilityTitle")}</h2>
        <p>{t("terms.availabilityBody")}</p>
        <h2>{t("terms.feedbackTitle")}</h2>
        <p>{t("terms.feedbackBody")}</p>
        <h2>{t("terms.warrantyTitle")}</h2>
        <p>{t("terms.warrantyBody")}</p>
        <h2>{t("terms.contactTitle")}</h2>
        <p>{t("terms.contactBody", { email: siteConfig.supportEmail })}</p>
      </div>
    </article>
  );
}
