// this two parameter receives regular and sale price
// this function returns discount percentage
export const CalculatePercentage = (regularPrice, salePrice) => {
  const regular = Number(regularPrice);
  const sale = Number(salePrice);
  if (regular > sale) {
    const percentage = Math.ceil(((regular - sale) / regular) * 100);
    return percentage;
  } else {
    return 0;
  }
};
