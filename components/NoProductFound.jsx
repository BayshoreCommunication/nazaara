import Lottie from "react-lottie";
import cryAnimationData from "../public/product-not-found/cryAnimation.json";
import animationData from "../public/product-not-found/productNotFoundAnimation.json";

const NoProductFound = ({ text }) => {
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
          <span className="mb-3 translate-y-10">
            {text ? text : "No Product Found!"}
          </span>
          <div className="translate-y-10">
            <Lottie options={cryDefaultOptions} height={120} width={40} />
          </div>
        </div>
        <div className="-translate-y-10">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      </div>
    </div>
  );
};

export default NoProductFound;
