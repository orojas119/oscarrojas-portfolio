import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-widest uppercase mb-5">
            Data Engineer
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 dark:text-[#f7f1ed] mb-6 leading-[1.05]">
            Oscar Rojas
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 dark:text-stone-400 leading-relaxed mb-10 max-w-2xl">
            Data engineer with roots in software and infrastructure. I build pipelines
            that ingest reliably, transform cleanly, and serve data your team can trust.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-lg bg-stone-900 dark:bg-[#f7f1ed] text-white dark:text-stone-900 text-sm font-semibold hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors"
            >
              View projects
            </Link>
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-sm font-semibold hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="pb-16 border-b border-stone-200 dark:border-stone-800">
        <div className="flex flex-wrap gap-12">
          <div>
            <p className="text-3xl font-bold text-stone-900 dark:text-[#f7f1ed]">2</p>
            <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">Shipped projects</p>
          </div>
          <div>
            <a
              href="https://github.com/orojas119"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-bold text-stone-900 dark:text-[#f7f1ed] hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              GitHub
            </a>
            <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">@orojas119</p>
          </div>
          <div>
            <a
              href="https://linkedin.com/in/oscar-rojas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-bold text-stone-900 dark:text-[#f7f1ed] hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              LinkedIn
            </a>
            <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">Connect with me</p>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-[#f7f1ed]">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-[#f7f1ed] transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
