import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail";

const nonIlsProjects = projects.filter((p) => p.category !== "Internal Tools");

function getNonIlsAdjacentProjects(slug: string) {
  const index = nonIlsProjects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? nonIlsProjects[index - 1] : null,
    next: index < nonIlsProjects.length - 1 ? nonIlsProjects[index + 1] : null,
  };
}

export function generateStaticParams() {
  return nonIlsProjects.map((p) => ({ slug: p.slug }));
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
  if (project.category === "Internal Tools") redirect(`/ils/${slug}`);
  const { prev, next } = getNonIlsAdjacentProjects(slug);

  return <ProjectDetail project={project} prev={prev} next={next} />;
}
