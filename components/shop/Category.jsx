import { useEffect, useState } from "react";
import ToogleButton from "./ToogleButton";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";

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

const Category = ({ setCurrentCategory, setCurrentPage, currentCategory }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const apiUrl = `${process.env.API_URL}/api/v1/category`;
    const fetchData = async () => {
      try {
        const response = await fetchServerSideData(apiUrl);
        setCategoryData(response.data);
      } catch (error) {
        console.error("product categories fetching error", error);
      }
    };
    fetchData();
  }, []);

  // Update activeCategories when currentCategory changes
  useEffect(() => {
    if (currentCategory) {
      const newActiveCategories = currentCategory.split(",");
      setActiveCategories(newActiveCategories);
      setIsActive(newActiveCategories.length > 0);
    } else {
      // If currentCategory is empty, clear the selected categories
      setActiveCategories([]);
      setIsActive(false);
    }
  }, [currentCategory]);

  const handleCategorySelection = (elem1) => {
    const index = activeCategories.indexOf(elem1);
    let newActiveCategories;

    if (index === -1) {
      newActiveCategories = [...activeCategories, elem1];
    } else {
      newActiveCategories = [...activeCategories];
      newActiveCategories.splice(index, 1);
    }

    setCurrentCategory(
      newActiveCategories.length === 1
        ? newActiveCategories[0]
        : newActiveCategories.join(",")
    );
    setCurrentPage(1);
    setActiveCategories(newActiveCategories);
    setIsActive(newActiveCategories.length > 0);
  };

  return (
    <div className="group relative">
      <ToogleButton title={`Category`} isActive={isActive} />
      <div className="h-2 w-24"></div>
      <div className="hidden group-hover:block absolute z-50 top-11 bg-white w-full lg:w-96 rounded-lg box-shadow">
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
