import React from "react";
import ProductMainDetails from "@/components/product-detail/MainDetailContent";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";

const ProductDetails = async ({ params }) => {
  const productDetailsUrl = `${process.env.API_URL}/api/v1/product/${params.slug}`;
  const productDetails = await fetchServerSideData(productDetailsUrl);
  //   console.log("product details", productDetails);

  const similarProductUrl = `${process.env.API_URL}/api/v1/product/published?subCategory=${productDetails.data.subCategory._id}`;
  const similarProductData = await fetchServerSideData(similarProductUrl);
  const similarSlicedData = similarProductData.product.slice(0, 10);
  //   console.log("similar prodcts", similarSlicedData);

  //more from the collection data api
  const moreProductUrl = `${process.env.API_URL}/api/v1/product/published?category=${productDetails.data.category._id}`;
  const moreProductData = await fetchServerSideData(moreProductUrl);
  const moreSlicedData = moreProductData.product.slice(0, 10);
  //   console.log("similar prodcts", moreSlicedData);

  return (
    <ProductMainDetails
      productDetails={productDetails?.data}
      similarProductData={similarSlicedData}
      moreProductData={moreSlicedData}
    />
  );
};

export default ProductDetails;
