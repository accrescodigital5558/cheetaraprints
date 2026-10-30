import Image from "next/image";
import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import type { SolutionPage } from "@/data/solutions";

export function SolutionView({ solution }: { solution: SolutionPage }) {
  return (
    <>
      <PageHero eyebrow={solution.audience} title={solution.title} lede={solution.lede} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions/small-business" }, { name: solution.title, path: solution.href }]} />
      <section className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-green">{solution.keyMessage}</p>
          <div className="mt-8 grid gap-6">
            {solution.points.map((point, index) => (
              <article key={point.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line pt-6">
                <span className="font-mono text-[12px] text-muted">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-2xl tracking-[-0.03em]">{point.title}</h2>
                  <p className="mt-2 text-[16px] leading-7 text-muted">{point.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Pill href="/request-assessment" event="quote_cta_click" eventParams={{ location: solution.slug }}>
              {solution.cta}
            </Pill>
          </div>
        </div>
        <div className="relative h-80 overflow-hidden rounded-[26px] lg:h-[520px]">
          <Image src={solution.image} alt={solution.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
      </section>
    </>
  );
}
