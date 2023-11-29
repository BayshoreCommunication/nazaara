import React from "react";
import Lottie from "react-lottie";
import animationData from "../public/product-not-found/productNotFoundAnimation.json";
import cryAnimationData from "../public/product-not-found/cryAnimation.json";

const NoProductFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const cryDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cryAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full flex justify-center items-center h-[50vh] text-xl font-semibold text-gray-600">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <span className="mb-3">No Product Found!</span>
          <Lottie options={cryDefaultOptions} height={120} width={40} />
        </div>
        <div className="-translate-y-10">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      </div>
    </div>
  );
};

export default NoProductFound;
