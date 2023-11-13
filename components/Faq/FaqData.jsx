import React from "react";
import Faq from "./Faq";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/v1/customization`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const FaqData = async () => {
  const allData = await getData();
  const data = allData.data[0].faq;
  return (
    <div>
      <Faq data={data} />
    </div>
  );
};

export default FaqData;
