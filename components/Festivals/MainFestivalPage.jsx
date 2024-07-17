import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import FestivalContent from "./FestivalContent";
import { Suspense } from "react";
import { Loader } from "../Loader";

const MainFestivalPage = async ({ data }) => {
  // const url = `${process.env.API_URL}/api/v1/festival/published`;
  // const festivals = await fetchServerSideData(url);
  // console.log("shop by festival");
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 2xl:gap-6">
      <Suspense fallback={<Loader height="h-[40vh]" />}>
        {data?.data?.length > 0 &&
          data.data.map((data, i) => (
            <FestivalContent key={data._id} data={data} i={i} />
          ))}
      </Suspense>
    </section>
  );
};

export default MainFestivalPage;
