"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ImpactSection } from "./ImpactSection";

const EASE = [0.16, 1, 0.3, 1] as const;
const SWIPE_DISTANCE_THRESHOLD = 60;
const SWIPE_DIRECTION_RATIO = 1.5;

function IlsTechBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase text-charcoal/70 border"
      style={{ background: "rgba(14,42,24,0.05)", borderColor: "rgba(14,42,24,0.12)" }}
    >
      {label}
    </span>
  );
}

export function IlsProjectDetail({
  project,
  prev = null,
  next = null,
}: {
  project: Project;
  prev?: Project | null;
  next?: Project | null;
}) {
  const router = useRouter();
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function handleTouchStart(e: React.TouchEvent) {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (
      Math.abs(dx) < SWIPE_DISTANCE_THRESHOLD ||
      Math.abs(dx) < Math.abs(dy) * SWIPE_DIRECTION_RATIO
    ) {
      return;
    }
    if (dx > 0 && prev) router.push(`/ils/${prev.slug}`);
    else if (dx < 0 && next) router.push(`/ils/${next.slug}`);
  }

  return (
    <div
      className="max-w-4xl mx-auto px-6 py-16 sm:py-20 pb-40"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {(prev || next) && (
        <div className="lg:hidden flex items-center justify-center gap-2 mb-8 text-[9px] tracking-[0.3em] uppercase text-charcoal/35">
          {prev && <span>← Swipe</span>}
          {prev && next && <span className="text-charcoal/15">·</span>}
          {next && <span>Swipe →</span>}
        </div>
      )}

      {/* Hero */}
      <div className="mb-14">
        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40"
          >
            {project.year} · {project.discipline}
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wide leading-none"
            style={{ color: "#004B23" }}
          >
            {project.title}
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-base sm:text-lg text-charcoal/60 leading-relaxed max-w-2xl"
        >
          {project.tagline}
        </motion.p>
        {project.organization && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-3 text-[11px] text-charcoal/50 tracking-wide"
          >
            Built at {project.organization}
          </motion.p>
        )}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="h-px origin-left mb-14"
        style={{ backgroundColor: "#FFC20E" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="flex flex-wrap gap-3 mb-14"
      >
        <span
          className="px-4 py-2 rounded-full border text-[10px] uppercase tracking-wide text-charcoal/50"
          style={{ borderColor: "rgba(14,42,24,0.2)" }}
        >
          Private Deployment — Built for {project.organization}
        </span>
      </motion.div>

      {project.coverImage && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-14"
        >
          <div
            className="relative aspect-video w-full rounded-lg overflow-hidden border shadow-md"
            style={{ borderColor: "rgba(14,42,24,0.1)", background: "rgba(14,42,24,0.04)" }}
          >
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

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 mb-4">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <IlsTechBadge key={tech} label={tech} />
          ))}
        </div>
      </motion.section>

      <div className="border-t mb-14" style={{ borderColor: "rgba(14,42,24,0.08)" }} />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 mb-4">
          Overview
        </p>
        <p className="text-charcoal/70 leading-relaxed">{project.description}</p>
      </motion.section>

      {project.impact && <ImpactSection impact={project.impact} />}

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 mb-5">
          What I Built
        </p>
        <ul className="space-y-3">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-charcoal/70">
              <span
                className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      {project.images && project.images.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 mb-5">
            Screenshots
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((src, i) => (
              <div key={i}>
                <div
                  className="relative aspect-video rounded-lg overflow-hidden border shadow-sm"
                  style={{ borderColor: "rgba(14,42,24,0.1)", background: "rgba(14,42,24,0.04)" }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} — screenshot ${i + 1}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 448px"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="mb-14"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 mb-5">
          What I Learned
        </p>
        <div className="space-y-4">
          {project.learned.map((item, i) => (
            <p key={i} className="text-sm text-charcoal/70 leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      </motion.section>

      <div
        className="mt-16 border-t pt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3"
        style={{ borderColor: "rgba(14,42,24,0.08)" }}
      >
        <Link
          href="/ils"
          className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 hover:text-charcoal transition-colors"
        >
          ← All ILS projects
        </Link>
        <div className="flex items-center gap-6 ml-auto">
          {prev && (
            <Link
              href={`/ils/${prev.slug}`}
              className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 hover:text-charcoal transition-colors truncate max-w-[10rem] sm:max-w-none"
            >
              ← {prev.title}
            </Link>
          )}
          {next && (
            <Link
              href={`/ils/${next.slug}`}
              className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 hover:text-charcoal transition-colors truncate max-w-[10rem] sm:max-w-none"
            >
              {next.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
