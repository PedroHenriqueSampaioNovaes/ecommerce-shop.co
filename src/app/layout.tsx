import type { Metadata } from 'next';
import { integralcfFont, satoshi } from '@/app/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'SHOP.CO | Home',
  description: 'SHOP.CO - Loja virtual de roupas e acessórios.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${integralcfFont.variable} ${satoshi.variable} font-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
