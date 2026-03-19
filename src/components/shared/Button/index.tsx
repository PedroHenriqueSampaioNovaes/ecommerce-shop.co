'use client';

import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={`cta ${className} cursor-pointer`} onClick={onClick}>
      {children}
    </button>
  );
}
