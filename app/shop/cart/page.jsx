import TopBar from "@/components/TopBar";
import CartContent from "@/components/shopping-cart/CartContent";
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

const CartPage = async () => {
  const data = await getData();
  // console.log("data", data);
  return (
    <main>
      <TopBar title={"CART"} icon={<FaCartArrowDown />} />
      <CartContent userData={data} />
    </main>
  );
};

export default CartPage;
