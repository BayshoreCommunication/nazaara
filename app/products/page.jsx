// "use client";
import FetchServerSideData from "@/components/DataFetchingComponent/ServerSideDataFetching";
import SingleCard from "@/components/card/youMayLike/SingleCard";
// import Brand from "@/components/shop/Brand";
// import Color from "@/components/shop/Color";
// import Delivery from "@/components/shop/Delivery";
// import Discount from "@/components/shop/Discount";
// import Filter from "@/components/shop/Filter";
// import Price from "@/components/shop/Price";
// import Size from "@/components/shop/Size";
// import SortBy from "@/components/shop/SortBy";
// import TopBar from "@/components/shop/TopBar";
import React from "react";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/scrollbar";

// import required modules
// import { Scrollbar } from "swiper";

const Products = async () => {
  const datas = await FetchServerSideData(
    "http://localhost:8000/api/v1/product"
  );
  console.log("hloo", datas.product);
  return (
    <>
      <div className="container">
        {/* <div>
          <TopBar
            title="Designer Wear"
            desc="All collection of new products, exclusive collections, the latest trends, and more."
          />
          <div className="block lg:hidden card-mobile mt-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={12}
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className=""
            >
              <SwiperSlide>
                <Filter />
              </SwiperSlide>
              <SwiperSlide>
                <Brand />
              </SwiperSlide>
              <SwiperSlide>
                <Size />
              </SwiperSlide>
              <SwiperSlide>
                <Price />
              </SwiperSlide>
              <SwiperSlide>
                <Discount />
              </SwiperSlide>
              <SwiperSlide>
                <Delivery />
              </SwiperSlide>
              <SwiperSlide>
                <Color />
              </SwiperSlide>
              <SwiperSlide>
                <SortBy />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="hidden lg:flex py-4 border-b-2  items-center justify-between">
            <Filter />
            <div className="flex gap-4">
              <Brand />
              <Size />
              <Price />
              <Discount />
              <Delivery />
              <Color />
            </div>
            <SortBy />
          </div>
        </div> */}

        {/* products  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6 my-6">
          {/* {[...Array(12)].map((x, i) => (
            <SingleCard key={i} />
          ))} */}
          {datas?.product?.map((data, i) => (
            <SingleCard data={data} key={i} />
          ))}
        </div>

        {/* pagination */}
        {/* <nav
          className="flex justify-center mb-10"
          aria-label="Page navigation example"
        >
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </>
  );
};

export default Products;
