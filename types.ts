import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Game {
  name: string;
  image: string;
  description?: string;
}

export interface MediaItem {
  title: string;
  type: string;
  image: string;
  creator?: string;
}

export interface TechItem {
  name: string;
  icon: LucideIcon;
  detail: string;
}