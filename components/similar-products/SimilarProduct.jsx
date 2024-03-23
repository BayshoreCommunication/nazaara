import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import SimilarProductsCarosel from "./SimilarProductsCarosel";

const SimilarProduct = async ({ categoryId, subCategoryId, productId }) => {
  const similarProductUrl = `${process.env.API_URL}/api/v1/product/published?subCategory=${subCategoryId}`;
  const similarProductData = await fetchServerSideData(similarProductUrl);
  const similarSlicedData = similarProductData.product.slice(0, 11);
  const similarFinalProducts = similarSlicedData.filter(
    (product) => product._id !== productId
  );
  // console.log("similar prodcts", similarSlicedData);

  //more from the collection data api
  const moreProductUrl = `${process.env.API_URL}/api/v1/product/published?category=${categoryId}`;
  const moreProductData = await fetchServerSideData(moreProductUrl);
  const moreSlicedData = moreProductData.product.slice(0, 11);
  const moreFinalProducts = moreSlicedData.filter(
    (product) => product._id !== productId
  );
  // console.log("similar prodcts", similarFinalProducts);
  return (
    <div>
      {/* similar products section  */}
      {similarFinalProducts?.length > 0 && (
        <div className="main-container mt-10">
          <h2 className="card-title">Similar Products</h2>
          <div className="carosel">
            <SimilarProductsCarosel data={similarFinalProducts} />
          </div>
        </div>
      )}

      {/* More From the collections  */}
      {moreFinalProducts?.length > 0 && (
        <div className="main-container my-10">
          <h2 className="card-title">More From The Collections</h2>
          <div className="carosel">
            <SimilarProductsCarosel data={moreFinalProducts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SimilarProduct;
