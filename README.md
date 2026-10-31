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

Optional public contact details:

- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_PHONE`

Leave them empty until the business confirms them. The site does not invent an address or telephone number.

Optional analytics:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Notes

New York Department of State details shown on the About page were supplied for the project and should be verified before production publication. Public email and phone are shown only when they look like real contact details (a valid email, and a phone with at least ten digits). Placeholder values such as `123` / `2334` are hidden.
