import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
    openGraph: {
      title: "Ace Projects",
      description: t("metadataDescription"),
      url: "/projects",
    },
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProjectsPage");
  const projects = getProjects(locale);

  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68716b]">{t("label")}</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl md:text-7xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5f6862]">
          {t("description")}
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
