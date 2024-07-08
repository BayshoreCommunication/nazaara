import React, { Suspense } from "react";
import AllCards from "./AllCarts";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import { Loader } from "@/components/Loader";

const MainBestSellingDataContent = async () => {
  const url = `${process.env.API_URL}/api/v1/best-selling-product`;
  const data = await fetchServerSideData(url);
  // console.log(data.data[0].products);
  return (
    <section>
      {data && (
        <Suspense fallback={<Loader height="h-[20vh]" />}>
          <AllCards bestSellingProducts={data} />
        </Suspense>
      )}
    </section>
  );
};

export default MainBestSellingDataContent;
