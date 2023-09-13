import FetchServerSideData from "@/components/DataFetchingComponent/ServerSideDataFetching";
import HiringComponent from "@/components/Hiring";
import TopBar from "@/components/TopBar";
import React from "react";

const HiringPage = async () => {
  const url = `${process.env.API_URL}/api/v1/hiring-customization`;
  const data = await FetchServerSideData(url);
  const hiringData = data.data;
  // console.log("hello", hiringData);
  return (
    <>
      {/* <TopBar /> */}
      <div className="my-10 container">
        {/* <h2 className="heading-3 text-center mb-10 text-gray-700">
          FREQUENTLY ASKED QUESTIONS BY CUSTOMERS
        </h2> */}
        {/* component for data to use useState  */}
        <HiringComponent data={hiringData} />
      </div>
    </>
  );
};

export default HiringPage;
