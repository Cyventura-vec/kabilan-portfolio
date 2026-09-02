import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kabilan Devraj — Software Engineer",
  description: "Kabilan Devraj — Software engineer based in Chennai, building practical backend services, APIs, and web applications.",
  openGraph: {
    title: "Kabilan Devraj — Software Engineer",
    description: "Software engineer based in Chennai, building practical software and occasionally overthinking how it should be built.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabilan Devraj — Software Engineer",
    description: "Software engineer based in Chennai. TypeScript, Node.js, React, PostgreSQL.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        {children}
        <div id="x-ref" data-enc="030f18430a071a5a0a1d1d040b" style={{ display: "none" }} aria-hidden="true"></div>
        <script src="/assets/js/crypto-engine.js"></script>
      </body>
    </html>
  );
}
