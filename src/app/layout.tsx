import type { Metadata } from 'next';
import { integralcfFont, satoshi } from '@/app/fonts';

import './globals.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { AppThemeProvider } from '@/providers/theme-provider';

import Header from '@/components/shared/layout/Header';
import Footer from '@/components/shared/layout/Footer';

export const metadata: Metadata = {
  title: 'SHOP.CO | Home',
  description: 'SHOP.CO - Loja virtual de roupas e acessórios.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${integralcfFont.variable} ${satoshi.variable} font-body antialiased`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppThemeProvider>
            <Header />
            {children}
            <Footer />
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
