import Image from "next/image";
import Link from "next/link";
import React from "react";

//get all festival data
async function getSaleData() {
  const res = await fetch(`${process.env.API_URL}/api/v1/sale/published`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const MainSalePage = async () => {
  const sales = await getSaleData();
  console.log("festival data", sales);
  return (
    <main>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
        {sales &&
          sales.data.map((data) => (
            <div
              key={data._id}
              className="w-full relative overflow-hidden transition-all duration-700 ease-in-out border-2 border-secondary-color"
            >
              <Link href={`/sale/${data.slug}`}>
                {data.featuredImage ? (
                  <Image
                    src={`${data.featuredImage}`}
                    alt={`featured image for ${data.slug}`}
                    width={384}
                    height={438}
                    className="hover:scale-110 transition-all duration-700 ease-in-out w-full h-full"
                  />
                ) : (
                  <Image
                    src={`/images/image-not-found.jpg`}
                    alt="bridal_top"
                    width={338}
                    height={438}
                    className="w-full"
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

export default MainSalePage;
