import peepImg from "./assets/peep.png";
import grind1Img from "./assets/grind1.png";
import grind2Img from "./assets/grind2.png";
import jobImg from "./assets/job-tracker.png";
import markedDownImg from "./assets/markedDown.png";

export type ProjectCategory = "backend" | "frontend";

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  repo: string;
  liveUrl?: string;
  description: string;
  tagline: string;
  longDescription: string[];
  highlights: ProjectHighlight[];
  tech: string[];
  category: ProjectCategory;
  images?: string[];
  codeSnippet?: string;
}

export const projects: Project[] = [
  {
    id: "rate-limiter",
    title: "Sliding Window Rate Limiter",
    repo: "https://github.com/levimarkmuigai/rate_limiter",
    description:
      "A thread-safe, sliding-window rate limiting middleware built for Axum. Engineered with Arc, Mutex, and VecDeque ring buffers to manage concurrent client capacities with microsecond overhead. Features custom clock abstractions for deterministic testing and zero-cost error propagation.",
    tagline:
      "A sliding-window rate limiter for Axum, built to survive real concurrent load without surprises.",
    longDescription: [
      "Sliding Window Rate Limiter is a thread-safe rate-limiting middleware for the Axum web framework. It exists to cap how often a client can hit an endpoint without introducing lock contention that defeats the purpose under real traffic.",
      "Requests are tracked per-key using VecDeque ring buffers wrapped in Arc<Mutex<>>, so old requests age out of the window with microsecond overhead instead of full recomputation on every hit. A custom clock abstraction lets the same logic run against a fake, deterministic clock in tests instead of real wall-clock time.",
      "Errors propagate through Rust's type system rather than panics, so a caller always knows whether a request was allowed or denied without inspecting internal state.",
    ],
    highlights: [
      {
        title: "Concurrency-safe",
        description:
          "Arc<Mutex<VecDeque<>>> ring buffers manage per-client windows without a single global-lock bottleneck.",
      },
      {
        title: "Deterministic testing",
        description:
          "A pluggable clock trait swaps real time for a fake clock, making sliding-window edge cases reproducible in tests.",
      },
      {
        title: "Zero-cost errors",
        description:
          "Allow/Deny responses are modeled as an explicit enum, not exceptions or magic return codes.",
      },
    ],
    tech: ["Rust", "Axum", "Concurrency", "Algorithms"],
    category: "backend",
    codeSnippet: `// Core structs and types based on the implementation logic
pub struct RateLimiter<C> {
    clock: Arc<Mutex<C>>,
    limit: usize,
    ticks: usize,
    requests: HashMap<RequestKey, VecDeque<Ticks>>,
}

#[derive(Debug, Default, Hash, Eq, PartialEq, Clone)]
pub struct RequestKey(pub String);

#[derive(Debug, Eq, PartialEq)]
pub enum RequestProcessingResponse {
    Allow,
    Deny,
}`,
  },
  {
    id: "peep",
    title: "Peep LLM Diagnostics",
    repo: "https://github.com/levimarkmuigai/peep",
    description:
      "An intelligent Rust Terminal UI acting as a compiler assistant. Captures `cargo check` JSON outputs, parses diagnostics via serde, and pipelines errors to the Groq API. LLM-generated fixes are presented in an interactive, stateful TUI table for seamless scrolling through issues and resolutions.",
    tagline:
      "peep pipes your cargo check diagnostics straight to an LLM and shows you the fix in your terminal.",
    longDescription: [
      "Peep is a Rust terminal UI that acts as a compiler assistant. It runs cargo check, captures the JSON diagnostic output, and parses it with serde instead of scraping raw compiler text.",
      "Each diagnostic is sent to the Groq API, and the suggested fix comes back into an interactive, stateful TUI table you can scroll through alongside the original errors — without leaving the terminal to search for the error or paste it into a browser tab.",
    ],
    highlights: [
      {
        title: "Structured parsing",
        description:
          "cargo check JSON diagnostic output is parsed with serde instead of regex over plain text.",
      },
      {
        title: "LLM-assisted fixes",
        description:
          "Diagnostics are piped to the Groq API and paired with the original error in the same view.",
      },
      {
        title: "Terminal-native",
        description:
          "An interactive TUI table for scrolling through issues and fixes without breaking flow.",
      },
    ],
    tech: ["Rust", "TUI", "Groq API", "serde"],
    category: "backend",
    images: [peepImg],
  },
  {
    id: "grind-tracker",
    title: "Grind Tracker",
    repo: "https://github.com/levimarkmuigai/grind-tracker",
    description:
      "A spaced-repetition and productivity TUI built for LeetCode Pareto 50 tracking using the fsrs crate. Powered by an asynchronous Axum backend utilizing SQLite, and deployed as a robust systemd service on an AWS EC2 Ubuntu instance. Features dedicated general and review dashboards.",
    tagline:
      "A spaced-repetition tracker for grinding the LeetCode Pareto 50, backed by a real deployed service.",
    longDescription: [
      "Grind Tracker is a productivity TUI for working through the LeetCode Pareto 50 using spaced repetition, built on the fsrs crate to schedule reviews based on how well a problem was actually remembered rather than a fixed interval.",
      "The TUI talks to an asynchronous Axum backend backed by SQLite, deployed as a systemd service on an AWS EC2 Ubuntu instance — a small but complete production-style deployment rather than a script running locally.",
      "It ships with two views: a general dashboard for tracking overall progress, and a review dashboard for working through problems that are currently due.",
    ],
    highlights: [
      {
        title: "Real deployment",
        description:
          "Runs as a systemd service on EC2, not just a local script — process supervision and restarts included.",
      },
      {
        title: "Spaced repetition",
        description:
          "Uses the fsrs crate to schedule reviews based on recall performance instead of a fixed interval.",
      },
      {
        title: "Async backend",
        description:
          "An Axum + SQLite backend persists progress across sessions instead of keeping state in memory.",
      },
    ],
    tech: ["Rust", "Axum", "SQLite", "AWS EC2", "FSRS"],
    category: "backend",
    images: [grind1Img, grind2Img],
  },
  {
    id: "job-tracker",
    title: "Job Tracker",
    repo: "https://github.com/levimarkmuigai/jobTracker",
    liveUrl: "https://job-tracker-ui-three.vercel.app/",
    category: "backend",
    tagline: "A lean, self-hosted backend that replaced my job application spreadsheet.",
    images: [jobImg],
    description:
      "Job Tracker replaces an Excel sheet with a proper relational database and API. I chose SQLite because the app has a single table and I needed to move fast, and I built the backend with Fastify, Drizzle and Zod to keep the server small. The live link is a mock frontend display only; my actual frontend is private.",
    longDescription: [
      "I started out tracking job applications in an Excel sheet. It worked until I wanted to filter, update and view applications in different ways, so I moved the data into a relational database behind a typed REST API.",
      "I chose SQLite because this is a small application with one table and I wanted to ship quickly. It has no separate database server to run or pay for, which keeps the deployment simple. Litestream replicates the database so the data survives the instance.",
      "The backend uses Fastify for a fast, minimal HTTP layer, Drizzle for typed queries and migrations, and Zod for request and response validation. The schema is shared with the frontend through a pnpm workspace package, so both sides use the same types.",
      "The API runs in a Docker container on an AWS instance behind an nginx reverse proxy with HTTPS. The live link on this page is a mock display of the frontend, deployed on Vercel to show how the interface looks. The actual frontend that talks to my API is private, so the focus of this project is the backend.",
    ],
    highlights: [
      {
        title: "Hurdles: deploying to AWS",
        description:
          "Getting the API live took more work than writing it. I had to configure security groups, put nginx in front of the container to terminate HTTPS (browsers block an HTTPS frontend from calling a plain HTTP API), keep the container port bound to localhost so it wasn't exposed publicly, and make sure SQLite's data persisted across container restarts.",
      },
      {
        title: "Learned: the run script",
        description:
          "I wrote a run script to automate building and starting the stack, which taught me how to make deployments repeatable instead of a list of manual commands I had to remember.",
      },
      {
        title: "Learned: CI/CD with GitHub Actions and GHCR",
        description:
          "I built a GitHub Actions workflow that builds the Docker image and pushes it to the GitHub Container Registry (GHCR), so the server pulls a versioned image instead of building on the instance.",
      },
      {
        title: "Lean by design",
        description:
          "Fastify, Drizzle and SQLite keep dependencies and the image size small, which suits a small instance and fast deploys.",
      },
    ],
    tech: [
      "Docker",
      "Fastify",
      "Drizzle ORM",
      "Zod",
      "SQLite",
      "Litestream",
      "TypeScript",
      "Nginx",
      "AWS EC2",
      "GitHub Actions",
      "GHCR",
      "pnpm",
    ],
  },
  {
    id: "job-tracker-ui",
    title: "Job Tracker",
    repo: "https://github.com/levimarkmuigai/jobTracker",
    liveUrl: "https://job-tracker-ui-three.vercel.app/",
    images: [jobImg],
    tagline: "A modern replacement for the job-hunt spreadsheet.",
    description:
      "A React + TypeScript job application tracker built with custom hooks, TanStack Query and useState. The live demo is a mock display running on fake data; the linked repo has the real backend.",
    longDescription: [
      "I tracked my job applications in an Excel sheet, and it got harder to manage as the list grew. Job Tracker replaces it with something faster to scan and easier to update, with a table view, a kanban board and a status filter.",
      "The data layer is built on custom hooks. TanStack Query's useQuery and useMutation handle fetching, creating, updating and deleting, and cache invalidation keeps the list in sync after every change. Local UI state, such as the active view, the status filter and which modal is open, lives in plain useState.",
      "The live link is a mock display. It runs on seeded fake data and the forms are display-only, so nothing you enter is saved. The repository linked here is the version with the actual backend.",
    ],
    highlights: [
      {
        title: "Custom hooks for data access",
        description:
          "Fetching and mutations are wrapped in small hooks, so components stay focused on rendering and the data source can be swapped without touching the UI.",
      },
      {
        title: "TanStack Query for server state",
        description:
          "useQuery and useMutation handle loading and error states and refetch the list automatically after changes.",
      },
      {
        title: "Table and board views",
        description:
          "Switch between a sortable-looking table and a status board, and filter by stage from wishlist to offer.",
      },
      {
        title: "Light and dark themes",
        description:
          "Colors are defined as design tokens, so the whole UI follows the system theme.",
      },
    ],
    tech: ["React", "TypeScript", "TanStack Query", "Tailwind CSS", "Vite", "Vercel"],
    category: "frontend",
  },
  {
    id: "markeddown",
    title: "MarkedDown",
    repo: "https://github.com/levimarkmuigai/markedDown",
    description:
      "A robust TypeScript web utility engineered to parse and convert various document formats into clean Markdown. Leverages Tesseract for OCR, Mammoth for DOCX extraction, and pdf-dist for PDF processing to provide a seamless, all-in-one browser conversion pipeline.",
    tagline:
      "Convert PDFs, DOCX files, and scanned documents into clean Markdown, entirely in the browser.",
    longDescription: [
      "MarkedDown is a browser-based document-to-Markdown converter. It exists to turn messy source formats — scanned PDFs, Word documents, plain text — into clean Markdown without uploading files to a server.",
      "Tesseract handles OCR for scanned or image-based content, Mammoth extracts text and structure from DOCX files, and pdf-dist processes native PDFs — all wired into one conversion pipeline that runs entirely client-side.",
    ],
    highlights: [
      {
        title: "Client-side only",
        description:
          "All parsing and OCR happens in the browser — files never leave the user's machine.",
      },
      {
        title: "Multi-format input",
        description: "Handles DOCX, PDF, and scanned/image-based documents through one pipeline.",
      },
      {
        title: "OCR built in",
        description: "Tesseract handles scanned pages that have no extractable text layer.",
      },
    ],
    tech: ["TypeScript", "Tesseract", "Mammoth", "pdf-dist"],
    category: "frontend",
    images: [markedDownImg],
    liveUrl: "https://marked-down.vercel.app/",
  },
];

export const backendProjects = projects.filter((p) => p.category === "backend");
export const frontendProjects = projects.filter((p) => p.category === "frontend");
