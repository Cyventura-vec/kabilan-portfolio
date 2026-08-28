import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    role: "Principal Vulnerability Researcher",
    company: "ShadowLab Security / Autonomous Systems",
    dateRange: "2023 – Present",
    bullets: [
      "Lead reverse engineering of x86_64 and ARM binary payloads, zero-day bug triage, and covert command-and-control (C2) protocol design.",
      "Engineered kernel-level memory corruption analysis framework for critical infrastructure defensive audits.",
      "Developed asymmetric telemetry monitoring tools for protocol subversion detection."
    ]
  },
  {
    role: "Senior Kernel & Systems Engineer",
    company: "NullTrace Research Labs",
    dateRange: "2020 – 2023",
    bullets: [
      "Engineered eBPF telemetry hooks, ring-0 anti-debugging stubs, and timing-based covert data exfiltration prototypes.",
      "Optimized packet injection engines achieving 10Gbps line-rate network protocol analysis.",
      "Built dynamic binary translator for anti-analysis detection."
    ]
  },
  {
    role: "Binary Analysis Specialist",
    company: "Asymmetric Cyber Operations",
    dateRange: "2018 – 2020",
    bullets: [
      "Performed static and dynamic deconstruction of untrusted Linux and Windows binaries.",
      "Automated memory unpacking and shellcode extraction pipelines using IDA Pro and Volatility.",
      "Maintained custom network emulators to triage malicious protocols."
    ]
  }
];
