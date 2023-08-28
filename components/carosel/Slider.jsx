import FetchServerSideData from "../DataFetchingComponent/ServerSideDataFetching";
import LeftCarosel from "../homepage/carosel/leftCarosel/LeftCarosel";

const Slider = async () => {
  const url = `http://localhost:8000/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = await FetchServerSideData(url);
  const data = allData.data.heroLeftSlider;
  // console.log("left", data);
  return <div>{<LeftCarosel data={data} />}</div>;
};

export default Slider;
