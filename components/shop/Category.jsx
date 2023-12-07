import { useEffect, useState } from "react";
import ToogleButton from "./ToogleButton";
import axios from "axios";

const CategoryAttribute = ({ elem1, elem2, active, onClick }) => {
  return (
    <>
      <button
        className={`border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-200 hover:border-gray-200 ${
          active
            ? "text-white bg-primary-color hover:bg-primary-hover-color"
            : ""
        }`}
        onClick={() => onClick(elem1, elem2)}
      >
        {elem2}
      </button>
    </>
  );
};

const Category = ({ setCurrentCategory, setCurrentPage }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // console.log("activeCategoruy", activeCategories, "isActive", isActive);

  useEffect(() => {
    const apiUrl = `${process.env.API_URL}/api/v1/category`;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          setCategoryData(response.data.data);
        }
      } catch (error) {
        console.error("product categories fetching error", error);
      }
    };
    fetchData();
  }, []);

  // console.log("category data", categoryData);

  // const handleSizeSelection = (elem1, elem2) => {
  //   console.log("elem2", elem2, "elelm1", elem1);
  //   setCurrentCategory(elem1);
  //   setActiveCategory(elem2);
  // };
  const handleCategorySelection = (elem1) => {
    // setIsActive(true);
    const index = activeCategories.indexOf(elem1);
    let newActiveCategories;

    if (index === -1) {
      // If the category ID is not already in the array, add it
      newActiveCategories = [...activeCategories, elem1];
    } else {
      // If the category ID is already in the array, remove it
      newActiveCategories = [...activeCategories];
      newActiveCategories.splice(index, 1);
    }

    // Update the current category IDs with a single ID or a comma-separated string
    setCurrentCategory(
      newActiveCategories.length === 1
        ? newActiveCategories[0]
        : newActiveCategories.join(",")
    );
    setCurrentPage(1);
    setActiveCategories(newActiveCategories);
    setIsActive(newActiveCategories.length > 0);
  };

  // console.log("active category", activeCategory);

  return (
    <div className="group relative z-10">
      <ToogleButton title={`Category`} isActive={isActive} />
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute top-11 bg-white w-96 rounded-lg box-shadow">
        <h4 className="text-center my-2 text-lg font-semibold">Category</h4>
        <hr />
        <div className="py-3 px-4 flex flex-col gap-y-3">
          <div className="flex gap-2 flex-wrap">
            {categoryData.map((el, i) => (
              <CategoryAttribute
                key={i}
                elem1={el._id}
                elem2={el.title}
                active={activeCategories.includes(el._id)}
                onClick={handleCategorySelection}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
