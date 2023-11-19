import React from "react";
import { cookies } from "next/headers";
import NavBarContent from "./NavBarContent";

export const revalidate = 300;

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

async function getNavLinkData() {
  const res = await fetch(`${process.env.API_URL}/api/v1/category/nav-data`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getAdvertisementData() {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/nav-advertise/category`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const MainNavbar = async () => {
  const data = await getData();
  const links = await getNavLinkData();
  const advertisements = await getAdvertisementData();

  return (
    <main className="sticky top-0 z-50">
      <NavBarContent
        data={data}
        sales={links}
        advertisements={advertisements}
      />
    </main>
  );
};

export default MainNavbar;
