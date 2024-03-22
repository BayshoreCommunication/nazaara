import Image from "next/image";
import Link from "next/link";

const SingleCard = ({ subCategoryData }) => {
  // console.log("subcategory data", subCategoryData);
  return (
    <>
      {subCategoryData && (
        <div className="w-full relative rounded-sm overflow-hidden h-[15.5rem] sm:h-[20rem] lg:h-[16rem] xl:h-[20rem] 2xl:h-[24rem]">
          <Link href={`/category/${subCategoryData?.slug}`}>
            {subCategoryData?.featuredImage ? (
              <Image
                src={`${subCategoryData?.featuredImage}`}
                alt={`featured image for ${subCategoryData?.slug}`}
                fill
                sizes="100vw"
                priority
                blurDataURL={"/images/placeholder_image.jpg"}
                placeholder="blur"
                className="object-cover"
              />
            ) : (
              <Image
                src={`/images/image-not-found.jpg`}
                alt="image_not_found"
                fill
                sizes="100vw"
                priority
                blurDataURL={"/images/placeholder_image.jpg"}
                placeholder="blur"
                className="object-cover"
              />
            )}

            {/* <div className="absolute bottom-10 w-full text-center">
              <p className="text-secondary-color text-lg font-bold uppercase">
                {subCategoryData?.title}
              </p>
            </div> */}
            <div className="absolute bottom-0 w-full text-center text-white overlay_box py-5">
              <p className="text-lg font-bold uppercase">
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
