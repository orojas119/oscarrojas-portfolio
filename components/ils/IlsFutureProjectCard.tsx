import type { Project } from "@/data/projects";

export function IlsFutureProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="flex h-full flex-col rounded-lg border border-dashed p-6 opacity-60"
      style={{ borderColor: "rgba(14,42,24,0.25)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <span
          className="px-2 py-0.5 rounded-full text-[8px] font-bold tracking-[0.15em] uppercase"
          style={{ backgroundColor: "rgba(14,42,24,0.1)", color: "#4B5563" }}
        >
          Planned
        </span>
      </div>
      <h3 className="font-display text-2xl uppercase tracking-wide mb-2 text-charcoal/60">
        {project.title}
      </h3>
      <p className="text-sm text-charcoal/50 leading-relaxed">{project.tagline}</p>
    </div>
  );
}
