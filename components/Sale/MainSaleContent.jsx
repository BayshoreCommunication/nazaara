"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MotionDiv } from "../MotionDiv";
import { useInView } from "react-intersection-observer";

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
      className="w-full relative rounded-sm overflow-hidden h-[15.5rem] sm:h-[22rem] lg:h-[24rem] xl:h-[31rem] 2xl:h-[36rem] shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition-all duration-1000 ease-in-out border-[3px] border-secondary-color"
    >
      <Link href={`/sale/${data.slug}`}>
        {data.featuredImage ? (
          <Image
            src={`${data.featuredImage}`}
            alt={`featured image for ${data.slug}`}
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
            {data.title}
          </p>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default MainSaleContent;
