import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import type {
  CategoryData,
  ColorData,
  FilterStateUrl,
} from '@/@types/filterProducts';
import type { ProductPagination } from '@/@types/products';

import { FilterProductsContextProvider } from '@/context/FilterProductsContext';
import { ProductsPaginationContextProvider } from '@/context/ProductsPaginationContext';

import Products from '@/components/Products';

export const metadata: Metadata = {
  title: 'SHOP.CO | Produtos',
  description:
    'SHOP.CO - Veja todos os produtos da loja ou navegue utilizando o filtro para achar produtos que são a sua cara.',
};

interface ProdutosPageProps {
  searchParams: Promise<FilterStateUrl>;
}

export default async function ProdutosPage({
  searchParams,
}: ProdutosPageProps) {
  const search = await searchParams;
  const price = search.price ? search.price.split('_') : null;

  const [paginationResponse, colorsResponse, categoriesResponse] =
    await Promise.all([
      await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/products?_page=${search.page || 1}&_per_page=9${search.category && '&category=' + search.category}${search.color && '&color.name=' + search.color}${price && '&price:gt=' + price[0]}${price && '&price:lt=' + price[1]}${'&_sort=' + sortBy(search.sort_by)}`,
      ),
      await fetch(`${process.env.NEXT_PUBLIC_URL_API}/colors`, {
        next: { revalidate: 15 * 60 },
      }),
      await fetch(`${process.env.NEXT_PUBLIC_URL_API}/categories`, {
        next: { revalidate: 15 * 60 },
      }),
    ]);
  if (!paginationResponse.ok) {
    console.error(
      'Ocorreu um erro e não foi possível obter os dados da paginação!',
    );
    redirect('/');
  }

  const pagination = (await paginationResponse.json()) as ProductPagination;
  const colors = (await colorsResponse.json()) as ColorData[];
  const categories = (await categoriesResponse.json()) as CategoryData[];

  return (
    <FilterProductsContextProvider
      initialData={hasAnyFilterData(search) ? search : null}
      filterConfig={{
        colors,
        minmaxPrice: [0, 500],
        categories,
      }}
    >
      <ProductsPaginationContextProvider paginationData={pagination}>
        <Products />
      </ProductsPaginationContextProvider>
    </FilterProductsContextProvider>
  );
}

function hasAnyFilterData(searchParams: FilterStateUrl) {
  return (
    searchParams &&
    ('category' in searchParams ||
      'color' in searchParams ||
      'price' in searchParams)
  );
}

function sortBy(orderBy: string) {
  switch (orderBy) {
    case 'newest':
      return 'created_at';
    case 'lowest_price':
      return 'price';
    case 'highest_price':
      return '-price';
    case 'most_popular':
      return '-sales';
    default:
      return '-sales';
  }
}
