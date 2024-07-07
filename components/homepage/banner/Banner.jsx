import React from "react";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import BannerContent from "@/components/BannerContent";

const Banner = async () => {
  const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = await fetchServerSideData(url);
  const data = allData?.data?.bannerSection;
  return <section>{data && <BannerContent data={data} />}</section>;
};

export default Banner;
