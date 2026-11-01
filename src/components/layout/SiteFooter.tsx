import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { site, telHref } from "@/config/site";
import { services } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Wordmark tone="light" />
          <p className="mt-5 max-w-xs text-[15px] leading-6 text-white/72">
            Managed print services. One annual payment. A full year of fleet management.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-green">Services</p>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="text-[15px] text-white/80 hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-green">Company</p>
          <ul className="mt-4 space-y-3 text-[15px] text-white/80">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-green">Contact</p>
          <ul className="mt-4 space-y-3 text-[15px] text-white/80">
            <li>Managed print for business fleets</li>
            {site.email ? (
              <li>
                <TrackedLink href={`mailto:${site.email}`} event="email_click" external className="hover:text-white">
                  {site.email}
                </TrackedLink>
              </li>
            ) : null}
            {site.phone ? (
              <li>
                <TrackedLink href={telHref(site.phone)} event="phone_click" external className="hover:text-white">
                  {site.phone}
                </TrackedLink>
              </li>
            ) : null}
            <li>
              <TrackedLink href="/request-assessment" event="quote_cta_click" className="hover:text-white">
                Get an Annual Quote
              </TrackedLink>
            </li>
            <li>
              <TrackedLink href="/contact" event="contact_click" className="hover:text-white">
                Contact the team
              </TrackedLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.legalName}</p>
          {site.phone ? (
            <TrackedLink href={telHref(site.phone)} event="phone_click" external className="font-heading text-[18px] tracking-[-0.03em] text-white hover:text-green">
              {site.phone}
            </TrackedLink>
          ) : null}
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-white">Cookies</Link>
            <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
