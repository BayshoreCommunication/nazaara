import React, { Suspense } from "react";
import AllCards from "./AllCards";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import { Loader } from "@/components/Loader";

const MainDataContent = async () => {
  const url = `${process.env.API_URL}/api/v1/product/random-products`;
  const data = await fetchServerSideData(url);
  return (
    <section>
      {data && (
        <Suspense fallback={<Loader height="h-[20vh]" />}>
          <AllCards randomProducts={data} />
        </Suspense>
      )}
    </section>
  );
};

export default MainDataContent;
