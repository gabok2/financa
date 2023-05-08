export function FormatPrice(preço: number) {
  return preço.toFixed(2).replace('.', ',');
}
