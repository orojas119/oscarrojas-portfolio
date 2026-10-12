import type { Metadata } from "next";
import { COMPANY } from "../company";
import { APPS, EFFECTIVE, PLAN, planPrice, price, type Line } from "./pricing";
import { QuoteBuilder } from "./QuoteBuilder";

// Partner price sheet. Password-protected by proxy.ts (PARTNERS_PASSWORD), not linked from the
// site and kept out of search engines: it shows wholesale prices and partner margins.
export const metadata: Metadata = {
  title: "Partner price sheet",
  robots: { index: false, follow: false, nocache: true },
};

const label = "text-[11px] tracking-[0.35em] uppercase text-charcoal/50 dark:text-cream/50";
const muted = "text-charcoal/65 dark:text-cream/65";
const border = "border-charcoal/15 dark:border-cream/15";

function keep(l: Line): string {
  if (l.wholesale === null || l.suggested === null || l.unit === "at cost") return "none";
  if (l.unit === "cents") return `${Math.round((l.suggested - l.wholesale) * 10) / 10}¢`;
  return price(l.suggested - l.wholesale);
}

function PriceTable({ caption, lines, emphasizeFirst = false }: { caption: string; lines: Line[]; emphasizeFirst?: boolean }) {
  return (
    <div className={`overflow-x-auto border ${border}`}>
      <table className="w-full min-w-[36rem] text-sm">
        <caption className={`${label} text-left px-4 pt-4`}>{caption}</caption>
        <thead>
          <tr className={`text-left ${muted}`}>
            <th scope="col" className="px-4 py-3 font-medium">Item</th>
            <th scope="col" className="px-4 py-3 font-medium text-right">You pay us</th>
            <th scope="col" className="px-4 py-3 font-medium text-right">Suggested price</th>
            <th scope="col" className="px-4 py-3 font-medium text-right">You keep</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-charcoal/15 dark:divide-cream/15">
          {lines.map((l, i) => (
            <tr key={l.name} className={`align-top ${emphasizeFirst && i < 2 ? "font-bold" : ""}`}>
              <td className="px-4 py-3">
                {l.name}
                {l.detail && <span className={`block font-normal text-xs mt-0.5 ${muted}`}>{l.detail}</span>}
              </td>
              <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">{price(l.wholesale, l.unit)}</td>
              <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">{price(l.suggested, l.unit)}</td>
              <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap text-emerald-700 dark:text-emerald-300">{keep(l)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const model = [
  ["Once", "License", "A perpetual license to use the app, set up for the customer. Their data stays theirs, with a full export whenever they want it."],
  ["Monthly", "Operations and support", "Hosting, backups, monitoring, security updates, fixes, keeping integrations working, and support."],
  ["Once, optional", "Add-ons", "Integrations and services fitted to the customer. Bought once, kept for good, no monthly increase."],
  ["As used", "Usage", "Only where a unit costs money, such as text messages. Billed monthly at the listed rate."],
];

const examples = [
  {
    title: "A law firm on the CRM",
    detail: "License, registration filed for them and the sign-up form; 10,000 texts a month on one number.",
    rows: [["Customer pays you, once", "$9,500"], ["You pay us, once", "$7,125"], ["You keep, once", "$2,375"], ["Customer pays you, monthly", "$402"], ["You pay us, monthly", "$281"], ["You keep, monthly", "$121"]],
  },
  {
    title: "A school on the Help Desk",
    detail: "License with the PowerSchool schedule and calendar integrations.",
    rows: [["School pays you, once", "$8,100"], ["You pay us, once", "$6,075"], ["You keep, once", "$2,025"], ["School pays you, monthly", "$99"], ["You pay us, monthly", "$59"], ["You keep, monthly", "$40"]],
  },
  {
    title: "A school on All-in-one",
    detail: "Every app, no license, with the PowerSchool schedule and calendar integrations at 25% off.",
    rows: [["School pays you, once", "$2,700"], ["You pay us, once", "$2,025"], ["You keep, once", "$675"], ["School pays you, monthly", "$799"], ["You pay us, monthly", "$479"], ["You keep, monthly", "$320"]],
  },
];

const compare = [
  ["Up front", "License, once (from $4,500)", "Nothing"],
  ["Monthly", "Operations and support, per app (from $99)", `${price(PLAN.suggested)} for every app`],
  ["Commitment", "12 months of the monthly fee", `${PLAN.minimumMonths} months, then month to month`],
  ["New apps", "Bought separately", "Included automatically"],
  ["Add-ons", "List price, once", "25% off, once"],
  ["Switching", "Can move to All-in-one; licenses already bought are kept", "Can buy licenses any time, with 50% of the last 12 months' fees credited (up to half the license price)"],
  ["If they leave", "Keep the license and add-ons they bought", "Data exported; licenses needed to keep using the apps"],
];

const terms = [
  ["The monthly fee covers", ["Hosting, backups and monitoring", "Security updates and bug fixes", "Keeping existing integrations working when the other system changes", "Support, including up to about two hours of small changes a month"]],
  ["Billing", ["License and add-ons invoiced when the order is approved", "Monthly fee billed monthly or yearly (schools usually prefer a yearly purchase order)", "12-month minimum for the monthly fee", "Usage invoiced monthly", "Prices adjusted at most once a year, capped at 5% or inflation"]],
  ["What the customer owns", ["A perpetual license to use the app while the monthly fee is active", "Every add-on it buys, kept for good", "All of its data, with a full export on request or when it leaves", "New features and new integrations are offered as add-ons"]],
  ["All-in-one plan", ["12-month minimum, then month to month with 30 days' notice", "Billed monthly, or yearly by purchase order", "Every current app included, and new apps added automatically", "Add-ons 25% off; usage billed as usual", "Buy licenses any time with a one-time credit: 50% of the last 12 months' plan fees, up to half the license price", "If the customer leaves, its data is exported; to keep using the apps it buys licenses"]],
] as const;

export default function PartnerPriceSheet() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20 space-y-16 sm:space-y-20">
      <section>
        <p className={label}>Partner pricing · Effective {EFFECTIVE}</p>
        <h1 className="mt-4 text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-charcoal dark:text-cream text-balance">
          Partner price sheet
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-charcoal/75 dark:text-cream/75 leading-relaxed">
          What you pay us, what we suggest you charge, and what you keep, for every app we build and host for your customers.
        </p>
        <p className={`mt-4 text-sm ${muted}`}>{COMPANY.legalName} · Prepared for our reseller partners · All prices in USD</p>
      </section>

      <section aria-labelledby="model" className="space-y-6">
        <h2 id="model" className={label}>How it&apos;s priced</h2>
        <p className="max-w-3xl text-charcoal/80 dark:text-cream/80 leading-relaxed">
          Your customer <span className="underline decoration-yellow decoration-[3px] underline-offset-4">buys the app once and owns its license</span>,
          then pays a small monthly fee to keep it running. Extras are bought once too, and they never raise the monthly fee.
          Customers who&apos;d rather not pay up front can take the <a href="#plan" className="underline underline-offset-4">All-in-one plan</a> instead: every app for one monthly fee.
        </p>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l ${border}`}>
          {model.map(([when, name, body]) => (
            <div key={name} className={`p-5 border-r border-b ${border} space-y-1.5`}>
              <p className="text-[11px] tracking-[0.25em] uppercase text-charcoal/50 dark:text-cream/50">{when}</p>
              <p className="font-bold text-charcoal dark:text-cream">{name}</p>
              <p className={`text-sm ${muted}`}>{body}</p>
            </div>
          ))}
        </div>
        <ul className="flex flex-wrap gap-2.5 text-sm" aria-label="What you keep">
          <li className={`border ${border} px-3 py-2`}>You keep <b className="tabular-nums">25%</b> of every license and add-on</li>
          <li className={`border ${border} px-3 py-2`}>You keep <b className="tabular-nums">40%</b> of every monthly fee, All-in-one included</li>
          <li className={`border ${border} px-3 py-2`}>Plus the spread on usage</li>
        </ul>
        <p className={`text-sm ${muted}`}>&ldquo;You keep&rdquo; assumes you sell at our suggested price. You set your own prices; we bill you wholesale.</p>
      </section>

      {APPS.map((app) => (
        <section key={app.key} aria-labelledby={`app-${app.key}`} className="space-y-5">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-t-[3px] border-charcoal dark:border-cream pt-4">
            <h2 id={`app-${app.key}`} className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-charcoal dark:text-cream">{app.name}</h2>
            {app.status && <span className="bg-yellow text-charcoal text-[11px] font-bold tracking-[0.2em] uppercase px-2 py-1">{app.status}</span>}
          </div>
          <p className="max-w-3xl text-charcoal/80 dark:text-cream/80 leading-relaxed">{app.summary}</p>
          {app.note && <p className={`text-sm ${muted}`}>{app.note}</p>}
          <PriceTable caption="Core" lines={app.core} emphasizeFirst />
          <PriceTable caption="Add-ons (one-time)" lines={app.addOns} />
        </section>
      ))}

      <section aria-labelledby="plan" className="space-y-5 scroll-mt-24">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-t-[3px] border-charcoal dark:border-cream pt-4">
          <h2 id="plan" className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-charcoal dark:text-cream">{PLAN.name} plan</h2>
          <span className="bg-yellow text-charcoal text-[11px] font-bold tracking-[0.2em] uppercase px-2 py-1">Subscription</span>
        </div>
        <p className="max-w-3xl text-charcoal/80 dark:text-cream/80 leading-relaxed">
          Every app we offer for one monthly fee, with no license to buy. Today that&apos;s the {APPS.map((a) => a.name).join(" and the ")}; every app we
          launch later is added to the customer&apos;s portal automatically, at no extra charge. Each app is set up when the customer is ready to use it.
        </p>
        <PriceTable caption="Monthly" emphasizeFirst lines={[
          { name: "All-in-one, every app", detail: `Per month; ${PLAN.minimumMonths}-month minimum, then month to month. Hosting, support and updates included.`, wholesale: PLAN.wholesale, suggested: PLAN.suggested },
        ]} />
        <PriceTable caption="Add-ons at 25% off (one-time)" lines={APPS.flatMap((a) => a.addOns.map((l) => ({ ...l, name: `${a.name}: ${l.name}`, detail: undefined, wholesale: planPrice(l.wholesale), suggested: planPrice(l.suggested) })))} />
        <p className={`text-sm ${muted}`}>Texting usage, phone numbers and registration fees are billed at the Messaging CRM rates above.</p>
        <div className={`overflow-x-auto border ${border}`}>
          <table className="w-full min-w-[36rem] text-sm">
            <caption className={`${label} text-left px-4 pt-4`}>License or All-in-one</caption>
            <thead>
              <tr className={`text-left ${muted}`}>
                <th scope="col" className="px-4 py-3 font-medium"><span className="sr-only">Compare</span></th>
                <th scope="col" className="px-4 py-3 font-medium">License</th>
                <th scope="col" className="px-4 py-3 font-medium">All-in-one</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/15 dark:divide-cream/15">
              {compare.map(([k, a, b]) => (
                <tr key={k} className="align-top">
                  <th scope="row" className="px-4 py-3 text-left font-bold text-charcoal dark:text-cream">{k}</th>
                  <td className="px-4 py-3">{a}</td>
                  <td className="px-4 py-3">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`text-sm ${muted}`}>
          Rule of thumb: All-in-one suits customers who want several apps or can&apos;t pay up front. Buying licenses costs less for a customer that
          stays more than about two and a half years. A plan customer that decides to own its apps gets half of the last 12 months&apos; fees
          credited toward the licenses (up to half the license price): after a year on the plan, both licenses cost $7,206 instead of $12,000.
        </p>
      </section>

      <section aria-labelledby="examples" className="space-y-6">
        <h2 id="examples" className={label}>What a deal looks like</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((e) => (
            <div key={e.title} className={`border ${border} p-5 space-y-3`}>
              <h3 className="font-bold text-charcoal dark:text-cream">{e.title}</h3>
              <p className={`text-sm ${muted}`}>{e.detail}</p>
              <dl className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1.5 text-sm">
                {e.rows.map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className={k.startsWith("You keep") ? "font-bold text-charcoal dark:text-cream" : muted}>{k}</dt>
                    <dd className={`text-right tabular-nums ${k.startsWith("You keep") ? "font-bold text-emerald-700 dark:text-emerald-300" : ""}`}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="quote" className="space-y-6">
        <h2 id="quote" className={label}>Build a quote</h2>
        <p className={`text-sm ${muted}`}>Pick an app and its add-ons to see the customer&apos;s price and your share. Usage isn&apos;t included.</p>
        <QuoteBuilder />
      </section>

      <section aria-labelledby="terms" className="space-y-6">
        <h2 id="terms" className={label}>Terms</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {terms.map(([title, items]) => (
            <div key={title} className="space-y-2">
              <h3 className="font-bold text-charcoal dark:text-cream">{title}</h3>
              <ul className={`list-disc pl-5 space-y-1.5 text-sm ${muted}`}>
                {items.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className={`text-sm ${muted}`}>
          Questions or a custom quote: <span className="select-all text-charcoal dark:text-cream">{COMPANY.email}</span>
        </p>
      </section>
    </div>
  );
}
