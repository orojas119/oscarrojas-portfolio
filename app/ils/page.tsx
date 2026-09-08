"use client";
import { motion } from "framer-motion";
import { getIlsProjects, getIlsImpactSummary } from "@/data/projects";
import { IlsProjectCard } from "@/components/ils/IlsProjectCard";

const EASE = [0.16, 1, 0.3, 1] as const;

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-cream px-6 py-8 text-center">
      <p className="font-display text-4xl sm:text-5xl leading-none" style={{ color: "#004B23" }}>
        {value}
      </p>
      <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-charcoal/50">{label}</p>
    </div>
  );
}

export default function IlsHubPage() {
  const ilsProjects = getIlsProjects();
  const summary = getIlsImpactSummary();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 pb-40">
      {/* Hero */}
      <div className="mb-14 max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.4em] uppercase mb-4"
          style={{ color: "#92400E" }}
        >
          Built for Immaculata-La Salle High School
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-none mb-6"
            style={{ color: "#004B23" }}
          >
            ILS Dev Projects
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg text-charcoal/70 leading-relaxed"
        >
          {summary.toolCount} internal tools, built solo, in daily use across{" "}
          {summary.studentsServed} students and {summary.staffServed} staff, replacing paper
          forms, spreadsheets, and manual workflows with systems built for exactly how this
          school actually runs.
        </motion.p>
      </div>

      {/* Aggregate stat bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-16 border"
        style={{ borderColor: "rgba(14,42,24,0.15)", background: "rgba(14,42,24,0.15)" }}
      >
        <Stat label="Tools Live" value={`${summary.toolCount}`} />
        <Stat
          label="Est. Annual Savings"
          value={`$${summary.totalAnnualSavings.toLocaleString()}`}
        />
        <Stat label="People Served" value={`${summary.studentsServed + summary.staffServed}+`} />
      </motion.div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ilsProjects.map((project, i) => (
          <IlsProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <p className="mt-16 text-[11px] text-charcoal/35 leading-relaxed max-w-2xl">
        &ldquo;Est. Annual Savings&rdquo; compares each tool to a named, less-customized
        commercial product doing a similar job, sized to ILS&apos;s enrollment. Full methodology
        and sources are disclosed on each project&apos;s page. These are estimates, not audited
        figures.
      </p>
    </div>
  );
}
