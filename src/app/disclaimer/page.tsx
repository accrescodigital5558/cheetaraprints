import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Prose } from "@/components/layout/Prose";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Disclaimer",
  "Service and website disclaimer for CHEETARA PRINTS, LLC managed print services.",
  "/disclaimer",
);

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        lede="What this website is, and what a managed print agreement has to say before work starts."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Disclaimer", path: "/disclaimer" }]} />
      <Prose>
        <p>Last updated 31 October 2026.</p>
        <p>
          {site.legalName} provides managed print services: fleet oversight, supplies planning, usage reporting, and technical support for business printers. We are not the manufacturer of any printer and we are not an authorized service provider for any printer brand unless a signed agreement says otherwise.
        </p>
        <h2>The website is not the contract</h2>
        <p>
          Pages describe services. Scope, price, support hours, on-site visits, parts, and supply shipment exist only in a signed 12-month agreement or a written quotation you accept. Examples of process on this site are illustrations, not performance guarantees.
        </p>
        <h2>No guaranteed outcome</h2>
        <p>
          Device performance depends on the hardware, supplies, network, and how the machines are used. We do not promise that every printer or every fault can be resolved remotely or on a first visit. A response window, when one is written into an agreement, is the time to begin work — not a promise that the device is repaired in that time.
        </p>
        <h2>Trademarks</h2>
        <p>
          Printer brand names, if mentioned, identify equipment you already own. Those names and logos belong to their owners. No endorsement, sponsorship, or affiliation is implied.
        </p>
        <h2>Advertising</h2>
        <p>
          Paid ads, including Google Ads, are placements for {site.legalName}. They do not mean Google or any other platform endorses this company. Landing pages are marketing. They are not a signed agreement.
        </p>
        <p>Nothing on this site is legal, accounting, or procurement advice.</p>
      </Prose>
    </>
  );
}
