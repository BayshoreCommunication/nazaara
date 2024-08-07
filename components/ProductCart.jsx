"use client";
import { CalculatePercentage } from "@/helpers/CalculateDiscountPercentage";
import { CalculateFixLessPercentageAmount } from "@/helpers/CalculateFixedPercentageLessAmount";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import notFoundImage from "../public/images/image-not-found.jpg";
import { MotionDiv } from "./MotionDiv";
import PercentageBadge from "./PercentageBadge";

const ProductCart = ({ data, i }) => {
  const [promotionData, setPromotionData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // console.log("imageUrl", imageUrl);

  useEffect(() => {
    const imgUrl =
      data.variant.flatMap((v) => v.imageUrl).find((image) => image.isFeatured)
        ?.image || data.variant[0].imageUrl[0].image;
    if (imgUrl) {
      setImageUrl(imgUrl);
    }
    const promotionData =
      data?.subCategory?.promotion || data?.category?.promotion;
    if (promotionData) {
      if (promotionData.validPromotion) {
        setPromotionData(promotionData);
      }
    }
  }, [data]);

  // console.log(imageUrl);

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
            className="shadow-xl shadow-gray-300 rounded-md flex flex-col transition-all duration-500 ease-in-out hover:shadow-gray-400 h-full"
          >
            <Link
              href={`/products/${data?.sku.replace(/\//g, "-").toLowerCase()}`}
            >
              <div className="relative">
                <div className="overflow-hidden">
                  {imageUrl ? (
                    // {data?.variant[0]?.imageUrl.length > 0 && (
                    <Image
                      src={imageUrl}
                      alt={data.productName}
                      width={384}
                      height={512}
                      // priority
                      blurDataURL={"/images/placeholder_image.jpg"}
                      placeholder="blur"
                      className="rounded-t-lg w-full h-auto transition-all hover:scale-110 duration-1000"
                    />
                  ) : (
                    <Image
                      src={notFoundImage}
                      alt={data.productName}
                      width={384}
                      height={512}
                      className="rounded-t-lg w-full h-auto transition-all hover:scale-110 duration-1000"
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
