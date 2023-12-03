"use client";
import Loader from "@/components/Loader";
import PercentageBadge from "@/components/PercentageBadge";
import ReadyToShipBadge from "@/components/ReadyToShipBadge";
import TopBar from "@/components/TopBar";
import Brand from "@/components/shop/Brand";
import Category from "@/components/shop/Category";
import Color from "@/components/shop/Color";
import Delivery from "@/components/shop/Delivery";
import Discount from "@/components/shop/Discount";
import Filter from "@/components/shop/Filter";
import Price from "@/components/shop/Price";
import Size from "@/components/shop/Size";
import SortBy from "@/components/shop/SortBy";
import { addProduct } from "@/store/serachProductSlice";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FaBox } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Products = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [currentSize, setCurrentSize] = useState("");
  const searchProduct = useSelector((state) => state.searchProduct.product);

  const apiUrl = `${process.env.API_URL}/api/v1/product?page=${currentPage}&limit=12&category=${currentCategory}&color=${currentColor}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&size=${currentSize}`;
  // http://localhost:8000/api/v1/product?page=1&limit=5&sort=asc&sortBy=salePrice

  // const fetchData = useCallback(async () => {
  //   try {
  //     const response = await axios.get(apiUrl);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [apiUrl]);

  // useEffect(() => {
  //   fetchData();
  //   let dataUpdate = searchProduct?.map((el) => el.item);
  //   setData({ product: dataUpdate });
  //   console.log("data", data);
  // }, [apiUrl, fetchData]);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    if (searchProduct && searchProduct.length > 0) {
      // Display filtered data from Redux
      setData({ product: searchProduct.map((el) => el.item) });
    } else {
      // Fetch data from the API
      fetchData().then((apiData) => {
        setData(apiData);
      });
    }
  }, [searchProduct, apiUrl]);

  // console.log("data", data);

  const totalPages = Math.ceil(data?.total / 12);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // getData();
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const ellipsis = (
      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300">
        ...
      </button>
    );

    const maxButtonsToShow = 5; // Number of buttons to show at a time
    const halfMaxButtons = Math.floor(maxButtonsToShow / 2);

    let startPage = currentPage - halfMaxButtons;
    let endPage = currentPage + halfMaxButtons;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, maxButtonsToShow);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - maxButtonsToShow + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <button
          key={1}
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300"
          onClick={() => handlePageClick(1)}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(ellipsis);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 ${
            currentPage === i ? "bg-primary-color text-white" : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(ellipsis);
      }
      pageNumbers.push(
        <button
          key={totalPages}
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300"
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </button>
      );
    }
    return pageNumbers;
  };
  const dispatch = useDispatch();
  // Reset the Redux data when navigating away from the /products page
  const resetReduxData = () => {
    dispatch(addProduct(null));
  };

  // Add a cleanup effect when leaving the page
  useEffect(() => {
    return () => {
      resetReduxData();
    };
  }, []);

  return (
    <>
      <TopBar title={"PRODUCTS"} icon={<FaBox />} />
      <div className="main-container my-10">
        <div>
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
              <Size setCurrentSize={setCurrentSize} />
              <Price priceRange={priceRange} setPriceRange={setPriceRange} />
              <Category setCurrentCategory={setCurrentCategory} />
              <Color setCurrentColor={setCurrentColor} />
            </div>
            <SortBy />
          </div>
        </div>
        {/* products  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6 my-6">
          {data?.product?.map((data, i) => (
            <div key={i}>
              <Link href={`/products/${data?.slug}`}>
                <div className="relative">
                  {data?.variant[0]?.imageUrl[0] && (
                    <Image
                      src={data?.variant[0]?.imageUrl[0]}
                      alt="bridal_top"
                      width={326}
                      height={461}
                      className="w-full h-full rounded-[4px] border"
                    />
                  )}

                  <div className="absolute top-2 left-2">
                    <PercentageBadge
                      text={`-${Math.ceil(
                        ((data?.regularPrice - data?.salePrice) /
                          data?.regularPrice) *
                          100
                      )}%`}
                    />
                  </div>
                </div>
              </Link>
              <div className="w-full text-left bg-white my-4 ">
                <div className="flex items-center gap-2">
                  <p className="text-md font-bold text-gray-700">
                    BDT {data?.salePrice}/-
                  </p>
                  <p className="text-sm font-semibold line-through text-gray-500">
                    BDT {data?.regularPrice}/-
                  </p>
                </div>
                <p className="text-xs font-semibold my-2 text-gray-500">
                  {data?.productName}
                </p>
                <div className="flex gap-2 items-center">
                  <ReadyToShipBadge text="Ready to Ship" />
                  {/* <PendingShipBadge text="Up to 2 weeks" /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="">
            <ul className="flex -space-x-px text-sm justify-center mt-4">
              <li>
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-200 border border-gray-100 rounded-l-lg hover:text-gray-100 ${
                    currentPage === 1
                      ? "bg-primary-hover-color"
                      : "bg-primary-color"
                  }`}
                >
                  Previous
                </button>
              </li>

              <li className="flex !text-black">{renderPageNumbers()}</li>
              <li>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-200 border border-gray-100 rounded-e-lg hover:text-gray-100 ${
                    currentPage === totalPages
                      ? "bg-primary-hover-color"
                      : "bg-primary-color"
                  }`}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;