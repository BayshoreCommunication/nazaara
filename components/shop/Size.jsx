import { useEffect, useState } from "react";
import ToogleButton from "./ToogleButton";
import axios from "axios";

const SizeAttribute = ({ elem, active, onClick }) => {
  return (
    <button
      className={`border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-200 hover:border-gray-200 ${
        active ? "text-white bg-primary-color hover:bg-primary-hover-color" : ""
      }`}
      onClick={() => onClick(elem)}
    >
      {elem}
    </button>
  );
};

const Size = ({ currentSize, setCurrentSize, setCurrentPage }) => {
  // console.log("current Size", currentSize);
  const [activeSizes, setActiveSizes] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [sizeData, setSizeData] = useState([]);

  useEffect(() => {
    const apiUrl = `${process.env.API_URL}/api/v1/product/sizes`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    fetchData().then((apiData) => {
      setSizeData(apiData);
    });
  }, []);

  // Update activeSizes when currentSize changes
  useEffect(() => {
    if (currentSize) {
      const newActiveSizes = currentSize.split(",");
      setActiveSizes(newActiveSizes);
      setIsActive(newActiveSizes.length > 0);
    } else {
      // If currentSize is empty, clear the selected sizes
      setActiveSizes("");
      setIsActive(false);
    }
  }, [currentSize]);

  const handleSizeSelection = (elem) => {
    const index = activeSizes.indexOf(elem);
    let newActiveSizes;

    if (index === -1) {
      newActiveSizes = [...activeSizes, elem];
    } else {
      newActiveSizes = [...activeSizes];
      newActiveSizes.splice(index, 1);
    }

    setCurrentSize(
      newActiveSizes.length === 1 ? newActiveSizes[0] : newActiveSizes.join(",")
    );
    setCurrentPage(1);
    setActiveSizes(newActiveSizes);
    setIsActive(newActiveSizes.length > 0);
  };

  return (
    <div className="group relative">
      <ToogleButton title={`Size`} isActive={isActive} />
      <div className="h-2 w-24"></div>
      <div className="hidden py-2 group-hover:block absolute z-50 top-11 bg-white w-full lg:w-96 rounded-lg box-shadow">
        <div
          className={`flex items-center my-2 px-4 ${
            currentSize ? "justify-between" : "justify-center"
          }`}
        >
          <h4 className="text-md font-semibold">Size</h4>
          {currentSize && (
            <button
              onClick={() => setCurrentSize("")}
              className="text-xs text-primary-color"
            >
              Clear All
            </button>
          )}
        </div>
        <hr />
        {sizeData?.sizes?.length > 0 && (
          <div className="py-3 px-4 flex gap-2 flex-wrap">
            {sizeData.sizes.map((elem, i) => (
              <SizeAttribute
                key={i}
                elem={elem}
                active={activeSizes.includes(elem)}
                onClick={handleSizeSelection}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Size;
