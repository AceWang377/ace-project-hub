import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { getProject, getProjectSlugs } from "@/lib/projects";

export function generateStaticParams() {
  return ["en", "zh"].flatMap((locale) => getProjectSlugs().map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug, locale);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://acewang.top"),
    title: `${project.name} - ${project.tagline}`,
    description: project.description,
    openGraph: {
      title: `${project.name} - ${project.tagline}`,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [{ url: `/projects/${project.slug}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} - ${project.tagline}`,
      description: project.description,
      images: [`/projects/${project.slug}/opengraph-image`],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProject(slug, locale);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    applicationCategory: project.category.join(", "),
    url: `/projects/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetail project={project} />
    </>
  );
}
