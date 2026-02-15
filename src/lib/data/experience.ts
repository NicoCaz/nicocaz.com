import type { Achievement, Experience, Reference } from "./types";

export const achievements: Achievement[] = [
  {
    title: "Best use of Pyth Entropy (Pyth Network)",
    event: "ETHGlobal Buenos Aires",
    period: "Nov 21–23, 2025",
    prize: "Pyth Network – Best use of Pyth Entropy",
    project: "tanly.app",
    projectUrl: "https://ethglobal.com/showcase/tanly-app-dzvxr",
    certificateUrl:
      "https://ethglobal.b0bd725bc77a3ea7cd3826627d01fcb6.r2.cloudflarestorage.com/certificates/1248804/certificate.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=9594f0cc2b6eca8d6fd42063391f5760%2F20260215%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260215T022523Z&X-Amz-Expires=3600&X-Amz-Signature=7242f93ba00748aa75d1336ad613572398d02fcd782a13add660f47ba907a337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
  },
];

export const experience: Experience[] = [
  {
    title: "Sr. Software Engineer",
    company: "Bull Market Brokers",
    period: "August 2025 - Present",
    description: "Development with .NET/Express/Nest/React/TypeScript",
    responsibilities: [
      "Building and maintaining scalable web applications",
      "Implementing RESTful APIs and microservices",
      "Collaborating with cross-functional teams",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Bull Market Brokers",
    period: "August 2025 - Present",
    description:
      "Development with .NET",
    responsibilities: [
      "Building and maintaining scalable web applications",
      "Implementing RESTful APIs and microservices",
      "Collaborating with cross-functional teams",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Accenture for external bank client",
    period: "October 2023 - August 2025",
    description: "Development with .NET/Express/Nest/React/TypeScript",
    responsibilities: [
      "Building and maintaining scalable web applications",
      "Implementing RESTful APIs and microservices",
      "Frontend development using React and TypeScript",
      "Collaborating with cross-functional teams",
    ],
  },
  {
    title: "Presale Engineer & Cybersecurity Analyst",
    company: "WellTech",
    period: "June 2021 - October 2023",
    description:
      "Worked on the complete business process from POCs to client contract signing, as well as organizing company projects",
    responsibilities: [
      "Technical support to sales teams",
      "Identifying customer needs and providing solutions",
      "Technical demonstrations and presentations",
      "Vulnerability analysis and security assessments",
      "Implementation of security measures",
      "Threat detection and prevention",
      "Incident management and response",
    ],
  },
  {
    title: "Project Manager and Product Owner",
    company: "Freelance",
    period: "2019 - Present",
    description: "Managing projects for major banks in Argentina and Paraguay",
    responsibilities: [
      "Defining requirements and priorities with clients",
      "Planning and coordinating projects",
      "Resource control and team supervision",
      "Risk management and mitigation",
      "Developing customized banking solutions",
      "Implementing security protocols for financial institutions",
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
