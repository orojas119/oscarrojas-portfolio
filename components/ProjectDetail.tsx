"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { TechBadge } from "./TechBadge";
import { PageHeader } from "./PageHeader";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <PageHeader section={project.discipline} />

      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20 pb-40">
        {/* Hero */}
        <div className="mb-14">
          <div className="overflow-hidden mb-2">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 dark:text-cream/40"
            >
              {project.year} · {project.discipline}
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-charcoal dark:text-cream leading-none"
            >
              {project.title}
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-base sm:text-lg text-charcoal/60 dark:text-cream/60 leading-relaxed max-w-2xl"
          >
            {project.tagline}
          </motion.p>
          {project.organization && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mt-3 text-[11px] text-charcoal/50 dark:text-cream/50 tracking-wide"
            >
              Built at {project.organization}
            </motion.p>
          )}
        </div>

        {/* Accent rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="h-px origin-left mb-14"
          style={{ backgroundColor: project.accentColor + "66" }}
        />

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          {project.deployment === "private" ? (
            <span className="px-4 py-2 rounded-full border border-charcoal/20 dark:border-cream/20 text-charcoal/40 dark:text-cream/40 text-[10px] uppercase tracking-wide">
              Private Deployment — Built for {project.organization}
            </span>
          ) : project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-charcoal dark:bg-cream text-cream dark:text-charcoal text-xs font-bold tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
            >
              Live Demo →
            </a>
          ) : null}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-charcoal/25 dark:border-cream/25 bg-charcoal/[0.05] dark:bg-cream/[0.05] text-charcoal dark:text-cream text-xs font-bold tracking-[0.2em] uppercase hover:bg-charcoal/10 dark:hover:bg-cream/10 hover:border-charcoal/40 dark:hover:border-cream/40 transition-colors"
            >
              GitHub →
            </a>
          )}
        </motion.div>

        {/* Cover image */}
        {project.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-14"
          >
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-charcoal/10 dark:border-cream/10 shadow-md bg-charcoal/5 dark:bg-cream/5">
              <Image
                src={project.coverImage}
                alt={`${project.title} dashboard`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                priority
              />
            </div>
          </motion.div>
        )}

        {/* Tech stack */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 dark:text-cream/40 mb-4">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </motion.section>

        <div className="border-t border-charcoal/8 dark:border-cream/8 mb-14" />

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 dark:text-cream/40 mb-4">
            Overview
          </p>
          <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed">
            {project.description}
          </p>
        </motion.section>

        {/* What I Built */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 dark:text-cream/40 mb-5">
            What I Built
          </p>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal/70 dark:text-cream/70">
                <span
                  className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: project.accentColor }}
                />
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Screenshot gallery */}
        {project.images && project.images.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-14"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 dark:text-cream/40 mb-5">
              Screenshots
            </p>
            {(() => {
              const captions = [
                "Dashboard Overview",
                "Filter Controls",
                "Impact Score Leaderboard",
                "Technical Architecture",
              ];
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.map((src, i) => (
                    <div key={i}>
                      <div className="relative aspect-video rounded-lg overflow-hidden border border-charcoal/10 dark:border-cream/10 shadow-sm bg-charcoal/5 dark:bg-cream/5">
                        <Image
                          src={src}
                          alt={`${project.title} — ${captions[i] ?? `screenshot ${i + 1}`}`}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 448px"
                        />
                      </div>
                      <p className="mt-2 text-[11px] tracking-[0.08em] uppercase text-charcoal/40 dark:text-cream/40 text-center">
                        {captions[i] ?? `Screenshot ${i + 1}`}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })()}
          </motion.section>
        )}

        {/* What I Learned */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 dark:text-cream/40 mb-5">
            What I Learned
          </p>
          <div className="space-y-4">
            {project.learned.map((item, i) => (
              <p key={i} className="text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </motion.section>

        <div className="mt-16 border-t border-charcoal/8 dark:border-cream/8 pt-8">
          <Link
            href="/projects"
            className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 dark:text-cream/40 hover:text-charcoal dark:hover:text-cream transition-colors"
          >
            ← All projects
          </Link>
        </div>
      </div>
    </>
  );
}
