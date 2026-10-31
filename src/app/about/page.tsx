import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About",
  "CHEETARA PRINTS, LLC provides on-site and remote managed print services under annual agreements.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Your printers. Our responsibility."
        lede="Cheetara Prints provides on-site and remote managed print services. The work is fleet oversight, supplies, and technical support, not a retail counter."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <article className="mx-auto max-w-[800px] space-y-6 px-5 py-16 text-[17px] leading-8 text-muted lg:py-20">
        <h2 id="why-cheetara" className="font-heading text-[32px] tracking-[-0.03em] text-ink">Why Cheetara</h2>
        <p>
          Businesses already own the printers. What they often lack is a single owner for supplies planning, usage reporting, and the moment a device stops. Cheetara Prints takes that operating work under a 12-month agreement with one annual invoice.
        </p>
        <p>
          Service is delivered on site and remotely, as the agreement sets. A response, when one is written into an agreement, is a commitment to begin work. It is not a promise that every fault is repaired on site, and this page does not publish a service territory.
        </p>
        <h2 className="font-heading text-[32px] tracking-[-0.03em] text-ink">Legal entity</h2>
        <p>
          The operating company is {site.legalName}, a New York domestic limited liability company. The details supplied for this website are DOS ID {site.dosId}, an initial filing date of {site.filingDate}, {site.county} County, and an active status with a current statement. Confirm that record with the New York Department of State before production publication. This page does not publish a street address because one has not been approved for the site.
        </p>
        <p>
          The wordmark used here is a temporary typographic treatment. It is not an approved trademark.
        </p>
      </article>
    </>
  );
}
