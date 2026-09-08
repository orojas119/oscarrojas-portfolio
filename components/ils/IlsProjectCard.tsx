"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function IlsProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Link
        href={`/ils/${project.slug}`}
        className="group flex h-full flex-col rounded-lg border p-6 transition-colors hover:bg-charcoal/[0.02]"
        style={{ borderColor: "rgba(14,42,24,0.15)" }}
      >
        <div className="flex items-center justify-between mb-4">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: project.accentColor }}
          />
          <span className="text-[9px] tracking-[0.25em] uppercase text-charcoal/40">
            {project.year}
          </span>
        </div>
        <h3
          className="font-display text-2xl uppercase tracking-wide mb-2 group-hover:opacity-70 transition-opacity"
          style={{ color: "#004B23" }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-charcoal/60 leading-relaxed mb-5 flex-1">
          {project.tagline}
        </p>
        {project.impact && (
          <div
            className="pt-4 border-t flex items-baseline justify-between"
            style={{ borderColor: "rgba(14,42,24,0.12)" }}
          >
            <span className="text-[9px] tracking-[0.25em] uppercase text-charcoal/40">
              Est. saved/yr
            </span>
            <span className="font-display text-xl" style={{ color: "#004B23" }}>
              ${project.impact.annualSavings.toLocaleString()}
            </span>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
