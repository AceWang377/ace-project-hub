import { projects, type Project, type ProjectStatus } from "@/content/projects";

export const statusLabels: Record<ProjectStatus, string> = {
  idea: "Idea",
  building: "Building",
  in_review: "In review",
  private_beta: "Private beta",
  public_beta: "Public beta",
  live: "Live",
  paused: "Paused",
};

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getFeaturedProjects() {
  return projects.slice(0, 4);
}

export function projectUrl(project: Project) {
  return `/projects/${project.slug}`;
}
