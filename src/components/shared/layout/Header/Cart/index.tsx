'use client';

import { IconButton } from '@mui/material';

import { ShoppingCart } from 'lucide-react';

export default function Cart() {
  return (
    <IconButton>
      <ShoppingCart className="text-black" />
    </IconButton>
  );
}
