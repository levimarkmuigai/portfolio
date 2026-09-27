import type { Project } from "../data";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ heading, projects }: { heading: string; projects: Project[] }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 px-4">
          {heading}
        </h3>
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
