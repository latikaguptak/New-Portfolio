export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  technologies?: string[];
  role?: string;
  duration?: string;
  team?: string[];
}