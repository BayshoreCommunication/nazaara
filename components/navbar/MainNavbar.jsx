import React from "react";
import { cookies } from "next/headers";
import Navbar from "./Navbar";

async function getData() {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  // console.log("cookie", userData);
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

const MainNavbar = async () => {
  const data = await getData();
    // console.log("user Data", data);

  return (
    <main className="sticky top-0 z-50">
      <Navbar data={data}/>
    </main>
  );
};

export default MainNavbar;
