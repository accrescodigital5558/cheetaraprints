import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Prose } from "@/components/layout/Prose";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Terms of Service",
  "Terms for using the CHEETARA PRINTS, LLC website. A managed print agreement is a separate document.",
  "/terms-of-service",
);

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" lede="These terms cover use of the website. They are not the annual managed print agreement." />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms-of-service" }]} />
      <Prose>
        <p>The site is published by {site.legalName}. Counsel should review this page before production publication.</p>
        <h2>The website and the agreement</h2>
        <p>Pages describe on-site and remote managed print services sold as a 12-month agreement with one annual invoice. A quote request is not an offer that has been accepted, and it does not start service. Scope, price, supplies, support hours, visits, and any physical repair terms exist only in a signed agreement.</p>
        <h2>No monthly plan</h2>
        <p>The standard commercial description is annual billing. Nothing on the site is an offer of a monthly subscription.</p>
        <h2>Accuracy</h2>
        <p>Service descriptions avoid capabilities the company has not confirmed, including nationwide on-site repair, a published response-time guarantee, manufacturer partnerships, and fixed package prices. If a page and a later signed agreement differ, the agreement controls.</p>
        <h2>Acceptable use</h2>
        <p>Do not misuse the forms, attempt to disrupt the site, or submit information you are not allowed to share. Submissions that fail validation, arrive too quickly, or trigger spam controls are refused.</p>
        <h2>Intellectual property</h2>
        <p>Site text and the temporary wordmark are used by {site.legalName}. The wordmark is not represented as a registered trademark. Photographs are used under the licenses noted in the image credits file shipped with the site.</p>
        <h2>Liability</h2>
        <p>The website is an informational and inquiry tool. It is provided without a warranty that a particular device can be monitored or repaired. Limits on liability for paid services belong in the service agreement, not in a web form.</p>
        <h2>Contact</h2>
        <p>Questions about these terms can be sent through the contact form{site.email ? ` or to ${site.email}` : ""}.</p>
      </Prose>
    </>
  );
}
