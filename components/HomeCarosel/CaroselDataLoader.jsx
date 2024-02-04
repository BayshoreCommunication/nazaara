import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import CaroselContent from "./CaroselContent";

const CaroselDataLoader = async () => {
  const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = await fetchServerSideData(url);
  const data = allData.data.homeCarosel;
  return <div>{<CaroselContent data={data} />}</div>;
};

export default CaroselDataLoader;
