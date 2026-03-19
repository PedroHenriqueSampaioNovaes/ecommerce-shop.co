import convertCurrency from './convertCurrency';

export default function formatCurrency(currency: number) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(convertCurrency(currency));
}
