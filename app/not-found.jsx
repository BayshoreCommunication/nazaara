"use client";
import React, { useEffect } from "react";
import animationData from "../public/product-not-found/not-found.json";
import Lottie from "react-lottie";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const router = useRouter();
  useEffect(() => {
    setInterval(() => {
      router.back();
    }, 3000);
  }, [router]);

  return (
    <div>
      <Lottie options={defaultOptions} height={600} width={600} />
      <p className="-translate-y-10 text-lg font-semibold text-gray-600 flex justify-center items-center gap-1">
        Redirecting <BeatLoader size={6} color="#820000" />
      </p>
    </div>
  );
};

export default NotFoundPage;
