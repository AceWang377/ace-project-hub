import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/projects",
    "/about",
    "/notes",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/support",
  ];

  const projectRoutes = projects.flatMap((project) => [
    `/projects/${project.slug}`,
    `/legal/privacy/${project.slug}`,
    `/legal/terms/${project.slug}`,
    `/support/${project.slug}`,
  ]);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: new Date("2026-05-15"),
    changeFrequency: route.includes("/legal/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7,
  }));
}
