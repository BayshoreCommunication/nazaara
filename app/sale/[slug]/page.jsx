import SaleContent from "@/components/Sale/SaleContent";
import React from "react";

const SalePage = async ({ params }) => {
  // console.log("params", params);
  const res = await fetch(`${process.env.API_URL}/api/v1/sale/${params.slug}`, {
    next: { revalidate: 120 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  // console.log("data sale", data);
  return (
    <main>
      <div>
        <SaleContent saleData={data} />
      </div>
    </main>
  );
};

export default SalePage;
