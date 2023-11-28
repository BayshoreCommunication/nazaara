"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

const DeliveryData = ({ data }) => {
  return (
    <>
      <div className="hidden lg:grid grid-cols-5 gap-x-10 items-center">
        {data.map((data, index) => (
          <Image
            key={index}
            src={data}
            quality={90}
            alt="our_order_delivery_partner_image"
            width={260}
            height={160}
          />
        ))}
      </div>
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
            <SwiperSlide key={image}>
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
            <SwiperSlide key={image}>
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
