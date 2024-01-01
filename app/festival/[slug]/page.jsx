import FestivalComponent from "@/components/Festivals/SingleFestivalContent";
import TopBar from "@/components/TopBar";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import React from "react";
import { FaGift } from "react-icons/fa";

const FestivalPage = async ({ params }) => {
  const url = `${process.env.API_URL}/api/v1/festival/slug/${params.slug}`;
  const data = await fetchServerSideData(url);
  return (
    <main>
      <TopBar
        title={`Festival / ${data.data[0].title}`}
        icon={<FaGift className="mb-1" />}
      />
      <div>
        <FestivalComponent festivalData={data} />
      </div>
    </main>
  );
};

export default FestivalPage;
