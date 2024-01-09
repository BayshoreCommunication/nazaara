"use client";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// component import here
import SimilarProductsCarosel from "@/components/similar-products/SimilarProductsCarosel";
import ProductDetailsComponent from "@/components/product-detail/ProductDetailsComponent";
import DetailImage from "@/components/product-detail/DetailImagePage";
import { useEffect, useState } from "react";
import Accordion from "@/components/Accordion";

const ProductMainDetails = ({
  productDetails,
  similarProductData,
  moreProductData,
}) => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [promotionData, setPromotionData] = useState(null);

  const handleScroll = () => {
    const div = document.getElementById("leftDiv");
    if (div?.scrollTop === div?.scrollHeight - div?.offsetHeight) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    const promotionData =
      productDetails?.subCategory?.promotion ||
      productDetails?.category?.promotion;
    if (promotionData) {
      if (promotionData.validPromotion) {
        setPromotionData(promotionData);
      }
    }
  }, [productDetails]);

  // console.log("product deatails", promotionData);

  return (
    <div>
      <div className="lg:flex gap-8 main-container my-4 md:my-6 lg:my-10">
        <div
          id="leftDiv"
          className={`flex-1 w-full lg:w-[60%] overflow-y-scroll scrollbar-none bg-white ${
            isScrollingUp ? "scroll-up" : ""
          }`}
        >
          {productDetails && <DetailImage productData={productDetails} />}
        </div>

        <div className="w-full lg:w-[40%] sticky top-0 h-max">
          <ProductDetailsComponent
            data={productDetails}
            promotionData={promotionData}
          />
          <Accordion data={productDetails} />
        </div>
      </div>

      {/* similar products section  */}
      {similarProductData && (
        <div className="main-container">
          <h2 className="card-title">Similar Products</h2>
          <div className="carosel">
            <SimilarProductsCarosel data={similarProductData} />
          </div>
        </div>
      )}

      {/* More From the collections  */}
      <div className="main-container my-10">
        <h2 className="card-title">More From The Collections</h2>
        <div className="carosel">
          <SimilarProductsCarosel data={moreProductData} />
        </div>
      </div>
    </div>
  );
};

export default ProductMainDetails;
