import React, { Suspense } from "react";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import BannerContent from "@/components/BannerContent";
import { Loader } from "@/components/Loader";

const Banner = async ({ data }) => {
  // const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  // const allData = await fetchServerSideData(url);
  // const data = allData?.data?.bannerSection;
  // console.log("banner");
  return (
    <section>
      {data && (
        <Suspense fallback={<Loader height="h-[20vh]" />}>
          <BannerContent data={data} />
        </Suspense>
      )}
    </section>
  );
};

export default Banner;
