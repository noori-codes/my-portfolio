import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

function parseDay(isoDay: string): Date {
  return new Date(`${isoDay}T00:00:00.000Z`);
}

/** Stable date from project year (end of year) — not rebuild time. */
function dateFromYear(year: string): Date {
  const y = Number(year);
  if (!Number.isFinite(y)) return parseDay(site.contentUpdated);
  return new Date(Date.UTC(y, 11, 31));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.contact.portfolio;
  const siteUpdated = parseDay(site.contentUpdated);

  const staticRoutes = ["", "/work", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: siteUpdated,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = site.projects.map((project) => {
    const fromYear = dateFromYear(project.year);
    // Prefer year-end for older work; never emit a date after site contentUpdated.
    const lastModified =
      fromYear.getTime() > siteUpdated.getTime() ? siteUpdated : fromYear;

    return {
      url: `${base}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.75 : 0.65,
    };
  });

  return [...staticRoutes, ...projectRoutes];
}
