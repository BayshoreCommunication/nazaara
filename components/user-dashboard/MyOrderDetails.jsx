import Image from "next/image";
import React from "react";

const MyOrderDetails = ({ orderData }) => {
  // console.log("orderData", orderData);
  return (
    <div className="w-full lg:w-2/3 mx-auto text-sm lg:mt-6">
      {orderData?.product?.map((data, index) => {
        return (
          <div className="pb-4 border-b mb-4" key={index}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex gap-4 items-center relative w-full">
                <Image
                  src={`${data?.imgUrl}`}
                  alt="bridal_top"
                  width={220}
                  height={160}
                  className="w-[8rem] h-[8.7rem] border-2 border-secondary-color rounded-md"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-gray-700 uppercase">
                    {data?.title}
                  </p>
                  <p className="text-sm text-gray-700">Size: {data?.size}</p>
                  <p className="text-sm text-gray-700">
                    Quantity: {data?.quantity}
                  </p>
                </div>
              </div>
              {data.sizeChart && (
                <div className="border w-full flex flex-col lg:flex-row text-gray-700 text-xs rounded-md">
                  <div className="flex-[2] border-e p-3">
                    <div className="mb-4">
                      <p className="font-semibold mb-1">Tops</p>
                      <div className="flex gap-6 items-center">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            readOnly
                            defaultChecked={data.sizeChart.topType === "blouse"}
                            disabled={data.sizeChart.topType !== "blouse"}
                          />
                          <label className="ml-1 font-medium text-gray-500">
                            BLOUSE
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            readOnly
                            defaultChecked={data.sizeChart.topType === "kameez"}
                            disabled={data.sizeChart.topType !== "kameez"}
                          />
                          <label className="ml-1 font-medium text-gray-500">
                            KAMEEZ
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            readOnly
                            defaultChecked={data.sizeChart.topType === "gown"}
                            disabled={data.sizeChart.topType !== "gown"}
                          />
                          <label className="ml-1 font-medium text-gray-500">
                            GOWN
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <p className="text-xs">
                          CHEST:{" "}
                          {data.sizeChart.tops.chest
                            ? data.sizeChart.tops.chest
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          WAIST:{" "}
                          {data.sizeChart.tops.chest
                            ? data.sizeChart.tops.waist
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          HIP:{" "}
                          {data.sizeChart.tops.hip
                            ? data.sizeChart.tops.hip
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          END:{" "}
                          {data.sizeChart.tops.end
                            ? data.sizeChart.tops.end
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          SHOULDER:{" "}
                          {data.sizeChart.tops.shoulder
                            ? data.sizeChart.tops.shoulder
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          ARM HOLE:{" "}
                          {data.sizeChart.tops.armHole
                            ? data.sizeChart.tops.armHole
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          SLEEVE L:{" "}
                          {data.sizeChart.tops.sleeveLength
                            ? data.sizeChart.tops.sleeveLength
                            : "N/A"}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-xs">
                          MUSCLE:{" "}
                          {data.sizeChart.tops.muscle
                            ? data.sizeChart.tops.muscle
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          HAND OPENNING:{" "}
                          {data.sizeChart.tops.handOpening
                            ? data.sizeChart.tops.handOpening
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          LENGTH:{" "}
                          {data.sizeChart.tops.length
                            ? data.sizeChart.tops.length
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          SLIT:{" "}
                          {data.sizeChart.tops.slit
                            ? data.sizeChart.tops.slit
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          NEEK DEEP (F):{" "}
                          {data.sizeChart.tops.neckDeepf
                            ? data.sizeChart.tops.neckDeepf
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          NEEK DEEP (B):{" "}
                          {data.sizeChart.tops.neckDeepb
                            ? data.sizeChart.tops.neckDeepb
                            : "N/A"}
                        </p>
                        <p className="text-xs">
                          HALF BODY:{" "}
                          {data.sizeChart.tops.halfBody
                            ? data.sizeChart.tops.halfBody
                            : "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <div className="mb-4">
                      <p className="font-semibold mb-1">Bottom</p>
                      <div className="grid grid-cols-4 lg:grid-cols-2 gap-y-1 items-center">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            readOnly
                            defaultChecked={
                              data.sizeChart.bottomType === "skirt"
                            }
                            disabled={data.sizeChart.bottomType !== "skirt"}
                          />
                          <label className="ml-1 font-medium text-gray-500">
                            SKIRT
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            readOnly
                            defaultChecked={
                              data.sizeChart.bottomType === "palazzo"
                            }
                            disabled={data.sizeChart.bottomType !== "palazzo"}
                          />
                          <label className="ml-1 font-medium text-gray-500">
                            PALADZO
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            readOnly
                            defaultChecked={
                              data.sizeChart.bottomType === "pant"
                            }
                            disabled={data.sizeChart.bottomType !== "pant"}
                          />
                          <label
                            htmlFor="gown"
                            className="ml-1 font-medium text-gray-500"
                          >
                            PANT
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            readOnly
                            defaultChecked={
                              data.sizeChart.bottomType === "gharara"
                            }
                            disabled={data.sizeChart.bottomType !== "gharara"}
                          />
                          <label
                            htmlFor="gown"
                            className="ml-1 font-medium text-gray-500"
                          >
                            GHARARA
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs">
                        LENGTH:{" "}
                        {data.sizeChart.bottom.length
                          ? data.sizeChart.bottom.length
                          : "N/A"}
                      </p>
                      <p className="text-xs">
                        WAIST:{" "}
                        {data.sizeChart.bottom.waist
                          ? data.sizeChart.bottom.waist
                          : "N/A"}
                      </p>
                      <p className="text-xs">
                        HIP:{" "}
                        {data.sizeChart.bottom.hip
                          ? data.sizeChart.bottom.hip
                          : "N/A"}
                      </p>
                      <p className="text-xs">
                        THIGH:{" "}
                        {data.sizeChart.bottom.thigh
                          ? data.sizeChart.bottom.thigh
                          : "N/A"}
                      </p>
                      <p className="text-xs">
                        KNEE:{" "}
                        {data.sizeChart.bottom.knee
                          ? data.sizeChart.bottom.knee
                          : "N/A"}
                      </p>
                      <p className="text-xs">
                        LEG OPENNING:{" "}
                        {data.sizeChart.bottom.legOpening
                          ? data.sizeChart.bottom.legOpening
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
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
          <p>{orderData?.transactionDetails?.cardType}</p>
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
