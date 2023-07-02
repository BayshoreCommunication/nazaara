"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";

const DeliveryDesktop = () => {
  return (
    <>
      <div className="hidden lg:grid grid-cols-5">
        <Image
          src="/images/delivery/DHL.png"
          alt="bridal_top"
          width={233}
          height={103}
          className="w-full"
        />
        <Image
          src="/images/delivery/FedEx.png"
          alt="bridal_top"
          width={233}
          height={103}
          className="w-full"
        />
        <Image
          src="/images/delivery/Pathao.png"
          alt="bridal_top"
          width={233}
          height={103}
          className="w-full"
        />
        <Image
          src="/images/delivery/SA_Poribahan.png"
          alt="bridal_top"
          width={233}
          height={103}
          className="w-full"
        />
        <Image
          src="/images/delivery/Sunderbon_Curier.png"
          alt="bridal_top"
          width={233}
          height={103}
          className="w-full"
        />
      </div>
      <div className="block lg:hidden">
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
          <SwiperSlide>
            <Image
              src="/images/delivery/DHL.png"
              alt="bridal_top"
              width={233}
              height={103}
              className="w-full"
            />
            <Image
              src="/images/delivery/FedEx.png"
              alt="bridal_top"
              width={233}
              height={103}
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/delivery/Pathao.png"
              alt="bridal_top"
              width={233}
              height={103}
              className="w-full"
            />
            <Image
              src="/images/delivery/SA_Poribahan.png"
              alt="bridal_top"
              width={233}
              height={103}
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/delivery/Sunderbon_Curier.png"
              alt="bridal_top"
              width={233}
              height={103}
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default DeliveryDesktop;
