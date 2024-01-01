export const CalculateFixLessPercentageAmount = (regularPrice, percentage) => {
  const regularPriceInNumber = Number(regularPrice);
  const percentageInNumber = Number(percentage);
  const lessAmount = (percentageInNumber / 100) * regularPriceInNumber;
  return lessAmount;
};
