"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PercentageBadge from "./PercentageBadge";
import ReadyToShipBadge from "./ReadyToShipBadge";
import { CalculatePercentage } from "@/helpers/CalculateDiscountPercentage";
import { useInView } from "react-intersection-observer";
import { MotionDiv } from "./MotionDiv";
import { FcShipped } from "react-icons/fc";
import { MdOutlineLocalShipping } from "react-icons/md";
// import useSWR from "swr";

const ProductCart = ({ data, i }) => {
  // const [promotion, setPromotion] = useState({});
  const { ref, inView } = useInView();
  const variants = {
    hidden: { opacity: 0 },
    inView: { opacity: 1 },
  };
  // const url = `${
  //   process.env.API_URL
  // }/api/v1/promotion/${data?.promotion?.toString()}`;
  // console.log("product data", typeof data?.promotion?.toString());

  // const fetcher = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data;
  // };

  // const { data: couponData, error, isLoading } = useSWR("coupon", fetcher);

  console.log("datatata", data);

  return (
    <>
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
          className="shadow-md rounded-lg flex flex-col hover:scale-[1.02] transition-all duration-500 ease-in-out hover:shadow-xl"
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

              <div className="absolute top-2 left-2">
                {CalculatePercentage(data.regularPrice, data.salePrice) > 0 && (
                  <PercentageBadge
                    text={`-${CalculatePercentage(
                      data.regularPrice,
                      data.salePrice
                    )}%`}
                  />
                )}
              </div>
              {/* {data?.promotion && data?.promotion?.validPromotion && (
                <div className="absolute top-2 right-2">
                  <span className="text-black">
                    {data?.promotion?.freeShipping && "free shipping available"}
                  </span>
                </div>
              )} */}
            </div>
          </Link>
          <div className="h-20 text-left my-3 mx-2">
            <div className="flex items-center gap-2">
              <p className="text-md font-bold text-gray-700 flex items-center gap-[2px]">
                <span>৳</span> {data?.salePrice}/-
              </p>
              {data?.regularPrice > data?.salePrice && (
                <p className="text-sm font-semibold line-through text-gray-500 flex items-center gap-[2px]">
                  <span>৳</span>
                  {data?.regularPrice}/-
                </p>
              )}

              {data?.promotion && data?.promotion?.validPromotion && (
                <p className="text-white text-xs bg-green-500 px-2 py-[1px] rounded-md">
                  {data?.promotion?.freeShipping && (
                    <span className="flex items-center gap-1">
                      <MdOutlineLocalShipping size={18} />
                      Free Shipping
                    </span>
                  )}
                </p>
              )}
            </div>
            <p className="text-xs font-semibold my-2 text-gray-500">
              {data?.productName.length > 25
                ? `${data.productName.slice(0, 25)}...`
                : data?.productName}
            </p>

            {data?.preOrder && (
              <div className="">
                <ReadyToShipBadge text="Pre-Order Available" />
              </div>
            )}
          </div>
        </MotionDiv>
      )}
    </>
  );
};

export default ProductCart;
