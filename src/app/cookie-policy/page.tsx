import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Prose } from "@/components/layout/Prose";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Cookie Policy",
  "How cheetaraprints.com uses cookies, including optional Google Analytics.",
  "/cookie-policy",
);

export default function CookiePage() {
  const analytics = Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" lede="The site uses only the cookies required to measure visits when analytics is turned on." />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Cookie Policy", path: "/cookie-policy" }]} />
      <Prose>
        <h2>What this site sets</h2>
        <p>
          {analytics
            ? "Google Analytics 4 is enabled. It may store cookies to distinguish visits and to record page views and the events the site sends, such as quote clicks and successful form submissions."
            : "Google Analytics is not enabled in this environment, so the site does not set analytics cookies. If a measurement ID is added later, Google Analytics 4 may store cookies for page views and the events described below."}
        </p>
        <h2>Events</h2>
        <p>When analytics is enabled, the site can record page views, service page views, annual-quote clicks, assessment starts and submissions, and clicks on contact, telephone, and email links. Those events are not a customer profile and they are not used to sell data.</p>
        <h2>Forms</h2>
        <p>Quote and contact forms do not require a tracking cookie. They send the fields you complete to this website.</p>
        <h2>Your choices</h2>
        <p>You can block or delete cookies in your browser. Blocking analytics cookies does not block you from reading the site or sending a form. This policy does not describe a consent banner because non-essential analytics runs only when the business has configured it, and a banner should be added if counsel requires one before launch.</p>
      </Prose>
    </>
  );
}
