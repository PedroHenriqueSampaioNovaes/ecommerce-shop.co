'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

import { ChevronDown } from 'lucide-react';

export default function OrderBy() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function onOrderBy({ currentTarget }: ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams);
    params.set('sort_by', currentTarget.value);

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <>
      <label className="mr-1" htmlFor="sortBy">
        Sort by:
      </label>{' '}
      <div className="relative">
        <select
          name="sort_by"
          id="sortBy"
          className="appearance-none pr-5 font-medium"
          onChange={onOrderBy}
          value={searchParams.get('sort_by') || 'most_popular'}
        >
          <option value="most_popular">Most Popular</option>
          <option value="newest">Newest</option>
          <option value="lowest_price">Lowest Price</option>
          <option value="highest_price">Highest Price</option>
        </select>
        <ChevronDown
          className="absolute right-0 top-1"
          color="#000"
          size={16}
        />
      </div>
    </>
  );
}
