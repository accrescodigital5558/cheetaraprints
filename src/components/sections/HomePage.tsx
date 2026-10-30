import Image from "next/image";
import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { FaqList } from "@/components/ui/FaqList";
import { ProblemPicker } from "@/components/sections/ProblemPicker";
import { faqs } from "@/data/faq";
import { services } from "@/data/services";

const heroLines = [
  [
    { text: "Your", accent: false },
    { text: "Printers.", accent: false },
    { text: "Working", accent: false },
    { text: "Smarter.", accent: true },
  ],
  [
    { text: "Your", accent: false },
    { text: "Business", accent: false },
    { text: "Running", accent: false },
    { text: "Better.", accent: true },
  ],
];

const facts = [
  ["Nationwide", "United States service"],
  ["Remote", "Management only"],
  ["Annual", "One invoice each year"],
  ["Named", "A service owner"],
];

const agreement = [
  ["01", "Supplies, where fulfillment is included", "Monitoring and replenishment planning are in scope. Shipment is included only when the agreement names the supplier, coverage, and delivery duty."],
  ["02", "Break-fix with a written response window", "Remote assistance follows the hours in the agreement. A window is the time to begin, not a guarantee that the device is repaired."],
  ["03", "Usage billing and reporting", "Finance reviews volume from meters or from figures you supply. The method is stated for each device."],
  ["04", "A named service owner", "One person is accountable when a device stops, instead of a queue with no owner."],
  ["05", "Ongoing fleet oversight", "The service continues through the 12-month term. The invoice is issued once."],
];

const steps = [
  ["01", "Assess", "Understand the customer's existing printer environment."],
  ["02", "Customize", "Define the fleet scope and the annual agreement."],
  ["03", "Implement", "Configure supported remote monitoring and management."],
  ["04", "Manage", "Provide ongoing oversight, reporting, and support."],
];

const terms = [
  ["Agreement term", "12 months"],
  ["Billing frequency", "Annually"],
  ["Invoices", "One per year"],
  ["Service delivery", "Continuous"],
  ["Pricing", "Customized for the fleet and services"],
];

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] bg-navy text-white">
        <Image
          src="/images/printer-detail.jpg"
          alt="Commercial printer on an office work surface"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1180px] flex-col justify-end px-5 pb-36 pt-40">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/75">Nationwide remote managed print</p>
          <h1 className="mt-5 max-w-[920px] text-[40px] leading-[0.98] tracking-[-0.045em] text-white sm:text-[48px] lg:text-[56px]">
            {heroLines.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.map((word, index) => {
                  const order = lineIndex * line.length + index;
                  return (
                    <span key={word.text} className="mr-[0.24em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                      <span className="word-up inline-block" style={{ animationDelay: `${420 + order * 55}ms` }}>
                        <span className={word.accent ? "text-green" : undefined}>{word.text}</span>
                      </span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
          <p className="fade-up mt-6 max-w-xl text-[17px] leading-7 text-white/80" style={{ animationDelay: "900ms" }}>
            Cheetara Prints helps businesses manage their printing environments through remote fleet oversight, proactive support, and predictable annual agreements.
          </p>
          <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "1040ms" }}>
            <Pill href="/request-assessment" tone="onDark" event="quote_cta_click" eventParams={{ location: "hero" }}>
              Get an Annual Quote
            </Pill>
            <Pill href="/services/managed-print-services" variant="ghost" tone="onDark" event="service_view" eventParams={{ location: "hero-secondary" }}>
              Explore Our Services
            </Pill>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-16 max-w-[1180px] px-5">
        <dl className="grid overflow-hidden rounded-[26px] border border-white/10 bg-navy text-white md:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label} className="border-white/10 px-6 py-6 md:border-l md:first:border-l-0">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-green">{label}</dt>
              <dd className="mt-2 font-heading text-2xl tracking-[-0.03em]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="mx-auto max-w-[1180px] px-5 py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">The fleet</p>
          <h2 className="mt-4 max-w-[14ch] text-[36px] leading-[1.02] tracking-[-0.035em] lg:text-[48px]">Tell us what the fleet is doing.</h2>
          <p className="mt-4 max-w-xl text-[17px] leading-7 text-muted">Choose the problem closest to yours. The response stays inside what Cheetara Prints can actually confirm.</p>
        </Reveal>
        <div className="mt-10">
          <ProblemPicker />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1180px] px-5 py-24 lg:py-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Services</p>
            <h2 className="mt-4 max-w-[14ch] text-[36px] leading-[1.02] tracking-[-0.035em] lg:text-[48px]">End-to-End Print Management.</h2>
          </Reveal>
          <div className="mt-10 grid gap-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="grid items-center gap-5 rounded-[26px] p-3 transition-colors duration-300 hover:bg-ground md:grid-cols-[220px_1fr_auto]"
              >
                <span className="relative block h-36 overflow-hidden rounded-[18px]">
                  <Image src={service.image} alt={service.imageAlt} fill sizes="220px" className="object-cover" />
                </span>
                <span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{service.meta}</span>
                  <span className="mt-2 block font-heading text-[24px] tracking-[-0.03em]">{service.title}</span>
                  <span className="mt-2 block max-w-xl text-[16px] leading-6 text-muted">{service.summary}</span>
                </span>
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-green md:inline">View</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">The agreement</p>
          <h2 className="mt-4 max-w-[16ch] text-[36px] leading-[1.02] tracking-[-0.035em] lg:text-[48px]">What sits in the agreement.</h2>
          <p className="mt-5 max-w-2xl text-[20px] leading-8 tracking-[-0.02em] text-ink">
            A managed print program is not a toner club. It is an operating contract for the machines people already use.
          </p>
        </Reveal>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {agreement.map(([number, title, body]) => (
            <li key={number} className="grid gap-4 py-8 md:grid-cols-[4rem_1fr] md:gap-8">
              <span className="font-mono text-[12px] tracking-[0.16em] text-green">{number}</span>
              <div>
                <h3 className="font-heading text-2xl tracking-[-0.03em]">{title}</h3>
                <p className="mt-2 max-w-2xl text-[17px] leading-7 text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Commercial model</p>
            <h2 className="mt-4 max-w-[12ch] text-[36px] leading-[1.02] tracking-[-0.035em] lg:text-[48px]">One Annual Payment. A Full Year of Management.</h2>
            <p className="mt-5 max-w-xl text-[17px] leading-7 text-muted">
              The service runs continuously for the term. The standard contract is invoiced once. There is no monthly subscription price on this site.
            </p>
          </Reveal>
          <dl className="overflow-hidden rounded-[26px] border border-line bg-ground">
            {terms.map(([label, value]) => (
              <div key={label} className="grid gap-1 border-b border-line px-6 py-5 last:border-b-0 sm:grid-cols-[1fr_1fr] sm:items-baseline">
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{label}</dt>
                <dd className="font-heading text-xl tracking-[-0.03em]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Fit</p>
          <h2 className="mt-4 max-w-[20ch] text-[32px] leading-[1.08] tracking-[-0.035em] lg:text-[44px]">
            You have more than a couple of devices, toner shows up as a surprise, and nobody owns the fleet. We count first, then quote an annual figure.
          </h2>
        </Reveal>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4">
          <span className="absolute left-0 right-0 top-5 hidden h-px bg-line md:block" aria-hidden="true" />
          {steps.map(([number, title, body]) => (
            <li key={number} className="relative">
              <span className="relative z-10 grid size-10 place-items-center rounded-full border border-line bg-ground font-mono text-[11px] text-green">{number}</span>
              <h3 className="mt-5 font-heading text-2xl tracking-[-0.03em]">{title}</h3>
              <p className="mt-2 text-[16px] leading-6 text-muted">{body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Link href="/how-it-works" className="font-medium text-navy underline decoration-green underline-offset-4">
            See how an agreement is built
          </Link>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 py-24 lg:grid-cols-[1fr_0.9fr] lg:py-32">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-green">Coverage</p>
            <h2 className="mt-4 max-w-[14ch] text-[36px] leading-[1.02] tracking-[-0.035em] lg:text-[48px]">Remote management across the United States.</h2>
            <p className="mt-5 max-w-xl text-[17px] leading-7 text-white/75">
              Cheetara Prints works from a distance for offices anywhere in the country. The service does not include a nationwide roster of field technicians.
            </p>
            <ul className="mt-8 space-y-3 text-[16px] text-white/80">
              <li>Configuration, queues, and supported device readings handled remotely.</li>
              <li>Physical repair discussed only when the agreement includes it.</li>
              <li>One owner for the account, regardless of how many offices are in scope.</li>
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-[26px]">
            <Image src="/images/office-work.jpg" alt="Commercial office interior served remotely" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Questions</p>
          <h2 className="mt-4 max-w-[12ch] text-[36px] leading-[1.02] tracking-[-0.035em] lg:text-[48px]">Good to know first.</h2>
        </Reveal>
        <div className="mt-8">
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-6 px-5 py-24 lg:py-28">
          <h2 className="max-w-[14ch] text-[36px] leading-[1.02] tracking-[-0.035em] lg:text-[52px]">Let&apos;s Build Your Custom Annual Agreement.</h2>
          <p className="max-w-xl text-[18px] leading-7 text-muted">Get reliable, predictable, and professional managed print services from Cheetara Prints.</p>
          <Pill href="/request-assessment" event="quote_cta_click" eventParams={{ location: "closing" }}>
            Get an Annual Quote
          </Pill>
        </div>
      </section>
    </>
  );
}
