import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { routing } from "@/i18n/routing";
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

  const routes = [...staticRoutes, ...projectRoutes];

  return routes.flatMap((route) =>
    routing.locales.map((locale) => {
      const localizedRoute = locale === routing.defaultLocale ? route || "/" : `/zh${route || ""}`;

      return {
        url: absoluteUrl(localizedRoute),
        lastModified: new Date("2026-05-16"),
        changeFrequency: route.includes("/legal/") ? "monthly" : "weekly",
        priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7,
      } satisfies MetadataRoute.Sitemap[number];
    }),
  );
}
