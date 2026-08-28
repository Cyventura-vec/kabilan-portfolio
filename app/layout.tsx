import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "z3r0byte // Security Research & Binary Analysis",
  description: "z3r0byte — Security Research, Low-level Systems, Binary Analysis, and Protocol Exploitation.",
  openGraph: {
    title: "z3r0byte // Security Research & Binary Analysis",
    description: "Security research portfolio interface with embedded multi-stage CTF puzzle carriers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "z3r0byte // Security Research",
    description: "Low-level memory corruption, protocol subversion, asymmetric telemetry.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        {children}
        {/* STAGE 4 CTF Hidden Element */}
        <div id="x-ref" data-enc="030f18430a071a5a0a1d1d040b" style={{ display: "none" }} aria-hidden="true" />
      </body>
    </html>
  );
}
