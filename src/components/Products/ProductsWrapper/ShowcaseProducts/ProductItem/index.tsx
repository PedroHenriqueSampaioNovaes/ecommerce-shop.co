'use client';

import Link from 'next/link';

import type { Product } from '@/@types/products';

import RatingProduct from '@/components/shared/product/RatingProduct';
import PriceProduct from '@/components/shared/product/PriceProduct';
import ShowcaseProduct from '@/components/shared/product/ShowcaseProduct';

interface ProductProps {
  product: Product;
}

export default function ProductItem({ product }: ProductProps) {
  return (
    <div className='flex flex-col'>
      <ShowcaseProduct
        id={product.id}
        name={product.name}
        image={product.images[0]}
      />

      <Link
        href={`/products/${product.name}-${product.id}`}
        className="block font-bold text-xl mt-4 capitalize"
      >
        {product.name}
      </Link>

      <RatingProduct rating={product.rating} />
      <PriceProduct price={product.price} discount={product.discount} />
    </div>
  );
}
