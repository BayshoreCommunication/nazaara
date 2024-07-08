import { Loader } from "@/components/Loader";
import ProductMainDetails from "@/components/product-detail/MainDetailContent";
import SimilarProduct from "@/components/similar-products/SimilarProduct";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import { Suspense } from "react";

const ProductDetails = async ({ params }) => {
  const productDetailsUrl = `${process.env.API_URL}/api/v1/product/${params.slug}`;
  const productDetails = await fetchServerSideData(productDetailsUrl);
  return (
    <main>
      <Suspense fallback={<Loader height={"h-[50vh]"} />}>
        <ProductMainDetails productDetails={productDetails?.data} />
      </Suspense>
      <Suspense fallback={null}>
        <SimilarProduct
          categoryId={productDetails.data.category._id}
          subCategoryId={productDetails.data.subCategory._id}
          productId={productDetails.data._id}
        />
      </Suspense>
    </main>
  );
};

export default ProductDetails;
