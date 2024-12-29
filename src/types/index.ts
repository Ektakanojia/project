export interface TimelineData {
  type: 'experience' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}