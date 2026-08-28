import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "Stackvine, Chennai",
    dateRange: "2022 – Present",
    bullets: [
      "Building and maintaining backend services and REST APIs for a B2B SaaS product used by small finance and operations teams.",
      "Designed and migrated several PostgreSQL schemas, improving query performance and cutting report generation time by around 40%; ensured proper data access controls and audit logging.",
      "Set up CI/CD pipelines using GitHub Actions and manages deployments on AWS EC2 and S3, with a focus on secure secret management and access controls.",
      "Reviews pull requests with an eye toward security implications, data validation, and edge cases; participates in architecture discussions about tradeoffs between features and robustness.",
    ]
  },
  {
    role: "Software Engineer",
    company: "Kodelabs, Chennai",
    dateRange: "2019 – 2022",
    bullets: [
      "Developed internal and customer-facing features for a project management web application built on Node.js and React.",
      "Built a notification service handling email and in-app alerts, processing around 50,000 events per day.",
      "Refactored legacy API endpoints to REST conventions, added proper input validation, and improved error handling across the codebase.",
      "Collaborated with the product team to translate feature specs into working software without excessive back-and-forth.",
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Nexar Systems, Chennai",
    dateRange: "2018 – 2019",
    bullets: [
      "Wrote REST API endpoints for a logistics management tool using Express.js and MySQL.",
      "Fixed bugs, learned how production deployments actually work, and read a lot of code that was not yet familiar.",
      "Learned Git workflows, code reviews, and why pushing directly to main is a bad idea.",
      "Built a small internal reporting module that generated weekly summaries from raw database records.",
    ]
  }
];
