import React from "react";
import CheckoutContent from "./page";
import { cookies } from "next/headers";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";

async function getUserData() {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  // console.log("user data", userData);
  if (userData) {
    const data = JSON.parse(userData?.value);
    const user = await fetchServerSideData(
      `${process.env.API_URL}/api/v1/user/${data?._id}`
    );
    return user;
  }
  return redirect("/user-authentication");
}

const CheckoutMainPage = async () => {
  const userData = await getUserData();

  //fetch all country data
  const countryData = await fetchServerSideData(
    `https://restcountries.com/v2/all`
  );

  const countryName = countryData.map((data) => data?.name) || [
    "Bangladesh",
    "India",
    "Pakistan",
  ];

  const fetchCouponData = async (url) => {
    "use server";
    const res = await fetch(url, {
      headers: {
        authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
      },
      cache: "no-store",
    });
    return res.json();
  };
  return (
    <CheckoutContent
      userData={userData?.data}
      // cartData={cartData?.data}
      countryName={countryName}
      fetchCouponData={fetchCouponData}
    />
  );
};

export default CheckoutMainPage;
