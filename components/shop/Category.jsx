import { useCallback, useEffect, useState } from "react";
import ToogleButton from "./ToogleButton";
import axios from "axios";

const CategoryAttribute = ({ elem, active, onClick }) => {
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
        {elem}
      </button>
    </>
  );
};

const Category = ({ setCurrentCategory }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const apiUrl = `${process.env.API_URL}/api/v1/product/categories`;
  //get all categories
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        setCategoryData(response.data.newData);
      }
    } catch (error) {
      console.error(error);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  const [activeCategory, setActiveCategory] = useState("");

  const handleSizeSelection = (elem) => {
    setCurrentCategory(elem);
    setActiveCategory(elem);
  };

  return (
    <div className="group relative z-10">
      <ToogleButton
        title={`Category ${activeCategory ? `(${activeCategory})` : ""}`}
      />
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute top-11 bg-white w-96 rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">Category</h4>
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
            {categoryData
              .filter((el) =>
                el.category.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((el, i) => (
                <CategoryAttribute
                  key={i}
                  elem={el.category} // Render the 'color' property of the 'el' object
                  active={activeCategory === el.category}
                  onClick={handleSizeSelection}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
