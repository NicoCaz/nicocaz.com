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
    technologies: [
      "SvelteKit",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Cloudflare",
      "Workers",
      "R2",
    ],
    url: "https://propimap.com",
    status: "active",
    icon: "Map",
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
    repository: "https://github.com/NicoCaz/TP-Sistema-Distribuidos",
    status: "completed",
    icon: "Activity",
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
    repository: "https://github.com/NicoCaz/Face_creator_with_GAN",
    status: "completed",
    icon: "Brain",
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
    repository: "https://github.com/NicoCaz/BankConnect",
    status: "completed",
    icon: "Building2",
  },
  {
    title: "MVP Medical Clinic management system",
    description:
      "MVP Medical Clinic management system for a clinic in Argentina.",
    features: ["CRUD operations", "Turns management"],
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    repository: "https://github.com/TeamProgra3/TP-Progra3",
    status: "completed",
    icon: "Heart",
  },
];
