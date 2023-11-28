import React from "react";
import AllCards from "./AllCards";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";

const MainDataContent = async () => {
  const url = `${process.env.API_URL}/api/v1/product/random-products`;
  const data = await fetchServerSideData(url);
  return (
    <main>
      <div>
        <AllCards randomProducts={data} />
      </div>
    </main>
  );
};

export default MainDataContent;
