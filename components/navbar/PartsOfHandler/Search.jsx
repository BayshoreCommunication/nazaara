"use client";
import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "@/services/productApi";
import { addProduct } from "@/store/serachProductSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Fuse from "fuse.js";
import useSWR from "swr";

const SearchComponent = () => {
  const router = useRouter();
  const [searchIsShown, setSearchIsShown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const dataRedux = useSelector((state) => state.searchProduct.product);

  console.log("data redux", dataRedux);

  const searchFormHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(addProduct(filteredData));
      router.push("/products/search");
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  // const { data: allProducts } = useGetProductsQuery();

  // console.log("data", allProducts);

  const fetcher = async () => {
    const response = await fetch(
      `${process.env.API_URL}/api/v1/product/search-published`
    );
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useSWR("search", fetcher);

  if (error) return <div>failed to load.error occured</div>;
  if (isLoading) return <div>loading...</div>;

  let filteredData;
  const options = {
    includeMatches: true,
    threshold: 0.6,
    keys: ["variant.color", "subCategory.title"],
  };
  if (data) {
    const fuse = new Fuse(data.product, options);

    // Filter the data based on the search term
    const searchResults = fuse.search(searchTerm);
    filteredData = searchResults.map((result) => result.item);
  }

  // console.log("all product data", data);
  // console.log("filter data", filteredData);
  // console.log("search term", searchTerm);

  return (
    <main>
      {/* pc search  */}
      <form onSubmit={searchFormHandler} className="hidden lg:block">
        <div
          className={`absolute transition-all duration-500 ease-in-out top-full right-[6.2rem] shadow-lg bg-gray-50 border`}
        >
          <div className="relative">
            <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-gray-400"
                fill="none"
                // stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              id="default-search"
              className="w-full lg:w-72 p-2 h-14 pl-4 text-sm text-gray-900 outline-none hidden lg:block"
              placeholder="Search on Nazaara"
              required
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSearchIsShown(true);
              }}
              value={searchTerm}
            />
          </div>
          {searchTerm && searchIsShown && (
            <div className={`w-72 bg-white border border-t`}>
              <ul className="p-4 flex flex-col gap-[0.7rem]">
                {filteredData ? (
                  filteredData.map((result) => (
                    <li
                      className="text-gray-700 text-sm cursor-pointer hover:text-primary-color hover:font-semibold transition-all duration-300"
                      key={result._id}
                      onClick={() => {
                        dispatch(addProduct(filteredData));
                        setSearchTerm(result.subCategory.title);
                        setSearchIsShown(false);
                        router.push("/products/search");
                      }}
                    >
                      {result.subCategory.title}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-700 text-sm">
                    {`No products found with ${searchTerm}`}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </form>
      {/* mobile search  */}
      {/* <form className="lg:hidden">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <div className="relative w-full">
            <input
              type="search"
              id="default-search"
              className="w-full lg:w-32 xl:w-full p-2 pl-4 text-sm text-gray-900 rounded-md bg-gray-50 outline-none h-8"
              placeholder="Search on Nazaara"
              required
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSearchIsShown(true);
              }}
              // value={searchTerm}
            />
            {searchTerm && searchIsShown && (
              <div className="absolute h-fit w-[20rem] z-10 bg-white right-0 top-9 shadow-xl rounded-md">
                <ul className="px-4 py-8 flex flex-col gap-[0.7rem]">
                  {filteredData &&
                    filteredData.map((result) => (
                      <li
                        className="text-gray-700 text-sm cursor-pointer hover:text-primary-color hover:font-semibold transition-all duration-300"
                        key={result.item._id}
                        onClick={() => {
                          setSearchTerm(result.item.productName);
                          dispatch(addProduct(filteredData));
                          setSearchIsShown(false);
                          router.push("/products");
                        }}
                      >
                        {result.item.productName} by {result.item.category}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </form> */}
    </main>
  );
};

export default SearchComponent;
