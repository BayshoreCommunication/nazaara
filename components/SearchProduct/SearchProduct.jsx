"use client";
import { GetUniqueColorNames } from "@/helpers/GetUniqueColorName";
import { redirect } from "next/navigation";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import FilteredFestivalComponent from "../Festivals/FilteredFestivalComponent";
import NoProductFound from "../NoProductFound";

const SearchProduct = () => {
  const reduxData = useSelector((state) => state.searchProduct.product);

  useEffect(() => {
    if (!reduxData || reduxData?.length === 0) {
      return redirect("/shop");
    }
  }, [reduxData]);

  // console.log("redux data", reduxData);

  const minPrice = reduxData
    ? Math.min(...reduxData?.map((product) => Math.floor(product?.salePrice)))
    : 0;

  const maxPrice = reduxData
    ? Math.max(...reduxData?.map((product) => Math.ceil(product?.salePrice)))
    : 0;

  const [selectedColors, setSelectedColors] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      // console.log("reduxData", reduxData);

      // Your existing filtering logic here
      const colorFilteredData =
        selectedColors.length > 0
          ? reduxData.filter((product) =>
              product.variant.some((variant) =>
                selectedColors.includes(variant.color)
              )
            )
          : reduxData;

      // console.log();

      const priceFilteredData = colorFilteredData?.filter(
        (product) =>
          product.salePrice >= priceRange[0] &&
          product.salePrice <= priceRange[1]
      );

      setFilteredProducts(priceFilteredData);
    };

    fetchData();
  }, [selectedColors, priceRange, reduxData]);

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
        ? reduxData.filter((product) =>
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
      {reduxData && (
        <div className="main-container my-10">
          {reduxData.length > 0 ? (
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
                    <div className="flex flex-wrap gap-x-1 gap-y-4">
                      {GetUniqueColorNames(reduxData).length > 0 &&
                        GetUniqueColorNames(reduxData).map((data, index) => (
                          <div
                            className="relative group flex flex-col items-center"
                            key={index}
                          >
                            <div className="mb-1 rounded-sm absolute opacity-0 z-50 group-hover:opacity-100 bottom-full px-2 py-[2px] text-xs w-max text-center font-medium text-gray-500 bg-gray-200 transition-opacity duration-300">
                              {data.color}
                            </div>
                            <button
                              onClick={() => handleSearch(data.color)}
                              style={{ backgroundColor: data.colorCode }}
                              className={`flex justify-center items-center w-7 h-7 border rounded-sm shadow-sm`}
                            >
                              {selectedColors.includes(data.color) &&
                                (data.color === "Black" ? (
                                  <TiTick color="white" size={20} />
                                ) : (
                                  <TiTick color="black" size={20} />
                                ))}
                            </button>
                          </div>
                        ))}
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
                    festivalTitle={"search product"}
                  />
                ) : (
                  <div className="w-full flex justify-center items-center h-full">
                    <NoProductFound />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <NoProductFound />
          )}
        </div>
      )}
    </main>
  );
};

export default SearchProduct;
