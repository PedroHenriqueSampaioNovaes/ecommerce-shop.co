'use client';

import { useSearchParams } from 'next/navigation';
import { SlidersVertical } from 'lucide-react';
import { IconButton } from '@mui/material';

import { useFilterProducts } from '@/context/FilterProductsContext';

import OrderBy from './OrderBy';

interface HeaderProps {
  pages: number;
  page: number;
  items: number;
}

export default function Header({ pages, page, items }: HeaderProps) {
  const { setShowFilter } = useFilterProducts();

  const searchParams = useSearchParams();

  return (
    <section className="flex items-center justify-between mb-4">
      <IconButton
        className="bg-back-300 lg:hidden"
        onClick={() => setShowFilter((active) => !active)}
      >
        <SlidersVertical className="icon-lower-opacity" />
      </IconButton>
      <h2 className="max-lg:hidden font-body font-bold text-3xl capitalize">
        {searchParams.get('category') || 'All Products'}
      </h2>
      <div className="flex items-center text-black/60">
        <p className="mr-3 max-xs:hidden">
          Showing {page}-{pages} of {items} Products
        </p>
        <OrderBy />
      </div>
    </section>
  );
}
