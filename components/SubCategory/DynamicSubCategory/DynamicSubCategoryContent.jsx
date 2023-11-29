"use client";
import React, { useEffect, useMemo, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { GetUniqueColorNames } from "@/helpers/GetUniqueColorName";
import { BeatLoader } from "react-spinners";
import { TbCategoryFilled } from "react-icons/tb";
import TopBar from "@/components/TopBar";
import FilteredFestivalComponent from "@/components/Festivals/FilteredFestivalComponent";
import NoProductFound from "@/components/NoProductFound";

const DynamicSubCategoryContent = ({ data, subCategoryData }) => {
  const minPrice = Math.min(
    ...data?.product?.map((product) => Math.floor(product?.salePrice))
  );
  const maxPrice = Math.max(
    ...data?.product?.map((product) => Math.ceil(product?.salePrice))
  );

  const [selectedColors, setSelectedColors] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]); // Default price range
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);

      // Your existing filtering logic here
      const colorFilteredData =
        selectedColors.length > 0
          ? data?.product?.filter((product) =>
              product.variant.some((variant) =>
                selectedColors.includes(variant.color)
              )
            )
          : data?.product;

      const priceFilteredData = colorFilteredData.filter(
        (product) =>
          product.salePrice >= priceRange[0] &&
          product.salePrice <= priceRange[1]
      );

      setFilteredProducts(priceFilteredData);
    };

    fetchData();
  }, [data?.product, priceRange, selectedColors]);

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
        ? data?.product?.filter((product) =>
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

  return (
    <main>
      <TopBar
        title={`Category / ${subCategoryData.data[0].title}`}
        icon={<TbCategoryFilled />}
      />
      <>
        {data && (
          <div className="main-container my-10">
            {data.product.length > 0 ? (
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
                        <p className="text-sm">৳ {priceRange[0]}</p>
                        <p className="text-sm">৳ {priceRange[1]}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-6">COLOR</p>
                      <div className="flex flex-wrap gap-2">
                        {GetUniqueColorNames(data?.product).length > 0 &&
                          GetUniqueColorNames(data?.product).map((color, i) => (
                            <button
                              key={i}
                              onClick={() => handleSearch(color)}
                              className={`border ${
                                selectedColors.includes(color)
                                  ? "bg-primary-color text-white"
                                  : "bg-gray-100 border border-gray-500 hover:bg-primary-color hover:text-white"
                              } text-xs px-2 py-1 uppercase rounded-md transition-all duration-500 ease-in-out`}
                            >
                              {color}
                            </button>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-[3]">
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
                      festivalTitle={subCategoryData.data[0].title}
                    />
                  ) : (
                    <div className="w-full flex justify-center items-center h-full">
                      <p>No Product Found!😢</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <NoProductFound />
            )}
          </div>
        )}
      </>
    </main>
  );
};

export default DynamicSubCategoryContent;
