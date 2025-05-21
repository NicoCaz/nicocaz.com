export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  url: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface Reference {
  name: string;
  title: string;
  phone: string;
  email: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  shortBio: string;
  longBio: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}
