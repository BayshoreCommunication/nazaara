import { useEffect, useState } from "react";
import ShopButton from "./ShopButton";
import { BsFilter } from "react-icons/bs";

const Filter = ({
  setCurrentSize,
  setPriceRange,
  setCurrentCategory,
  setCurrentColor,
  currentColor,
  currentSize,
  priceRange,
  currentCategory,
}) => {
  const handleClearFiltering = () => {
    setCurrentSize("");
    setCurrentCategory("");
    setCurrentColor("");
    setPriceRange([0, 150000]);
    setIsActive(false);
  };

  const [isActive, setIsActive] = useState(false);

  console.log("pride rtanddfs", priceRange);

  useEffect(() => {
    if (
      currentCategory ||
      currentSize ||
      currentColor ||
      priceRange?.[0] > 0 ||
      priceRange?.[1] < 150000
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentCategory, currentColor, currentSize, priceRange]);
  return (
    <div className="group relative">
      <button
        className={`flex gap-1 items-center bg-gray-200 py-2 px-4 rounded-full font-medium min-w-full justify-center ${
          isActive && "bg-primary-color text-white"
        }`}
      >
        <BsFilter size={20} /> Filter
      </button>
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute z-10 top-11 bg-white w-80 lg:w-96 rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">Filter</h4>
        <hr />
        <div className="py-3 px-4 flex flex-col gap-y-3">
          {currentCategory ||
          currentSize ||
          currentColor ||
          priceRange?.[0] > 0 ||
          priceRange?.[1] < 150000 ? (
            <div className="flex gap-2 flex-wrap justify-center">
              <div onClick={handleClearFiltering}>
                <ShopButton text="Clear All Filtering" />
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 text-sm">
              No filters applied!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
