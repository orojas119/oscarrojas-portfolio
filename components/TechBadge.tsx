interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase bg-charcoal/6 dark:bg-cream/6 text-charcoal/70 dark:text-cream/70 border border-charcoal/10 dark:border-cream/10">
      {label}
    </span>
  );
}
