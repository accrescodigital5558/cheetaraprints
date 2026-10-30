import Image from "next/image";
import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqList } from "@/components/ui/FaqList";
import { Pill } from "@/components/ui/Pill";
import { TrackView } from "@/components/layout/TrackView";
import { JsonLd } from "@/components/layout/JsonLd";
import { site } from "@/config/site";
import type { ServicePage } from "@/data/services";

export function ServiceView({ service }: { service: ServicePage }) {
  return (
    <>
      <TrackView name="service_view" detail={service.slug} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          serviceType: service.title,
          description: service.seoDescription,
          url: `${site.url}${service.href}`,
          provider: { "@type": "Organization", name: site.legalName, url: site.url },
          areaServed: "US",
        }}
      />
      <PageHero eyebrow={service.eyebrow} title={service.title} lede={service.lede} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/managed-print-services" }, { name: service.title, path: service.href }]} />
      <article className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div className="relative h-72 overflow-hidden rounded-[26px] lg:h-full lg:min-h-[420px]">
          <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="text-[20px] leading-8 tracking-[-0.02em]">{service.message}</p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {service.included.map((item) => (
              <li key={item} className="py-3 text-[16px]">{item}</li>
            ))}
          </ul>
        </div>
      </article>
      <div className="bg-paper">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 lg:py-24">
          {service.sections.map((section) => (
            <section key={section.heading} className="grid gap-4 border-t border-line pt-8 lg:grid-cols-[0.7fr_1.3fr]">
              <h2 className="text-[28px] tracking-[-0.03em]">{section.heading}</h2>
              <div className="space-y-4 text-[17px] leading-7 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:py-24">
        <h2 className="max-w-[14ch] text-[36px] tracking-[-0.035em]">Annual pricing</h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-7 text-muted">
          The standard term is 12 months with one invoice. Service continues through the year. The price is customized after the fleet and the included services are counted. This page does not list a package price.
        </p>
        <div className="mt-10">
          <h2 className="text-[28px] tracking-[-0.03em]">Questions</h2>
          <div className="mt-4">
            <FaqList items={service.faqs} />
          </div>
        </div>
        <div className="mt-10">
          <Pill href={`/request-assessment?service=${service.slug}`} event="quote_cta_click" eventParams={{ location: service.slug }}>
            Get an Annual Quote
          </Pill>
        </div>
      </section>
    </>
  );
}
