"use client";
// import Image from 'next/image'

//swiper import here
// import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from "swiper";
// import { getCookie } from 'cookies-next'
import "swiper/css";
import "swiper/css/pagination";

//drawer import here
// import Drawer from "react-modern-drawer";
import dynamic from "next/dynamic";

const Drawer = dynamic(() => import("react-modern-drawer"), {
  ssr: false,
});

import "react-modern-drawer/dist/index.css";
import DrawerContent from "@/components/drawer/DrawerContent";

// component import here
import SimilarProductsCarosel from "@/components/similar-products/SimilarProductsCarosel";
import useWindowDimensions from "@/customhooks/useDimensionWindow";
import ProductDetailsComponent from "@/components/product-detail/ProductDetailsComponent";
import DetailImage from "@/components/product-detail/DetailImagePage";
import { useEffect, useState } from "react";
import Accordion from "@/components/Accordion";
// import axios from "axios";
// import Loader from "@/components/Loader";

const ProductMainDetails = ({
  productDetails,
  similarProductData,
  moreProductData,
}) => {
  // console.log("product details", productDetails);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  //   const [data, setData] = useState(null);
  //   const [category, setCategory] = useState(null);
  //   const [categoryData, setCategoryData] = useState(null);
  //   const [allProducts, setAllProducts] = useState(null);

  //   const apiUrl = `${process.env.API_URL}/api/v1/product/${params.slug}`;
  //   const categoryApiUrl = `${process.env.API_URL}/api/v1/product?category=${category}`;
  //   const allProductUrl = `${process.env.API_URL}/api/v1/product`;

  //get single product details
  //   const fetchData = useCallback(async () => {
  //     try {
  //       const response = await axios.get(apiUrl);
  //       if (response.status === 200) {
  //         setData(response);
  //         setCategory(response.data.data.category);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }, [apiUrl]);

  //   const fetchCategoryData = useCallback(async () => {
  //     try {
  //       const response = await axios.get(categoryApiUrl);
  //       if (response.status === 200) {
  //         setCategoryData(response.data.product);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }, [categoryApiUrl]);

  //   const fetchAllProductData = useCallback(async () => {
  //     try {
  //       const response = await axios.get(allProductUrl);
  //       if (response?.status === 200) {
  //         setAllProducts(response.data.product);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }, [allProductUrl]);

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

  //drawer
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const { width } = useWindowDimensions();

  SwiperCore.use([Autoplay]);

  //generate random array from an array
  //   const numberOfArraysToSelect = 8;
  //   const [randomArrays, setRandomArrays] = useState([]);
  //   useEffect(() => {
  //     if (allProducts) {
  //       const copyOfListOfArrays = [...allProducts];
  //       for (let i = copyOfListOfArrays.length - 1; i > 0; i--) {
  //         const j = Math.floor(Math.random() * (i + 1));
  //         [copyOfListOfArrays[i], copyOfListOfArrays[j]] = [
  //           copyOfListOfArrays[j],
  //           copyOfListOfArrays[i],
  //         ];
  //       }
  //       const selectedArrays = copyOfListOfArrays.slice(
  //         0,
  //         numberOfArraysToSelect
  //       );
  //       setRandomArrays(selectedArrays);
  //     }
  //   }, [allProducts]);

  // console.log("data", data);
  //   if (!data) return <Loader height="h-[70vh]" />;

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
            toggleDrawer={toggleDrawer}
          />
          <Accordion data={productDetails} />
        </div>
      </div>

      <Drawer
        open={isOpen}
        size={width < 640 ? 350 : 500}
        onClose={toggleDrawer}
        direction="right"
        className="overflow-y-auto scrollbar-none"
      >
        {/* drawer content */}
        {productDetails && (
          <DrawerContent data={productDetails} setIsOpen={setIsOpen} />
        )}
      </Drawer>
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
