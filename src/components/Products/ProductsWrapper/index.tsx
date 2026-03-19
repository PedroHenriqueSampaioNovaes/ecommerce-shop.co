'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { useProductsPagination } from '@/context/ProductsPaginationContext';

import Header from './Header';
import ShowcaseProducts from './ShowcaseProducts';
import ProductPagination from './ProductPagination';
import DividerUi from '@/components/shared/ui/DividerUi';

export default function ProductsSection() {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

  const { paginationData } = useProductsPagination();

  return (
    <main className="flex-1">
      <Header
        pages={paginationData.pages}
        items={paginationData.items}
        page={page}
      />
      <ShowcaseProducts products={paginationData.data} />
      <DividerUi />
      {paginationData.data.length > 0 && (
        <ProductPagination
          pages={paginationData.pages}
          page={page}
          setPage={setPage}
        />
      )}
    </main>
  );
}
