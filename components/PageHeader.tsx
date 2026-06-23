import Link from "next/link";

interface PageHeaderProps {
  section: string;
}

export function PageHeader({ section }: PageHeaderProps) {
  return (
    <div className="w-full border-b border-charcoal/10 dark:border-cream/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-black uppercase tracking-tight text-sm text-charcoal dark:text-cream hover:text-charcoal/60 dark:hover:text-cream/60 transition-colors"
        >
          OSCAR ROJAS
        </Link>
        <span className="text-[10px] tracking-[0.35em] uppercase text-charcoal/40 dark:text-cream/40">
          {section}
        </span>
      </div>
    </div>
  );
}
