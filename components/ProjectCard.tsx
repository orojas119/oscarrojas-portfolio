import Link from "next/link";
import { TechBadge } from "./TechBadge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.status === "planned";

  return (
    <div
      className={`group relative flex flex-col border rounded-lg p-5 transition-all ${
        isComingSoon
          ? "border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/20 opacity-60"
          : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm"
      }`}
    >
      {isComingSoon && (
        <span className="absolute top-4 right-4 text-xs font-medium text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
          Coming soon
        </span>
      )}
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1.5">{project.title}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 flex-1">{project.tagline}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 4).map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
        {project.techStack.length > 4 && (
          <span className="text-xs text-zinc-400 dark:text-zinc-500 self-center">
            +{project.techStack.length - 4} more
          </span>
        )}
      </div>
      {!isComingSoon && (
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
        >
          View project &rarr;
        </Link>
      )}
    </div>
  );
}
