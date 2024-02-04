"use client";
import SwiperCore, {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CaroselContent = ({ data }) => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      {data && (
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
            <div>
              {data.map((slide) => (
                <SwiperSlide key={data._id}>
                  {slide?.imageUrl && (
                    <Link href={slide.link}>
                      <div className="h-[28vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] 2xl:h-[84vh] relative w-full">
                        <Image
                          src={slide?.imageUrl}
                          alt="Carosel Image"
                          quality={100}
                          fill
                          sizes="100vw"
                          className="w-full h-auto"
                        />
                      </div>
                    </Link>
                  )}
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default CaroselContent;
