import React from "react";

const PercentageBadge = ({ text }) => {
  return (
    <span className="bg-primary-color text-white px-2 py-[2px] font-medium text-xs rounded-full">
      {text}
    </span>
  );
};

export default PercentageBadge;
