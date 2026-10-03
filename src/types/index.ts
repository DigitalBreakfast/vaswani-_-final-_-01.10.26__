export type ThemeMode = 'light';

export type CursorVariant = 
  | 'default' 
  | 'pointer' 
  | 'view' 
  | 'drag' 
  | 'explore'
  | 'play'
  | 'pause'
  | 'magnetic'
  | 'text' 
  | 'hidden' 
  | 'accent';

export interface CursorState {
  variant: CursorVariant;
  label?: string;
  setCursorVariant: (variant: CursorVariant, label?: string) => void;
  resetCursor: () => void;
}

export interface NavSubItem {
  label: string;
  href: string;
  tag?: string;
  description?: string;
}

export type NavItem = {
  id: string;
  label: string;
  href: string;
  description?: string;
  tag?: string;
  image: string;
  visualTitle?: string;
  visualLocation?: string;
  visualCredit?: string;
  subItems?: NavSubItem[];
};

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ColorSwatchData {
  name: string;
  hex: string;
  role: string;
  contrast?: string;
}

export interface ProjectCardData {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Hospitality' | 'Masterplan';
  year: string;
  image: string;
  stats?: {
    area?: string;
    units?: string;
    architect?: string;
  };
  featured?: boolean;
}

export interface ArticleCardData {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
}

export interface TestimonialCardData {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  residence: string;
  rating?: number;
}

export interface AwardCardData {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  project: string;
  description?: string;
}

export interface LeadershipCardData {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  tenure?: string;
}

export interface MotionPreset {
  id: string;
  name: string;
  description: string;
  ease: readonly [number, number, number, number];
  duration: number;
  useCase: string;
}
