import SaleContent from "@/components/Sale/SaleContent";
import React from "react";
import AllCards from "./AllCards";

const MainDataContent = async () => {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/product/random-products`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  //   console.log("data sale", data);
  return (
    <main>
      <div>
        <AllCards randomProducts={data} />
      </div>
    </main>
  );
};

export default MainDataContent;
