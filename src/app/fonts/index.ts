import localFont from 'next/font/local';

export const integralcfFont = localFont({
  src: [
    {
      path: './integral-cf/integralcf-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './integral-cf/integralcf-regularoblique.otf',
      weight: '400',
      style: 'oblique',
    },
    {
      path: './integral-cf/integralcf-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './integral-cf/integralcf-mediumoblique.otf',
      weight: '500',
      style: 'oblique',
    },
    {
      path: './integral-cf/integralcf-semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './integral-cf/integralcf-semiboldoblique.otf',
      weight: '600',
      style: 'oblique',
    },
    {
      path: './integral-cf/integralcf-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './integral-cf/integralcf-boldoblique.otf',
      weight: '700',
      style: 'oblique',
    },
    {
      path: './integral-cf/integralcf-extrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './integral-cf/integralcf-extraboldoblique.otf',
      weight: '800',
      style: 'oblique',
    },
    {
      path: './integral-cf/integralcf-heavy.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './integral-cf/integralcf-heavyoblique.otf',
      weight: '900',
      style: 'oblique',
    },
  ],
  variable: '--font-integralcf',
});

export const satoshi = localFont({
  src: [
    {
      path: './satoshi/Satoshi-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './satoshi/Satoshi-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './satoshi/Satoshi-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './satoshi/Satoshi-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './satoshi/Satoshi-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './satoshi/Satoshi-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
});
