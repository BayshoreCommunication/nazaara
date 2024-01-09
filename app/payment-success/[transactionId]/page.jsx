import React from "react";

import { TbTruckDelivery } from "react-icons/tb";
import Link from "next/link";
import PaymentSuccess from "@/components/Lottie/PaymentSuccess";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SuccessPage = async ({ params }) => {
  async function getData() {
    const cookieData = cookies();
    const userData = cookieData.get("userAuthCredential");
    if (userData) {
      const data = JSON.parse(userData?.value);
      const userId = data._id;
      const url = `${process.env.API_URL}/api/v1/order/transactionId/${params.transactionId}`;
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) {
        return redirect("/");
      }
      const orderData = await res.json();
      // console.log(orderData);
      if (orderData.data.user._id != userId) {
        return redirect("/");
      }
    } else {
      return redirect("/");
    }
  }
  await getData();
  return (
    <div>
      <div className="-translate-y-10">
        <PaymentSuccess />
      </div>
      <div className="text-center -translate-y-28">
        <h1 className="text-2xl font-bold text-gray-700">
          Your Payment is Successfull
        </h1>
        <p className="text-base font-medium text-gray-700 my-2">
          Your Transaction Id: {params.transactionId}
        </p>
        <small className="text-sm font-medium text-gray-700">
          Thank you for your payment. We will deliver your product soon.
        </small>
      </div>
      <div className="flex justify-center -translate-y-16">
        <Link
          href={"/user-dashboard/my-order"}
          className="border-4 border-primary-color hover:border-transparent bg-primary-color text-white px-6 py-1.5 font-medium rounded-lg hover:bg-primary-hover-color transition-colors duration-500 flex gap-1 items-center"
        >
          <TbTruckDelivery size={18} /> Track Your Order
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
