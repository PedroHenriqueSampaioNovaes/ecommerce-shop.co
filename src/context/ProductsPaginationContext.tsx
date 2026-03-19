'use client';

import { createContext, ReactNode, useContext } from 'react';

import { ProductPagination } from '@/@types/products';

interface ProductsPaginationContext {
  paginationData: ProductPagination;
}

const ProductsPaginationContext = createContext(
  {} as ProductsPaginationContext,
);

export function useProductsPagination() {
  const context = useContext(ProductsPaginationContext);
  if (!context) {
    throw new Error(
      'useProductsPagination precisa ser usado dentro de ProductsPaginationContext',
    );
  }

  const { paginationData } = context;

  return { paginationData };
}

interface ProductsPaginationContextProvider {
  children: ReactNode;
  paginationData: ProductPagination;
}

export function ProductsPaginationContextProvider({
  children,
  paginationData,
}: ProductsPaginationContextProvider) {
  const paginationConfig = paginationData || {};

  return (
    <ProductsPaginationContext value={{ paginationData: paginationConfig }}>
      {children}
    </ProductsPaginationContext>
  );
}
