"use client";
import { GetUniqueColorNames } from "@/helpers/GetUniqueColorName";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { BeatLoader } from "react-spinners";
import NoProductFound from "../NoProductFound";
import FilteredFestivalComponent from "./FilteredFestivalComponent";

const FestivalContent = ({ festivalData }) => {
  const [colorNames, setColorNames] = useState([]);
  const [colorsData, setColorsData] = useState([]);
  // console.log("festivalData", festivalData);
  const minPrice = Math.min(
    ...festivalData?.data[0]?.products.map((product) =>
      Math.floor(product?.salePrice)
    )
  );
  const maxPrice = Math.max(
    ...festivalData?.data[0]?.products.map((product) =>
      Math.ceil(product?.salePrice)
    )
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
          ? festivalData.data[0].products.filter((product) =>
              product.variant.some((variant) =>
                selectedColors.includes(variant.color)
              )
            )
          : festivalData.data[0].products;

      const priceFilteredData = colorFilteredData.filter(
        (product) =>
          product.salePrice >= priceRange[0] &&
          product.salePrice <= priceRange[1]
      );

      const colors = GetUniqueColorNames(festivalData.data[0].products);
      setColorNames(colors);

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

  // function rgbToHex(rgb) {
  //   // console.log("rgb", rgb);
  //   if (rgb) {
  //     return (
  //       "#" +
  //       rgb.map((component) => component.toString(16).padStart(2, "0")).join("")
  //     );
  //   }
  // }

  // useEffect(() => {
  //   if (colorNames.length > 0) {
  //     const colorData = colorNames.map((data) => ({
  //       name: data, // Convert color name to lowercase
  //       code: rgbToHex(colors[data.toLowerCase().replace(/\s+/g, "")]),
  //     }));
  //     const filteredColorData = colorData.filter((data) => data.code);
  //     setColorsData(filteredColorData);
  //     // console.log("colorData", colorData);
  //   }
  // }, [colorNames]);

  return (
    <main>
      {festivalData && (
        <div className="main-container my-10">
          {festivalData.data[0].products.length > 0 ? (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex flex-col gap-y-8">
                  <div className="border-b-2 pb-8">
                    <p className="font-semibold mb-6">PRICE RANGE</p>
                    <div className="px-4 lg:px-0">
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
                  </div>
                  {/* <div>
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
                                  : "bg-gray-100 border border-gray-500 hover:bg-primary-color hover:text-white"
                              } text-xs px-2 py-1 uppercase rounded-md transition-all duration-500 ease-in-out`}
                            >
                              {color}
                            </button>
                          )
                        )}
                    </div>
                  </div> */}

                  <div>
                    <p className="font-semibold mb-6">COLOR</p>
                    <div className="flex flex-wrap gap-1">
                      {colorNames.map((data, index) => (
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
                  <>
                    <FilteredFestivalComponent
                      data={filteredProducts}
                      selectedColors={selectedColors}
                      handleRemoveColor={handleRemoveColor}
                      handleClearAll={handleClearAll}
                      festivalTitle={festivalData.data[0].title}
                    />
                  </>
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

export default FestivalContent;
