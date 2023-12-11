import FestivalComponent from "@/components/Festivals/SingleFestivalContent";
import TopBar from "@/components/TopBar";
import React from "react";
import { FaGift } from "react-icons/fa";

const FestivalPage = async ({ params }) => {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/festival/slug/${params.slug}`,
    { next: { revalidate: 120 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  // console.log("data festive", data);
  return (
    <main>
      <TopBar title={`Festival / ${data.data[0].title}`} icon={<FaGift />} />
      <div>
        <FestivalComponent festivalData={data} />
      </div>
    </main>
  );
};

export default FestivalPage;
