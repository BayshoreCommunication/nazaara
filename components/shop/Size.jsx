"use client";
import { useState } from "react";
import ToogleButton from "./ToogleButton";

const sizes = [
  "34",
  "36",
  "38",
  "40",
  "42",
  "44",
  "46",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
];

const SizeAttribute = ({ elem, active, onClick }) => {
  return (
    <button
      className={`border border-gray-300 p-2 rounded-md hover:bg-gray-200 hover:border-gray-200 ${
        active ? "text-white bg-primary-color hover:bg-primary-hover-color" : ""
      }`}
      onClick={() => onClick(elem)}
    >
      {elem}
    </button>
  );
};

const Size = ({ setCurrentSize }) => {
  const [activeSize, setActiveSize] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSizeSelection = (elem) => {
    setIsActive(true);
    setCurrentSize(elem);
    setActiveSize(elem);
  };

  return (
    <div className="group relative">
      <ToogleButton title={`Size`} isActive={isActive} />
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute z-10 top-11 bg-white w-80 lg:w-96 rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">Size</h4>
        <hr />
        <div className="py-3 px-4 flex gap-2 flex-wrap">
          {sizes.map((elem, i) => (
            <SizeAttribute
              key={i}
              elem={elem}
              active={activeSize === elem}
              onClick={handleSizeSelection}
            />
          ))}
        </div>
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
