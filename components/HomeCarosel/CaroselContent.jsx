"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Autoplay,
  Navigation,
  EffectCreative,
} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import Image from "next/image";
import Link from "next/link";

const CaroselContent = ({ data }) => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="homeSwiper">
      <Swiper
        modules={[Pagination, Navigation, EffectCreative]}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="mySwiper"
        speed={600}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      >
        <div className="">
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide?.image && (
                <Link href={`/products`}>
                  <div className="h-[28vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] 2xl:h-[84vh] relative w-full">
                    <Image
                      src={slide?.image}
                      alt="My Image"
                      quality={100}
                      fill
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                </Link>
              )}

              {/* <div className="absolute bottom-10 sm:bottom-16 left-10 sm:left-16 text-white">
                <p className="text-xl font-normal">{slide?.topHeading}</p>
                <h2 className="my-4 font-bold text-4xl lg:text-6xl">
                  {slide?.mainHeading}
                </h2>
                <p className="mb-4 text-xl font-thin">{slide?.bottomHeading}</p>
                <Button text="Shop Now" />
              </div> */}
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default CaroselContent;
