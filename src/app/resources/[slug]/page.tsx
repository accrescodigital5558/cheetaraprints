import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/layout/JsonLd";
import { guides, getGuide } from "@/data/resources";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata(guide.title, guide.description, `/resources/${guide.slug}`);
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          author: { "@type": "Organization", name: site.legalName },
          publisher: { "@type": "Organization", name: site.legalName },
          mainEntityOfPage: `${site.url}/resources/${guide.slug}`,
        }}
      />
      <PageHero eyebrow={guide.eyebrow} title={guide.title} lede={guide.description} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: guide.title, path: `/resources/${guide.slug}` },
        ]}
      />
      <article className="mx-auto max-w-[760px] space-y-5 px-5 py-16 text-[17px] leading-8 text-muted">
        {guide.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <Link href="/request-assessment" className="text-ink underline decoration-green underline-offset-4">
            Request an annual quote
          </Link>
          {" · "}
          <Link href="/services/managed-print-services" className="text-ink underline decoration-green underline-offset-4">
            Managed print services
          </Link>
        </p>
      </article>
    </>
  );
}
