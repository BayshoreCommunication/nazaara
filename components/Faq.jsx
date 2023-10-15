//multiple toggle button where if I click one button all are closed
"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Faq = ({ data }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (itemId) => {
    setOpenItemId((prevOpenItemId) =>
      prevOpenItemId === itemId ? null : itemId
    );
  };

  return (
    <div className="lg:w-4/5 lg:mx-auto flex flex-col gap-y-8">
      {data?.map((data, index) => (
        <div
          key={index}
          className="bg-primary-color text-white px-2 py-4 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <button onClick={() => toggleItem(data._id)}>
              {openItemId === data._id ? (
                <FaMinus size={17} className="w-[17px]" />
              ) : (
                <FaPlus size={17} className="w-[17px]" />
              )}
            </button>
            <span>{data?.title}</span>
          </div>

          {openItemId === data._id && (
            <div className="ml-6 mt-4">{data?.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
