'use client';

import { Product } from '@/@types/products';
import applyDiscount from '@/utils/applyDiscount';
import formatCurrency from '@/utils/formatCurrency';
import formatDiscount from '@/utils/formatDiscount';

type PriceProductProps = Pick<Product, 'price' | 'discount'>;

export default function PriceProduct({ price, discount }: PriceProductProps) {
  const priceFormatted = formatCurrency(price);

  return (
    <div className="flex gap-x-2.5">
      <span className="font-bold text-2xl">
        {discount
          ? formatCurrency(applyDiscount(price, discount))
          : priceFormatted}
      </span>
      {discount > 0 && (
        <>
          <span className="oldPrice">{priceFormatted}</span>
          <span className="discount">-{formatDiscount(discount)}%</span>
        </>
      )}
    </div>
  );
}
