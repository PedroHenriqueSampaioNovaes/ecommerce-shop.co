'use client';

import ProductItem from './ProductItem';
import type { Product } from '@/@types/products';

interface ShowcaseProductsProps {
  products: Product[];
}

export default function ShowcaseProducts({
  products = [],
}: ShowcaseProductsProps) {
  if (!products.length) {
    return (
      <p className="text-center">
        Não encontramos nenhum produto com este filtro. Por favor, escolha
        outro.
      </p>
    );
  }
  return (
    <section className="grid grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-9">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}
