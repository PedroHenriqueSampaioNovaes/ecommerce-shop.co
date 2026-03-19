'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import { Slider } from '@mui/material';

import type { FilterState } from '@/@types/filterProducts';

interface RangeSliderProps {
  rangeValue: number[];
  setFilter: Dispatch<SetStateAction<FilterState>>;
  minmaxRange: [number, number];
}

export default function RangeSlider({
  rangeValue,
  setFilter,
  minmaxRange,
}: RangeSliderProps) {
  const [value, setValue] = useState<number[]>(rangeValue);


  function handleChange(_event: Event, newValue: number[]) {
    setValue(newValue);
  }

  const handleChangeComitted = (
    _event: React.SyntheticEvent | Event,
    newValue: number[],
  ) => {
    setFilter((filters) => ({
      ...filters,
      price: newValue,
    }));
  };

  return (
    <Slider
      getAriaLabel={() => 'Faixa de preço'}
      value={value}
      onChange={handleChange}
      onChangeCommitted={handleChangeComitted}
      valueLabelDisplay="on"
      max={minmaxRange[1]}
      name="price"
      slotProps={{
        track: {
          className: 'bg-black',
        },
        thumb: {
          className:
            'bg-black hover:shadow-[0_0_0_8px_rgba(0,0,0,0.16)] [.Mui-focusVisible]:shadow-[0_0_0_14px_rgba(0,0,0,0.16)] [.Mui-active]:shadow-[0_0_0_14px_rgba(0,0,0,0.16)]',
        },
        rail: {
          className: 'bg-[#808080]',
        },
        valueLabel: {
          className: 'bg-transparent text-black top-14',
        },
      }}
      valueLabelFormat={(value) => '$ ' + value}
    />
  );
}
