"use client";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";

const EASE = [0.16, 1, 0.3, 1] as const;

const skills: Record<string, string[]> = {
  Languages: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  "Data Engineering": ["dbt", "Apache Airflow", "Apache Spark", "Pandas", "BigQuery", "Snowflake"],
  Cloud: ["AWS (S3, Lambda, EC2)", "GCP", "Docker"],
  Tools: ["Git", "PostgreSQL", "Grafana", "Linux", "VS Code"],
};

export default function AboutPage() {
  return (
    <>
      <PageHeader section="About" />

      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20 pb-40">
        {/* Heading */}
        <div className="mb-14">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: EASE }}
              className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-charcoal dark:text-cream leading-none"
            >
              OSCAR
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.07 }}
              className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-charcoal dark:text-cream leading-none"
            >
              ROJAS
            </motion.h1>
          </div>
        </div>

        <div className="border-t border-charcoal/10 dark:border-cream/10 mb-14" />

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 space-y-5 max-w-2xl"
        >
          <p className="text-base sm:text-lg text-charcoal/75 dark:text-cream/75 leading-relaxed">
            I&apos;m a data engineer with 6+ years of experience across automation, infrastructure,
            and data systems. My path started in software — building automation tools, backend APIs,
            and infrastructure — before pivoting fully into data. That background shapes how I work:
            I write Python that handles failures gracefully, build dbt models with real test
            coverage, and design pipelines meant to be maintained, not just to run once.
          </p>
          <p className="text-base sm:text-lg text-charcoal/75 dark:text-cream/75 leading-relaxed">
            Right now I&apos;m building an end-to-end NBA analytics pipeline and a real-time game
            tracker — projects that go deep across the full data stack. Sports analytics is my
            obsession.
          </p>
          <p className="text-base sm:text-lg text-charcoal/75 dark:text-cream/75 leading-relaxed">
            B.A. in Computer Science from Florida International University. Open to data engineering
            roles where reliability and craft are taken seriously.
          </p>
        </motion.div>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 dark:text-cream/40 mb-5">
            Education
          </p>
          <div className="border border-charcoal/10 dark:border-cream/10 rounded-xl p-6">
            <p className="font-bold uppercase tracking-wide text-sm text-charcoal dark:text-cream">
              B.A. Computer Science
            </p>
            <p className="text-xs tracking-[0.2em] uppercase text-charcoal/50 dark:text-cream/50 mt-1.5">
              Florida International University (FIU)
            </p>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 dark:text-cream/40 mb-8">
            Skills
          </p>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-charcoal/35 dark:text-cream/35 mb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.12em] uppercase border border-charcoal/10 dark:border-cream/10 text-charcoal/65 dark:text-cream/65"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Links */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/40 dark:text-cream/40 mb-5">
            Find me online
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/Oscar_Rojas_Resume.pdf"
              download="Oscar_Rojas_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-yellow text-charcoal text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-85 transition-opacity"
            >
              Resume ↓
            </a>
            {[
              { label: "GitHub", href: "https://github.com/orojas119" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/oscarrojas119/" },
              { label: "Email", href: "mailto:rojaso125@gmail.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="px-5 py-2.5 rounded-full border border-charcoal/22 dark:border-cream/22 bg-charcoal/[0.05] dark:bg-cream/[0.05] text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/75 dark:text-cream/75 hover:bg-charcoal/10 dark:hover:bg-cream/10 hover:border-charcoal/38 dark:hover:border-cream/38 transition-all"
              >
                {label} →
              </a>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
}
