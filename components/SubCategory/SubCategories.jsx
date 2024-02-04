"use client";
// Import Swiper React components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import SingleCard from "./SingleCard";

const AllSubCategoriesCard = ({ data }) => {
  return (
    <>
      {data && data.data.length > 0 && (
        <>
          <div className="md:hidden">
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              {data?.data?.map((elem) => (
                <SwiperSlide key={elem._id}>
                  <SingleCard subCategoryData={elem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden md:block lg:hidden">
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              {data?.data?.map((elem) => (
                <SwiperSlide key={elem._id}>
                  <SingleCard subCategoryData={elem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden lg:block xl:hidden homeSwiper">
            <Swiper
              modules={[Navigation]}
              loop={true}
              navigation={true}
              slidesPerView={4}
              spaceBetween={10}
              autoplay={{
                delay: 3000,
              }}
              className="mySwiper"
            >
              {data?.data?.map((elem) => (
                <SwiperSlide key={elem._id}>
                  <SingleCard subCategoryData={elem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden xl:block homeSwiper">
            <Swiper
              modules={[Navigation]}
              loop={true}
              navigation={true}
              slidesPerView={5}
              spaceBetween={10}
              autoplay={{
                delay: 3000,
              }}
              className="mySwiper"
            >
              {data?.data?.map((elem, i) => (
                <SwiperSlide key={elem._id}>
                  <SingleCard subCategoryData={elem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </>
  );
};

export default AllSubCategoriesCard;
