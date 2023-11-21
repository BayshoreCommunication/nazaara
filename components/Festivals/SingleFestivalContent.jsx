"use client";
import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ReadyToShipBadge from "../ReadyToShipBadge";
import PercentageBadge from "../PercentageBadge";
import Image from "next/image";
import Link from "next/link";

//steps: set product image in product api product -> design update -> set fuge for search/filter for color and price.

const FestivalComponent = ({ festivalData }) => {
  return (
    <main className="main-container my-10 lg:my-20">
      <div className="flex gap-6">
        <div className="flex-1 bg-yellow-200">
          <div>
            <p>PRICE RANGE</p>
            <Slider
              range
              id="price-slider"
              min={0}
              max={100000}
              step={50}
              value={""}
              onChange={""}
            />
          </div>
          <div>
            <p>COLOR</p>
            <button>Red</button>
          </div>
        </div>
        {festivalData.data.length > 0 && (
          <div className="flex-[3] bg-green-200 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
            {festivalData.data[0].products.map((data, i) => (
              <div key={i}>
                <Link href={`/products/${data?.slug}`}>
                  <div className="relative">
                    {data?.variant[0]?.imageUrl[0] && (
                      <Image
                        src={data?.variant[0]?.imageUrl[0]}
                        alt={data.productName}
                        width={326}
                        height={461}
                        className="w-full h-full rounded-[4px] border"
                      />
                    )}

                    <div className="absolute top-2 left-2">
                      <PercentageBadge
                        text={`-${Math.ceil(
                          ((data?.regularPrice - data?.salePrice) /
                            data?.regularPrice) *
                            100
                        )}%`}
                      />
                    </div>
                  </div>
                </Link>
                <div className="w-full text-left bg-white my-4 ">
                  <div className="flex items-center gap-2">
                    <p className="text-md font-bold text-gray-700">
                      BDT {data?.salePrice}/-
                    </p>
                    <p className="text-sm font-semibold line-through text-gray-500">
                      BDT {data?.regularPrice}/-
                    </p>
                  </div>
                  <p className="text-xs font-semibold my-2 text-gray-500">
                    {data?.productName}
                  </p>
                  <div className="flex gap-2 items-center">
                    <ReadyToShipBadge text="Ready to Ship" />
                    {/* <PendingShipBadge text="Up to 2 weeks" /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default FestivalComponent;
