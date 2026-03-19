'use client';

import type { Product } from '@/@types/products';

import RatingStars from '../../ui/RatingStars';

type RatingProductProps = Pick<Product, 'rating'>;

export default function RatingProduct({ rating }: RatingProductProps) {
  return (
    <div className="flex items-center gap-x-3 my-2">
      <RatingStars rating={rating} />
      <span className="text-sm">
        {formatRating(rating)}/<span className="text-black/60">5</span>
      </span>
    </div>
  );
}

function formatRating(rating: number) {
  const isDecimalRating = String(rating).includes('.');

  return isDecimalRating ? rating : `${rating}.0`;
}
