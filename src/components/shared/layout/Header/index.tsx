'use client';

import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { IconButton } from '@mui/material';

import Brand from '@/components/shared/Brand';

import Cart from './Cart';
import SearchField from './SearchField';

export default function Header() {
  return (
    <header className="container py-6 px-4 sticky">
      <nav className="flex items-center justify-between gap-10">
        <div className="flex items-center gap-4">
          <IconButton className="cursor-pointer md:hidden">
            <Menu />
          </IconButton>

          <Brand />
        </div>

        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/produtos">Products</Link>
          </li>
          <li>
            <Link href="#sale">Top Sale</Link>
          </li>
          <li>
            <Link href="#arrivals">New Arrivals</Link>
          </li>
          <li>
            <Link href="#brands">Brands</Link>
          </li>
        </ul>

        <SearchField />

        <div className="flex items-center gap-3">
          <IconButton className="lg:hidden cursor-pointer">
            <Search />
          </IconButton>
          <Cart />
        </div>
      </nav>
    </header>
  );
}
