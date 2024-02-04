"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { MotionDiv } from "@/components/MotionDiv";
import { useInView } from "react-intersection-observer";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

const DeliveryData = ({ data }) => {
  const { ref, inView } = useInView();
  const variants = {
    hidden: { opacity: 0 },
    inView: { opacity: 1 },
  };
  return (
    <>
      <MotionDiv
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "inView" : "hidden"}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        className="hidden lg:grid grid-cols-5 gap-x-10 items-center"
      >
        {data.map((data, index) => (
          <Image
            key={data._id}
            src={data}
            quality={90}
            alt="our_order_delivery_partner_image"
            width={260}
            height={160}
          />
        ))}
      </MotionDiv>
      <div className="md:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {data.map((image) => (
            <SwiperSlide key={data._id}>
              {image && (
                <Image
                  src={image}
                  quality={90}
                  alt="our_order_delivery_partner_image"
                  width={260}
                  height={160}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:block lg:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {data.map((image) => (
            <SwiperSlide key={data._id}>
              {image && (
                <Image
                  src={image}
                  quality={90}
                  alt="our_order_delivery_partner_image"
                  width={260}
                  height={160}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DeliveryData;
