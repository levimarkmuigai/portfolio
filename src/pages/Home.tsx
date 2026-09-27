import { Link } from "react-router-dom";
import { backendProjects, frontendProjects } from "../data";
import { ProjectCard } from "../components/ProjectCard";

export function Home() {
  const featured = [backendProjects[0], frontendProjects[0]].filter(Boolean);

  return (
    <>
      <section className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4 text-orange-600 dark:text-orange-500">
            <img
              src="https://rustacean.net/assets/rustacean-flat-happy.svg"
              alt="Ferris the Rust Mascot"
              className="w-10 h-10 drop-shadow-sm"
            />
            <h1 className="text-2xl font-mono font-bold tracking-tight">Levi Mark Muigai</h1>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-100 mb-6">
            Full-Stack Developer.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8">
            Computer Science graduate (Class of 2026) who likes being close to what the machine is
            actually doing Rust async runtimes, concurrent data structures, and protocol-level
            backend work and just as comfortable shipping the interface on top in React and
            TypeScript. I build things end to end and ship them.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/backend"
              className="font-mono text-sm px-4 py-2 rounded-md bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity"
            >
              View backend work →
            </Link>
            <Link
              to="/frontend"
              className="font-mono text-sm px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors"
            >
              View frontend work →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 px-4">
            About
          </h3>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow"></div>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          I'm graduating next month with a degree in Computer Science, and most of my personal
          projects have grown out of wanting to understand systems from the inside writing a rate
          limiter to learn concurrency primitives, building a TUI to learn how compilers report
          diagnostics, wiring a spaced-repetition tracker to a real deployed backend. That same
          curiosity extends to the frontend: I'm comfortable in React and TypeScript and enjoy
          building the interface layer as much as the systems underneath it. I'm looking for
          full-stack or backend-leaning graduate roles where I can keep building things that hold up
          under real use.
        </p>
      </section>

      {featured.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 px-4">
              Featured Work
            </h3>
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
