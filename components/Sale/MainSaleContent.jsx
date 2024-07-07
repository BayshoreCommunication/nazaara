"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { MotionDiv } from "../MotionDiv";

const MainSaleContent = ({ data, i }) => {
  const { ref, inView } = useInView();
  const variants = {
    hidden: { opacity: 0 },
    inView: { opacity: 1 },
  };
  return (
    <MotionDiv
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "inView" : "hidden"}
      transition={{
        ease: "linear",
        duration: i * 0.8,
      }}
      className="w-full relative rounded-sm overflow-hidden h-[15.5rem] sm:h-[22rem] lg:min-h-[20rem] lg:max-h-[22rem] xl:min-h-[24rem] xl:max-[26rem] 2xl:min-h-[30rem] 2xl:max-h-[30rem] shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition-all duration-1000 ease-in-out border-[3px] border-secondary-color"
    >
      <Link href={`/sale/${data.slug}`}>
        {data.featuredImage ? (
          <Image
            src={`${data.featuredImage}`}
            alt={`featured image for ${data.slug}`}
            // fill
            // sizes="100vw"
            width={400}
            height={500}
            // priority
            blurDataURL={"/images/placeholder_image.jpg"}
            placeholder="blur"
            className="w-full h-full transition-all duration-1000 ease-in-out hover:scale-110"
          />
        ) : (
          <Image
            src={`/images/image-not-found.jpg`}
            alt="bridal_top"
            width={400}
            height={500}
            // priority
            blurDataURL={"/images/placeholder_image.jpg"}
            placeholder="blur"
            className="w-full h-full"
          />
        )}

        <div className="absolute bottom-0 w-full text-center text-white overlay_box py-5">
          <p className="text-lg font-bold uppercase">{data.title}</p>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default MainSaleContent;
