import { COMPANY } from "./company";

/** Shared layout for the privacy policy and terms: readable measure, numbered sections. */
export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: { heading: string; body: React.ReactNode }[] }) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none text-charcoal dark:text-cream text-balance">{title}</h1>
      <p className="mt-4 text-sm text-charcoal/55 dark:text-cream/55">
        {COMPANY.legalName} · Last updated {COMPANY.policiesUpdated}
      </p>
      <p className="mt-8 text-lg text-charcoal/80 dark:text-cream/80 leading-relaxed">{intro}</p>
      <div className="mt-10 space-y-10">
        {sections.map((s, i) => (
          <section key={s.heading}>
            <h2 className="text-lg font-black uppercase tracking-tight text-charcoal dark:text-cream">
              {i + 1}. {s.heading}
            </h2>
            <div className="mt-3 space-y-3 text-charcoal/80 dark:text-cream/80 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">{s.body}</div>
          </section>
        ))}
      </div>
    </article>
  );
}
