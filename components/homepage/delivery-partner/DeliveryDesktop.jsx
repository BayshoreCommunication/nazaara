import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import DeliveryData from "./DeliveryData";

const DeliveryDesktop = async () => {
  const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = await fetchServerSideData(url);
  const data = allData.data.deliveryPartnerImages;
  return <section>{data && <DeliveryData data={data} />}</section>;
};

export default DeliveryDesktop;
