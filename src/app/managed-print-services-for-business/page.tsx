import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Pill } from "@/components/ui/Pill";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { FaqList } from "@/components/ui/FaqList";
import { site, telHref } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Managed Print Services for Business",
  "Managed print for business offices: fleet oversight, supplies planning, support, and one annual invoice. Request a quote from CHEETARA PRINTS, LLC.",
  "/managed-print-services-for-business",
  { robots: { index: false, follow: true } },
);

const facts = [
  ["12 months", "Standard agreement term"],
  ["One invoice", "Billed once for the year"],
  ["Named owner", "One person on the ticket"],
  [site.phone || "Call the desk", "Direct line"],
];

const included = [
  "Oversight of the printers named in the agreement",
  "Supply monitoring and replenishment planning",
  "Usage reporting from meters, or from figures your team supplies",
  "Technical support during the hours written in the agreement",
  "A named service owner for the account",
  "One invoice for the 12-month term",
];

const excluded = [
  "A published nationwide on-site territory",
  "A response-time or first-visit repair guarantee on this page",
  "Manufacturer warranty work unless a signed agreement says so",
  "Parts, toner shipment, or visits the agreement does not name",
  "A package price, monthly plan, or toner club",
];

const agreement = [
  ["01", "Fleet oversight", "We keep a working picture of the devices the business already uses. Where a meter can be read, we use it. Where it cannot, we use the figures your team supplies. Devices that cannot be monitored are marked as reported, not presented as live."],
  ["02", "Supplies planning", "Monitoring and replenishment planning sit in the public service. Shipment is included only when the signed agreement names the supplier, the coverage, and who delivers."],
  ["03", "Support hours", "Troubleshooting, configuration, and connectivity follow the hours in the agreement. A response window is the time to begin work — not a promise that every fault is repaired in that window."],
  ["04", "On-site work", "Assessment, installation, maintenance, and physical repair are scheduled only for the locations and tasks the agreement names. Remote diagnosis is not the same as a visit."],
  ["05", "Reporting", "Reports are prepared so operations and finance can see volume and exceptions. That is the brief, not a customer portal on this website."],
  ["06", "A named owner", "Each agreement names a person for the account. When a queue stops, there is someone to call instead of a hallway with no owner."],
];

const quoteNeeds = [
  ["Company and desk", "Legal name, a business email, and a telephone that reaches the person who owns print."],
  ["Locations", "One office or several. The quote lists sites so finance can see the whole fleet."],
  ["Device count", "A range is enough to start. Exact models help, and are not required on the first form."],
  ["How usage is read", "Whether meters can be pulled, or whether your team will send figures on a schedule."],
  ["On-site vs remote", "Which problems you expect to handle from a distance, and which sites may need a visit."],
];

const yearRun = [
  ["A ticket comes in", "The named owner takes it. Faults that are a driver, a queue, a setting, or a connection are handled remotely when the device allows it."],
  ["A visit is needed", "If the fault needs a part or a person at the machine, it is identified as on-site work and scheduled only if the agreement includes that task and that site."],
  ["Supplies run low", "Planning is based on consumption, not a surprise retail run. Shipment follows only the fulfillment terms in the signed document."],
  ["The year turns", "Service is continuous through the term. The standard bill is one invoice. Renewal is a review of scope, not an automatic catalog dump."],
];

const floors = [
  { src: "/images/printer-detail.jpg", alt: "Office printer on a work surface", caption: "The machines already on the floor. We do not start from a catalog." },
  { src: "/images/office-work.jpg", alt: "Commercial office interior", caption: "Offices that print every day and still have no owner for the fleet." },
  { src: "/images/meeting.jpg", alt: "Conference room used for operations planning", caption: "Scope is written with operations, then signed. The website is not the contract." },
  { src: "/images/documents.jpg", alt: "Printed documents reviewed at a desk", caption: "Usage and exceptions, briefed in language finance can read." },
];

const audiences = [
  ["A fit", "U.S. businesses that already own printers — a small office, several departments, or more than one site. The form asks for a device range so we can see the size of the job."],
  ["Not a fit", "Household printers, a walk-up retail counter, or a request for manufacturer warranty work. We are an independent managed print provider, not an authorized service center unless a later agreement says otherwise."],
];

const faqs = [
  {
    question: "What do you need to quote?",
    answer: site.phone
      ? `Company name, a business email, a telephone, how many locations, and a rough device count. Page volume helps if you have it. Call ${site.phone} if you would rather talk it through.`
      : "Company name, a business email, a telephone, how many locations, and a rough device count. Page volume helps if you have it.",
  },
  {
    question: "Do we have to replace every printer?",
    answer: "No. We count what you have, keep what still earns its keep, and put a date on units that cost more than they print. Brand coverage is confirmed in the assessment. This page does not publish a compatibility list.",
  },
  {
    question: "How is the price set?",
    answer: "The annual figure is written for printer count, usage, locations, and the services you select. There is no package rate and no monthly subscription on this page.",
  },
  {
    question: "Are supplies included?",
    answer: "Supply monitoring and replenishment planning can be part of the agreement. Shipment is described only when that agreement names a fulfillment arrangement, coverage, and delivery responsibility.",
  },
  {
    question: "Can you cover more than one site?",
    answer: "Yes. Remote oversight can cover locations that are not on a fixed visit route. An on-site visit is arranged only for the sites the agreement names. This site does not publish a nationwide on-site territory.",
  },
  {
    question: "Is this manufacturer support?",
    answer: `${site.legalName} is an independent managed print provider. We are not an authorized service center unless a signed agreement says otherwise. Printer brand names on forms only identify equipment you already own.`,
  },
  {
    question: "Who is advertising?",
    answer: `${site.legalName}, a New York limited liability company (DOS ID ${site.dosId}). Google does not endorse this company. Landing pages are marketing. They are not a signed agreement.`,
  },
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
              {site.legalName} manages the fleet, plans supplies, and owns the ticket. Count first. Then we quote the year. This page is a request for a written figure, not an offer that has been accepted.
            </p>
            {site.phone ? (
              <TrackedLink
                href={telHref(site.phone)}
                event="phone_click"
                external
                className="mt-5 inline-flex flex-col rounded-2xl border border-white/20 bg-white/10 px-5 py-4"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-green">Call</span>
                <span className="mt-1 font-heading text-[22px] tracking-[-0.03em] text-white sm:text-[28px]">{site.phone}</span>
              </TrackedLink>
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
            <p className="mt-2 text-[14px] leading-6 text-muted">Three short steps. No brand list required on the first pass.</p>
            {site.phone ? (
              <p className="mt-3 text-[15px] leading-6 text-ink">
                Or call{" "}
                <TrackedLink href={telHref(site.phone)} event="phone_click" external className="font-heading underline decoration-green underline-offset-4">
                  {site.phone}
                </TrackedLink>
              </p>
            ) : null}
            <div className="mt-5">
              <Suspense fallback={<p className="text-muted">Loading the form.</p>}>
                <AssessmentForm variant="lp" presetService="Managed Print Services" />
              </Suspense>
            </div>
          </div>
        </div>
        {site.phone ? (
          <div className="relative border-t border-white/15 bg-navy/85">
            <div className="mx-auto flex max-w-[1180px] flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">Direct line · Tap to call</p>
              <TrackedLink href={telHref(site.phone)} event="phone_click" external className="font-heading text-[22px] tracking-[-0.03em] text-white sm:text-[24px]">
                {site.phone}
              </TrackedLink>
            </div>
          </div>
        ) : null}
      </section>

      <section className="bg-navy text-white" aria-label="Operating facts">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
          {facts.map(([value, label]) => (
            <div key={label} className="bg-navy px-5 py-5">
              <p className="font-heading text-[20px] tracking-[-0.03em]">{value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-green">{label}</p>
            </div>
          ))}
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
              Most offices buy hardware once, then treat supplies and break-fix as separate emergencies. Finance cannot brief a cost per page. Someone walks to retail for a cartridge. When a queue stops mid-deadline, the hallway owns the problem.
            </p>
            <p className="mt-4 text-[17px] leading-7 text-muted">
              Managed print puts fleet oversight, planning, and support under one 12-month agreement. You keep the printers that still earn their keep. We take the operating work.
            </p>
            <ul className="mt-6 space-y-2 text-[16px] text-ink">
              <li>Cost per page nobody can brief to finance</li>
              <li>Cartridges bought late, at retail prices</li>
              <li>No owner when a queue stops mid-deadline</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-16 lg:grid-cols-2 lg:py-20">
          {audiences.map(([title, body]) => (
            <article key={title} className="rounded-[26px] border border-line bg-ground p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{title}</p>
              <p className="mt-4 text-[17px] leading-7 text-ink">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">The agreement</p>
        <h2 className="mt-3 max-w-[18ch] font-heading text-[32px] leading-[1.08] tracking-[-0.035em] lg:text-[40px]">What sits in a typical year.</h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-7 text-muted">
          A managed print program is not a toner club and it is not a printer store. It is an operating contract for the machines people already use.
        </p>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {agreement.map(([number, title, body]) => (
            <li key={number} className="grid gap-4 py-7 md:grid-cols-[4rem_1fr] md:gap-8">
              <span className="font-mono text-[12px] tracking-[0.16em] text-green">{number}</span>
              <div>
                <h3 className="font-heading text-2xl tracking-[-0.03em]">{title}</h3>
                <p className="mt-2 max-w-2xl text-[17px] leading-7 text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="included" className="scroll-mt-28 bg-paper">
        <div className="mx-auto max-w-[1180px] px-5 py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">What you get</p>
              <h2 className="mt-3 font-heading text-[32px] leading-[1.08] tracking-[-0.035em] lg:text-[40px]">Written in, and left off this page.</h2>
              <p className="mt-4 text-[17px] leading-7 text-muted">
                Scope, price, support hours, visits, parts, and supply shipment exist only in a signed 12-month agreement or a written quotation you accept. The lists below describe a typical year. They are not a performance guarantee.
              </p>
            </div>
            <div className="grid gap-4">
              <article className="rounded-[22px] border border-line bg-ground p-6">
                <h3 className="font-heading text-xl tracking-[-0.03em]">Usually in the agreement</h3>
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
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">The quote</p>
        <h2 className="mt-3 max-w-[18ch] font-heading text-[32px] tracking-[-0.035em] lg:text-[40px]">What we need before we send a figure.</h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-7 text-muted">
          The form at the top is enough to start. We do not quote from a catalog. After the count, you get a written annual figure for the fleet and the services you asked for — or a call to {site.phone || "the desk"} if something is missing.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {quoteNeeds.map(([title, body], index) => (
            <li key={title} className="rounded-[22px] border border-line bg-paper p-6">
              <span className="font-mono text-[12px] text-green">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-heading text-xl tracking-[-0.03em]">{title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1180px] px-5 py-16 lg:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">The floors</p>
          <h2 className="mt-3 max-w-[16ch] font-heading text-[32px] tracking-[-0.035em] lg:text-[40px]">The work is the devices already in the building.</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {floors.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-[22px] bg-ground">
                <div className="relative h-52">
                  <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <figcaption className="px-4 py-3 text-[13px] leading-5 text-muted">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
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
            <p className="mt-4 text-[16px] leading-7 text-white/75">
              No software pitch. A written plan for the machines in the building, then a schedule for the ones that should not be.
            </p>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                ["01", "Assess", "Count devices, locations, and how usage can be read. Mark what cannot be monitored."],
                ["02", "Define", "Write the 12-month scope, the sites, the hours, and the annual price."],
                ["03", "Implement", "Coordinate the remote and on-site setup the agreement names."],
                ["04", "Manage", "Run the fleet through the term on one invoice, with a named owner."],
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

      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Through the year</p>
        <h2 className="mt-3 max-w-[16ch] font-heading text-[32px] tracking-[-0.035em] lg:text-[40px]">How a ticket actually moves.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {yearRun.map(([title, body]) => (
            <article key={title} className="border-t border-line pt-5">
              <h3 className="font-heading text-xl tracking-[-0.03em]">{title}</h3>
              <p className="mt-2 text-[16px] leading-7 text-muted">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1180px] items-start gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Who is quoting</p>
            <h2 className="mt-3 font-heading text-[32px] tracking-[-0.035em] lg:text-[40px]">{site.legalName}</h2>
            <p className="mt-4 text-[17px] leading-7 text-muted">
              A New York domestic limited liability company, DOS ID {site.dosId}, {site.county} County. Independent managed print — not a manufacturer storefront and not a monthly toner club.
            </p>
            <p className="mt-4 text-[17px] leading-7 text-muted">
              Paid ads, including Google Ads, are placements for this company. They do not mean Google endorses the work. If a page and a later signed agreement differ, the agreement controls.
            </p>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-[22px] bg-line text-ink">
            {[
              ["Agreement term", "12 months"],
              ["Billing", "One invoice each year"],
              ["Service", "Continuous through the term"],
              ["Pricing", "Written for the fleet, not a package"],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-[8rem_1fr] gap-4 bg-ground px-5 py-4 sm:grid-cols-[10rem_1fr]">
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{label}</dt>
                <dd className="font-heading text-[18px] tracking-[-0.03em]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-5 py-16 lg:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Before you send</p>
        <h2 className="mt-3 font-heading text-[32px] tracking-[-0.035em]">Questions people actually ask.</h2>
        <div className="mt-8">
          <FaqList items={faqs} />
        </div>
        <p className="mt-10 text-[15px] leading-7 text-muted">
          Also see{" "}
          <Link href="/privacy-policy" className="underline decoration-green underline-offset-4">Privacy</Link>,{" "}
          <Link href="/terms-of-service" className="underline decoration-green underline-offset-4">Terms</Link>,{" "}
          <Link href="/cookie-policy" className="underline decoration-green underline-offset-4">Cookies</Link>, and the{" "}
          <Link href="/disclaimer" className="underline decoration-green underline-offset-4">Disclaimer</Link>.
        </p>
      </section>

      <section className="scroll-mt-28 bg-navy text-white">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between lg:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-green">Call or quote</p>
            <h2 className="mt-3 font-heading text-[32px] tracking-[-0.035em]">{site.phone || "Request a quote"}</h2>
            <p className="mt-3 max-w-xl text-[16px] leading-7 text-white/75">
              Tell us the sites and a device count. We send a written annual figure. Advertiser: {site.legalName}. See the{" "}
              <Link href="/disclaimer" className="underline decoration-green underline-offset-4">
                disclaimer
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {site.phone ? (
              <TrackedLink
                href={telHref(site.phone)}
                event="phone_click"
                external
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-[15px] font-medium text-navy"
              >
                Call now
              </TrackedLink>
            ) : null}
            <Pill href="#quote" variant="ghost" tone="onDark" event="quote_cta_click" eventParams={{ location: "ads-bottom" }}>
              Back to the form
            </Pill>
          </div>
        </div>
      </section>
    </>
  );
}
