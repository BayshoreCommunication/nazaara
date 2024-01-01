"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PercentageBadge from "./PercentageBadge";
import ReadyToShipBadge from "./ReadyToShipBadge";
import { CalculatePercentage } from "@/helpers/CalculateDiscountPercentage";
import { useInView } from "react-intersection-observer";
import { MotionDiv } from "./MotionDiv";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CalculateFixLessPercentageAmount } from "@/helpers/CalculateFixedPercentageLessAmount";

const ProductCart = ({ data, i }) => {
  const { ref, inView } = useInView();
  const variants = {
    hidden: { opacity: 0 },
    inView: { opacity: 1 },
  };

  console.log("datatata", data);

  const CalculatePercentageValue = () => {
    if (data) {
      if (data?.promotion && data?.promotion?.validPromotion) {
        if (data?.promotion?.discountType === "percentage") {
          return (
            <PercentageBadge text={`- ${data?.promotion?.discountOff}%`} />
          );
        } else {
          return (
            <PercentageBadge text={`৳ ${data?.promotion?.discountOff}/-`} />
          );
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
      if (data?.promotion && data?.promotion?.validPromotion) {
        return (
          <p className="text-sm font-semibold line-through text-gray-500 flex items-center gap-[2px]">
            <span>৳</span>
            {data?.regularPrice}/-
          </p>
        );
      } else {
        return (
          data?.regularPrice > data?.salePrice && (
            <p className="text-sm font-semibold line-through text-gray-500 flex items-center gap-[2px]">
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
      if (data?.promotion && data?.promotion?.validPromotion) {
        if (data?.promotion?.discountType === "percentage") {
          return (
            <p className="text-md font-bold text-gray-700 flex items-center gap-[2px]">
              <span>৳</span>{" "}
              {CalculateFixLessPercentageAmount(
                data.regularPrice,
                data?.promotion?.discountOff
              )}
              /-
            </p>
          );
        } else {
          return (
            <p className="text-md font-bold text-gray-700 flex items-center gap-[2px]">
              <span>৳</span> {data?.regularPrice - data?.promotion?.discountOff}
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
        <MotionDiv
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "inView" : "hidden"}
          transition={{
            ease: "linear",
            duration: i * 0.6,
          }}
          // hover:scale-[1.02]
          className="shadow-md rounded-lg flex flex-col transition-all duration-500 ease-in-out hover:shadow-xl"
        >
          <Link className="" href={`/products/${data?.slug}`}>
            <div className="relative">
              {data?.variant[0]?.imageUrl[0] && (
                <Image
                  src={data?.variant[0]?.imageUrl[0]}
                  alt={data.productName}
                  width={384}
                  height={512}
                  className="rounded-t-lg w-full h-auto"
                />
              )}

              {/* <div className="absolute top-2 left-2">
                {CalculatePercentageValue()}
              </div> */}
              <div className="absolute top-2 left-2">
                {data?.promotion &&
                  data?.promotion?.validPromotion &&
                  data?.promotion?.freeShipping && (
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
          <div className="min-h-20 text-left my-3 mx-2">
            <div className="flex flex-wrap items-center gap-2">
              {getSalePrice()} {/* calculate sale price  */}
              {getRegularPrice()}
              {CalculatePercentageValue()}
            </div>
            <p className="text-xs font-semibold my-2 text-gray-500">
              {data?.productName.length > 25
                ? `${data.productName.slice(0, 25)}...`
                : data?.productName}
            </p>

            {/* <div className="flex items-center justify-between">
              {data?.preOrder && (
                <div className="">
                  <ReadyToShipBadge text="Pre-Order Available" />
                </div>
              )}
              {data?.promotion &&
                data?.promotion?.validPromotion &&
                data?.promotion?.freeShipping && (
                  <p className="text-white text-xs bg-green-500 px-2 py-[1px] rounded-md">
                    <span className="flex items-center gap-1">
                      <MdOutlineLocalShipping size={17} />
                      Free Shipping
                    </span>
                  </p>
                )}
            </div> */}
          </div>
        </MotionDiv>
      )}
    </div>
  );
};

export default ProductCart;
