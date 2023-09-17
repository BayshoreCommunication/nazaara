"use client";
import Image from "next/image";
import React, { useState } from "react";
import PendingShipBadge from "../PendingShipBadge";
import { RxDotFilled } from "react-icons/rx";

const DrawerContent = ({ data, setIsOpen }) => {
  // button toogle
  const [toggle, setToggle] = useState("size");
  const [size, setSize] = useState("cm");

  return (
    <div className="relative overflow-y-auto">
      <button
        className="absolute top-3 right-5 text-2xl"
        onClick={() => setIsOpen(false)}
      >
        x
      </button>
      <div className="p-4">
        <h1 className="text-xl text-gray-600 font-medium pb-1">Size Chart</h1>
        <hr />
        {data && (
          <div className="flex gap-2 my-4">
            <Image
              src={data.variant[0].imageUrl[0]}
              alt="bridal_top"
              width={600}
              height={300}
              className="w-[40%]"
            />
            <div>
              <h3 className="font-bold text-xl">{data.productName}</h3>
              <p className="text-gray-500">{data.sku}</p>
              <p className="flex items-center -ml-1 text-sm font-medium">
                <RxDotFilled size={30} color="green" />
                In Stock
              </p>
              <div className="flex items-center gap-2">
                <p className="font-bold text-bold text-xl">
                  BDT {data.salePrice}/-
                </p>
                <p className="line-through text-sm font-medium">
                  BDT {data.regularPrice}/-
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
              className={`text-gray-500 font-medium ${
                toggle === "size" && "underline underline-offset-8"
              }`}
              onClick={() => setToggle("size")}
            >
              SIZE CHART
            </button>
            <button
              className={`text-gray-500 font-medium ${
                toggle === "measure" && "underline underline-offset-8"
              }`}
              onClick={() => setToggle("measure")}
            >
              HOW TO MEASURE
            </button>
          </div>
          <hr />
          {toggle === "size" && (
            <div className="my-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-xl">Shirt</h2>
                <div className="flex gap-2">
                  <div
                    onClick={() => setSize("cm")}
                    className="flex items-center gap-1"
                  >
                    <input
                      checked={size == "cm"}
                      id="cm"
                      type="radio"
                      name="radio-1"
                      className="radio radio-sm"
                    />
                    <label htmlFor="cm">Cm</label>
                  </div>

                  <div
                    onClick={() => setSize("in")}
                    className="flex items-center gap-1"
                  >
                    <input
                      checked={size == "in"}
                      id="in"
                      type="radio"
                      name="radio-1"
                      className="radio radio-sm"
                    />
                    <label htmlFor="in">In</label>
                  </div>
                </div>
              </div>
              <div className="overflow-x-scroll">
                {size === "cm" && (
                  <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Sizes</th>
                        <th>XS (Cm)</th>
                        <th>S (Cm)</th>
                        <th>M (Cm)</th>
                        <th>L (Cm)</th>
                        <th>XL (Cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row */}
                      <tr>
                        <th>Length</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Bust</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Waist</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Hip shirt</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Daman</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Arm Length</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Arm Hole</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>Bicep</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                {size === "in" && (
                  <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Sizes</th>
                        <th>XS (In)</th>
                        <th>S (In)</th>
                        <th>M (In)</th>
                        <th>L (In)</th>
                        <th>XL (In)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row */}
                      <tr>
                        <th>LENGTH</th>
                        <td>36</td>
                        <td>36</td>
                        <td>37</td>
                        <td>38</td>
                        <td>38</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>CHEST</th>
                        <td>17</td>
                        <td>18</td>
                        <td>20</td>
                        <td>22</td>
                        <td>23 </td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th> WAIST</th>
                        <td>16</td>
                        <td>17</td>
                        <td>18.5</td>
                        <td>19.5</td>
                        <td>20.5</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>ARMS</th>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>22.5</td>
                        <td>23</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>HIP</th>
                        <td>20</td>
                        <td>20.5</td>
                        <td>21.5</td>
                        <td>22.5</td>
                        <td>23.5</td>
                      </tr>
                      {/* row */}
                      <tr>
                        <th>SHOULDERS</th>
                        <td>14</td>
                        <td>14.5</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                      </tr>
                      {/* row */}
                      {/* <tr>
                        <th>Arm Hole</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr> */}
                      {/* row */}
                      {/* <tr>
                        <th>Bicep</th>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                      </tr> */}
                    </tbody>
                  </table>
                )}
              </div>
              {/* <div>
                <h2 className="text-lg font-semibold my-2">How to Measure</h2>
                <Image
                  src="/images/measurement-chart.png"
                  alt="bridal_top"
                  width={600}
                  height={300}
                  className="w-full"
                />
              </div> */}
            </div>
          )}
          {toggle === "measure" && (
            <div>
              <div>
                <h2 className="text-lg font-semibold my-2">How to Measure</h2>
                <Image
                  src="/images/measurement-chart.png"
                  alt="bridal_top"
                  width={600}
                  height={300}
                  className="w-full"
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
