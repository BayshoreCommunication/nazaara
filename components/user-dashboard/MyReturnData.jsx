"use client";
import { Util } from "@/util";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MyReturnData = () => {
  //call util function to get authenticate user id
  const data = Util();
  const id = data?._id;
  console.log("dataaaa", id);

  const [returnData, setReturnData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data) {
          const response = await fetch(
            // `${process.env.API_URL}/api/v1/return-exchange/user/64c0fdda2d2464f49300858b`
            `${process.env.API_URL}/api/v1/return-exchange/user/${id}`
          );

          console.log(
            `${process.env.API_URL}/api/v1/return-exchange/user/${id}`
          );

          const data = await response.json();
          setReturnData(data.data);
        }
      } catch (error) {
        console.error("Error fetching returns:", error);
      }
    };
    fetchData();
  }, [data, id]);

  console.log("retrn data", returnData);

  return (
    // <p className="my-[20vh] text-center text-primary-color">
    //       No Return Found!😟
    //     </p>

    <div className="flex flex-col gap-y-6 text-gray-600">
      <div className="rounded-lg border">
        <div className="py-1 border-b">
          <div className="px-4">
            <p>
              Order <span className="text-sky-500">#3423438438473</span>
            </p>
            <p>
              Place on <span>4 jun 2023</span>
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center my-4 w-full lg:w-4/5">
          <div className="flex gap-6 items-center">
            <Image
              src="/images/category/bridal_top.png"
              alt="My Image"
              width={70}
              height={60}
              className="rounded-lg"
            />
            <p>Panache Apparel - BLUEBELL</p>
          </div>
          <p>QTY: 1</p>
          <button className="bg-gray-300 rounded-full py-1 text-sm px-2">
            Cancelled
          </button>
        </div>
      </div>
      <div className="rounded-lg border">
        <div className="py-1 border-b">
          <div className="px-4">
            <p>
              Order <span className="text-sky-500">#3423438438473</span>
            </p>
            <p>
              Place on <span>4 jun 2023</span>
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center my-4 w-full lg:w-4/5">
          <div className="flex gap-6 items-center">
            <Image
              src="/images/category/bridal_top.png"
              alt="My Image"
              width={70}
              height={60}
              className="rounded-lg"
            />
            <p>Panache Apparel - BLUEBELL</p>
          </div>
          <p>QTY: 1</p>
          <button className="bg-gray-300 rounded-full py-1 text-sm px-2">
            Cancelled
          </button>
        </div>
      </div>
      <div className="rounded-lg border">
        <div className="py-1 border-b">
          <div className="px-4">
            <p>
              Order <span className="text-sky-500">#3423438438473</span>
            </p>
            <p>
              Place on <span>4 jun 2023</span>
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center my-4 w-full lg:w-4/5">
          <div className="flex gap-6 items-center">
            <Image
              src="/images/category/bridal_top.png"
              alt="My Image"
              width={70}
              height={60}
              className="rounded-lg"
            />
            <p>Panache Apparel - BLUEBELL</p>
          </div>
          <p>QTY: 1</p>
          <button className="bg-gray-300 rounded-full py-1 text-sm px-2">
            Cancelled
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReturnData;
