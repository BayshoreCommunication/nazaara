import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Pagination from "../Pagination";
import ProductCart from "../ProductCart";

const FilteredFestivalComponent = ({
  data,
  selectedColors,
  handleRemoveColor,
  handleClearAll,
  festivalTitle,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / productsPerPage);
  return (
    <>
      {data.length > 0 && (
        <div>
          <div className="flex flex-col gap-3 mb-6">
            {data.length === 1 ? (
              <p>
                {data.length} item found for{" "}
                <span className="text-primary-color font-semibold">{`'${festivalTitle}'`}</span>
              </p>
            ) : (
              <p>
                {data.length} items found for{" "}
                <span className="text-primary-color font-semibold">{`'${festivalTitle}'`}</span>
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {selectedColors.length > 0 && (
                <>
                  {selectedColors.map((color, i) => (
                    <button
                      key={i}
                      className="border text-xs px-3 py-1 uppercase bg-red-100 font-medium rounded-full text-primary-color flex items-center gap-1"
                    >
                      {color}
                      <span
                        onClick={() => handleRemoveColor(color)}
                        className="text-black"
                      >
                        <RxCross2 />
                      </span>
                    </button>
                  ))}
                  <button
                    onClick={handleClearAll}
                    className="text-xs text-gray-700 font-medium"
                  >
                    Clear All
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 xl:gap-6">
            {currentProducts.map((data, i) => (
              <div
                key={data._id}
                className="transition-all duration-500 ease-in-out"
              >
                <ProductCart data={data} i={i} />
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
};

export default FilteredFestivalComponent;
