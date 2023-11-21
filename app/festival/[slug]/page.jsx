import FestivalComponent from "@/components/Festivals/SingleFestivalContent";
import React from "react";

const FestivalPage = async ({ params }) => {
  console.log("pdarta", params.slug);
  const res = await fetch(
    `${process.env.API_URL}/api/v1/festival/slug/${params.slug}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log("data festive", data);
  return (
    <main>
      <div>
        <FestivalComponent festivalData={data} />
      </div>
    </main>
  );
};

export default FestivalPage;
