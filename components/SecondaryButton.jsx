import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <button className="border-4 border-secondary-color hover:border-transparent px-4 lg:px-6 py-1.5 lg:py-2 font-medium rounded-lg hover:bg-secondary-color transition-colors duration-500">
      {text}
    </button>
  );
};

export default SecondaryButton;
