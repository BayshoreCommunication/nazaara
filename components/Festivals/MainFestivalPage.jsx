import Image from "next/image";
import Link from "next/link";
import React from "react";

//get all festival data
async function getFestivalData() {
  const res = await fetch(`${process.env.API_URL}/api/v1/festival/published`);
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
        {festivals &&
          festivals.data.map((data) => (
            <div
              key={data._id}
              className="w-full relative overflow-hidden transition-all duration-700 ease-in-out border-2 border-secondary-color"
            >
              <Link href={`/festival/${data.slug}`}>
                {data.featuredImage ? (
                  <Image
                    src={`${data.featuredImage}`}
                    alt={`featured image for ${data.slug}`}
                    width={338}
                    height={438}
                    className="w-full hover:scale-110 transition-all duration-700 ease-in-out"
                  />
                ) : (
                  <Image
                    src={`/images/image-not-found.jpg`}
                    alt="bridal_top"
                    width={338}
                    height={438}
                    className="brightness-75 hover:brightness-100 w-full transition-all duration-700 ease-in-out"
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
