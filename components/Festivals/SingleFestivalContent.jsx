"use client";
import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import TopBar from "../TopBar";
import { FaGift } from "react-icons/fa";
import ProductCart from "../card/ProductCart";
import { GetUniqueColorNames } from "@/helpers/GetUniqueColorName";
import { RxCross2 } from "react-icons/rx";
import FilteredFestivalComponent from "./FilteredFestivalComponent";

const FestivalComponent = ({ festivalData }) => {
  const minPrice = Math.min(
    ...festivalData.data[0].products.map((product) => product.salePrice)
  );
  const maxPrice = Math.max(
    ...festivalData.data[0].products.map((product) => product.salePrice)
  );

  const [change, setChange] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]); // Default price range
  const [priceFilteredProducts, setPriceFilteredProducts] = useState([]); // Default price range
  const [matchedFilteredProducts, setMatchedFilteredProducts] = useState([]); // Default price range

  console.log("min", minPrice, "max", maxPrice);
  console.log("minp", priceRange[0], "maxp", priceRange[1]);

  // useEffect to fetch products initially and whenever priceFilter changes
  useEffect(() => {
    const priceFilteredData = festivalData.data[0].products.filter(
      (product) =>
        product.salePrice >= priceRange[0] && product.salePrice <= priceRange[1]
    );
    // console.log("priceFilteredData", priceFilteredData);
    if (change) {
      setPriceFilteredProducts(priceFilteredData);
    } else if (priceRange[0] > minPrice || priceRange[1] < maxPrice) {
      setPriceFilteredProducts(priceFilteredData);
      setChange(true);
    }
  }, [change, festivalData.data, maxPrice, minPrice, priceRange]);

  //matched products
  useEffect(() => {
    const newMatchedObjects = [];

    for (const object1 of priceFilteredProducts) {
      for (const object2 of filteredProducts) {
        if (object1._id === object2._id) {
          newMatchedObjects.push({
            ...object1,
            ...object2,
          });
        }
      }
    }
    setMatchedFilteredProducts(newMatchedObjects);
  }, [filteredProducts, priceFilteredProducts]);

  const handleSearch = (color) => {
    setSelectedColors((prevColors) => {
      const newColors = prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color];

      // console.log("selected colors", newColors);

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

  const handleRemoveColor = (colorToRemove) => {
    const newSelectedColors = selectedColors.filter(
      (color) => color !== colorToRemove
    );

    // Update the filtered products based on the new selected colors
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

  // console.log("main festival data", festivalData);
  console.log("color filtered data", filteredProducts);
  console.log("price filtered data", priceFilteredProducts);
  console.log("match filtered data", matchedFilteredProducts);
  // console.log("price range", priceRange[0], priceRange[1]);

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
              <div className={`flex-[3]`}>
                {matchedFilteredProducts.length > 0 ? (
                  <div>
                    {
                      <FilteredFestivalComponent
                        data={matchedFilteredProducts}
                        selectedColors={selectedColors}
                        handleRemoveColor={handleRemoveColor}
                        handleClearAll={handleClearAll}
                        festivalTitle={festivalData.data[0].title}
                        home={true}
                      />
                    }
                  </div>
                ) : priceFilteredProducts.length > 0 ? (
                  <div>
                    {
                      <FilteredFestivalComponent
                        data={priceFilteredProducts}
                        selectedColors={selectedColors}
                        handleRemoveColor={handleRemoveColor}
                        handleClearAll={handleClearAll}
                        festivalTitle={festivalData.data[0].title}
                        home={true}
                      />
                    }
                  </div>
                ) : filteredProducts.length > 0 ? (
                  <div>
                    {
                      <FilteredFestivalComponent
                        data={filteredProducts}
                        selectedColors={selectedColors}
                        handleRemoveColor={handleRemoveColor}
                        handleClearAll={handleClearAll}
                        festivalTitle={festivalData.data[0].title}
                        home={true}
                      />
                    }
                  </div>
                ) : festivalData.data[0].products.length > 0 ? (
                  <div>
                    {
                      <FilteredFestivalComponent
                        data={festivalData.data[0].products}
                        selectedColors={selectedColors}
                        handleRemoveColor={handleRemoveColor}
                        handleClearAll={handleClearAll}
                        festivalTitle={festivalData.data[0].title}
                        home={false}
                      />
                    }
                  </div>
                ) : matchedFilteredProducts.length < 1 &&
                  (priceRange[0] > minPrice || priceRange[1] < maxPrice) ? (
                  <div className="w-full flex justify-center items-center h-full">
                    <p>No Product Found!</p>
                  </div>
                ) : (
                  "No product found!"
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
