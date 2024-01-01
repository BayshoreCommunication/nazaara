import Image from "next/image";
import React from "react";

const MyOrderDetails = ({ orderData }) => {
  return (
    <div className="w-full lg:w-2/3 mx-auto text-sm mt-6">
      {orderData?.product?.map((data, index) => {
        return (
          <div
            className="flex justify-between items-center pb-4 border-b mb-4"
            key={index}
          >
            <div className="flex gap-4 items-center relative">
              <Image
                src={`${data?.imgUrl}`}
                alt="bridal_top"
                width={60}
                height={40}
                className="w-[5rem] h-[5.7rem] border-2 border-secondary-color rounded-sm"
              />
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-gray-700">
                  {data?.title}
                </p>
                <p className="text-sm text-gray-700">Size: {data?.size}</p>
                <p className="text-sm text-gray-700">
                  Quantity: {data?.quantity}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <p className="text-base font-semibold text-gray-700 mb-3 mt-6 border-b pb-1">
        ORDER DETAILS
      </p>

      <div className="border-b pb-3 text-gray-700 font-medium">
        <div className="flex justify-between items-center mb-3">
          <p>Shipping Address</p>
          <p className="sm:hidden flex flex-col">
            <span>
              {`${orderData?.shippingAddress.street}, ${orderData?.shippingAddress.city},
             `}
            </span>
            <span className="text-center">
              {orderData?.shippingAddress.country}
            </span>
          </p>
          <p className="hidden sm:block">
            {`${orderData?.shippingAddress.street}, ${orderData?.shippingAddress.city}, ${orderData?.shippingAddress.country}`}
          </p>
        </div>
        <div className="flex justify-between items-center mb-3">
          <p>Transaction ID</p>
          <p>{orderData?.transactionId}</p>
        </div>
        <div className="flex justify-between items-center mb-3">
          <p>Payment Method</p>
          <p>{orderData?.transactionId}</p>
        </div>
      </div>
      <p className="text-base font-semibold text-gray-700 mb-3 mt-6 border-b pb-1">
        INVOICE
      </p>

      <div className="border-b pb-3 text-gray-700 font-medium">
        <div className="flex justify-between items-center mb-3">
          <p>Sub-Total</p>
          <p>৳ {orderData?.subTotal}/-</p>
        </div>
        <div className="flex justify-between items-center mb-3">
          <p>Vat Included</p>
          <p>৳ {orderData?.vatIncluded}/-</p>
        </div>
        <div className="flex justify-between items-center mb-3">
          <p>Discount Amount</p>
          <p>৳ {orderData?.discountAmount}/-</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Shipping</p>
          <p>৳ {orderData?.shippingCharge}/-</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mt-3 text-gray-700 font-semibold">
          <p>Total Amount</p>
          <p>৳ {orderData?.totalAmount}/-</p>
        </div>
        <div className="flex justify-between items-center mt-3 text-gray-700 font-semibold">
          <p>Pay Amount</p>
          <p>৳ {orderData?.totalPay}/-</p>
        </div>
        <div className="flex justify-between items-center mt-3 text-gray-700 font-semibold">
          <p>Due Amount</p>
          <p
            className={`${
              orderData?.due > 0 ? "text-primary-color" : "text-green-700"
            } `}
          >
            ৳ {orderData?.due}/-
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyOrderDetails;
