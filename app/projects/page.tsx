"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectRow } from "@/components/ProjectRow";
import { PageHeader } from "@/components/PageHeader";

const EASE = [0.16, 1, 0.3, 1] as const;

const deProjects = projects.filter((p) => p.category !== "Internal Tools");
const ilsProjects = projects.filter((p) => p.category === "Internal Tools");

export default function ProjectsPage() {
  return (
    <>
      <PageHeader section="Projects" />
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 pb-40">
        {/* Heading */}
        <div className="mb-14">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="text-5xl sm:text-6xl font-black uppercase tracking-[0.1em] text-charcoal dark:text-cream leading-none"
            >
              ALL
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.07 }}
              className="text-5xl sm:text-6xl font-black uppercase tracking-[0.1em] text-charcoal dark:text-cream leading-none"
            >
              PROJECTS
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-sm text-charcoal/50 dark:text-cream/50"
          >
            Data engineering, software, and internal tools I&apos;ve built.
          </motion.p>
        </div>

        {/* Section 1: Data Engineering & Software */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 dark:text-cream/40 mb-4"
        >
          Data Engineering &amp; Software
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className="border-t border-charcoal/10 dark:border-cream/10 origin-left"
        />
        <div className="mb-16">
          {deProjects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Section 2: Enterprise / Internal Tools */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 dark:text-cream/40 mb-4"
        >
          Enterprise / Internal Tools
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="border-t border-charcoal/10 dark:border-cream/10 origin-left"
        />
        <div>
          {ilsProjects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
