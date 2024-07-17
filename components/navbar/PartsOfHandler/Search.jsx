"use client";
import React, { useState } from "react";
import { addProduct } from "@/store/serachProductSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Fuse from "fuse.js";
import useSWR from "swr";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";

const SearchComponent = () => {
  const router = useRouter();
  const [searchIsShown, setSearchIsShown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const searchFormHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(addProduct(filteredData));
      if (filteredData?.length > 0) {
        router.push("/products/search");
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const fetcher = async () => {
    const response = await fetch(
      `${process.env.API_URL}/api/v1/product/search-published`,
      {
        headers: {
          authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
        },
        next: { revalidate: 300 },
      }
    );
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useSWR("search", fetcher);

  // if (error) return <div>failed to load.error occured</div>;
  // if (isLoading) return <span>...</span>;

  let filteredData;
  const options = {
    includeMatches: true,
    threshold: 0.6,
    keys: ["variant.color", "subCategory.title", "productName"],
  };
  if (data) {
    const fuse = new Fuse(data.product, options);

    // Filter the data based on the search term
    const searchResults = fuse.search(searchTerm);
    filteredData = searchResults.map((result) => result.item);
  }

  return (
    <main>
      {/* pc search  */}
      <form onSubmit={searchFormHandler} className="hidden lg:block">
        <div
          className={`absolute transition-all duration-500 ease-in-out top-full right-[6.2rem] shadow-lg bg-gray-50 border`}
        >
          <div className="relative">
            <input
              id="default-search"
              className="w-full lg:w-80 py-2 h-14 px-4 text-sm text-gray-900 outline-none hidden lg:block"
              placeholder="Search on Nazaara"
              required
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSearchIsShown(true);
              }}
              value={searchTerm}
              autoComplete={`${searchTerm && "off"}`}
            />
            {filteredData?.length > 0 && (
              <Link href={"/products/search"}>
                <button
                  onClick={() => dispatch(addProduct(filteredData))}
                  className="absolute top-5 right-3"
                >
                  <IoMdSearch color="#880202" size={17} />
                </button>
              </Link>
            )}
          </div>
          {searchTerm && searchIsShown && (
            <div
              className={`w-80 max-h-80 bg-white border border-t overflow-y-auto`}
            >
              {" "}
              <ul className="p-4 flex flex-col gap-[0.7rem] bg-gray-100">
                <p className="text-gray-800 text-sm border-b border-gray-300 pb-1.5">
                  Showing products for:{" "}
                  {`${
                    searchTerm.length > 18
                      ? `${searchTerm.slice(0, 18)}...`
                      : searchTerm
                  }`}
                </p>
                {filteredData?.length > 0 ? (
                  filteredData.map((result) => (
                    <Link
                      href={`/products/${result?.sku
                        .replace(/\//g, "-")
                        .toLowerCase()}`}
                      className="text-gray-700 text-sm cursor-pointer hover:text-primary-color hover:font-semibold transition-all duration-300"
                      key={result._id}
                      onClick={() => {
                        dispatch(addProduct(filteredData));
                        setSearchTerm(result.subCategory.title);
                        setSearchIsShown(false);
                      }}
                    >
                      {`${
                        result.productName.length > 70
                          ? `${result.productName.slice(0, 70)}...`
                          : result.productName
                      }`}
                    </Link>
                  ))
                ) : (
                  <span className="text-gray-700 text-center py-8">
                    {`No product found 🥹`}
                  </span>
                )}
              </ul>
            </div>
          )}
        </div>
      </form>
      {/* mobile search  */}
      <form className="lg:hidden">
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
            <div className="relative">
              <input
                id="default-search"
                className="w-full lg:w-32 xl:w-full p-2 pl-4 text-sm text-gray-900 rounded-md bg-gray-50 outline-none h-8"
                placeholder="Search on Nazaara"
                required
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setSearchIsShown(true);
                }}
                value={searchTerm}
                autoComplete={`${searchTerm && "off"}`}
              />
              {filteredData?.length > 0 && (
                <Link href={"/products/search"}>
                  <button
                    onClick={() => dispatch(addProduct(filteredData))}
                    className="absolute top-2 right-3"
                  >
                    <IoMdSearch color="#880202" size={17} />
                  </button>
                </Link>
              )}
            </div>
            {searchTerm && searchIsShown && (
              <div className="absolute max-h-80 w-full z-10 bg-white right-0 top-9 shadow-xl rounded-md overflow-y-auto py-2">
                <ul className="p-4 flex flex-col gap-[0.7rem]">
                  <p className="text-gray-800 text-sm border-b border-gray-300 pb-1">
                    Showing products for:{" "}
                    {`${
                      searchTerm.length > 18
                        ? `${searchTerm.slice(0, 18)}...`
                        : searchTerm
                    }`}
                  </p>
                  {filteredData?.length > 0 ? (
                    filteredData.map((result) => (
                      <Link
                        href={`/products/${result?.sku
                          .replace(/\//g, "-")
                          .toLowerCase()}`}
                        className="text-gray-700 text-sm cursor-pointer hover:text-primary-color hover:font-semibold transition-all duration-300"
                        key={result._id}
                        onClick={() => {
                          setSearchTerm(result.productName);
                          dispatch(addProduct(filteredData));
                          setSearchIsShown(false);
                        }}
                      >
                        {`${
                          result.productName.length > 70
                            ? `${result.productName.slice(0, 70)}...`
                            : result.productName
                        }`}
                      </Link>
                    ))
                  ) : (
                    <span className="text-gray-700 text-center py-8">
                      {`No product found 🥹`}
                    </span>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </form>
    </main>
  );
};

export default SearchComponent;
