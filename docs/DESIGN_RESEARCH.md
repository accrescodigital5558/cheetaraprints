# Design research

Research date: 31 October 2026. Findings below were taken from live pages. Nothing here is copied source, copy, or artwork.

## 1. Modulify

Gallery: https://modulify.ai/templates  
Public list: `GET https://api.modulify.ai/templates` (about 110 templates at the time of research).

Cloning a template into a Modulify workspace is free for a signed-in account with a free site slot. Source export is not free. The Modulify docs state that on a free plan you can read files, but Copy, Download, and Export .zip require a paid plan (`https://modulify.ai/docs/editor/files-and-code`). A public preview is not a license to reuse the template source. This project does not clone or export any Modulify project.

### Candidates

| Template | Preview | Why it was considered | What can be adapted | Source available | License |
| --- | --- | --- | --- | --- | --- |
| Liftline | https://liftline-template.modulify.website/ | Service-business landing page: full-bleed photo hero, pill controls, large cards, numbered promises, problem picker, closing quote. Chosen as the UI reference. | Type scale, card radius, pill buttons, word-up and fade-up motion, row hover, section rhythm. | No. Paid plan required to export. | Modulify template. Recreate patterns in original code. Do not reuse garage-door copy, reviews, prices, address, phone, or license. |
| Meridian Freight | https://meridian-template.modulify.website | Operations company with one accountable owner, a numbered journey, and a closing quote. | Ownership language and process structure only. | No. | Same restriction. Do not reuse statistics, carrier logos, reviews, address, or phone. |
| Verdane | https://verdane-template.modulify.website | Quiet specification layout. | Not used for the homepage UI. | No. | Do not reuse dashboard figures, testimonials, logo row, or monthly prices. |
| Orvane | https://orvane-template.modulify.website | Numbered technical sections. | Not used for the homepage UI. | No. | Do not reuse product UI or invented measurements. |

Gridora (`https://gridora.modulify.website`) was reviewed and rejected. It is a dashboard product page with a logo bar and fabricated operating statistics.

### Liftline measurements (browser, 31 Oct 2026)

- Headings: Bricolage Grotesque 600. Hero about 72px, tracking about -0.045em, line-height about 0.93. Section headings about 48px, tracking about -0.035em.
- Body and buttons: Instrument Sans. Body 16px / 24px. Buttons weight 500, tracking -0.01em, fully rounded.
- Labels: JetBrains Mono, 9–11px, uppercase, tracking 0.12–0.22em.
- Cards: white/paper fill, about 26px radius, 1px low-contrast border, no heavy shadow.
- Primary button fill on Liftline: `#1E3A5C`. Accent words: `#8FB0D4`. Page cream: `#F4F1EA`.
- Motion: `word-up` is `translateY(122%)` to 0 over 1.15s, `cubic-bezier(0.16, 1, 0.3, 1)`, staggered. `fade-up` is opacity 0 and 28px over 1.1s with the same curve. Hovers run about 300ms. Reduced motion collapses animation duration.

These three families are published under the SIL Open Font License and are loaded here through `next/font`. Using the typefaces is not a copy of Liftline’s files.

Cheetara colors replace Liftline’s cream and steel blue: ground `#EAF0F5`, paper `#FFFFFF`, ink `#182536`, muted `#667085`, border `#DCE4EB`, navy `#10243A`, green `#20A477`.

## 2. Motion

https://motion.design/ is a paid studio. The published price is $199 per animation, or $1,995 per month, delivered as Lottie, MP4, and GIF. There is no free asset library on the homepage. Testimonials on that site belong to Motion’s clients and are not reused.

What was taken as timing guidance only: short, intentional motion, no looping decoration, and delivery that a developer can recreate. All Cheetara motion is original CSS.

## 3. Landdding

https://landdding.com/ is a curated gallery (about 2.7k designs at the time of the fetch). The corporate category (`https://landdding.com/c/corporate`) states that the listing contains 24 pages and that a strong corporate page uses a specific value proposition, real imagery, and one primary action. The technology tag lists titles including Tines, Lumière, Flux, and Zyaas. Individual design cards are largely client-rendered, so this research does not claim a pixel study of ten full sites.

No Landdding layout, logo, copy, or graphic is copied.

## 4. Recommended direction

A Liftline-type service landing page, rebuilt for a remote managed-print company:

- Full-bleed printer photograph and a left-aligned headline with one or two green words.
- Pill primary action, “Get an Annual Quote,” plus a ghost secondary action.
- Overlapping fact bar limited to confirmed operating facts.
- Problem picker without prices.
- Service rows and 26px media cards.
- Numbered agreement list.
- Annual contract panel with no monthly price.
- Navy remote-coverage band, FAQ, and a closing quote.

## 5. Homepage structure

1. Hero.
2. Fact bar.
3. Fleet problem picker.
4. Service rows.
5. Agreement list.
6. Annual contract panel.
7. Fit statement and four steps.
8. Nationwide remote coverage.
9. FAQ.
10. Closing quote.

Excluded: partner logos, testimonials, statistics, monthly billing, and physical nationwide repair claims.

## 6. Why this direction

Liftline is a service business page, not a SaaS dashboard. Its type, cards, and motion can be recreated with open-source fonts and original code. Cheetara’s approved palette and annual agreement stay in those same roles, so the page looks deliberately designed without importing another company’s claims.
