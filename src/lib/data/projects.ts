import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Propimap.com",
    description:
      "SaaS platform for real estate agents to manage their leads and properties.",
    features: [
      "CRM for real estate agents to manage their leads and properties.",
      "Cloudflare R2 for storage",
      "Cloudflare workers",
      "WAF Rules",
      "Automated compliance checks and audit logging",
      "UX/UI design",
    ],
    technologies: ["Next.js", "PostgreSQL", "Redis", "Docker", "Cloudflare"],
    url: "https://propimap.com",
  },
  {
    title: "Real time cow monitoring system",
    description:
      "Real time cow monitoring system for a farm in Argentina with arduino .",
    features: [
      "Real time data processing and analysis",
      "Map with live data",
      "Distributed system",
    ],
    technologies: ["JavaScript", "Arduino"],
    url: "https://github.com/NicoCaz/TP-Sistema-Distribuidos",
  },
  {
    title: "Fake Face creator with IA (GAN)",
    description: "Fake Face creator with IA (GAN) using tensorflow and keras.",
    features: [
      "Real-time data processing and analysis",
      "Dashboards and visualizations",
      "Automated model training and deployment",
    ],
    technologies: ["Python", "Keras"],
    url: "https://github.com/NicoCaz/Face_creator_with_GAN",
  },
  {
    title: "Banking Waiting line management system",
    description:
      "Real time waiting line management system for a bank in Argentina.",
    features: [
      "Microservices architecture with Java vanilla",
      "Redundancy and fault tolerance",
    ],
    technologies: ["Java"],
    url: "https://github.com/NicoCaz/BankConnect",
  },
  {
    title: "MVP Medical Clinic management system",
    description:
      "MVP Medical Clinic management system for a clinic in Argentina.",
    features: ["CRUD operations", "Turns management"],
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    url: "https://github.com/TeamProgra3/TP-Progra3",
  },
];
