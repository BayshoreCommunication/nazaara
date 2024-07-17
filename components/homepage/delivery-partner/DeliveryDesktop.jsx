import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import DeliveryData from "./DeliveryData";
import { Suspense } from "react";
import { Loader } from "@/components/Loader";

const DeliveryDesktop = async ({ data }) => {
  // const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  // const allData = await fetchServerSideData(url);
  // const data = allData.data.deliveryPartnerImages;
  // console.log("delivery");
  return (
    <section>
      {data && (
        <Suspense fallback={<Loader height="h-[20vh]" />}>
          <DeliveryData data={data} />
        </Suspense>
      )}
    </section>
  );
};

export default DeliveryDesktop;
