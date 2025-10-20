export interface Project {
  id: number;
  slug: string;
  name: string;
  date: string;
  summary: string;
  description: string;
  tech?: string[];
  link?: string;
}