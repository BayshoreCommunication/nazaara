import React from "react";
import HiringComponent from "./Hiring";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";

const HiringData = async () => {
  const url = `${process.env.API_URL}/api/v1/hiring-customization/published`;
  const data = await fetchServerSideData(url);
  const hiringData = data?.data;
  return (
    <div>
      <HiringComponent data={hiringData} />
    </div>
  );
};

export default HiringData;
