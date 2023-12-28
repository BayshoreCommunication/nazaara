import React from "react";
import AllCards from "./AllCarts";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";

const MainBestSellingDataContent = async () => {
  const url = `${process.env.API_URL}/api/v1/best-selling-product`;
  const data = await fetchServerSideData(url);
  // console.log(data.data[0].products);
  return (
    <main>
      <AllCards bestSellingProducts={data} />
    </main>
  );
};

export default MainBestSellingDataContent;
