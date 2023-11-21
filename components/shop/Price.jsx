"use client";
import React, { useState } from "react";
import ToogleButton from "./ToogleButton";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { BsArrowLeftRight } from "react-icons/bs";

const Price = ({ priceRange, setPriceRange }) => {
  const [isActive, setIsActive] = useState(false);
  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
    setIsActive(true);
  };

  const minPrice = priceRange?.[0] ?? 0;
  const maxPrice = priceRange?.[1] ?? 0;

  return (
    <div className="group lg:relative">
      <div className="hidden lg:block">
        <ToogleButton
          title={
            minPrice != 0 || maxPrice != 100000
              ? `BDT. ${minPrice.toLocaleString()} - BDT. ${maxPrice.toLocaleString()}`
              : "Price"
          }
          isActive={isActive}
        />
      </div>
      <div className="lg:hidden">
        <ToogleButton title={"Price"} isActive={isActive} />
      </div>
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute z-10 top-11 bg-white lg:w-96 left-0 lg:left-auto rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">Price</h4>
        <hr />
        <div className="py-3 px-4 flex flex-col gap-y-3">
          <div className="flex gap-2 flex-wrap justify-between items-center">
            <div className="border border-gray-300 p-2 rounded-md hover:bg-gray-200 hover:border-gray-200">
              Min: {minPrice}
            </div>
            <div>
              <label
                htmlFor="price-slider"
                className=" mb-2 text-sm font-medium text-gray-900 dark:text-white hidden lg:block"
              >
                Price Range
              </label>
              <label
                htmlFor="price-slider"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white lg:hidden"
              >
                <BsArrowLeftRight />
              </label>
            </div>
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
