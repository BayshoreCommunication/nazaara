import React from "react";
import { FaCartPlus } from "react-icons/fa";

const ButtonOnHover = ({ text, color }) => {
  return (
    <button
      className={`w-full group btn2 px-6 ${
        color ? `${color}` : "text-primary-color"
      } py-[10px] relative border-2 border-primary-color rounded-md tracking-wider leading-none overflow-hidden hover:text-white flex gap-[6px] justify-center items-center font-semibold`}
    >
      <span className="absolute inset-0 bg-primary-color"></span>
      <span className="hidden group-hover:flex gap-[6px] absolute inset-0 justify-center items-center font-medium">
        <FaCartPlus size={20} /> {text}
      </span>
      <FaCartPlus size={20} /> {text}
    </button>
  );
};

export default ButtonOnHover;
