import { useCallback, useEffect, useState } from "react";
import ToogleButton from "./ToogleButton";
import axios from "axios";

const ColorAttribute = ({ elem, active, onClick }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <button
        className={`border border-gray-300 p-2 rounded-md hover:bg-gray-200 hover:border-gray-200 ${
          active
            ? "text-white bg-primary-color hover:bg-primary-hover-color"
            : ""
        }`}
        onClick={() => onClick(elem)}
      >
        {capitalizeFirstLetter(elem)}
      </button>
    </>
  );
};

const Color = ({ setCurrentColor }) => {
  const [colorData, setColorData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const apiUrl = `${process.env.API_URL}/api/v1/product/colors`;
  //get all color
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        setColorData(response.data.allColors);
      }
    } catch (error) {
      console.error("product color fetching error", error);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [apiUrl, fetchData]);

  const [activeColor, setActiveColor] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSizeSelection = (elem) => {
    setIsActive(true);
    setCurrentColor(elem);
    setActiveColor(elem);
  };
  return (
    <div className="group lg:relative">
      <ToogleButton title={`Color`} isActive={isActive} />
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute z-10 top-11 bg-white w-80 lg:w-96 left-0 lg:left-auto rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">Color</h4>
        <hr />
        <div className="py-3 px-4 flex flex-col gap-y-3">
          <div>
            <form className="">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="w-full p-2 pl-10 text-sm text-gray-900 rounded-full bg-gray-100 outline-none h-8"
                  placeholder="Search Category"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex gap-2 flex-wrap">
            {colorData
              ?.filter((el) =>
                el.color.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((el, i) => (
                <ColorAttribute
                  key={i}
                  elem={el.color} // Render the 'color' property of the 'el' object
                  active={activeColor === el.color}
                  onClick={handleSizeSelection}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;

// const Color = ({ setCurrentColor }) => {

//   return (
//     <div className="group relative z-10">
//       <ToogleButton title="Color" />
//       <div className="h-2 w-24"></div>
//       <div className="hidden group-hover:block absolute top-11 bg-white w-96 rounded-lg box-shadow">
//         <h4 className="text-center my-2 text-lg font-semibold">Color</h4>
//         <hr />
//         <div className="py-3 px-4 flex flex-col gap-y-3">
//           <div>
//             <form className="">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                   <svg
//                     aria-hidden="true"
//                     className="w-5 h-5 text-gray-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                     ></path>
//                   </svg>
//                 </div>
//                 <input
//                   type="search"
//                   id="default-search"
//                   className="w-full p-2 pl-10 text-sm text-gray-900 rounded-full bg-gray-100 outline-none h-8"
//                   placeholder="Search Category"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   required
//                 />
//               </div>
//             </form>
//           </div>
//           <div className="flex gap-2 flex-wrap">
//             {colorData
//               ?.filter((el) =>
//                 el.color.toLowerCase().includes(searchQuery.toLowerCase())
//               )
//               .map((el, i) => (
//                 <button
//                   className="border border-gray-300 p-2 rounded-md hover:bg-gray-200 hover:border-gray-200"
//                   key={i}
//                   onClick={() => setCurrentColor(el.color)}
//                 >
//                   {el.color}
//                 </button>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Color;
