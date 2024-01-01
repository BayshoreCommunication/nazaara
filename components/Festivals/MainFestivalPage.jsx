import React from "react";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import FestivalContent from "./FestivalContent";

const MainFestivalPage = async () => {
  const url = `${process.env.API_URL}/api/v1/festival/published`;
  const festivals = await fetchServerSideData(url);

  return (
    <main>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 2xl:gap-6">
        {festivals?.data?.length > 0 &&
          festivals.data.map((data, i) => (
            <FestivalContent key={i} data={data} i={i} />
          ))}
      </div>
    </main>
  );
};

export default MainFestivalPage;
