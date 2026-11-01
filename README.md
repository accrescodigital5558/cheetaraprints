# Cheetara Prints

Corporate website for CHEETARA PRINTS, LLC. Managed print services, sold as a 12-month agreement with one annual invoice.

## Develop

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` before expecting email delivery.

## Email

Quote and contact forms validate on the server. They send mail only when all of these are set:

- `RESEND_API_KEY`
- `QUOTE_FROM_EMAIL`
- `SALES_NOTIFICATION_EMAIL`

If any are missing, the form reports that the request was not sent. In development, a validated payload may also be appended to `.data/leads.json`. That file is local inspection only.

Public contact and analytics (overridable; production defaults live in `src/config/site.ts`):

- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_PHONE` (`+1 209 991 4100`)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (`G-YYYS7XZ9EF`)
- `NEXT_PUBLIC_CLARITY_ID` (`z6eqcojyhq`)

Leave the email empty until the business confirms an inbox. The site does not invent a street address.

## Notes

New York Department of State details shown on the About page were supplied for the project and should be verified before production publication. Public email is shown only when it looks like a real address. Placeholder values such as `123` / `2334` are hidden.
