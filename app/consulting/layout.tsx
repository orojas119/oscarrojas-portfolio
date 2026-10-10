import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "./company";

export const metadata: Metadata = {
  title: { default: "OER Consulting LLC", template: "%s · OER Consulting LLC" },
  description:
    "OER Consulting LLC builds and hosts custom software for schools and organizations in Miami and beyond: school operations apps, a partner-sold messaging platform, and integrations.",
  openGraph: {
    title: "OER Consulting LLC",
    description: "Custom software for schools and organizations, built around the systems they already run.",
    url: "https://oscar-rojas.dev/consulting",
    siteName: "OER Consulting LLC",
    type: "website",
  },
};

const nav = [
  { href: "/consulting", label: "Company" },
  { href: "/consulting/privacy", label: "Privacy" },
  { href: "/consulting/terms", label: "Terms" },
];

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b border-charcoal/10 dark:border-cream/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <Link href="/consulting" className="font-black uppercase tracking-tight text-sm text-charcoal dark:text-cream">
            {COMPANY.legalName}
          </Link>
          <nav aria-label="Consulting" className="flex items-center gap-5">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[11px] tracking-[0.25em] uppercase text-charcoal/55 dark:text-cream/55 hover:text-charcoal dark:hover:text-cream transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="border-t border-charcoal/10 dark:border-cream/10">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-36 sm:pb-32 grid gap-6 sm:grid-cols-3 text-sm text-charcoal/65 dark:text-cream/65">
          <div>
            <p className="font-bold text-charcoal dark:text-cream">{COMPANY.legalName}</p>
            <p>A {COMPANY.state} limited liability company</p>
          </div>
          <address className="not-italic">
            {COMPANY.street}
            <br />
            {COMPANY.cityLine}
          </address>
          <div className="flex flex-col gap-1">
            <a href={`mailto:${COMPANY.email}`} className="underline underline-offset-4 hover:text-charcoal dark:hover:text-cream">
              {COMPANY.email}
            </a>
            <span>
              <Link href="/consulting/privacy" className="underline underline-offset-4 hover:text-charcoal dark:hover:text-cream">Privacy</Link>
              {" · "}
              <Link href="/consulting/terms" className="underline underline-offset-4 hover:text-charcoal dark:hover:text-cream">Terms</Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
