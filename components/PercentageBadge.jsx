import React from "react";

const PercentageBadge = ({ text }) => {
  return (
    <span className="bg-primary-color text-white px-1.5 py-[2px] font-semibold text-[10px] rounded-full">
      {text}
    </span>
  );
};

export default PercentageBadge;
