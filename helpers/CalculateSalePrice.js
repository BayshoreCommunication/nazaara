import { CalculateFixLessPercentageAmount } from "./CalculateFixedPercentageLessAmount";

export const calculateSalePrice = (
  isPromotionValid,
  discountType,
  regularPrice,
  discountOff,
  salePrice
) => {
  if (isPromotionValid) {
    if (discountType === "percentage") {
      return CalculateFixLessPercentageAmount(regularPrice, discountOff);
    } else {
      return regularPrice - discountOff;
    }
  } else {
    return salePrice;
  }
};
