export interface Project {
  title: string;
  description: string;
  github: string;
  created_date: Date;
  updated_date: Date;
  tags?: string[];
  image?: string;
  web?: string;
}
