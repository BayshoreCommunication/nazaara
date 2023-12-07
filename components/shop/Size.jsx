"use client";
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

const Size = ({ setCurrentSize, setCurrentPage }) => {
  const [activeSizes, setActiveSizes] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [sizeData, setSizeData] = useState([]);

  useEffect(() => {
    const apiUrl = `${process.env.API_URL}/api/v1/product/sizes`; //url for get sizes

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
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

  // console.log("sizesss", sizeData.sizes);

  const handleSizeSelection = (elem) => {
    const index = activeSizes.indexOf(elem);
    let newActiveSizes;

    if (index === -1) {
      // If the size is not already in the array, add it
      newActiveSizes = [...activeSizes, elem];
    } else {
      // If the size is already in the array, remove it
      newActiveSizes = [...activeSizes];
      newActiveSizes.splice(index, 1);
    }

    // Update the current size with a single size or a comma-separated string
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
      <div className="hidden group-hover:block absolute z-10 top-11 bg-white w-80 lg:w-96 rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">Size</h4>
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

// const Size = ({ setCurrentSize }) => {
//   return (
//     <div className="group relative z-10">
//       <ToogleButton title="Size" />
//       <div className="h-2 w-24"></div>
//       <div className="hidden group-hover:block absolute top-11 bg-white w-96 rounded-lg box-shadow">
//         <h4 className="text-center my-2 text-lg font-semibold">Size</h4>
//         <hr />
//         <div className="py-3 px-4 flex gap-2 flex-wrap">
//           {sizes.map((elem, i) => (
//             <SizeAttribute
//               key={i}
//               elem={elem}
//               setCurrentSize={setCurrentSize}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Size;
