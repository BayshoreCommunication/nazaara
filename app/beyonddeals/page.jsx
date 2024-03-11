import TopBar from "@/components/TopBar";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import Image from "next/image";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const ExclusiveDeals = async () => {
  const url = `${process.env.API_URL}/api/v1/special-campain`;
  const data = await fetchServerSideData(url);
  console.log("all data", data);
  return (
    <div>
      <section className="bg-white main-container flex items-center justify-center mb-4 lg:mb-8 mt-16 lg:mt-32">
        <Image
          src={data.data[0].imageUrl}
          alt="Special-Promotion-Offer-image"
          width={1080}
          height={1350}
        />
      </section>
    </div>
  );
};

export default ExclusiveDeals;
