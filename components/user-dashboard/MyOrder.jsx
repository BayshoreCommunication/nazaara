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

const MyOrder = ({ orderData }) => {
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
              Return Order
            </th>
          </tr>
        </thead>
        <tbody>
          {orderData &&
            orderData.map((data, i) => (
              <tr key={i} className="bg-white border-b dark:bg-gray-800">
                {data.product.map((product, i) => (
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
                <td className="px-6 py-4">{`৳ ${data.totalAmount}`}</td>
                <td className="px-6 py-4">{`৳ ${data.totalPay}`}</td>
                <td className="px-6 py-4">{`৳ ${data.due}`}</td>
                <td className="px-6 py-4">{formatDate(data.createdAt)}</td>
                <td
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
                </td>
                {!shouldHideReturnButton(data.createdAt) ? (
                  <td className="px-6 py-4">
                    <Link
                      href={`/return-exchange/${data._id}`}
                      className="bg-primary-color text-white rounded-md py-1 text-sm px-3 hover:bg-opacity-80"
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

    // <div className="flex flex-col gap-y-6 text-gray-600">
    //   {orderData?.length > 0 ? (
    //     orderData?.map((el, i) => (
    //       <div key={i} className="rounded-lg border border-gray-300">
    //         <div className="py-1 border-b border-gray-300">
    //           <div className="px-4 flex gap-x-6 py-1">
    //             <p className="border-r pr-6 border-gray-400">
    //               <span className="text-gray-700 ">Transaction Id :</span>{" "}
    //               <span className="">{el.transactionId}</span>
    //             </p>
    //             <p className="border-r pr-6 border-gray-400">
    //               <span className="text-gray-700">Payment Type :</span>{" "}
    //               <span className="">{el.paymentMethod}</span>
    //             </p>
    //             <p className="border-r pr-6 border-gray-400">
    //               <span className="text-gray-700">Payment Status :</span>{" "}
    //               <span className="">{el.paymentStatus}</span>
    //             </p>
    //             <p className="">
    //               <span className="text-gray-700">Place on :</span>{" "}
    //               <span>{formatDate(el.createdAt)}</span>
    //             </p>
    //           </div>
    //         </div>
    //         {el.product.map((data, i) => (
    //           <div
    //             key={i}
    //             className="flex justify-around items-center my-4 w-full border-b pb-3 border-gray-300 gap-8 px-5"
    //           >
    //             <Image
    //               src={data.imageUrl}
    //               alt="My Image"
    //               width={60}
    //               height={60}
    //               className="rounded-lg"
    //             />
    //             <p>{data.slug}</p>
    //             <p>Color: {data.color}</p>
    //             <p>Size: {data.size}</p>
    //             <p>Price: {data.price}</p>
    //             <p>Quantity: {data.quantity}</p>
    //             <p className="bg-gray-300 rounded-full py-1 text-sm px-3 capitalize">
    //               {el.deliveryStatus}
    //             </p>
    //             {!shouldHideReturnButton(el.createdAt) && (
    //               <Link
    //                 href={`/return-exchange/${el._id}`}
    //                 className="bg-primary-color text-white rounded-full py-1 text-sm px-3 hover:bg-opacity-80 "
    //               >
    //                 Return Order
    //               </Link>
    //             )}
    //           </div>
    //         ))}
    //       </div>
    //     ))
    //   ) : (
    //     <p className="my-[20vh] text-center text-primary-color">
    //       No Order Found!😟
    //     </p>
    //   )}

    //   {/* <div className='rounded-lg border'>
    //         <div className='py-1 border-b'>
    //             <div className='px-4'>
    //                 <p>Order <span className=''>#3423438438473</span></p>
    //                 <p>Place on <span>4 jun 2023</span></p>
    //             </div>
    //         </div>
    //         <div className='flex justify-around items-center my-4 w-full lg:w-4/5'>
    //             <div className='flex gap-6 items-center'>
    //                 <Image
    //                 src="/images/category/bridal_top.png"
    //                 alt="My Image"
    //                 width={70}
    //                 height={60}
    //                 className='rounded-lg'
    //                 />
    //                 <p>Panache Apparel - BLUEBELL</p>
    //             </div>
    //             <p>QTY: 1</p>
    //             <button className='bg-gray-300 rounded-full py-1 text-sm px-2'>Cancelled</button>
    //         </div>
    //     </div>
    //     <div className='rounded-lg border'>
    //         <div className='py-1 border-b'>
    //             <div className='px-4'>
    //                 <p>Order <span className=''>#3423438438473</span></p>
    //                 <p>Place on <span>4 jun 2023</span></p>
    //             </div>
    //         </div>
    //         <div className='flex justify-around items-center my-4 w-full lg:w-4/5'>
    //             <div className='flex gap-6 items-center'>
    //                 <Image
    //                 src="/images/category/bridal_top.png"
    //                 alt="My Image"
    //                 width={70}
    //                 height={60}
    //                 className='rounded-lg'
    //                 />
    //                 <p>Panache Apparel - BLUEBELL</p>
    //             </div>
    //             <p>QTY: 1</p>
    //             <button className='bg-gray-300 rounded-full py-1 text-sm px-2'>Cancelled</button>
    //         </div>
    //     </div> */}
    // </div>
  );
};

export default MyOrder;
