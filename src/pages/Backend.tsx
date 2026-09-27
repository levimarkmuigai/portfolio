import { backendProjects } from "../data";
import { ProjectGrid } from "../components/ProjectGrid";

export function Backend() {
  return (
    <>
      <div className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-100 mb-4">
            Backend & Systems.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Rust services, concurrent data structures, and async runtimes the projects where I'm
            digging into how things work under the hood.
          </p>
        </div>
      </div>
      <ProjectGrid heading="Systems & Tooling" projects={backendProjects} />
    </>
  );
}
