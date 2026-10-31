export const site = {
  name: "Cheetara Prints",
  legalName: "CHEETARA PRINTS, LLC",
  domain: "cheetaraprints.com",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://cheetaraprints.com",
  description:
    "On-site and remote managed print services for businesses. One annual payment covers a full year of fleet oversight, support, and a customized agreement.",
  positioning: "Your Printers. Our Responsibility.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  dosId: "7335690",
  filingDate: "May 23, 2024",
  county: "Kings",
  jurisdiction: "New York, United States",
} as const;

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
