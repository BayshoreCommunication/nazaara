import TopBar from "@/components/TopBar";
import CartContent from "@/components/shopping-cart/CartContent";
import { cookies } from "next/headers";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

async function getData() {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  const data = JSON.parse(userData?.value);
  //   if (data) {
  //     const url = `${process.env.API_URL}/api/v1/cart/user/${data._id}`;
  //     const res = await fetch(url, {
  //       next: { revalidate: 0 },
  //     });
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     return res.json();
  //   }
  return data;
}

const CartPage = async () => {
  const data = await getData();
  //   console.log("user cart data", data);
  return (
    <main>
      <TopBar title={"CART"} icon={<FaCartArrowDown />} />
      <CartContent userData={data} />
    </main>
  );
};

export default CartPage;
