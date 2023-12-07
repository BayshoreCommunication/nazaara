"use client";
import { useEffect, useState } from "react";
import ToogleButton from "./ToogleButton";
import axios from "axios";

const ColorAttribute = ({ elem, active, onClick }) => {
  return (
    <>
      <button
        className={`border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-200 hover:border-gray-200 ${
          active
            ? "text-white bg-primary-color hover:bg-primary-hover-color"
            : ""
        }`}
        onClick={() => onClick(elem)}
      >
        {elem}
      </button>
    </>
  );
};

const Color = ({ setCurrentColor, setCurrentPage }) => {
  const [colorData, setColorData] = useState([]);
  const [activeColors, setActiveColors] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const apiUrl = `${process.env.API_URL}/api/v1/product/colors`;
    //get all color
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          setColorData(response.data.color);
        }
      } catch (error) {
        console.error("product color fetching error", error);
      }
    };
    fetchData();
  }, []);
  // console.log("clordata", colorData);

  const handleColorSelection = (elem) => {
    const index = activeColors.indexOf(elem);
    let newActiveColors;

    if (index === -1) {
      // If the size is not already in the array, add it
      newActiveColors = [...activeColors, elem];
    } else {
      // If the size is already in the array, remove it
      newActiveColors = [...activeColors];
      newActiveColors.splice(index, 1);
    }

    // Update the current size with a single size or a comma-separated string
    setCurrentColor(
      newActiveColors.length === 1
        ? newActiveColors[0]
        : newActiveColors.join(",")
    );
    setCurrentPage(1);
    setActiveColors(newActiveColors);
    setIsActive(newActiveColors.length > 0);
  };
  return (
    <div className="group lg:relative">
      <ToogleButton title={`Color`} isActive={isActive} />
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute z-10 top-11 bg-white w-80 lg:w-96 left-0 lg:left-auto rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">Color</h4>
        <hr />
        <div className="py-3 px-4 flex flex-col gap-y-3">
          <div className="flex gap-2 flex-wrap">
            {colorData.map((elem, i) => (
              <ColorAttribute
                key={i}
                elem={elem} // Render the 'color' property of the 'el' object
                active={activeColors.includes(elem)}
                onClick={handleColorSelection}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
