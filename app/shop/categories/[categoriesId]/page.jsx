"use client";
import PercentageBadge from "@/components/PercentageBadge";
import ReadyToShipBadge from "@/components/ReadyToShipBadge";
import TopBar from "@/components/TopBar";
import Color from "@/components/shop/Color";
import Filter from "@/components/shop/Filter";
import Price from "@/components/shop/Price";
import Size from "@/components/shop/Size";
import SortBy from "@/components/shop/SortBy";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const Categories = ({ params }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentColor, setCurrentColor] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [currentSize, setCurrentSize] = useState("");

  const apiUrl = `${process.env.API_URL}/api/v1/product?page=${currentPage}&limit=12&category=${params.categoriesId}&color=${currentColor}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&size=${currentSize}`;

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
        },
      });
      setData(response.data);
      if (data) {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("product fetching error", error);
    }
  }, [apiUrl, data]);

  useEffect(() => {
    fetchData();
  }, [apiUrl, fetchData]);

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

  return (
    <>
      <TopBar
        title="Designer Wear"
        desc="All collection of new products, exclusive collections, the latest trends, and more."
      />
      <div className="main-container my-4 lg:my-10">
        {isLoading ? (
          <div className="w-full h-[40vh] flex justify-center items-center">
            <BeatLoader color="#820000" />
          </div>
        ) : (
          <div>
            <div>
              <div>
                {/* <div className="block lg:hidden card-mobile mt-6">
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
                </div> */}

                <div className="flex py-4 border-b-2  items-center justify-center lg:justify-between flex-wrap gap-y-2">
                  <div className="hidden lg:block">
                    <Filter />
                  </div>
                  <div className="flex gap-4 relative lg:static">
                    <Size setCurrentSize={setCurrentSize} />
                    <div className="">
                      <Price
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                      />
                    </div>
                    <Color setCurrentColor={setCurrentColor} />
                  </div>
                  <div className="relative hidden lg:block">
                    <SortBy />
                  </div>
                </div>
              </div>

              {/* products  */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6 my-6">
                {data?.product?.map((data, i) => (
                  <div key={i}>
                    <Link href={`/products/${data?.slug}`}>
                      <div className="relative">
                        <Image
                          src={data?.variant[0]?.imageUrl[0]}
                          alt="bridal_top"
                          width={326}
                          height={461}
                          priority
                          blurDataURL={"/images/placeholder_image.jpg"}
                          placeholder="blur"
                          className="w-full h-full rounded-[4px] border"
                        />
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
                          BDT {data?.regularPrice}/-
                        </p>
                        <p className="text-sm font-semibold line-through text-gray-500">
                          BDT {data?.salePrice}/-
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
                <div>
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
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;
