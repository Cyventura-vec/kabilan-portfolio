"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [uptime, setUptime] = useState("0.0");
  const [entropy, setEntropy] = useState("0x9f8b4");

  useEffect(() => {
    const start = Date.now();
    const ent = Math.random().toString(16).substring(2, 10);
    setEntropy("0x" + ent);

    const interval = setInterval(() => {
      const elapsed = ((Date.now() - start) / 1000).toFixed(1);
      setUptime(elapsed);
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
              [0x00] Operating across unmapped ASN allocations
            </p>
            
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              z3r0byte // <br />
              <span className="bg-gradient-to-r from-emerald-400 to-sky-500 bg-clip-text text-transparent">
                Security Research &amp; Binary Analysis
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Specializing in low-level memory corruption, protocol subversion, asymmetric telemetry, and automated anti-analysis framework development. Silence is operational security. Code is intent.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400" href="#projects">
                View Classified Projects →
              </a>
              <a className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-accent dark:border-white/20" href="#contact">
                PGP Verification
              </a>
            </div>
          </motion.div>

          {/* Terminal ASCII Banner Component */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#090b10] shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 bg-[#12151f] px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                </div>
                <div className="font-mono text-xs text-slate-400">tty1 /dev/pts/0 [session: 0x9f2a]</div>
              </div>
              <div className="p-5 font-mono text-xs leading-tight text-slate-200 overflow-x-auto">
                <pre className="text-emerald-400 font-bold">
{`  ______ ____ _____   ___  ______ __   __ _____ _____ 
 |___  /|___ /|  _ \\ / _ \\| __ ) \\ \\ / /|_   _| ____|
    / /   |_ \\| |_) | | | |  _ \\  \\ V /   | | |  _|  
   / /   ___) |  _ <| |_| | |_) |  | |    | | | |___ 
  /_/   |____/|_| \\_\\\\___/|____/   |_|    |_| |_____|`}
                </pre>
                <div className="mt-5 flex flex-wrap justify-between border-t border-slate-800/80 pt-3 text-slate-400">
                  <span>[node: unindexed]</span>
                  <span id="x-term-metrics" className="text-emerald-400 font-mono">
                    uptime: {uptime}s | entropy: {entropy}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
