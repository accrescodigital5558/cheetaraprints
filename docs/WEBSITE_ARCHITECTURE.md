# Website architecture

## Sitemap

| Page | Route |
| --- | --- |
| Home | `/` |
| Managed Print Services | `/services/managed-print-services` |
| Printer Fleet Management | `/services/printer-fleet-management` |
| Printer Infrastructure Management | `/services/printer-infrastructure-management` |
| Remote Printer Support | `/services/remote-printer-support` |
| Small Business | `/solutions/small-business` |
| Mid-Market | `/solutions/mid-market` |
| Enterprise | `/solutions/enterprise` |
| About | `/about` |
| How It Works | `/how-it-works` |
| Resources index | `/resources` |
| Resource guide | `/resources/[slug]` |
| Contact | `/contact` |
| Request an assessment | `/request-assessment` |
| Privacy Policy | `/privacy-policy` |
| Terms of Service | `/terms-of-service` |
| Cookie Policy | `/cookie-policy` |

`/resources` exists so the header item is a real destination. Guides are static content in `src/data/resources.ts`.

## Homepage order

Hero, fact bar, problem picker, service rows, agreement list, annual contract, fit and process, remote coverage, FAQ, closing quote.

## Page structures

- Service pages: hero, definition, included scope, capability list, annual model, eligibility, FAQ, quote link. Fleet pages separate live monitoring from reporting based on supplied meters.
- Solution pages: the segment problem, what the agreement changes, and a quote link. Enterprise copy says “Discuss enterprise requirements.”
- About: legal entity, remote-first model, positioning. DOS details are marked as supplied and unverified for production.
- How it works: Assess, Customize, Implement, Manage.
- Contact: short form sharing the assessment API pipeline.
- Legal: original policies describing forms, Resend, optional analytics, and the absence of unverified compliance badges.

## Design tokens

| Token | Value | Role |
| --- | --- | --- |
| ground | `#EAF0F5` | Page background |
| paper | `#FFFFFF` | Cards |
| ink | `#182536` | Text |
| muted | `#667085` | Meta |
| line | `#DCE4EB` | Borders |
| navy | `#10243A` | Pills, footer, dark bands |
| green | `#20A477` | Accent words, focus, marks |

Content width: 1180px inside a 1280px frame. Section padding about 96–128px on desktop. Card radius 26px. Control radius is a full pill.

## Typography

- `next/font`: Bricolage Grotesque (headings), Instrument Sans (body, UI), JetBrains Mono (eyebrows).
- Hero 56–72px. Page title 44–56px. Section title 36–48px. Card title 20–24px. Body 16–18px. Labels 11–13px. Scale down on small screens.

## Component inventory

- Layout: `SiteHeader`, `SiteFooter`, `SiteShell`.
- Brand: `Wordmark` (temporary, unapproved).
- Sections: `Hero`, `FactBar`, `ProblemPicker`, `ServiceRows`, `AgreementList`, `AnnualPanel`, `ProcessSteps`, `CoverageBand`, `FaqList`, `QuoteBand`, `PageHero`, `Reveal`.
- Forms: `AssessmentForm`, `ContactForm`.
- UI: button, field, select, checkbox, accordion behavior written to match the pill and card system.

## Animation

`src/app/motion.css` and `src/lib/animations/index.ts`.

- `word-up`: 1.15s, `cubic-bezier(0.16, 1, 0.3, 1)`, from `translateY(122%)`.
- `fade-up`: 1.1s, same curve, from 28px and opacity 0.
- Hover transitions: 300ms.
- `prefers-reduced-motion: reduce` sets animation and transition duration near zero.

## Responsive strategy

- 1280px and up: full editorial rows and the desktop header.
- 1024px: stacked hero copy over the photograph, condensed nav.
- 768px and below: single column, circular menu, full-height nav panel, stacked footer groups.
- No horizontal page scroll. Gutters 20px on small screens.

## Lead flow

The browser posts to `/api/assessment` or `/api/contact`. The server validates with Zod, rejects honeypot and fast submits, rate-limits by IP in memory, and returns a reference number only when Resend accepts both messages. Missing `RESEND_API_KEY`, `QUOTE_FROM_EMAIL`, or `SALES_NOTIFICATION_EMAIL` returns a configuration error. Development may also write `.data/leads.json`, which is gitignored and is not production storage.
