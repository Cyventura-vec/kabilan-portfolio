import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kabilam Devraj — Software Engineer",
  description: "Kabilam Devraj — Software engineer based in Chennai, building practical backend services, APIs, and web applications.",
  openGraph: {
    title: "Kabilam Devraj — Software Engineer",
    description: "Software engineer based in Chennai, building practical software and occasionally overthinking how it should be built.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabilam Devraj — Software Engineer",
    description: "Software engineer based in Chennai. TypeScript, Node.js, React, PostgreSQL.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
