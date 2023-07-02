"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";

import SingleCard from "./SingleCard";

const AllCategoriesCard = () => {
  return (
    <>
      <div className="lg:hidden card-mobile">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SingleCard />
            <SingleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCard />
            <SingleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCard />
            <SingleCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </>
  );
};

export default AllCategoriesCard;
