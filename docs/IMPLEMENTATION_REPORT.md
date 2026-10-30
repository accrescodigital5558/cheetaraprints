# Implementation report

CHEETARA PRINTS, LLC now has a Next.js marketing site in this repository. The production build completed on 31 October 2026. Quote and contact email is not live: the APIs refuse to send until the delivery credentials below are set.

## Build

`npm run build` (Next.js 16.4.3, Turbopack) exited 0.

- TypeScript check passed during the build.
- 31 routes were prerendered as static pages.
- `/api/assessment` and `/api/contact` stay dynamic.
- `npm run lint` exited 0 after the browser checks below.
- After the Industries pages and menu were added, `tsc --noEmit`, `npm run lint`, and `npm run build` each exited 0. The build prerenders the six `/industries` routes.

## Routes

| Path | Role |
| --- | --- |
| `/` | Homepage |
| `/services/managed-print-services` | Managed print services |
| `/services/printer-fleet-management` | Fleet management |
| `/services/printer-infrastructure-management` | Infrastructure management |
| `/services/remote-printer-support` | Remote printer support |
| `/solutions/small-business` | Small business |
| `/solutions/mid-market` | Mid-market |
| `/solutions/enterprise` | Enterprise |
| `/industries/corporate-offices` | Corporate offices |
| `/industries/healthcare` | Healthcare and medical records |
| `/industries/education` | Education and campuses |
| `/industries/legal-professional` | Legal and professional services |
| `/industries/government-finance` | Government and finance |
| `/industries/retail-hospitality` | Retail and hospitality |
| `/about` | Company, including the Why Us anchor |
| `/how-it-works` | Assess, customize, implement, manage |
| `/resources` | Guide index |
| `/resources/[slug]` | Eight original guides |
| `/contact` | Contact form |
| `/request-assessment` | Annual quote form |
| `/privacy-policy` | Privacy |
| `/terms-of-service` | Terms |
| `/cookie-policy` | Cookies |
| `/sitemap.xml` | Sitemap |
| `/robots.txt` | Robots, canonical host `https://cheetaraprints.com` |

Guide slugs: `what-are-managed-print-services`, `managing-printers-across-locations`, `understanding-business-printing-costs`, `printer-fleet-management-guide`, `how-remote-printer-monitoring-works`, `printer-infrastructure-security`, `when-to-consider-managed-print`, `annual-managed-print-agreements`.

Each of those pages returned HTTP 200 from the dev server, with a title. The homepage title is the default “Managed Print Services”. Inner pages use the template `Page name | Cheetara Prints`.

## Components

Shared layout: `SiteHeader`, `SiteFooter`, `Breadcrumbs`, `PageHero`, `Prose`, `JsonLd`, `Analytics`, `TrackView`, `Wordmark`.

Homepage: `HomePage`, `ProblemPicker`, `Reveal`, `FaqList`, `Pill`.

Content pages: `ServiceView`, `SolutionView`.

Forms: `AssessmentForm`, `ContactForm`, and the field primitives in `forms/fields.tsx`.

Controls are original components styled to the Liftline card and pill geometry. The default shadcn theme was not installed, because that theme would fight the measured type, radius, and color roles.

## Header navigation

Primary destinations live in `src/config/navigation.ts`. Service and solution links are taken from `src/data/services.ts` and `src/data/solutions.ts`, so the header does not keep a second copy of those routes. Solution labels drop the trailing “Solutions” from the page titles, which produces Small Business, Mid-Market, and Enterprise.

Desktop, from the `lg` breakpoint up:

- Services, Solutions, and Industries open on click and on pointer hover. Click pins the menu so it stays open until a second click, Escape, or a click outside the navigation.
- Industries lists six pages, in order: Corporate Offices, Healthcare & Medical Records, Education & Campuses, Legal & Professional Services, Government & Finance, and Retail & Hospitality. The links come from `src/data/industries.ts`.
- Arrow Down opens the menu and moves into the links. Arrow Up, Arrow Down, Home, and End move inside the list. Escape closes the menu and returns focus to its button.
- About, How It Works, Resources, and Contact are direct links. Resources stays current on guide pages.
- The current section uses green text. The current page link sets `aria-current="page"`. An open section button sets `aria-current="true"`.
- Get an Annual Quote stays the header pill and goes to `/request-assessment`.

The phone menu includes the same destinations. Services and Solutions expand in place. The toggle exposes `aria-expanded` and `aria-controls`, and it switches to a visible close icon. Escape, the close control, the page overlay, and choosing a destination all close the menu. Focus moves into the menu on open and returns to the toggle on Escape. Background scrolling is locked while it is open. The open and close motion is skipped when reduced motion is requested.

Checked in the browser:

- At 1440px and 1024px the row fits: Services, Solutions, Industries, About, How It Works, Resources, Contact, and the quote pill. At 1440px `scrollWidth` was 1425. At 1024px the quote pill ended inside the viewport and did not overlap Contact.
- The Industries menu opened in the order above. Arrow Down focused Corporate Offices, and Escape closed the menu and returned focus to the button. The panel stayed inside a 1440px viewport.
- Each industry page returned 200, with its own workflow, fleet, remote-support, and annual-agreement sections, plus Request an Annual Quote. Healthcare does not claim a privacy certificate. Government and finance do not claim approved-vendor or regulatory status. Legal does not offer a confidentiality certificate. Education does not describe a campus technician. Retail and hospitality does not describe an on-site or all-hours crew.
- At 390px the phone menu expanded Industries. All six links ended inside the viewport, and choosing a destination closed the menu.
- Click, Escape, outside click, and arrow keys worked on the Services menu. The open panel was not clipped.
- Every service, solution, About, How It Works, Resources, a guide, Contact, and the quote page opened from those links. The matching header item was marked current, including Resources on a guide.
- At 390px and 360px the menu opened, both groups expanded, and no link ran past the viewport (`scrollWidth` matched the width). Choosing Small Business closed the menu and opened `/solutions/small-business`. Escape closed the menu and returned focus to the toggle.

## Design and motion

The homepage follows the Liftline layout: full-bleed photograph, overlay header, pill buttons, 26px cards, a numbered agreement list, and a navy footer. Liftline’s garage-door copy, reviews, prices, address, phone, and license are not used.

Colors: ground `#EAF0F5`, paper `#FFFFFF`, ink `#182536`, muted `#667085`, line `#DCE4EB`, navy `#10243A`, green `#20A477`.

Type, loaded with `next/font` under the SIL Open Font License: Bricolage Grotesque for headings, Instrument Sans for body and buttons, JetBrains Mono for eyebrows and meta lines.

Motion is original CSS in `src/app/motion.css`, with the same timings measured from Liftline: hero words rise from `translateY(122%)` over 1.15s, sections fade up from 28px over 1.1s, easing `cubic-bezier(0.16, 1, 0.3, 1)`, and hover transitions of 300ms. `prefers-reduced-motion: reduce` disables the transforms. Framer Motion is limited to the mobile menu, the FAQ height, and the problem-picker panel. There is no infinite loop and no count-up of statistics.

The wordmark is a temporary typographic mark. It is not an approved logo.

Photography is stored in `public/images` under the Unsplash License, with credits in `public/images/CREDITS.txt`. Device branding in those photos is not presented as a partnership.

## Forms and email

Both APIs validate with Zod, ignore a filled honeypot, require the page to have been open at least 2.5 seconds, rate-limit by IP in memory (per server instance, which resets on serverless), and sanitize text. A reference looks like `CP-2026-XXXXXX`.

Resend sends a sales notice and a customer confirmation only when `RESEND_API_KEY`, `QUOTE_FROM_EMAIL`, and `SALES_NOTIFICATION_EMAIL` are all set. If any is missing, the API returns 503 and the page says the request was not sent. In development, the payload is also appended to gitignored `.data/leads.json` with `delivered: false`. That file is not production storage.

Browser check on `/request-assessment`:

- An empty submit showed field errors, including consent, and did not claim the request was delivered.
- A completed sample (Ada Lovelace, `ada@example.com`, one service, consent) showed: “This form is not connected to a delivery inbox yet. The request was not sent.”

`/contact` renders the same controls and states that a public email will appear only after one is confirmed. No telephone number is shown.

## SEO and analytics

Each page has a title and description. Canonical URLs use `NEXT_PUBLIC_SITE_URL` or `https://cheetaraprints.com`. Open Graph is set from the same metadata helper. `sitemap.ts` and `robots.ts` are generated.

Structured data is Organization and WebSite on the layout, Service on service pages, BreadcrumbList on inner pages, and Article on guides. There is no LocalBusiness schema, because the company does not publish a street address.

Google Analytics 4 loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set. Event names are wired for page view, service view, quote clicks, assessment start and submit, and contact, phone, and email clicks. Phone and email events fire only when those public values exist.

## Credentials still required

Copy `.env.example` to `.env.local`. Leave a value empty until it is real.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `QUOTE_FROM_EMAIL` | Verified sender for notices and confirmations |
| `SALES_NOTIFICATION_EMAIL` | Inbox that receives quote and contact notices |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, default `https://cheetaraprints.com` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public email in the footer, contact page, and legal pages |
| `NEXT_PUBLIC_CONTACT_PHONE` | Public telephone, same places |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement id |

Until the three Resend variables exist, do not describe the quote form as live email delivery.

## Still needed before a public launch

- An approved logo to replace the temporary wordmark.
- Confirmation of which printer brands are in scope. The site says brands are assessed during quoting and does not claim partnerships.
- A confirmed monitoring method, so live readings are not promised for every device.
- A confirmed supplies and fulfillment arrangement before any page says toner is shipped.
- Written response windows and any on-site repair terms. The site does not publish a response-time number.
- The public email and telephone, via the environment variables above.
- A pricing method. The site states one annual invoice and a customized price, and it does not publish dollar amounts or a monthly plan.
- Counsel review of the privacy, terms, and cookie pages, including a retention policy. The pages currently say records are kept until a retention policy is approved.
- Verification of the New York DOS record (DOS ID 7335690, filed May 23, 2024, Kings County) before those details are treated as launch copy. The footer identifies CHEETARA PRINTS, LLC and points readers to that verification.

## Browser checks

Checked in the dev server at `http://localhost:3000`.

- Desktop viewport at 1440px: the hero headline ends at about 921px, inside a 920px measure, with no horizontal overflow (`documentElement.scrollWidth` 1425). Header coverage is recorded under Header navigation.
- Phone viewport at 390px: the header stays a solid bar on inner pages. Menu coverage is recorded under Header navigation.
- Homepage sections present: hero, fact bar, problem picker, four service rows, numbered agreement, annual contract panel, fit statement and four steps, nationwide remote coverage, FAQ, and closing quote band.
- The billing FAQ opens and states that the agreement is 12 months, invoiced once, and is not a monthly subscription.
- Service, solution, about, how-it-works, resources, guide, contact, and legal routes returned 200.
- A hydration warning appeared in the browser tool. The diff was `data-cursor-ref` attributes injected by that tool, not a mismatch in the application markup.

The quote form must stay described as unconfigured until the Resend variables are present.
