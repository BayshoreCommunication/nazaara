import React from "react";
import { cookies } from "next/headers";
import NavBarContent from "./NavBarContent";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";

async function getData() {
  const cookieData = cookies();
  const userData = cookieData.get("userAuthCredential");
  if (userData) {
    const data = JSON.parse(userData?.value);
    const url = `${process.env.API_URL}/api/v1/cart/user/${data._id}`;
    const res = await fetch(url, {
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
}

async function getNavLinkData() {
  const url = `${process.env.API_URL}/api/v1/category/nav-data`;
  return await fetchServerSideData(url);
}

async function getAdvertisementData() {
  const url = `${process.env.API_URL}/api/v1/nav-advertise/category`;
  return await fetchServerSideData(url);
}

const MainNavbar = async () => {
  const data = await getData();
  const links = await getNavLinkData();
  const advertisements = await getAdvertisementData();

  console.log("data from main nav", data);

  return (
    <main className="sticky top-0 z-50 shadow-xl">
      <NavBarContent
        data={data}
        sales={links}
        advertisements={advertisements}
      />
    </main>
  );
};

export default MainNavbar;
