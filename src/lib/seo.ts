import type { Metadata } from "next";
import { site } from "@/config/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  extras?: { robots?: Metadata["robots"] },
): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: extras?.robots,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
  };
}
