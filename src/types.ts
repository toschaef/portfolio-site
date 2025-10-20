export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  type?: string;
  role?: string;
  status?: string;
  date: string;
  summary?: string;
  description?: string;
  features?: string[];
  tech: string[];
  tags: string[];
  link?: string;
  repo?: string;
  images?: ProjectImage[];
}