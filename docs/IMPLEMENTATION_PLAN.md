# Implementation plan

Work proceeds in this order. Each step leaves the previous routes intact.

1. Record research, architecture, and this plan.
2. Scaffold Next.js (App Router, TypeScript, Tailwind, `src/`). Add the three open-source fonts, design tokens, motion CSS, and a temporary wordmark.
3. Build the header, mobile panel, and navy footer. Contact details render only from environment variables.
4. Build the homepage sections in the Liftline-derived system, with original Cheetara copy and local photography.
5. Build service, solution, about, how-it-works, resources, contact, and legal routes from shared layout components and typed content modules.
6. Add the assessment and contact forms, Zod schemas, honeypot, timing check, in-memory rate limit, reference numbers, and fail-closed Resend delivery.
7. Add metadata, Open Graph, canonical URLs, sitemap, robots, structured data, and optional GA4 events.
8. Run the production build, check routes and the unconfigured form state in the browser, and write `docs/IMPLEMENTATION_REPORT.md`.

Out of scope: customer login, dashboards, live monitoring, payment collection, contract signing, CRM, ticketing, and invented business contact details.
