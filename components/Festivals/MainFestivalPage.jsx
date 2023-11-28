import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainFestivalPage = async () => {
  const url = `${process.env.API_URL}/api/v1/festival/published`;
  const festivals = await fetchServerSideData(url);
  return (
    <main>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 2xl:gap-6">
        {festivals?.data?.length > 0 &&
          festivals.data.map((data) => (
            <div
              key={data._id}
              className="w-full relative rounded-sm overflow-hidden h-[15.5rem] sm:h-[22rem] lg:h-[24rem] xl:h-[31rem] 2xl:h-[36rem] shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition-all duration-1000 ease-in-out border-[3px] border-secondary-color"
            >
              <Link href={`/festival/${data.slug}`}>
                {data.featuredImage ? (
                  <Image
                    src={`${data.featuredImage}`}
                    alt={`featured image for ${data.slug}`}
                    fill
                    sizes="100vw"
                    className="object-cover transition-all duration-1000 ease-in-out hover:scale-110"
                  />
                ) : (
                  <Image
                    src={`/images/image-not-found.jpg`}
                    alt={`featured image for ${data.slug}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                )}

                <div className="absolute bottom-10 w-full text-center">
                  <p className="text-secondary-color text-lg font-semibold uppercase">
                    {data.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </main>
  );
};

export default MainFestivalPage;
