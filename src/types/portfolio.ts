export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  category: 'Full-Stack & Backend' | 'Automation & RPA' | 'Web & Frontend';
  description: string;
  roleAndContributions: string[];
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    description: string;
    level?: string;
  }[];
}

export interface EducationItem {
  id: string;
  qualification: string;
  institution: string;
  location: string;
  period: string;
  status: 'Completed' | 'In Progress' | 'Current';
  description: string;
  keyModules: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuingOrganization: string;
  description: string;
  year?: string;
  certificateUrl?: string;
  isPdf?: boolean;
  skillsAcquired?: string[];
  credentialBadge?: string;
}

export interface UserProfile {
  fullName: string;
  professionalTitle: string;
  headline: string;
  shortIntro: string;
  biography: string[];
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  coreInterests: string[];
  availability: string;
}
