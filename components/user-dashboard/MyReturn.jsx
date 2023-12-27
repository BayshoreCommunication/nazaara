import { Util } from "@/util";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineDone } from "react-icons/md";

function formatDate(inputDateString) {
  const date = new Date(inputDateString);

  // Define an array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract the day, month, and year from the date
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Create the formatted date string
  const formattedDateString = `${day} ${month} ${year}`;

  return formattedDateString;
}

//hide return button after 7 days
const shouldHideReturnButton = (createdAt) => {
  const updatedDate = new Date(createdAt);
  const sevenDaysLater = new Date(updatedDate);
  sevenDaysLater.setDate(updatedDate.getDate() + 7);
  const currentDate = new Date();

  // Return false if currentDate is exactly 7 days after sevenDaysLater
  return currentDate.getTime() > sevenDaysLater.getTime();
};

const MyReturn = ({ returnData }) => {
  return (
    <div className="relative overflow-x-auto mt-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product Details
            </th>
            <th scope="col" className="px-6 py-3">
              Transaction Id
            </th>
            <th scope="col" className="px-6 py-3">
              Payment Type
            </th>
            <th scope="col" className="px-6 py-3">
              Payment Status
            </th>
            <th scope="col" className="px-6 py-3">
              Total Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Total Pay
            </th>
            <th scope="col" className="px-6 py-3">
              Due
            </th>
            <th scope="col" className="px-6 py-3">
              Order Placed
            </th>
            <th scope="col" className="px-6 py-3">
              Delivery Status
            </th>
            <th scope="col" className="px-6 py-3">
              Return Status
            </th>
          </tr>
        </thead>
        <tbody>
          {returnData &&
            returnData.map((data, i) => (
              <tr key={i} className="bg-white border-b dark:bg-gray-800">
                {data.order.product.map((product, i) => (
                  <tr key={i} className="border-e border-b">
                    <td className="px-2 py-4 ">
                      <Image
                        src={product.imgUrl}
                        width={60}
                        height={80}
                        alt={data.productName}
                      />
                    </td>
                    <td className="pe-2 py-4">{`${
                      product.title.length > 20
                        ? `${product.title.slice(0, 20)}...`
                        : product.title
                    } `}</td>
                  </tr>
                ))}
                <td className="px-6 py-4">{data.order.transactionId}</td>
                <td className="px-6 py-4">{data.order.paymentMethod}</td>
                <td
                  className={`px-6 py-4 font-medium ${
                    data.order.paymentStatus === "full successful"
                      ? "text-green-700"
                      : "text-yellow-800"
                  }`}
                >
                  {data.order.paymentStatus}
                </td>
                <td className="px-6 py-4">{`৳ ${data.order.totalAmount}`}</td>
                <td className="px-6 py-4">{`৳ ${data.order.totalPay}`}</td>
                <td className="px-6 py-4">{`৳ ${data.order.due}`}</td>
                <td className="px-6 py-4">{formatDate(data.createdAt)}</td>
                <td
                  className={`font-medium px-6 py-4${
                    data.order.deliveryStatus === "pending"
                      ? "text-yellow-700"
                      : "text-green-700"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {data.order.deliveryStatus === "delivered" && (
                      <MdOutlineDone size={18} color="green" />
                    )}
                    {data.order.deliveryStatus}
                  </span>
                </td>
                <td
                  className={`font-medium px-6 py-4 ${
                    data.approval !== "approved"
                      ? "text-yellow-700"
                      : "text-green-700"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {data.approval === "approved" && (
                      <MdOutlineDone size={18} color="green" />
                    )}
                    {data.approval}
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReturn;
