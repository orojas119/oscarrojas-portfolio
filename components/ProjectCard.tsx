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
      className={`group relative flex flex-col border rounded-xl p-5 transition-all ${
        isComingSoon
          ? "border-stone-200 dark:border-stone-800 bg-white/40 dark:bg-stone-800/30 opacity-55"
          : "border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-md hover:shadow-stone-200/60 dark:hover:shadow-stone-900/60"
      }`}
    >
      {isComingSoon && (
        <span className="absolute top-4 right-4 text-xs font-medium text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-700 px-2 py-0.5 rounded-full">
          Coming soon
        </span>
      )}
      <h3 className="font-semibold text-stone-900 dark:text-[#f7f1ed] mb-1.5">{project.title}</h3>
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-4 flex-1 leading-relaxed">{project.tagline}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 4).map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
        {project.techStack.length > 4 && (
          <span className="text-xs text-stone-400 dark:text-stone-500 self-center">
            +{project.techStack.length - 4} more
          </span>
        )}
      </div>
      {!isComingSoon && (
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
        >
          View project &rarr;
        </Link>
      )}
    </div>
  );
}
