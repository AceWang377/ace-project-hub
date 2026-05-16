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
    title: project ? t("privacyPolicyTitle", { name: project.name }) : t("privacyTitle"),
    description: project ? `Privacy policy for ${project.name}.` : t("privacyDescription"),
  };
}

export default async function PrivacyPage({
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
    <PolicyShell title={t("privacyPolicyTitle", { name: project.name })} updatedLabel={t("lastUpdated", { date: "2026-05-15" })}>
      <h2>{t("privacy.dataTitle")}</h2>
      <p>{t("privacy.dataBody")}</p>
      <h2>{t("privacy.useTitle")}</h2>
      <p>{t("privacy.useBody")}</p>
      <h2>{t("privacy.servicesTitle")}</h2>
      <p>{t("privacy.servicesBody")}</p>
      <h2>{t("privacy.analyticsTitle")}</h2>
      <p>{t("privacy.analyticsBody")}</p>
      <h2>{t("privacy.rightsTitle")}</h2>
      <p>{t("privacy.rightsBody", { email: siteConfig.supportEmail })}</p>
      <h2>{t("privacy.changesTitle")}</h2>
      <p>{t("privacy.changesBody")}</p>
    </PolicyShell>
  );
}

function PolicyShell({
  title,
  updatedLabel,
  children,
}: {
  title: string;
  updatedLabel: string;
  children: React.ReactNode;
}) {
  return (
    <article className="container-x max-w-3xl py-16 md:py-24">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">
        {updatedLabel}
      </p>
      <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl">{title}</h1>
      <div className="mt-10 grid gap-6 text-base leading-7 text-[#4f5853] [&_h2]:mt-4 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:tracking-[-0.03em] [&_h2]:text-[#101211]">
        {children}
      </div>
    </article>
  );
}
