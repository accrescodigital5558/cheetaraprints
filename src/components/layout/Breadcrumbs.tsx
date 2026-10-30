import Link from "next/link";
import { JsonLd } from "@/components/layout/JsonLd";
import { site } from "@/config/site";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };

  return (
    <>
      <JsonLd data={data} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1180px] px-5 pt-6">
        <ol className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {index === items.length - 1 ? (
                <span className="text-ink">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-ink">{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
