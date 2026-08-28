import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    name: "Reverse Engineering & Exploitation",
    skills: [
      "x86_64 / ARM Disassembly",
      "Kernel Hooks & Drivers",
      "Zero-Day Triage",
      "Anti-Debug Bypass",
      "Memory Unpacking",
      "Covert C2 Channels"
    ]
  },
  {
    name: "Languages & Low-Level Stack",
    skills: [
      "C / C++20",
      "Assembly (x86_64 / ARM64)",
      "Rust",
      "Python",
      "eBPF / bpftrace",
      "LLVM IR"
    ]
  },
  {
    name: "Security Analysis Tooling",
    skills: [
      "Ghidra & IDA Pro",
      "GDB / LLDB Debugging",
      "Volatility 3 Memory Forensics",
      "Wireshark / tshark",
      "QEMU / KVM Virtualization",
      "Linux Kernel Internal APIs"
    ]
  }
];
