import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Expense Tracker",
    description: "A personal finance web app for tracking expenses by category, setting monthly budgets, and exporting transaction history to CSV. PostgreSQL on the backend, React on the frontend, JWT auth with proper token refresh logic. Input validation on the API layer; sensitive data encrypted at rest. Built because every existing tool had features I didn't need and was missing ones I did.",
    techStack: ["React", "Node.js", "PostgreSQL", "JWT"],
    liveUrl: "#",
    repoUrl: "#",
    image: "/project-placeholder.svg"
  },
  {
    title: "URL Shortener",
    description: "A short link generator with click tracking, expiry dates, and a small analytics dashboard. Redis handles caching; PostgreSQL stores the records. Rate limiting on creation and redirect endpoints to prevent abuse. Redirect latency has been fast enough that I've never had a reason to optimize it further.",
    techStack: ["Node.js", "PostgreSQL", "Redis", "Express"],
    liveUrl: "#",
    repoUrl: "#",
    image: "/project-placeholder.svg"
  },
  {
    title: "Dev Notes",
    description: "A personal notes tool for storing code snippets, technical references, and documentation drafts. Markdown rendering with sanitization to prevent XSS; tag-based filtering and full-text search. Access controlled — only viewable by the owner. Started because I was tired of losing things across browser tabs.",
    techStack: ["Next.js", "SQLite", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    image: "/project-placeholder.svg"
  }
];
