"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import ButtonOnHover from "./ButtonOnHover";
import { MotionDiv } from "./MotionDiv";

const BannerContent = ({ data }) => {
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
        duration: 1,
      }}
      className="relative overflow-hidden"
    >
      {data?.imageUrl && (
        <Image
          src={data?.imageUrl}
          alt="bridal_top"
          width={1903}
          height={582}
          quality={90}
          priority
          blurDataURL={"/images/carosel_placeholder.png"}
          placeholder="blur"
          className="w-full h-auto"
        />
      )}

      <div className="text-primary-color py-2 px-4 absolute top-1/2 -translate-y-1/2 right-0 xl:right-20 2xl:right-28 overflow-hidden">
        <div className="flex flex-col gap-1 lg:gap-4 items-start">
          <MotionDiv
            animate={
              inView
                ? {
                    y: 0,
                    scale: 1,
                    rotate: 0,
                  }
                : {
                    y: -500,
                    scale: 1,
                    rotate: 0,
                  }
            }
            transition={{
              duration: 1.3,
            }}
            className="text-xs lg:text-base font-semibold lg:font-medium"
          >
            {data?.topText}
          </MotionDiv>
          <MotionDiv
            animate={
              inView
                ? {
                    x: 0,
                    scale: 1,
                    rotate: 0,
                  }
                : {
                    x: 1000,
                    scale: 1,
                    rotate: 0,
                  }
            }
            transition={{
              duration: 1.3,
            }}
            className="hidden sm:block text-lg lg:text-3xl font-bold"
          >
            {data?.mainHeading}
          </MotionDiv>
          <Link target="_blank" href={data?.btnLink}>
            <MotionDiv
              animate={
                inView
                  ? {
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }
                  : {
                      y: 500,
                      scale: 1,
                      rotate: 0,
                    }
              }
              transition={{
                duration: 1.3,
              }}
            >
              <button className="lg:hidden text-white bg-primary-color px-3 py-1 text-xs lg:text-base rounded-md uppercase flex items-center gap-1">
                <FaPlayCircle /> {data?.btnText}
              </button>
              <span className="hidden lg:block">
                <ButtonOnHover text={data?.btnText} icon={<FaPlayCircle />} />
              </span>
            </MotionDiv>
          </Link>
        </div>
      </div>
    </MotionDiv>
  );
};

export default BannerContent;
