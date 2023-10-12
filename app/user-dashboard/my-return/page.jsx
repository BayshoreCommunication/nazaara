"use client";
import DashboardUtil from "@/components/user-dashboard/DashboardUtil";
import MyReturn from "@/components/user-dashboard/MyReturn";
import { Util } from "@/util";
import React from "react";

const MyReturns = () => {
  const userData = Util();
  // console.log("userDatass", userData);
  return (
    <div className="container my-10 flex flex-col gap-y-4">
      <h2 className="text-xl font-semibold">Hello, {userData?.fullName}</h2>
      <DashboardUtil />
      <MyReturn />
    </div>
  );
};

export default MyReturns;
