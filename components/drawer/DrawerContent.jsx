"use client";
import { calculateSalePrice } from "@/helpers/CalculateSalePrice";
import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const DrawerContent = ({ data, setIsOpen }) => {
  // button toogle
  const [toggle, setToggle] = useState("size");

  // console.log("data from drower", data);

  return (
    <div className="relative overflow-y-auto">
      <button
        className="absolute top-3 right-5"
        onClick={() => setIsOpen(false)}
      >
        <FaTimes size={18} />
      </button>
      <div className="p-4">
        <h1 className="text-xl text-gray-700 font-medium pb-1">Size Chart</h1>
        <hr />
        {data && (
          <div className="flex gap-4 my-4">
            {data.variant[0].imageUrl[0] && (
              <Image
                // src={data.variant[0].imageUrl[0]}
                src={
                  data.variant
                    .flatMap((v) => v.imageUrl)
                    .find((image) => image.isFeatured)?.image ||
                  data.variant[0].imageUrl[0].image
                }
                alt="bridal_top"
                width={600}
                height={300}
                className="w-[40%] rounded-md"
              />
            )}

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl">{data.productName}</h3>
              <p className="text-gray-500 font-sm">{data.sku}</p>
              {data?.stock > 0 ? (
                <p className="flex items-center -ml-1 text-sm font-medium">
                  <GoDotFill size={18} color="green" />
                  In Stock
                </p>
              ) : (
                <p className="flex items-center -ml-1 text-sm font-medium">
                  <GoDotFill size={18} color="#820000" />
                  Out of Stock
                </p>
              )}
              {data.preOrder && (
                <p className="flex items-center -ml-1 text-sm font-medium">
                  <GoDotFill size={18} color="green" />
                  Pre Order Available
                </p>
              )}
              <div className="flex items-center gap-2">
                <p className="text-gray-700 text-sm font-semibold">
                  ৳{" "}
                  {data.category.promotion || data.subCategory.promotion ? (
                    <>
                      {data.category?.promotion
                        ? calculateSalePrice(
                            data.category?.promotion?.validPromotion,
                            data.category?.promotion?.discountType,
                            data.regularPrice,
                            data.category?.promotion?.discountOff,
                            data.salePrice
                          ) * data?.quantity
                        : calculateSalePrice(
                            data.subCategory?.promotion?.validPromotion,
                            data.subCategory?.promotion?.discountType,
                            data.regularPrice,
                            data.subCategory?.promotion?.discountOff,
                            data.salePrice
                          ) * data?.quantity}
                    </>
                  ) : (
                    <>{data.salePrice}</>
                  )}
                  /-
                </p>
                <p className="line-through text-sm font-medium text-gray-600">
                  ৳ {data.regularPrice}/-
                </p>
                {/* <PendingShipBadge text="10%" /> */}
              </div>
            </div>
          </div>
        )}

        <hr />
        <div>
          <div className="flex justify-around py-1">
            <button
              className={`text-gray-700 font-medium ${
                toggle === "size" && "underline underline-offset-8"
              }`}
              onClick={() => setToggle("size")}
            >
              SIZE CHART
            </button>
            <button
              className={`text-gray-700 font-medium ${
                toggle === "measure" && "underline underline-offset-8"
              }`}
              onClick={() => setToggle("measure")}
            >
              HOW TO MEASURE
            </button>
          </div>
          <hr />
          {toggle === "size" && (
            <div className="my-4 text-left">
              <table className="table w-full text-gray-700">
                <thead className="border">
                  <tr>
                    <th className="pl-2 py-2">SIZES</th>
                    <th>XS (In)</th>
                    <th>S (In)</th>
                    <th>M (In)</th>
                    <th>L (In)</th>
                    <th>XL (In)</th>
                  </tr>
                </thead>
                <tbody className="border">
                  <tr className="border-b">
                    <th className="pl-2 py-1">LENGTH</th>
                    <td>36</td>
                    <td>36</td>
                    <td>37</td>
                    <td>38</td>
                    <td>38</td>
                  </tr>
                  <tr className="border-b">
                    <th className="pl-2 py-1">CHEST</th>
                    <td>17</td>
                    <td>18</td>
                    <td>20</td>
                    <td>22</td>
                    <td>23 </td>
                  </tr>
                  <tr className="border-b">
                    <th className="pl-2 py-1"> WAIST</th>
                    <td>16</td>
                    <td>17</td>
                    <td>18.5</td>
                    <td>19.5</td>
                    <td>20.5</td>
                  </tr>
                  <tr className="border-b">
                    <th className="pl-2 py-1">ARMS</th>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>22.5</td>
                    <td>23</td>
                  </tr>
                  <tr className="border-b">
                    <th className="pl-2 py-1">HIP</th>
                    <td>20</td>
                    <td>20.5</td>
                    <td>21.5</td>
                    <td>22.5</td>
                    <td>23.5</td>
                  </tr>
                  <tr className="border-b">
                    <th className="pl-2 py-1">SHOULDERS</th>
                    <td>14</td>
                    <td>14.5</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                  </tr>
                  <tr className="border-b">
                    <th className="pl-2 py-1">Arm Hole</th>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <th className="pl-2 py-1">Bicep</th>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {toggle === "measure" && (
            <div>
              <div>
                <Image
                  src="/images/measurement-chart.png"
                  alt="bridal_top"
                  width={600}
                  height={300}
                  className="w-full h-auto mt-2"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;
