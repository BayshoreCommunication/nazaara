import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import React from "react";
import MainSaleContent from "./MainSaleContent";

const MainSalePage = async () => {
  const url = `${process.env.API_URL}/api/v1/sale/published`;
  const sales = await fetchServerSideData(url);
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 2xl:gap-6">
      {sales &&
        sales?.data?.length > 0 &&
        sales.data.map((data, i) => (
          <MainSaleContent data={data} key={data._id} i={i} />
        ))}
    </section>
  );
};

export default MainSalePage;
