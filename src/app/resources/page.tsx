import Link from "next/link";
import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { guides } from "@/data/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Resources",
  "Guides on managed print services, fleet management, remote monitoring, and annual agreements.",
  "/resources",
);

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practical notes on managed print."
        lede="Short guides for operators and finance teams. They describe the model Cheetara Prints actually sells."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]} />
      <ul className="mx-auto grid max-w-[1180px] gap-4 px-5 py-16 md:grid-cols-2 lg:py-20">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/resources/${guide.slug}`} className="block h-full rounded-[26px] border border-line bg-paper p-7 transition-colors duration-300 hover:bg-ground">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-green">{guide.eyebrow}</p>
              <h2 className="mt-3 font-heading text-2xl tracking-[-0.03em]">{guide.title}</h2>
              <p className="mt-3 text-[16px] leading-6 text-muted">{guide.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
