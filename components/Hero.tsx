"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [sessionTime, setSessionTime] = useState("0.0");

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setSessionTime(((Date.now() - start) / 1000).toFixed(1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70 dark:opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgb(34 197 94 / .08) 1px, transparent 1px), linear-gradient(90deg, rgb(34 197 94 / .08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div aria-hidden className="absolute -right-32 -top-20 -z-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <div className="section flex min-h-[calc(100svh-65px)] items-center">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Software Engineer · Chennai, India
            </p>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              Kabilam Devraj
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-sky-500 bg-clip-text text-transparent">
                builds software.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Software engineer based in Chennai, building practical software and occasionally overthinking how it should be built.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400" href="#projects">
                View Projects →
              </a>
              <a className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-accent dark:border-white/20" href="#contact">
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-[#0d0f12]">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5 dark:border-white/10 dark:bg-[#12151f]">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                </div>
                <span className="font-mono text-xs text-slate-400">~/kabilan-portfolio</span>
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <div className="text-slate-400 text-xs">
                  <span className="text-emerald-500">$</span> cat about.json
                </div>
                <div className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  <div><span className="text-sky-400">&quot;name&quot;</span><span className="text-slate-400">: </span><span className="text-emerald-400">&quot;Kabilam Devraj&quot;</span><span className="text-slate-400">,</span></div>
                  <div><span className="text-sky-400">&quot;role&quot;</span><span className="text-slate-400">: </span><span className="text-emerald-400">&quot;Software Engineer&quot;</span><span className="text-slate-400">,</span></div>
                  <div><span className="text-sky-400">&quot;location&quot;</span><span className="text-slate-400">: </span><span className="text-emerald-400">&quot;Chennai, India&quot;</span><span className="text-slate-400">,</span></div>
                  <div><span className="text-sky-400">&quot;stack&quot;</span><span className="text-slate-400">: [</span></div>
                  <div className="pl-4 text-emerald-400">&quot;TypeScript&quot;, &quot;Node.js&quot;, &quot;React&quot;,</div>
                  <div className="pl-4 text-emerald-400">&quot;PostgreSQL&quot;, &quot;Docker&quot;, &quot;AWS&quot;</div>
                  <div><span className="text-slate-400">],</span></div>
                  <div><span className="text-sky-400">&quot;available&quot;</span><span className="text-slate-400">: </span><span className="text-emerald-400">true</span></div>
                </div>
                <div className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-400 dark:border-white/10">
                  session: <span className="text-emerald-400">{sessionTime}s</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
