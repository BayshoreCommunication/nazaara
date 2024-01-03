import React from "react";
import {
  FaCheckCircle,
  FaShippingFast,
  FaSpinner,
  FaTruck,
} from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { LuPackageCheck } from "react-icons/lu";

const deliveryStatuses = [
  { status: "pending", icon: <MdOutlinePendingActions size={22} /> },
  { status: "order received", icon: <FaCheckCircle size={20} /> },
  { status: "on process", icon: <FaSpinner size={20} /> },
  { status: "ready to deliver", icon: <FaTruck size={20} /> },
  { status: "shipped", icon: <FaShippingFast size={20} /> },
  { status: "delivered", icon: <LuPackageCheck size={22} /> },
];

const TrackOrder = ({ orderData }) => {
  if (orderData.deliveryStatus) {
    const activeStep = deliveryStatuses.findIndex(
      (statusObj) => statusObj.status == orderData.deliveryStatus
    );
    return (
      <div>
        <ol className="lg:hidden">
          {deliveryStatuses.map((statusObj, index) => (
            <li
              key={index}
              className={`flex items-center justify-center ml-16`}
            >
              <div className="flex flex-col items-center justify-center">
                <div
                  className={`h-16 w-1 border-s-4 ${
                    index <= activeStep ? "border-green-500" : "border-gray-200"
                  }`}
                ></div>
                <div
                  className={`z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ${
                    index <= activeStep ? "text-green-500" : "text-gray-200"
                  }`}
                >
                  {statusObj.icon}
                </div>
              </div>
              <div className="mb-5 w-36">
                <h3 className="text-base font-semibold capitalize text-gray-700">
                  {statusObj.status}
                </h3>
              </div>
            </li>
          ))}
        </ol>
        <ol className="hidden items-center w-full lg:grid grid-cols-6">
          {deliveryStatuses.map((statusObj, index) => (
            <li key={index} className={`relative mb-6}`}>
              <div className="flex items-center justify-center">
                <div
                  className={`w-full h-1 ${
                    index <= activeStep ? "bg-green-500" : "bg-gray-200"
                  }`}
                ></div>
                <div
                  className={`z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full shrink-0 ${
                    index <= activeStep ? "text-green-500" : "text-gray-200"
                  }`}
                >
                  {statusObj.icon}
                </div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-base font-semibold capitalize text-gray-700">
                  {statusObj.status}
                </h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
};

export default TrackOrder;
