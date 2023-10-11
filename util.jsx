"use client";
import { getCookie } from "cookies-next";

const { useState, useEffect } = require("react");

export const Util = () => {
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
  return userData;
};
