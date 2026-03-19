'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/@types/products';

type ShowcaseProduct = Pick<Product, 'id' | 'name'> & {
  image: string;
};

export default function ShowcaseProduct({ id, name, image }: ShowcaseProduct) {
  return (
    <Link
      href={`/products/${name}-${id}`}
      className="block h-full max-h-75 bg-[#F0EEED] rounded-2.5xl overflow-hidden group"
    >
      <Image
        src={image}
        width={231}
        height={263}
        alt={name}
        loading="eager"
        className="block group-hover:scale-105 group-focus:scale-105 transition w-full h-full max-h-full object-contain"
      />
    </Link>
  );
}
