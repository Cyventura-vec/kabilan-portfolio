"use client";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur dark:border-white/10 dark:bg-[#0a0c0b]/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight">
          kabilan.dev
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a className="text-sm text-slate-600 hover:text-accent dark:text-slate-300" href={`#${link.toLowerCase()}`} key={link}>
              {link}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle navigation menu" className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 dark:border-white/10">
            ☰
          </button>
        </div>
        {open && (
          <div id="mobile-nav" className="absolute left-0 top-full w-full border-b border-slate-200 bg-stone-50 px-5 py-5 dark:border-white/10 dark:bg-[#0a0c0b] md:hidden">
            {links.map((link) => (
              <a onClick={() => setOpen(false)} className="block py-3 text-sm" href={`#${link.toLowerCase()}`} key={link}>
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
