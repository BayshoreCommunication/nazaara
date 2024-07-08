import React from "react";
import Faq from "./Faq";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";

const FaqData = async () => {
  const url = `${process.env.API_URL}/api/v1/customization`;
  const allData = await fetchServerSideData(url);
  const data = allData?.data[0]?.faq;
  return (
    <div>
      <Faq data={data} />
    </div>
  );
};

export default FaqData;
