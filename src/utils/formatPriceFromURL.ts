import convertCurrency from './convertCurrency';

export default function formatPriceFromURL(searchPrice: string) {
  return searchPrice.split('_').reduce((acc: number[], value) => {
    acc.push(convertCurrency(Number(value)));
    return acc;
  }, []);
}
