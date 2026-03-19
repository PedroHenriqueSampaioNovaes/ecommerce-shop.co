export interface FilterState {
  category: string;
  price: number[];
  color: string;
}

export interface ColorData {
  id: string;
  name: string;
  hex: string;
}

export interface CategoryData {
  id: string;
  category: string;
}

export interface FilterConfig {
  minmaxPrice: [number, number];
  colors: ColorData[];
  categories: CategoryData[];
}

export interface FilterStateUrl extends Omit<FilterState, 'price'> {
  price: string;
  page: string;
  sort_by: string;
}
