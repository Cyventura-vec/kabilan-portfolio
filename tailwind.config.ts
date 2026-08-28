import type { Config } from "tailwindcss";
const config: Config = { darkMode: "class", content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { accent: "#22c55e" }, fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"], mono: ["Consolas", "Monaco", "monospace"] }, boxShadow: { glow: "0 0 40px rgb(34 197 94 / .12)" } } }, plugins: [] };
export default config;
