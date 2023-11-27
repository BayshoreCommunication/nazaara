import Image from "next/image";
import Link from "next/link";
import React from "react";

//get all festival data
async function getFestivalData() {
  const res = await fetch(`${process.env.API_URL}/api/v1/festival/published`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const MainFestivalPage = async () => {
  const festivals = await getFestivalData();
  //   console.log("festival data", festivals);
  return (
    <main>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 2xl:gap-6">
        {festivals &&
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
                    alt="bridal_top"
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
