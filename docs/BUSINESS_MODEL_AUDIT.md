# Business model audit

Date: 2026-10-31

The site was written as a remote-first managed print service. The operating model is now **on-site and remote** managed print. Remote support stays. Claims that exclude on-site work, or that deny a technician visit in every case, are rewritten. Territory, staffing model, response times, and what a visit includes stay unconfirmed and are not invented.

## Keep the word “remote”

These stay, because they describe a real service:

- Route and title **Remote Printer Support** (`/services/remote-printer-support`).
- Remote troubleshooting, configuration, connectivity, queues, drivers, fleet readings, and reporting.
- Statements that a live meter is available only when the device and network allow it.
- Statements that physical repair, parts, installation, relocation, and supplies are included only when the agreement names them.

## Rewrite or remove

| Location | Current claim | Action |
| --- | --- | --- |
| `src/config/site.ts` | Nationwide remote managed print as the company description | Positioning: on-site and remote managed print. No nationwide on-site territory. |
| `src/app/page.tsx` | Remote fleet oversight as the homepage description | On-site and remote coordination. |
| `src/components/sections/HomePage.tsx` | Eyebrow “Nationwide remote managed print”; hero about remote oversight; implement step is remote-only; coverage says no nationwide field roster | New headline and supporting copy. Coverage says visits are arranged under the agreement and the territory is not published. |
| `src/components/layout/SiteHeader.tsx` | “Nationwide remote service” | “On-site and remote service · One annual invoice” |
| `src/components/layout/SiteFooter.tsx` | “United States, remote service” | On-site and remote, without a territory map. |
| `src/components/sections/ProblemPicker.tsx` | Downtime copy implies a technician is not coming | Remote diagnosis first; on-site work only if the agreement includes it. |
| `src/data/faq.ts` | Remote-only oversight; “technician visit is not part of the standard service”; “we do not operate a nationwide technician fleet” | On-site and remote answers. No roster or response-time claim. |
| `src/data/services.ts` | Managed print summary is remote oversight; infrastructure “changes are remote”; remote support says a technician is not dispatched nationwide | Each service states remote scope, on-site scope where relevant, and agreement limits. Remote Printer Support stays remote-focused. |
| `src/data/solutions.ts` | Enterprise copy says management does not require a technician in each building | Custom scope by size. Visits are not assumed for every site. |
| `src/data/industries.ts` | Pages say there is no campus technician, no clinic technician, and on-site is not the default | Industry problems stay. On-site work is available when the agreement names it. No HIPAA, campus-wide, confidentiality, vendor, or 24/7 claims. |
| `src/data/resources.ts` | “remote-first service across the United States” | Guides keep the remote-versus-physical distinction and drop the remote-only identity. |
| `src/app/about/page.tsx` | “remote-first”; “Service is delivered remotely” | On-site and remote identity. Legal entity facts unchanged. |
| `src/app/how-it-works/page.tsx` | Assess/implement/manage are remote-only | Assess, Define, Implement, Manage as specified. |
| `src/app/contact/page.tsx` | “delivered remotely” | On-site and remote. No street address added. |
| `src/app/request-assessment/page.tsx` | Quote is for remote managed print | Annual quote for on-site and remote scope. |
| `src/app/terms-of-service/page.tsx` | “remote managed print service” | On-site and remote, still controlled by the signed agreement. Nationwide on-site repair stays an unconfirmed claim that the terms refuse. |
| `src/app/resources/page.tsx` | Meta mentions remote monitoring only | Add on-site service to the description without dropping remote guides. |

## Unchanged on purpose

- Form security, honeypot, timing check, rate limit, and fail-closed email.
- Canonical host `https://cheetaraprints.com`.
- No new phone number, street address, testimonials, certifications, or statistics.
- No published response time, emergency desk, or nationwide on-site map.
- Visual system: colors, type, hero motion, and navigation structure.
- DOS ID and filing facts on the about page, still marked for production verification.

## Still unconfirmed after this update

1. On-site territory.
2. Employees, contractors, partners, or a mix.
3. Visit hours and how a visit is booked.
4. Response and resolution times.
5. Emergency support.
6. Which physical repairs, parts, hardware, installation, and moves are standard.
7. Supply shipping.
8. Supported brands and models.
9. Maintenance conditions beyond “named in the agreement.”
