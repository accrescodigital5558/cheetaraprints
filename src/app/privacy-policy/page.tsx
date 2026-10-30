import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Prose } from "@/components/layout/Prose";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How CHEETARA PRINTS, LLC collects and uses information submitted through cheetaraprints.com.",
  "/privacy-policy",
);

export default function PrivacyPage() {
  const contact = site.email || "the contact form on this website";
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" lede="This policy describes the cheetaraprints.com forms and optional analytics. It should be reviewed by counsel before production publication." />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} />
      <Prose>
        <p>{site.legalName} operates this website. The policy below matches the site as built.</p>
        <h2>Information collected</h2>
        <p>Assessment and contact forms collect the name, business email, business telephone, company, and the fleet or message details you choose to send. A consent checkbox and the time of consent are required. The server also records a reference number.</p>
        <h2>Why it is collected</h2>
        <p>Inquiry details are used to review a request for an annual managed print quote or to answer a message. They are not used to open a customer portal, process a payment, or sign a contract on this website.</p>
        <h2>How inquiry data is used</h2>
        <p>When email delivery is configured, the submission is sent to the business notification address and a confirmation is sent to the business email you entered. Until those credentials are set, the form refuses the submission and tells you it was not sent.</p>
        <h2>Processors</h2>
        <p>Transactional email is sent through Resend when a Resend API key and from-address are configured. Optional audience measurement uses Google Analytics 4 only when a measurement ID is present. No other processor is connected.</p>
        <h2>Retention</h2>
        <p>A formal retention schedule has not been approved. Inquiry emails should be kept only as long as needed to respond and to keep a record of the request, then deleted or archived under the schedule the company adopts. A development-only file on a local machine is not the production system of record.</p>
        <h2>Cookies and analytics</h2>
        <p>If Google Analytics is enabled, it may set cookies to measure page visits and the events listed in the cookie policy. If it is not enabled, the site does not set analytics cookies. The site does not run advertising cookies.</p>
        <h2>Security</h2>
        <p>Forms are submitted over HTTPS in production, validated on the server, and rate-limited per server instance. The site does not claim a security certification.</p>
        <h2>Privacy requests</h2>
        <p>To ask about access, correction, or deletion of an inquiry, contact {contact}. State privacy rights that apply to your business or state, including rights that may exist under laws such as the CCPA where they apply, can be raised through that same path. This page does not assert that a particular certification or statute has been formally adopted by the company.</p>
      </Prose>
    </>
  );
}
