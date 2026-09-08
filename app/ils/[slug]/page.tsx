import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getIlsProjects, getProjectBySlug, getIlsAdjacentProjects } from "@/data/projects";
import { IlsProjectDetail } from "@/components/ils/IlsProjectDetail";

export function generateStaticParams() {
  return getIlsProjects().map((p) => ({ slug: p.slug }));
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
    title: `${project.title} · ILS Dev Projects · Oscar Rojas`,
    description: project.tagline,
  };
}

export default async function IlsProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || project.organization !== "Immaculata-La Salle High School" || project.status !== "live") {
    notFound();
  }
  const { prev, next } = getIlsAdjacentProjects(slug);

  return <IlsProjectDetail project={project} prev={prev} next={next} />;
}
