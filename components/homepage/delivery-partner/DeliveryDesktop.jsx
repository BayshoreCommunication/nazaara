import FetchServerSideData from "../../DataFetchingComponent/ServerSideDataFetching";
import DeliveryData from "./DeliveryData";

const DeliveryDesktop = async () => {
  const url = `http://localhost:8000/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = await FetchServerSideData(url);
  const data = allData.data.deliveryPartnerImages;
  return (
    <div>
      <DeliveryData data={data} />
    </div>
  );
};

export default DeliveryDesktop;
