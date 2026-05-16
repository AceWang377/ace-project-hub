import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProjects } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal" });
  return {
    title: t("termsTitle"),
    description: t("termsDescription"),
  };
}

export default async function TermsIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Legal");
  const projects = getProjects(locale);

  return (
    <section className="container-x py-16 md:py-24">
      <h1 className="text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">{t("termsTitle")}</h1>
      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/legal/terms/${project.slug}`}
            className="rounded-[8px] border border-[#101211]/10 bg-white p-5 font-black transition hover:border-[#101211]/30"
          >
            {project.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
