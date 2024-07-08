import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import Image from "next/image";

const ExclusiveDeals = async () => {
  const url = `${process.env.API_URL}/api/v1/special-campain`;
  const data = await fetchServerSideData(url);
  // console.log("all data", data);
  return (
    <div>
      <section className="bg-white main-container flex items-center justify-center mb-4 lg:mb-8 mt-16 lg:mt-32">
        <Image
          src={data.data[0].imageUrl}
          alt="Special-Promotion-Offer-image"
          width={1080}
          height={1350}
          priority
          blurDataURL={"/images/placeholder_image.jpg"}
          placeholder="blur"
        />
      </section>
    </div>
  );
};

export default ExclusiveDeals;
