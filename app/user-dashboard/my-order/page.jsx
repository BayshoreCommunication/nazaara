"use client";

import DashboardUtil from "@/components/user-dashboard/DashboardUtil";

import MyOrder from "@/components/user-dashboard/MyOrder";
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Loader from "@/components/Loader";

const MyOrders = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
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
    fetchData();
  }, []);

  return (
    <>
      {userData ? (
        <div className="main-container my-10 flex flex-col gap-y-4">
          <h2 className="text-xl font-semibold">Hello, {userData.fullName}</h2>
          <DashboardUtil />
          <MyOrder orderData={userData?.orders} />
        </div>
      ) : (
        <Loader height="h-[90vh]" />
      )}
    </>
  );
};

export default MyOrders;
