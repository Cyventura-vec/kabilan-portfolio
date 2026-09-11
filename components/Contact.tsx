"use client";
import { FormEvent, useState } from "react";
import { SectionReveal } from "./SectionReveal";

type Status = "idle" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    const body = String(form.get("message") || "").trim();

    if (!/^\S+@\S+\.\S+$/.test(email) || !body) {
      setStatus("error");
      setMessage("Please fill in all fields with a valid email address.");
      return;
    }

    try {
      setStatus("success");
      setMessage("Message received. I'll get back to you.");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try emailing directly.");
    }
  }

  return (
    <section id="contact" className="section border-t border-slate-200 dark:border-white/10">
      <SectionReveal>
        <p className="eyebrow">06 / Contact</p>
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="section-title">Get in touch.</h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              If you have a question, a project in mind, or just want to talk about software, send a message. I check email regularly and try to respond within a day or two.
            </p>
            <div className="mt-6 space-y-3 font-mono text-sm">
              <div>
                <span className="text-slate-400">email</span>
                <span className="mx-2 text-slate-400">/</span>
                <span className="text-accent">kabilan.devraj@gmail.com</span>
              </div>
              <div>
                <span className="text-slate-400">github</span>
                <span className="mx-2 text-slate-400">/</span>
                <span className="text-accent">github.com/kabilan-devraj</span>
              </div>
              <div>
                <span className="text-slate-400">twitter</span>
                <span className="mx-2 text-slate-400">/</span>
                <span className="text-accent">@k4bi1and3vr4j</span>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="surface rounded-xl p-5 sm:p-7" noValidate>
            <h3 className="font-mono text-sm font-semibold text-accent">Send a message</h3>
            <label className="mt-4 block text-sm font-medium">
              Your Email
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2.5 outline-none focus:border-accent dark:border-white/20"
                placeholder="you@example.com"
              />
            </label>
            <label className="mt-5 block text-sm font-medium">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-md border border-slate-300 bg-transparent px-3 py-2.5 outline-none focus:border-accent dark:border-white/20"
                placeholder="What's on your mind?"
              />
            </label>
            <button className="mt-5 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400" type="submit">
              Send Message →
            </button>
            {status !== "idle" && (
              <p role="status" className={`mt-4 text-sm ${status === "success" ? "text-emerald-400" : "text-red-500"}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </SectionReveal>
    </section>
  );
}
