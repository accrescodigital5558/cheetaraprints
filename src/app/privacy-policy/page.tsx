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
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="How Cheetara Prints handles information you send through this website, including managed print quote requests."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} />
      <Prose>
        <p>Last updated 31 October 2026.</p>
        <p>
          {site.legalName} operates cheetaraprints.com. We use information you submit to review managed print inquiries and to reply. We do not sell personal information.
        </p>
        <h2>Information collected</h2>
        <p>
          Assessment, contact, and advertising landing-page forms collect the name, business email, business telephone, company, and the fleet or message details you choose to send. A consent checkbox is required. The server also records a reference number. Server logs may include IP address, browser type, and the page requested.
        </p>
        <h2>Why it is collected</h2>
        <p>
          Inquiry details are used to review a request for an annual managed print quote or to answer a message. They are not used to open a customer portal, process a payment, or sign a contract on this website.
        </p>
        <h2>How inquiry data is used</h2>
        <p>
          When email delivery is configured, the submission is sent to the business notification address and a confirmation is sent to the business email you entered. Until those credentials are set, the form refuses the submission and tells you it was not sent.
        </p>
        <h2>Processors</h2>
        <p>
          Transactional email is sent through Resend when a Resend API key and from-address are configured. Optional audience measurement uses Google Analytics 4 only when a measurement ID is present. Hosting may process technical logs needed to run the site.
        </p>
        <h2>Retention</h2>
        <p>
          Inquiry records are kept as long as needed to respond and to keep an ordinary business record of the request, then deleted or archived under the schedule the company adopts.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          If Google Analytics is enabled, it may set cookies to measure page visits and the events listed in the cookie policy. If it is not enabled, the site does not set analytics cookies. The site does not run advertising pixels of its own. See the cookie policy for details.
        </p>
        <h2>Security</h2>
        <p>Forms are submitted over HTTPS in production, validated on the server, and rate-limited per server instance. The site does not claim a security certification.</p>
        <h2>Privacy requests</h2>
        <p>
          To ask about access, correction, or deletion of an inquiry, contact {contact}. Rights that apply to your business or state can be raised through that same path.
        </p>
      </Prose>
    </>
  );
}
