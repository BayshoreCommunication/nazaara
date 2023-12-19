import TopBar from "@/components/TopBar";
import Navigation from "@/components/paymentNav/Navigation";
import CartContent from "@/components/shopping-cart/CartContent";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaCartShopping } from "react-icons/fa6";

async function getData() {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  if (userData) {
    const data = JSON.parse(userData?.value);
    return data;
  }
  return redirect("/user-authentication");
}

const CartPage = async () => {
  const data = await getData();
  return (
    <main>
      <TopBar title={"CART"} icon={<FaShoppingCart />} />
      <Navigation
        link2Title={"Shop"}
        link2Icon={
          <span className="mb-0.5">
            <FaBagShopping />
          </span>
        }
        link2Href={"/shop"}
        link3Title={"Cart"}
        link3Icon={
          <span className="mb-0.5">
            <FaCartShopping />
          </span>
        }
      />
      <section className="my-6">
        <CartContent userData={data} />
      </section>
    </main>
  );
};

export default CartPage;
