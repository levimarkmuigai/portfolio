import { NavLink } from "react-router-dom";
import { GithubIcon } from "./GithubIcon";

function navLinkClasses({ isActive }: { isActive: boolean }) {
  return `font-mono text-sm uppercase tracking-widest transition-colors ${
    isActive
      ? "text-orange-600 dark:text-orange-500"
      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
  }`;
}

export function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 sticky top-0 z-10 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-6">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="https://rustacean.net/assets/rustacean-flat-happy.svg"
            alt="Ferris the Rust Mascot"
            className="w-8 h-8 drop-shadow-sm"
          />
          <span className="text-lg font-mono font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Levi Mark Muigai
          </span>
        </NavLink>

        <nav className="flex items-center gap-6">
          <NavLink to="/" end className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/backend" className={navLinkClasses}>
            Backend
          </NavLink>
          <NavLink to="/frontend" className={navLinkClasses}>
            Frontend
          </NavLink>
          <a
            href="https://github.com/levimarkmuigai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="GitHub profile"
          >
            <GithubIcon size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
}
