import { localizedProjects, projects, type Project, type ProjectStatus } from "@/content/projects";
import type { Locale } from "@/i18n/routing";

export const localizedStatusLabels: Record<Locale, Record<ProjectStatus, string>> = {
  en: {
    idea: "Idea",
    building: "Building",
    unreviewed: "Unreviewed",
    in_review: "In review",
    private_beta: "Private beta",
    public_beta: "Public beta",
    live: "Live",
    paused: "Paused",
  },
  zh: {
    idea: "概念",
    building: "构建中",
    unreviewed: "待审核",
    in_review: "审核中",
    private_beta: "私测",
    public_beta: "公测",
    live: "已上线",
    paused: "暂停",
  },
};

export const statusLabels = localizedStatusLabels.en;

export function getProjects(locale: string = "en") {
  return localizedProjects[locale as Locale] ?? projects;
}

export function getStatusLabels(locale: string = "en") {
  return localizedStatusLabels[locale as Locale] ?? statusLabels;
}

export function getProject(slug: string, locale: string = "en"): Project | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getFeaturedProjects(locale: string = "en") {
  return getProjects(locale).slice(0, 4);
}

export function projectUrl(project: Project) {
  return `/projects/${project.slug}`;
}
