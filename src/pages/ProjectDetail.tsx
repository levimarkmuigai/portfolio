import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data";
import { GithubIcon } from "../components/GithubIcon";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/" replace />;

  const related = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <>
      <div className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500 mb-6">
            <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Home
            </Link>
            {" / "}
            <Link
              to={project.category === "backend" ? "/backend" : "/frontend"}
              className="capitalize hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {project.category}
            </Link>
            {" / "}
            {project.title}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-100 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        <section>
          <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
            About this project
          </h3>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.longDescription.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
            Highlights
          </h3>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h.title} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{h.title}:</span>{" "}
                {h.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
            Links
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors"
            >
              <GithubIcon size={16} /> View source
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded-md bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity"
              >
                Live →
              </a>
            )}
          </div>
        </section>

        <section>
          <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
            Stack
          </h3>
          <p className="font-mono text-sm text-orange-700 dark:text-orange-400">
            {project.tech.join(" · ")}
          </p>
        </section>
      </div>

      {related.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 px-4">
              More projects
            </h3>
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
