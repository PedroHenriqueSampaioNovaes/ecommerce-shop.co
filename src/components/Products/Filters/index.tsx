'use client';

import { SlidersVertical } from 'lucide-react';

import { useFilterProducts } from '@/context/FilterProductsContext';

import RangeSlider from './RangeSlider';
import ColorRadios from './ColorRadios';
import Category from './Category';
import Button from '@/components/shared/Button';
import DividerUi from '@/components/shared/ui/DividerUi';

export default function Filters() {
  const { filter, setFilter, applyFilter, filterConfig } = useFilterProducts();

  return (
    <section className="lg:w-1/4 border border-black/10 rounded-[1.25rem] py-5 px-6">
      <div className="flex items-center justify-between">
        <h3 className="font-body text-xl">Filters</h3>
        <SlidersVertical className="icon-lower-opacity" />
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

      <Button className="w-full mt-6" onClick={applyFilter}>
        Apply Filter
      </Button>
    </section>
  );
}
