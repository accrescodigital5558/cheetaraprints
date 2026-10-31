import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { pageMetadata } from "@/lib/seo";

const steps = [
  ["01", "Assess", "We review the printer fleet, the business locations, and the operational challenges. Devices that cannot be monitored are marked as reported, not presented as live."],
  ["02", "Define", "The agreement names the fleet, the on-site and remote scope, any supply fulfillment, the support hours, and the annual price. Nothing on the website is a substitute for that document."],
  ["03", "Implement", "Agreed on-site setup and remote administration are coordinated with the access your team grants. There is no automatic discovery product in this release."],
  ["04", "Manage", "Fleet oversight, reporting, and the support named in the agreement continue for the 12-month term. The invoice is issued once. Renewal is a new count of the fleet, not an automatic monthly charge."],
];

export const metadata = pageMetadata(
  "How It Works",
  "How a Cheetara Prints annual agreement is assessed, written, implemented, and managed.",
  "/how-it-works",
);

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Count first. Then quote the year."
        lede="Four steps take a fleet from an unordered list of devices to a 12-month agreement with one invoice."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "How It Works", path: "/how-it-works" }]} />
      <ol className="mx-auto max-w-[800px] px-5 py-16 lg:py-20">
        {steps.map(([number, title, body]) => (
          <li key={number} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line py-8">
            <span className="font-mono text-[12px] text-green">{number}</span>
            <div>
              <h2 className="font-heading text-[28px] tracking-[-0.03em]">{title}</h2>
              <p className="mt-3 text-[17px] leading-7 text-muted">{body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mx-auto max-w-[800px] px-5 pb-20">
        <Pill href="/request-assessment" event="quote_cta_click" eventParams={{ location: "how-it-works" }}>
          Get an Annual Quote
        </Pill>
      </div>
    </>
  );
}
