import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "./company";

export const metadata: Metadata = {
  title: { absolute: "OER Consulting LLC · Custom software for schools and organizations" },
  alternates: { canonical: "/consulting" },
};

const offerings = [
  {
    title: "School operations software",
    body: "Help desks, event registration and ticketing, emergency room-clearing checklists, HR help desks, purchase orders and ID photo tools, each fitted to the school it runs at. A help desk ticket can show where a student is this period from the bell schedule, and which Wi-Fi access point their iPad is on right now.",
    detail: "Built first for a Miami high school, where these tools run every day.",
    link: { href: "/ils", label: "See the school projects" },
  },
  {
    title: "Messaging platform for organizations",
    body: "A two-way texting CRM for campaigns, law firms and other organizations: contact lists, campaigns, a shared inbox and delivery reports. It is sold and supported through partners, and every customer gets its own Twilio subaccount and its own database.",
    detail: "Opt-outs are honored automatically and texts only go out between 8 a.m. and 8 p.m. in the recipient's time zone.",
  },
  {
    title: "Integrations and automation",
    body: "Connecting the systems an organization already pays for: student information systems such as PowerSchool, Microsoft 365 and Entra ID, SharePoint, device management, network controllers such as Ruckus, and Twilio.",
    detail: "Built as small, documented services the customer's own IT team can understand.",
  },
];

const principles = [
  ["Hosted and maintained by us", "Applications run in our own Microsoft Azure environment with monitoring, backups and security updates included."],
  ["Each customer's data kept apart", "Every customer gets a separate database; staff sign in with their own accounts and multi-factor authentication."],
  ["Built around existing systems", "We connect to what the customer already uses instead of asking them to change how they work."],
  ["Sold with partners", "Technology partners resell and support the platform for their own customers, under their brand."],
];

export default function ConsultingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
      <section className="mb-16 sm:mb-20">
        <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-charcoal dark:text-cream text-balance">
          OER Consulting
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-charcoal/75 dark:text-cream/75 leading-relaxed">
          Custom software for schools and organizations, built around the systems they already run.
          We design it, host it and keep it running.
        </p>
        <p className="mt-4 text-sm text-charcoal/55 dark:text-cream/55">
          {COMPANY.legalName} · Miami, Florida · Founded by {COMPANY.principal}
        </p>
      </section>

      <section aria-labelledby="what-we-build" className="mb-16 sm:mb-20">
        <h2 id="what-we-build" className="text-[11px] tracking-[0.35em] uppercase text-charcoal/50 dark:text-cream/50 mb-6">
          What we build
        </h2>
        <div className="divide-y divide-charcoal/10 dark:divide-cream/10 border-y border-charcoal/10 dark:border-cream/10">
          {offerings.map((o) => (
            <article key={o.title} className="py-8 grid gap-3 sm:grid-cols-[16rem_1fr] sm:gap-10">
              <h3 className="text-xl font-black uppercase tracking-tight text-charcoal dark:text-cream text-balance">{o.title}</h3>
              <div className="space-y-3 max-w-prose">
                <p className="text-charcoal/80 dark:text-cream/80 leading-relaxed">{o.body}</p>
                <p className="text-sm text-charcoal/60 dark:text-cream/60">{o.detail}</p>
                {o.link && (
                  <Link href={o.link.href} className="inline-block text-sm font-semibold underline decoration-yellow decoration-2 underline-offset-4 text-charcoal dark:text-cream">
                    {o.link.label}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="how-we-work" className="mb-16 sm:mb-20">
        <h2 id="how-we-work" className="text-[11px] tracking-[0.35em] uppercase text-charcoal/50 dark:text-cream/50 mb-6">
          How we work
        </h2>
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {principles.map(([term, desc]) => (
            <div key={term}>
              <dt className="font-bold text-charcoal dark:text-cream">{term}</dt>
              <dd className="mt-1 text-charcoal/70 dark:text-cream/70 leading-relaxed">{desc}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="messaging" className="mb-16 sm:mb-20 rounded-lg border border-charcoal/15 dark:border-cream/15 p-6 sm:p-8">
        <h2 id="messaging" className="text-xl font-black uppercase tracking-tight text-charcoal dark:text-cream mb-4">
          Text messaging practices
        </h2>
        <div className="space-y-3 max-w-prose text-charcoal/80 dark:text-cream/80 leading-relaxed">
          <p>
            Texts sent through our messaging platform are sent by our customers to people who have agreed to hear from them.
            Each customer registers its own sender identity with the mobile carriers, and its messages name the organization sending them.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reply <strong>STOP</strong> to any message to stop receiving texts from that sender; the opt-out is applied immediately and kept permanently.</li>
            <li>Reply <strong>HELP</strong> for help, or contact the organization that texted you.</li>
            <li>Message frequency varies by sender. Message and data rates may apply.</li>
            <li>We never sell or share mobile numbers or opt-in data with third parties for their marketing.</li>
          </ul>
          <p className="text-sm">
            Details are in our <Link href="/consulting/privacy" className="underline underline-offset-4">Privacy Policy</Link> and{" "}
            <Link href="/consulting/terms" className="underline underline-offset-4">Terms of Service</Link>.
          </p>
        </div>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact" className="text-[11px] tracking-[0.35em] uppercase text-charcoal/50 dark:text-cream/50 mb-6">
          Contact
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="font-bold text-charcoal dark:text-cream">Email</p>
            <a href={`mailto:${COMPANY.email}`} className="text-charcoal/75 dark:text-cream/75 underline decoration-yellow decoration-2 underline-offset-4">
              {COMPANY.email}
            </a>
          </div>
          <div>
            <p className="font-bold text-charcoal dark:text-cream">Mailing address</p>
            <address className="not-italic text-charcoal/75 dark:text-cream/75">
              {COMPANY.legalName}
              <br />
              {COMPANY.street}
              <br />
              {COMPANY.cityLine}
            </address>
          </div>
          <div>
            <p className="font-bold text-charcoal dark:text-cream">Partnerships</p>
            <p className="text-charcoal/75 dark:text-cream/75">
              Technology providers interested in offering our apps to their customers can reach us by email.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
