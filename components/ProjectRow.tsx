"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

interface ProjectRowProps {
  project: Project;
  index: number;
}

export function ProjectRow({ project, index }: ProjectRowProps) {
  const isComingSoon = project.status === "planned";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
    >
      <Link
        href={isComingSoon ? "#" : `/projects/${project.slug}`}
        aria-disabled={isComingSoon}
        tabIndex={isComingSoon ? -1 : undefined}
        className={`group block border-b border-charcoal/10 dark:border-cream/10 ${isComingSoon ? "cursor-default" : "cursor-pointer"}`}
      >
        <div className="flex items-center gap-4 sm:gap-8 py-6 sm:py-8 px-0 transition-colors duration-300 group-hover:bg-charcoal/[0.02] dark:group-hover:bg-cream/[0.03]">
          {/* Year */}
          <span className="hidden sm:block text-xs tracking-[0.25em] uppercase text-charcoal/35 dark:text-cream/35 w-12 shrink-0">
            {project.year}
          </span>

          {/* Thumbnail */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="relative w-20 h-14 sm:w-28 sm:h-20 rounded-lg shrink-0 overflow-hidden"
            style={{ backgroundColor: project.accentColor + "22" }}
          >
            {project.coverImage && !isComingSoon ? (
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, 112px"
              />
            ) : (
              <>
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}33 0%, ${project.accentColor}99 100%)`,
                  }}
                />
                {isComingSoon && (
                  <span className="absolute inset-0 flex items-center justify-center text-[8px] tracking-widest uppercase text-charcoal/50 dark:text-cream/50">
                    Soon
                  </span>
                )}
              </>
            )}
          </motion.div>

          {/* Title + mobile year */}
          <div className="flex-1 min-w-0">
            <span className="sm:hidden block text-[9px] tracking-[0.25em] uppercase text-charcoal/35 dark:text-cream/35 mb-1">
              {project.year}
            </span>
            <h3 className="text-base sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-charcoal dark:text-cream group-hover:text-charcoal/70 dark:group-hover:text-cream/70 transition-colors duration-300 truncate">
              {project.title}
            </h3>
            <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-charcoal/40 dark:text-cream/40 mt-1">
              {project.discipline}
            </p>
          </div>

          {/* Arrow */}
          <motion.span
            className="hidden sm:block text-lg text-charcoal/30 dark:text-cream/30 group-hover:text-charcoal dark:group-hover:text-cream shrink-0 transition-colors duration-300"
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            →
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
}
