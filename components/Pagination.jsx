import React, { useEffect, useState } from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const [prevTotalPages, setPrevTotalPages] = useState(totalPages); //store previous totalPages number

  //set previous totalPages number
  useEffect(() => {
    setPrevTotalPages(totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (window != undefined) {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  //if previous totalPages number is changing then set currentPage into 1
  useEffect(() => {
    if (totalPages && totalPages !== prevTotalPages) {
      setCurrentPage(1);
      if (window != undefined) {
        window.scrollTo(0, 0);
      }
    }
  }, [setCurrentPage, totalPages, prevTotalPages, currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const ellipsis = (
      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300">
        ...
      </button>
    );

    const maxButtonsToShow = 5; // Number of buttons to show at a time
    const halfMaxButtons = Math.floor(maxButtonsToShow / 2);

    let startPage = currentPage - halfMaxButtons;
    let endPage = currentPage + halfMaxButtons;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, maxButtonsToShow);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - maxButtonsToShow + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <button
          key={1}
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300"
          onClick={() => handlePageClick(1)}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(ellipsis);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 ${
            currentPage === i ? "bg-primary-color text-white" : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(ellipsis);
      }
      pageNumbers.push(
        <button
          key={totalPages}
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300"
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </button>
      );
    }
    return pageNumbers;
  };
  return (
    <div>
      {totalPages > 1 && (
        <div className="">
          <ul className="flex -space-x-px text-sm justify-center mt-4">
            <li>
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-200 border border-gray-100 rounded-l-lg hover:text-gray-100 ${
                  currentPage === 1
                    ? "bg-primary-hover-color"
                    : "bg-primary-color"
                }`}
              >
                Previous
              </button>
            </li>

            <li className="flex !text-black">{renderPageNumbers()}</li>
            <li>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-200 border border-gray-100 rounded-e-lg hover:text-gray-100 ${
                  currentPage === totalPages
                    ? "bg-primary-hover-color"
                    : "bg-primary-color"
                }`}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pagination;
