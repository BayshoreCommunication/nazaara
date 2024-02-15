import Link from "next/link";
import React from "react";

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

const MyOrder = ({ orderData }) => {
  return (
    <div className="relative overflow-x-auto mt-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order Id
            </th>
            <th scope="col" className="px-6 py-3">
              Payment Type
            </th>
            <th scope="col" className="px-6 py-3">
              Payment Status
            </th>
            <th scope="col" className="px-6 py-3">
              Payment By
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
              Order Details
            </th>
            <th scope="col" className="px-6 py-3">
              Track Order
            </th>
            <th scope="col" className="px-6 py-3">
              Return Order
            </th>
          </tr>
        </thead>
        <tbody>
          {orderData &&
            orderData.map((data, i) => (
              <tr key={i} className="bg-white border-b dark:bg-gray-800">
                <td className="px-6 py-4">{data.transactionId}</td>
                <td className="px-6 py-4">{data.paymentMethod}</td>
                <td
                  className={`px-6 py-4 font-medium ${
                    data.paymentStatus === "full successful"
                      ? "text-green-700"
                      : "text-yellow-800"
                  }`}
                >
                  {data.paymentStatus}
                </td>
                <td className="px-6 py-4">{`${data?.transactionDetails?.cardType}`}</td>
                <td className="px-6 py-4">{`৳ ${data.totalAmount}`}</td>
                <td className="px-6 py-4">{`৳ ${data.totalPay}`}</td>
                <td className="px-6 py-4">{`৳ ${data.due}`}</td>
                <td className="px-6 py-4">{formatDate(data.createdAt)}</td>
                {/* <td
                  className={`font-medium px-6 py-4${
                    data.deliveryStatus === "pending"
                      ? "text-yellow-700"
                      : "text-green-700"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {data.deliveryStatus === "delivered" && (
                      <MdOutlineDone size={18} color="green" />
                    )}
                    {data.deliveryStatus}
                  </span>
                </td> */}
                <td className="px-6 py-4">
                  <Link
                    href={`/user-dashboard/my-order/${data._id}`}
                    className="bg-primary-color text-white rounded-md py-1 text-xs font-medium px-3 hover:bg-opacity-80"
                  >
                    View
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/user-dashboard/track-order/${data._id}`}
                    className="bg-primary-color text-white rounded-md py-1 text-xs font-medium px-3 hover:bg-opacity-80"
                  >
                    Track
                  </Link>
                </td>
                {!shouldHideReturnButton(data.createdAt) ? (
                  <td className="px-6 py-4">
                    <Link
                      href={`/return-exchange/${data._id}`}
                      className="bg-primary-color text-white rounded-md py-1 text-xs font-medium px-3 hover:bg-opacity-80"
                    >
                      Return
                    </Link>
                  </td>
                ) : (
                  <td className="px-6 py-4">
                    <button className="bg-gray-400 text-gray-700 rounded-md py-1 text-sm px-3 hover:bg-opacity-80 cursor-not-allowed">
                      Return
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
