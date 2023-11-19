import React from "react";
import { cookies } from "next/headers";
import NavBarContent from "./NavBarContent";

console.log("bugi chugi");
async function getData() {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  if (userData) {
    const data = JSON.parse(userData?.value);
    const res = await fetch(
      `${process.env.API_URL}/api/v1/cart/user/${data._id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
}

async function getSalesData() {
  const res = await fetch(`${process.env.API_URL}/api/v1/category/nav-data`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const MainNavbar = async () => {
  const data = await getData();
  const sales = await getSalesData();

  return (
    <main className="sticky top-0 z-50">
      <NavBarContent data={data} sales={sales} />
    </main>
  );
};

export default MainNavbar;
