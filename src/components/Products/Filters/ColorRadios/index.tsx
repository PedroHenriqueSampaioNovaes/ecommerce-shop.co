'use client';

import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Radio, RadioGroup } from '@mui/material';

import { Check } from 'lucide-react';

import type { ColorData, FilterState } from '@/@types/filterProducts';

interface ColorRadiosProps {
  activeColor: string;
  setFilter: Dispatch<SetStateAction<FilterState>>;
  colorsData: ColorData[];
}

export default function ColorRadios({
  colorsData = [],
  activeColor,
  setFilter,
}: ColorRadiosProps) {
  function changeColor(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;

    setFilter((filters) => ({
      ...filters,
      [input.name]: input.value,
    }));
  }

  return (
    <RadioGroup
      row
      className="gap-4"
      name="color"
      value={activeColor}
      onChange={changeColor}
    >
      <Radio
        disableRipple
        disableFocusRipple
        disableTouchRipple
        value=""
        className="p-0 hover:bg-transparent active:bg-transparent focus:bg-transparent focus-visible:outline-none"
        icon={<ColorDot isClearRadio checked={false} isWhite={true} />}
        checkedIcon={<ColorDot isClearRadio checked={true} isWhite={true} />}
        slotProps={{ input: { 'aria-label': 'Limpar cor' } }}
      />
      {colorsData.map((color) => {
        const isWhite = color.name === 'white';

        return (
          <Radio
            key={color.name}
            disableRipple
            disableFocusRipple
            disableTouchRipple
            value={color.name}
            className="p-0 hover:bg-transparent active:bg-transparent focus:bg-transparent focus-visible:outline-none"
            icon={
              <ColorDot hex={color.hex} checked={false} isWhite={isWhite} />
            }
            checkedIcon={
              <ColorDot hex={color.hex} checked={true} isWhite={isWhite} />
            }
            inputProps={{ 'aria-label': color.name }}
          />
        );
      })}
    </RadioGroup>
  );
}

interface ColorDotProps {
  hex?: string;
  checked: boolean;
  isWhite?: boolean;
  isClearRadio?: boolean;
}

function ColorDot({
  hex,
  checked,
  isWhite = false,
  isClearRadio = false,
}: ColorDotProps) {
  return (
    <span
      style={hex ? { backgroundColor: hex } : undefined}
      className={`inline-flex items-center justify-center size-9 rounded-full ${!isClearRadio ? 'border border-black/20' : ''} text-black`}
    >
      {checked && !isClearRadio && (
        <Check
          className="size-4"
          color={isWhite ? 'black' : 'white'}
          aria-hidden="true"
        />
      )}
      {isClearRadio && 'Clear'}
    </span>
  );
}
