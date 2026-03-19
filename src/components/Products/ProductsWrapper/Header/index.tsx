'use client';

import { useSearchParams } from 'next/navigation';

import OrderBy from './OrderBy';

interface HeaderProps {
  pages: number;
  page: number;
  items: number;
}

export default function Header({ pages, page, items }: HeaderProps) {
  const searchParams = useSearchParams();

  return (
    <section className="flex items-center justify-between mb-4">
      <h2 className="font-body font-bold text-3xl capitalize">
        {searchParams.get('category') || 'All Products'}
      </h2>
      <div className="flex items-center text-black/60">
        <p className="mr-3">
          Showing {page}-{pages} of {items} Products
        </p>
        <OrderBy />
      </div>
    </section>
  );
}
