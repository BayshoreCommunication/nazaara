// in this parameter we need to pass product array
// this function returns the array of color names

export const GetUniqueColorNames = (data) => {
  const colorNames = [];

  if (data) {
    // Iterate over each product in the array
    data.forEach((product) => {
      // Iterate over each variant in the product
      product.variant.forEach((variant) => {
        // Check if the color is not already in the array, then add it
        if (variant.color && !colorNames.includes(variant.color)) {
          colorNames.push({
            color: variant.color,
            colorCode: variant.colorCode,
          });
        }
      });
    });
    return colorNames;
  } else {
    return [];
  }
};
