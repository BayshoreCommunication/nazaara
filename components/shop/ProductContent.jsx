"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Size from "./Size";
import Price from "./Price";
import Category from "./Category";
import Color from "./Color";
import Filter from "./Filter";
import NoProductFound from "../NoProductFound";
import ProductCart from "../ProductCart";

const ProductContent = () => {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [priceRange, setPriceRange] = useState([0, 150000]);

  const [currentSize, setCurrentSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const apiUrl = `${process.env.API_URL}/api/v1/product/published?page=${currentPage}&limit=15&category=${currentCategory}&color=${currentColor}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&size=${currentSize}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    fetchData().then((apiData) => {
      setData(apiData);
      setIsLoading(false);
    });
  }, [currentCategory, currentColor, currentPage, currentSize, priceRange]);

  const totalPages = data?.totalPages;

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
    <section className="main-container mb-10 mt-3">
      <div className="flex flex-col lg:flex-row py-4 border-b-2 justify-center gap-x-4 gap-y-2">
        <Size
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          setCurrentPage={setCurrentPage}
        />
        <Price
          setCurrentPage={setCurrentPage}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <Category
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          setCurrentPage={setCurrentPage}
        />
        <Color
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          setCurrentPage={setCurrentPage}
        />
        <Filter
          currentSize={currentSize}
          priceRange={priceRange}
          currentColor={currentColor}
          currentCategory={currentCategory}
          setCurrentSize={setCurrentSize}
          setPriceRange={setPriceRange}
          setCurrentCategory={setCurrentCategory}
          setCurrentColor={setCurrentColor}
        />
      </div>
      {/* products  */}
      {isLoading ? (
        <div className="w-full h-[40vh] flex justify-center items-center">
          <BeatLoader color="#820000" />
        </div>
      ) : data?.product?.length === 0 ? (
        <NoProductFound />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 xl:gap-6 my-10">
          {data?.product?.map((data, i) => (
            <ProductCart key={i} data={data} i={i} />
          ))}
        </div>
      )}

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
    </section>
  );
};

export default ProductContent;
