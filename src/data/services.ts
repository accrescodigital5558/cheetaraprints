import type { Faq } from "@/data/faq";

export type ServicePage = {
  slug: string;
  title: string;
  href: string;
  eyebrow: string;
  meta: string;
  summary: string;
  image: string;
  imageAlt: string;
  lede: string;
  message: string;
  sections: { heading: string; paragraphs: string[] }[];
  included: string[];
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export const services: ServicePage[] = [
  {
    slug: "managed-print-services",
    title: "Managed Print Services",
    href: "/services/managed-print-services",
    eyebrow: "Primary agreement",
    meta: "12-month operating agreement",
    summary: "Fleet oversight, supply planning, reporting, and a named owner, delivered on site and remotely as the agreement sets.",
    image: "/images/printer-detail.jpg",
    imageAlt: "Office printer on a work surface in warm evening light",
    lede: "A managed print program is an operating agreement for the machines your business already uses.",
    message: "Cheetara Prints manages the printing environment you have. The agreement is annual, the work is continuous, and the price is written for the fleet and services you select.",
    sections: [
      {
        heading: "What managed print services mean",
        paragraphs: [
          "Managed print is the ongoing administration of business printers: who owns the fleet, how supplies are planned, how usage is reported, and who answers when a device stops.",
          "Cheetara Prints does not sell printers as a retail shop. The program starts with the devices already in your offices.",
        ],
      },
      {
        heading: "Fleet management",
        paragraphs: [
          "Where a device and the network allow it, status, configuration, and usage are reviewed remotely. Where a live reading is not available, the agreement uses meters or figures your team supplies. On-site assessment and hands-on work are added only for the tasks the agreement names.",
          "The assessment separates devices that can be monitored from devices that will be reported on a schedule.",
        ],
      },
      {
        heading: "Supplies and consumption",
        paragraphs: [
          "The public service includes supply monitoring and replenishment planning. Shipment is included only when the signed agreement names the supplier, the coverage, and the delivery responsibility.",
        ],
      },
      {
        heading: "Break-fix and response windows",
        paragraphs: [
          "Remote assistance follows the hours and response window written in the agreement. A response window is the time to begin work, not a promise that every fault will be resolved in that time.",
          "Distance support and on-site work are different. Installation, maintenance, parts, and physical repair are included only when the agreement names them.",
        ],
      },
      {
        heading: "Usage reporting and ownership",
        paragraphs: [
          "Reports are prepared so finance and operations can see volume and exceptions. Each agreement names an owner for the account, so a stopped device has a person to call.",
        ],
      },
    ],
    included: [
      "Oversight of the agreed fleet",
      "Supply monitoring and replenishment planning",
      "Usage reporting from meters or supplied figures",
      "Remote technical assistance within the written terms",
      "A named service owner",
      "An annual review of scope and renewal",
    ],
    faqs: [
      {
        question: "Who is eligible?",
        answer:
          "U.S. businesses with more than a couple of printers, including small offices, multi-department companies, and distributed enterprises. Printer counts on this site describe the audience. They are not contractual limits.",
      },
      {
        question: "How is the annual price set?",
        answer:
          "After the fleet is counted. The quote reflects device count, locations, usage method, and the services named in the agreement. Cheetara Prints does not publish a fixed package price.",
      },
    ],
    seoTitle: "Managed Print Services",
    seoDescription:
      "Managed print services. A 12-month agreement with one annual invoice, fleet oversight, and a named service owner.",
  },
  {
    slug: "printer-fleet-management",
    title: "Printer Fleet Management",
    href: "/services/printer-fleet-management",
    eyebrow: "Visibility",
    meta: "Inventory, meters, and utilization",
    summary: "One record of the devices you run, how they are used, and where attention is needed.",
    image: "/images/office-work.jpg",
    imageAlt: "Modern office corridor with glass meeting rooms",
    lede: "Fleet management gives the business a current picture of its printers, instead of a drawer of invoices and a shared inbox.",
    message: "Cheetara Prints keeps the inventory, reviews volume, and recommends changes. Live status is used where the device supports it. Everything else is labeled as reported information.",
    sections: [
      {
        heading: "What the fleet record covers",
        paragraphs: [
          "Inventory, location, and a plain description of each device. Status visibility where monitoring is supported. Print volume, meter tracking, and supply levels where the device can report them.",
          "Utilization analysis and fleet performance reporting show which devices are busy, idle, or repeatedly failing.",
        ],
      },
      {
        heading: "Monitoring versus reported data",
        paragraphs: [
          "A live reading and a spreadsheet update are not the same thing. The assessment marks each device. Reports never present a manual meter as a live monitor.",
        ],
      },
      {
        heading: "Administration and recommendations",
        paragraphs: [
          "Remote administration covers the settings the agreement includes. A physical inspection or a device move is on-site work and is included only when the agreement names it. Optimization recommendations are written advice, not an automatic change to your network.",
        ],
      },
    ],
    included: [
      "Printer inventory",
      "Device status where monitoring is supported",
      "Volume and meter tracking",
      "Supply-level monitoring where supported",
      "Utilization and performance reporting",
      "Remote administration within the agreement",
      "Written optimization recommendations",
    ],
    faqs: [
      {
        question: "Do you install monitoring agents?",
        answer:
          "Not as part of this website, and not as an automatic discovery product. If a device can be read remotely, that method is confirmed in the agreement. Otherwise the record uses information you provide.",
      },
    ],
    seoTitle: "Printer Fleet Management",
    seoDescription:
      "Printer fleet management for businesses: inventory, meters, utilization, and reporting that distinguishes live readings from supplied data.",
  },
  {
    slug: "printer-infrastructure-management",
    title: "Printer Infrastructure Management",
    href: "/services/printer-infrastructure-management",
    eyebrow: "Configuration",
    meta: "Queues, drivers, and connectivity",
    summary: "Administration of the print path: addressing, queues, drivers, and the settings your policy requires.",
    image: "/images/meeting.jpg",
    imageAlt: "Conference room in a commercial office",
    lede: "Infrastructure management is the work of keeping printers addressable, drivers consistent, and queues understandable.",
    message: "Cheetara Prints works on the print environment you authorize. Queues, drivers, and addressing are often handled remotely. Cabling, hardware replacement, and other hands-on work are included only when the agreement names them.",
    sections: [
      {
        heading: "Configuration in scope",
        paragraphs: [
          "Network printer configuration, TCP/IP settings, print server administration where you provide access, driver management, and print queue troubleshooting.",
          "Connectivity troubleshooting follows the path from the workstation or queue to the device. Secure printing configuration is applied to the controls the device and your policy already support.",
        ],
      },
      {
        heading: "What remote administration is not",
        paragraphs: [
          "It is not a claim that every legacy device can be reached, and it is not a substitute for your network security program. Access is limited to what the agreement and your administrators allow.",
        ],
      },
    ],
    included: [
      "Network printer configuration",
      "TCP/IP configuration",
      "Print server administration where access is granted",
      "Driver management",
      "Print queue troubleshooting",
      "Connectivity troubleshooting",
      "Secure printing configuration on supported devices",
      "Remote administration",
    ],
    faqs: [
      {
        question: "Will you change our security policy?",
        answer:
          "No. Secure print settings are configured inside the policy you already have. Cheetara Prints does not certify that policy or claim a compliance badge.",
      },
    ],
    seoTitle: "Printer Infrastructure Management",
    seoDescription:
      "Printer infrastructure management: TCP/IP, queues, drivers, print servers, and secure printing configuration, with on-site work only where the agreement includes it.",
  },
  {
    slug: "remote-printer-support",
    title: "Printer Support",
    href: "/services/remote-printer-support",
    eyebrow: "Assistance",
    meta: "Part of managed print",
    summary: "Troubleshooting for drivers, connectivity, queues, and configuration under the managed print agreement, with a clear line between guidance and physical repair.",
    image: "/images/documents.jpg",
    imageAlt: "People reviewing printed plans beside laptops",
    lede: "Printer support under managed print is assistance for problems that can be diagnosed and corrected without opening the machine, plus a path to an on-site visit when the agreement includes one.",
    message: "A named owner coordinates the request. The response window, once management approves one, will be the time to start work. It will not be written as a guarantee that the device is repaired by that time.",
    sections: [
      {
        heading: "What a support session covers",
        paragraphs: [
          "Troubleshooting, driver installation assistance, connectivity diagnosis, print queue troubleshooting, and configuration assistance.",
          "If the fault is outside remote reach, the request follows the path in the agreement. That path can be a clearer diagnosis, a recommended next step, or an on-site visit when the agreement includes one. This page does not dispatch a technician by default, and it does not publish a service territory.",
        ],
      },
      {
        heading: "Availability",
        paragraphs: [
          "Support hours and channels will be the ones written in the agreement. This website does not publish a response-time guarantee, a 24-hour desk, or an emergency arrival window.",
        ],
      },
      {
        heading: "Physical repair",
        paragraphs: [
          "A roller, a board, or a part that has to be replaced at the machine is physical repair. Support from a distance can identify that need. The visit itself is a separate term in the agreement.",
        ],
      },
    ],
    included: [
      "Remote troubleshooting",
      "Driver installation assistance",
      "Connectivity diagnosis",
      "Print queue troubleshooting",
      "Configuration assistance",
      "Remote escalation within the agreement",
      "A distinction between distance support and physical repair",
    ],
    faqs: [
      {
        question: "How fast will someone answer?",
        answer:
          "The public site does not state a response time. Hours and windows are approved by the business and then written into the agreement. Until that approval exists, the quote conversation is the place to set them.",
      },
    ],
    seoTitle: "Printer Support",
    seoDescription:
      "Printer support for U.S. businesses under managed print: drivers, queues, connectivity, and configuration, kept separate from physical repair.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
