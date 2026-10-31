export type SolutionPage = {
  slug: string;
  title: string;
  href: string;
  audience: string;
  keyMessage: string;
  cta: string;
  image: string;
  imageAlt: string;
  lede: string;
  points: { title: string; body: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const solutions: SolutionPage[] = [
  {
    slug: "small-business",
    title: "Small Business Solutions",
    href: "/solutions/small-business",
    audience: "About 1–10 printers",
    keyMessage: "Simplify printer operations.",
    cta: "Request an assessment",
    image: "/images/documents.jpg",
    imageAlt: "Small team reviewing documents at a desk",
    lede: "Printing should not be a second job for the person who also runs the office. A small fleet still needs an owner, a supply plan, and a cost that can be budgeted once a year.",
    points: [
      {
        title: "Less administrative effort",
        body: "Device questions, supply checks, and basic support go to a named owner instead of circulating through the office.",
      },
      {
        title: "Better print-cost visibility",
        body: "Usage is reported from meters or from figures you provide, so the annual conversation starts from a count rather than a surprise invoice.",
      },
      {
        title: "Simplified support",
        body: "Remote assistance covers faults that can be diagnosed at a distance. An on-site visit or a physical repair is included only when the agreement names it.",
      },
      {
        title: "Predictable annual costs",
        body: "The standard agreement is 12 months with one invoice. The price is set for your fleet. It is not a monthly subscription.",
      },
    ],
    seoTitle: "Small Business Managed Print",
    seoDescription:
      "Managed print for small U.S. businesses: less printer administration, clearer costs, and one annual agreement.",
  },
  {
    slug: "mid-market",
    title: "Mid-Market Solutions",
    href: "/solutions/mid-market",
    audience: "About 11–100 printers",
    keyMessage: "Centralize printer administration.",
    cta: "Request an assessment",
    image: "/images/office-work.jpg",
    imageAlt: "Multi-room office interior",
    lede: "Several departments can mean several ways of buying toner and several people who think someone else owns the printers. Mid-market agreements put that work in one place.",
    points: [
      {
        title: "Multiple departments",
        body: "The fleet record can group devices by location or department so usage and exceptions are not mixed into one undifferentiated list.",
      },
      {
        title: "Printer usage visibility",
        body: "Volume is tracked from supported meters or from scheduled readings. The method is labeled, so a report does not pretend to be live when it is not.",
      },
      {
        title: "Centralized reporting",
        body: "Operations and finance review the same usage record instead of reconstructing it from vendor invoices.",
      },
      {
        title: "Consistent configurations",
        body: "Drivers, queues, and supported settings can be administered remotely so a new hire does not inherit a one-off setup. Hands-on setup is included only when the agreement names it.",
      },
      {
        title: "Ongoing management",
        body: "The agreement stays in force for the year. Billing happens once. Reviews happen as the fleet changes.",
      },
    ],
    seoTitle: "Mid-Market Printer Management",
    seoDescription:
      "Centralized printer administration for mid-market U.S. teams: reporting, consistent configuration, and an annual agreement.",
  },
  {
    slug: "enterprise",
    title: "Enterprise Solutions",
    href: "/solutions/enterprise",
    audience: "About 100 or more printers",
    keyMessage: "Manage distributed printer fleets.",
    cta: "Discuss enterprise requirements",
    image: "/images/meeting.jpg",
    imageAlt: "Large conference room in a commercial building",
    lede: "Distributed offices need one operating model for printers, not a different informal process in every city. Enterprise agreements are written for that scale.",
    points: [
      {
        title: "Multi-location infrastructure",
        body: "Remote oversight can cover offices that are not visited every month. An on-site visit is scheduled for the sites and tasks the agreement names, not assumed for every building.",
      },
      {
        title: "Fleet-wide reporting",
        body: "Usage and exceptions can be reviewed across locations, with each device marked as monitored or reported.",
      },
      {
        title: "Centralized oversight",
        body: "A named owner is accountable for the agreement, so local staff are not left to discover who handles a stopped device.",
      },
      {
        title: "Security and governance",
        body: "Secure printing configuration follows your existing policy and the controls the devices support. Cheetara Prints does not claim a certification you have not been shown.",
      },
      {
        title: "Customized agreements",
        body: "Scope, supplies, support hours, and price are written for the fleet. The commercial shape remains one annual invoice for a year of management.",
      },
    ],
    seoTitle: "Enterprise Print Management",
    seoDescription:
      "Enterprise print management for distributed offices: centralized reporting, remote oversight, and on-site work where the annual agreement includes it.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
