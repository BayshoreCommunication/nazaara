"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SingleCard from "../card/youMayLike/SingleCard";
import useWindowDimensions from "@/customhooks/useDimensionWindow";

const SimilarProductsCarosel = () => {
  SwiperCore.use([Autoplay]);
  const { width } = useWindowDimensions();
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      slidesPerView={width > 992 ? 4 : 2}
      spaceBetween={10}
      pagination={{ clickable: true }}
    >
      <div>
        <SwiperSlide>
          <SingleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SingleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SingleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SingleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SingleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SingleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SingleCard />
        </SwiperSlide>
        <SwiperSlide>
          <SingleCard />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default SimilarProductsCarosel;
