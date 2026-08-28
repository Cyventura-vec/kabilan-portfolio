import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "PROJECT: NULLTRACE",
    description: "Kernel-space evasion framework and unlinked memory allocation sanitization stub generator.",
    techStack: ["C", "Assembly", "eBPF", "Ring 0"],
    liveUrl: "#",
    repoUrl: "#",
    image: "/project-placeholder.svg"
  },
  {
    title: "PROJECT: SPECTRAL-PULSE",
    description: "Covert timing-based data exfiltration engine across asymmetric network boundaries.",
    techStack: ["Rust", "Raw Sockets", "Protocol Mutilation"],
    liveUrl: "#",
    repoUrl: "#",
    image: "/project-placeholder.svg"
  },
  {
    title: "PROJECT: KERNELGHOST",
    description: "Dynamic binary translator and automated anti-analysis stub generator targeting x86_64 microcode.",
    techStack: ["C++20", "LLVM IR", "Microcode"],
    liveUrl: "#",
    repoUrl: "#",
    image: "/project-placeholder.svg"
  }
];
