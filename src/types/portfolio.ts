export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  label: string;
  description: string;
  outcome: string;
  highlights: string[];
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface ContactLink {
  name: string;
  url: string;
  icon?: string;
}
