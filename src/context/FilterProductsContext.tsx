'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import type {
  FilterConfig,
  FilterState,
  FilterStateUrl,
} from '@/@types/filterProducts';

import formatPriceFromURL from '@/utils/formatPriceFromURL';

interface FilterContext {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
  filterConfig: FilterConfig;
  showFilter: boolean;
  setShowFilter: Dispatch<SetStateAction<boolean>>;
}

const FilterProductsContext = createContext({} as FilterContext);

export function useFilterProducts() {
  const context = useContext(FilterProductsContext);
  if (!context) {
    throw new Error(
      'userFilterProducts precisa ser usado dentro de FilterProductsContextProvider',
    );
  }

  const { filter, setFilter, filterConfig, showFilter, setShowFilter } =
    context;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const applyFilter = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    const priceRange = filter.price.reduce((acc, value) => {
      const accIsEmpty = acc === '';
      const price = value * 100;

      if (accIsEmpty) return String(price);
      return `${acc}_${price}`;
    }, '');

    params.set('category', filter.category);
    params.set('color', filter.color);
    params.set('price', priceRange);

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [filter, pathname, replace, searchParams]);

  return {
    filter,
    setFilter,
    applyFilter,
    filterConfig,
    showFilter,
    setShowFilter,
  };
}

interface FilterContextProvider {
  children: ReactNode;
  initialData: FilterStateUrl | null;
  filterConfig: FilterConfig;
}

export function FilterProductsContextProvider({
  children,
  initialData,
  filterConfig,
}: FilterContextProvider) {
  const filterData: FilterState = {
    category: initialData?.category || '',
    price: initialData?.price
      ? formatPriceFromURL(initialData.price)
      : [0, filterConfig.minmaxPrice[1]],
    color: initialData?.color || '',
  };

  const [filter, setFilter] = useState(filterData);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <FilterProductsContext
      value={{ filterConfig, filter, setFilter, showFilter, setShowFilter }}
    >
      {children}
    </FilterProductsContext>
  );
}
