"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import TopBar from "../TopBar";
import { FaGift } from "react-icons/fa";
import ProductCart from "../card/ProductCart";
import { GetUniqueColorNames } from "@/helpers/GetUniqueColorName";
import Fuse from "fuse.js";

//steps: set product image in product api product -> design update -> set fuge for search/filter for color and price.

const FestivalComponent = ({ festivalData }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log("festival data", festivalData);
  // console.log("searchQuery", searchQuery);

  // Fuse.js options
  const options = {
    includeScore: true,
    keys: ["variant.color"],
  };

  const fuse = new Fuse(festivalData.data[0].products, options);

  // Search handler
  // const handleSearch = (color) => {
  //   // setSearchQuery(color);
  //   const newSelectedColors = selectedColors.includes(color)
  //     ? selectedColors.filter((c) => c !== color)
  //     : [...selectedColors, color];

  //   console.log("selected color", newSelectedColors);
  //   // Use selected colors for search
  //   const result = fuse.search(newSelectedColors.join(" "));
  //   setSelectedColors(newSelectedColors);
  //   setFilteredProducts(result);
  // };
  const handleSearch = (color) => {
    setSelectedColors((prevColors) => {
      const newColors = prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color];

      console.log("selected colors", newColors);

      // Apply the filter based on selected colors
      const result =
        newColors.length > 0
          ? festivalData.data[0].products.filter((product) =>
              newColors.includes(product.variant[0].color)
            )
          : [];

      setFilteredProducts(result);
      return newColors;
    });
  };

  console.log("filtered products", filteredProducts);

  return (
    <main>
      <TopBar
        title={`Festival/${festivalData.data[0].title}`}
        icon={<FaGift />}
      />
      <>
        {festivalData && (
          <div className="main-container my-10 lg:my-20">
            <div className="flex gap-8">
              <div className="flex-1">
                <div className="flex flex-col gap-y-8">
                  <div className="border-b-2 pb-8">
                    <p className="font-semibold mb-6">PRICE RANGE</p>
                    <Slider
                      range
                      id="price-slider"
                      min={0}
                      max={100000}
                      step={50}
                      value={""}
                      onChange={""}
                    />
                  </div>
                  <div>
                    <p className="font-semibold mb-6">COLOR</p>
                    <div className="flex flex-wrap gap-2">
                      {GetUniqueColorNames(festivalData.data[0].products)
                        .length > 0 &&
                        GetUniqueColorNames(festivalData.data[0].products).map(
                          (color, i) => (
                            <button
                              key={i}
                              onClick={() => handleSearch(color)}
                              className={`border ${
                                selectedColors.includes(color)
                                  ? "bg-primary-color"
                                  : "bg-gray-400"
                              } text-sm px-2 py-1 uppercase hover:border-primary-color`}
                            >
                              {color}
                            </button>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>
              {filteredProducts.length > 0 ? (
                <div className="flex-[3]">
                  <div>
                    {filteredProducts.length === 1 ? (
                      <p>
                        {filteredProducts.length} item found for{" "}
                        {`'${festivalData.data[0].title}'`}
                      </p>
                    ) : (
                      <p>
                        {filteredProducts.length} items found for{" "}
                        {`'${festivalData.data[0].title}'`}
                      </p>
                    )}
                    {/* <div>
                      <button className="border text-sm px-3 py-1 uppercase bg-[#fa9b9b] rounded-full text-white">
                        {searchQuery}{" "}
                        <span
                          onClick={() => setSearchQuery("")}
                          className="text-black ml-1"
                        >
                          x
                        </span>
                      </button>
                    </div> */}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
                    {filteredProducts.map((data, i) => (
                      <ProductCart data={data} key={i} />
                    ))}
                  </div>
                </div>
              ) : (
                festivalData.data.length > 0 && (
                  <div className="flex-[3] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
                    {festivalData.data[0].products.map((data, i) => (
                      <ProductCart data={data} key={i} />
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </>
    </main>
  );
};

export default FestivalComponent;
