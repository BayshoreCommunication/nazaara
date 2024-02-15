import React from "react";
import { TbArrowsExchange } from "react-icons/tb";

const page = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center gap-x-2 h-28 border-b-2 text-xl font-medium text-gray-600">
        <TbArrowsExchange />
        RETURN & EXCHANGE
      </h1>
      <div className="main-container my-10">
        <div className="w-[90%] lg:w-[70%] mx-auto">
          <h3 className="text-xl font-medium text-gray-700 mb-3">
            ELIGIBILITY CRITERIA
          </h3>
          <ol className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              NO MONEY REFUND, MONEY CAN BE ADJUSTED WITH ANOTHER PURCHASE
              (WITHIN 7 DAYS)
            </li>
            <li>DELIVERED PRODUCTS CANNOT BE EXCHANGED.</li>
            <li>
              DRESS CAN BE BOOKED FOR A MAXIMUM OF 2 MONTHS (60 DAYS) WITH 50%
              BOOKING MONEY. AFTER 2 MONTHS, THE ORDER WILL BE CANCELLED AND THE
              BOOKING AMOUNT WILL BE NON-REFUNDABLE & NON- ADJUSTABLE.
            </li>
            <li>
              BOOKED DRESS CANNOT BE CANCELLED, BUT EXCHANGE IS POSSIBLE (WITHIN
              60 DAYS MAXIMUM).
            </li>
            <li>
              TOTAL VALUE OF THE BILL HAS TO BE MET WHILE EXCHANGING THE BOOKED
              PRODUCT. (NOT JUST THE BOOKING AMOUNT)
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default page;
