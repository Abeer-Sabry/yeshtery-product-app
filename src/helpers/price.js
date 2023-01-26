export const formatDiscount = (price, discount) => {
  const percentage = discount ? (discount / 100) * price : null;
  if (percentage) {
    return price - percentage;
  }
  return price;
};

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
