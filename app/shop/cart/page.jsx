import TopBar from "@/components/TopBar";
import CartContent from "@/components/shopping-cart/CartContent";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

async function getData() {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  // console.log("user data", userData);
  if (userData) {
    const data = JSON.parse(userData?.value);
    return data;
  }
  return redirect("/user-authentication");
}

const fetchCouponData = async (url) => {
  "use server";
  const res = await fetch(url, {
    next: { revalidate: 0 },
  });
  return res.json();
};

const CartPage = async () => {
  const data = await getData();
  return (
    <main>
      <TopBar title={"CART"} icon={<FaCartArrowDown />} />
      <CartContent fetchCouponData={fetchCouponData} userData={data} />
    </main>
  );
};

export default CartPage;
