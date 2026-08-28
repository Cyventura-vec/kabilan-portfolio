"use client";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 px-5 py-8 dark:border-white/10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <p className="font-mono text-xs">© {new Date().getFullYear()} Kabilan Devraj. Built with Next.js.</p>
        <a href="#top" className="font-mono text-xs text-accent hover:underline">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
