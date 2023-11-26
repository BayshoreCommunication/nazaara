"use client";
import React, { useEffect, useMemo, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import TopBar from "../TopBar";
import { FaGift } from "react-icons/fa";
import { GetUniqueColorNames } from "@/helpers/GetUniqueColorName";
import FilteredFestivalComponent from "./FilteredFestivalComponent";
import { BeatLoader } from "react-spinners";

const FestivalComponent = ({ festivalData }) => {
  const minPrice = Math.min(
    ...festivalData.data[0].products.map((product) => product.salePrice)
  );
  const maxPrice = Math.max(
    ...festivalData.data[0].products.map((product) => product.salePrice)
  );

  const [selectedColors, setSelectedColors] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]); // Default price range
  const [loading, setLoading] = useState(true);

  // const uniqueColorNames = useMemo(() => {
  //   return GetUniqueColorNames(festivalData.data[0].products);
  // }, [festivalData.data]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);

      // Your existing filtering logic here
      const colorFilteredData =
        selectedColors.length > 0
          ? festivalData.data[0].products.filter((product) =>
              selectedColors.includes(product.variant[0].color)
            )
          : festivalData.data[0].products;

      const priceFilteredData = colorFilteredData.filter(
        (product) =>
          product.salePrice >= priceRange[0] &&
          product.salePrice <= priceRange[1]
      );

      setFilteredProducts(priceFilteredData);
    };

    fetchData();
  }, [selectedColors, priceRange, festivalData.data]);

  const handleSearch = (color) => {
    setSelectedColors((prevColors) => {
      const newColors = prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color];

      setFilteredProducts([]);
      setLoading(true);
      return newColors;
    });
  };

  const handleRemoveColor = (colorToRemove) => {
    const newSelectedColors = selectedColors.filter(
      (color) => color !== colorToRemove
    );

    const result =
      newSelectedColors.length > 0
        ? festivalData.data[0].products.filter((product) =>
            newSelectedColors.includes(product.variant[0].color)
          )
        : [];

    setSelectedColors(newSelectedColors);
    setFilteredProducts(result);
  };

  // Function to clear all selected colors
  const handleClearAll = () => {
    setSelectedColors([]);
    setFilteredProducts([]);
  };

  // console.log("filtered products, ", filteredProducts);

  return (
    <main>
      <TopBar
        title={`Festival/${festivalData.data[0].title}`}
        icon={<FaGift />}
      />
      <>
        {festivalData && (
          <div className="main-container my-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex flex-col gap-y-8">
                  <div className="border-b-2 pb-8">
                    <p className="font-semibold mb-6">PRICE RANGE</p>
                    <Slider
                      range
                      id="price-slider"
                      min={minPrice}
                      max={maxPrice}
                      step={100}
                      value={priceRange}
                      onChange={(newPriceRange) => {
                        setPriceRange(newPriceRange);
                      }}
                    />
                    <div className="flex justify-between items-center">
                      <p className="text-sm">BDT {priceRange[0]}</p>
                      <p className="text-sm">BDT {priceRange[1]}</p>
                    </div>
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
                                  ? "bg-primary-color text-white"
                                  : "bg-gray-400 hover:border-primary-color"
                              } text-sm px-2 py-1 uppercase rounded-md transition-all duration-500 ease-in-out`}
                            >
                              {color}
                            </button>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[3] ">
                {loading ? (
                  <div className="w-full flex justify-center items-center h-full">
                    <div className="w-full h-[40vh] flex justify-center items-center">
                      <BeatLoader color="#820000" />
                    </div>
                  </div>
                ) : filteredProducts.length > 0 ? (
                  <FilteredFestivalComponent
                    data={filteredProducts}
                    selectedColors={selectedColors}
                    handleRemoveColor={handleRemoveColor}
                    handleClearAll={handleClearAll}
                    festivalTitle={festivalData.data[0].title}
                  />
                ) : (
                  <div className="w-full flex justify-center items-center h-full">
                    <p>No Product Found!😢</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    </main>
  );
};

export default FestivalComponent;
