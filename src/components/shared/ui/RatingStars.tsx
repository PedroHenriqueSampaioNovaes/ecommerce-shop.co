'use client';

import { Rating } from '@mui/material';

import type { Product } from '@/@types/products';

type RatingProductProps = Pick<Product, 'rating'>;

export default function RatingStars({ rating }: RatingProductProps) {
  return (
    <Rating
      name="read-only"
      value={rating}
      precision={0.5}
      readOnly
      className="text-[#FFC633] [&_.MuiRating-iconEmpty]:text-[#FFC633]"
    />
  );
}
