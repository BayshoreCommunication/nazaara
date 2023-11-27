import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCard = ({ subCategoryData }) => {
  // console.log("image url test", categoryData.url);
  return (
    <>
      {subCategoryData && (
        <div className="w-full relative rounded-sm overflow-hidden h-[15.5rem] sm:h-[20rem] lg:h-[16rem] xl:h-[22rem] 2xl:h-[24rem] shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition-all duration-1000 ease-in-out border-[3px] border-secondary-color">
          <Link href={``}>
            {subCategoryData?.featuredImage ? (
              <Image
                src={`${subCategoryData?.featuredImage}`}
                alt={`featured image for ${subCategoryData?.slug}`}
                fill
                sizes="100vw"
                className="object-cover transition-all duration-1000 ease-in-out hover:scale-110 "
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
              <p className="text-secondary-color text-lg font-bold uppercase">
                {subCategoryData?.title}
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default SingleCard;
