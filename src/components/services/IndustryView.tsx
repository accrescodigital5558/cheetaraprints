import Image from "next/image";
import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import type { IndustryPage } from "@/data/industries";

export function IndustryView({ industry }: { industry: IndustryPage }) {
  return (
    <>
      <PageHero eyebrow="Industries" title={industry.title} lede={industry.lede} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries/corporate-offices" },
          { name: industry.title, path: industry.href },
        ]}
      />
      <section className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-green">Managed print</p>
          <div className="mt-5 space-y-4 text-[18px] leading-8">
            {industry.help.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="relative h-72 overflow-hidden rounded-[26px] lg:h-[420px]">
          <Image src={industry.image} alt={industry.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
      </section>
      <section className="bg-paper">
        <div className="mx-auto max-w-[1180px] px-5 py-16 lg:py-24">
          <h2 className="max-w-[18ch] text-[32px] tracking-[-0.035em] lg:text-[40px]">Workflow challenges</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {industry.challenges.map((item, index) => (
              <article key={item.title} className="rounded-[26px] border border-line p-6">
                <p className="font-mono text-[11px] text-green">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-[16px] leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <h2 className="text-[32px] tracking-[-0.035em] lg:text-[40px]">Fleet management</h2>
        <div className="grid gap-6">
          {industry.fleet.map((item) => (
            <article key={item.title} className="border-t border-line pt-5">
              <h3 className="text-xl tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-2 text-[17px] leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1180px] gap-6 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <h2 className="text-[32px] tracking-[-0.035em] lg:text-[40px]">Remote support</h2>
          <div className="space-y-4 text-[17px] leading-7 text-muted">
            {industry.remote.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:py-24">
        <h2 className="max-w-[16ch] text-[32px] tracking-[-0.035em] lg:text-[40px]">The annual agreement</h2>
        <ol className="mt-10 grid gap-4">
          {industry.agreement.map((item, index) => (
            <li key={item.title} className="grid gap-3 rounded-[26px] border border-line bg-paper p-6 sm:grid-cols-[4rem_1fr] sm:items-start">
              <span className="font-mono text-[12px] tracking-[0.14em] text-green">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-2 text-[16px] leading-7 text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Pill href="/request-assessment" event="quote_cta_click" eventParams={{ location: industry.slug }}>
            Request an Annual Quote
          </Pill>
        </div>
      </section>
    </>
  );
}
