import React from "react";
import HiringComponent from "./Hiring";

async function getData() {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/hiring-customization`,
    {
      next: { revalidate: 300 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const HiringData = async () => {
  const data = await getData();
  const hiringData = data.data;
  return (
    <div>
      <HiringComponent data={hiringData} />
    </div>
  );
};

export default HiringData;
