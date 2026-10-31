export type Guide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  paragraphs: string[];
};

export const guides: Guide[] = [
  {
    slug: "what-are-managed-print-services",
    title: "What Are Managed Print Services?",
    eyebrow: "Definition",
    description: "Managed print is an operating agreement for printers a business already owns, not a toner subscription.",
    paragraphs: [
      "Managed print services, often shortened to MPS, are a way for a business to hand the day-to-day running of its printers to a specialist. The machines usually stay the customer's. What changes is ownership of the work: inventory, supplies planning, usage reporting, and a person who answers when printing stops.",
      "A toner subscription can refill a cartridge. It does not decide which devices are idle, which queues are misconfigured, or who is accountable across departments. Cheetara Prints treats the program as an operating agreement for the fleet you already have.",
      "The standard commercial shape is a 12-month agreement with one annual invoice. Service continues through the year. The price is written after the fleet is counted. It is not presented as a monthly plan.",
      "Before a business signs, the useful questions are practical. Which devices can be read remotely? Which supplies, if any, will actually be shipped? What does remote support cover, and what still requires a physical repair? Those answers belong in the agreement, not in a slogan.",
    ],
  },
  {
    slug: "managing-printers-across-locations",
    title: "How Businesses Can Manage Printers Across Multiple Locations",
    eyebrow: "Locations",
    description: "A distributed fleet needs one record and one owner, with remote work kept separate from on-site repair.",
    paragraphs: [
      "Printers multiply quietly. A second office opens, a department orders its own device, and within a year nobody can say how many machines the company runs or which ones are worth keeping.",
      "A usable multi-location model starts with an inventory: site, department, model, and how usage will be collected. Some devices can report meters remotely. Others need a person on site to read a counter. Mixing those two methods without labeling them produces reports that look more precise than they are.",
      "Remote administration can keep drivers, queues, and supported settings consistent from one office to the next. It cannot replace a part inside a machine. On-site repair, installation, and relocation are included only when the agreement names them. This site does not publish an on-site territory.",
      "The commercial companion to that model is still annual. One invoice can cover a year of oversight for every location named in the scope, with the price set from the fleet rather than from a generic package.",
    ],
  },
  {
    slug: "understanding-business-printing-costs",
    title: "Understanding Business Printing Costs",
    eyebrow: "Cost",
    description: "Printing cost is devices, supplies, downtime, and the staff time spent chasing all three.",
    paragraphs: [
      "The cartridge price is the visible part of printing cost. The rest sits in emergency orders, devices that nobody uses, staff time spent restarting queues, and service calls that arrive without a written scope.",
      "A clearer picture starts with volume. Meters, where they can be read, show what each device produced. Where they cannot, a scheduled reading is still better than a guess, as long as the report says it was supplied rather than monitored.",
      "Predictability is a separate decision from the unit price of toner. Cheetara Prints quotes an annual contract price after counting the fleet and the services in scope. The company does not publish savings percentages, because those figures depend on a fleet this website has not seen.",
      "Finance teams usually need three things: what the year will cost, what the usage report will contain, and which items can still be billed outside the agreement. Those items should be listed before the invoice is issued, not discovered on a second bill.",
    ],
  },
  {
    slug: "printer-fleet-management-guide",
    title: "Printer Fleet Management: A Practical Guide",
    eyebrow: "Fleet",
    description: "Fleet management is the inventory, the usage record, and the decisions that follow from both.",
    paragraphs: [
      "Fleet management begins with a list that matches the building. Model, location, and owner matter more than a logo wall of manufacturers. Brands are relevant because devices differ in what they can report. They are not, by themselves, a partnership.",
      "Once the list exists, usage and exceptions tell you which devices earn their footprint. Idle equipment and repeated faults are operational facts. Recommendations to consolidate or retire a device should be written as advice, then approved by the customer before anything is removed.",
      "Cheetara Prints distinguishes live monitoring from periodic reporting. A dashboard that invents status for an unreachable device is less useful than a report that says the meter was read by the office last Tuesday.",
      "The guide ends where the agreement begins: a named owner, a review rhythm, and a 12-month term billed once. Fleet management without that ownership tends to slide back into whoever last bought toner.",
    ],
  },
  {
    slug: "how-remote-printer-monitoring-works",
    title: "How Remote Printer Monitoring Works",
    eyebrow: "Monitoring",
    description: "Remote monitoring is a reading from a device that can provide one. It is not assumed for every printer.",
    paragraphs: [
      "Remote monitoring means a supported device can provide status, meters, or supply levels without someone standing in front of it. The path depends on the device, the network, and the access the customer is willing to grant.",
      "Not every printer can do this. Older devices, isolated networks, and locked-down sites often cannot. In those cases the honest method is a scheduled meter or a figure the customer sends. Cheetara Prints labels that method. It does not describe it as live monitoring.",
      "This website does not install a monitoring product, ship an agent, or discover devices automatically. Those are outside the current service. The assessment is where a specific fleet is sorted into monitored and reported devices.",
      "Monitoring supports replenishment planning. It becomes a shipment promise only when a supplier, a coverage area, and a delivery duty are written into the agreement.",
    ],
  },
  {
    slug: "printer-infrastructure-security",
    title: "Improving Printer Infrastructure Security",
    eyebrow: "Security",
    description: "Printer security is configuration inside the policy you already have, not a badge on a website.",
    paragraphs: [
      "Printers sit on the same networks as everything else, and they are often configured once and then forgotten. Default passwords, open queues, and stored documents are ordinary risks. They are also specific to the devices and the policy a company already uses.",
      "Useful work is concrete: addressing, authentication to the controls the device supports, secure release where the fleet can do it, and driver setups that do not leave an open queue as the easy path. Cheetara Prints can administer those settings remotely when the agreement includes them and your administrators grant access.",
      "That work is not a certification. This site does not claim SOC 2, HIPAA, or any other attestation. If a customer needs a control described for their own review, it should be written into the agreement in plain language.",
      "Physical security of the device, the room, and the paper output remains the customer's environment. Remote configuration cannot lock a door.",
    ],
  },
  {
    slug: "when-to-consider-managed-print",
    title: "When Should Your Business Consider Managed Print Services?",
    eyebrow: "Fit",
    description: "The usual signal is a fleet nobody owns, supplies that arrive as surprises, and more than a couple of devices.",
    paragraphs: [
      "Managed print is a poor fit for a single home printer. It starts to make sense when several devices serve a business and no one can say who is responsible for them.",
      "The practical test Cheetara Prints uses is simple. You have more than a couple of devices, toner shows up as a surprise, and nobody owns the fleet. We count first, then quote an annual figure.",
      "Other signs are departments buying supplies independently, usage that finance cannot reconstruct, and downtime that waits on whoever is least busy. An annual agreement can take that work on. It is not a guarantee that a technician will arrive at every office.",
      "If the need is a one-time repair or a new machine from a retailer, this is the wrong service. Cheetara Prints manages an environment. It does not operate a storefront.",
    ],
  },
  {
    slug: "annual-managed-print-agreements",
    title: "Annual Managed Print Agreements Explained",
    eyebrow: "Agreement",
    description: "One invoice, twelve months of management, and a scope that is written before the year begins.",
    paragraphs: [
      "An annual managed print agreement is a 12-month operating contract. The customer receives one invoice for that term. The service itself continues through the year: oversight, the support the agreement includes, and the reporting rhythm you set.",
      "Billing once is not the same as working once. The distinction matters because a monthly subscription implies a different commercial relationship. Cheetara Prints does not describe the standard contract that way.",
      "Price is customized. It depends on the devices, the locations, how usage is measured, and which services are actually included. Supplies, response windows, and physical repair are included only when the document says so. A response window, when one is approved, is a commitment to begin work, not a promise that every fault is fixed by the clock.",
      "Renewal is annual. Before a new term, the fleet should be counted again so the next invoice matches the environment you have, not the one you had twelve months earlier.",
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
