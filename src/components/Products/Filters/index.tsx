'use client';

import { SlidersVertical, X } from 'lucide-react';
import { IconButton } from '@mui/material';

import { useFilterProducts } from '@/context/FilterProductsContext';

import useMedia from '@/hooks/useMedia';

import RangeSlider from './RangeSlider';
import ColorRadios from './ColorRadios';
import Category from './Category';
import DividerUi from '@/components/shared/ui/DividerUi';
import ButtonCta from '@/components/shared/ButtonCta';

export default function Filters() {
  const {
    showFilter,
    setShowFilter,
    filter,
    setFilter,
    applyFilter,
    filterConfig,
  } = useFilterProducts();

  const isMobile = useMedia('(max-width: 1024px)');

  return (
    <section
      className={`max-lg:fixed max-lg:z-90 ${showFilter ? 'max-lg:inset-0' : ''} max-lg:bg-black/20`}
      onClick={({ currentTarget, target }) =>
        currentTarget === target && setShowFilter(false)
      }
    >
      <div
        className={`max-lg:fixed left-0 bottom-0 max-lg:h-[calc(100vh-80px)] w-full lg:w-75 bg-white border border-black/10 rounded-[1.25rem] max-lg:rounded-bl-none max-lg:rounded-br-none py-5 px-6 ${showFilter ? 'translate-y-0' : 'max-lg:translate-y-full'} transition`}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-body text-xl">Filters</h3>
          <SlidersVertical className="icon-lower-opacity max-lg:hidden" />
          <IconButton
            className="lg:hidden"
            onClick={() => setShowFilter(false)}
          >
            <X className="icon-lower-opacity" />
          </IconButton>
        </div>

        <DividerUi margin="my-6" />

        <Category
          categories={filterConfig.categories}
          activeCategory={filter.category}
          setFilter={setFilter}
        />

        <DividerUi margin="my-6" />

        <h2 className="font-body text-xl mb-5">Price</h2>
        <RangeSlider
          rangeValue={filter.price}
          setFilter={setFilter}
          minmaxRange={filterConfig.minmaxPrice}
        />

        <DividerUi margin="my-6 mt-10" />

        <h2 className="font-body text-xl mb-5">Colors</h2>
        <ColorRadios
          activeColor={filter.color}
          setFilter={setFilter}
          colorsData={filterConfig.colors}
        />

        <ButtonCta
          className="w-full mt-6"
          onClick={() => {
            applyFilter();
            if (isMobile) setShowFilter(false);
          }}
        >
          Apply Filter
        </ButtonCta>
      </div>
    </section>
  );
}
