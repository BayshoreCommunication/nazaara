"use client";
import { Util } from "@/util";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MyReturnData = () => {
  //call util function to get authenticate user id
  const data = Util();
  const id = data?._id;
  console.log("dataaaa", id);

  const [returnData, setReturnData] = useState([]);

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

  // console.log("return data", returnData);

  return (
    <div className="flex flex-col gap-y-6 text-gray-600">
      {returnData.length > 0 ? (
        returnData.map((el, i) => (
          <div key={i} className="rounded-lg border border-gray-300">
            <div className="py-1 border-b border-gray-300">
              <div className="px-4 flex gap-x-6 py-1">
                <p className="border-r pr-6 border-gray-400">
                  <span className="text-gray-700 ">Order No :</span>{" "}
                  <span className="">{el?.order?.paymentId}</span>
                </p>
                <p className="border-r pr-6 border-gray-400">
                  <span className="text-gray-700">Payment Method :</span>{" "}
                  <span className="">{el?.order?.paymentMethod}</span>
                </p>
                <p className="border-r pr-6 border-gray-400">
                  <span className="text-gray-700">Payment Status :</span>{" "}
                  <span className="">{el?.order?.paymentStatus}</span>
                </p>
                <p className="">
                  <span className="text-gray-700">Issue :</span>{" "}
                  <span className="">{el?.issue}</span>
                </p>
                {/* <p className="">
                  <span className="text-gray-700">Place on :</span>{" "}
                  <span>{formatDate(el.createdAt)}</span>
                </p> */}
              </div>
            </div>
            {el?.order?.product.map((data, i) => (
              <div
                key={i}
                className="flex justify-around items-center my-4 w-full border-b pb-3 border-gray-300 gap-8 px-5"
              >
                <Image
                  src={data.imageUrl}
                  alt="My Image"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <p>{data.slug}</p>
                <p>Color: {data.color}</p>
                <p>Quantity: {data.size}</p>
                <p>Price: {data.price}</p>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="my-[20vh] text-center text-primary-color">
          No Return Product Found!😟
        </p>
      )}
    </div>
  );
};

export default MyReturnData;
