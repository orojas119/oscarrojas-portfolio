// Partner price sheet data (wholesale = what the partner pays OER Consulting). Keep in step with the
// console catalog and docs/PRICING.md in the platform repo. Amounts in cents.
export type Line = { name: string; detail?: string; wholesale: number | null; suggested: number | null; unit?: string };
export type App = {
  key: "crm" | "helpdesk";
  name: string;
  status?: string;
  summary: string;
  note?: string;
  core: Line[];
  addOns: Line[];
};

export const EFFECTIVE = "October 12, 2026";
export const SHARE = { oneTime: 0.25, monthly: 0.4 };

export const APPS: App[] = [
  {
    key: "crm",
    name: "Messaging CRM",
    summary:
      "Texting CRM for campaigns, law firms and advocacy groups: contacts and imports, campaigns, a shared inbox, a texter queue, delivery reports and Teams alerts, with compliance built in (required test sends, optional two-person approval, the 8am to 8pm recipient-time window and automatic opt-outs).",
    core: [
      { name: "License", detail: "One-time, no setup fee", wholesale: 562500, suggested: 750000 },
      { name: "Operations and support", detail: "Per month", wholesale: 8900, suggested: 14900 },
      { name: "Text message (SMS)", detail: "Per segment of up to 160 characters", wholesale: 1.9, suggested: 2.5, unit: "cents" },
      { name: "Picture message (MMS)", wholesale: 4.5, suggested: 6, unit: "cents" },
      { name: "Phone number", detail: "Per number, per month", wholesale: 200, suggested: 300 },
      { name: "Texting registration fees", detail: "10DLC brand, campaign and Campaign Verify, charged by the carriers and registries", wholesale: null, suggested: null, unit: "at cost" },
    ],
    addOns: [
      { name: "Texting registration filed for them", detail: "We prepare and file the 10DLC brand, campaign and Campaign Verify registration and follow it to approval.", wholesale: 60000, suggested: 80000 },
      { name: "Text sign-up web form", detail: "A hosted page that records consent to receive texts; makes registration far easier to approve.", wholesale: 90000, suggested: 120000 },
      { name: "Migration from their previous texting tool", detail: "Contacts, lists, opt-outs and message history.", wholesale: 90000, suggested: 120000 },
      { name: "Microsoft 365: Outlook email on the contact timeline", wholesale: 210000, suggested: 280000 },
      { name: "Reports to SharePoint, OneDrive or Power BI", wholesale: 210000, suggested: 280000 },
      { name: "Another sender or organization", detail: "A second candidate, committee or firm with its own numbers, registration and data.", wholesale: 150000, suggested: 200000 },
      { name: "Landline screening", detail: "Keeps landlines off texting lists; lookups billed at cost.", wholesale: 30000, suggested: 40000 },
    ],
  },
  {
    key: "helpdesk",
    name: "Help Desk",
    status: "Beta",
    summary:
      "An IT help desk built around each school: a public request page with no accounts for students and parents, a staff ticket queue, a knowledge base that suggests answers before a ticket is filed, email updates, reports and Teams alerts. Unlimited staff and requesters, with no per-student or per-technician fees.",
    note: "Beta: the core app is live and can be ordered now. The school integrations are built per school as they are ordered.",
    core: [
      { name: "License", detail: "One-time, per school, no setup fee", wholesale: 337500, suggested: 450000 },
      { name: "Operations and support", detail: "Per month; hosting and email included, no usage charges", wholesale: 5900, suggested: 9900 },
    ],
    addOns: [
      { name: "PowerSchool schedule", detail: "Each ticket shows where the student or teacher is this period: block and room, from the daily export.", wholesale: 180000, suggested: 240000 },
      { name: "PowerSchool or school calendar integration", detail: "Events that need IT are flagged ahead of time, with an email when one moves.", wholesale: 90000, suggested: 120000 },
      { name: "Device management sync", detail: "Serials, models and assigned users from Mosyle, Jamf, Intune or Google Admin.", wholesale: 150000, suggested: 200000 },
      { name: "Live device location on the school network", detail: "Which access point a device is on right now, or where it was last seen (Ruckus, Meraki, Aruba).", wholesale: 240000, suggested: 320000 },
      { name: "Loaner and broken-device workflows", detail: "The school's own fee ladder and close rules, with finance and attendance notified.", wholesale: 120000, suggested: 160000 },
      { name: "School web address and email sender", detail: "For example help.school.org, with email from the school's domain.", wholesale: 30000, suggested: 40000 },
      { name: "Migration from their previous help desk", detail: "Open tickets, history and knowledge-base articles.", wholesale: 90000, suggested: 120000 },
    ],
  },
];

/** "$5,625", "1.9¢", "at cost". */
export function price(value: number | null, unit?: string): string {
  if (unit === "at cost" || value === null) return "at cost";
  if (unit === "cents") return `${value}¢`;
  return (value / 100).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: value % 100 ? 2 : 0 });
}
