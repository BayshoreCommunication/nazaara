"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PercentageBadge from "./PercentageBadge";
import { CalculatePercentage } from "@/helpers/CalculateDiscountPercentage";
import { useInView } from "react-intersection-observer";
import { MotionDiv } from "./MotionDiv";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CalculateFixLessPercentageAmount } from "@/helpers/CalculateFixedPercentageLessAmount";
import { motion } from "framer-motion";

const ProductCart = ({ data, i }) => {
  const [promotionData, setPromotionData] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverImageUrl, setHoverImageUrl] = useState(null);
  // const [randomNumber, setRandomNumber] = useState(0);

  // const imageUrls = data.variant.flatMap((item) =>
  //   item.imageUrl.map((image) => image.image)
  // );

  console.log("hoverImageUrl", hoverImageUrl);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    const imageUrl =
      data.variant
        .filter((v) => v.imageUrl?.every((i) => i.isFeatured === false))
        .flatMap((v) => v.imageUrl)
        .sort(() => Math.random() - 0.5)[0]?.image ||
      data.variant[0].imageUrl[0].image;

    setHoverImageUrl(imageUrl);

    const promotionData =
      data?.subCategory?.promotion || data?.category?.promotion;
    if (promotionData) {
      if (promotionData.validPromotion) {
        setPromotionData(promotionData);
      }
    }
  }, [data]);

  const { ref, inView } = useInView();
  const variants = {
    hidden: { opacity: 0 },
    inView: { opacity: 1 },
  };

  const CalculatePercentageValue = () => {
    if (data) {
      if (promotionData) {
        if (promotionData?.discountType === "percentage") {
          return <PercentageBadge text={`- ${promotionData?.discountOff}%`} />;
        } else {
          return <PercentageBadge text={`৳ ${promotionData?.discountOff}/-`} />;
        }
      } else {
        return (
          CalculatePercentage(data.regularPrice, data.salePrice) > 0 && (
            <PercentageBadge
              text={`- ${CalculatePercentage(
                data.regularPrice,
                data.salePrice
              )}%`}
            />
          )
        );
      }
    }
    return null;
  };

  const getRegularPrice = () => {
    if (data) {
      if (promotionData) {
        return (
          <p className="text-xs font-semibold line-through text-gray-500 flex items-center gap-[2px]">
            <span>৳</span>
            {data?.regularPrice}/-
          </p>
        );
      } else {
        return (
          data?.regularPrice > data?.salePrice && (
            <p className="text-xs font-semibold line-through text-gray-500 flex items-center gap-[2px]">
              <span>৳</span>
              {data?.regularPrice}/-
            </p>
          )
        );
      }
    }
  };

  const getSalePrice = () => {
    if (data) {
      if (promotionData) {
        if (promotionData?.discountType === "percentage") {
          return (
            <p className="text-md font-bold text-gray-700 flex items-center gap-[2px]">
              <span>৳</span>{" "}
              {CalculateFixLessPercentageAmount(
                data.regularPrice,
                promotionData?.discountOff
              )}
              /-
            </p>
          );
        } else {
          return (
            <p className="text-md font-bold text-gray-700 flex items-center gap-[2px]">
              <span>৳</span> {data?.regularPrice - promotionData?.discountOff}
              /-
            </p>
          );
        }
      } else {
        return (
          <p className="text-md font-bold text-gray-700 flex items-center gap-[2px]">
            <span>৳</span> {data?.salePrice}/-
          </p>
        );
      }
    }
    return null;
  };

  return (
    <div className="h-full">
      {data && (
        <div className={`h-full`}>
          <MotionDiv
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "inView" : "hidden"}
            transition={{
              ease: "linear",
              duration: i * 0.4,
            }}
            className="overflow-hidden shadow-xl shadow-gray-300 rounded-md flex flex-col transition-all duration-500 ease-in-out hover:shadow-gray-400 "
          >
            <Link href={`/products/${data?.slug}`}>
              <div className="relative">
                <div
                  onMouseLeave={handleMouseLeave}
                  className={`overflow-hidden ${
                    isHovering ? "block" : "hidden"
                  }`}
                >
                  {hoverImageUrl && (
                    <Image
                      src={hoverImageUrl}
                      alt={data.productName}
                      width={384}
                      height={512}
                      className="rounded-t-lg w-full h-auto hover:scale-125 ease-in-out transition-all  duration-[1800ms]"
                      // animate={{ animationDuration: 2, scale: 1.2 }}
                      // transition={{ ease: "linear", duration: 1.5 }}
                    />
                  )}
                </div>
                <div
                  onMouseEnter={handleMouseEnter}
                  className={`overflow-hidden ${
                    isHovering ? "hidden" : "block"
                  }`}
                >
                  {data?.variant[0]?.imageUrl.length > 0 && (
                    <Image
                      src={
                        data.variant
                          .flatMap((v) => v.imageUrl)
                          .find((image) => image.isFeatured)?.image ||
                        data.variant[0].imageUrl[0].image
                      }
                      alt={data.productName}
                      width={384}
                      height={512}
                      // placeholder="blur"
                      className="rounded-t-lg w-full h-auto"
                    />
                  )}
                </div>

                <div className="absolute top-2 left-2">
                  {promotionData && promotionData?.freeShipping && (
                    <p className="text-white text-xs bg-primary-color px-2 py-[2px] rounded-full">
                      <span className="flex items-center gap-1">
                        <MdOutlineLocalShipping size={17} />
                        Free Shipping
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </Link>
            <div className="text-left my-3 mx-2">
              <p className="text-sm font-semibold my-2 text-gray-700 capitalize overflow-hidden whitespace-nowrap overflow-ellipsis">
                {data?.productName}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {getSalePrice()} {/* calculate sale price  */}
                <div className="flex gap-2">
                  {getRegularPrice()}
                  {CalculatePercentageValue()}
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      )}
    </div>
  );
};

export default ProductCart;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import PercentageBadge from "./PercentageBadge";
// import { CalculatePercentage } from "@/helpers/CalculateDiscountPercentage";
// import { useInView } from "react-intersection-observer";
// import { MotionDiv } from "./MotionDiv";
// import { MdOutlineLocalShipping } from "react-icons/md";
// import { CalculateFixLessPercentageAmount } from "@/helpers/CalculateFixedPercentageLessAmount";

// const ProductCart = ({ data, i }) => {
//   const [promotionData, setPromotionData] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);

//   const imageUrls = data.variant.flatMap((item) =>
//     item.imageUrl.map((image) => image.image)
//   );

//   useEffect(() => {
//     if (isHovering) {
//       const intervalId = setInterval(() => {
//         setCurrentImageIndex((prevIndex) => {
//           if (prevIndex === imageUrls.length - 1) {
//             return 0; // Reset to first image
//           }
//           return prevIndex + 1;
//         });
//       }, 1000); // Adjust interval as needed

//       return () => clearInterval(intervalId); // Clear interval on unmount
//     }
//   }, [isHovering, imageUrls]);

//   const handleMouseEnter = () => setIsHovering(true);
//   const handleMouseLeave = () => setIsHovering(false);

//   useEffect(() => {
//     const promotionData =
//       data?.subCategory?.promotion || data?.category?.promotion;
//     if (promotionData) {
//       if (promotionData.validPromotion) {
//         setPromotionData(promotionData);
//       }
//     }
//   }, [data]);

//   const { ref, inView } = useInView();
//   const variants = {
//     hidden: { opacity: 0 },
//     inView: { opacity: 1 },
//   };

//   const CalculatePercentageValue = () => {
//     if (data) {
//       if (promotionData) {
//         if (promotionData?.discountType === "percentage") {
//           return <PercentageBadge text={`- ${promotionData?.discountOff}%`} />;
//         } else {
//           return <PercentageBadge text={`৳ ${promotionData?.discountOff}/-`} />;
//         }
//       } else {
//         return (
//           CalculatePercentage(data.regularPrice, data.salePrice) > 0 && (
//             <PercentageBadge
//               text={`- ${CalculatePercentage(
//                 data.regularPrice,
//                 data.salePrice
//               )}%`}
//             />
//           )
//         );
//       }
//     }
//     return null;
//   };

//   const getRegularPrice = () => {
//     if (data) {
//       if (promotionData) {
//         return (
//           <p className="text-xs font-semibold line-through text-gray-500 flex items-center gap-[2px]">
//             <span>৳</span>
//             {data?.regularPrice}/-
//           </p>
//         );
//       } else {
//         return (
//           data?.regularPrice > data?.salePrice && (
//             <p className="text-xs font-semibold line-through text-gray-500 flex items-center gap-[2px]">
//               <span>৳</span>
//               {data?.regularPrice}/-
//             </p>
//           )
//         );
//       }
//     }
//   };

//   const getSalePrice = () => {
//     if (data) {
//       if (promotionData) {
//         if (promotionData?.discountType === "percentage") {
//           return (
//             <p className="text-md font-bold text-gray-700 flex items-center gap-[2px]">
//               <span>৳</span>{" "}
//               {CalculateFixLessPercentageAmount(
//                 data.regularPrice,
//                 promotionData?.discountOff
//               )}
//               /-
//             </p>
//           );
//         } else {
//           return (
//             <p className="text-md font-bold text-gray-700 flex items-center gap-[2px]">
//               <span>৳</span> {data?.regularPrice - promotionData?.discountOff}
//               /-
//             </p>
//           );
//         }
//       } else {
//         return (
//           <p className="text-md font-bold text-gray-700 flex items-center gap-[2px]">
//             <span>৳</span> {data?.salePrice}/-
//           </p>
//         );
//       }
//     }
//     return null;
//   };

//   return (
//     <div className="h-full">
//       {data && (
//         <div className={`h-full`}>
//           <MotionDiv
//             ref={ref}
//             variants={variants}
//             initial="hidden"
//             animate={inView ? "inView" : "hidden"}
//             transition={{
//               ease: "linear",
//               duration: i * 0.4,
//             }}
//             className="shadow-xl shadow-gray-300 rounded-md flex flex-col transition-all duration-500 ease-in-out hover:shadow-gray-400 h-full"
//           >
//             <Link href={`/products/${data?.slug}`}>
//               <div className="relative">
//                 <div
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   {isHovering ? (
//                     <>
//                       <Image
//                         src={imageUrls[currentImageIndex]}
//                         alt={data.productName}
//                         width={384}
//                         height={512}
//                         className="rounded-t-lg w-full h-auto"
//                       />
//                     </>
//                   ) : (
//                     <>
//                       {data?.variant[0]?.imageUrl.length > 0 && (
//                         <Image
//                           src={
//                             data.variant
//                               .flatMap((v) => v.imageUrl)
//                               .find((image) => image.isFeatured)?.image ||
//                             data.variant[0].imageUrl[0].image
//                           }
//                           alt={data.productName}
//                           width={384}
//                           height={512}
//                           // placeholder="blur"
//                           className="rounded-t-lg w-full h-auto"
//                         />
//                       )}
//                     </>
//                   )}
//                 </div>

//                 <div className="absolute top-2 left-2">
//                   {promotionData && promotionData?.freeShipping && (
//                     <p className="text-white text-xs bg-primary-color px-2 py-[2px] rounded-full">
//                       <span className="flex items-center gap-1">
//                         <MdOutlineLocalShipping size={17} />
//                         Free Shipping
//                       </span>
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </Link>
//             <div className="text-left my-3 mx-2">
//               <p className="text-sm font-semibold my-2 text-gray-700 capitalize overflow-hidden whitespace-nowrap overflow-ellipsis">
//                 {data?.productName}
//               </p>
//               <div className="flex flex-wrap items-center gap-2">
//                 {getSalePrice()} {/* calculate sale price  */}
//                 <div className="flex gap-2">
//                   {getRegularPrice()}
//                   {CalculatePercentageValue()}
//                 </div>
//               </div>
//             </div>
//           </MotionDiv>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCart;
