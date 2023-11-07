import HiringComponent from "@/components/Hiring";
// import TopBar from "@/components/TopBar";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

async function getData() {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/hiring-customization`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const HiringPage = async () => {
  const data = await getData();
  const hiringData = data.data;
  return (
    <>
      <div className="container">
        <div>
          <h1 className="flex items-center justify-center gap-x-2 h-28 border-b-2 text-xl font-medium text-gray-600">
            <FaUserCircle />
            WE ARE HIRING
          </h1>
          <HiringComponent data={hiringData} />
        </div>
      </div>
    </>
  );
};

export default HiringPage;
