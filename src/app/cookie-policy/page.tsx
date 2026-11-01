import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Prose } from "@/components/layout/Prose";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Cookie Policy",
  "How cheetaraprints.com uses cookies, including Google Analytics 4 and Microsoft Clarity.",
  "/cookie-policy",
);

export default function CookiePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        lede="What this site stores in your browser, including Google Analytics and Microsoft Clarity."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Cookie Policy", path: "/cookie-policy" }]} />
      <Prose>
        <p>Last updated 31 October 2026.</p>
        <h2>What this site sets</h2>
        <p>
          Google Analytics 4 ({site.gaMeasurementId}) stores cookies to distinguish visits and to record page views and the events the site sends, such as quote clicks and successful form submissions. Microsoft Clarity ({site.clarityId}) stores cookies and similar storage to record sessions, clicks, and scroll behavior so we can see how the site is used.
        </p>
        <h2>Events</h2>
        <p>
          The site can record page views, service page views, annual-quote clicks, assessment starts and submissions, and clicks on contact, telephone, and email links. Those events are not a customer profile and they are not used to sell data. The same measurement may run on advertising landing pages.
        </p>
        <h2>Forms</h2>
        <p>Quote and contact forms do not require a tracking cookie. They send the fields you complete to this website.</p>
        <h2>Advertising</h2>
        <p>
          This website does not set its own advertising cookies. If you arrived from a Google ad, Google may use cookies or similar storage under Google’s own policies. That is separate from Cheetara Prints’ forms.
        </p>
        <h2>Your choices</h2>
        <p>
          You can block or delete cookies in your browser. Blocking analytics cookies does not block you from reading the site or sending a form.
        </p>
      </Prose>
    </>
  );
}
