import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { industries } from "@/data/industries";
import { guides } from "@/data/resources";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/how-it-works",
    "/contact",
    "/request-assessment",
    "/resources",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    ...services.map((service) => service.href),
    ...solutions.map((solution) => solution.href),
    ...industries.map((industry) => industry.href),
    ...guides.map((guide) => `/resources/${guide.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: "2026-10-31",
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
