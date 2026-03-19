export default function applyDiscount(currency: number, discount: number) {
  return currency - currency * discount;
}
