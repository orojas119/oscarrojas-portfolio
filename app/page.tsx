import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Oscar Rojas
          </h1>
          <p className="text-lg sm:text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-5">
            Data Engineer | Python &bull; dbt &bull; SQL
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 text-base sm:text-lg">
            Self-taught engineer with 6+ years in automation, infrastructure, and data. I build
            pipelines that move, transform, and make sense of data at scale.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-4 py-2 rounded-md bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              View all projects
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="pb-16 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex flex-wrap gap-10">
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">2</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">Shipped projects</p>
          </div>
          <div>
            <a
              href="https://github.com/orojas12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              GitHub
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">@orojas12</p>
          </div>
          <div>
            <a
              href="https://linkedin.com/in/oscar-rojas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              LinkedIn
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">Connect with me</p>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
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
