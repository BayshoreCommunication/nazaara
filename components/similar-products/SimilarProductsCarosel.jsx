"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import useWindowDimensions from "@/customhooks/useDimensionWindow";
import SingleCard from "../card/SubCategory/SingleCard";

const SimilarProductsCarosel = ({ categoryData }) => {
  SwiperCore.use([Autoplay]);
  const { width } = useWindowDimensions();
  return (
    <>
      {categoryData && (
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
            {categoryData.map((data, i) => (
              <SwiperSlide key={i}>
                <SingleCard data={data} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
    </>
  );
};

export default SimilarProductsCarosel;
