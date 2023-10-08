"use client";

import DashboardUtil from "@/components/user-dashboard/DashboardUtil";

import MyOrder from "@/components/user-dashboard/MyOrder";
import React, { useCallback, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Loader from "@/components/Loader";

const MyOrders = () => {
  const [userData, setUserData] = useState();
  const fetchData = async () => {
    const jsonStr = getCookie("userAuthCredential");
    try {
      if (jsonStr) {
        const obj = JSON.parse(jsonStr);
        const response = await fetch(
          `${process.env.API_URL}/api/v1/user/${obj._id}`
        );

        const data = await response.json();
        setUserData(data.data);
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log("user data", userData);

  return (
    <>
      {userData ? (
        <div className="container my-10 flex flex-col gap-y-4">
          <h2 className="text-xl font-semibold">Hello, {userData.fullName}</h2>
          <DashboardUtil />
          <MyOrder userData={userData} />
        </div>
      ) : (
        <Loader height="h-[90vh]" />
      )}
    </>
  );
};

export default MyOrders;
