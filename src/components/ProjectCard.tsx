import { Link } from "react-router-dom";
import type { Project } from "../data";
import { GithubIcon } from "./GithubIcon";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
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
          className={`aspect-video bg-zinc-100 dark:bg-black border-b border-zinc-200 dark:border-zinc-800 flex relative overflow-hidden ${
            project.images && project.images.length > 1
              ? "grid grid-cols-2 divide-x divide-zinc-200 dark:divide-zinc-800"
              : ""
          }`}
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
        <div className="flex justify-between items-start mb-4 gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h4>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Live
              </a>
            )}
          </div>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors shrink-0"
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

        <Link
          to={`/projects/${project.id}`}
          className="mt-4 font-mono text-sm text-orange-600 dark:text-orange-500 hover:underline self-start"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
