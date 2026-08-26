"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

function ArrowNav({
  project,
  direction,
}: {
  project: Project;
  direction: "prev" | "next";
}) {
  const [hovered, setHovered] = useState(false);
  const isPrev = direction === "prev";

  return (
    <div
      className={`hidden lg:flex fixed top-1/2 -translate-y-1/2 ${
        isPrev ? "left-6" : "right-6"
      } z-40 items-center`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: isPrev ? -12 : 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isPrev ? -12 : 12 }}
            transition={{ duration: 0.3, ease: EASE }}
            className={`absolute w-36 pointer-events-none ${
              isPrev ? "left-full ml-3" : "right-full mr-3"
            }`}
          >
            <div className="rounded-lg overflow-hidden border border-charcoal/10 dark:border-cream/10 shadow-lg bg-cream dark:bg-charcoal">
              <div
                className="relative aspect-video"
                style={{ backgroundColor: project.accentColor + "22" }}
              >
                {project.coverImage && (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                )}
              </div>
              <div className="px-2.5 py-2">
                <p className="text-[8px] tracking-[0.25em] uppercase text-charcoal/40 dark:text-cream/40 mb-0.5">
                  {isPrev ? "Previous" : "Next"}
                </p>
                <p className="text-[11px] font-bold uppercase text-charcoal dark:text-cream leading-tight truncate">
                  {project.title}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href={`/projects/${project.slug}`}
        aria-label={
          isPrev ? `Previous project: ${project.title}` : `Next project: ${project.title}`
        }
        className="flex items-center justify-center w-12 h-12 rounded-full border border-charcoal/15 dark:border-cream/15 bg-cream/80 dark:bg-charcoal/80 backdrop-blur-sm text-charcoal dark:text-cream hover:border-charcoal/40 dark:hover:border-cream/40 hover:bg-cream dark:hover:bg-charcoal transition-colors"
      >
        <motion.span
          animate={{ x: hovered ? (isPrev ? -2 : 2) : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="text-lg leading-none"
        >
          {isPrev ? "←" : "→"}
        </motion.span>
      </Link>
    </div>
  );
}

export function ProjectCarouselNav({
  prev,
  next,
}: {
  prev: Project | null;
  next: Project | null;
}) {
  if (!prev && !next) return null;
  return (
    <>
      {prev && <ArrowNav project={prev} direction="prev" />}
      {next && <ArrowNav project={next} direction="next" />}
    </>
  );
}
