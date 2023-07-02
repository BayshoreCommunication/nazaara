"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import slides from "./sliderData.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Button from "../Button";

const Slider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <div className="">
        <div className="relative">
          {slides.map((slide, k) => (
            <SwiperSlide key={k}>
              <Image
                src={slide?.src}
                alt="My Image"
                width={1000}
                height={600}
                // h-[32rem] lg:h-[36rem] xl:h-[42rem]
                className="w-full h-[20rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[42rem]  border-4 border-secondary-color"
              />
              <div className="absolute bottom-10 sm:bottom-16 left-10 sm:left-16 text-white">
                <p className="text-xl font-normal">{slide?.shipped}</p>
                <h2 className="my-4 font-bold text-4xl lg:text-6xl">
                  {slide?.title}
                </h2>
                <p className="mb-4 text-xl font-thin">{slide?.designer}</p>
                <Button text="Shop Now" />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
