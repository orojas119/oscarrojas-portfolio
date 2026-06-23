import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import { TechBadge } from "@/components/TechBadge";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Oscar Rojas`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-10"
      >
        &larr; All projects
      </Link>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
          {project.title}
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">{project.tagline}</p>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            Live Demo &rarr;
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            GitHub &rarr;
          </a>
        )}
      </div>

      {/* Tech stack */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </section>

      <hr className="border-zinc-100 dark:border-zinc-800 mb-10" />

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Overview</h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
          {project.description}
        </p>
      </section>

      {/* What I Built */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          What I Built
        </h2>
        <ul className="space-y-2.5">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400">
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* What I Learned */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          What I Learned
        </h2>
        <div className="space-y-3">
          {project.learned.map((item, i) => (
            <p key={i} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2].map((n) => (
            <div
              key={n}
              className="aspect-video rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center"
            >
              <span className="text-xs text-zinc-400 dark:text-zinc-600">Screenshot {n}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
