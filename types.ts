export type Language = 'en' | 'ta';

export interface Product {
  id: string;
  nameEn: string;
  nameTa: string;
  price: number;
  category: 'Sarees' | 'Nighties' | 'WomensClothing';
  occasion?: 'Daily' | 'Festival' | 'Party' | 'Wedding';
  colors?: string[];
  image: string;
  gallery?: string[]; // Multiple images for 360 view sim
  descriptionEn: string;
  descriptionTa: string;
  rating?: number;
  isNew?: boolean;
  stock?: number;
}

export interface Translation {
  [key: string]: {
    en: string;
    ta: string;
  };
}