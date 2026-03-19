'use client';

import { IconButton, Input, InputAdornment } from '@mui/material';
import { Search, X } from 'lucide-react';

export default function SearchField() {
  return (
    <div className="hidden lg:flex flex-1">
      <Input
        id="search"
        type="search"
        placeholder="Enter the product name..."
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Search className="icon-lower-opacity" />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <X
                className="icon-lower-opacity"
                size={18}
                aria-label="Limpar campo de pesquisa"
              />
            </IconButton>
          </InputAdornment>
        }
        className="rounded-7.75xl bg-back-300 px-4 before:content-none after:content-none"
        inputProps={{ className: 'py-3' }}
      />
    </div>
  );
}
