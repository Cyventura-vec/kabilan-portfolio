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
                My background is in full-stack development, though I tend to spend more time in the backend — designing APIs, thinking about data models, debugging things that shouldn&apos;t be failing. I care about writing software that&apos;s readable, reasonably performant, and doesn&apos;t require a long explanation to hand off.
              </p>
              <p>
                Outside of work, I read a lot — mostly technology, history, and the occasional novel when I want to feel like a balanced person. I spend time on Quora answering programming and software engineering questions because I enjoy thinking through how to explain things clearly. I also post on Twitter occasionally, though not as consistently as I tell myself I will.
              </p>
              <p>
                I have opinions about software — some of them probably too strong — and I&apos;m always more interested in the engineering tradeoffs than in which framework is currently popular. Coffee helps.
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
