import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Oscar Rojas",
  description: "Data engineering and software engineering projects by Oscar Rojas.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-[#f7f1ed] mb-3">
          Projects
        </h1>
        <p className="text-stone-500 dark:text-stone-400">
          A collection of data engineering and software projects I&apos;ve built.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
