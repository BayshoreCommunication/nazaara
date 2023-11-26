import FestivalComponent from "@/components/Festivals/SingleFestivalContent";
import React from "react";

const SalePage = async ({ params }) => {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/sale/slug/${params.slug}`,
    { next: { revalidate: 120 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  // console.log("data festive", data);
  return (
    <main>
      <div>
        <FestivalComponent festivalData={data} />
      </div>
    </main>
  );
};

export default SalePage;
