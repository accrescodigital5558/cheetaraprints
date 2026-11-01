function publishedEmail(raw: string) {
  const value = raw.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "";
  return value;
}

function publishedPhone(raw: string) {
  const value = raw.trim();
  const digits = value.replace(/\D/g, "");
  if (digits.length < 10) return "";
  return value;
}

export const site = {
  name: "Cheetara Prints",
  legalName: "CHEETARA PRINTS, LLC",
  domain: "cheetaraprints.com",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://cheetaraprints.com",
  description:
    "Managed print services for businesses. A 12-month agreement with one annual invoice for fleet oversight, supplies planning, and technical support.",
  positioning: "Your Printers. Our Responsibility.",
  email: publishedEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL || ""),
  phone: publishedPhone(process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1 209 991 4100"),
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-YYYS7XZ9EF",
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID?.trim() || "z6eqcojyhq",
  logo: "/images/cheetara-logo.png",
  icon: "/images/cheetara-favicon.png",
  dosId: "7335690",
  filingDate: "May 23, 2024",
  county: "Kings",
  jurisdiction: "New York, United States",
} as const;

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
