export const CalculateMinMaxPrice = (data = {}) => {
  if (Object.keys(data).length !== 0) {
    const minPrice = Math.min(
      ...data?.product?.map((product) => Math.floor(product?.salePrice))
    );
    const maxPrice = Math.max(
      ...data?.product?.map((product) => Math.ceil(product?.salePrice))
    );
    return { minPrice, maxPrice };
  }
};
