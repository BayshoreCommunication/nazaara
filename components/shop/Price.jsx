import React, { useState } from "react";
import ToogleButton from "./ToogleButton";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Price = ({ priceRange, setPriceRange }) => {
  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const minPrice = priceRange?.[0] ?? 0;
  const maxPrice = priceRange?.[1] ?? 0;

  return (
    <div className="group relative z-10">
      <ToogleButton title="Price" />
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute top-11 bg-white w-96 rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">Price</h4>
        <hr />
        <div className="py-3 px-4 flex flex-col gap-y-3">
          <div className="flex gap-2 flex-wrap justify-between items-center">
            <div className="border border-gray-300 p-2 rounded-md hover:bg-gray-200 hover:border-gray-200">
              Min: {minPrice}
            </div>
            <label
              htmlFor="price-slider"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price Range
            </label>
            <div className="border border-gray-300 p-2 rounded-md hover:bg-gray-200 hover:border-gray-200">
              Max: {maxPrice}
            </div>
          </div>
          <div className="relative">
            <Slider
              range
              id="price-slider"
              min={0}
              max={100000}
              step={50}
              value={priceRange}
              onChange={handlePriceChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
