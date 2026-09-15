import peepImg from "./assets/peep.png";
import grind1Img from "./assets/grind1.png";
import grind2Img from "./assets/grind2.png";
import markedDownImg from "./assets/markedDown.png";

export interface Project {
  id: string;
  title: string;
  repo: string;
  description: string;
  tech: string[];
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
    tech: ["Rust", "Axum", "Concurrency", "Algorithms"],
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
    tech: ["Rust", "TUI", "Groq API", "serde"],
    images: [peepImg],
  },
  {
    id: "grind-tracker",
    title: "Grind Tracker",
    repo: "https://github.com/levimarkmuigai/grind-tracker",
    description:
      "A spaced-repetition and productivity TUI built for LeetCode Pareto 50 tracking using the fsrs crate. Powered by an asynchronous Axum backend utilizing SQLite, and deployed as a robust systemd service on an AWS EC2 Ubuntu instance. Features dedicated general and review dashboards.",
    tech: ["Rust", "Axum", "SQLite", "AWS EC2", "FSRS"],
    images: [grind1Img, grind2Img],
  },
  {
    id: "markeddown",
    title: "MarkedDown",
    repo: "https://github.com/levimarkmuigai/markedDown",
    description:
      "A robust TypeScript web utility engineered to parse and convert various document formats into clean Markdown. Leverages Tesseract for OCR, Mammoth for DOCX extraction, and pdf-dist for PDF processing to provide a seamless, all-in-one browser conversion pipeline.",
    tech: ["TypeScript", "Tesseract", "Mammoth", "pdf-dist"],
    images: [markedDownImg],
  },
];
