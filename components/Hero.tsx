"use client";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const revealUp = {
  hidden: { y: "110%", opacity: 0 },
  show: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.8, delay },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Vertical side labels */}
      <motion.span
        custom={0.6}
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.35em] uppercase text-charcoal/40 dark:text-cream/40 whitespace-nowrap"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        Data Engineer
      </motion.span>

      <motion.span
        custom={0.6}
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.35em] uppercase text-charcoal/40 dark:text-cream/40 whitespace-nowrap"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%)" }}
      >
        Miami · FL
      </motion.span>

      {/* Centre content */}
      <div className="text-center w-full max-w-6xl mx-auto">
        {/* Abstract squiggle */}
        <motion.div
          custom={0.1}
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="mb-8 sm:mb-10"
        >
          <svg
            className="mx-auto w-40 sm:w-56 h-10 sm:h-14 text-charcoal/30 dark:text-cream/30"
            viewBox="0 0 240 55"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M 8 38 Q 25 10 48 32 Q 70 54 92 32 Q 114 10 136 32 Q 155 50 172 32 Q 188 16 205 28 Q 218 38 232 30" />
          </svg>
        </motion.div>

        {/* OSCAR */}
        <div className="overflow-hidden">
          <motion.h1
            custom={0.25}
            variants={revealUp}
            initial="hidden"
            animate="show"
            className="text-[16vw] sm:text-[14vw] lg:text-[12vw] font-black uppercase tracking-tighter leading-[0.9] text-charcoal dark:text-cream"
          >
            OSCAR
          </motion.h1>
        </div>

        {/* ROJAS */}
        <div className="overflow-hidden">
          <motion.h1
            custom={0.38}
            variants={revealUp}
            initial="hidden"
            animate="show"
            className="text-[16vw] sm:text-[14vw] lg:text-[12vw] font-black uppercase tracking-tighter leading-[0.9] text-charcoal dark:text-cream"
          >
            ROJAS
          </motion.h1>
        </div>

        {/* Role tags */}
        <motion.div
          custom={0.6}
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-x-5 gap-y-2"
        >
          {["Python", "dbt", "SQL", "Apache Airflow"].map((tag, i) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-charcoal/50 dark:text-cream/50"
            >
              {tag}
              {i < 3 && (
                <span className="ml-5 text-charcoal/20 dark:text-cream/20">·</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          custom={0.9}
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="mt-16 sm:mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.4em] uppercase text-charcoal/30 dark:text-cream/30">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-charcoal/20 dark:bg-cream/20"
          />
        </motion.div>
      </div>
    </section>
  );
}
