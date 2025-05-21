import type { Education, Language, Skill } from "./types";

export const education: Education[] = [
  {
    degree: "Computer Science Engineering",
    institution: "Universidad Nacional de Mar del Plata",
    period: "2017 - Present",
    description:
      "Comprehensive study of computer science fundamentals, algorithms, data structures, and software engineering principles.",
  },
  {
    degree: "Electro Mechanical Technician",
    institution: "Instituto Industrial Pablo Tavelli",
    period: "2012 - 2017",
    description:
      "Technical education focusing on mechanical and electrical systems, providing a strong foundation in engineering principles.",
  },
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: [
      "Python (Flask)",
      "Java (Spring)",
      "TypeScript",
      "React",
      "Next.js",
      "Svelte",
      "C# (.NET)",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "SonarQube"],
  },
  {
    category: "Other Skills",
    items: [
      "Software Development",
      "Machine Learning",
      "Project Management",
      "Agile/Scrum",
      "System Design",
      "Data Structures",
      "Algorithms",
    ],
  },
];

export const languages: Language[] = [
  {
    name: "Spanish",
    level: "Native",
  },
  {
    name: "English",
    level: "B2 Level - Professional working proficiency",
  },
];
