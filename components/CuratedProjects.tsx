"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectRow } from "./ProjectRow";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CuratedProjects() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 sm:pt-32 pb-0">
      {/* Section header */}
      <div className="mb-12 sm:mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.5em] uppercase text-charcoal/40 dark:text-cream/40 mb-5"
        >
          Selected work
        </motion.p>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[0.12em] text-charcoal dark:text-cream leading-none"
          >
            CURATED
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[0.12em] text-charcoal dark:text-cream leading-none"
          >
            PROJECTS
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xs sm:text-sm text-charcoal/50 dark:text-cream/50 max-w-sm"
        >
          Data engineering and software projects — each one built to solve a real problem.
        </motion.p>
      </div>

      {/* Top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="border-t border-charcoal/10 dark:border-cream/10 origin-left"
      />

      {/* Project rows */}
      {(() => {
        const HOME_SLUGS = ["nba-analytics", "live-game-tracker", "po-automation-platform"];
        const homeProjects = HOME_SLUGS.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);
        return (
          <div>
            {homeProjects.map((project, i) => (
              <ProjectRow key={project.slug} project={project} index={i} />
            ))}
          </div>
        );
      })()}

      {/* View all link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 mb-16"
      >
        <Link
          href="/projects"
          className="text-[10px] tracking-[0.25em] uppercase text-charcoal/50 dark:text-cream/50 hover:text-charcoal dark:hover:text-cream transition-colors"
        >
          View all 7 projects →
        </Link>
      </motion.div>
    </section>
  );
}
