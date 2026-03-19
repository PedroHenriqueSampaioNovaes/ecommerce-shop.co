export interface Product {
  id: string;
  category: string;
  name: string;
  images: string[];
  colors: { name: string; hex: string };
  rating: number;
  price: number;
  discount: number;
}

export interface ProductPagination {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Product[];
}
