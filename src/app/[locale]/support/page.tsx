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
  const t = await getTranslations({ locale, namespace: "Support" });
  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function SupportIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Support");
  const projects = getProjects(locale);

  return (
    <section className="container-x py-16 md:py-24">
      <h1 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">{t("title")}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f6862]">
        {t("description")}
      </p>
      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/support/${project.slug}`}
            className="rounded-[8px] border border-[#101211]/10 bg-white p-5 font-black transition hover:border-[#101211]/30"
          >
            {project.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
