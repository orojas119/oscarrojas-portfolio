"use client";
import { motion } from "framer-motion";
import type { ProjectImpact } from "@/data/projects";

export function ImpactSection({ impact }: { impact: ProjectImpact }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mb-14 rounded-xl border p-6 sm:p-8"
      style={{ borderColor: "rgba(14,42,24,0.15)", background: "rgba(0,75,35,0.03)" }}
    >
      <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 mb-6">
        Impact
      </p>

      <p className="text-sm text-charcoal/60 mb-6 leading-relaxed">
        <span className="font-semibold text-charcoal/80">Who it serves — </span>
        {impact.peopleServed}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div
          className="rounded-lg p-5"
          style={{ background: "rgba(220,38,38,0.05)", borderLeft: "3px solid rgba(185,28,28,0.5)" }}
        >
          <p className="text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "#B91C1C" }}>
            Before
          </p>
          <p className="text-sm text-charcoal/70 leading-relaxed">{impact.before}</p>
        </div>
        <div
          className="rounded-lg p-5"
          style={{ background: "rgba(0,75,35,0.07)", borderLeft: "3px solid #004B23" }}
        >
          <p className="text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "#004B23" }}>
            After
          </p>
          <p className="text-sm text-charcoal/70 leading-relaxed">{impact.after}</p>
        </div>
      </div>

      <div className="border-t pt-6" style={{ borderColor: "rgba(14,42,24,0.12)" }}>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
          <p className="text-[9px] tracking-[0.3em] uppercase text-charcoal/40">
            Est. Annual Cost Saved
          </p>
          <p className="font-display text-4xl sm:text-5xl leading-none" style={{ color: "#004B23" }}>
            ${impact.annualSavings.toLocaleString()}
            <span className="text-base align-top">/yr</span>
          </p>
        </div>
        <div className="space-y-3">
          {impact.comparables.map((c, i) => (
            <div key={i} className="text-xs text-charcoal/50 leading-relaxed">
              <span className="font-semibold text-charcoal/70">vs. {c.product}</span> ({c.vendor}) —
              est. ${c.annualCost.toLocaleString()}/yr. {c.pricingBasis}.
              <span className="block italic text-charcoal/40 mt-0.5">{c.sourceNote}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10px] text-charcoal/35 leading-relaxed">
          Estimate, not an audited figure — methodology and sources disclosed above for each comparable product.
        </p>
      </div>
    </motion.section>
  );
}
