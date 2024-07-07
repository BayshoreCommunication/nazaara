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
                <SwiperSlide key={slide._id}>
                  {slide?.imageUrl && (
                    <Link href={slide.link ? slide.link : "/"}>
                      <div className="h-[24vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] 2xl:h-[84vh] relative w-full">
                        <Image
                          src={slide?.imageUrl}
                          alt="Carosel Image"
                          quality={80}
                          fill
                          sizes="100vw"
                          // priority
                          blurDataURL={"/images/carosel_placeholder.png"}
                          placeholder="blur"
                          className="object-cover"
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
