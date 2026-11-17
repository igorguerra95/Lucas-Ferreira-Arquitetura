export type ProjectCategory = 'Todos' | 'Residencial' | 'Comercial' | 'Interiores';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Todos'>;
  year: string;
  area: string;
  location: string;
  materials: string;
  summary: string;
  concept: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface StudioMetric {
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface CreativeStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface MaterialPrinciple {
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  typology: Exclude<ProjectCategory, 'Todos'> | 'Consultoria';
  areaEstimate: string;
  message: string;
}
