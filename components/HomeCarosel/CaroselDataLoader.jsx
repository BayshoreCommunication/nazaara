import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import CaroselContent from "./CaroselContent";
import { Suspense } from "react";
import { Loader } from "../Loader";

const CaroselDataLoader = async () => {
  const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = await fetchServerSideData(url);
  const data = allData.data.homeCarosel;
  return (
    <section>
      {data && (
        <Suspense fallback={<Loader height="h-[40vh]" />}>
          <CaroselContent data={data} />
        </Suspense>
      )}
    </section>
  );
};

export default CaroselDataLoader;
