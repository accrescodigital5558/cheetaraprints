import { PageHero } from "@/components/services/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { site, telHref } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { TrackedLink } from "@/components/ui/TrackedLink";

export const metadata = pageMetadata(
  "Contact",
  "Contact CHEETARA PRINTS, LLC about managed print services and annual agreements.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk with Cheetara Prints."
        lede="Send a note about your fleet. A quote with device counts belongs on the assessment form. This page does not promise how quickly someone will reply."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 lg:grid-cols-[0.7fr_1.1fr] lg:py-20">
        <aside className="text-[16px] leading-7 text-muted">
          <p>Managed print is delivered on site and from a distance. The locations a visit can cover are named in the agreement, not published as a territory on this page.</p>
          {site.email ? (
            <p className="mt-4">
              <TrackedLink href={`mailto:${site.email}`} event="email_click" external className="text-ink underline decoration-green underline-offset-4">
                {site.email}
              </TrackedLink>
            </p>
          ) : (
            <p className="mt-4">A public business email will be listed here after it is confirmed.</p>
          )}
          {site.phone ? (
            <p className="mt-2">
              <TrackedLink href={telHref(site.phone)} event="phone_click" external className="text-ink underline decoration-green underline-offset-4">
                {site.phone}
              </TrackedLink>
            </p>
          ) : null}
          <p className="mt-4">
            <TrackedLink href="/request-assessment" event="quote_cta_click" className="text-ink underline decoration-green underline-offset-4">
              Get an Annual Quote
            </TrackedLink>
          </p>
        </aside>
        <ContactForm />
      </div>
    </>
  );
}
