import Image from "next/image";
import Link from "next/link";
import React from "react";
import PercentageBadge from "./PercentageBadge";
import ReadyToShipBadge from "./ReadyToShipBadge";
import { CalculatePercentage } from "@/helpers/CalculateDiscountPercentage";

const ProductCart = ({ data }) => {
  // console.log("data from caard", data);
  return (
    <>
      {data && (
        <div className="shadow-md rounded-lg flex flex-col hover:scale-[1.02] transition-all duration-500 ease-in-out hover:shadow-xl">
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
        </div>
      )}
    </>
  );
};

export default ProductCart;
