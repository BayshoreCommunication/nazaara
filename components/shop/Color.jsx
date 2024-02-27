import axios from "axios";
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

  useEffect(() => {
    const apiUrl = `${process.env.API_URL}/api/v1/product/colors`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
          },
        });
        if (response.status === 200) {
          setColorData(response.data);
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
            {colorData &&
              colorData?.colors?.map((elem, index) => (
                <div
                  className="group/child relative flex flex-col items-center"
                  key={index}
                >
                  <div className="mb-1 rounded-sm absolute opacity-0 z-50 bottom-full px-2 py-[2px] text-xs w-max text-center font-medium text-gray-500 bg-gray-200 transition-opacity duration-300 group-hover/child:opacity-100">
                    {elem.color}
                  </div>
                  <ColorAttribute
                    key={index}
                    color={elem.color}
                    code={elem.colorCode}
                    active={activeColors.includes(elem.color)}
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
