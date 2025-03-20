
export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}
