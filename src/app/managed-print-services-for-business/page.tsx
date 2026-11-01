import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Pill } from "@/components/ui/Pill";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { site, telHref } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Managed Print Services for Business",
  "Managed print for business offices: fleet oversight, supplies planning, support, and one annual invoice. Request a quote from CHEETARA PRINTS, LLC.",
  "/managed-print-services-for-business",
  { robots: { index: false, follow: true } },
);

const included = [
  "Fleet oversight for the devices named in the agreement",
  "Supply monitoring and replenishment planning",
  "Usage reporting from meters or figures you supply",
  "Technical support during the hours written in the agreement",
  "A named service owner",
  "One invoice for the 12-month term",
];

const excluded = [
  "A published nationwide on-site territory",
  "A response-time guarantee on this page",
  "Manufacturer warranty work unless the agreement says so",
  "Parts, toner shipment, or visits that the agreement does not name",
];

const gallery = [
  { src: "/images/printer-detail.jpg", alt: "Office printer on a work surface" },
  { src: "/images/office-work.jpg", alt: "Commercial office interior" },
  { src: "/images/meeting.jpg", alt: "Conference room used for operations planning" },
  { src: "/images/documents.jpg", alt: "Printed documents reviewed at a desk" },
];

export default function ManagedPrintAdsPage() {
  return (
    <>
      <section id="quote" className="relative scroll-mt-28 overflow-hidden bg-navy text-white">
        <Image src="/images/printer-detail.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative mx-auto grid max-w-[1180px] items-start gap-10 px-5 pb-12 pt-28 sm:pb-16 sm:pt-32 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26.5rem)] lg:pt-36">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-green">Managed print for business</p>
            <h1 className="mt-3 max-w-[16ch] text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.04em]">
              One annual agreement for the printers you already run.
            </h1>
            <p className="mt-3 max-w-xl text-[16px] leading-7 text-white/80">
              CHEETARA PRINTS, LLC manages the fleet, plans supplies, and owns the ticket. Count first. Then we quote the year.
            </p>
            {site.phone ? (
              <p className="mt-5">
                <TrackedLink href={telHref(site.phone)} event="phone_click" external className="font-heading text-[22px] tracking-[-0.03em] text-white sm:text-[26px]">
                  {site.phone}
                </TrackedLink>
              </p>
            ) : null}
            <ul className="mt-6 space-y-2 text-[15px] leading-6 text-white/85">
              <li>Inventory first — then an annual figure</li>
              <li>Supplies planned to real meters</li>
              <li>A named owner when a device stops</li>
            </ul>
            <div className="mt-6">
              <Pill href="#included" variant="ghost" tone="onDark" event="service_view" eventParams={{ location: "ads-hero" }}>
                What is included
              </Pill>
            </div>
          </div>
          <div className="rounded-[26px] border border-white/10 bg-paper p-5 text-ink shadow-[0_24px_60px_rgba(16,36,58,0.28)] sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Request a quote</p>
            <h2 className="mt-2 font-heading text-[22px] leading-[1.15] tracking-[-0.03em]">Tell us about the fleet.</h2>
            <p className="mt-2 text-[14px] leading-6 text-muted">Three short steps. This is a request, not an accepted offer.</p>
            <div className="mt-5">
              <Suspense fallback={<p className="text-muted">Loading the form.</p>}>
                <AssessmentForm variant="lp" presetService="Managed Print Services" />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-[26px] sm:h-96">
            <Image src="/images/office-work.jpg" alt="Office floors that still need a named print owner" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">The problem</p>
            <h2 className="mt-3 font-heading text-[32px] leading-[1.08] tracking-[-0.035em] lg:text-[40px]">Idle machines, surprise toner, nobody on the ticket.</h2>
            <p className="mt-4 text-[17px] leading-7 text-muted">
              Most offices buy hardware once, then treat supplies and break-fix as separate emergencies. Managed print puts fleet oversight, planning, and support under one 12-month agreement.
            </p>
            <ul className="mt-6 space-y-2 text-[16px] text-ink">
              <li>Cost per page nobody can brief to finance</li>
              <li>Cartridges bought late, at retail prices</li>
              <li>No owner when a queue stops mid-deadline</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="included" className="scroll-mt-28 bg-paper">
        <div className="mx-auto max-w-[1180px] px-5 py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">What you get</p>
              <h2 className="mt-3 font-heading text-[32px] leading-[1.08] tracking-[-0.035em] lg:text-[40px]">What a typical agreement covers</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="rounded-[22px] border border-line bg-ground p-6">
                  <h3 className="font-heading text-xl tracking-[-0.03em]">Included</h3>
                  <ul className="mt-4 space-y-2 text-[15px] leading-6 text-muted">
                    {included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-[22px] border border-line bg-ground p-6">
                  <h3 className="font-heading text-xl tracking-[-0.03em]">Not claimed here</h3>
                  <ul className="mt-4 space-y-2 text-[15px] leading-6 text-muted">
                    {excluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
            <div className="relative order-1 h-72 overflow-hidden rounded-[26px] sm:h-96 lg:order-2">
              <Image src="/images/meeting.jpg" alt="Team reviewing a print operating agreement" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">The floors</p>
        <h2 className="mt-3 max-w-[16ch] font-heading text-[32px] tracking-[-0.035em] lg:text-[40px]">The work is the devices already in the building.</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((image) => (
            <div key={image.src} className="relative h-52 overflow-hidden rounded-[22px]">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div className="relative h-72 overflow-hidden rounded-[26px] sm:h-80">
            <Image src="/images/documents.jpg" alt="Usage reports and printed work in an office" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-green">Method</p>
            <h2 className="mt-3 font-heading text-[32px] tracking-[-0.035em] lg:text-[40px]">Assess, define, implement, manage.</h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                ["01", "Assess", "Count devices, locations, and how usage can be read."],
                ["02", "Define", "Write the 12-month scope and the annual price."],
                ["03", "Implement", "Coordinate the setup the agreement names."],
                ["04", "Manage", "Run the fleet through the term on one invoice."],
              ].map(([n, t, b]) => (
                <li key={n}>
                  <span className="font-mono text-[12px] text-green">{n}</span>
                  <h3 className="mt-2 font-heading text-xl tracking-[-0.03em]">{t}</h3>
                  <p className="mt-1 text-[15px] leading-6 text-white/75">{b}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 bg-paper">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-5 px-5 py-16 sm:flex-row sm:items-center sm:justify-between lg:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Annual quote</p>
            <h2 className="mt-3 font-heading text-[32px] tracking-[-0.035em]">Prefer to send it from here?</h2>
            <p className="mt-3 max-w-xl text-[16px] leading-7 text-muted">
              The form is at the top of this page. The quote is customized after we count devices. Advertiser: {site.legalName}. See the{" "}
              <Link href="/disclaimer" className="underline decoration-green underline-offset-4">
                disclaimer
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Pill href="#quote" event="quote_cta_click" eventParams={{ location: "ads-bottom" }}>
              Back to the form
            </Pill>
            {site.phone ? (
              <TrackedLink href={telHref(site.phone)} event="phone_click" external className="font-heading text-[20px] tracking-[-0.03em] text-navy">
                {site.phone}
              </TrackedLink>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-5 py-16 lg:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Before you send</p>
        <h2 className="mt-3 font-heading text-[32px] tracking-[-0.035em]">Common questions</h2>
        <dl className="mt-8 space-y-6 text-[17px] leading-8">
          <div>
            <dt className="font-heading text-xl tracking-[-0.03em]">Is this manufacturer support?</dt>
            <dd className="mt-2 text-muted">No. {site.legalName} is an independent managed print provider. We are not an authorized service center unless a signed agreement says otherwise.</dd>
          </div>
          <div>
            <dt className="font-heading text-xl tracking-[-0.03em]">Is there a monthly plan?</dt>
            <dd className="mt-2 text-muted">No. The standard agreement is 12 months, invoiced once. There is no package price on this page.</dd>
          </div>
          <div>
            <dt className="font-heading text-xl tracking-[-0.03em]">Who is advertising?</dt>
            <dd className="mt-2 text-muted">{site.legalName}, a New York limited liability company. Google does not endorse this company.</dd>
          </div>
        </dl>
        <p className="mt-10 text-[15px] leading-7 text-muted">
          Also see{" "}
          <Link href="/privacy-policy" className="underline decoration-green underline-offset-4">Privacy</Link>,{" "}
          <Link href="/terms-of-service" className="underline decoration-green underline-offset-4">Terms</Link>,{" "}
          <Link href="/cookie-policy" className="underline decoration-green underline-offset-4">Cookies</Link>, and the{" "}
          <Link href="/disclaimer" className="underline decoration-green underline-offset-4">Disclaimer</Link>.
        </p>
      </section>
    </>
  );
}
