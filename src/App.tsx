import { Server, Shield, Cpu, Cloud, Box } from "lucide-react";
import { projects } from "./data";

function GithubIcon({ size = 24, className = "" }: { size?: number | string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-orange-500/30">
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
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
            Backend & Systems Engineer.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I build backend systems that actually respect your CPU cycles. Most of my time is spent
            in Neovim writing <strong className="text-zinc-900 dark:text-zinc-200">Rust </strong>
            worrying about memory layouts, mechanical sympathy, and zero-cost abstractions. But
            because even systems engineers need to ship usable tools, I sling{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              React, TypeScript, and Tailwind CSS
            </strong>{" "}
            on the frontend. No bloat, just blazing fast, memory-safe software.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 font-mono text-sm">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300">
              <Shield size={16} /> Memory Safety
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300">
              <Server size={16} /> Distributed Systems
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300">
              <Cpu size={16} /> Zero-cost Abstractions
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300">
              <Cloud size={16} /> AWS Infrastructure
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300">
              <Box size={16} /> Docker & Containers
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-10">
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow"></div>
          <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 px-4">
            Systems & Tooling
          </h3>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="relative flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden"
            >
              {/* Dynamic Visual Rendering */}
              {project.codeSnippet ? (
                <div className="aspect-video bg-[#1e1e1e] border-b border-zinc-200 dark:border-zinc-800 p-4 flex flex-col relative overflow-hidden text-left">
                  <div className="absolute top-0 left-0 w-full h-8 bg-black/40 flex items-center px-4 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                    </div>
                    <span className="ml-4 font-mono text-[10px] text-zinc-500">lib.rs</span>
                  </div>
                  <pre className="font-mono text-[11px] leading-relaxed text-orange-400 mt-8 whitespace-pre-wrap overflow-hidden">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              ) : (
                <div
                  className={`aspect-video bg-zinc-100 dark:bg-black border-b border-zinc-200 dark:border-zinc-800 flex relative overflow-hidden ${project.images && project.images.length > 1 ? "grid grid-cols-2 divide-x divide-zinc-200 dark:divide-zinc-800" : ""}`}
                >
                  {project.images?.map((imgSrc, idx) => (
                    <div key={idx} className="relative h-full w-full bg-zinc-100 dark:bg-zinc-950">
                      <img
                        src={imgSrc}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover object-top absolute inset-0"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h4>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 text-center py-8">
        <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400 mb-2">
          Because writing raw HTML in your editor is only fun for so long.
        </p>
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
          Built with React, Vite & Tailwind. Fast by default.
        </p>
      </footer>
    </div>
  );
}

export default App;
