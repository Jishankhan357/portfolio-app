export type ProjectCategory = 'Web Development' | 'Mobile App' | 'Data Science';

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}
