import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  mainImage: SanityImageSource;
  category: 'Web' | 'AI' | 'Marketing';
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  order: number;
}