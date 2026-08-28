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
      setMessage("[Please complete all required fields with a valid PGP/Email identity.]");
      return;
    }

    try {
      setStatus("success");
      setMessage("[Encrypted transmission queued for secure delivery.]");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("[Transmission failure. Verify PGP key payload.]");
    }
  }

  return (
    <section id="contact" className="section border-t border-slate-200 dark:border-white/10">
      <SectionReveal>
        <p className="eyebrow">05 / SECURE TRANSMISSION</p>
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="section-title">Public Key Verification</h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              No mail server listening. Direct encrypted transmissions only. Verify fingerprint prior to dispatching payloads.
            </p>

            {/* PGP Public Key Block Card */}
            <div className="mt-6 rounded-xl border border-slate-800 bg-[#090b10] p-5 font-mono text-xs text-slate-300">
              <div className="text-slate-400">-----BEGIN PGP PUBLIC KEY BLOCK-----</div>
              <div className="text-slate-400">Version: OpenPGP v2.1.0 (z3r0byte-vault)</div>
              <div className="my-3 break-all text-slate-500">
                mQGNBF+92ZcBDADX9k8Wv... [truncated 4096-bit RSA/ED25519 payload] ... =9f2a
              </div>
              <div className="text-slate-400">-----END PGP PUBLIC KEY BLOCK-----</div>
              <div className="mt-4 border-t border-slate-800 pt-3">
                <span className="text-slate-500">FINGERPRINT:</span>{" "}
                <span className="font-bold text-emerald-400">7B94 0F2A 44C8 E190 65D3 89A1 9F2A 112C BEEF 03F2</span>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="surface rounded-xl p-5 sm:p-7" noValidate>
            <h3 className="font-mono text-sm font-semibold text-emerald-400">[ Encrypted Dispatch Portal ]</h3>
            <label className="mt-4 block text-sm font-medium">
              Return Routing Identifier / Email
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2.5 outline-none focus:border-accent dark:border-white/20"
                placeholder="0xnode@domain.com"
              />
            </label>
            <label className="mt-5 block text-sm font-medium">
              Encrypted Payload / Message Body
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-md border border-slate-300 bg-transparent px-3 py-2.5 font-mono text-xs outline-none focus:border-accent dark:border-white/20"
                placeholder="-----BEGIN PGP MESSAGE-----..."
              />
            </label>
            <button className="mt-5 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400" type="submit">
              Dispatch Encrypted Signal →
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
