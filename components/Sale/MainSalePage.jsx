import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import React, { Suspense } from "react";
import MainSaleContent from "./MainSaleContent";
import { Loader } from "../Loader";

const MainSalePage = async ({ data }) => {
  // const url = `${process.env.API_URL}/api/v1/sale/published`;
  // const sales = await fetchServerSideData(url);
  // console.log("shop by sale");
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 2xl:gap-6">
      <Suspense fallback={<Loader height="h-[20vh]" />}>
        {data &&
          data?.data?.length > 0 &&
          data.data.map((data, i) => (
            <MainSaleContent data={data} key={data._id} i={i} />
          ))}
      </Suspense>
    </section>
  );
};

export default MainSalePage;
