import axios from "axios";
import colors from "color-name";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import ToogleButton from "./ToogleButton";

const ColorAttribute = ({ color, code, active, onClick }) => {
  return (
    <>
      <button
        onClick={() => onClick(color)}
        style={{ backgroundColor: code }}
        className={`flex justify-center items-center w-7 h-7 border rounded-sm shadow-sm`}
      >
        {active &&
          (code === "#000000" ? (
            <TiTick color="white" size={20} />
          ) : (
            <TiTick color="black" size={20} />
          ))}
      </button>
    </>
  );
};

const Color = ({ setCurrentColor, setCurrentPage, currentColor }) => {
  const [colorData, setColorData] = useState([]);
  const [activeColors, setActiveColors] = useState([]);
  const [isActive, setIsActive] = useState(false);
  // const [colorNames, setColorNames] = useState([]);
  const [colorsData, setColorsData] = useState([]);

  // console.log("color name", colorData);
  console.log("colors data", colorsData);

  useEffect(() => {
    const apiUrl = `${process.env.API_URL}/api/v1/product/colors`;

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

  // Update activeColors when currentColor changes
  useEffect(() => {
    if (currentColor && typeof currentColor === "string") {
      const newActiveColors = currentColor.split(",");
      setActiveColors(newActiveColors);
      setIsActive(newActiveColors.length > 0);
    } else {
      // If currentColor is not a string or is null/undefined, clear the selected colors
      setActiveColors([]);
      setIsActive(false);
    }
  }, [currentColor]);

  const handleColorSelection = (elem) => {
    const index = activeColors.indexOf(elem);
    let newActiveColors;

    if (index === -1) {
      newActiveColors = [...activeColors, elem];
    } else {
      newActiveColors = [...activeColors];
      newActiveColors.splice(index, 1);
    }

    setCurrentColor(
      newActiveColors.length === 1
        ? newActiveColors[0]
        : newActiveColors.join(",")
    );
    setCurrentPage(1);
    setActiveColors(newActiveColors);
    setIsActive(newActiveColors.length > 0);
  };

  function rgbToHex(rgb) {
    // console.log("rgb", rgb);
    if (rgb) {
      return (
        "#" +
        rgb.map((component) => component.toString(16).padStart(2, "0")).join("")
      );
    }
  }

  useEffect(() => {
    if (colorData.length > 0) {
      const colorsData = colorData.map((data) => ({
        name: data, // Convert color name to lowercase
        code: rgbToHex(colors[data.toLowerCase().replace(/\s+/g, "")]),
      }));
      const filteredColorData = colorsData.filter((data) => data.code);
      setColorsData(filteredColorData);
      // console.log("colorData", colorData);
    }
  }, [colorData]);

  return (
    <div className="group/parent relative">
      <ToogleButton title={`Color`} isActive={isActive} />
      <div className="h-2 w-24"></div>
      <div className="hidden py-2 group-hover/parent:block absolute z-50 top-11 bg-white w-full lg:w-96 left-0 lg:left-auto rounded-lg box-shadow">
        <div
          className={`flex items-center my-2 px-4 ${
            currentColor ? "justify-between" : "justify-center"
          }`}
        >
          <h4 className="text-md font-semibold">Color</h4>
          {currentColor && (
            <button
              onClick={() => setCurrentColor("")}
              className="text-xs text-primary-color"
            >
              Clear All
            </button>
          )}
        </div>
        <hr />
        <div className="py-3 px-6 flex flex-col gap-y-3">
          <div className="flex flex-wrap gap-x-1 gap-y-4 justify-center">
            {colorsData.map((elem, index) => (
              <div
                className="group/child relative flex flex-col items-center"
                key={index}
              >
                <div className="mb-1 rounded-sm absolute opacity-0 z-50 bottom-full px-2 py-[2px] text-xs w-max text-center font-medium text-gray-500 bg-gray-200 transition-opacity duration-300 group-hover/child:opacity-100">
                  {elem.name}
                </div>
                <ColorAttribute
                  key={index}
                  color={elem.name}
                  code={elem.code}
                  active={activeColors.includes(elem.name)}
                  onClick={handleColorSelection}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
