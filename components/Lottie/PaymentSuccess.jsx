"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/product-not-found/paymentSuccess.json";

const PaymentSuccess = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-[350px] lg:w-[600px]">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default PaymentSuccess;
