import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";

export type NavLink = {
  label: string;
  href: string;
  description: string;
  image: string;
  imageAlt: string;
  meta: string;
};

export type NavAside = {
  eyebrow: string;
  title: string;
  body: string;
};

export type NavMenu = {
  kind: "menu";
  id: "services" | "solutions" | "industries";
  label: string;
  items: NavLink[];
  aside: NavAside;
};

export type NavPage = {
  kind: "link";
  label: string;
  href: string;
};

export type NavEntry = NavMenu | NavPage;

export const primaryNav: NavEntry[] = [
  {
    kind: "menu",
    id: "services",
    label: "Services",
    aside: {
      eyebrow: "Where to start",
      title: "Not sure which service fits?",
      body: "Tell us what the fleet is doing. The quote follows the devices you run.",
    },
    items: services.map((service) => ({
      label: service.title,
      href: service.href,
      description: service.summary,
      image: service.image,
      imageAlt: service.imageAlt,
      meta: service.meta,
    })),
  },
  {
    kind: "menu",
    id: "solutions",
    label: "Solutions",
    aside: {
      eyebrow: "Fleet size",
      title: "Tell us how many devices.",
      body: "One year and one invoice, whether the fleet is one office or many sites.",
    },
    items: solutions.map((solution) => ({
      label: solution.title.replace(/ Solutions$/, ""),
      href: solution.href,
      description: solution.keyMessage,
      image: solution.image,
      imageAlt: solution.imageAlt,
      meta: solution.audience,
    })),
  },
  {
    kind: "menu",
    id: "industries",
    label: "Industries",
    aside: {
      eyebrow: "Your work",
      title: "Start from the printing you do.",
      body: "The assessment counts the devices you have. It does not assume a certificate.",
    },
    items: industries.map((industry) => ({
      label: industry.title,
      href: industry.href,
      description: industry.summary,
      image: industry.image,
      imageAlt: industry.imageAlt,
      meta: industry.meta,
    })),
  },
  { kind: "link", label: "About", href: "/about" },
  { kind: "link", label: "How It Works", href: "/how-it-works" },
  { kind: "link", label: "Resources", href: "/resources" },
  { kind: "link", label: "Contact", href: "/contact" },
];

export const quoteCta = {
  href: "/request-assessment",
  label: "Get an Annual Quote",
} as const;

export function pageIsCurrent(pathname: string, href: string) {
  if (href === "/resources") return pathname === href || pathname.startsWith("/resources/");
  return pathname === href;
}

export function menuIsCurrent(pathname: string, items: NavLink[]) {
  return items.some((item) => pathname === item.href);
}
