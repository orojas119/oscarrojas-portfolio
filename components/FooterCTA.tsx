"use client";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const words = ["LET'S", "BUILD", "SOMETHING", "MEANINGFUL"];

export function FooterCTA() {
  return (
    <footer className="max-w-6xl mx-auto px-6 pt-12 pb-40 sm:pb-32">
      {/* Top divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="border-t border-charcoal/10 dark:border-cream/10 origin-left mb-16 sm:mb-20"
      />

      {/* Massive CTA text */}
      <div className="mb-16">
        {words.map((word, i) => (
          <div key={word} className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: EASE, delay: i * 0.07 }}
              className="text-[11vw] sm:text-[9vw] lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.9] text-charcoal dark:text-cream"
            >
              {word}
            </motion.p>
          </div>
        ))}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.28 }}
            className="text-[11vw] sm:text-[9vw] lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.9] text-yellow"
          >
            AND MEMORABLE
          </motion.p>
        </div>
      </div>

      {/* Contact links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
      >
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:rojaso125@gmail.com"
            className="text-xs tracking-[0.25em] uppercase text-charcoal/60 dark:text-cream/60 hover:text-charcoal dark:hover:text-cream transition-colors"
          >
            rojaso125@gmail.com
          </a>
          <a
            href="https://github.com/orojas119"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.25em] uppercase text-charcoal/60 dark:text-cream/60 hover:text-charcoal dark:hover:text-cream transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/oscarrojas119/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.25em] uppercase text-charcoal/60 dark:text-cream/60 hover:text-charcoal dark:hover:text-cream transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal/30 dark:text-cream/30">
          © {new Date().getFullYear()} Oscar Rojas
        </span>
      </motion.div>
    </footer>
  );
}
