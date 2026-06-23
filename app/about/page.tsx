import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Oscar Rojas",
  description:
    "About Oscar Rojas, a data engineer with 6+ years in automation, infrastructure, and data.",
};

const skills: Record<string, string[]> = {
  Languages: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  "Data Engineering": [
    "dbt",
    "Apache Airflow",
    "Apache Spark",
    "Pandas",
    "BigQuery",
    "Snowflake",
  ],
  Cloud: ["AWS (S3, Lambda, EC2)", "GCP", "Docker"],
  Tools: ["Git", "PostgreSQL", "Grafana", "Linux", "VS Code"],
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Bio */}
      <div className="mb-14">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-[#f7f1ed] mb-8">
          About
        </h1>
        <div className="space-y-5 text-stone-600 dark:text-stone-400 leading-relaxed text-base">
          <p>
            I&apos;m a data engineer with 6+ years of experience across automation, infrastructure,
            and data systems. My path started in software — building automation tools, backend APIs,
            and infrastructure — before pivoting fully into data. That background shapes how I work:
            I write Python that handles failures gracefully, build dbt models with real test
            coverage, and design pipelines meant to be maintained, not just to run once.
          </p>
          <p>
            Right now I&apos;m building an end-to-end NBA analytics pipeline and a real-time game
            tracker — projects that let me go deep across the full data stack, from raw API
            ingestion to clean, documented models. Sports analytics is my obsession.
          </p>
          <p>
            B.A. in Computer Science from Florida International University. Open to data engineering
            roles where reliability and craft are taken seriously.
          </p>
        </div>
      </div>

      {/* Education */}
      <section className="mb-14">
        <h2 className="text-lg font-semibold text-stone-900 dark:text-[#f7f1ed] mb-5">
          Education
        </h2>
        <div className="border border-stone-200 dark:border-stone-700 rounded-xl p-5 bg-white dark:bg-stone-800">
          <p className="font-semibold text-stone-900 dark:text-[#f7f1ed]">B.A. Computer Science</p>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
            Florida International University (FIU)
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="text-lg font-semibold text-stone-900 dark:text-[#f7f1ed] mb-6">Skills</h2>
        <div className="space-y-7">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <section>
        <h2 className="text-lg font-semibold text-stone-900 dark:text-[#f7f1ed] mb-5">
          Find me online
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/orojas119"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/oscar-rojas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:rojaso125@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email
          </a>
        </div>
      </section>
    </div>
  );
}
