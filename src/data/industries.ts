export type IndustryPage = {
  slug: string;
  title: string;
  href: string;
  summary: string;
  meta: string;
  seoTitle: string;
  seoDescription: string;
  lede: string;
  image: string;
  imageAlt: string;
  help: string[];
  challenges: { title: string; body: string }[];
  fleet: { title: string; body: string }[];
  remote: string[];
  agreement: { title: string; body: string }[];
};

export const industries: IndustryPage[] = [
  {
    slug: "corporate-offices",
    title: "Corporate Offices",
    href: "/industries/corporate-offices",
    summary: "Shared floor devices, department queues, and one annual view of office printing.",
    meta: "Shared floor devices",
    seoTitle: "Managed Print for Corporate Offices",
    seoDescription:
      "Managed print for corporate offices: shared devices, department queues, and on-site or remote support as the annual agreement sets.",
    lede: "Corporate floors depend on shared devices for contracts, board books, HR packets, and the ordinary jobs that move between departments.",
    image: "/images/meeting.jpg",
    imageAlt: "Conference room in a commercial office",
    help: [
      "Cheetara Prints starts with the printers already on each floor. The assessment lists the devices, the departments that use them, and whether usage will come from a meter or from figures the office supplies.",
      "The commercial shape is a 12-month agreement, invoiced once, with service continuing through the year. The price is written for that fleet. It is not a monthly supply plan and it is not published as a package rate.",
    ],
    challenges: [
      {
        title: "Queues without an owner",
        body: "A floor can have several devices and no person who is accountable when one of them stops. Work moves to the next machine, and the original fault stays open.",
      },
      {
        title: "Department spikes",
        body: "Legal, finance, and people teams do not print on the same calendar. A board cycle or a benefits enrollment can empty a tray that looked fine the week before.",
      },
      {
        title: "Supplies bought in the moment",
        body: "Whoever notices the empty drawer orders the cartridge. The company pays several small invoices instead of seeing the year as one agreement.",
      },
    ],
    fleet: [
      {
        title: "Floor and department record",
        body: "Each device is listed with its floor, the groups that use it, and whether it is a shared machine or a workgroup device.",
      },
      {
        title: "Meter method",
        body: "Live readings are used where the device can provide them. Where it cannot, the agreement says the office will supply the figures, and the two methods are not mixed in a report.",
      },
      {
        title: "Standard queues",
        body: "Drivers and queues are reviewed against the build the company already uses, so a new hire is not pointed at a one-off setup.",
      },
    ],
    remote: [
      "Remote support covers drivers, queues, addressing, and configuration for the devices in the agreement.",
      "Remote support covers queues, drivers, and readings where the device allows them. On-site assessment, installation, and physical repair are scheduled for the floors the agreement names. A standing technician in the building is not assumed.",
    ],
    agreement: [
      {
        title: "Twelve months, one invoice",
        body: "The term is a year. Finance receives one invoice. Service continues across the term rather than restarting each month.",
      },
      {
        title: "Supplies planning",
        body: "Monitoring and replenishment planning are in scope. Shipment is included only when the agreement names the supplier, the coverage, and the delivery duty.",
      },
      {
        title: "A named owner",
        body: "One person is accountable for the account, so a stopped device on the twelfth floor has a next step instead of a shared inbox.",
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Medical Records",
    href: "/industries/healthcare",
    summary: "Reception, clinical, and records devices under one annual agreement.",
    meta: "Clinics and records rooms",
    seoTitle: "Managed Print for Healthcare Offices",
    seoDescription:
      "Managed print for clinics and records offices. Device placement, visits, and job release are written in the agreement. This page is not a compliance certificate.",
    lede: "A clinic or records office prints in more than one place: the front desk, a nursing station, and the room where charts and referrals are assembled.",
    image: "/images/documents.jpg",
    imageAlt: "People reviewing printed plans beside laptops",
    help: [
      "Managed print here is an operating agreement for the devices a practice already owns. Cheetara Prints records which machines sit at reception, which sit near clinical work, and which are used for records packets.",
      "Any rule about who may release a held job, or about how a device is placed, belongs in the written agreement. This page is an operating description. It is not a privacy or security certificate.",
    ],
    challenges: [
      {
        title: "Three rooms, one habit of buying toner",
        body: "Reception, the clinical area, and the records room run out of supplies on different days. The person who orders is often whoever is free, not a named owner.",
      },
      {
        title: "Different jobs on the same device",
        body: "Labels, referrals, consent forms, and after-visit summaries do not have the same urgency. A shared tray makes the urgent job wait behind a long packet.",
      },
      {
        title: "The person who knows the printer is off shift",
        body: "A small practice often has one staff member who can clear a queue. When that person is with patients, the device stays down.",
      },
    ],
    fleet: [
      {
        title: "Room-by-room inventory",
        body: "Devices are counted by where they sit. A label printer and a document printer are listed separately when the practice uses them for different work.",
      },
      {
        title: "Release and placement",
        body: "The assessment asks who can release a held job and whether a device is in a public corridor or a staff area. The answer is written down. It is not assumed from the industry.",
      },
      {
        title: "Usage the practice can stand behind",
        body: "Meters are used where a reading is available. Otherwise the practice supplies the figures, and the report says which method was used.",
      },
    ],
    remote: [
      "Remote assistance covers drivers, connectivity, queues, and configuration during the hours written in the agreement.",
      "Remote support covers configuration and availability questions that can be handled from a distance. A visit to a clinic or records room is included only when the agreement names it. This page does not claim HIPAA compliance or a technician stationed in the building.",
    ],
    agreement: [
      {
        title: "One annual invoice for the named devices",
        body: "The term is 12 months. The practice is invoiced once for the devices and services in scope, instead of paying a stream of supply receipts.",
      },
      {
        title: "Replenishment without a standing shipment promise",
        body: "Consumption is watched so trays are planned. Cartridges ship only when the agreement names the supplier, the coverage, and who delivers.",
      },
      {
        title: "An owner the practice can call",
        body: "The agreement names one person for the account. Privacy duties, if the practice needs them stated, are the duties the agreement itself contains.",
      },
    ],
  },
  {
    slug: "education",
    title: "Education & Campuses",
    href: "/industries/education",
    summary: "Staff, library, and department printers across buildings, with on-site visits only where the agreement names them.",
    meta: "Staff and department devices",
    seoTitle: "Managed Print for Education",
    seoDescription:
      "Managed print for schools and campuses: staff, library, and department devices on one annual agreement. On-site visits cover only the buildings the agreement names.",
    lede: "Schools and colleges print in offices, libraries, and department workrooms, and the busy weeks cluster around registration, exams, and the start of a term.",
    image: "/images/office-work.jpg",
    imageAlt: "Modern office corridor with glass meeting rooms",
    help: [
      "An education agreement can include more than one building. Cheetara Prints keeps the inventory, queues, usage, and a named owner. Remote readings are used where the devices allow them.",
      "Remote support can cover queues and readings across buildings when the devices allow it. A campus walk-through or a hands-on repair is scheduled only for the buildings named in the agreement.",
    ],
    challenges: [
      {
        title: "Each building buys for itself",
        body: "An administrative office, a library, and a faculty workroom can each keep their own toner in a cupboard. Nobody sees the year across the institution.",
      },
      {
        title: "The calendar is not flat",
        body: "Registration and exam weeks pull volume forward. A replenishment plan that assumes every month looks like July will miss September.",
      },
      {
        title: "Staff devices and shared rooms",
        body: "A printer in a staff office and a printer in a lab or library do not serve the same people. Treating them as one pool hides where the faults actually are.",
      },
    ],
    fleet: [
      {
        title: "Separate lists",
        body: "Staff devices, library devices, and department workroom devices are recorded as separate groups, even when they sit on the same agreement.",
      },
      {
        title: "Term notes",
        body: "The assessment records the weeks the institution expects to be heavy, so replenishment planning follows the academic calendar rather than a flat average.",
      },
      {
        title: "The image already in use",
        body: "Queues and drivers are checked against the build the technology team already supports, instead of introducing a second setup.",
      },
    ],
    remote: [
      "Remote support diagnoses drivers, queues, and connectivity for devices in the agreement, from whichever building they are in.",
      "A part that has to be replaced at the machine is physical repair. It is scheduled only for the buildings the agreement includes. Coverage of every campus location is not claimed here.",
    ],
    agreement: [
      {
        title: "One agreement, more than one building",
        body: "The term is 12 months and the invoice is annual. Buildings in scope are listed. Buildings left out are not described as covered.",
      },
      {
        title: "Supplies planned around the term",
        body: "Monitoring and replenishment planning follow the usage pattern. Shipment is a separate duty and is included only when the agreement names it.",
      },
      {
        title: "An owner above the building",
        body: "The institution has one named owner for the account, so a workroom is not left to find a driver fault on its own.",
      },
    ],
  },
  {
    slug: "legal-professional",
    title: "Legal & Professional Services",
    href: "/industries/legal-professional",
    summary: "Practice-group devices and filing spikes, without a confidentiality certificate.",
    meta: "Firms and practice groups",
    seoTitle: "Managed Print for Legal and Professional Services",
    seoDescription:
      "Managed print for law and professional firms. The agreement names an owner, the delivery method, and a usage method. It does not certify confidentiality.",
    lede: "Firms print matter files, filings, and correspondence, often in a rush before a deadline, and often on a device shared by more than one practice group.",
    image: "/images/documents.jpg",
    imageAlt: "People reviewing printed plans beside laptops",
    help: [
      "Cheetara Prints treats a firm like any other fleet: count the devices, name an owner, and state how usage will be collected. The agreement is annual and invoiced once.",
      "The agreement does not certify confidentiality, privilege, or a records standard. If the firm needs a handling rule, that rule has to be written into the agreement itself.",
    ],
    challenges: [
      {
        title: "Deadline weeks",
        body: "A filing date can turn a quiet device into a production printer for two days. Supplies planned from a quiet month will miss that week.",
      },
      {
        title: "Work left in an open tray",
        body: "Matter documents should not sit in a shared output tray. The operating question is who can release a job, and that answer has to be configured and written down.",
      },
      {
        title: "One person orders everything",
        body: "In a small firm the office manager is also the person who clears jams and buys toner. The fleet has no second owner when that person is in a meeting.",
      },
    ],
    fleet: [
      {
        title: "Practice group versus production",
        body: "A device used by one group and a device used for long productions are listed separately, so a spike is visible against the right machine.",
      },
      {
        title: "Held jobs, where the device allows them",
        body: "Release settings are reviewed remotely when the device supports that review. The page does not promise a result the hardware cannot do.",
      },
      {
        title: "Brands confirmed at quoting",
        body: "The firm’s existing devices are identified during the assessment. A brand on the letterhead is not treated as a partnership or as proof the device can be monitored.",
      },
    ],
    remote: [
      "Remote support covers drivers, queues, connectivity, and configuration for the devices named in the agreement.",
      "Cheetara Prints does not offer a confidentiality certificate, and support is not a promise that a document left on a device stayed private. On-site repair is included only when the agreement names it.",
    ],
    agreement: [
      {
        title: "A year, invoiced once",
        body: "The term is 12 months. The firm receives one invoice for the scoped services. Service continues through the year.",
      },
      {
        title: "Usage the finance partner can read",
        body: "Reports use meters where they can be read and figures the firm supplies where they cannot. The method is stated for each device.",
      },
      {
        title: "Rules only if they are written",
        body: "A handling rule the firm cares about is part of the agreement or it is not part of the service. The public page does not add one.",
      },
    ],
  },
  {
    slug: "government-finance",
    title: "Government & Finance",
    href: "/industries/government-finance",
    summary: "Branch and office devices, without an approved-vendor or regulatory claim.",
    meta: "Offices named in the agreement",
    seoTitle: "Managed Print for Government and Finance Offices",
    seoDescription:
      "Managed print for government and finance offices. Coverage is the devices and locations in the annual agreement. This page claims no regulatory certification or approved-vendor status.",
    lede: "Agencies and finance offices print statements, board books, and public packets from branch counters and from back offices that do not share a supply closet.",
    image: "/images/office-work.jpg",
    imageAlt: "Modern office corridor with glass meeting rooms",
    help: [
      "The offer is management of the printers an office already operates, remotely and on site as the agreement sets. Cheetara Prints is not described here as an approved vendor, and this page does not claim a regulatory certification.",
      "Who may see a usage report, and which offices are in scope, is stated in the agreement. Offices that are not listed are not covered by implication.",
    ],
    challenges: [
      {
        title: "Local buying at the branch",
        body: "A branch that orders its own cartridges hides the true cost from the office that owns the budget. The year becomes a stack of small receipts.",
      },
      {
        title: "Lobby devices and staff devices",
        body: "A printer the public can stand next to is not the same operating problem as a printer in a staff room. One inventory line for both is too coarse.",
      },
      {
        title: "Runs that are scheduled, not casual",
        body: "Statement cycles and board calendars create volume on known dates. A plan that ignores those dates will call the cycle a surprise.",
      },
    ],
    fleet: [
      {
        title: "Branch inventory",
        body: "Each office in scope is listed with its devices. A headquarters agreement does not silently include every field office.",
      },
      {
        title: "Public versus staff placement",
        body: "The assessment separates lobby or counter devices from staff devices so queues and supplies are planned for the way each one is used.",
      },
      {
        title: "A stated reporting audience",
        body: "The agreement names who receives usage reports. That is an operating choice. It is not a certification.",
      },
    ],
    remote: [
      "Remote support handles drivers, connectivity, queues, and configuration for devices in the agreement, during the hours the agreement names.",
      "Remote oversight covers status and configuration where the devices allow it. An on-site visit or a physical repair appears only as a term in the agreement. No response-time number is published here.",
    ],
    agreement: [
      {
        title: "Annual term, single invoice",
        body: "Coverage runs for 12 months. The office is invoiced once. The price is customized after the fleet is counted.",
      },
      {
        title: "Supplies as a plan, shipment as a term",
        body: "Monitoring and replenishment planning are included. Delivery of cartridges is included only when the agreement names the supplier, the sites, and the delivery duty.",
      },
      {
        title: "Scope is the list",
        body: "The agreement lists the offices and devices. Status as a vendor, and any regulatory duty, is whatever a separate instrument says. This page does not supply that status.",
      },
    ],
  },
  {
    slug: "retail-hospitality",
    title: "Retail & Hospitality",
    href: "/industries/retail-hospitality",
    summary: "Front desk and back-office printers across sites, on the hours written in the agreement.",
    meta: "Named sites, written hours",
    seoTitle: "Managed Print for Retail and Hospitality",
    seoDescription:
      "Managed print for retail and hospitality back offices and front desks. Support follows the hours in the annual agreement. On-site visits and all-hours coverage are not assumed.",
    lede: "Stores and properties print away from the sales floor: schedules, training packets, and the front-desk jobs that still have to come out of a device in the back.",
    image: "/images/printer-detail.jpg",
    imageAlt: "Close view of a commercial printer on a work surface",
    help: [
      "One annual agreement can name more than one site. Cheetara Prints keeps the fleet record, plans replenishment, and gives the account a named owner.",
      "Remote support follows the hours written in the agreement. An on-site visit is arranged only when the agreement includes one. This page does not promise a round-the-clock desk or emergency arrival.",
    ],
    challenges: [
      {
        title: "The empty tray shows up mid-shift",
        body: "A front desk discovers the fault when a guest or a manager is waiting. Nobody at the site owns the device between those moments.",
      },
      {
        title: "Many small sites",
        body: "A regional group can have a printer in each back office and no shared record of model, queue, or last supply order.",
      },
      {
        title: "Front desk and back office are different",
        body: "A device that prints schedules for staff is not under the same pressure as the device at a reception counter. One description for both hides the difference.",
      },
    ],
    fleet: [
      {
        title: "A record per site",
        body: "Each store or property in scope has its own device list. Sites that are not named are not part of the fleet.",
      },
      {
        title: "Counter versus office",
        body: "Front-desk devices and back-office devices are tagged so usage and faults are read in context.",
      },
      {
        title: "Replenishment from consumption",
        body: "Planning uses meters where a reading exists and site-supplied counts where it does not. Shipment happens only when fulfillment is written into the agreement.",
      },
    ],
    remote: [
      "Remote troubleshooting covers drivers, queues, connectivity, and configuration during the hours the agreement states.",
      "A fault that needs a person standing at the device is physical repair. Cheetara Prints does not describe that visit as included, and does not describe an all-hours desk, unless the agreement says so.",
    ],
    agreement: [
      {
        title: "Twelve months across the named sites",
        body: "The term is annual and the invoice is issued once. Adding a site later is a change to the agreement, not an assumption.",
      },
      {
        title: "Hours are the written hours",
        body: "Remote support begins inside the window the agreement names. That window is not a promise that the device is repaired before the window ends.",
      },
      {
        title: "An owner above the site",
        body: "The account has one named owner, so a store manager is not the only person who can start a driver or queue fault.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
