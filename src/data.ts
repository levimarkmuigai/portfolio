import peepImg from "./assets/peep.png";
import grind1Img from "./assets/grind1.png";
import grind2Img from "./assets/grind2.png";
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
    tagline: "peep pipes your cargo check diagnostics straight to an LLM and shows you the fix in your terminal.",
    longDescription: [
      "Peep is a Rust terminal UI that acts as a compiler assistant. It runs cargo check, captures the JSON diagnostic output, and parses it with serde instead of scraping raw compiler text.",
      "Each diagnostic is sent to the Groq API, and the suggested fix comes back into an interactive, stateful TUI table you can scroll through alongside the original errors — without leaving the terminal to search for the error or paste it into a browser tab.",
    ],
    highlights: [
      {
        title: "Structured parsing",
        description: "cargo check JSON diagnostic output is parsed with serde instead of regex over plain text.",
      },
      {
        title: "LLM-assisted fixes",
        description: "Diagnostics are piped to the Groq API and paired with the original error in the same view.",
      },
      {
        title: "Terminal-native",
        description: "An interactive TUI table for scrolling through issues and fixes without breaking flow.",
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
    tagline: "A spaced-repetition tracker for grinding the LeetCode Pareto 50, backed by a real deployed service.",
    longDescription: [
      "Grind Tracker is a productivity TUI for working through the LeetCode Pareto 50 using spaced repetition, built on the fsrs crate to schedule reviews based on how well a problem was actually remembered rather than a fixed interval.",
      "The TUI talks to an asynchronous Axum backend backed by SQLite, deployed as a systemd service on an AWS EC2 Ubuntu instance — a small but complete production-style deployment rather than a script running locally.",
      "It ships with two views: a general dashboard for tracking overall progress, and a review dashboard for working through problems that are currently due.",
    ],
    highlights: [
      {
        title: "Real deployment",
        description: "Runs as a systemd service on EC2, not just a local script — process supervision and restarts included.",
      },
      {
        title: "Spaced repetition",
        description: "Uses the fsrs crate to schedule reviews based on recall performance instead of a fixed interval.",
      },
      {
        title: "Async backend",
        description: "An Axum + SQLite backend persists progress across sessions instead of keeping state in memory.",
      },
    ],
    tech: ["Rust", "Axum", "SQLite", "AWS EC2", "FSRS"],
    category: "backend",
    images: [grind1Img, grind2Img],
  },
  {
    id: "markeddown",
    title: "MarkedDown",
    repo: "https://github.com/levimarkmuigai/markedDown",
    description:
      "A robust TypeScript web utility engineered to parse and convert various document formats into clean Markdown. Leverages Tesseract for OCR, Mammoth for DOCX extraction, and pdf-dist for PDF processing to provide a seamless, all-in-one browser conversion pipeline.",
    tagline: "Convert PDFs, DOCX files, and scanned documents into clean Markdown, entirely in the browser.",
    longDescription: [
      "MarkedDown is a browser-based document-to-Markdown converter. It exists to turn messy source formats — scanned PDFs, Word documents, plain text — into clean Markdown without uploading files to a server.",
      "Tesseract handles OCR for scanned or image-based content, Mammoth extracts text and structure from DOCX files, and pdf-dist processes native PDFs — all wired into one conversion pipeline that runs entirely client-side.",
    ],
    highlights: [
      {
        title: "Client-side only",
        description: "All parsing and OCR happens in the browser — files never leave the user's machine.",
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
