import Image from "next/image";
import Link from "next/link";
import { CalendarRange, MapPinned, Monitor, UserRound } from "lucide-react";
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
  ],
  [
    { text: "Our", accent: false },
    { text: "Responsibility.", accent: true },
  ],
];

const facts = [
  { label: "Service", value: "Managed print", icon: Monitor },
  { label: "Coverage", value: "On-site and remote as agreed", icon: MapPinned },
  { label: "Annual", value: "One invoice each year", icon: CalendarRange },
  { label: "Named", value: "A service owner", icon: UserRound },
];

const agreement = [
  ["01", "Managed print operations", "Fleet oversight, supplies planning, reporting, and a named owner for the printers the business already uses."],
  ["02", "Technical support under the agreement", "Troubleshooting, configuration, and connectivity follow the hours in the agreement. A window is the time to begin, not a guarantee that the device is repaired."],
  ["03", "On-site visits, where the agreement includes them", "Assessment, installation, maintenance, and physical repair are scheduled only for the locations and tasks the agreement names."],
  ["04", "Fleet oversight and reporting", "Usage comes from meters where a device can be read, and from figures you supply where it cannot."],
  ["05", "Supplies, where fulfillment is included", "Monitoring and replenishment planning are in scope. Shipment is included only when the agreement names the supplier, coverage, and delivery duty."],
  ["06", "A named service owner", "One person is accountable when a device stops, instead of a queue with no owner."],
];

const steps = [
  ["01", "Assess", "Understand the printer fleet, business locations, and operational challenges."],
  ["02", "Define", "Establish service scope, delivery arrangements, and the annual agreement."],
  ["03", "Implement", "Coordinate the on-site and remote setup the agreement names."],
  ["04", "Manage", "Deliver ongoing fleet management and support through the term."],
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
      <section className="relative min-h-[100svh] overflow-hidden bg-navy text-white">
        <Image
          src="/images/printer-detail.jpg"
          alt="Commercial printer on an office work surface"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/35 to-navy/10" />
        <div className="hero-cover pointer-events-none absolute inset-0 z-[2] bg-navy" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1180px] flex-col justify-end px-4 pb-16 pt-36 sm:px-5 sm:pb-20 sm:pt-40 lg:pb-36">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75 sm:text-[11px] sm:tracking-[0.2em]">
            <span className="size-1.5 shrink-0 rotate-45 bg-green" aria-hidden="true" />
            Managed print services
          </p>
          <h1 className="mt-4 max-w-full text-[clamp(1.75rem,4.5vw,4.15rem)] leading-[0.94] tracking-[-0.045em] text-white">
            {heroLines.map((line, lineIndex) => (
              <span key={lineIndex} className="block sm:whitespace-nowrap">
                {line.map((word, index) => {
                  const order = lineIndex * line.length + index;
                  return (
                    <span key={word.text} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                      <span className="word-up inline-block" style={{ animationDelay: `${420 + order * 55}ms` }}>
                        <span className={word.accent ? "text-green" : undefined}>{word.text}</span>
                      </span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
          <p className="fade-up mt-5 max-w-[34rem] text-[15px] leading-6 text-white/80 sm:mt-6 sm:text-[17px] sm:leading-7" style={{ animationDelay: "900ms" }}>
            Cheetara Prints provides managed print services: fleet oversight, supplies planning, infrastructure, and technical support under a 12-month agreement with one annual invoice.
          </p>
          <div className="fade-up mt-7 flex flex-col items-start gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8" style={{ animationDelay: "1040ms" }}>
            <Pill href="/request-assessment" tone="onDark" event="quote_cta_click" eventParams={{ location: "hero" }}>
              Get an Annual Quote
            </Pill>
            <Pill href="/services/managed-print-services" variant="ghost" tone="onDark" event="service_view" eventParams={{ location: "hero-secondary" }}>
              Explore Our Services
            </Pill>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-8 w-full max-w-[1180px] px-4 sm:-mt-12 sm:px-5 lg:-mt-24">
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[22px] bg-white/10 p-px text-white shadow-[0_18px_50px_rgba(16,36,58,0.28)] min-[560px]:grid-cols-2 xl:grid-cols-4 sm:rounded-[28px]">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            const featured = index === facts.length - 1;
            return (
              <div key={fact.label} className={`flex min-w-0 items-start gap-3 px-4 py-4 sm:px-5 sm:py-5 ${featured ? "bg-[#18324f]" : "bg-navy"}`}>
                <Icon className="mt-0.5 size-4 shrink-0 text-green" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-green sm:text-[11px]">{fact.label}</dt>
                  <dd className="mt-1 font-heading text-[17px] leading-6 tracking-[-0.03em] sm:text-[20px] sm:leading-7">{fact.value}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>

      <section className="mx-auto max-w-[1180px] px-4 pb-20 pt-14 sm:px-5 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">The fleet</p>
          <h2 className="mt-4 max-w-[14ch] text-[36px] leading-[1.02] tracking-[-0.035em] lg:text-[48px]">Tell us what the fleet is doing.</h2>
          <p className="mt-4 max-w-xl text-[17px] leading-7 text-muted">Choose the problem closest to yours. Managed print covers the fleet. Some faults are handled from a distance. Others need a visit when the agreement includes one.</p>
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
            <h2 className="mt-4 max-w-[14ch] text-[36px] leading-[1.02] tracking-[-0.035em] lg:text-[48px]">Managed print, delivered as agreed.</h2>
            <p className="mt-5 max-w-xl text-[17px] leading-7 text-white/75">
              Support from a distance and on-site visits are coordinated for the locations named in the agreement. This site does not publish an on-site territory or a response time.
            </p>
            <ul className="mt-8 space-y-3 text-[16px] text-white/80">
              <li>Fleet oversight, reporting, and a named owner for the account.</li>
              <li>Troubleshooting, configuration, and readings where the device allows them.</li>
              <li>On-site assessment, installation, and physical work when the agreement includes them.</li>
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-[26px]">
            <Image src="/images/office-work.jpg" alt="Commercial office interior" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
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
          <p className="max-w-xl text-[18px] leading-7 text-muted">Managed print, priced for the fleet, the locations, and the services you select.</p>
          <Pill href="/request-assessment" event="quote_cta_click" eventParams={{ location: "closing" }}>
            Get an Annual Quote
          </Pill>
        </div>
      </section>
    </>
  );
}
