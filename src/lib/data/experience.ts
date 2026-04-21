import type { Achievement, Experience, Reference } from "./types";

export const achievements: Achievement[] = [
  {
    title: "Best use of Pyth Entropy (Pyth Network)",
    event: "ETHGlobal Buenos Aires",
    period: "Nov 21–23, 2025",
    prize: "Pyth Network – Best use of Pyth Entropy",
    project: "tanly.app",
    projectUrl: "https://ethglobal.com/showcase/tanly-app-dzvxr",
    projectLinkLabel: "View on ETHGlobal",
  },
];

export const experience: Experience[] = [
  {
    title: "Sr. Software Engineer",
    company: "Bull Market Brokers",
    period: "August 2025 - Present",
    description:
      "Building trading and brokerage platforms serving retail and institutional investors in LATAM. Stack: .NET, NestJS, React, TypeScript.",
    responsibilities: [
      "Designing and shipping features across trading, reporting, and account management surfaces",
      "Implementing REST APIs and background services with a focus on reliability and latency",
      "Collaborating with product, compliance, and QA to land regulated changes safely",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Accenture (Banking Client)",
    period: "October 2023 - August 2025",
    description:
      "Delivered fullstack features for a top-10 Argentine bank's digital channels across a 2-year engagement. Stack: .NET, Express, NestJS, React, TypeScript.",
    responsibilities: [
      "Built customer-facing banking flows integrating core banking APIs and third-party providers",
      "Owned React/TypeScript frontends with an emphasis on accessibility and consistent UX",
      "Partnered with distributed teams (AR/IN) on code review, release planning, and incident response",
    ],
  },
  {
    title: "Presale Engineer & Cybersecurity Analyst",
    company: "WellTech",
    period: "June 2021 - October 2023",
    description:
      "Dual role: technical presales for enterprise cybersecurity deals and hands-on security analysis for client infrastructure.",
    responsibilities: [
      "Ran POCs and technical demos that converted into signed enterprise contracts",
      "Performed vulnerability assessments and hardening for corporate and banking clients",
      "Led threat detection, incident response, and post-mortem documentation",
    ],
  },
  {
    title: "Project Manager & Product Owner",
    company: "Freelance (alongside main roles)",
    period: "2019 - Present",
    description:
      "Consulting on custom software for banks in Argentina and Paraguay — from requirements to delivery.",
    responsibilities: [
      "Gathered requirements and defined scope with bank stakeholders",
      "Planned roadmaps, coordinated delivery teams, and tracked risks",
      "Shipped bespoke banking solutions with security and compliance baked in",
    ],
  },
];

export const references: Reference[] = [
  {
    name: "Franco Chalop",
    title: "Pre-sales Leader at WellTech",
    email: "francochalop@grupowelltech.com",
  },
  {
    name: "Joaquín Carrascosa",
    title: "Cybersecurity Analyst at WellTech",
    email: "joaquincarrascosa@grupowelltech.com",
  },
  {
    name: "Juan Martín Ludueña",
    title: "Back-end Developer at Accenture",
    email: "juan.martin.luduena@accenture.com",
  },
  {
    name: "Gonzalo Othacehe",
    title: "Blockchain Developer at OpenZeppelin",
    email: "gothacehe@openzeppelin.com",
  },
];
