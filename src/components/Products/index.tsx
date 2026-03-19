'use client';

import Filters from './Filters';
import ProductsWrapper from './ProductsWrapper';

export default function Products() {
  return (
    <div className="container flex gap-5 items-start">
      <Filters />
      <ProductsWrapper />
    </div>
  );
}
