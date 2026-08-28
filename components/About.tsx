import { SectionReveal } from "./SectionReveal";

export function About() {
  return (
    <section id="about" className="section">
      <SectionReveal>
        <p className="eyebrow">01 / About</p>
        <div className="grid gap-10 md:grid-cols-[1fr_.7fr]">
          <div>
            <h2 className="section-title">A little context.</h2>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              <p>
                I&apos;m a software engineer based in Chennai. I build backend services, APIs, and occasionally the frontend that goes in front of them. I&apos;ve been writing software professionally for about six years, and I still think getting a database schema right the first time is genuinely satisfying.
              </p>
              <p>
                My background is in full-stack development, though I spend most of my time in the backend. API design, data modeling, debugging things that shouldn&apos;t be failing. I care about writing software that&apos;s readable, reasonably performant, and not clever in ways that will confuse the next person. I&apos;ve also developed a security-minded approach to engineering — thinking about how features could be misused, validating input carefully, and understanding the difference between trusting internal code and validating at system boundaries.
              </p>
              <p>
                Outside of work, I read a lot. Mostly technology and history, with the occasional novel when I want to feel like a balanced person. I spend time on Quora answering programming and software architecture questions because I like thinking through how to explain things clearly. I read security write-ups and understand how vulnerabilities happen rather than just memorizing CVE lists. I post on Twitter occasionally, though not as consistently as I keep telling myself I will.
              </p>
              <p>
                I have opinions about software, some of them probably too strong, and I&apos;m almost always more interested in the engineering tradeoffs than in which framework is currently popular. I believe understanding how systems fail is as important as understanding how they work. Coffee helps.
              </p>
            </div>
          </div>
          <div className="surface aspect-square max-w-sm place-self-center rounded-xl p-6">
            <div className="grid h-full place-items-center rounded-lg border border-dashed border-slate-300 font-mono text-xs text-slate-400 dark:border-white/20">
              [Headshot Placeholder]
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
