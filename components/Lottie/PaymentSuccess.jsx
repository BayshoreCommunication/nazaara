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
  return <Lottie options={defaultOptions} height={600} width={600} />;
};

export default PaymentSuccess;
