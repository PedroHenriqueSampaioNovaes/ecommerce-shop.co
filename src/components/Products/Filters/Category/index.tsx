'use client';

import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';

import { ChevronRight } from 'lucide-react';

import type { CategoryData, FilterState } from '@/@types/filterProducts';

interface CategoryProps {
  activeCategory: string;
  setFilter: Dispatch<SetStateAction<FilterState>>;
  categories: CategoryData[];
}

export default function Category({
  categories = [],
  activeCategory,
  setFilter,
}: CategoryProps) {
  function changeCategory(category: string) {
    setFilter((filter) => ({
      ...filter,
      category: filter.category === category ? '' : category,
    }));
  }

  return (
    <ul className="space-y-1">
      {categories.map(({ id, category }) => (
        <li key={id}>
          <Button
            focusRipple
            TouchRippleProps={{ className: 'text-black/10' }}
            className="flex items-center justify-between w-full group hover:bg-black/10 focus-visible:bg-black/10 text-base font-normal"
            onClick={() => changeCategory(category)}
            endIcon={
              <ChevronRight
                className="icon-lower-opacity group-hover:translate-x-0.5 transition"
                size={16}
              />
            }
          >
            <span
              className={`text-black/60 capitalize ${activeCategory === category ? 'text-black font-bold' : ''}`}
            >
              {category}
            </span>
          </Button>
        </li>
      ))}
    </ul>
  );
}
