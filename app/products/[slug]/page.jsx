import { Loader } from "@/components/Loader";
import ProductMainDetails from "@/components/product-detail/MainDetailContent";
import SimilarProduct from "@/components/similar-products/SimilarProduct";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import { Suspense } from "react";

function decodeSku(sku) {
  // Split the string into an array by hyphens
  const parts = sku.split("-");
  // Rejoin the array into a string, starting from the second element
  // Replace hyphens with forward slashes from the second part onward
  const result = parts.slice(0, 2).join("-") + "/" + parts.slice(2).join("/");

  return result;
}

const ProductDetails = async ({ params }) => {
  const sku = decodeSku(params.slug).toUpperCase();
  const encodeUrl = encodeURIComponent(sku);
  // console.log("parm sku", params.slug);
  // console.log("sku", sku);
  // console.log("encodeUrl", encodeUrl);

  const productDetails = await fetchServerSideData(
    `${process.env.API_URL}/api/v1/product/${encodeUrl}`
  );

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
